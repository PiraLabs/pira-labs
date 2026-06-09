"use client"

import dynamic from "next/dynamic"

const EditorialSection = dynamic(
  () => import("./EditorialSection").then((mod) => mod.EditorialSection),
  {}
)

export function EditorialSectionClient() {
  return <EditorialSection />
}
