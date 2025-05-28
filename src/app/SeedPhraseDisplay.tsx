
'use client';
import { useState } from 'react';
import { WalletInfo } from '../utils/seedGenerator';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
interface SeedPhraseDisplayProps {
  walletInfo: WalletInfo | null;
}
export default function SeedPhraseDisplay({ walletInfo }: SeedPhraseDisplayProps) {
  const [copied, setCopied] = useState(false);
  const { width, height } = useWindowSize();
  
  if (!walletInfo) {
    return null;
  }
  
  const { seedPhrase, address, hasBalance, balance } = walletInfo;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(seedPhrase);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="mt-8 w-full">
      {hasBalance && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.1}
        />
      )}
      
      <div className={`p-4 rounded-lg mb-4 ${hasBalance ? 'neon-border-success' : 'neon-border'}`}>
        <h3 className="text-xl mb-2 font-semibold">
          {hasBalance ? (
            <span className="neon-text-success success-animation">🎉 Wallet Found with {balance} ETH!</span>
          ) : (
            <span className="neon-text">Generated Seed Phrase</span>
          )}
        </h3>
        
        <div className="seed-phrase mb-4">
          {seedPhrase.split(' ').map((word, index) => (
            <span key={index} className="inline-block mr-2 mb-2 px-2 py-1 bg-gray-800 rounded">
              {word}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="text-sm opacity-70 truncate max-w-full">
            Address: {address}
          </div>
          
          <button
            onClick={copyToClipboard}
            className="px-3 py-1 text-sm neon-button rounded"
          >
            {copied ? 'Copied!' : 'Copy Seed Phrase'}
          </button>
        </div>
      </div>
    </div>
  );
}