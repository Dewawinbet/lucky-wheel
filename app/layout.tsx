import type { Metadata } from 'next'
import Providers from '@/components/layout/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucky Wheel',
  description: 'Spin the wheel and win amazing prizes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}