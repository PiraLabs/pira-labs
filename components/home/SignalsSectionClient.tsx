"use client"
import dynamic from "next/dynamic"

const SignalsSection = dynamic(
  () => import("./SignalsSection").then((mod) => mod.SignalsSection),
  {}
)

export function SignalsSectionClient() {
  return <SignalsSection />
}
