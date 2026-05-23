import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTAButton } from "@/components/shared/CTAButton";
import { SOCIAL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";
import { buscarPostsSubstack } from "@/lib/substack-rss";

// atualizado 17/05/2026

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Antes da Crise", url: "https://piralabs.com.br/antes-da-crise" },
]);

export const metadata: Metadata = {
  title: {
    absolute: "Antes da Crise | PIRA LABS",
  },
  description:
    "Conteúdo sobre gestão, turnaround e o que ninguém fala antes da empresa precisar de ajuda. Por Celso Gama e Gabriela Aguiar, fundadores da PIRA LABS.",
  alternates: {
    canonical: "https://www.piralabs.com.br/antes-da-crise",
  },
  openGraph: {
    title: "Antes da Crise | PIRA LABS",
    description:
      "Conteúdo sobre gestão, turnaround e o que ninguém fala antes da empresa precisar de ajuda.",
    url: "https://www.piralabs.com.br/antes-da-crise",
    siteName: "PIRA LABS",
    type: "website",
    images: [
      {
        url: "https://www.piralabs.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Antes da Crise — PIRA LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antes da Crise | PIRA LABS",
    description:
      "Conteúdo sobre gestão, turnaround e o que ninguém fala antes da empresa precisar de ajuda.",
    images: ["https://www.piralabs.com.br/og-image.png"],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Antes da Crise" },
];

export default async function AntesdaCrisePage() {
  const edicoes = await buscarPostsSubstack(5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ADC-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Antes da Crise"
          subtitle="Publicação editorial da PIRA LABS no Substack. Parte do universo FAÍSCA."
        />
      </div>

      {/* ADC-2 · Sobre a publicação */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Sobre a publicação
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Antes da Crise é a publicação editorial da PIRA LABS. Vive no
            Substack porque é lá que conteúdo de profundidade encontra leitor
            que escolhe ler.
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

      {/* ADC-3 · Edições mais recentes */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          Edições mais recentes
        </h2>

        {edicoes.length > 0 ? (
          <div className="max-w-2xl space-y-8">
            {edicoes.map((e) => (
              <div
                key={e.href}
                className="border-b border-off-white/10 pb-8 last:border-0"
              >
                <p className="text-xs font-body text-off-white/40 mb-1">
                  {e.data}
                </p>
                <h3 className="text-lg font-semibold text-off-white mb-2">
                  {e.titulo}
                </h3>
                <p className="text-off-white/70 font-body text-sm leading-relaxed mb-4">
                  {e.previa}
                </p>
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-orange hover:text-peach transition-colors"
                  aria-label={`Ler ${e.titulo} no Substack (abre em nova aba)`}
                >
                  Ler no Substack
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl">
            <p className="text-off-white/40 font-body text-sm">
              Edições disponíveis no{" "}
              <a
                href={SOCIAL.SUBSTACK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange hover:text-peach transition-colors"
              >
                Substack
              </a>
              .
            </p>
          </div>
        )}
      </Section>

      {/* ADC-4 · CTA */}
      <Section variant="dark" paddingY="lg">
        <p className="text-off-white/80 font-body mb-8 max-w-xl">
          Antes da Crise vive no Substack. Para receber as edições, basta
          inscrever a partir do próprio Substack.
        </p>
        <div className="flex flex-wrap gap-4">
          <CTAButton
            variant="primary"
            href={SOCIAL.SUBSTACK}
          >
            Ler no Substack
          </CTAButton>
          <CTAButton
            variant="secondary"
            href={`${SOCIAL.SUBSTACK}/subscribe`}
          >
            Receber por email
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
