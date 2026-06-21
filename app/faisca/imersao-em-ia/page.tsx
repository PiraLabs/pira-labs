export const dynamic = 'force-static';

import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { ORIGINS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/faisca/imersao-em-ia#service",
  name: "Imersão em IA",
  description: "Sessão de trabalho com IA sobre os processos reais da empresa. Três sessões, 5,5 horas total. Conduzido por Celso Gama.",
  provider: { "@id": "https://piralabs.com.br/#organization" },
  serviceType: "Sessão prática de IA aplicada à operação",
  offers: {
    "@type": "Offer",
    name: "Imersão em IA",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "7100",
      priceCurrency: "BRL",
    },
  },
};

const faqItems = [
  {
    question: "Isso é um curso de IA?",
    answer: "Não. Um curso ensina conceitos e ferramentas em formato genérico. A Imersão em IA trabalha sobre os processos, documentos e casos reais da sua empresa. O que sai de cada sessão é aplicável no dia seguinte, não num contexto hipotético.",
  },
  {
    question: "Preciso já ter IA implementada?",
    answer: "Não. A Imersão em IA funciona para quem está começando agora e para quem já usa mas sem método. O ponto de partida é o que a empresa tem, não o que ela deveria ter.",
  },
  {
    question: "Qual a diferença para o Oxigênio IA Search?",
    answer: "O Oxigênio IA Search é um diagnóstico de presença e citabilidade da empresa nas plataformas de IA Search: onde você aparece, onde não aparece e por quê. A Imersão em IA trabalha o uso interno de IA na operação da empresa. São problemas diferentes. Algumas empresas precisam dos dois, em ordens que dependem do momento.",
  },
  {
    question: "O que recebo ao final?",
    answer: "Ao final das três sessões: prompts de base para as rotinas do dia a dia, mapa dos casos aplicados com resultado dos testes, critérios de uso definidos para o time e plano de implementação priorizado com próximos passos, papéis sugeridos e decisões internas pendentes.",
  },
  {
    question: "A Imersão em IA substitui o TRANSPIRA ou o INSPIRA?",
    answer: "Não substitui nenhum dos dois. A Imersão em IA resolve o problema de quem não sabe como usar IA com critério nos próprios processos. O INSPIRA resolve o problema de diagnóstico completo do negócio. O TRANSPIRA resolve o problema de redesenho e execução de operação. São intervenções com escopos distintos. Em alguns casos, a Imersão em IA é o passo certo antes de um TRANSPIRA. Em outros, é suficiente por si só.",
  },
  {
    question: "Preciso preparar algo antes?",
    answer: "Sim. Com pelo menos três dias úteis de antecedência da Sessão 2, o cliente envia os casos reais que quer trabalhar: processos, documentos, rotinas ou decisões onde quer testar o uso de IA. Quanto mais concreto o material enviado, mais aplicável o resultado da sessão.",
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
  { name: "Imersão em IA", url: "https://piralabs.com.br/faisca/imersao-em-ia" },
]);

export const metadata: Metadata = {
  title: {
    absolute: "Imersão em IA · Sessão prática com IA · Pira Labs",
  },
  description: "Não é curso. É sessão de trabalho com os casos reais da sua empresa. Celso Gama conduz. R$7.100. Três sessões, 5,5 horas no total.",
  alternates: {
    canonical: "https://piralabs.com.br/faisca/imersao-em-ia",
  },
  openGraph: {
    title: "Imersão em IA · Pira Labs",
    description: "Sessão de trabalho com IA sobre os processos reais da empresa. R$7.100. Três sessões.",
    url: "https://piralabs.com.br/faisca/imersao-em-ia",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Faísca", href: "/faisca" },
  { label: "Imersão em IA" },
];

const INK       = "#05262e"
const TEAL      = "#004757"
const SAND      = "#e8e0d6"
const WHITE     = "#F5F5F2"
const TEALMID   = "#1A5568"
const EMBER     = "#eb5c2e"
const EMBERDEEP = "#C4421A"

const EYEBROW = {
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
};

const H2 = {
  fontWeight: 600,
  fontSize: "clamp(1.875rem, 4.4vw, 3rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
};

export default function ImersaEmIaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      {/* I1 · Header (Ink) */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Imersão em IA"
          lead="Não é curso. É trabalho com IA dentro da operação real da sua empresa."
        />
      </div>

      {/* I2 · O que é + Ficha técnica + CTA (Sand) */}
      <section style={{ backgroundColor: SAND }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ ...EYEBROW, color: INK, marginBottom: "24px" }}>
            O QUE É
          </p>
          <p className="font-body" style={{ fontSize: "1.125rem", lineHeight: 1.6, fontWeight: 400, color: INK, maxWidth: "720px", marginBottom: "40px" }}>
            Saber o que é IA é diferente de saber o que ela faz nos seus processos específicos. A Imersão em IA não usa exemplos genéricos. Trabalha sobre os processos, os documentos e os casos reais da empresa, nos três blocos de trabalho.
          </p>

          {/* Preço isolado (acento Ember da seção) */}
          <div style={{ marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid rgba(5,38,46,0.12)" }}>
            <p className="font-body" style={{ ...EYEBROW, color: INK, marginBottom: "8px" }}>
              INVESTIMENTO
            </p>
            <p className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1, color: EMBERDEEP, letterSpacing: "-0.02em" }}>
              R$ 7.100
            </p>
          </div>

          {/* Ficha técnica */}
          <div style={{ maxWidth: "480px", border: "1px solid rgba(5,38,46,0.12)", borderRadius: "2px", marginBottom: "32px" }}>
            <div style={{ borderBottom: "1px solid rgba(5,38,46,0.12)", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="font-body" style={{ fontSize: "0.875rem", fontWeight: 400, color: TEALMID }}>Formato</span>
              <span className="font-body" style={{ fontSize: "0.875rem", fontWeight: 600, color: INK }}>3 blocos de trabalho, online ou presenciais</span>
            </div>
            <div style={{ borderBottom: "1px solid rgba(5,38,46,0.12)", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="font-body" style={{ fontSize: "0.875rem", fontWeight: 400, color: TEALMID }}>Duração total</span>
              <span className="font-body" style={{ fontSize: "0.875rem", fontWeight: 600, color: INK }}>5,5 horas</span>
            </div>
            <div style={{ borderBottom: "1px solid rgba(5,38,46,0.12)", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="font-body" style={{ fontSize: "0.875rem", fontWeight: 400, color: TEALMID }}>Condução</span>
              <span className="font-body" style={{ fontSize: "0.875rem", fontWeight: 600, color: INK }}>Celso Gama</span>
            </div>
            <div style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="font-body" style={{ fontSize: "0.875rem", fontWeight: 400, color: TEALMID }}>Início</span>
              <span className="font-body" style={{ fontSize: "0.875rem", fontWeight: 600, color: INK }}>Agendamento após conversa inicial</span>
            </div>
          </div>

          <a
            href="/contato?origem=faisca_imersao"
            className="font-body"
            style={{ display: "inline-block", border: `1px solid ${INK}`, color: INK, backgroundColor: "transparent", padding: "14px 32px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textDecoration: "none", borderRadius: "2px", textTransform: "uppercase" as const }}
          >
            RESPIRE
          </a>
          <p className="font-body" style={{ color: TEALMID, fontSize: "0.75rem", fontWeight: 400, marginTop: "12px" }}>
            Conversa inicial para confirmar encaixe. Respondemos em até 2 dias úteis.
          </p>
        </div>
      </section>

      {/* I3 · Três sessões (Teal) */}
      <section style={{ backgroundColor: TEAL }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ ...EYEBROW, color: SAND, marginBottom: "32px" }}>
            O QUE ACONTECE
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.025em", color: WHITE, marginBottom: "2.5rem" }}>
            Três sessões.<br />Um negócio <span style={{ color: EMBER }}>diferente</span>.
          </h2>

          <div className="space-y-0">

            {/* Sessão 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "0 32px", borderBottom: "1px solid rgba(245,245,242,0.12)", paddingBottom: "40px", marginBottom: "40px", alignItems: "start" }}>
              <div style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 300, lineHeight: 1, color: SAND, fontFamily: "var(--font-display)", letterSpacing: "-0.04em", paddingTop: "4px" }}>
                01
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 600, color: WHITE, marginBottom: "12px", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
                  Cultura e adaptação · 2 horas
                </h3>
                <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.6, color: SAND, maxWidth: "720px" }}>
                  O que está funcionando no setor, o que não funciona, exemplos reais de uso correto e de mau uso. Exploração direta de ferramentas como ChatGPT, Claude, Gemini e Perplexity, com foco nos processos da empresa. A sessão termina com leitura clara de onde a empresa está em relação ao setor e com os primeiros casos mapeados para a Sessão 2.
                </p>
              </div>
            </div>

            {/* Sessão 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "0 32px", borderBottom: "1px solid rgba(245,245,242,0.12)", paddingBottom: "40px", marginBottom: "40px", alignItems: "start" }}>
              <div style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 300, lineHeight: 1, color: SAND, fontFamily: "var(--font-display)", letterSpacing: "-0.04em", paddingTop: "4px" }}>
                02
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 600, color: WHITE, marginBottom: "12px", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
                  Execução de processos · 2 horas
                </h3>
                <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.6, color: SAND, maxWidth: "720px" }}>
                  Trabalho com os casos reais enviados pelo cliente com pelo menos três dias úteis de antecedência. Prompts de base para rotinas do dia a dia, checklists, modelos de comunicação e aplicações específicas para o contexto da empresa. A sessão termina com as primeiras aplicações testadas sobre os próprios processos, não sobre exemplos fabricados.
                </p>
              </div>
            </div>

            {/* Sessão 3 */}
            <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "0 32px", alignItems: "start" }}>
              <div style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 300, lineHeight: 1, color: SAND, fontFamily: "var(--font-display)", letterSpacing: "-0.04em", paddingTop: "4px" }}>
                03
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 600, color: WHITE, marginBottom: "12px", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
                  Ajustes e próximos passos · 1,5 hora
                </h3>
                <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.6, color: SAND, maxWidth: "720px" }}>
                  Dúvidas abertas da Sessão 2, refinamento do que ficou para trás e definição dos próximos passos de implementação. O que o time vai testar, o que depende de decisão interna, o que pode escalar. A sessão termina com plano de implementação priorizado.
                </p>
              </div>
            </div>

          </div>

          <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(245,245,242,0.12)" }}>
            <a
              href="/contato?origem=faisca_imersao"
              className="font-body"
              style={{ color: SAND, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}
            >
              Reservar uma conversa &#8594;
            </a>
          </div>
        </div>
      </section>

      {/* I4 · Para quem é (Ink) */}
      <section style={{ backgroundColor: INK }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ ...EYEBROW, color: SAND, marginBottom: "32px" }}>
            PARA QUEM É
          </p>
          <h2 className="font-display" style={{ ...H2, color: WHITE, marginBottom: "40px" }}>
            Para quem <span style={{ color: EMBER }}>é</span>
          </h2>

          <div style={{ borderBottom: "1px solid rgba(245,245,242,0.12)", paddingBottom: "24px", marginBottom: "24px" }}>
            <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, color: WHITE, lineHeight: 1.6, maxWidth: "720px" }}>
              Empresa que já usa IA de forma informal e quer estruturar o uso antes de escalar. Sem método, a ferramenta escala o erro junto com a velocidade.
            </p>
          </div>
          <div style={{ borderBottom: "1px solid rgba(245,245,242,0.12)", paddingBottom: "24px", marginBottom: "24px" }}>
            <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, color: WHITE, lineHeight: 1.6, maxWidth: "720px" }}>
              Fundadora ou fundador que quer entender o que é possível fazer com IA nos processos da empresa antes de tomar decisão de investimento maior.
            </p>
          </div>
          <div>
            <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, color: WHITE, lineHeight: 1.6, maxWidth: "720px" }}>
              Time que recebeu instrução para adotar IA mas não recebeu critério: onde usar, onde não usar, o que revisar antes de enviar, o que nunca colocar na ferramenta.
            </p>
          </div>

          <div style={{ marginTop: "48px" }}>
            <p className="font-body" style={{ ...EYEBROW, color: SAND, marginBottom: "16px" }}>
              NÃO FAZ SENTIDO SE
            </p>
            <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, color: SAND, lineHeight: 1.6, marginBottom: "12px", maxWidth: "720px" }}>
              Você quer curso genérico de ferramentas ou onboarding de plataforma.
            </p>
            <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, color: SAND, lineHeight: 1.6, maxWidth: "720px" }}>
              Você precisa de redesenho profundo de operação. Para esse caso, o caminho é o TRANSPIRA ou o INSPIRA primeiro.
            </p>
          </div>

          <div style={{ marginTop: "48px" }}>
            <p className="font-body" style={{ ...EYEBROW, color: SAND, marginBottom: "16px" }}>
              O QUE NÃO É
            </p>
            <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, color: SAND, lineHeight: 1.6, maxWidth: "720px" }}>
              A Imersão em IA não substitui o TRANSPIRA. Saber usar IA não resolve gargalo de delegação, não documenta processos e não instala critério de decisão. Quando o que falta é execução profunda e redesenho de operação, o próximo passo é o TRANSPIRA.
            </p>
          </div>

          <div style={{ marginTop: "48px" }}>
            <p className="font-body" style={{ ...EYEBROW, color: SAND, marginBottom: "16px" }}>
              DADOS E CONFIDENCIALIDADE
            </p>
            <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, color: SAND, lineHeight: 1.6, marginBottom: "16px", maxWidth: "720px" }}>
              Empresas que operam com dados sensíveis costumam chegar com uma dúvida antes de qualquer outra: o que posso colocar numa ferramenta de IA e o que não posso. Essa pergunta tem resposta, e respondê-la faz parte do trabalho.
            </p>
            <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, color: SAND, lineHeight: 1.6, marginBottom: "16px", maxWidth: "720px" }}>
              Materiais sensíveis, dados pessoais, informações de clientes e documentos confidenciais só devem entrar nas sessões com anonimização, critério de uso e alinhamento prévio. Quando o material não puder ser anonimizado, trabalhamos com versões simuladas, recortes seguros ou descrição do fluxo, sem exposição do conteúdo sensível. A Imersão em IA ensina a usar IA com julgamento: o que a ferramenta pode processar, onde o olho humano é inegociável e como construir critério para o time decidir isso sozinho depois.
            </p>
          </div>

          <div style={{ marginTop: "48px" }}>
            <a
              href="/contato?origem=faisca_imersao"
              className="font-body"
              style={{ color: SAND, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}
            >
              Falar sobre o momento da empresa &#8594;
            </a>
          </div>
        </div>
      </section>

      {/* I5 · Quem conduz (Sand) */}
      <section style={{ backgroundColor: SAND }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ ...EYEBROW, color: INK, marginBottom: "32px" }}>
            CONDUÇÃO
          </p>
          <h2 className="font-display" style={{ ...H2, color: INK, marginBottom: "32px" }}>
            Quem <span style={{ color: EMBERDEEP }}>conduz</span>
          </h2>
          <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, color: INK, lineHeight: 1.6, marginBottom: "16px", maxWidth: "720px" }}>
            Celso Gama conduz as três sessões. Cursa o Applied AI Certificate Program do MIT em 2026, é bacharelando em Direito pelo Mackenzie e tem MBA pelo Insper.
          </p>
          <p className="font-body" style={{ fontSize: "1.125rem", fontWeight: 400, color: INK, lineHeight: 1.6, marginBottom: "16px", maxWidth: "720px" }}>
            Não há equipe intermediária. Quem confirma o encaixe é quem executa as sessões.
          </p>
          <a
            href="/sobre#sobre-celso"
            className="font-body"
            style={{ color: TEALMID, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", marginTop: "24px" }}
          >
            Conhecer Celso &#8594;
          </a>
        </div>
      </section>

      {/* I6 · FAQ (Ink) — divisor inferior 1px para o fecho Ink->Ink */}
      <section style={{ backgroundColor: INK, borderBottom: "1px solid rgba(245,245,242,0.12)" }} className="py-16 md:py-24">
        <div className="container-site">
          <p className="font-body" style={{ ...EYEBROW, color: SAND, marginBottom: "32px" }}>
            DÚVIDAS COMUNS
          </p>
          <h2 className="font-display" style={{ ...H2, color: WHITE, marginBottom: "40px" }}>
            Perguntas frequentes
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="details-clean" style={{ borderBottom: "1px solid rgba(245,245,242,0.12)" }}>
              <summary
                className="font-body"
                style={{ cursor: "pointer", color: WHITE, fontSize: "1.125rem", fontWeight: 600, padding: "20px 0", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                {item.question}
              </summary>
              <p
                className="font-body"
                style={{ color: SAND, fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.6, padding: "0 0 24px 0", maxWidth: "720px" }}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* I7 · FinalCTA (Ink, fecho) */}
      <FinalCTA
        heading="Traga os seus processos reais. No dia seguinte, você opera diferente."
        ctaLabel="RESPIRE"
        origin={ORIGINS.FAISCA_IMERSA}
      />
    </>
  );
}
