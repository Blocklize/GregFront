/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tokens.1inch.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tokens.1inch.io',
        port: '',
        pathname: '*',
      },
    ],
  }
}

module.exports = nextConfig
