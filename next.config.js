/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en','pt'],
    defaultLocale: 'pt'
  },
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
