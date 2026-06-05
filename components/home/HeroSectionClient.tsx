'use client'
import dynamic from 'next/dynamic'

const HeroSection = dynamic(
  () => import('./HeroSection').then((mod) => mod.HeroSection),
  { ssr: false }
)

export function HeroSectionClient() {
  return <HeroSection />
}
