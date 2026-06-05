"use client"
import dynamic from "next/dynamic"

const MethodSection = dynamic(
  () => import("./MethodSection").then((mod) => mod.MethodSection),
  { ssr: false }
)

export function MethodSectionClient() {
  return <MethodSection />
}
