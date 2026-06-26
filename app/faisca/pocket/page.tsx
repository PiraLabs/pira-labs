export const dynamic = 'force-static';

import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { ORIGINS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/faisca/pocket#service",
  name: "Pocket do INSPIRA",
  description: "Leitura diagnóstica inicial em três dimensões: mercado, financeiro e presença em motores de inteligência artificial. Sessão de 1,5h. Gabriela Aguiar conduz, Celso Gama opera os agentes de IA em tempo real.",
  provider: { "@id": "https://piralabs.com.br/#organization" },
  serviceType: "Leitura diagnóstica inicial",
  offers: {
    "@type": "Offer",
    name: "Pocket do INSPIRA",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "3900",
      priceCurrency: "BRL",
    },
  },
};

const faqItems = [
  {
    question: "O que é o pocket do INSPIRA?",
    answer: "É uma leitura diagnóstica inicial em três dimensões: mercado, financeiro e presença em plataformas de IA. Rodado em uma sessão de 1,5h com Gabriela Aguiar conduzindo e Celso Gama operando os agentes de IA em tempo real. Você sai com uma síntese integrada dessas três dimensões e próximos passos prioritários.",
  },
  {
    question: "Qual a diferença entre o pocket e o INSPIRA completo?",
    answer: "O INSPIRA completo roda seis camadas em 4 a 6 semanas com síntese integrada e aprovação humana em cada etapa. O pocket roda três dimensões em 1,5h. O pocket responde por onde começo? O INSPIRA responde o que está acontecendo de verdade? Um não substitui o outro.",
  },
  {
    question: "Qual a diferença entre o pocket e o Oxigênio IA Search?",
    answer: "O Oxigênio IA Search é um diagnóstico dedicado exclusivamente à presença em plataformas de IA Search, com análise de queries, plataformas e concorrentes. O pocket inclui uma leitura de presença em IA como um dos três formulários, junto com mercado e financeiro. Se o único ponto de atenção é presença em IA, o Oxigênio IA Search é o produto certo.",
  },
  {
    question: "O que recebo ao final da sessão?",
    answer: "Síntese inicial com leitura integrada das três dimensões e próximos passos prioritários ordenados por urgência e esforço. A leitura é entregue na própria sessão, com tempo para perguntas e alinhamento.",
  },
  {
    question: "Preciso preparar algo antes?",
    answer: "Não há material obrigatório. Os formulários são rodados durante a sessão. Uma boa preparação é chegar com uma questão específica em mente: o que mais incomoda hoje, o que você quer entender melhor. Se houver site, proposta comercial, apresentação institucional ou página de produto, o envio prévio ajuda a melhorar a leitura.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Faísca", url: "https://piralabs.com.br/faisca" },
  { name: "Pocket do INSPIRA", url: "https://piralabs.com.br/faisca/pocket" },
]);

export const metadata: Metadata = {
  title: {
    absolute: "Pocket do INSPIRA · Leitura diagnóstica inicial · Pira Labs",
  },
  description: "Leitura diagnóstica compacta em 1,5h. Gabriela Aguiar conduz. Celso Gama opera os agentes. R$3.900. Mercado, financeiro e presença em IA em síntese integrada.",
  alternates: {
    canonical: "https://piralabs.com.br/faisca/pocket",
  },
  openGraph: {
    title: "Pocket do INSPIRA · Pira Labs",
    description: "Leitura diagnóstica inicial em três dimensões: mercado, financeiro e presença em IA. Sessão de 1,5h. R$3.900.",
    url: "https://piralabs.com.br/faisca/pocket",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Faísca", href: "/faisca" },
  { label: "Pocket do INSPIRA" },
];

const EYEBROW = {
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
};

export default function PocketPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      {/* P1 · Header (Ink) */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="pocket do INSPIRA"
          subtitle="Três dimensões do negócio em 1,5 hora. Clareza inicial, sem abrir um projeto completo."
        />
      </div>

      {/* P2 · O que é + Ficha técnica + CTA (Sand) */}
      <section style={{ backgroundColor: '#E8E0D6' }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ ...EYEBROW, color: "#1A5568", marginBottom: "24px" }}>
            O QUE É
          </p>
          <h2 className="type-h1" style={{ fontWeight: 400, color: "#05262e", marginBottom: "24px", lineHeight: 1.4 }}>
            A pergunta que o pocket responde é uma só: por onde começo?
          </h2>
          <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#05262e", lineHeight: 1.75, marginBottom: "16px" }}>
            Uma sessão de 1,5 hora com leitura estruturada de três dimensões do negócio: mercado, financeiro e presença em IA. Gabriela Aguiar conduz. Celso Gama opera os agentes de IA em tempo real. Você sai com uma síntese integrada das três dimensões e os próximos passos prioritários.
          </p>
          <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#05262e", lineHeight: 1.75, marginBottom: "16px" }}>
            É diagnóstico inicial com metodologia, entregue na própria sessão, sem semanas de processo.
          </p>

          {/* Ficha técnica */}
          <div style={{ maxWidth: "480px", border: "1px solid rgba(5,38,46,0.12)", borderRadius: "0", marginBottom: "32px", marginTop: "40px" }}>
            <div style={{ padding: "20px 24px", paddingBottom: "24px", borderBottom: "1px solid rgba(5,38,46,0.12)" }}>
              <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#05262e", marginBottom: "8px" }}>
                INVESTIMENTO
              </p>
              <p className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1, color: "#C4421A", letterSpacing: "-0.02em" }}>
                R$ 3.900
              </p>
            </div>
            <div style={{ padding: "14px 24px", borderBottom: "1px solid rgba(5,38,46,0.12)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="font-body" style={{ fontSize: "13px", fontWeight: 300, color: "#05262e" }}>Formato</span>
              <span className="font-body" style={{ fontSize: "13px", fontWeight: 600, color: "#05262e" }}>1,5h online</span>
            </div>
            <div style={{ padding: "14px 24px", borderBottom: "1px solid rgba(5,38,46,0.12)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="font-body" style={{ fontSize: "13px", fontWeight: 300, color: "#05262e" }}>Conduz a sessão</span>
              <span className="font-body" style={{ fontSize: "13px", fontWeight: 600, color: "#05262e" }}>Gabriela Aguiar</span>
            </div>
            <div style={{ padding: "14px 24px", borderBottom: "1px solid rgba(5,38,46,0.12)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="font-body" style={{ fontSize: "13px", fontWeight: 300, color: "#05262e" }}>Opera os agentes de IA</span>
              <span className="font-body" style={{ fontSize: "13px", fontWeight: 600, color: "#05262e" }}>Celso Gama</span>
            </div>
            <div style={{ padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="font-body" style={{ fontSize: "13px", fontWeight: 300, color: "#05262e" }}>Entrega</span>
              <span className="font-body" style={{ fontSize: "13px", fontWeight: 600, color: "#05262e" }}>Síntese integrada na sessão</span>
            </div>
          </div>

          <a
            href="/contato?origem=faisca_pocket"
            className="btn-primary"
          >
            RESPIRE →
          </a>
          <span className="font-body" style={{ display: "block", color: "#05262e", fontSize: "12px", marginTop: "8px" }}>
            Sessão de 1,5h online. Respondemos em até 2 dias úteis.
          </span>
        </div>
      </section>

      {/* P3 · Três formulários + O que recebe + CTA (Teal) */}
      <section style={{ backgroundColor: '#004757' }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "32px" }}>
            O QUE ACONTECE
          </p>
          <h2 className="type-h1" style={{ color: "#F5F5F2", fontWeight: 600, marginBottom: "40px", lineHeight: 1.1 }}>
            Três <span style={{ color: "#eb5c2e" }}>formulários</span>. Uma síntese.
          </h2>

          {/* Formulário 01 */}
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "0 32px", borderBottom: "1px solid rgba(245,245,242,0.12)", paddingBottom: "40px", marginBottom: "40px", alignItems: "start" }}>
            <div style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 300, lineHeight: 1, color: "#e8e0d6", fontFamily: "var(--font-atyp-display)", letterSpacing: "-0.04em", paddingTop: "4px" }}>
              01
            </div>
            <div>
              <h3 className="font-display" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", fontWeight: 600, color: "#F5F5F2", marginBottom: "12px", lineHeight: 1.2 }}>
                Formulário 1 · Mercado
              </h3>
              <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "#e8e0d6" }}>
                Como a empresa se posiciona, quem atende e o que diferencia na percepção do cliente. Não é pesquisa de mercado. É leitura da relação entre a empresa e o território onde opera.
              </p>
            </div>
          </div>

          {/* Formulário 02 */}
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "0 32px", borderBottom: "1px solid rgba(245,245,242,0.12)", paddingBottom: "40px", marginBottom: "40px", alignItems: "start" }}>
            <div style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 300, lineHeight: 1, color: "#e8e0d6", fontFamily: "var(--font-atyp-display)", letterSpacing: "-0.04em", paddingTop: "4px" }}>
              02
            </div>
            <div>
              <h3 className="font-display" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", fontWeight: 600, color: "#F5F5F2", marginBottom: "12px", lineHeight: 1.2 }}>
                Formulário 2 · Financeiro
              </h3>
              <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "#e8e0d6" }}>
                Onde a pressão econômica está concentrada. Onde a margem vaza, onde o custo é opaco, onde o crescimento não se traduz em resultado. Sem acesso a balanços. Com perguntas direcionadas.
              </p>
            </div>
          </div>

          {/* Formulário 03 */}
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "0 32px", alignItems: "start" }}>
            <div style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 300, lineHeight: 1, color: "#e8e0d6", fontFamily: "var(--font-atyp-display)", letterSpacing: "-0.04em", paddingTop: "4px" }}>
              03
            </div>
            <div>
              <h3 className="font-display" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", fontWeight: 600, color: "#F5F5F2", marginBottom: "12px", lineHeight: 1.2 }}>
                Formulário 3 · Presença em IA
              </h3>
              <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "#e8e0d6" }}>
                Como a empresa aparece para plataformas de IA Search a partir do ICP informado e das buscas mais relevantes para o setor.
              </p>
            </div>
          </div>

          {/* O que você recebe ao final */}
          <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(245,245,242,0.12)" }}>
            <p className="font-body" style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "16px" }}>
              O QUE VOCÊ RECEBE AO FINAL
            </p>
            <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#e8e0d6", lineHeight: 1.75 }}>
              Síntese inicial com leitura integrada das três dimensões. Os pontos de convergência entre mercado, financeiro e presença em IA. Os próximos passos prioritários ordenados por urgência e esforço.
            </p>
            <div style={{ marginTop: "32px" }}>
              <a
                href="/contato?origem=faisca_pocket"
                className="font-body"
                style={{ color: "#F5F5F2", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}
              >
                Reservar uma sessão &#8594;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* P4 · Para quem é + Postura + Dados (Ink) */}
      <section style={{ backgroundColor: '#05262e' }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "32px" }}>
            PARA QUEM É
          </p>
          <h2 className="type-h1" style={{ color: "#F5F5F2", fontWeight: 600, marginBottom: "40px", lineHeight: 1.1 }}>
            Para quem é
          </h2>

          <div style={{ borderBottom: "1px solid rgba(245,245,242,0.12)", paddingBottom: "24px", marginBottom: "24px" }}>
            <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#F5F5F2", lineHeight: 1.75 }}>
              Fundadora ou fundador que quer uma primeira leitura estruturada antes de comprometer semanas com o INSPIRA completo. O pocket entrega diagnóstico inicial com metodologia em uma tarde.
            </p>
          </div>
          <div style={{ borderBottom: "1px solid rgba(245,245,242,0.12)", paddingBottom: "24px", marginBottom: "24px" }}>
            <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#F5F5F2", lineHeight: 1.75 }}>
              Decisora ou decisor com uma questão específica que precisa de leitura rápida com critério: minha empresa aparece bem nas plataformas de IA? Onde está vazando margem? Como o mercado me lê?
            </p>
          </div>
          <div>
            <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#F5F5F2", lineHeight: 1.75 }}>
              Empresa em movimento, com rebrand, nova frente ou mudança de ICP, que quer calibragem rápida antes de agir. Não para substituir o diagnóstico completo, mas para informar a decisão imediata.
            </p>
          </div>

          <div style={{ marginTop: "48px" }}>
            <p className="font-body" style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "16px" }}>
              NÃO FAZ SENTIDO SE
            </p>
            <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#e8e0d6", lineHeight: 1.75 }}>
              Você precisa de redesenho estrutural de trabalho, modelo de delegação ou governança de IA. O pocket entregará leitura útil, mas o próximo passo imediato será o INSPIRA completo ou o TRANSPIRA.
            </p>
          </div>

          <div style={{ marginTop: "48px" }}>
            <p className="font-body" style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "16px" }}>
              POSTURA DO PRODUTO
            </p>
            <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#e8e0d6", lineHeight: 1.75 }}>
              O pocket do INSPIRA é leitura inicial com metodologia. Não substitui o INSPIRA completo, que roda seis camadas em 4 a 6 semanas com aprovação humana em cada etapa. O pocket responde: por onde começo? O INSPIRA responde: o que está acontecendo de verdade? Um não substitui o outro.
            </p>
          </div>

          <div style={{ marginTop: "48px" }}>
            <p className="font-body" style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "16px" }}>
              DADOS E CONFIDENCIALIDADE
            </p>
            <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#e8e0d6", lineHeight: 1.75, marginBottom: "16px" }}>
              Empresas que operam com informações sensíveis chegam com a mesma dúvida: o que posso compartilhar numa sessão diagnóstica e o que não posso. Essa pergunta tem resposta, e respondê-la faz parte do processo.
            </p>
            <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#e8e0d6", lineHeight: 1.75, marginBottom: "16px" }}>
              Os formulários trabalham sobre o que o decisor compartilha na sessão. Dados sensíveis, dados pessoais, informações de clientes e documentos confidenciais só entram com critério e alinhamento prévio. O objetivo da sessão é ler o negócio com metodologia, não expor o que não precisa ser exposto.
            </p>
          </div>

          <div style={{ marginTop: "48px" }}>
            <a
              href="/contato?origem=faisca_pocket"
              className="font-body"
              style={{ color: "#F5F5F2", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}
            >
              Falar sobre o momento da empresa &#8594;
            </a>
          </div>
        </div>
      </section>

      {/* P5 · Quem conduz (Sand) */}
      <section style={{ backgroundColor: '#E8E0D6' }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ ...EYEBROW, color: "#1A5568", marginBottom: "32px" }}>
            CONDUÇÃO
          </p>
          <h2 className="type-h1" style={{ color: "#05262e", fontWeight: 600, marginBottom: "40px", lineHeight: 1.1 }}>
            Quem <span style={{ color: "#C4421A" }}>conduz</span>
          </h2>

          <div style={{ borderBottom: "1px solid rgba(5,38,46,0.12)", paddingBottom: "32px", marginBottom: "32px" }}>
            <p className="font-body" style={{ fontSize: "16px", fontWeight: 600, color: "#05262e", marginBottom: "12px" }}>
              Gabriela Aguiar
            </p>
            <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#05262e", lineHeight: 1.75, marginBottom: "16px" }}>
              Conduz a sessão e faz a leitura integrada das três dimensões. MIT Universal AI Foundational Modules (em andamento, 2026). Docente em programas de MBA na FIAP e no Instituto Cidades Responsivas. Mentora FGV Ventures.
            </p>
            <a
              href="/sobre#sobre-gabriela"
              className="font-body"
              style={{ color: "#05262e", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}
            >
              Gabriela Aguiar &#8594;
            </a>
          </div>

          <div>
            <p className="font-body" style={{ fontSize: "16px", fontWeight: 600, color: "#05262e", marginBottom: "12px" }}>
              Celso Gama
            </p>
            <p className="font-body" style={{ fontSize: "15px", fontWeight: 300, color: "#05262e", lineHeight: 1.75, marginBottom: "16px" }}>
              Opera os agentes de IA em tempo real durante a sessão. Enquanto Gabriela conduz a leitura, Celso roda os formulários, processa as respostas e entrega a síntese ainda dentro da sessão. Applied AI Certificate Program (MIT, em andamento, 2026). Bacharelando em Direito (Mackenzie).
            </p>
            <a
              href="/sobre#sobre-celso"
              className="font-body"
              style={{ color: "#05262e", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}
            >
              Celso Gama &#8594;
            </a>
          </div>
        </div>
      </section>

      {/* P6 · FAQ (Ink) */}
      <section style={{ backgroundColor: '#05262e' }} className="py-16 md:py-24">
        <div className="container-site hr-on-dark-b">
          <p className="font-body" style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "32px" }}>
            DÚVIDAS COMUNS
          </p>
          <h2 className="type-h1" style={{ color: "#F5F5F2", fontWeight: 600, marginBottom: "40px" }}>
            Perguntas frequentes
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} style={{ borderBottom: i === faqItems.length - 1 ? "none" : "1px solid rgba(245,245,242,0.12)" }}>
              <summary
                className="font-body"
                style={{ cursor: "pointer", color: "#F5F5F2", fontSize: "16px", fontWeight: 600, padding: "20px 0", listStyle: "none" }}
              >
                {item.question}
              </summary>
              <p
                className="font-body"
                style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, padding: "0 0 24px 0" }}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <FinalCTA
        heading="Antes de confirmar, conversamos para garantir que o pocket do INSPIRA é o produto certo para o momento."
        ctaLabel="RESPIRE"
        origin={ORIGINS.FAISCA_POCKET}
        theme="dark"
      />
    </>
  );
}
