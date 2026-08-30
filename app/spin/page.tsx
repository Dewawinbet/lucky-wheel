import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageContainer from '@/components/layout/PageContainer'
import LuckyWheel from '@/components/wheel/LuckyWheel'
import { getServiceSupabase } from '@/lib/supabase/server'
import {
  hashSpinSessionToken,
  SPIN_SESSION_COOKIE,
} from '@/lib/utils/voucher'

async function getValidatedSession() {
  const sessionToken = (await cookies()).get(SPIN_SESSION_COOKIE)?.value

  if (!sessionToken) {
    redirect('/voucher')
  }

  const supabase = getServiceSupabase()
  const tokenHash = hashSpinSessionToken(sessionToken)

  const { data: session, error } = await supabase
    .from('spin_sessions')
    .select(
      'id, expires_at, consumed_at, voucher_id, prize_id, prize_label, prize_amount'
    )
    .eq('token_hash', tokenHash)
    .single()

  if (error || !session) {
    redirect('/voucher')
  }

  if (new Date(session.expires_at).getTime() <= Date.now()) {
    redirect('/voucher')
  }

  const { data: voucher, error: voucherError } = await supabase
    .from('vouchers')
    .select('code')
    .eq('id', session.voucher_id)
    .single()

  if (voucherError || !voucher) {
    redirect('/voucher')
  }

  return {
    ...session,
    voucher,
  }
}

export default async function SpinPage() {
  const session = await getValidatedSession()

  return (
    <PageContainer>
      <Header />

      <main>
        <LuckyWheel
          voucherCode={session.voucher.code}
          initialResult={
            session.prize_id && session.prize_label && session.prize_amount
              ? {
                  prizeId: session.prize_id,
                  label: session.prize_label,
                  amount: session.prize_amount,
                }
              : null
          }
          hasSpun={Boolean(session.consumed_at && session.prize_id)}
        />
      </main>

      <Footer />
    </PageContainer>
  )
}
