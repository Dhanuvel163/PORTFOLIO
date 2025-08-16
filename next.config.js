/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/projects', destination: '/' },
    ]
  },
}

module.exports = nextConfig
