
'use client';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { usePayment } from '../utils/paymentHandler';
import { generateWalletInfo, WalletInfo } from '../utils/seedGenerator';
interface GenerateSeedButtonProps {
  onGenerate: (walletInfo: WalletInfo) => void;
  isGenerating: boolean;
  setIsGenerating: (isGenerating: boolean) => void;
}
export default function GenerateSeedButton({ 
  onGenerate, 
  isGenerating, 
  setIsGenerating 
}: GenerateSeedButtonProps) {
  const [error, setError] = useState<string | null>(null);
  const { address, isConnected } = useAccount();
  const { makePayment } = usePayment();
  
  const handleGenerateSeed = async () => {
    if (!isConnected || !address) {
      setError('Please connect your wallet first');
      return;
    }
    
    setError(null);
    setIsGenerating(true);
    
    try {
      // Process payment
      const paymentSuccess = await makePayment();
      
      if (!paymentSuccess) {
        throw new Error('Payment failed. Please try again.');
      }
      
      // Generate new wallet info
      const walletInfo = await generateWalletInfo();
      
      // Call the callback with the generated wallet info
      onGenerate(walletInfo);
    } catch (error) {
      console.error('Error generating seed phrase:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="mt-6">
      <button
        onClick={handleGenerateSeed}
        disabled={!isConnected || isGenerating}
        className="px-6 py-3 text-lg font-medium rounded-lg neon-button w-full sm:w-auto"
      >
        {isGenerating ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          'Generate Seed Phrase ($0.01 USDC)'
        )}
      </button>
      
      {error && (
        <div className="mt-2 text-red-500 text-sm">
          {error}
        </div>
      )}
      
      {!isConnected && (
        <div className="mt-2 text-gray-400 text-sm">
          Connect your wallet to generate seed phrases
        </div>
      )}
    </div>
  );
}
