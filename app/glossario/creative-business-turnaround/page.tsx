export const dynamic = 'force-static'

import type { Metadata } from "next"
import { Section } from "@/components/shared/Section"
import { PageHeader } from "@/components/shared/PageHeader"
import { CTAButton } from "@/components/shared/CTAButton"
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb"

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Vocabulário", url: "https://piralabs.com.br/glossario" },
  { name: "Creative Business Turnaround", url: "https://piralabs.com.br/glossario/creative-business-turnaround" },
])

const termSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://piralabs.com.br/glossario/creative-business-turnaround#term",
  name: "Creative Business Turnaround",
  description: "Creative Business Turnaround é o processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes que a janela se feche — quando ainda têm clientes, caixa e reputação, mas o modelo de trabalho começou a custar caro demais.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Vocabulário Pira Labs",
    url: "https://piralabs.com.br/glossario",
  },
  url: "https://piralabs.com.br/glossario/creative-business-turnaround",
  mainEntityOfPage: "https://piralabs.com.br/glossario/creative-business-turnaround",
}

export const metadata: Metadata = {
  title: { absolute: "Creative Business Turnaround · Vocabulário · Pira Labs" },
  description: "Creative Business Turnaround é a categoria de atuação que aplica a inteligência do turnaround antes da emergência, quando a empresa ainda tem clientes, caixa e reputação para agir.",
  alternates: { canonical: "https://piralabs.com.br/glossario/creative-business-turnaround" },
  openGraph: {
    title: "Creative Business Turnaround · Pira Labs",
    description: "O que é Creative Business Turnaround, quando se aplica e o que o diferencia da reestruturação tradicional.",
    url: "https://piralabs.com.br/glossario/creative-business-turnaround",
    siteName: "Pira Labs",
    locale: "pt_BR",
    type: "article",
  },
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Vocabulário", href: "/glossario" },
  { label: "Creative Business Turnaround" },
]

export default function CBTTerm() {
  const combinedSchema = [bcSchema, termSchema]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />

      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Creative Business Turnaround"
          subtitle="Categoria de atuação que aplica a inteligência do turnaround antes da emergência, quando a empresa ainda tem clientes, caixa e reputação para agir com clareza e com opções."
        />
      </div>

      <Section variant="ink" paddingY="lg">
        <div className="max-w-3xl space-y-6">
          <p className="font-body font-semibold uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "#e8e0d6" }}>DEFINIÇÃO CANÔNICA</p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            Creative Business Turnaround é uma categoria de atuação que aplica a inteligência do turnaround antes da crise, quando a empresa ainda tem clientes, caixa e reputação para agir com clareza e com opções.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            A maioria das intervenções em empresas de serviços acontece tarde. O problema já virou crise, as opções já diminuíram, o trabalho que resta é conter o dano. O Creative Business Turnaround inverte essa lógica. Em vez de entrar quando a emergência explodiu, a Pira Labs entra antes, quando os sinais já estão presentes, mas o negócio ainda tem condições de decidir.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            É a diferença entre medicina preventiva, medicina responsiva e medicina paliativa. As três tratam o mesmo paciente. O que muda é o momento, e o momento muda tudo: o que é possível fazer, quanto custa fazer e o que sobra depois.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            A Pira Labs organiza o Creative Business Turnaround por meio de duas metodologias próprias: INSPIRA, a fase de diagnóstico, e TRANSPIRA, a fase de execução. Faísca reúne as portas de entrada. O destino é o RESPIRA: o estado em que o negócio sustenta o próximo nível sem precisar de intervenção contínua.
          </p>
        </div>
      </Section>

      <Section variant="teal" paddingY="lg">
        <div className="max-w-3xl space-y-10">
          <p className="font-body font-semibold uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "#e8e0d6" }}>POR QUE NÃO É REESTRUTURAÇÃO NEM CONSULTORIA TRADICIONAL</p>
          <div className="space-y-4">
            <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
              Reestruturação, no uso de mercado, pressupõe que algo precisa ser desmontado. Dívida renegociada, equipe reduzida, ativo vendido. É uma resposta à crise já instalada, e o trabalho começa quando as opções já diminuíram. O Creative Business Turnaround começa antes disso.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
              Em muita consultoria tradicional, o diagnóstico termina em relatório. No Creative Business Turnaround, o diagnóstico termina com rota executável. A Pira Labs não desenha o trabalho para terminar no relatório. Desenha para chegar a resultado verificável.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
              A palavra "Creative" no nome não é estética. É estrutural. Significa que o diagnóstico vai além do óbvio e que a solução não repete o que qualquer consultoria entregaria. Cada empresa de serviços tem uma combinação única de pessoas, processos e tecnologia. A rota de saída também precisa respeitar essa combinação.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="ink" paddingY="lg">
        <div className="max-w-3xl space-y-8">
          <p className="font-body font-semibold uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "#e8e0d6" }}>QUANDO SE APLICA</p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            O Creative Business Turnaround se aplica quando o negócio ainda tem clientes, caixa e reputação, mas algum dos sinais abaixo já está presente:
          </p>
          <ul className="space-y-3">
            {[
              "A margem não acompanha a receita.",
              "O crescimento trava sem que o caixa explique por quê.",
              "Quem fundou virou passagem obrigatória para quase tudo.",
              "O comercial promete uma coisa e a operação entrega outra.",
              "A IA entrou pela ferramenta, não pelo fluxo.",
              "O negócio perdeu fôlego mesmo sem perder clientes.",
            ].map((sinal, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-body font-semibold mt-0.5" style={{ fontSize: "13px", color: "#eb5c2e" }} aria-hidden="true">→</span>
                <span className="font-body leading-relaxed" style={{ fontSize: "15px", color: "#e8e0d6" }}>{sinal}</span>
              </li>
            ))}
          </ul>
          <p className="font-body leading-relaxed" style={{ fontSize: "14px", color: "#e8e0d6" }}>
            Esses sinais não são a crise. São o que vem antes. E enquanto estão presentes, a janela ainda está aberta.
          </p>
        </div>
      </Section>

      <Section variant="teal" paddingY="lg">
        <div className="max-w-3xl space-y-6">
          <p className="font-body font-semibold uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "#e8e0d6" }}>QUANDO NÃO SE APLICA</p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            O Creative Business Turnaround não substitui reestruturação financeira de emergência quando o caixa já está esgotado. Não é recuperação judicial. Não é intervenção em empresa sem clientes ou sem reputação para defender.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#e8e0d6" }}>
            Se a crise já explodiu e o trabalho é conter dano, o Creative Business Turnaround não é o instrumento certo. O instrumento certo é outro, e a Pira Labs vai dizer isso antes de propor qualquer trabalho.
          </p>
        </div>
      </Section>

      <Section variant="ink" paddingY="lg">
        <div className="max-w-2xl space-y-6">
          <p className="font-display text-off-white" style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, lineHeight: 1.35 }}>
            Quer entender se o seu momento é o momento da Pira?
          </p>
          <CTAButton href="/contato" origin="glossario_cbt" variant="primary">
            RESPIRE
          </CTAButton>
        </div>
      </Section>
    </>
  )
}
