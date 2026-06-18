

import type { Metadata } from "next";
import { HeroSectionClient } from "@/components/home/HeroSectionClient";
import { SystemSectionClient } from "@/components/home/SystemSectionClient";
import { SignalsSectionClient } from "@/components/home/SignalsSectionClient";
import { CBTSectionClient } from "@/components/home/CBTSectionClient";
import { FaiscaSectionClient } from "@/components/home/FaiscaSectionClient"
import { ProofsSectionClient } from "@/components/home/ProofsSectionClient"
import { FoundersSectionClient } from "@/components/home/FoundersSectionClient"
import { EditorialSectionClient } from "@/components/home/EditorialSectionClient"
import { FAQSectionClient } from "@/components/home/FAQSectionClient";
import { FinalCTASectionClient } from "@/components/home/FinalCTASectionClient";
import { organizationSchema } from "@/lib/schemas/organization";
import { websiteSchema } from "@/lib/schemas/website";
import { faqPageSchema } from "@/lib/schemas/service";

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

const faqItems = [
  {
    question: "Quanto custa trabalhar com a Pira Labs?",
    answer:
      "Cada projeto é dimensionado individualmente. Os produtos de entrada têm preço público: Oxigênio IA Search Fast R$3.500 / Full R$5.300. Pocket do INSPIRA R$3.900. Imersão em IA R$7.100. Para INSPIRA e TRANSPIRA, o investimento é definido após a primeira conversa.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "Depende do produto. Oxigênio: até 5 dias úteis. Pocket do INSPIRA: sessão única de 1,5h. Imersão em IA: 3 sessões, 5,5h no total. INSPIRA completo: 4 a 6 semanas. TRANSPIRA: entre 2 e 6 meses conforme escopo e configuração.",
  },
  {
    question: "E se eu não sei exatamente o que preciso?",
    answer:
      "A primeira conversa é justamente isso. Sem compromisso. Ajudamos a nomear o problema antes de propor qualquer solução.",
  },
  {
    question: "Como começa o primeiro contato?",
    answer:
      "Você manda mensagem pelo formulário. Em até 2 dias úteis Gabriela e Celso respondem. Conversa inicial de 30 a 45 minutos. Se fizer sentido para os dois lados, proposta em até 5 dias úteis.",
  },
  {
    question: "Vocês atendem empresas internacionais?",
    answer: "Sim. Atendemos em português e inglês.",
  },
];

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

      {/* HOME-3 · PROVAS */}
      <ProofsSectionClient />

      {/* HOME-4 · FUNDADORES */}
      <FoundersSectionClient />

      {/* HOME-5 · CBT CATEGORIA */}
      <CBTSectionClient />

      {/* HOME-7 · SISTEMA (funde Método + Sistema) */}
      <SystemSectionClient />

      {/* HOME-8 · FAÍSCA TEASER */}
      <FaiscaSectionClient />

      {/* HOME-9 · ANTES, PIRA */}
      <EditorialSectionClient />

      {/* HOME-10 · FAQ */}
      <FAQSectionClient />

      {/* HOME-11 · CTA FINAL */}
      <FinalCTASectionClient />

    </>
  );
}
