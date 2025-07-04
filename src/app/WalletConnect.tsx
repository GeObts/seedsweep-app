
'use client';
import { ConnectButton } from '@coinbase/onchainkit';
import { useAccount } from 'wagmi';
export default function WalletConnect() {
  const { isConnected } = useAccount();
  
  return (
    <div className="wallet-connect">
      <ConnectButton 
        showBalance={false}
      />
      {isConnected && (
        <div className="mt-2 text-xs text-green-400 text-right">
          Wallet connected
        </div>
      )}
    </div>
  );
}
