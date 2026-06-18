

import type { Metadata } from "next";
import { HeroSectionClient } from "@/components/home/HeroSectionClient";
import { SystemSectionClient } from "@/components/home/SystemSectionClient";
import { SignalsSectionClient } from "@/components/home/SignalsSectionClient";
import { CBTSectionClient } from "@/components/home/CBTSectionClient";
import { FaiscaSectionClient } from "@/components/home/FaiscaSectionClient"
import { ProofsSectionClient } from "@/components/home/ProofsSectionClient"
import { FoundersSectionClient } from "@/components/home/FoundersSectionClient"
import { EditorialSection } from "@/components/home/EditorialSection"
import { FAQSectionClient } from "@/components/home/FAQSectionClient";
import { FinalCTASectionClient } from "@/components/home/FinalCTASectionClient";
import { organizationSchema } from "@/lib/schemas/organization";
import { websiteSchema } from "@/lib/schemas/website";
import { faqPageSchema } from "@/lib/schemas/service";
import { faqHome } from "@/lib/faq-home";
import { ManifestoSection } from "@/components/home/ManifestoSection";

export const metadata: Metadata = {
  title: { absolute: "Creative Business Turnaround · Pira Labs" },
  description:
    "A Pira Labs é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes que a janela se feche.",
  alternates: {
    canonical: "https://piralabs.com.br/",
    languages: {
      "pt-BR": "https://piralabs.com.br",
      en: "https://piralabs.com.br/en",
    },
  },
  openGraph: {
    title: "Pira Labs · Creative Business Turnaround",
    description:
      "Boutique brasileira de Creative Business Turnaround para empresas de serviços. Entramos antes que o modelo de trabalho vire crise.",
    url: "https://piralabs.com.br/",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs · Creative Business Turnaround" }],
  },
};

const faqItems = faqHome.map((item) => ({
  question: item.pergunta,
  answer: item.resposta,
}));

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/#webpage",
  url: "https://piralabs.com.br/",
  name: "Creative Business Turnaround · Pira Labs",
  description:
    "A Pira Labs é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes que a janela se feche.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "pt-BR",
};

const faqSchema = faqPageSchema(faqItems);

export default function HomePage() {
  return (
    <>
      {/* Schemas globais — Organization + WebSite + WebPage + FAQPage na home */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HOME-1 · HERO */}
      <HeroSectionClient />

      {/* HOME-2 · SINAIS */}
      <SignalsSectionClient />

      {/* HOME-3 · CBT CATEGORIA */}
      <CBTSectionClient />

      {/* HOME-4 · PROVAS */}
      <ProofsSectionClient />

      {/* HOME-5 · FUNDADORES */}
      <FoundersSectionClient />

      {/* HOME-6 · SISTEMA (funde Método + Sistema) */}
      <SystemSectionClient />

      {/* HOME-7 · FAÍSCA TEASER */}
      <FaiscaSectionClient />

      {/* HOME-8 · ANTES, PIRA */}
      <EditorialSection />

      {/* HOME-9 · FAQ */}
      <FAQSectionClient />

      {/* HOME-10 · MANIFESTO */}
      <ManifestoSection />

      {/* HOME-11 · CTA FINAL */}
      <FinalCTASectionClient />

    </>
  );
}
