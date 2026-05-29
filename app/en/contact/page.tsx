import { Suspense } from "react";
import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import FilloutEmbed from "@/components/shared/FilloutEmbed";
import { SOCIAL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/en" },
  { name: "Contact", url: "https://piralabs.com.br/en/contact" },
]);

export const metadata: Metadata = {
  title: { absolute: "Contact · PIRA LABS" },
  description:
    "Talk to Pira Labs about INSPIRA, TRANSPIRA, Oxigênio IA Search or FAÍSCA. We respond within two business days.",
  alternates: {
    canonical: "https://piralabs.com.br/en/contact",
    languages: {
      "pt-BR": "https://piralabs.com.br/contato",
    },
  },
  openGraph: {
    title: "Contact · PIRA LABS",
    description: "Talk to PIRA LABS. We respond within two business days.",
    url: "https://piralabs.com.br/en/contact",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PIRA LABS" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/en" },
  { label: "Contact" },
];

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://piralabs.com.br/en/contact#webpage",
  url: "https://piralabs.com.br/en/contact",
  name: "Contact · PIRA LABS",
  description:
    "Talk to Pira Labs about INSPIRA, TRANSPIRA, Oxigênio IA Search or FAÍSCA. We respond within two business days.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "en",
};

export default function EnContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />

      {/* CONTACT-1 · Page header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Talk to PIRA LABS"
          subtitle="Share the context. We respond within two business days."
        />
      </div>

      {/* CONTACT-2+3 · Intro text + Fillout form */}
      <Section variant="default" paddingY="lg">
        <p className="text-off-white/70 font-body mb-8 max-w-xl">
          The more context you share now, the more useful the response.
        </p>
        <Suspense
          fallback={
            <div className="border border-dashed border-off-white/20 rounded-lg p-10 text-center">
              <p className="text-off-white/40 font-body text-sm">
                Loading form...
              </p>
            </div>
          }
        >
          <FilloutEmbed />
        </Suspense>
      </Section>

      {/* CONTACT-4 · Direct contact */}
      <Section variant="dark" paddingY="lg">
        <h2 className="text-xl font-semibold text-off-white mb-8">
          Direct contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-2">
              Email
            </p>
            <a
              href={`mailto:${SOCIAL.EMAIL}`}
              className="text-off-white/85 font-body hover:text-orange transition-colors"
              aria-label="Send email to PIRA LABS"
            >
              {SOCIAL.EMAIL}
            </a>
          </div>

          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-2">
              Location
            </p>
            <p className="text-off-white/85 font-body">São Paulo, Brazil</p>
          </div>

          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-2">
              LinkedIn
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={SOCIAL.PIRA_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-off-white/70 hover:text-orange transition-colors"
                  aria-label="PIRA LABS on LinkedIn (opens in new tab)"
                >
                  PIRA LABS
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.GABRIELA_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-off-white/70 hover:text-orange transition-colors"
                  aria-label="Gabriela Aguiar on LinkedIn (opens in new tab)"
                >
                  Gabriela Aguiar
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.CELSO_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-off-white/70 hover:text-orange transition-colors"
                  aria-label="Celso Gama on LinkedIn (opens in new tab)"
                >
                  Celso Gama
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-2">
              Press and partnerships
            </p>
            <p className="text-sm text-off-white/60 font-body leading-relaxed">
              For press and institutional partnerships, the email above is the
              main channel.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
