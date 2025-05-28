
'use client';
import { type ReactNode } from 'react';
import { base } from 'wagmi/chains';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { WagmiConfig, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
// Create wagmi config
const config = createConfig({
  autoConnect: true,
  publicClient: publicProvider(),
});
export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <OnchainKitProvider
        apiKey="EUK6nliWVdB5Nkt4VuNXUsAV7VwBmtwR"
        chain={base}
        config={{
          appearance: {
            name: 'SeedSweep',
            mode: 'dark',
            theme: 'default',
          },
        }}
      >
        {children}
      </OnchainKitProvider>
    </WagmiConfig>
  );
}
