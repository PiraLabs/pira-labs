"use client"
import dynamic from "next/dynamic"

const MethodSection = dynamic(
  () => import("./MethodSection").then((mod) => mod.MethodSection),
  {}
)

export function MethodSectionClient() {
  return <MethodSection />
}
