export const dynamic = 'force-static'

import type { Metadata } from "next"
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb"
import { ORIGINS } from "@/lib/constants"

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/en" },
  { name: "Creative Business Turnaround", url: "https://piralabs.com.br/en/creative-business-turnaround" },
])

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "DefinedTerm"],
  "@id": "https://piralabs.com.br/en/creative-business-turnaround",
  url: "https://piralabs.com.br/en/creative-business-turnaround",
  name: "Creative Business Turnaround",
  description: "Diagnosis and redesign process that helps service businesses act before the window of opportunity closes: when clients, cash and reputation are still intact, but the operating model has started to compromise margin, perceived value and decision-making capacity.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Pira Labs Glossary",
    url: "https://piralabs.com.br/en/glossary",
  },
  publisher: { "@id": "https://piralabs.com.br/#organization" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Creative Business Turnaround?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creative Business Turnaround is the diagnosis and redesign process that helps service businesses act before the window of opportunity closes: when clients, cash and reputation are still intact, but the operating model has started to compromise margin, perceived value and decision-making capacity. Pira Labs named, defines and operates Creative Business Turnaround in Brazil.",
      },
    },
    {
      "@type": "Question",
      name: "How is Creative Business Turnaround different from strategic consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strategic consulting delivers a report and exits. Creative Business Turnaround connects diagnosis to an executable roadmap and, when contracted as execution, stays until results are verified. The core difference is that the method addresses the business as a system, not an isolated area.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of company benefits from Creative Business Turnaround?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Service businesses that have reached a point where growth has stalled, margin has eroded or the founder has become a bottleneck, but the window of opportunity is still open. Key sectors: legal, communications and marketing, specialized consulting and corporate education.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if I am still inside the window of opportunity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The window is open when the business still has clients, cash and reputation at the same time. When any one of the three starts to erode, the window begins to close. The INSPIRA diagnosis exists to measure exactly that, not to confirm the window is open, but to identify how long it will remain so.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: {
    absolute: "Creative Business Turnaround: what it is and when it makes sense · Pira Labs",
  },
  description:
    "Creative Business Turnaround is the diagnosis and redesign process for service businesses that need to act before the window closes. Operated by Pira Labs in Brazil.",
  alternates: {
    canonical: "https://piralabs.com.br/en/creative-business-turnaround",
    languages: {
      "pt-BR": "https://piralabs.com.br/creative-business-turnaround",
      en: "https://piralabs.com.br/en/creative-business-turnaround",
    },
  },
  openGraph: {
    title: "Creative Business Turnaround: what it is and when it makes sense · Pira Labs",
    description: "Creative Business Turnaround is the diagnosis and redesign process for service businesses that need to act before the window closes. Operated by Pira Labs in Brazil.",
    url: "https://piralabs.com.br/en/creative-business-turnaround",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
}

const breadcrumbs = [
  { label: "Home", href: "/en" },
  { label: "Creative Business Turnaround" },
]

const signals = [
  { num: "01", title: "Growth without structure", text: "The business grew faster than its operating design. The team expanded, revenue rose, but operations became dependent on key individuals and constant improvisation." },
  { num: "02", title: "Margin erosion", text: "Revenue continues, but results do not follow. Invisible costs, unbilled scope, hours invested beyond the contract, pricing misaligned with actual cost." },
  { num: "03", title: "Founder as bottleneck", text: "Every important decision passes through the founder. The team waits, delays, cannot move without approval. This is not a leadership failure. It is the absence of a clear delegation framework." },
  { num: "04", title: "Technology that did not deliver", text: "The business invested in AI. The result was accelerating the noise that already existed. Without method first, technology scales the problem." },
  { num: "05", title: "Perceived value disconnected from delivered value", text: "The work is good, but the client does not see what they are paying for. Renewal conversations are always difficult. The business feels it is worth more than it manages to charge." },
]

const INK   = "#05262e"
const TEAL  = "#004757"
const SAND  = "#e8e0d6"
const WHITE = "#F5F5F2"
const TAUPE = "#b0a596"

export default function EnCBTPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* CBT-1 · Hero (Ink) */}
      <div style={{ backgroundColor: INK }}>
        <div style={{ backgroundColor: INK, padding: "12px 0" }}>
          <div className="container-site">
            <ol style={{ display: "flex", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontSize: "0.75rem", color: INK }}>
              {breadcrumbs.map((bc, i) => (
                <li key={i} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  {i > 0 && <span style={{ opacity: 0.4, color: SAND }}>/</span>}
                  {bc.href ? (
                    <a href={bc.href} style={{ color: SAND, textDecoration: "none", opacity: 0.7 }}>{bc.label}</a>
                  ) : (
                    <span style={{ color: SAND, opacity: 0.5 }}>{bc.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="container-site" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TAUPE, marginBottom: "24px" }}>
            Category definition
          </p>
          <h1 className="type-display" style={{ color: WHITE, fontWeight: 700, marginBottom: "24px", maxWidth: "800px" }}>
            Creative Business Turnaround
          </h1>
          <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 300, lineHeight: 1.6, color: SAND, maxWidth: "640px" }}>
            The diagnosis and redesign process that helps service businesses act before the window of opportunity closes: when clients, cash and reputation are still intact, but the operating model has started to compromise margin, perceived value and decision-making capacity.
          </p>
        </div>
      </div>

      {/* CBT-2 · Definition (Sand) */}
      <section style={{ backgroundColor: SAND }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A5568", marginBottom: "32px" }}>
            Definition
          </p>
          <div style={{ maxWidth: "720px" }}>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              <strong style={{ fontWeight: 600 }}>&ldquo;Creative&rdquo;</strong> because the problem in service businesses is rarely just financial or operational. It is about how value is created, delivered and perceived. It demands a reading of the whole system, not just an analysis of indicators.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              <strong style={{ fontWeight: 600 }}>&ldquo;Business&rdquo;</strong> because the focus is the business as a system. Not the product, not the channel, not the tool. The entire business, with its interdependencies, its bottlenecks and its unrealized potential.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              <strong style={{ fontWeight: 600 }}>&ldquo;Turnaround&rdquo;</strong> because it is a real reversal with verifiable results. Not a shelved report. Not a plan that assumes the client will implement on their own. A turnaround. The business operated one way. Now it operates another. The difference is measurable.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              It is the difference between preventive medicine, responsive medicine and palliative medicine. All three treat the same patient. What changes is the moment of intervention, and the moment changes everything: what is still possible, what it costs and what remains afterward. Creative Business Turnaround acts in the first moment, when options are still wide and there is margin to decide without urgency.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "32px" }}>
              The outcome is not the absence of crisis. It is a business that has returned to growing with margin, that makes decisions before they become emergencies and that operates without depending on the constant effort of whoever leads it. A business that breathes.
            </p>
            <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 600, color: INK }}>
              Pira Labs named, defines and operates Creative Business Turnaround in Brazil.
            </p>
          </div>
        </div>
      </section>

      {/* CBT-2B · Comparison (Ink) */}
      <section style={{ backgroundColor: INK }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TAUPE, marginBottom: "32px" }}>
            Comparison
          </p>
          <h2 className="type-h1" style={{ color: WHITE, fontWeight: 600, marginBottom: "16px", maxWidth: "700px" }}>
            Traditional turnaround vs Creative Business Turnaround
          </h2>
          <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: SAND, maxWidth: "720px", marginBottom: "48px" }}>
            The central difference is the moment of entry: traditional turnaround acts in crisis, when options are already reduced. Creative Business Turnaround acts before, when the business still has clients, cash and reputation to move with clarity.
          </p>
          <div style={{ maxWidth: "960px", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: TAUPE, textAlign: "left", padding: "12px 16px 12px 0", borderBottom: "1px solid rgba(232,224,214,0.15)" }}>Dimension</th>
                  <th className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: TAUPE, textAlign: "left", padding: "12px 16px", borderBottom: "1px solid rgba(232,224,214,0.15)" }}>Without intervention now</th>
                  <th className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#eb5c2e", textAlign: "left", padding: "12px 0 12px 16px", borderBottom: "1px solid rgba(232,224,214,0.15)" }}>Creative Business Turnaround</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dim: "When it enters", without: "When the crisis has arrived and the fire has started", with: "Before: when the signals first appear" },
                  { dim: "Context", without: "Business with compromised cash and reduced options", with: "Business with clients, cash and reputation intact" },
                  { dim: "Objective", without: "Stabilize and survive", with: "Redesign and advance" },
                  { dim: "Focus", without: "Cost-cutting and emergency restructuring", with: "Work, value, technology and governance" },
                  { dim: "Cost of inaction", without: "Already high: few choices remain", with: "Low now, high if deferred" },
                  { dim: "Available options", without: "Limited by urgency", with: "Wide: window of opportunity still open" },
                ].map((row, i, arr) => (
                  <tr key={row.dim}>
                    <td className="font-body" style={{ fontSize: "0.875rem", fontWeight: 600, color: SAND, padding: "16px 16px 16px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(232,224,214,0.08)" : "none", verticalAlign: "top" }}>{row.dim}</td>
                    <td className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(232,224,214,0.6)", padding: "16px", borderBottom: i < arr.length - 1 ? "1px solid rgba(232,224,214,0.08)" : "none", verticalAlign: "top" }}>{row.without}</td>
                    <td className="font-body" style={{ fontSize: "0.875rem", fontWeight: 400, color: SAND, padding: "16px 0 16px 16px", borderBottom: i < arr.length - 1 ? "1px solid rgba(232,224,214,0.08)" : "none", verticalAlign: "top" }}>{row.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CBT-3 · For whom (Sand) */}
      <section style={{ backgroundColor: SAND }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A5568", marginBottom: "32px" }}>
            For whom
          </p>
          <h2 className="type-h1" style={{ color: INK, fontWeight: 600, marginBottom: "24px", maxWidth: "700px" }}>
            Which businesses this serves
          </h2>
          <div style={{ maxWidth: "720px" }}>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              Creative Business Turnaround serves service businesses that have reached a point where growth has stalled, margin has eroded or the founder has become a bottleneck, but the window of opportunity is still open.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              The window of opportunity is open when the business still has clients, cash and reputation at the same time. When any one of the three starts to erode, the window begins to close.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              <strong style={{ fontWeight: 600 }}>Key sectors:</strong> legal, communications and marketing, specialized consulting and corporate education. Natural expansion: healthcare, HR, engineering, architecture and other knowledge-intensive professional services.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "32px" }}>
              <strong style={{ fontWeight: 600 }}>The decision-maker profile:</strong> a partner, CEO or president with real autonomy to change. Someone who recognizes the problem, has genuine openness to rethink the model and is not looking for validation of a decision already made.
            </p>
            <p className="font-body" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.75, color: INK }}>
              Not sure if the moment is now?{" "}
              <a href="/faisca/oxigenio-ia-search" style={{ color: INK, fontWeight: 600, textDecoration: "underline" }}>
                The Fa&iacute;sca Oxig&ecirc;nio exists for that.
              </a>{" "}
              Fast BRL 3,500 · Full BRL 5,300.
            </p>
          </div>
        </div>
      </section>

      {/* CBT-4 · Signals (Teal) */}
      <section style={{ backgroundColor: TEAL }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: SAND, marginBottom: "32px" }}>
            The signals
          </p>
          <h2 className="type-h1" style={{ color: WHITE, fontWeight: 600, marginBottom: "16px", maxWidth: "700px" }}>
            The signals that indicate the right moment
          </h2>
          <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: SAND, maxWidth: "640px", marginBottom: "48px" }}>
            Five signals that appear before the crisis. The more that are present, the closer the moment to act.
          </p>
          <div style={{ maxWidth: "960px" }}>
            {signals.map((s, i) => (
              <div
                key={s.num}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start"
                style={{ padding: "32px 0", borderTop: i === 0 ? "none" : "1px solid rgba(232,224,214,0.15)" }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                  <span className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", color: "rgba(232,224,214,0.4)", flexShrink: 0 }}>{s.num}</span>
                  <h3 className="type-h2" style={{ color: WHITE, fontWeight: 600, margin: 0 }}>{s.title}</h3>
                </div>
                <p className="font-body" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.75, color: SAND }}>{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(232,224,214,0.15)" }}>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, color: SAND, marginBottom: "24px" }}>
              If you recognized three or more of these signals, the window of opportunity is still open.
            </p>
            <a href={`/contato?origem=${ORIGINS.CREATIVE_BUSINESS_TURNAROUND_EN}`} className="btn-primary">
              Understand the next step &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
