"use client"
import dynamic from "next/dynamic"

const CBTSection = dynamic(
  () => import("./CBTSection").then((mod) => mod.CBTSection),
  {}
)

export function CBTSectionClient() {
  return <CBTSection />
}
