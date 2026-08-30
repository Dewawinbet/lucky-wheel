import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase/server'
import { createSpinResult, pickWeightedPrize } from '@/lib/utils/prize'
import {
  hashSpinSessionToken,
  SPIN_SESSION_COOKIE,
} from '@/lib/utils/voucher'
import type { SpinResult } from '@/types/prize'
import type { AtomicSpinCommitResult, SpinSessionRecord } from '@/types/voucher'

export async function GET() {
  const sessionToken = (await cookies()).get(SPIN_SESSION_COOKIE)?.value

  if (!sessionToken) {
    return NextResponse.json({ valid: false }, { status: 401 })
  }

  const supabase = getServiceSupabase()
  const tokenHash = hashSpinSessionToken(sessionToken)

  const { data: session, error } = await supabase
    .from('spin_sessions')
    .select(
      'id, voucher_id, expires_at, consumed_at, prize_id, prize_label, prize_amount, created_at'
    )
    .eq('token_hash', tokenHash)
    .single()

  if (error || !session) {
    return NextResponse.json({ valid: false }, { status: 401 })
  }

  if (new Date(session.expires_at).getTime() <= Date.now()) {
    return NextResponse.json({ valid: false }, { status: 401 })
  }

  return NextResponse.json({
    valid: true,
    spun: Boolean(session.consumed_at && session.prize_id),
    result:
      session.prize_id && session.prize_label && session.prize_amount
        ? {
            prizeId: session.prize_id,
            label: session.prize_label,
            amount: session.prize_amount,
          }
        : null,
  })
}

export async function POST() {
  const sessionToken = (await cookies()).get(SPIN_SESSION_COOKIE)?.value

  if (!sessionToken) {
    return NextResponse.json(
      { ok: false, message: 'Spin session not found.' },
      { status: 401 }
    )
  }

  const supabase = getServiceSupabase()
  const tokenHash = hashSpinSessionToken(sessionToken)

  const { data: session, error } = await supabase
    .from('spin_sessions')
    .select(
      'id, voucher_id, expires_at, consumed_at, prize_id, prize_label, prize_amount, created_at'
    )
    .eq('token_hash', tokenHash)
    .single<SpinSessionRecord>()

  if (error || !session) {
    return NextResponse.json(
      { ok: false, message: 'Spin session is invalid.' },
      { status: 401 }
    )
  }

  if (new Date(session.expires_at).getTime() <= Date.now()) {
    return NextResponse.json(
      { ok: false, message: 'Spin session has expired.' },
      { status: 401 }
    )
  }

  if (session.consumed_at && session.prize_id && session.prize_label && session.prize_amount) {
    return NextResponse.json({
      ok: true,
      alreadySpun: true,
      result: {
        prizeId: session.prize_id,
        label: session.prize_label,
        amount: session.prize_amount,
      } satisfies Omit<SpinResult, 'angle'>,
    })
  }

  const chosenPrize = pickWeightedPrize()
  const result = createSpinResult(chosenPrize)
  const now = new Date().toISOString()

  const { data: commitRows, error: commitError } = await supabase.rpc(
    'commit_spin_result',
    {
      p_token_hash: tokenHash,
      p_prize_id: result.prizeId,
      p_prize_label: result.label,
      p_prize_amount: result.amount,
      p_committed_at: now,
    }
  )

  const commit = (commitRows?.[0] ?? null) as AtomicSpinCommitResult | null

  if (commitError || !commit) {
    console.error('Spin commit RPC failed', {
      commitError,
      commitRows,
      tokenHash,
      result,
    })

    return NextResponse.json(
      { ok: false, message: 'Could not commit spin result.' },
      { status: 500 }
    )
  }

  if (!commit.ok) {
    const status =
      commit.code === 'voucher_already_used'
        ? 409
        : commit.code === 'expired_session' || commit.code === 'invalid_session'
          ? 401
          : 500

    const message =
      commit.code === 'voucher_already_used'
        ? 'This voucher has already been used.'
        : commit.code === 'expired_session'
          ? 'Spin session has expired.'
          : commit.code === 'invalid_session'
            ? 'Spin session is invalid.'
            : 'Could not commit spin result.'

    return NextResponse.json(
      { ok: false, message },
      { status }
    )
  }

  return NextResponse.json({
    ok: true,
    alreadySpun: commit.code === 'already_spun',
    result: {
      prizeId: commit.prize_id ?? result.prizeId,
      label: commit.prize_label ?? result.label,
      amount: commit.prize_amount ?? result.amount,
    },
  })
}
