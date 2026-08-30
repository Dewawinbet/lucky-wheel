import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageContainer from '@/components/layout/PageContainer'
import Hero from '@/components/landing/Hero'
import PrizePreview from '@/components/landing/PrizePreview'
import HowItWorks from '@/components/landing/HowItWorks'
import Winners, { type LandingWinner } from '@/components/landing/Winners'
import { getServiceSupabase } from '@/lib/supabase/server'

function maskVoucherCode(code: string) {
  return `${code.slice(0, 2)}••••${code.slice(-2)}`
}

async function getRecentWinners(): Promise<LandingWinner[]> {
  const supabase = getServiceSupabase()

  const { data: sessions, error } = await supabase
    .from('spin_sessions')
    .select('id, voucher_id, prize_label, consumed_at')
    .not('consumed_at', 'is', null)
    .order('consumed_at', { ascending: false })
    .limit(6)

  if (error || !sessions || sessions.length === 0) {
    return []
  }

  const voucherIds = Array.from(new Set(sessions.map((session) => session.voucher_id)))
  const { data: vouchers } = await supabase
    .from('vouchers')
    .select('id, code')
    .in('id', voucherIds)

  const codeByVoucherId = new Map(vouchers?.map((voucher) => [voucher.id, voucher.code]) ?? [])

  return sessions
    .filter((session) => session.prize_label && session.consumed_at)
    .map((session) => ({
      id: session.id,
      prizeLabel: session.prize_label as string,
      consumedAt: session.consumed_at as string,
      voucherCode: maskVoucherCode(codeByVoucherId.get(session.voucher_id) ?? 'UNKNOWN'),
    }))
}

export default async function Home() {
  const winners = await getRecentWinners()

  return (
    <PageContainer>
      <Header />

      <main>
        <Hero />
        <PrizePreview />
        <Winners winners={winners} />
        <HowItWorks />
      </main>

      <Footer />
    </PageContainer>
  )
}
