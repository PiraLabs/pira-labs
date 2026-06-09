"use client"
import dynamic from "next/dynamic"

const SystemSection = dynamic(
  () => import("./SystemSection").then((mod) => mod.SystemSection),
  {}
)

export function SystemSectionClient() {
  return <SystemSection />
}
