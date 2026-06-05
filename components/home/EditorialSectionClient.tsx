"use client"

import dynamic from "next/dynamic"

const EditorialSection = dynamic(
  () => import("./EditorialSection").then((mod) => mod.EditorialSection),
  { ssr: false }
)

export function EditorialSectionClient() {
  return <EditorialSection />
}
