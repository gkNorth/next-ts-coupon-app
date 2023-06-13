/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/category-all',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
