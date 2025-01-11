/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  transpilePackages: [
    '@ionic/react',
    '@ionic/core',
    '@stencil/core',
    'ionicons'
  ],
  experimental: {
    esmExternals: true
  }
}

module.exports = nextConfig
