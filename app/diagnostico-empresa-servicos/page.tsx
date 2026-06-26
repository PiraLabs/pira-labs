export const dynamic = 'force-static'

import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/PageHeader"
import { FinalCTA } from "@/components/shared/FinalCTA"
import { ORIGINS } from "@/lib/constants"
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb"

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Diagnóstico para empresas de serviços", url: "https://piralabs.com.br/diagnostico-empresa-servicos" },
])

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/diagnostico-empresa-servicos",
  name: "Como saber se sua empresa de serviços precisa de diagnóstico agora",
  description: "Seis perguntas para avaliar o momento da empresa de serviços e identificar se já existe material suficiente para uma conversa de diagnóstico.",
  publisher: { "@id": "https://piralabs.com.br/#organization" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O Oxigênio IA Search é diferente do INSPIRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O Oxigênio IA Search diagnostica como a empresa aparece para os motores de inteligência artificial. O INSPIRA diagnostica o negócio como sistema: seis camadas lidas em sequência, convergindo em síntese integrada. Escopos e formatos distintos. O Oxigênio pode ser um ponto de entrada antes do INSPIRA.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso contratar para ter um diagnóstico da Pira Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A conversa inicial é sem compromisso. A Pira Labs ouve o contexto e ajuda a nomear o problema antes de propor qualquer solução. Se o INSPIRA fizer sentido, proposta em até 5 dias úteis.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva um diagnóstico INSPIRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4 a 6 semanas. A proposta inicial define o prazo específico conforme complexidade do negócio.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: {
    absolute: "Como saber se sua empresa de serviços precisa de diagnóstico agora · Pira Labs",
  },
  description:
    "Seis perguntas para avaliar o momento da sua empresa de serviços. Se três ou mais gerarem hesitação, talvez seja hora de diagnosticar o modelo.",
  alternates: {
    canonical: "https://piralabs.com.br/diagnostico-empresa-servicos",
  },
  openGraph: {
    title: "Como saber se sua empresa de serviços precisa de diagnóstico agora · Pira Labs",
    description: "Seis perguntas para avaliar o momento da sua empresa de serviços. Se três ou mais gerarem hesitação, talvez seja hora de diagnosticar o modelo.",
    url: "https://piralabs.com.br/diagnostico-empresa-servicos",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Diagnóstico para empresas de serviços" },
]

const perguntas = [
  "Você sabe qual cliente gera margem positiva e qual gera prejuízo disfarçado de receita?",
  "Você consegue crescer receita sem crescer headcount na mesma proporção?",
  "Seu time mais sênior passa mais tempo em entrega do que em decisão e aprovação?",
  "Você tem clareza de qual problema o seu cliente acha que você resolve, versus qual você resolve de verdade?",
  "Se você saísse da operação por 30 dias, o que travaria primeiro?",
  "Você sabe qual seria o próximo nível do seu negócio se o modelo atual não fosse um limitador?",
]

const faqItems = [
  {
    q: "O Oxigênio IA Search é diferente do INSPIRA?",
    a: "Sim. O Oxigênio IA Search diagnostica como a empresa aparece para os motores de inteligência artificial: presença externa, visibilidade em buscas feitas por IA. O INSPIRA diagnostica o negócio como sistema: seis camadas lidas em sequência, convergindo em síntese integrada. Escopos e formatos distintos. O Oxigênio pode ser um ponto de entrada antes do INSPIRA.",
    linkOxigenio: true,
  },
  {
    q: "Preciso contratar para ter um diagnóstico?",
    a: "Não. A conversa inicial é sem compromisso. Nela, a Pira Labs ouve o contexto e ajuda a nomear o problema antes de propor qualquer solução. Se o INSPIRA fizer sentido, proposta em até 5 dias úteis.",
    linkInspira: true,
  },
  {
    q: "Quanto tempo leva um diagnóstico INSPIRA?",
    a: "4 a 6 semanas. A proposta inicial define o prazo específico conforme complexidade do negócio.",
  },
]

const INK   = "#05262e"
const TEAL  = "#004757"
const SAND  = "#e8e0d6"
const WHITE = "#F5F5F2"

export default function DiagnosticoEmpresaServicosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* S1 · Header (Ink) */}
      <div style={{ backgroundColor: INK }}>
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Como saber se a sua empresa de serviços precisa de um diagnóstico agora"
          subtitle="Seis perguntas que ajudam a calibrar o momento. Quando o diagnóstico fizer sentido, é o INSPIRA que entra."
        />
      </div>

      {/* S2 · Corpo + seis perguntas (Sand) */}
      <section style={{ backgroundColor: SAND }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A5568", marginBottom: "32px" }}>
            O momento certo
          </p>
          <div style={{ maxWidth: "720px", marginBottom: "48px" }}>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              A resposta raramente vem de um número isolado. Vem de um conjunto de sinais que, somados, indicam o momento certo para agir. Em 4 a 6 semanas, o INSPIRA entrega o problema real nomeado e uma rota executável, não um relatório para arquivar.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              O diagnóstico não inventa o problema: revela o que a fundadora ou o fundador já sentia, mas ainda não havia encontrado palavras para nomear.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK }}>
              Antes de propor qualquer solução, a Pira Labs ouve. O ponto de partida é sempre a leitura do negócio como sistema. Seis perguntas que ajudam a calibrar o momento:
            </p>
          </div>

          {/* Seis perguntas */}
          <div style={{ maxWidth: "720px", marginBottom: "48px" }}>
            {perguntas.map((pergunta, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "20px 0",
                  borderBottom: "1px solid rgba(5,38,46,0.12)",
                  alignItems: "baseline",
                }}
              >
                <span className="font-body" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", color: "#1A5568", flexShrink: 0, minWidth: "20px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body" style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.7, color: INK }}>
                  {pergunta}
                </p>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: "720px" }}>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "20px" }}>
              Se três ou mais dessas perguntas geraram hesitação, já existe material suficiente para uma conversa de diagnóstico. Não porque a empresa está em crise. Porque ainda não está. A Pira Labs atua antes da crise, quando ainda há clientes, caixa e reputação para sustentar a mudança. É quando o diagnóstico entrega mais: o problema nomeado, a rota desenhada, a decisão tomada com clareza.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: INK, marginBottom: "32px" }}>
              O diagnóstico não cria urgência artificial. Ele organiza sinais que já apareceram no negócio, mas ainda não viraram decisão. O{" "}
              <a href="/creative-business-turnaround" style={{ color: INK, fontWeight: 600, textDecoration: "underline" }}>
                Creative Business Turnaround
              </a>{" "}
              opera exatamente nesse intervalo.
            </p>
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
            Dúvidas sobre o diagnóstico
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
                {item.q === "O Oxigênio IA Search é diferente do INSPIRA?" ? (
                  <>
                    Sim. O{" "}
                    <a href="/faisca/oxigenio-ia-search" style={{ color: SAND, fontWeight: 600, textDecoration: "underline" }}>
                      Oxigênio IA Search
                    </a>{" "}
                    diagnostica como a empresa aparece para os motores de inteligência artificial: presença externa, visibilidade em buscas feitas por IA. O{" "}
                    <a href="/inspira" style={{ color: SAND, fontWeight: 600, textDecoration: "underline" }}>
                      INSPIRA
                    </a>{" "}
                    diagnostica o negócio como sistema: seis camadas lidas em sequência, convergindo em síntese integrada. Escopos e formatos distintos. O Oxigênio pode ser um ponto de entrada antes do INSPIRA.
                  </>
                ) : item.q === "Preciso contratar para ter um diagnóstico?" ? (
                  <>
                    Não. A conversa inicial é sem compromisso. Nela, a Pira Labs ouve o contexto e ajuda a nomear o problema antes de propor qualquer solução. Se o{" "}
                    <a href="/inspira" style={{ color: SAND, fontWeight: 600, textDecoration: "underline" }}>
                      INSPIRA
                    </a>{" "}
                    fizer sentido, proposta em até 5 dias úteis.
                  </>
                ) : (
                  item.a
                )}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* S4 · FinalCTA (Ink) */}
      <FinalCTA
        heading="Se as perguntas acima geraram hesitação, já existe material para uma conversa. Sem compromisso."
        ctaLabel="RESPIRE"
        origin={ORIGINS.DIAGNOSTICO_EMPRESA_SERVICOS}
        theme="dark"
      />
    </>
  )
}
