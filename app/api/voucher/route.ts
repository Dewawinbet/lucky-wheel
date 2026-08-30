import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase/server'
import {
  createSpinSessionToken,
  getSpinSessionExpiry,
  hashSpinSessionToken,
  isValidVoucherCodeFormat,
  normalizeVoucherCode,
  SPIN_SESSION_COOKIE,
  SPIN_SESSION_TTL_MINUTES,
} from '@/lib/utils/voucher'
import type { VoucherRecord, VoucherValidationResponse } from '@/types/voucher'

export async function POST(request: Request) {
  let body: { code?: string }

  try {
    body = (await request.json()) as { code?: string }
  } catch {
    return NextResponse.json<VoucherValidationResponse>(
      { valid: false, message: 'Invalid request body.' },
      { status: 400 }
    )
  }

  const code = normalizeVoucherCode(body.code || '')

  if (!isValidVoucherCodeFormat(code)) {
    return NextResponse.json<VoucherValidationResponse>(
      { valid: false, message: 'Voucher code format is invalid.' },
      { status: 400 }
    )
  }

  const supabase = getServiceSupabase()

  const { data: voucher, error } = await supabase
    .from('vouchers')
    .select('id, code, used_at, used_by_session_id, created_at')
    .eq('code', code)
    .single<VoucherRecord>()

  if (error || !voucher) {
    console.error('Voucher lookup failed', {
      code,
      error,
    })

    return NextResponse.json<VoucherValidationResponse>(
      { valid: false, message: 'Invalid voucher.' },
      { status: 404 }
    )
  }

  if (voucher.used_at) {
    return NextResponse.json<VoucherValidationResponse>(
      { valid: false, message: 'This voucher has already been used.' },
      { status: 409 }
    )
  }

  const nowIso = new Date().toISOString()
  const { data: existingSession } = await supabase
    .from('spin_sessions')
    .select('id, expires_at')
    .eq('voucher_id', voucher.id)
    .is('consumed_at', null)
    .gt('expires_at', nowIso)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (existingSession) {
    return NextResponse.json<VoucherValidationResponse>(
      {
        valid: false,
        message:
          'This voucher already has an active spin session. Complete that spin or wait for the session to expire.',
      },
      { status: 409 }
    )
  }

  const sessionToken = createSpinSessionToken()
  const tokenHash = hashSpinSessionToken(sessionToken)
  const expiresAt = getSpinSessionExpiry()

  const { error: sessionError } = await supabase.from('spin_sessions').insert({
    voucher_id: voucher.id,
    token_hash: tokenHash,
    expires_at: expiresAt.toISOString(),
  })

  if (sessionError) {
    return NextResponse.json<VoucherValidationResponse>(
      { valid: false, message: 'Could not create a spin session.' },
      { status: 500 }
    )
  }

  const cookieStore = await cookies()
  cookieStore.set(SPIN_SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SPIN_SESSION_TTL_MINUTES * 60,
  })

  return NextResponse.json<VoucherValidationResponse>({
    valid: true,
    message: 'Voucher verified.',
  })
}
