import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Otimizações de imagem
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
