export const dynamic = 'force-static'

import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/shared/Section"
import { PageHeader } from "@/components/shared/PageHeader"
import { CTAButton } from "@/components/shared/CTAButton"
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb"

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Vocabulário", url: "https://piralabs.com.br/glossario" },
  { name: "Antes da crise", url: "https://piralabs.com.br/glossario/antes-da-crise" },
])

const termSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://piralabs.com.br/glossario/antes-da-crise#term",
  name: "Antes da crise",
  description: "O território temporal em que a Pira Labs atua: quando a empresa ainda tem clientes, caixa e reputação para agir, antes que a janela de oportunidade se feche.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Vocabulário Pira Labs",
    url: "https://piralabs.com.br/glossario",
  },
  url: "https://piralabs.com.br/glossario/antes-da-crise",
  mainEntityOfPage: "https://piralabs.com.br/glossario/antes-da-crise",
}

export const metadata: Metadata = {
  title: { absolute: "Antes da crise · Vocabulário · Pira Labs" },
  description: "O território temporal em que a Pira Labs atua: quando a empresa ainda tem clientes, caixa e reputação para agir, antes que a janela de oportunidade se feche.",
  alternates: { canonical: "https://piralabs.com.br/glossario/antes-da-crise" },
  openGraph: {
    title: "Antes da crise · Pira Labs",
    description: "O que significa atuar antes da crise, como esse conceito estrutura toda a proposta da Pira Labs e a distinção com a publicação Antes, Pira.",
    url: "https://piralabs.com.br/glossario/antes-da-crise",
    siteName: "Pira Labs",
    locale: "pt_BR",
    type: "article",
  },
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Vocabulário", href: "/glossario" },
  { label: "Antes da crise" },
]

export default function AntesDaCrise() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(termSchema) }} />

      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Antes da crise"
          subtitle="O território temporal em que a Pira Labs atua: quando a empresa ainda tem clientes, caixa e reputação para agir."
        />
      </div>

      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl space-y-6">
          <p className="font-body font-semibold uppercase text-off-white/50" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>DEFINIÇÃO CANÔNICA</p>
          <p className="text-off-white/85 font-body leading-relaxed">
            "Antes da crise" é o território temporal em que a Pira Labs atua. Não é uma metáfora motivacional nem um slogan. É uma descrição precisa de quando o trabalho do Creative Business Turnaround é possível e quando produz o resultado que promete.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Antes da crise significa: quando a empresa ainda tem clientes, caixa e reputação para agir. Quando o modelo de trabalho começou a custar caro demais, mas o negócio ainda tem fôlego para escolher como responder. Quando os sinais estão presentes, mas a emergência ainda não tomou conta.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            É o oposto de "depois que a crise explodiu", que é quando a maioria das consultorias entra. E é diferente de "quando tudo vai bem", que é quando nenhuma intervenção faz sentido. O território da Pira é o intervalo entre os dois: quando ainda dá para mudar com opções.
          </p>
        </div>
      </Section>

      <Section variant="highlighted" paddingY="lg">
        <div className="max-w-3xl space-y-6">
          <p className="font-body font-semibold uppercase text-sand/50" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>A DISTINÇÃO ENTRE O CONCEITO E A PUBLICAÇÃO</p>
          <p className="text-off-white/85 font-body leading-relaxed">
            A Pira Labs publica no Substack a newsletter <Link href="/antes-pira" className="text-orange hover:underline">Antes, Pira</Link>. A URL da publicação é <code className="text-sand/70 text-sm">/antes-pira</code>.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Esta página trata de "antes da crise" como conceito estratégico e posicionamento de marca. As duas coisas se conectam: a publicação desenvolve o repertório, o conceito organiza o posicionamento. Mas são ativos distintos, com rotas distintas.
          </p>
        </div>
      </Section>

      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl space-y-8">
          <p className="font-body font-semibold uppercase text-off-white/50" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>COMO O CAMPO SEMÂNTICO "ANTES" ESTRUTURA TODA A PROPOSTA DA PIRA</p>
          <div className="space-y-6">
            {[
              { termo: "Antes da crise", def: "O território de atuação. Quando o negócio ainda tem condições de agir com clareza." },
              { termo: "Antes da decisão irreversível", def: "O critério de valor. Quando mudar ainda custa menos do que esperar." },
              { termo: "Antes que a janela se feche", def: "A frase canônica do site. Nomeia a urgência sem dramatizar. A janela existe. Ela se fecha." },
            ].map(({ termo, def }, i) => (
              <div key={i} className="border-l-2 border-orange/30 pl-6 space-y-1">
                <p className="text-off-white font-body font-semibold" style={{ fontSize: "15px" }}>{termo}</p>
                <p className="text-off-white/65 font-body leading-relaxed" style={{ fontSize: "14px" }}>{def}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="highlighted" paddingY="lg">
        <div className="max-w-2xl space-y-6">
          <p className="font-display text-off-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 500, lineHeight: 1.35 }}>
            Quer entender se o seu momento ainda é antes da crise?
          </p>
          <CTAButton href="/contato" origin="glossario_antes_crise" variant="primary">
            RESPIRE
          </CTAButton>
        </div>
      </Section>
    </>
  )
}
