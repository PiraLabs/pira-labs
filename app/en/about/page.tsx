export const dynamic = 'force-static';

import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { FounderProfile } from "@/components/shared/FounderProfile";
import { MediaKit } from "@/components/shared/MediaKit";
import { SOCIAL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/en" },
  { name: "About", url: "https://piralabs.com.br/en/about" },
]);

export const metadata: Metadata = {
  title: { absolute: "About · PIRA LABS · Gabriela Aguiar and Celso Gama" },
  description:
    "Pira Labs is a Brazilian boutique of Creative Business Turnaround. Meet Gabriela Aguiar and Celso Gama, the founders.",
  alternates: {
    canonical: "https://piralabs.com.br/en/about",
    languages: {
      "pt-BR": "https://piralabs.com.br/sobre",
    },
  },
  openGraph: {
    title: "About · PIRA LABS · Gabriela Aguiar and Celso Gama",
    description:
      "Brazilian boutique of Creative Business Turnaround. Gabriela and Celso in each project, from diagnosis to delivery.",
    url: "https://piralabs.com.br/en/about",
    locale: "en_US",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/en" },
  { label: "About" },
];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://piralabs.com.br/en/about#webpage",
  url: "https://piralabs.com.br/en/about",
  name: "About · PIRA LABS · Gabriela Aguiar and Celso Gama",
  description:
    "Pira Labs is a Brazilian boutique of Creative Business Turnaround. Meet Gabriela Aguiar and Celso Gama, the founders.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  about: [
    { "@id": "https://piralabs.com.br/sobre#gabriela" },
    { "@id": "https://piralabs.com.br/sobre#celso" },
  ],
  inLanguage: "en",
};

export default function EnAboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />

      {/* ABOUT-1 · Page header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="About PIRA LABS"
          subtitle="Brazilian boutique of Creative Business Turnaround for service businesses that need to act before the window closes."
        />
      </div>

      {/* ABOUT-2 · Why Pira Labs exists */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Pira Labs exists for the moment when the founder realizes that the
            business model has started costing more than it delivers, and that
            changing while the company still has clients, cash and reputation is
            different from changing when there is no longer a choice.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Boutique is not a euphemism for small. It is a deliberate choice.
            Every project has Gabriela and Celso from diagnosis to delivery. No
            intermediary layer between the person who understands the problem
            and the person who solves it.
          </p>
        </div>
      </Section>

      {/* ABOUT-3 · Gabriela Aguiar */}
      <Section variant="highlighted" paddingY="lg">
        <FounderProfile
          name="Gabriela Aguiar"
          role="CEO and co-founder · Leads INSPIRA"
          photoSrc="/gabriela-aguiar.jpg"
          photoAlt="Gabriela Aguiar, CEO and co-founder of Pira Labs"
          bio={[
            "Gabriela reads what is arriving before it arrives in Brazil. A career built inside the networks where technology, innovation and education intersect: Google, Meta, X, Amazon, among others. Not as an observer. As an active part of the projects, programs and connections that define where the market is heading.",
            "Faculty in MBA programs at FIAP and Instituto Cidades Responsivas. Startup mentor at FGV Ventures. Universal AI Foundational Modules (MIT, in progress, 2026).",
            "What she brings to each project is not repertoire applied from the outside. It is the ability to name what the local market has not yet named. Leads INSPIRA.",
          ]}
          credentials={[
            "Faculty in MBA programs at FIAP and Instituto Cidades Responsivas",
            "Startup mentor at FGV Ventures",
            "Universal AI Foundational Modules (MIT, in progress, 2026)",
          ]}
          linkedinHref={SOCIAL.GABRIELA_LINKEDIN}
        />
        <blockquote className="mt-10 border-l-2 border-orange/40 pl-6 max-w-2xl">
          <p className="font-display text-xl md:text-2xl italic text-off-white/80 leading-relaxed">
            &ldquo;The diagnosis does not invent the problem. It reveals what the
            founder already felt but had not yet found words to name.&rdquo;
          </p>
        </blockquote>
      </Section>

      {/* ABOUT-4 · Celso Gama */}
      <Section variant="default" paddingY="lg">
        <FounderProfile
          name="Celso Gama"
          role="COO and co-founder · Leads TRANSPIRA"
          photoSrc="/celso-gama.jpg"
          photoAlt="Celso Gama, COO and co-founder of Pira Labs"
          bio={[
            "Celso enters when the operation needs someone who has been there before. More than 25 years inside complex operations: from multinationals to service businesses that grew, stalled, turned around.",
            "MBA from Insper. Postgraduate in Marketing from ESPM and Advertising from FAAP. Law undergraduate student at Mackenzie. Applied AI Certificate Program (MIT, in progress, 2026).",
            "He knows where to put technology and where to put people because he has gotten both wrong before. Leads TRANSPIRA. Enters the operation, works alongside the team, leaves when the agreed results are verified.",
          ]}
          credentials={[
            "Margin from -64% to +15% in a beverages multinational account, without revenue increase",
            "R$16M to R$163M in 24 months coordinating 600 people and 100 vendors",
            "Applied AI Certificate Program (MIT, in progress, 2026)",
          ]}
          linkedinHref={SOCIAL.CELSO_LINKEDIN}
        />
        <blockquote className="mt-10 border-l-2 border-orange/40 pl-6 max-w-2xl">
          <p className="font-display text-xl md:text-2xl italic text-off-white/80 leading-relaxed">
            &ldquo;Pira Labs does not leave when the deadline ends. It leaves when
            the agreed results are verified.&rdquo;
          </p>
        </blockquote>
      </Section>

      {/* ABOUT-5 · How the two lenses work together */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          How the two lenses work together
        </h2>
        <div className="max-w-3xl mb-10">
          <Image
            src="/nos.png"
            alt="Gabriela Aguiar and Celso Gama, co-founders of Pira Labs"
            width={800}
            height={533}
            className="rounded-lg w-full object-cover"
            priority={false}
          />
        </div>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Gabriela reads context, signals and market movements before they
            become obvious demand. Celso reads operations, bottlenecks and
            consequences before they become visible losses. Separately, these
            lenses produce partial diagnosis. Together, they show where the
            business is stuck and what needs to change to move forward without
            breaking what already works.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            It is not a division of labor. It is methodology: real diagnosis
            requires both perspectives at the same time. Gabriela names what is
            coming before it arrives. Celso executes the redesign inside the
            operation, with the team that will operate afterwards.
          </p>
        </div>
      </Section>

      {/* ABOUT-6 · What this changes for the client */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl">
          <p className="text-off-white/85 font-body leading-relaxed text-lg">
            Whoever hires Pira Labs does not receive a partner in the sale and
            an analyst in the delivery. They receive Gabriela and Celso from
            diagnosis to close.
          </p>
        </div>
      </Section>

      {/* ABOUT-7 · Press, speaking and partnerships */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Press, speaking and partnerships
        </h2>
        <MediaKit className="max-w-2xl" />
      </Section>

      {/* ABOUT-8 · Final CTA */}
      <section className="bg-ink section-padding">
        <div className="container-site text-center">
          <p className="font-display text-2xl md:text-4xl italic text-orange mb-10 leading-snug max-w-2xl mx-auto">
            There is a next level for your business. What stands between you and it, we
            discover together.
          </p>
          <div className="flex flex-col items-center gap-2">
            <a
              href="/en/contact?origem=about_en"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded bg-orange text-ink font-body font-medium text-base transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              Breathe
            </a>
            <p className="text-sm font-body text-off-white/60">
              Initial conversation, no commitment. We respond within two business days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
