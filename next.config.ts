import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Otimizações de imagem
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.piralabs.com.br' }],
        destination: 'https://piralabs.com.br/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
