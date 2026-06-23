export const dynamic = 'force-static'

import type { Metadata } from "next"
import FilloutEmbed from "@/components/shared/FilloutEmbed"
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb"

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/en" },
  { name: "Contact", url: "https://piralabs.com.br/en/contact" },
])

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/en/contact",
  name: "Contact Pira Labs",
  description: "The initial conversation is without commitment. Pira Labs listens first and helps name the problem before proposing any solution. Response within 2 business days.",
  publisher: { "@id": "https://piralabs.com.br/#organization" },
  inLanguage: "en",
}

export const metadata: Metadata = {
  title: {
    absolute: "Contact Pira Labs · Talk to Gabriela and Celso",
  },
  description:
    "The initial conversation is without commitment. Pira Labs listens first and helps name the problem before proposing any solution. Response within 2 business days.",
  alternates: {
    canonical: "https://piralabs.com.br/en/contact",
    languages: {
      "pt-BR": "https://piralabs.com.br/contato",
      en: "https://piralabs.com.br/en/contact",
    },
  },
  openGraph: {
    title: "Contact Pira Labs · Talk to Gabriela and Celso",
    description: "The initial conversation is without commitment. Pira Labs listens first and helps name the problem before proposing any solution.",
    url: "https://piralabs.com.br/en/contact",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
}

const INK  = "#05262e"
const SAND = "#e8e0d6"
const TAUPE = "#b0a596"

export default function EnContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* CONTACT-1 · Hero (Sand) */}
      <section style={{ backgroundColor: SAND }} className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-site">
          <h1 className="type-display" style={{ color: INK, fontWeight: 700, marginBottom: "16px", maxWidth: "800px" }}>
            Before proposing, we listen.
          </h1>
          <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 300, lineHeight: 1.6, color: INK, maxWidth: "560px" }}>
            Fill in the form below. Gabriela and Celso respond directly, within 2 business days.
          </p>
        </div>
      </section>

      {/* CONTACT-2 · Body (Sand cont.) */}
      <section style={{ backgroundColor: SAND }} className="pb-16 md:pb-24">
        <div className="container-site">
          <div style={{ maxWidth: "640px", marginBottom: "48px" }}>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "16px" }}>
              The initial conversation is without commitment. There is no pitch, no proposal on the first call. Pira Labs listens to the context and helps name the problem before anything else is suggested.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK }}>
              If INSPIRA makes sense after that conversation, a proposal arrives within 5 business days. If it does not make sense, we say so directly. The window for making good decisions does not stay open indefinitely, but the first step does not need to cost anything.
            </p>
          </div>

          {/* Formulário Fillout */}
          <FilloutEmbed origin="contact_en" title="Pira Labs contact form" />

          {/* Rodapé */}
          <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: `1px solid rgba(5,38,46,0.12)` }}>
            <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: TAUPE }}>
              inspira@piralabs.com.br · piralabs.com.br
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
