export const dynamic = 'force-static'

import type { Metadata } from "next"
import { Section } from "@/components/shared/Section"
import { PageHeader } from "@/components/shared/PageHeader"
import { FinalCTA } from "@/components/shared/FinalCTA"
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb"
import { ORIGINS } from "@/lib/constants"

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Chama", url: "https://piralabs.com.br/chama" },
])

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/chama#service",
  name: "Chama · Palestras, workshops, aulas e mentorias · Pira Labs",
  description:
    "Gabriela Aguiar e Celso Gama levam perspectiva calibrada por consequência real para organizações, eventos e programas de formação. Palestras, workshops, aulas, mentorias e nanodegree.",
  provider: { "@id": "https://piralabs.com.br/#organization" },
  serviceType: "Palestras e formações corporativas",
}

export const metadata: Metadata = {
  title: { absolute: "Chama · Palestras e formações · Pira Labs" },
  description:
    "Gabriela Aguiar e Celso Gama levam perspectiva calibrada por consequência real. Palestras, workshops, aulas, mentorias e nanodegree para organizações e programas de formação.",
  alternates: { canonical: "https://piralabs.com.br/chama" },
  openGraph: {
    title: "Chama · Palestras e formações · Pira Labs",
    description:
      "Perspectiva calibrada por consequência real. Palestras, workshops, aulas e mentorias.",
    url: "https://piralabs.com.br/chama",
    siteName: "Pira Labs",
    locale: "pt_BR",
    type: "website",
  },
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Chama" },
]

const formatos = [
  {
    formato: "Palestra",
    desc: "60 a 90 minutos. Presencial ou online. Para eventos, congressos e encontros de lideranças. Investimento sob consulta conforme contexto, formato e deslocamento.",
  },
  {
    formato: "Workshop",
    desc: "4 horas. Grupos de 5 a 25 pessoas. Conduzido por Celso Gama. Inclui conversa de calibragem prévia sem custo adicional. A partir de R$12.500 conforme escopo e contexto.",
  },
  {
    formato: "Aula",
    desc: "Formato adaptado para programas de MBA, educação executiva e graduação.",
  },
  {
    formato: "Mentoria",
    desc: "Sessão individual ou em grupo reduzido. Foco em problema específico do contexto do contratante.",
  },
]

const temasGabriela = {
  trilha1: {
    label: "Negócio e Mercado",
    temas: [
      { tema: "Macro Tendências", desc: "O que está se movendo antes de virar pauta. Leitura de sinais que o mercado local ainda não nomeou." },
      { tema: "O Futuro do Trabalho", desc: "Como modelos de trabalho estão mudando e o que isso exige de quem lidera." },
      { tema: "Inteligência de Mercado com IA", desc: "Como usar IA para ler mercado, mapear concorrentes e identificar oportunidade antes da demanda ser óbvia." },
      { tema: "Inovação para PMEs", desc: "Inovação como capacidade operacional, não como evento. Para empresas que precisam inovar sem parar de operar." },
      { tema: "Novas formas de consumo e novos canais de venda", desc: "Como o comportamento de compra mudou e o que isso exige de quem vende." },
    ],
  },
  trilha2: {
    label: "Pessoas e Cultura",
    temas: [
      { tema: "Cultura e Formação de Lideranças", desc: "O que forma líderes que tomam decisões antes que virem urgência." },
      { tema: "Desafios Geracionais", desc: "Cinco gerações no mesmo ambiente de trabalho. O que cada uma precisa entender das outras." },
    ],
  },
  trilha3: {
    label: "Trajetória",
    temas: [
      { tema: "Desafios e Protagonismo Feminino", desc: "Trajetórias reais, escolhas reais e o que o mercado ainda não aprendeu a aproveitar." },
      { tema: "Maternidade como Liderança", desc: "O que a maternidade ensina sobre priorização, delegação e presença que nenhum MBA ensina." },
    ],
  },
}

const temasCelso = [
  {
    tema: "Empreendendo com IA",
    desc: "Como usar IA para operar melhor, decidir mais rápido e crescer sem escalar o problema junto. Inclui criação de agentes e engenharia de prompts — o que separa uso superficial de IA de uso que transforma operação.",
    aviso: undefined,
  },
  {
    tema: "IA aplicada ao jurídico",
    desc: "Governança, risco e produtividade para escritórios e departamentos jurídicos que já usam IA sem política. Onde a IA pode ajudar em pesquisa preliminar, organização de informação e gestão de conhecimento. Onde ela não deve entrar sem revisão técnica.",
    aviso: "Este tema não constitui consultoria jurídica, não substitui a atuação de advogadas e advogados habilitados e não define estratégia de caso.",
  },
]

const historico = [
  "Aurora Festival",
  "Web Summit Runway",
  "HackTown",
  "Campinas Innovation Week",
  "Energy Summit Rio",
  "ABES Summit",
  "Cliente SA",
  "Startupi",
  "InovaTalks",
  "Embaixada da Finlândia",
  "FIAP",
  "USP",
  "FACEP",
  "FGV Ventures",
  "German Accelerator",
  "FINEP",
  "Empreendedoras Tech · Sebrae",
]

export default function ChamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* CHAMA-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Conhecimento é a nossa chama."
          subtitle="Gabriela Aguiar e Celso Gama levam perspectiva calibrada por consequência real para organizações, eventos e programas de formação."
        />
      </div>

      {/* CHAMA-2 · Formatos */}
      <Section variant="default" paddingY="lg">
        <p className="font-body font-semibold uppercase mb-10"
          style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(245,245,242,0.5)" }}>
          FORMATOS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          {formatos.map(({ formato, desc }) => (
            <div key={formato} className="space-y-2">
              <p className="font-body font-semibold" style={{ fontSize: "15px", color: "#F5F5F2" }}>
                {formato}
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: "14px", color: "rgba(245,245,242,0.65)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CHAMA-3 · Temas Gabriela */}
      <Section variant="highlighted" paddingY="lg">
        <p className="font-body font-semibold uppercase mb-3"
          style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(232,224,214,0.5)" }}>
          GABRIELA AGUIAR
        </p>
        <h2 className="font-display mb-12"
          style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 500, color: "#F5F5F2", lineHeight: 1.3 }}>
          Mercado, futuro e liderança.
        </h2>
        <div className="space-y-12 max-w-3xl">
          {Object.values(temasGabriela).map((trilha) => (
            <div key={trilha.label}>
              <p className="font-body font-semibold uppercase mb-6"
                style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(232,224,214,0.4)" }}>
                {trilha.label}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trilha.temas.map(({ tema, desc }) => (
                  <div key={tema} className="space-y-1 border-l border-white/10 pl-5">
                    <p className="font-body font-semibold" style={{ fontSize: "14px", color: "#F5F5F2" }}>
                      {tema}
                    </p>
                    <p className="font-body leading-relaxed" style={{ fontSize: "13px", color: "rgba(245,245,242,0.6)" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CHAMA-4 · Temas Celso */}
      <Section variant="dark" paddingY="lg">
        <p className="font-body font-semibold uppercase mb-3"
          style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(232,224,214,0.5)" }}>
          CELSO GAMA
        </p>
        <h2 className="font-display mb-12"
          style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 500, color: "#F5F5F2", lineHeight: 1.3 }}>
          Operação e IA aplicada.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {temasCelso.map(({ tema, desc, aviso }) => (
            <div key={tema} className="space-y-2 border-l border-white/10 pl-5">
              <p className="font-body font-semibold" style={{ fontSize: "14px", color: "#F5F5F2" }}>
                {tema}
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: "13px", color: "rgba(245,245,242,0.6)" }}>
                {desc}
              </p>
              {aviso && (
                <p className="font-body" style={{ fontSize: "11px", color: "rgba(245,245,242,0.4)", marginTop: "8px" }}>
                  {aviso}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CHAMA-5 · Onde já estivemos */}
      <Section variant="default" paddingY="lg">
        <p className="font-body font-semibold uppercase mb-10"
          style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(245,245,242,0.5)" }}>
          ONDE JÁ ESTIVEMOS
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 max-w-3xl">
          {historico.map((item) => (
            <span
              key={item}
              className="font-body"
              style={{
                fontSize: "13px",
                color: "rgba(245,245,242,0.7)",
                borderBottom: "1px solid rgba(245,245,242,0.15)",
                paddingBottom: "2px",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      {/* CHAMA-6 · CTA */}
      <FinalCTA
        heading="Cada conversa de calibragem define o formato certo para o contexto certo."
        ctaLabel="RESPIRE"
        origin={ORIGINS.CHAMA}
      />
    </>
  )
}
