export const dynamic = 'force-static'

import type { Metadata } from "next"
import Image from "next/image"
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb"
import { ORIGINS } from "@/lib/constants"

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/en" },
  { name: "About", url: "https://piralabs.com.br/en/about" },
])

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/en/about",
  name: "About Pira Labs · Gabriela Aguiar and Celso Gama",
  description: "Pira Labs is a Brazilian boutique consultancy in Creative Business Turnaround. Founded by Gabriela Aguiar and Celso Gama. Both founders present from diagnosis through delivery.",
  publisher: { "@id": "https://piralabs.com.br/#organization" },
  inLanguage: "en",
}

const gabrielaSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://piralabs.com.br/en/about#gabriela-aguiar",
  name: "Gabriela Aguiar",
  jobTitle: "CEO and Co-founder",
  worksFor: { "@id": "https://piralabs.com.br/#organization" },
  sameAs: [
    "https://www.linkedin.com/in/gabrielaaguiarvs/",
    "https://www.wikidata.org/wiki/Q138846653",
    "https://www.crunchbase.com/person/gabriela-aguiar-a12a",
  ],
}

const celsoSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://piralabs.com.br/en/about#celso-gama",
  name: "Celso Gama",
  jobTitle: "COO and Co-founder",
  worksFor: { "@id": "https://piralabs.com.br/#organization" },
  sameAs: [
    "https://www.linkedin.com/in/celsogama/",
    "https://www.wikidata.org/wiki/Q138846692",
    "https://www.crunchbase.com/person/celso-gama",
  ],
}

export const metadata: Metadata = {
  title: {
    absolute: "About Pira Labs · Gabriela Aguiar and Celso Gama",
  },
  description:
    "Pira Labs is a Brazilian boutique consultancy in Creative Business Turnaround. Founded by Gabriela Aguiar and Celso Gama. Both founders present from diagnosis through delivery.",
  alternates: {
    canonical: "https://piralabs.com.br/en/about",
    languages: {
      "pt-BR": "https://piralabs.com.br/sobre",
      en: "https://piralabs.com.br/en/about",
    },
  },
  openGraph: {
    title: "About Pira Labs · Gabriela Aguiar and Celso Gama",
    description: "Pira Labs is a Brazilian boutique consultancy in Creative Business Turnaround. Both founders present from diagnosis through delivery.",
    url: "https://piralabs.com.br/en/about",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
}

const INK   = "#05262e"
const TEAL  = "#004757"
const SAND  = "#e8e0d6"
const WHITE = "#F5F5F2"
const TAUPE = "#b0a596"

export default function EnAboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gabrielaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(celsoSchema) }} />

      {/* ABOUT-1 · What Pira Labs is (Sand) */}
      <section style={{ backgroundColor: SAND }} className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-site">
          <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A5568", marginBottom: "24px" }}>
            The boutique
          </p>
          <h1 className="type-display" style={{ color: INK, fontWeight: 700, marginBottom: "32px", maxWidth: "800px" }}>
            Boutique from the inside, ecosystem from the outside.
          </h1>
          <div style={{ maxWidth: "720px" }}>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "16px" }}>
              Pira Labs is a Brazilian boutique consultancy specializing in Creative Business Turnaround for service businesses. Both founders are present in every engagement, from the first conversation through verified delivery. There are no junior analysts, no delegated execution, no report handed off for the client to implement alone.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "16px" }}>
              The clients are service businesses, B2B, with revenue between BRL 10M and BRL 80M and between 25 and 150 people. The common denominator: a founder who has built something real, sees the next level clearly, and has run into the limits of what the current model can sustain.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK }}>
              Boutique by choice, not by limitation. The ecosystem expands the reach. The two founders remain the delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT-2 · Gabriela Aguiar (Teal) */}
      <section style={{ backgroundColor: TEAL }} className="py-16 md:py-24">
        <div className="container-site">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full md:w-2/5">
              <Image
                src="/Gabi2.png"
                alt="Gabriela Aguiar, CEO and Co-founder of Pira Labs"
                width={600}
                height={750}
                className="w-full object-cover"
                priority
              />
            </div>
            <div className="w-full md:w-3/5">
              <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: SAND, marginBottom: "16px" }}>
                CEO and co-founder · Leads INSPIRA
              </p>
              <h2 className="type-h1" style={{ color: WHITE, fontWeight: 600, marginBottom: "8px" }}>
                Gabriela Aguiar
              </h2>
              <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, color: SAND, marginBottom: "32px" }}>
                CEO and co-founder
              </p>
              <div style={{ maxWidth: "560px" }}>
                <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: WHITE, marginBottom: "16px" }}>
                  Gabriela reads from the outside in. She navigated global innovation ecosystems before understanding what that movement meant for Brazilian service businesses, and that navigation is what makes the INSPIRA diagnosis work: six layers read in sequence, with each one informing the next, before any problem is named.
                </p>
                <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: WHITE, marginBottom: "16px" }}>
                  Her background spans global innovation ecosystems, executive education, AI, entrepreneurship and the future of work. Professor at FIAP and Instituto Cidades Responsivas. Mentor at FGV Ventures and German Accelerator. Member of the Angel Investor Club. MIT Universal AI Foundational Modules (in progress, 2026). PMP. LEED Green Associate. MBA from Insper.
                </p>
                <blockquote style={{ borderLeft: "2px solid #eb5c2e", paddingLeft: "24px", margin: "32px 0" }}>
                  <p className="font-display" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.5, color: WHITE }}>
                    &ldquo;The diagnosis does not invent the problem. It <span style={{ color: "#eb5c2e" }}>reveals</span> what the founder already sensed but had not yet found the words to name.&rdquo;
                  </p>
                </blockquote>
                <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                  <a href="https://www.linkedin.com/in/gabrielaaguiarvs/" target="_blank" rel="noopener noreferrer" className="font-body" style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: SAND, textDecoration: "none" }}>
                    LinkedIn &rarr;
                  </a>
                  <a href="https://www.crunchbase.com/person/gabriela-aguiar-a12a" target="_blank" rel="noopener noreferrer" className="font-body" style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: SAND, textDecoration: "none" }}>
                    Crunchbase &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT-3 · Celso Gama (Ink) */}
      <section style={{ backgroundColor: INK }} className="py-16 md:py-24">
        <div className="container-site">
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-start">
            <div className="w-full md:w-2/5">
              <Image
                src="/celso-gama.png"
                alt="Celso Gama, COO and Co-founder of Pira Labs"
                width={600}
                height={750}
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-3/5">
              <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TAUPE, marginBottom: "16px" }}>
                COO and co-founder · Leads TRANSPIRA
              </p>
              <h2 className="type-h1" style={{ color: WHITE, fontWeight: 600, marginBottom: "8px" }}>
                Celso Gama
              </h2>
              <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, color: TAUPE, marginBottom: "32px" }}>
                COO and co-founder
              </p>
              <div style={{ maxWidth: "560px" }}>
                <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: WHITE, marginBottom: "16px" }}>
                  Celso thinks through trajectory and demonstrates through context. Twenty-five years coordinating complex operations, from regional hubs of multinationals to service businesses of different sizes and stages, taught him where rupture points appear before they show up in any report.
                </p>
                <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: WHITE, marginBottom: "16px" }}>
                  His background covers complex operations, growth, P&amp;L management, business development, operational governance and AI application. MIT Applied AI Certificate Program (in progress, 2026). MBA from Insper. LLB candidate at Mackenzie. 25 years in services, agencies and large-scale projects.
                </p>
                <blockquote style={{ borderLeft: "2px solid #eb5c2e", paddingLeft: "24px", margin: "32px 0" }}>
                  <p className="font-display" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.5, color: WHITE }}>
                    &ldquo;I enter the operation to work alongside the team, not for the team. When I leave, what remains working was built by those who will operate it. Results that are <span style={{ color: "#eb5c2e" }}>verified</span>, not assumed.&rdquo;
                  </p>
                </blockquote>
                <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                  <a href="https://www.linkedin.com/in/celsogama/" target="_blank" rel="noopener noreferrer" className="font-body" style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: SAND, textDecoration: "none" }}>
                    LinkedIn &rarr;
                  </a>
                  <a href="https://www.crunchbase.com/person/celso-gama" target="_blank" rel="noopener noreferrer" className="font-body" style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: SAND, textDecoration: "none" }}>
                    Crunchbase &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT-4 · Final CTA (Sand) */}
      <section style={{ backgroundColor: SAND }} className="py-16 md:py-24">
        <div className="container-site">
          <h2 className="type-h2" style={{ color: INK, fontWeight: 300, lineHeight: 1.2, marginBottom: "40px", maxWidth: "640px" }}>
            The conversation starts without commitment. If it makes sense, we move from there.
          </h2>
          <a
            href={`/en/contact?origem=${ORIGINS.CONTACT_EN}`}
            className="btn-primary"
          >
            Breathe &rarr;
          </a>
        </div>
      </section>
    </>
  )
}
