"use client"

import dynamic from "next/dynamic"

const FoundersSection = dynamic(
  () => import("./FoundersSection").then((mod) => mod.FoundersSection),
  { ssr: false }
)

export function FoundersSectionClient() {
  return <FoundersSection />
}
