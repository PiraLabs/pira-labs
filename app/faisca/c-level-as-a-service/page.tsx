export const dynamic = 'force-static';

import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { ORIGINS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Faísca", url: "https://piralabs.com.br/faisca" },
  { name: "C-level as a Service", url: "https://piralabs.com.br/faisca/c-level-as-a-service" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/faisca/c-level-as-a-service#service",
  name: "C-level as a Service",
  description:
    "Gabriela Aguiar atua como C-level fracionado com presença ativa no processo de decisão do cliente, por período e carga definidos. Não é orientação de longe. É presença dentro do processo.",
  provider: { "@id": "https://piralabs.com.br/#organization" },
  url: "https://piralabs.com.br/faisca/c-level-as-a-service",
  areaServed: "BR",
  inLanguage: "pt-BR",
};

export const metadata: Metadata = {
  title: {
    absolute: "C-level as a Service · Faísca · Pira Labs",
  },
  description:
    "Gabriela Aguiar atua como C-level fracionado com presença ativa no processo de decisão do cliente, por período e carga definidos. Não é mentoria. É presença dentro do processo.",
  alternates: {
    canonical: "https://piralabs.com.br/faisca/c-level-as-a-service",
  },
  openGraph: {
    title: "C-level as a Service · Faísca · Pira Labs",
    description:
      "C-level fracionado com presença ativa. Case verificado: Pipa, São Paulo.",
    url: "https://piralabs.com.br/faisca/c-level-as-a-service",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Faísca", href: "/faisca" },
  { label: "C-level as a Service" },
];

const INK   = "#05262e"
const TEAL  = "#004757"
const SAND  = "#e8e0d6"
const WHITE = "#F5F5F2"
const EMBER = "#eb5c2e"

export default function CLevelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* C1 · Header (Ink) */}
      <div style={{ backgroundColor: INK }}>
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="C-level as a Service"
          subtitle="Gabriela Aguiar atua como C-level fracionado com presença ativa no processo de decisão do cliente, por período e carga definidos. Não é orientação de longe. É presença dentro do processo."
        />
      </div>

      {/* C2 · O que é + o que não é (Teal) */}
      <section style={{ backgroundColor: TEAL }}>
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 py-16 md:py-24">
          <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: WHITE, marginBottom: "40px" }}>
            C-level fracionado com presença no processo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ maxWidth: "960px" }}>
            <div>
              <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: SAND, marginBottom: "16px" }}>
                O que é
              </p>
              <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: WHITE }}>
                Gabriela Aguiar atua como C-level fracionado com presença ativa no processo de decisão do cliente por período definido. Pacote de horas e dedicação acordados antes do início. Extensão pode ser pactuada quando o projeto exige continuidade.
              </p>
            </div>
            <div>
              <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: SAND, marginBottom: "16px" }}>
                O que não é
              </p>
              <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: WHITE }}>
                Não é mentoria pontual. Não é orientação externa de quem acompanha de longe e devolve recomendação por reunião. A diferença está em presença: Gabriela está dentro do processo, lendo o que está acontecendo em tempo real, não recebendo um resumo para opinar depois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C3 · Case Pipa (Sand) */}
      <section style={{ backgroundColor: SAND }}>
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 py-16 md:py-24">
          <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: INK, marginBottom: "24px" }}>
            Como funciona na prática
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: INK, marginBottom: "40px" }}>
            Case Pipa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ maxWidth: "960px", marginBottom: "48px" }}>
            <div>
              <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(5,38,46,0.5)", marginBottom: "8px" }}>
                Cliente
              </p>
              <p className="font-body" style={{ fontSize: "1rem", fontWeight: 400, color: INK, marginBottom: "4px" }}>
                Pipa
              </p>
              <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(5,38,46,0.7)", marginBottom: "24px" }}>
                Ateliê de confeitaria artesanal · São Paulo
              </p>
              <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(5,38,46,0.5)", marginBottom: "8px" }}>
                Fundadora
              </p>
              <p className="font-body" style={{ fontSize: "1rem", fontWeight: 400, color: INK, marginBottom: "24px" }}>
                Kika Hernandes
              </p>
              <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(5,38,46,0.5)", marginBottom: "8px" }}>
                Período
              </p>
              <p className="font-body" style={{ fontSize: "1rem", fontWeight: 400, color: INK, marginBottom: "32px" }}>
                Fevereiro a maio de 2025
              </p>

              <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(5,38,46,0.8)", lineHeight: 1.75 }}>
                A Pipa chegou com um produto central forte e posicionamento ainda indefinido. O portfólio tinha escopo estreito, a precificação não refletia o valor percebido e a estrutura digital não sustentava o crescimento que o produto merecia.
              </p>
            </div>

            <div>
              <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(5,38,46,0.5)", marginBottom: "16px" }}>
                O que foi feito
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="space-y-3">
                {[
                  "Escuta dos valores inegociáveis da fundadora como ponto de partida",
                  "Leitura do portfólio e definição do papel de cada produto no mix",
                  "Expansão do portfólio com público, jornada e entrega definidos para cada produto",
                  "Precificação coerente com valor percebido e entre si",
                  "Estratégia de lançamento dos workshops temáticos de Páscoa",
                  "Acompanhamento quinzenal pós-lançamento",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-3" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(5,38,46,0.8)", lineHeight: 1.6 }}>
                    <span style={{ color: INK, flexShrink: 0, marginTop: "2px" }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "32px", borderTop: "1px solid rgba(5,38,46,0.15)", paddingTop: "32px" }}>
                <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(5,38,46,0.5)", marginBottom: "16px" }}>
                  Resultados verificados
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="space-y-2">
                  {[
                    "Portfólio dobrado: de 2 para 4 produtos",
                    "Reposicionamento de preço: de R$280 para arquitetura entre R$350 e R$530",
                    "Estruturação digital: site e LinkedIn",
                  ].map((item) => (
                    <li key={item} className="font-body flex items-start gap-3" style={{ fontSize: "0.875rem", fontWeight: 400, color: INK, lineHeight: 1.6 }}>
                      <span style={{ color: EMBER, flexShrink: 0, marginTop: "2px" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Depoimento principal */}
          <div style={{ maxWidth: "720px", borderLeft: "2px solid rgba(5,38,46,0.2)", paddingLeft: "32px", marginBottom: "24px" }}>
            <blockquote className="font-display" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", fontWeight: 400, lineHeight: 1.6, color: INK, margin: 0, padding: 0 }}>
              &ldquo;Me deu muito foco de como direcionar melhor um produto que é tão rico e monetizar de uma maneira estratégica sem perder o valor da marca. Encaixou de maneira bem clara, com ferramentas fáceis, trazendo conhecimento para problemas que pareciam tão complexos.&rdquo;
            </blockquote>
            <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 600, color: "rgba(5,38,46,0.6)", marginTop: "16px", letterSpacing: "0.05em" }}>
              Kika Hernandes, fundadora e CEO da Pipa
            </p>
          </div>

          {/* Depoimento secundário */}
          <div style={{ maxWidth: "720px", borderLeft: "2px solid rgba(5,38,46,0.1)", paddingLeft: "32px" }}>
            <blockquote className="font-display" style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", fontWeight: 300, lineHeight: 1.6, color: "rgba(5,38,46,0.7)", margin: 0, padding: 0 }}>
              &ldquo;Como se todo aquele medo de empreender aliviasse. A Pira Labs apresenta possibilidades para encarar os desafios reais. É como se apresentasse o mapa do caminho das pedras, e ficasse mais fácil caminhar nessa jornada.&rdquo;
            </blockquote>
            <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 400, color: "rgba(5,38,46,0.5)", marginTop: "12px", letterSpacing: "0.05em" }}>
              Kika Hernandes, fundadora e CEO da Pipa
            </p>
          </div>

        </div>
      </section>

      {/* C4 · Para quem é (Ink) */}
      <section style={{ backgroundColor: INK }}>
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 py-16 md:py-24">
          <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: WHITE, marginBottom: "40px" }}>
            Para quem é este produto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ maxWidth: "960px" }}>
            <div>
              <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(232,224,214,0.5)", marginBottom: "16px" }}>
                Para quem é
              </p>
              <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: WHITE }}>
                Fundadoras e fundadores que precisam de um par executivo por período determinado: uma decisão estratégica que exige presença, um período de transição com múltiplas variáveis ou um projeto específico que não espera o tempo de uma contratação permanente.
              </p>
            </div>
            <div>
              <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(232,224,214,0.5)", marginBottom: "16px" }}>
                Para quem não é
              </p>
              <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: WHITE }}>
                Quem quer uma reunião mensal de orientação, quem precisa de relatório mais do que de presença, ou quem ainda não tem clareza do que precisa mudar. Nesse último caso, o pocket do INSPIRA ou o INSPIRA completo vem antes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C5 · Formato e dedicação (Teal) */}
      <section style={{ backgroundColor: TEAL }}>
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 py-16 md:py-24">
          <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: WHITE, marginBottom: "32px" }}>
            Formato e dedicação
          </h2>
          <div style={{ maxWidth: "680px" }}>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: WHITE, marginBottom: "16px" }}>
              O engajamento é desenhado por resultado, com período, carga e critérios de verificação acordados antes do início. Sessões semanais até o primeiro marco acordado, quinzenais para acompanhamento e ajuste de rota.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: WHITE, marginBottom: "32px" }}>
              Quando o escopo exige continuidade, a extensão é pactuada antes do encerramento.
            </p>
            <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 400, color: SAND }}>
              Escopo, carga e investimento: sob consulta e disponibilidade.
            </p>
          </div>
        </div>
      </section>

      {/* C6 · CTA final (Sand) */}
      <FinalCTA
        heading="Se o que você leu aqui descreve o que você precisa, o próximo passo é uma conversa, não um compromisso."
        ctaLabel="RESPIRE"
        origin={ORIGINS.FAISCA}
        theme="light"
      />
    </>
  );
}
