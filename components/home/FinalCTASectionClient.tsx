'use client'
import dynamic from 'next/dynamic'

const FinalCTASection = dynamic(
  () => import('./FinalCTASection').then(mod => mod.FinalCTASection),
  {}
)

export function FinalCTASectionClient() {
  return <FinalCTASection />
}
