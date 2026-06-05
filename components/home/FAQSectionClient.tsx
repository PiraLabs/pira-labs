"use client"

import dynamic from "next/dynamic"

const FAQSection = dynamic(
  () => import("./FAQSection").then((mod) => mod.FAQSection),
  { ssr: false }
)

export function FAQSectionClient() {
  return <FAQSection />
}
