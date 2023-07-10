/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en','pt'],
    defaultLocale: 'pt'
  },
  images: {
    domains: ['www.datocms-assets.com', 'logos.covalenthq.com', 'ipfs.io'],
  }
}

module.exports = nextConfig
