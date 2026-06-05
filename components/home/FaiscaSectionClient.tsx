"use client"
import dynamic from "next/dynamic"

const FaiscaSection = dynamic(
  () => import("./FaiscaSection").then((mod) => mod.FaiscaSection),
  { ssr: false }
)

export function FaiscaSectionClient() {
  return <FaiscaSection />
}
