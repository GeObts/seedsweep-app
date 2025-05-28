
'use client';
import { useState } from 'react';
import WalletConnect from './components/WalletConnect';
import GenerateSeedButton from './components/GenerateSeedButton';
import SeedPhraseDisplay from './components/SeedPhraseDisplay';
import { WalletInfo } from './utils/seedGenerator';
export default function Home() {
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerate = (newWalletInfo: WalletInfo) => {
    setWalletInfo(newWalletInfo);
  };
  
  return (
    <main className="min-h-screen flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold neon-text mb-4 sm:mb-0 text-center sm:text-left">
            SeedSweep
          </h1>
          <WalletConnect />
        </div>
        
        <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800">
          <h2 className="text-xl sm:text-2xl mb-4 neon-text-secondary">
            Pay $0.01 to generate a wallet… maybe you get lucky
          </h2>
          
          <p className="text-gray-300 mb-6">
            Each click generates a random BIP39 12-word seed phrase and checks if the corresponding wallet has any ETH balance. Who knows, you might get lucky!
          </p>
          
          <GenerateSeedButton 
            onGenerate={handleGenerate} 
            isGenerating={isGenerating}
            setIsGenerating={setIsGenerating}
          />
          
          <SeedPhraseDisplay walletInfo={walletInfo} />
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            All seed phrases are generated client-side and never stored or transmitted.
          </p>
          <p className="mt-2">
            Built with OnchainKit SDK v0.38.13
          </p>
        </div>
      </div>
    </main>
  );
}
