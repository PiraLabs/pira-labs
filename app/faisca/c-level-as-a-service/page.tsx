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
          <h2 className="type-h1" style={{ color: WHITE, marginBottom: "40px" }}>
            C-level fracionado com{" "}
            <span style={{ color: "#eb5c2e" }}>presença</span>{" "}
            no processo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ maxWidth: "960px" }}>
            <div>
              <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: SAND, marginBottom: "16px" }}>
                O que é
              </p>
              <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: WHITE }}>
                Gabriela Aguiar atua como C-level fracionado com presença ativa no processo de decisão do cliente por período definido. Pacote de horas e dedicação acordados antes do início. Extensão pode ser pactuada quando o projeto exige continuidade.
              </p>
            </div>
            <div>
              <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: SAND, marginBottom: "16px" }}>
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

          {/* Eyebrow + H2 */}
          <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A5568", marginBottom: "16px" }}>
            Como funciona na prática
          </p>
          <h2 className="type-h1" style={{ color: INK, marginBottom: "48px" }}>
            Case Pipa
          </h2>

          {/* Depoimento principal — topo, grande, para o ICP que chegou pelo depoimento */}
          <div style={{ maxWidth: "800px", marginBottom: "64px" }}>
            <blockquote className="font-display" style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)", fontWeight: 400, lineHeight: 1.5, color: INK, margin: 0, padding: 0, marginBottom: "24px" }}>
              &ldquo;Me deu muito foco de como direcionar melhor um produto que é tão rico e monetizar de uma maneira estratégica sem perder o valor da marca. Encaixou de maneira bem clara, com ferramentas fáceis, trazendo conhecimento para problemas que pareciam tão complexos.&rdquo;
            </blockquote>
            {/* Identidade do cliente */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img
                src="/pipa-logo.png"
                alt="Logo Pipa"
                style={{ height: "48px", width: "auto", borderRadius: "4px" }}
              />
              <div>
                <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 600, color: INK, marginBottom: "2px" }}>
                  Kika Hernandes
                </p>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 300, color: "#b0a596" }}>
                  Fundadora e CEO da Pipa ·{" "}
                  <a
                    href="https://www.instagram.com/pausapipa"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#eb5c2e", textDecoration: "none", fontWeight: 400 }}
                  >
                    @pausapipa
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Grid: contexto + o que foi feito */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ maxWidth: "960px", marginBottom: "64px" }}>
            <div>
              <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A5568", marginBottom: "20px" }}>
                O contexto
              </p>
              {/* Identidade resumida */}
              <div style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid rgba(5,38,46,0.1)" }}>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 400, color: INK, marginBottom: "2px" }}>
                  Pipa: ateliê de confeitaria artesanal
                </p>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 300, color: "rgba(5,38,46,0.6)", marginBottom: "2px" }}>
                  São Paulo · Fevereiro a maio de 2025
                </p>
              </div>
              <p className="font-body" style={{ fontSize: "0.9375rem", fontWeight: 300, color: "#05262e", lineHeight: 1.75 }}>
                A Pipa chegou com um produto central forte e posicionamento ainda indefinido. O portfólio tinha escopo estreito, a precificação não refletia o valor percebido e a estrutura digital não sustentava o crescimento que o produto merecia.
              </p>
            </div>

            <div>
              <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A5568", marginBottom: "20px" }}>
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
                  <li key={item} className="font-body flex items-start gap-3" style={{ fontSize: "0.875rem", fontWeight: 300, color: "#05262e", lineHeight: 1.6 }}>
                    <span style={{ color: INK, flexShrink: 0, marginTop: "2px" }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resultados — escala de evidência */}
          <div style={{ marginBottom: "64px" }}>
            <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1A5568", marginBottom: "32px" }}>
              Resultados verificados
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ maxWidth: "960px" }}>
              <div style={{ borderTop: "1px solid rgba(5,38,46,0.12)", paddingTop: "20px" }}>
                <p className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 600, color: INK, lineHeight: 1, marginBottom: "8px", letterSpacing: "-0.02em" }}>
                  2 → 4
                </p>
                <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "#b0a596", lineHeight: 1.5 }}>
                  produtos no portfólio
                </p>
              </div>
              <div style={{ borderTop: "1px solid rgba(5,38,46,0.12)", paddingTop: "20px" }}>
                <p className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 600, color: INK, lineHeight: 1, marginBottom: "8px", letterSpacing: "-0.02em" }}>
                  +90%
                </p>
                <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "#b0a596", lineHeight: 1.5 }}>
                  ticket médio: de R$280 para R$530
                </p>
              </div>
              <div style={{ borderTop: "1px solid rgba(5,38,46,0.12)", paddingTop: "20px" }}>
                <p className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 600, color: INK, lineHeight: 1, marginBottom: "8px", letterSpacing: "-0.02em" }}>
                  Oxigênio
                </p>
                <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "#b0a596", lineHeight: 1.5 }}>
                  estruturação digital: Instagram e LinkedIn · site em breve
                </p>
              </div>
            </div>
          </div>

          {/* Depoimento secundário */}
          <div style={{ maxWidth: "720px", borderLeft: "2px solid rgba(5,38,46,0.15)", paddingLeft: "32px" }}>
            <blockquote className="font-display" style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", fontWeight: 300, lineHeight: 1.6, color: "#05262e", margin: 0, padding: 0 }}>
              &ldquo;Como se todo aquele medo de empreender aliviasse. A Pira Labs apresenta possibilidades para encarar os desafios reais. É como se apresentasse o mapa do caminho das pedras, e ficasse mais fácil caminhar nessa jornada.&rdquo;
            </blockquote>
            <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 400, color: "#b0a596", marginTop: "12px" }}>
              Kika Hernandes, fundadora e CEO da Pipa
            </p>
          </div>

        </div>
      </section>

      {/* C4 · Para quem é (Ink) */}
      <section style={{ backgroundColor: INK }}>
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 py-16 md:py-24">
          <h2 className="type-h1" style={{ color: WHITE, marginBottom: "40px" }}>
            Para quem é este produto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ maxWidth: "960px" }}>
            <div>
              <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: SAND, marginBottom: "16px" }}>
                Para quem é
              </p>
              <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: WHITE }}>
                Fundadoras e fundadores que precisam de um par executivo por período determinado: uma decisão estratégica que exige presença, um período de transição com múltiplas variáveis ou um projeto específico que não espera o tempo de uma contratação permanente.
              </p>
            </div>
            <div>
              <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: SAND, marginBottom: "16px" }}>
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
          <h2 className="type-h1" style={{ color: WHITE, marginBottom: "32px" }}>
            Formato e dedicação
          </h2>
          <div style={{ maxWidth: "680px" }}>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: WHITE, marginBottom: "16px" }}>
              O engajamento é desenhado por <span style={{ color: "#eb5c2e" }}>resultado</span>, com período, carga e critérios de verificação acordados antes do início. Sessões semanais até o primeiro marco acordado, quinzenais para acompanhamento e ajuste de rota.
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
        origin={ORIGINS.FAISCA_CLEVEL}
        theme="dark"
      />
    </>
  );
}
