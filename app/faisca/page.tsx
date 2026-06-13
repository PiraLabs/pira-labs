export const dynamic = 'force-static';

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { ORIGINS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Faísca", url: "https://piralabs.com.br/faisca" },
]);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://piralabs.com.br/faisca#itemlist",
  name: "Faísca · Produtos de entrada da Pira Labs",
  description:
    "Formatos de escopo definido para experimentar o método da Pira Labs antes de qualquer compromisso maior.",
  url: "https://piralabs.com.br/faisca",
  numberOfItems: 5,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Imersão em IA", url: "https://piralabs.com.br/faisca/imersa-em-ia" },
    { "@type": "ListItem", position: 2, name: "Oxigênio IA Search", url: "https://piralabs.com.br/inspira/oxigenio" },
    { "@type": "ListItem", position: 3, name: "pocket do INSPIRA", url: "https://piralabs.com.br/faisca/pocket" },
    { "@type": "ListItem", position: 4, name: "C-level as a Service", url: "https://piralabs.com.br/faisca/c-level-as-a-service" },
    { "@type": "ListItem", position: 5, name: "Faísca Jurídica", url: "https://piralabs.com.br/faisca/juridica" },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: "Faísca · Porta de entrada da Pira Labs",
  },
  description:
    "Faísca reúne as portas de entrada da Pira Labs: formatos de escopo definido para experimentar o método antes de qualquer compromisso maior.",
  alternates: {
    canonical: "https://piralabs.com.br/faisca",
  },
  openGraph: {
    title: "Faísca · Porta de entrada da Pira Labs",
    description:
      "Formatos de escopo definido para experimentar o método da Pira Labs antes de qualquer compromisso maior.",
    url: "https://piralabs.com.br/faisca",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Faísca" },
];

const INK  = "#05262e"
const TEAL = "#004757"
const SAND = "#e8e0d6"
const WHITE = "#F5F5F2"

export default function FaiscaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* F1 · Header (Ink) */}
      <div style={{ backgroundColor: INK }}>
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Faísca"
          subtitle="Faísca reúne as portas de entrada da Pira Labs: formatos de escopo definido para experimentar o método antes de qualquer compromisso maior."
        />
      </div>

      {/* F2 · Declaração (Sand) */}
      <section style={{ backgroundColor: SAND }}>
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 py-16 md:py-24">
          <div style={{ maxWidth: "680px" }} className="space-y-5">
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: INK }}>
              Faísca reúne as portas de entrada da Pira Labs. Algumas têm escopo fechado e preço fixo. Outras exigem conversa prévia, porque dependem de escopo, disponibilidade e contexto.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: INK }}>
              Em todos os casos, a lógica é a mesma: antes de comprometer um projeto maior, você experimenta o método da Pira Labs na prática e sai com algo concreto, mesmo que nada venha depois.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: INK }}>
              O ponto de entrada certo depende do que você está vivendo agora. Se não tiver certeza, a conversa de triagem resolve.
            </p>
          </div>
        </div>
      </section>

      {/* F3 · Grupo 1 (Teal) */}
      <section style={{ backgroundColor: TEAL }}>
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 py-16 md:py-24">

          {/* Eyebrow */}
          <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: SAND, marginBottom: "24px" }}>
            Para começar com escopo fechado
          </p>

          <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: WHITE, marginBottom: "8px" }}>
            Para começar com escopo fechado
          </h2>
          <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, color: SAND, marginBottom: "48px" }}>
            Preço fixo, entrega definida, sem atrito de entrada.
          </p>

          {/* Cards Grupo 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            {/* Card Imersão em IA */}
            <div style={{ border: "1px solid rgba(232,224,214,0.15)", borderRadius: "2px", padding: "32px", display: "flex", flexDirection: "column", backgroundColor: "rgba(0,71,87,0.4)" }}>
              <div style={{ flex: 1 }}>
                <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: SAND, marginBottom: "16px" }}>
                  Celso Gama
                </p>
                <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 600, color: WHITE, marginBottom: "12px", lineHeight: 1.2 }}>
                  Imersão em IA
                </h3>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 400, color: SAND, marginBottom: "16px", lineHeight: 1.6 }}>
                  Sai sabendo o que a IA pode fazer no seu negócio, o que não deve fazer ainda e por onde começar.
                </p>
                <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(232,224,214,0.75)", lineHeight: 1.7, marginBottom: "24px" }}>
                  Não é curso. É um trabalho estruturado com os casos reais do seu negócio. Dois dias organizados em três blocos: cultura e adaptação, execução de processos com casos concretos e próximos passos de implementação. A IA entra depois que o problema está nomeado, não antes.
                </p>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 600, color: SAND, marginBottom: "0" }}>
                  R$7.100
                </p>
              </div>
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/faisca/imersa-em-ia"
                  className="font-body"
                  style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: WHITE, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  aria-label="Ver produto Imersão em IA"
                >
                  Ver Imersão em IA
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card Oxigênio IA Search */}
            <div style={{ border: "1px solid rgba(232,224,214,0.15)", borderRadius: "2px", padding: "32px", display: "flex", flexDirection: "column", backgroundColor: "rgba(0,71,87,0.4)" }}>
              <div style={{ flex: 1 }}>
                <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: SAND, marginBottom: "16px" }}>
                  Celso Gama
                </p>
                <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 600, color: WHITE, marginBottom: "12px", lineHeight: 1.2 }}>
                  Oxigênio IA Search
                </h3>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 400, color: SAND, marginBottom: "16px", lineHeight: 1.6 }}>
                  Sai sabendo onde sua empresa aparece nas plataformas de IA, onde não aparece e por quê.
                </p>
                <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(232,224,214,0.75)", lineHeight: 1.7, marginBottom: "24px" }}>
                  Diagnóstico de presença e citabilidade em IA Search. Queries executadas nas principais plataformas, respostas coletadas e classificadas, gap nomeado com causa específica e ações estruturadas para fechar a distância.
                </p>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 600, color: SAND, marginBottom: "0" }}>
                  Fast R$3.500 · Full R$5.300
                </p>
              </div>
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/inspira/oxigenio"
                  className="font-body"
                  style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: WHITE, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  aria-label="Ver produto Oxigênio IA Search"
                >
                  Ver Oxigênio IA Search
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card pocket do INSPIRA */}
            <div style={{ border: "1px solid rgba(232,224,214,0.15)", borderRadius: "2px", padding: "32px", display: "flex", flexDirection: "column", backgroundColor: "rgba(0,71,87,0.4)" }}>
              <div style={{ flex: 1 }}>
                <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: SAND, marginBottom: "16px" }}>
                  Gabriela Aguiar + Celso Gama
                </p>
                <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 600, color: WHITE, marginBottom: "12px", lineHeight: 1.2 }}>
                  pocket do INSPIRA
                </h3>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 400, color: SAND, marginBottom: "16px", lineHeight: 1.6 }}>
                  Sai com uma leitura integrada do momento do negócio e os próximos passos prioritários.
                </p>
                <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(232,224,214,0.75)", lineHeight: 1.7, marginBottom: "24px" }}>
                  Versão compacta do diagnóstico INSPIRA para quem precisa de clareza antes de decidir o próximo movimento. Uma sessão de 1h30. Mercado, financeiro e visibilidade em IA lidos em conjunto. O problema nomeado sem comprometer um projeto completo.
                </p>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 600, color: SAND, marginBottom: "0" }}>
                  R$3.900
                </p>
              </div>
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/faisca/pocket"
                  className="font-body"
                  style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: WHITE, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  aria-label="Ver produto pocket do INSPIRA"
                >
                  Ver pocket do INSPIRA
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Nota de postura */}
          <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 300, color: "rgba(232,224,214,0.5)", lineHeight: 1.6 }}>
            Preço fixo e escopo fechado. Você sabe o que compra antes de assinar.
          </p>

        </div>
      </section>

      {/* F4 · Grupo 3 (Ink) */}
      <section style={{ backgroundColor: INK }}>
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 py-16 md:py-24">

          {/* Eyebrow */}
          <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(232,224,214,0.5)", marginBottom: "24px" }}>
            Para demandas que exigem alinhamento prévio
          </p>

          <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: WHITE, marginBottom: "8px" }}>
            Para demandas que exigem alinhamento prévio
          </h2>
          <p className="font-body" style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(245,245,242,0.7)", marginBottom: "48px" }}>
            Algumas entradas não podem ser contratadas diretamente. Exigem conversa prévia porque dependem de escopo, presença e contexto.
          </p>

          {/* Cards Grupo 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card C-level as a Service */}
            <div style={{ border: "1px solid rgba(245,245,242,0.1)", borderRadius: "2px", padding: "32px", display: "flex", flexDirection: "column" }}>
              <div style={{ flex: 1 }}>
                <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,245,242,0.4)", marginBottom: "16px" }}>
                  Gabriela Aguiar
                </p>
                <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 600, color: WHITE, marginBottom: "12px", lineHeight: 1.2 }}>
                  C-level as a Service
                </h3>
                <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(245,245,242,0.75)", lineHeight: 1.7, marginBottom: "16px" }}>
                  Não é mentoria. Gabriela Aguiar atua como C-level fracionado com presença ativa no processo de decisão do cliente, por período e carga definidos antes do início. A diferença está em estar dentro, não fora observando.
                </p>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 400, color: "rgba(245,245,242,0.5)", lineHeight: 1.6, marginBottom: "8px" }}>
                  Case verificado: Pipa, ateliê de confeitaria artesanal, São Paulo.
                </p>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 600, color: "rgba(245,245,242,0.5)" }}>
                  Sob consulta
                </p>
              </div>
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/faisca/c-level-as-a-service"
                  className="font-body"
                  style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: WHITE, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  aria-label="Ver produto C-level as a Service"
                >
                  Ver C-level as a Service
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card Faísca Jurídica */}
            <div style={{ border: "1px solid rgba(245,245,242,0.1)", borderRadius: "2px", padding: "32px", display: "flex", flexDirection: "column" }}>
              <div style={{ flex: 1 }}>
                <p className="font-body" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,245,242,0.4)", marginBottom: "16px" }}>
                  Celso Gama
                </p>
                <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 600, color: WHITE, marginBottom: "12px", lineHeight: 1.2 }}>
                  Faísca Jurídica
                </h3>
                <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(245,245,242,0.75)", lineHeight: 1.7, marginBottom: "16px" }}>
                  Oficina executiva para escritórios de advocacia, áreas jurídicas corporativas e instituições de ensino. Governança operacional de IA com supervisão humana.
                </p>
                <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(245,245,242,0.75)", lineHeight: 1.7, marginBottom: "16px" }}>
                  Não começa pela ferramenta. Começa pelo fluxo: onde a IA pode ajudar em pesquisa preliminar, organização de informação e gestão de conhecimento; onde ela não deve entrar sem revisão técnica, cuidado com sigilo e responsabilidade profissional.
                </p>
                <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(245,245,242,0.75)", lineHeight: 1.7, marginBottom: "16px" }}>
                  Para quem: sócias e sócios de escritórios, heads jurídicos, professoras e professores, coordenadoras e coordenadores de cursos de Direito.
                </p>
                <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 300, color: "rgba(245,245,242,0.4)", lineHeight: 1.6, marginBottom: "8px" }}>
                  Este produto não presta consultoria jurídica, não substitui advogadas e advogados habilitados e não define estratégia de caso.
                </p>
                <p className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 600, color: "rgba(245,245,242,0.5)" }}>
                  Sob consulta
                </p>
              </div>
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/faisca/juridica"
                  className="font-body"
                  style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: WHITE, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  aria-label="Ver produto Faísca Jurídica"
                >
                  Ver Faísca Jurídica
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* F5 · CTA final (Sand) */}
      <FinalCTA
        heading="O ponto de entrada certo depende do momento. Conte o contexto."
        ctaLabel="RESPIRE"
        origin={ORIGINS.FAISCA}
        theme="light"
      />
    </>
  );
}
