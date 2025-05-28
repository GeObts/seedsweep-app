
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.walletconnect.com https://*.coinbase.com https://*.walletconnect.org; style-src 'self' 'unsafe-inline'; connect-src * https://*.walletconnect.com https://*.coinbase.com https://*.walletconnect.org wss://*.walletconnect.org; img-src 'self' data: https:; font-src 'self' data:; frame-src 'self' https://*.walletconnect.com https://*.coinbase.com https://*.walletconnect.org;"
            }
          ]
        }
      ];
    }
  };
  module.exports = nextConfig;
  