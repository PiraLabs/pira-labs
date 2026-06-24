export const dynamic = 'force-static'

import type { Metadata } from "next"
import { Section } from "@/components/shared/Section"
import { PageHeader } from "@/components/shared/PageHeader"
import { CTAButton } from "@/components/shared/CTAButton"
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb"

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Vocabulário", url: "https://piralabs.com.br/glossario" },
  { name: "Janela de oportunidade", url: "https://piralabs.com.br/glossario/janela-de-oportunidade" },
])

const termSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://piralabs.com.br/glossario/janela-de-oportunidade#term",
  name: "Janela de oportunidade",
  description: "O período em que uma empresa ainda tem condições de agir com clareza, opções e margem para testar, corrigir e decidir sem operar no limite.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Vocabulário Pira Labs",
    url: "https://piralabs.com.br/glossario",
  },
  url: "https://piralabs.com.br/glossario/janela-de-oportunidade",
  mainEntityOfPage: "https://piralabs.com.br/glossario/janela-de-oportunidade",
}

export const metadata: Metadata = {
  title: { absolute: "Janela de oportunidade · Vocabulário · Pira Labs" },
  description: "O período em que uma empresa ainda tem condições de agir com clareza, opções e margem. Quando a janela se fecha, a natureza do trabalho muda.",
  alternates: { canonical: "https://piralabs.com.br/glossario/janela-de-oportunidade" },
  openGraph: {
    title: "Janela de oportunidade · Pira Labs",
    description: "O que é a janela de oportunidade, como identificar se ainda está aberta e sua relação com o posicionamento da Pira Labs.",
    url: "https://piralabs.com.br/glossario/janela-de-oportunidade",
    siteName: "Pira Labs",
    locale: "pt_BR",
    type: "article",
  },
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Vocabulário", href: "/glossario" },
  { label: "Janela de oportunidade" },
]

export default function JanelaOportunidade() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(termSchema) }} />

      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Janela de oportunidade"
          subtitle="O período em que uma empresa ainda tem condições de agir com clareza, opções e margem para testar, corrigir e decidir sem operar no limite."
        />
      </div>

      <Section variant="ink" paddingY="lg">
        <div className="max-w-3xl space-y-6">
          <p className="font-body font-semibold uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "#e8e0d6" }}>DEFINIÇÃO CANÔNICA</p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            Janela de oportunidade é o período em que uma empresa ainda tem condições de agir com clareza, opções e margem para testar, corrigir e decidir sem operar no limite.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            Não é metáfora. É descrição de uma condição real que tem início, duração e fim.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            Enquanto a janela está aberta, o negócio ainda tem clientes dispostos a renovar, caixa suficiente para financiar mudança, equipe com capacidade de absorver redesenho e reputação para sustentar um processo que leva tempo. A intervenção nesse momento é preventiva: o diagnóstico encontra o problema antes que ele escale, a solução tem espaço para ser testada e ajustada, o custo de mudar é menor que o custo de esperar.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            Quando a janela fecha, a natureza do trabalho muda. A intervenção deixa de ser preventiva e passa a ser responsiva ou paliativa. O mesmo trabalho, feito no momento errado, produz resultado diferente. Às vezes não produz.
          </p>
        </div>
      </Section>

      <Section variant="teal" paddingY="lg">
        <div className="max-w-3xl space-y-6">
          <p className="font-body font-semibold uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "#e8e0d6" }}>A RELAÇÃO COM O POSICIONAMENTO "ANTES"</p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            "Antes" é a palavra de posicionamento da Pira Labs. Não como urgência. Como localização no tempo.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            A janela de oportunidade é o que torna o "antes" possível. Sem ela, não há escolha: só consequência. Com ela aberta, a empresa pode decidir em vez de reagir, agir com opções em vez de operar no limite, mudar o modelo antes que ele cobre o preço máximo.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            A velocidade com que o mercado comprime vantagens, com que a IA redistribui capacidade, com que o comportamento do cliente muda, reduziu o tempo entre o sinal e a emergência. A janela de oportunidade segue existindo, mas por menos tempo.
          </p>
        </div>
      </Section>

      <Section variant="ink" paddingY="lg">
        <div className="max-w-3xl space-y-6">
          <p className="font-body font-semibold uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "#e8e0d6" }}>COMO IDENTIFICAR SE A JANELA AINDA ESTÁ ABERTA</p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            A janela está aberta quando o negócio ainda tem, ao mesmo tempo, clientes, caixa e reputação. Quando um desses três começa a faltar, a janela começa a fechar. Quando os três desaparecem, ela fechou.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            Os sinais de que a janela ainda está aberta costumam ser lidos como sinais de que está tudo bem: a receita entra, os clientes renovam, a empresa funciona. O problema é que o modelo que gera essa estabilidade pode estar se tornando insustentável em silêncio, consumindo margem e energia antes que qualquer número externo mostre.
          </p>
          <p className="font-body leading-relaxed" style={{ fontSize: "14px", color: "#e8e0d6" }}>
            É por isso que o diagnóstico vem antes da proposta. Não para confirmar que a janela está aberta: para medir por quanto tempo ela ainda estará.
          </p>
        </div>
      </Section>

      <Section variant="teal" paddingY="lg">
        <div className="max-w-2xl space-y-6">
          <p className="font-display text-off-white" style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, lineHeight: 1.35 }}>
            Quer saber se a janela ainda está aberta para o seu negócio?
          </p>
          <CTAButton href="/contato" origin="glossario_janela_oportunidade" variant="primary">
            RESPIRE
          </CTAButton>
        </div>
      </Section>
    </>
  )
}
