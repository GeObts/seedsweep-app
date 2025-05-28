
import './globals.css';
import '@coinbase/onchainkit/styles.css';
import { Providers } from './providers';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'SeedSweep - Random BIP39 Seed Phrase Generator',
  description: 'Generate random BIP39 seed phrases for $0.01 USDC each',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
