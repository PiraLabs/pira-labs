'use client'
import dynamic from 'next/dynamic'

const HeroSection = dynamic(
  () => import('./HeroSection').then((mod) => mod.HeroSection),
  {}
)

export function HeroSectionClient() {
  return <HeroSection />
}
