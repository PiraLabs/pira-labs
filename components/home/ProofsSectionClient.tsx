"use client"

import dynamic from "next/dynamic"

const ProofsSection = dynamic(
  () => import("./ProofsSection").then((mod) => mod.ProofsSection),
  {}
)

export function ProofsSectionClient() {
  return <ProofsSection />
}
