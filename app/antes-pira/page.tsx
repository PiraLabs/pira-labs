import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTAButton } from "@/components/shared/CTAButton";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Antes, Pira", url: "https://piralabs.com.br/antes-pira" },
]);

export const metadata: Metadata = {
  title: {
    absolute: "Antes, Pira · Publicação editorial da PIRA LABS",
  },
  description:
    "Antes, Pira é a publicação editorial da Pira Labs no Substack. Teses, estudos e o que aprendemos operando, incluindo o que não funcionou.",
  alternates: {
    canonical: "https://piralabs.com.br/antes-pira",
  },
  openGraph: {
    title: "Antes, Pira · Pira Labs",
    description:
      "Publicação editorial da Pira Labs no Substack. Teses, estudos e o que aprendemos operando.",
    url: "https://piralabs.com.br/antes-pira",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Antes, Pira" },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/antes-pira#webpage",
  url: "https://piralabs.com.br/antes-pira",
  name: "Antes, Pira · Publicação editorial da PIRA LABS",
  description:
    "Antes, Pira é a publicação editorial da Pira Labs no Substack. Teses, estudos e o que aprendemos operando.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "pt-BR",
};

export default function AntesPiraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* ANTESPIRA-1 · Header da página */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Antes, Pira"
          subtitle="Publicação editorial da Pira Labs no Substack. Parte do universo FAÍSCA."
        />
      </div>

      {/* ANTESPIRA-2 · Sobre a publicação */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Sobre a publicação
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Antes, Pira é a publicação editorial da Pira Labs. Vive no Substack
            porque é lá que conteúdo de profundidade encontra quem escolhe ler.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Aqui publicamos teses sobre Creative Business Turnaround, estudos
            sobre o modelo de trabalho em empresas de serviços, observações
            sobre IA aplicada à operação, governança de risco em ambientes de
            IA, e o que aprendemos operando, incluindo o que não funcionou.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Cada edição assina Gabriela, Celso ou ambos, dependendo do tema. A
            periodicidade é determinada pela existência de algo que mereça ser
            publicado, não por calendário fixo.
          </p>
        </div>
      </Section>

      {/* ANTESPIRA-3 · Posts recentes */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          Edições recentes
        </h2>
        {/* COPY PENDENTE: antes-pira-posts */}
        <div className="max-w-2xl space-y-6">
          <p className="text-off-white/50 font-body text-sm italic">
            Lista de edições recentes a preencher após publicação no Substack.
          </p>
        </div>
      </Section>

      {/* ANTESPIRA-4 · CTAs */}
      <Section variant="default" paddingY="lg">
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton
            variant="primary"
            href="https://piralabs.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ler no Substack
          </CTAButton>
          <CTAButton
            variant="secondary"
            href="https://piralabs.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Receber por email
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
