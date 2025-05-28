import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SeedSweep - Crypto Wallet Generator',
  description: 'Generate secure cryptocurrency wallet seed phrases',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
