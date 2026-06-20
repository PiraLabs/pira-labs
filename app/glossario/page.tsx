import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/shared/Section"
import { PageHeader } from "@/components/shared/PageHeader"
import { CTAButton } from "@/components/shared/CTAButton"
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb"

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Vocabulário", url: "https://piralabs.com.br/glossario" },
])

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://piralabs.com.br/glossario#webpage",
  name: "Vocabulário Pira Labs",
  description: "Os termos que a Pira Labs usa, o que significam e por que a diferença importa.",
  url: "https://piralabs.com.br/glossario",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "pt-BR",
  mainEntity: {
    "@type": "DefinedTermSet",
    name: "Vocabulário Pira Labs",
    url: "https://piralabs.com.br/glossario",
    hasDefinedTerm: [
      { "@type": "DefinedTerm", name: "Creative Business Turnaround", url: "https://piralabs.com.br/glossario/creative-business-turnaround" },
      { "@type": "DefinedTerm", name: "Janela de oportunidade", url: "https://piralabs.com.br/glossario/janela-de-oportunidade" },
      { "@type": "DefinedTerm", name: "Antes da crise", url: "https://piralabs.com.br/glossario/antes-da-crise" },
    ],
  },
}

export const metadata: Metadata = {
  title: { absolute: "Vocabulário · Pira Labs" },
  description: "Os termos que a Pira Labs usa, o que significam e por que a diferença importa.",
  alternates: { canonical: "https://piralabs.com.br/glossario" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Vocabulário · Pira Labs",
    description: "Os termos que a Pira Labs usa, o que significam e por que a diferença importa.",
    url: "https://piralabs.com.br/glossario",
    siteName: "Pira Labs",
    locale: "pt_BR",
    type: "website",
  },
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Vocabulário" },
]

const termos = [
  {
    slug: "creative-business-turnaround",
    label: "Creative Business Turnaround",
    resumo: "Categoria de atuação que aplica a inteligência do turnaround antes da emergência, quando a empresa ainda tem clientes, caixa e reputação para agir com clareza e com opções.",
  },
  {
    slug: "janela-de-oportunidade",
    label: "Janela de oportunidade",
    resumo: "O período em que uma empresa ainda tem condições de agir com clareza, opções e margem para testar, corrigir e decidir sem operar no limite.",
  },
  {
    slug: "antes-da-crise",
    label: "Antes da crise",
    resumo: "O território temporal em que a Pira Labs atua: quando a empresa ainda tem clientes, caixa e reputação para agir, antes que a janela de oportunidade se feche.",
  },
]

export default function Glossario() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Vocabulário."
          subtitle="Os termos que usamos, o que significam e por que a diferença importa."
        />
      </div>

      <Section variant="ink" paddingY="lg">
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/75 font-body leading-relaxed">
            Algumas palavras usadas em consultoria, transformação e tecnologia carregam décadas de uso impreciso. Quando a Pira Labs usa um termo, usa com definição própria. Esta página registra o que cada palavra significa aqui, e o que ela não significa.
          </p>
        </div>
      </Section>

      <Section variant="teal" paddingY="lg">
        <div className="max-w-3xl space-y-2">
          {termos.map(({ slug, label, resumo }) => (
            <Link
              key={slug}
              href={`/glossario/${slug}`}
              className="group flex flex-col gap-2 border-b border-sand/10 py-8 hover:border-sand/30 transition-colors"
            >
              <span className="font-display text-off-white group-hover:text-orange transition-colors" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 500 }}>
                {label}
              </span>
              <span className="text-off-white/60 font-body leading-relaxed" style={{ fontSize: "15px" }}>
                {resumo}
              </span>
              <span className="text-orange font-body font-semibold uppercase mt-1" style={{ fontSize: "11px", letterSpacing: "0.15em" }}>
                Ler definição completa →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="ink" paddingY="lg">
        <div className="max-w-2xl space-y-6">
          <p className="font-display text-off-white" style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, lineHeight: 1.35 }}>
            Quer entender se o vocabulário da Pira descreve o que você está vivendo?
          </p>
          <CTAButton
            href="/contato"
            origin="glossario_hub"
            variant="primary"
          >
            RESPIRE
          </CTAButton>
        </div>
      </Section>
    </>
  )
}
