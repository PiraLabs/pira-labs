export const dynamic = 'force-static'

import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/PageHeader"
import { FinalCTA } from "@/components/shared/FinalCTA"
import { ORIGINS } from "@/lib/constants"
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb"

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "A empresa cresce, a margem some", url: "https://piralabs.com.br/crescimento-sem-margem" },
])

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/crescimento-sem-margem",
  name: "A empresa cresce mas a margem some: o que está acontecendo",
  description: "Crescimento de receita sem crescimento de margem é sintoma, não resultado. Seis causas que aparecem antes da crise.",
  publisher: { "@id": "https://piralabs.com.br/#organization" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Crescimento sem margem acontece só em empresas pequenas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. Crescimento sem margem é um padrão recorrente em empresas de serviços de diferentes portes. Quanto mais rápido o crescimento, mais invisível fica o problema, porque a receita nova mascara o custo da receita antiga.",
      },
    },
    {
      "@type": "Question",
      name: "Parar de crescer resolve o problema de margem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Raramente. Desacelerar reduz a exposição, mas não corrige o modelo. As causas permanecem: escopo não cobrado, precificação desalinhada, retrabalho sem custo visível.",
      },
    },
    {
      "@type": "Question",
      name: "Como a Pira Labs aborda o problema de crescimento sem margem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Via INSPIRA, diagnóstico da Pira Labs que lê seis camadas do negócio em sequência antes de nomear qualquer problema. O output é uma rota executável com movimentos, responsáveis e critérios de conclusão. A conversa inicial é sem compromisso.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: {
    absolute: "A empresa cresce mas a margem some: o que está acontecendo · Pira Labs",
  },
  description:
    "Crescimento de receita sem crescimento de margem é sintoma, não resultado. Seis causas que aparecem antes da crise. Diagnóstico via INSPIRA da Pira Labs.",
  alternates: {
    canonical: "https://piralabs.com.br/crescimento-sem-margem",
  },
  openGraph: {
    title: "A empresa cresce mas a margem some: o que está acontecendo · Pira Labs",
    description: "Crescimento de receita sem crescimento de margem é sintoma, não resultado. Seis causas que aparecem antes da crise.",
    url: "https://piralabs.com.br/crescimento-sem-margem",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "A empresa cresce, a margem some" },
]

const causas = [
  {
    num: "1",
    causa: "Escopo que cresce sem reprecificação",
    pratica: "O cliente pede mais. A equipe entrega. A conta não muda.",
  },
  {
    num: "2",
    causa: "Equipe que cresce mais rápido que a receita",
    pratica: "A operação se estrutura antes de o modelo de trabalho sustentar o novo tamanho.",
  },
  {
    num: "3",
    causa: "Retrabalho invisível que não entra no custo",
    pratica: "Revisões, correções e alinhamentos extras consomem horas que não aparecem em nenhuma planilha.",
  },
  {
    num: "4",
    causa: "Precificação baseada em horas, não em valor entregue",
    pratica: "A empresa vende tempo quando o cliente paga pelo resultado. O custo real aumenta; o preço fica parado.",
  },
  {
    num: "5",
    causa: "Clientes cujo custo de atendimento supera a margem gerada",
    pratica: "Alguns contratos geram receita visível e prejuízo invisível. Ninguém fez a conta.",
  },
  {
    num: "6",
    causa: "Tecnologia adicionada sem revisão do processo que ela deveria substituir",
    pratica: "A ferramenta nova acelera um fluxo que já estava errado. O custo operacional sobe. A margem cai.",
  },
]

const faqItems = [
  {
    q: "Isso acontece só em empresas pequenas?",
    a: "Não. Crescimento sem margem é um padrão recorrente em empresas de serviços de diferentes portes. Quanto mais rápido o crescimento, mais invisível fica o problema, porque a receita nova mascara o custo da receita antiga.",
  },
  {
    q: "Parar de crescer resolve o problema?",
    a: "Raramente. Desacelerar o crescimento reduz a exposição, mas não corrige o modelo. As causas permanecem: escopo não cobrado, precificação desalinhada, retrabalho sem custo visível. O problema continua acumulando, só mais devagar.",
  },
  {
    q: "Como a Pira Labs aborda esse problema?",
    a: "Via INSPIRA, diagnóstico da Pira Labs que lê seis camadas do negócio em sequência antes de nomear qualquer problema. O output é uma rota executável com movimentos, responsáveis e critérios de conclusão. A conversa inicial é sem compromisso.",
  },
]

const INK   = "#05262e"
const TEAL  = "#004757"
const SAND  = "#e8e0d6"
const WHITE = "#F5F5F2"
const TAUPE = "#b0a596"

export default function CrescimentoSemMargemPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* S1 · Header (Ink) */}
      <div style={{ backgroundColor: INK }}>
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Sua empresa cresce. A margem some. O que está acontecendo?"
          subtitle="Crescimento de receita sem crescimento de margem é sintoma, não resultado. Aparece primeiro como sinal, antes de virar crise."
        />
      </div>

      {/* S2 · Corpo + tabela de causas (Sand) */}
      <section style={{ backgroundColor: SAND }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A5568", marginBottom: "32px" }}>
            O padrão
          </p>
          <div style={{ maxWidth: "720px", marginBottom: "48px" }}>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              Em 6 meses, uma operação de agência recuperou 79 pontos percentuais de margem sem tocar na receita. O problema estava onde ninguém estava olhando: o que era cobrado versus o que era entregue, e quanto esforço real ia além do contratado. Crescimento de receita sem crescimento de margem é sintoma, não resultado, e aparece primeiro como sinal, antes de virar crise.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK }}>
              Seis causas que aparecem com frequência quando a receita cresce e a margem não acompanha:
            </p>
          </div>

          {/* Tabela de causas */}
          <div style={{ maxWidth: "960px", marginBottom: "48px" }}>
            {causas.map((item, i) => (
              <div
                key={item.num}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
                style={{
                  padding: "24px 0",
                  borderTop: i === 0 ? `1px solid rgba(5,38,46,0.12)` : `1px solid rgba(5,38,46,0.12)`,
                  borderBottom: i === causas.length - 1 ? `1px solid rgba(5,38,46,0.12)` : "none",
                }}
              >
                <div style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                  <span className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", color: TAUPE, flexShrink: 0 }}>
                    {item.num.padStart(2, "0")}
                  </span>
                  <p className="font-body" style={{ fontSize: "0.9375rem", fontWeight: 600, color: INK, lineHeight: 1.4 }}>
                    {item.causa}
                  </p>
                </div>
                <p className="font-body" style={{ fontSize: "0.9375rem", fontWeight: 300, color: INK, lineHeight: 1.7 }}>
                  {item.pratica}
                </p>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: "720px" }}>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              Quando várias dessas causas aparecem juntas, o problema raramente é só operacional. É de modelo. É aí que entra o{" "}
              <a href="/creative-business-turnaround" style={{ color: INK, fontWeight: 600, textDecoration: "underline" }}>
                Creative Business Turnaround da Pira Labs
              </a>
              : diagnóstico e redesenho antes que o crescimento vire crise, antes que a janela se feche.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "32px" }}>
              O diagnóstico não inventa o problema. Revela o que a fundadora ou o fundador já sentia, mas ainda não havia encontrado palavras para nomear. O INSPIRA lê seis camadas do negócio antes de nomear qualquer causa. O resultado é uma rota executável, não um relatório para arquivar.
            </p>
            <a href="/inspira" className="btn-primary">
              O INSPIRA identifica onde a margem está vazando →
            </a>
          </div>
        </div>
      </section>

      {/* S3 · FAQ (Teal) */}
      <section style={{ backgroundColor: TEAL }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: SAND, marginBottom: "32px" }}>
            Perguntas frequentes
          </p>
          <h2 className="type-h1" style={{ color: WHITE, fontWeight: 600, marginBottom: "40px", lineHeight: 1.1 }}>
            Dúvidas sobre o padrão
          </h2>
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="details-clean"
              style={{ borderBottom: "1px solid rgba(245,245,242,0.12)" }}
            >
              <summary
                className="font-body"
                style={{ cursor: "pointer", color: WHITE, fontSize: "1rem", fontWeight: 600, padding: "20px 0" }}
              >
                {item.q}
              </summary>
              <p
                className="font-body"
                style={{ color: SAND, fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.75, paddingBottom: "24px" }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* S4 · FinalCTA (Ink) */}
      <FinalCTA
        heading="Se o padrão que você leu aqui descreve a sua empresa, o próximo passo é uma conversa, não um compromisso."
        ctaLabel="RESPIRE"
        origin={ORIGINS.CRESCIMENTO_SEM_MARGEM}
        theme="dark"
      />
    </>
  )
}
