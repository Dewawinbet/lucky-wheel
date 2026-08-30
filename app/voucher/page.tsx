import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageContainer from '@/components/layout/PageContainer'
import VoucherEntry from '@/components/voucher/VoucherEntry'

export default function VoucherPage() {
  return (
    <PageContainer>
      <Header />

      <main>
        <VoucherEntry />
      </main>

      <Footer />
    </PageContainer>
  )
}
