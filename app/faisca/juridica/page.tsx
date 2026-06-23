export const dynamic = 'force-static';

import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { ORIGINS } from "@/lib/constants";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://piralabs.com.br/faisca/juridica#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://piralabs.com.br" },
    { "@type": "ListItem", position: 2, name: "Faísca", item: "https://piralabs.com.br/faisca" },
    { "@type": "ListItem", position: 3, name: "Faísca Jurídica", item: "https://piralabs.com.br/faisca/juridica" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/faisca/juridica#service",
  name: "Faísca Jurídica",
  description: "Palestra e workshop executivo sobre governança operacional de IA para escritórios de advocacia, áreas jurídicas e instituições de ensino jurídico. Conduzido por Celso Gama.",
  provider: { "@id": "https://piralabs.com.br/#organization" },
  serviceType: "Educação executiva em IA para o setor jurídico",
  areaServed: "BR",
  inLanguage: "pt-BR",
};

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vocês prestam consultoria jurídica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A Faísca Jurídica trata de fluxos de trabalho, produtividade, governança de uso de IA e operação jurídica. Não define estratégia de caso, não substitui a atuação de advogadas e advogados habilitados pela OAB e não é consultoria jurídica.",
      },
    },
    {
      "@type": "Question",
      name: "O workshop pode ser adaptado para o contexto do nosso escritório?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Antes de qualquer workshop, fazemos uma conversa de calibragem para entender o contexto do escritório, o perfil do time e o momento da adoção de IA. O conteúdo é ajustado dentro do escopo contratado para grupos que fazem essa conversa prévia.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona para instituição de ensino jurídico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Temos conteúdo específico para formar profissionais que vão sair da faculdade já sabendo como usar IA com critério na prática jurídica. O formato para instituições é adaptado para audiência de alunas, alunos e professoras e professores.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês assinam NDA quando é workshop fechado para um escritório?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O NDA é assinado antes de qualquer conversa com a equipe. Sem exceção.",
      },
    },
    {
      "@type": "Question",
      name: "Como é a precificação?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sob consulta e disponibilidade. Depende do formato, da audiência, do deslocamento e do nível de customização. Por sermos uma consultoria boutique, mantemos agenda limitada de palestras e workshops simultâneos para preservar a qualidade da conversa de calibragem prévia.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: "Faísca Jurídica · Palestra e workshop de IA para o jurídico · Pira Labs",
  },
  description:
    "Palestra e workshop executivo para escritórios, áreas jurídicas e instituições de ensino. Como usar IA com método, critério e governança na rotina jurídica.",
  alternates: {
    canonical: "https://piralabs.com.br/faisca/juridica",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Faísca Jurídica · Palestra e workshop de IA para o jurídico · Pira Labs",
    description:
      "Como usar IA com método, critério e governança na rotina jurídica. Para escritórios, áreas jurídicas e instituições de ensino.",
    url: "https://piralabs.com.br/faisca/juridica",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const EYEBROW: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Faísca", href: "/faisca" },
  { label: "Faísca Jurídica" },
];

export default function FaiscaJuridicaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />

      {/* J1 · Ink · Header */}
      <div style={{ backgroundColor: "#05262e" }}>
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Faísca Jurídica"
          subtitle={
            <>
              <span style={{ display: "block", fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)", fontWeight: 400, color: "#e8e0d6", marginBottom: "20px", lineHeight: 1.4, fontStyle: "normal" }}>
                &ldquo;O risco não está no futuro. Está no navegador aberto agora no computador do estagiário.&rdquo;
              </span>
              <span style={{ display: "block", fontSize: "0.9375rem", fontWeight: 300, color: "#e8e0d6", opacity: 0.7, lineHeight: 1.6 }}>
                Antes de ensinar prompt para o time jurídico, vale saber o que não pode entrar na ferramenta.
              </span>
            </>
          }
        />
      </div>

      {/* J2 · Sand · O que está acontecendo */}
      <section style={{ backgroundColor: "#E8E0D6", padding: "80px 0" }}>
        <div className="container-site">
          <p style={{ ...EYEBROW, color: "#1A5568", marginBottom: "24px" }}>
            O que está acontecendo
          </p>
          <h2
            className="type-h1"
            style={{
              color: "#05262e",
              fontWeight: 600,
              marginBottom: "40px",
              lineHeight: 1.1,
            }}
          >
            O que está acontecendo{" "}
            <span style={{ color: "#eb5c2e" }}>agora</span>{" "}
            nos escritórios
          </h2>
          <div style={{ maxWidth: "720px" }}>
            <p style={{ color: "#05262e", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "20px" }}>
              Alguém no seu escritório já usou ChatGPT, Claude ou Gemini para resumir um contrato, pesquisar jurisprudência ou rascunhar uma peça. Provavelmente mais de uma pessoa. <strong style={{ fontWeight: 600 }}>Provavelmente sem política interna, sem critério de anonimização</strong> e sem que a sócia ou o head jurídico soubesse exatamente o que foi inserido onde.
            </p>
            <p style={{ color: "#05262e", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "20px" }}>
              <strong style={{ fontWeight: 600 }}>O problema não é usar IA.</strong> O problema é usar IA com documento jurídico real, em conta pessoal, sem método e sem controle institucional.
            </p>
            <p style={{ color: "#05262e", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "20px" }}>
              Um estudo da Meta em parceria com a Fundação Dom Cabral, de 2026, identificou que <strong style={{ fontWeight: 600 }}>68,3% das grandes empresas e multinacionais analisadas não possuem núcleo dedicado à governança de IA.</strong> No setor jurídico, onde cada documento pode conter dados pessoais de clientes sob sigilo profissional, operar sem critério de uso não é só risco operacional. É exposição regulatória.
            </p>
            <p style={{ color: "#05262e", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "20px" }}>
              Quando um profissional cola uma petição, um contrato ou uma procuração com dados pessoais de cliente em uma ferramenta de IA, <strong style={{ fontWeight: 600 }}>pode estar realizando tratamento ou compartilhamento de dados pessoais nos termos da LGPD</strong>. Se não há política interna, critério de anonimização, controle de ferramenta e orientação clara sobre o que pode ou não entrar no modelo, o escritório opera com uma exposição que muitas vezes ainda não mapeou.
            </p>
            <p style={{ color: "#05262e", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "20px" }}>
              A Faísca Jurídica existe para nomear esse problema e dar ao time critérios para começar a tratá-lo.
            </p>
          </div>
        </div>
      </section>

      {/* J3 · Teal · O que é */}
      <section style={{ backgroundColor: "#004757", padding: "80px 0" }}>
        <div className="container-site">
          <p style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "32px" }}>
            O que é
          </p>
          <h2
            className="type-h1"
            style={{
              color: "#F5F5F2",
              fontWeight: 600,
              marginBottom: "40px",
              lineHeight: 1.1,
            }}
          >
            O que é a Faísca{" "}
            <span style={{ color: "#eb5c2e" }}>Jurídica</span>
          </h2>
          <div style={{ maxWidth: "720px" }}>
            <p style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "16px" }}>
              A Faísca Jurídica é uma palestra ou workshop executivo conduzido por Celso Gama sobre governança operacional de IA para escritórios de advocacia, áreas jurídicas e instituições de ensino jurídico.
            </p>
            <p style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "16px" }}>
              Não começa pela ferramenta. Começa pelo fluxo. Onde a IA pode ajudar na rotina jurídica, onde não deve entrar sem revisão, e o que cada profissional do time precisa saber antes de usar qualquer modelo.
            </p>
          </div>
          <div style={{ marginTop: "40px" }}>
            <a
              href={`/contato?origem=${ORIGINS.FAISCA_JURIDICA}`}
              className="font-body"
              style={{
                color: "#F5F5F2",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Falar sobre formato e contexto &#8594;
            </a>
          </div>
        </div>
      </section>

      {/* J4 · Ink · Formatos */}
      <section style={{ backgroundColor: "#05262e", padding: "80px 0" }}>
        <div className="container-site">
          <p style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "32px" }}>
            Como acontece
          </p>
          <h2
            className="type-h1"
            style={{
              color: "#F5F5F2",
              fontWeight: 600,
              marginBottom: "40px",
              lineHeight: 1.1,
            }}
          >
            Dois <span style={{ color: "#eb5c2e" }}>formatos</span>. Um critério.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div
              style={{
                backgroundColor: "#1A5568",
                borderRadius: "2px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "12px" }}>
                Formato 1
              </p>
              <h3 style={{ color: "#F5F5F2", fontSize: "20px", fontWeight: 600, marginBottom: "4px" }}>
                Palestra executiva
              </h3>
              <p style={{ color: "#e8e0d6", fontSize: "13px", fontWeight: 300, marginBottom: "24px" }}>
                60 a 90 minutos
              </p>
              <p style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "24px" }}>
                Para eventos, congressos, seccionais da OAB, associações de classe e encontros de lideranças jurídicas. Audiência de 20 a 300 pessoas. Presencial ou online.
              </p>
              <div
                style={{
                  borderTop: "1px solid rgba(245,245,242,0.15)",
                  paddingTop: "24px",
                  marginTop: "auto",
                }}
              >
                <p style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "16px" }}>
                  Conteúdo
                </p>
                {[
                  "O que está acontecendo agora no uso de IA em escritórios brasileiros.",
                  "Quais riscos mudam quando o uso acontece em conta gratuita, conta individual, plano corporativo ou ambiente enterprise.",
                  "O que acontece com os dados do cliente quando entram num modelo sem controle institucional.",
                  "O que a liderança jurídica precisa decidir antes de avançar com qualquer adoção.",
                ].map((item) => (
                  <p
                    key={item}
                    style={{ color: "#e8e0d6", fontSize: "14px", fontWeight: 300, lineHeight: 1.6, marginBottom: "10px", display: "flex", gap: "10px" }}
                  >
                    <span style={{ color: "#e8e0d6", flexShrink: 0 }}>·</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div
              style={{
                backgroundColor: "#1A5568",
                borderRadius: "2px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "12px" }}>
                Formato 2
              </p>
              <h3 style={{ color: "#F5F5F2", fontSize: "20px", fontWeight: 600, marginBottom: "4px" }}>
                Workshop executivo
              </h3>
              <p style={{ color: "#e8e0d6", fontSize: "13px", fontWeight: 300, marginBottom: "24px" }}>
                4 horas
              </p>
              <p style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "24px" }}>
                Para grupos de 5 a 25 pessoas. Sócias e sócios, heads jurídicos, coordenadoras e coordenadores de curso. Presencial ou online. Inclui conversa de calibragem prévia para ajustar o conteúdo ao contexto específico, dentro do escopo contratado.
              </p>
              <div
                style={{
                  borderTop: "1px solid rgba(245,245,242,0.15)",
                  paddingTop: "24px",
                  marginTop: "auto",
                }}
              >
                <p style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "16px" }}>
                  Saída
                </p>
                {[
                  "Mapa de oportunidades e riscos de IA na rotina jurídica do grupo.",
                  "Primeiros critérios operacionais para rascunho de política interna de uso de IA, a serem validados pelo jurídico responsável, DPO ou assessoria jurídica do cliente.",
                  "Próximos passos práticos com papéis sugeridos e prazos iniciais.",
                ].map((item) => (
                  <p
                    key={item}
                    style={{ color: "#e8e0d6", fontSize: "14px", fontWeight: 300, lineHeight: 1.6, marginBottom: "10px", display: "flex", gap: "10px" }}
                  >
                    <span style={{ color: "#e8e0d6", flexShrink: 0 }}>·</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "48px" }}>
            <a
              href={`/contato?origem=${ORIGINS.FAISCA_JURIDICA}`}
              className="font-body"
              style={{
                color: "#F5F5F2",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Falar sobre formato e contexto &#8594;
            </a>
          </div>
        </div>
      </section>

      {/* J5 · Sand · Para quem faz sentido */}
      <section style={{ backgroundColor: "#E8E0D6", padding: "80px 0" }}>
        <div className="container-site">
          <p style={{ ...EYEBROW, color: "#1A5568", marginBottom: "32px" }}>
            Para quem faz sentido
          </p>
          <h2
            className="type-h1"
            style={{
              color: "#05262e",
              fontWeight: 600,
              marginBottom: "40px",
              lineHeight: 1.1,
            }}
          >
            Para quem faz sentido
          </h2>
          <div style={{ maxWidth: "720px" }}>
            {[
              "Sócias e sócios e heads jurídicos que sabem que o time já usa IA mas não têm política interna. O problema está ativo. A Faísca nomeia e estrutura o caminho para resolver.",
              "Professoras e professores e coordenadoras e coordenadores de cursos de Direito que querem preparar alunas e alunos com critério real, não com entusiasmo genérico sobre o futuro da IA.",
              "Gestoras e gestores de compliance e DPOs em empresas com área jurídica interna que precisam de conteúdo aplicado para o time, não de treinamento genérico de ferramenta.",
              "Escritórios que passaram por evento de risco e querem endereçar o problema antes que aconteça de novo.",
            ].map((text, i, arr) => (
              <p
                key={i}
                style={{
                  color: "#05262e",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  borderBottom: i < arr.length - 1 ? "1px solid rgba(5,38,46,0.12)" : undefined,
                  paddingBottom: "24px",
                  marginBottom: "24px",
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* J6 · Teal · Quem conduz */}
      <section style={{ backgroundColor: "#004757", padding: "80px 0" }}>
        <div className="container-site">
          <p style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "32px" }}>
            Condução
          </p>
          <h2
            className="type-h1"
            style={{
              color: "#F5F5F2",
              fontWeight: 600,
              marginBottom: "40px",
              lineHeight: 1.1,
            }}
          >
            Quem <span style={{ color: "#eb5c2e" }}>conduz</span>
          </h2>
          <div style={{ maxWidth: "720px" }}>
            <div style={{ borderBottom: "1px solid rgba(245,245,242,0.12)", paddingBottom: "32px", marginBottom: "32px" }}>
              <p style={{ color: "#F5F5F2", fontSize: "16px", fontWeight: 600, marginBottom: "12px" }}>
                Celso Gama
              </p>
              <p style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "16px" }}>
                Conduz o conteúdo técnico-operacional sobre uso de IA em fluxos jurídicos. Bacharelando em Direito (Mackenzie) e cursando o Applied AI Certificate Program do MIT em 2026. O que essa combinação entrega na prática: a leitura de onde a IA interfere em fluxos jurídicos não vem de quem conhece só tecnologia, nem de quem conhece só Direito. Vem de quem lê os dois ao mesmo tempo e consegue nomear o risco no vocabulário de quem precisa tomar a decisão.
              </p>
              <a
                href="/sobre#sobre-celso"
                style={{
                  color: "#e8e0d6",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Celso Gama &#8594;
              </a>
            </div>
            <div>
              <p style={{ color: "#F5F5F2", fontSize: "16px", fontWeight: 600, marginBottom: "12px" }}>
                Gabriela Aguiar
              </p>
              <p style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "16px" }}>
                Contribui com o conteúdo sobre contexto e futuro do trabalho quando o formato pede. MIT Universal AI Foundational Modules (em andamento, 2026). Docente em programas de MBA na FIAP e no Instituto Cidades Responsivas.
              </p>
              <a
                href="/sobre#sobre-gabriela"
                style={{
                  color: "#e8e0d6",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Gabriela Aguiar &#8594;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* J7 · Ink · FAQ + Postura declarada */}
      <section style={{ backgroundColor: "#05262e", padding: "80px 0" }}>
        <div className="container-site hr-on-dark-b" style={{ paddingBottom: "64px" }}>
          <p style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "32px" }}>
            Dúvidas comuns
          </p>
          <h2
            className="type-h1"
            style={{
              color: "#F5F5F2",
              fontWeight: 600,
              marginBottom: "40px",
              lineHeight: 1.1,
            }}
          >
            Perguntas frequentes
          </h2>

          <div style={{ maxWidth: "720px" }}>
            {[
              {
                q: "Vocês prestam consultoria jurídica?",
                a: "Não. A Faísca Jurídica trata de fluxos de trabalho, produtividade, governança de uso de IA e operação jurídica. Não define estratégia de caso, não substitui a atuação de advogadas e advogados habilitados pela OAB e não é consultoria jurídica.",
              },
              {
                q: "O workshop pode ser adaptado para o contexto do nosso escritório?",
                a: "Sim. Antes de qualquer workshop, fazemos uma conversa de calibragem para entender o contexto do escritório, o perfil do time e o momento da adoção de IA. O conteúdo é ajustado dentro do escopo contratado para grupos que fazem essa conversa prévia.",
              },
              {
                q: "Funciona para instituição de ensino jurídico?",
                a: "Sim. Temos conteúdo específico para formar profissionais que vão sair da faculdade já sabendo como usar IA com critério na prática jurídica. O formato para instituições é adaptado para audiência de alunas, alunos e professoras e professores.",
              },
              {
                q: "Vocês assinam NDA quando é workshop fechado para um escritório?",
                a: "Sim. O NDA é assinado antes de qualquer conversa com a equipe. Sem exceção.",
              },
              {
                q: "Como é a precificação?",
                a: "Sob consulta e disponibilidade. Depende do formato, da audiência, do deslocamento e do nível de customização. Por sermos uma consultoria boutique, mantemos agenda limitada de palestras e workshops simultâneos para preservar a qualidade da conversa de calibragem prévia.",
              },
            ].map(({ q, a }, i, arr) => (
              <details
                key={q}
                style={{ borderBottom: "1px solid rgba(245,245,242,0.12)" }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    color: "#F5F5F2",
                    fontSize: "16px",
                    fontWeight: 600,
                    padding: "20px 0",
                    listStyle: "none",
                  }}
                >
                  {q}
                </summary>
                <p style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, padding: "0 0 24px 0" }}>
                  {a}
                </p>
              </details>
            ))}
          </div>

          {/* Postura declarada */}
          <div
            style={{
              maxWidth: "720px",
              marginTop: "0px",
              paddingTop: "32px",
            }}
          >
            <p style={{ ...EYEBROW, color: "#e8e0d6", marginBottom: "24px" }}>
              Postura declarada
            </p>
            <div style={{ borderLeft: "3px solid #eb5c2e", paddingLeft: "24px" }}>
              <p style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "12px" }}>
                A Pira Labs não presta consultoria jurídica, não define estratégia de caso e não substitui advogadas e advogados habilitados pela OAB.
              </p>
              <p style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, marginBottom: "12px" }}>
                A Faísca Jurídica trata de fluxos de trabalho, governança operacional de IA e capacidade produtiva no setor jurídico. Essa é a fronteira do produto. Ela é clara porque precisa ser.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Se o risco já está ativo, o momento de tratar é agora."
        ctaLabel="RESPIRE"
        origin={ORIGINS.FAISCA_JURIDICA}
        theme="dark"
      />
      <div style={{ backgroundColor: "#05262e", textAlign: "center", paddingTop: "48px", paddingBottom: "48px" }}>
        <a
          href="/inspira/juridico"
          style={{
            color: "#e8e0d6",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            textDecoration: "none",
            opacity: 0.6,
          }}
        >
          Ver o INSPIRA Jurídico &#8594;
        </a>
      </div>
    </>
  );
}
