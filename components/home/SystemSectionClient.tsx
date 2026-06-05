"use client"
import dynamic from "next/dynamic"

const SystemSection = dynamic(
  () => import("./SystemSection").then((mod) => mod.SystemSection),
  { ssr: false }
)

export function SystemSectionClient() {
  return <SystemSection />
}
