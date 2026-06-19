export const dynamic = 'force-static';

import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

export const metadata: Metadata = {
  title: {
    absolute: "Creative Business Turnaround: o que é e quando faz sentido contratar",
  },
  description:
    "Creative Business Turnaround é o processo de diagnóstico e redesenho para empresas de serviços que precisam agir antes que a janela de oportunidade se feche. Operado pela Pira Labs no Brasil.",
  alternates: {
    canonical: "https://piralabs.com.br/creative-business-turnaround",
    languages: {
      "pt-BR": "https://piralabs.com.br/creative-business-turnaround",
      en: "https://piralabs.com.br/en/creative-business-turnaround",
    },
  },
  openGraph: {
    title: "Creative Business Turnaround · Pira Labs",
    description:
      "O processo de diagnóstico e redesenho para empresas de serviços que precisam agir antes que a janela de oportunidade se feche.",
    url: "https://piralabs.com.br/creative-business-turnaround",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Creative Business Turnaround" },
];

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "DefinedTerm"],
  "@id": "https://piralabs.com.br/creative-business-turnaround",
  url: "https://piralabs.com.br/creative-business-turnaround",
  name: "Creative Business Turnaround",
  description:
    "Processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes que a janela de oportunidade se feche: quando clientes, caixa e reputação ainda existem, mas o modelo de trabalho começou a comprometer margem, valor percebido e capacidade de decisão.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Glossário Pira Labs",
    url: "https://piralabs.com.br/glossario",
  },
  publisher: {
    "@id": "https://piralabs.com.br/#organization",
  },
  breadcrumb: breadcrumbSchema([
    { name: "Home", url: "https://piralabs.com.br/" },
    { name: "Creative Business Turnaround", url: "https://piralabs.com.br/creative-business-turnaround" },
  ]),
};

const faqItems = [
  {
    question: "O que é Creative Business Turnaround?",
    answer:
      "Creative Business Turnaround é o processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes que a janela de oportunidade se feche: quando clientes, caixa e reputação ainda existem, mas o modelo de trabalho começou a comprometer margem, valor percebido e capacidade de decisão. A Pira Labs nomeou, define e opera o Creative Business Turnaround no Brasil.",
  },
  {
    question: "Qual a diferença entre Creative Business Turnaround e consultoria estratégica?",
    answer:
      "Consultoria estratégica entrega relatório e sai. O Creative Business Turnaround conecta diagnóstico à rota executável e, quando contratado como execução, acompanha até resultado verificado. A diferença central é que o método resolve o negócio como sistema, não uma área isolada.",
  },
  {
    question: "Para que tipo de empresa faz sentido o Creative Business Turnaround?",
    answer:
      "Empresas de serviços que chegaram a um ponto onde o crescimento parou, a margem sumiu ou o fundador virou gargalo, mas a janela de oportunidade ainda está aberta. Setores com maior aplicação: jurídico, comunicação e marketing, consultorias especializadas e educação corporativa.",
  },
  {
    question: "Como saber se ainda estou dentro da janela de oportunidade?",
    answer:
      "A janela de oportunidade está aberta quando o negócio ainda tem clientes, caixa e reputação ao mesmo tempo. Quando um dos três começa a faltar, a janela começa a fechar. O diagnóstico INSPIRA existe exatamente para medir isso, não para confirmar que a janela está aberta, mas para identificar por quanto tempo ainda estará.",
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

const sinais = [
  {
    num: "01",
    titulo: "Crescimento sem estrutura",
    texto:
      "A empresa cresceu mais rápido do que o desenho do trabalho. Time aumentou, faturamento subiu, mas a operação ficou dependente de pessoas-chave e de improviso constante.",
  },
  {
    num: "02",
    titulo: "Margem que some",
    texto:
      "A receita continua, mas o resultado não acompanha. Custos invisíveis, escopo não cobrado, horas investidas além do contratado, precificação desalinhada com custo real.",
  },
  {
    num: "03",
    titulo: "Fundador como gargalo",
    texto:
      "Toda decisão importante passa pelo fundador. O time espera, adia, não avança sem aprovação. Não é falha de liderança. É ausência de critério claro de delegação.",
  },
  {
    num: "04",
    titulo: "Tecnologia que não converteu",
    texto:
      "A empresa investiu em IA. O resultado foi acelerar o ruído que já existia. Sem método antes, a tecnologia escala o problema.",
  },
  {
    num: "05",
    titulo: "Valor percebido desconectado do valor entregue",
    texto:
      "O trabalho é bom, mas o cliente não vê o que está pagando. A conversa de renovação é sempre difícil. A empresa sente que vale mais do que consegue cobrar.",
  },
];

const comparativo = [
  { dimensao: "Quando entra", tradicional: "Quando a crise já chegou e o fogo começou", cbt: "Antes: quando os sinais aparecem" },
  { dimensao: "Contexto", tradicional: "Empresa com caixa comprometido e opções reduzidas", cbt: "Empresa com clientes, caixa e reputação" },
  { dimensao: "Objetivo", tradicional: "Estabilizar e sobreviver", cbt: "Redesenhar e avançar" },
  { dimensao: "Foco", tradicional: "Corte de custo e reestruturação emergencial", cbt: "Trabalho, valor, tecnologia e governança" },
  { dimensao: "Custo da inação", tradicional: "Já alto: poucas escolhas restantes", cbt: "Baixo agora, alto se esperar" },
  { dimensao: "Opções disponíveis", tradicional: "Limitadas pela urgência", cbt: "Amplas: janela de oportunidade ainda aberta" },
];

const naoE = [
  { categoria: "Consultoria estratégica", motivo: "Entrega relatório e sai. O Creative Business Turnaround conecta diagnóstico à rota executável e, quando contratado como execução, acompanha até resultado verificado. A diferença central é que o método resolve o negócio como sistema, não uma área isolada." },
  { categoria: "Agência criativa", motivo: "Resolve comunicação ou canal. O método resolve o negócio inteiro como sistema." },
  { categoria: "Empresa de tecnologia ou IA", motivo: "Vende ferramenta. Aqui não há produto tecnológico próprio: a tecnologia entra a serviço do redesenho, não como fim." },
  { categoria: "Mentoria ou coaching", motivo: "Trabalha com o decisor individualmente. O trabalho aqui é com o negócio inteiro, não com uma pessoa." },
  { categoria: "Intervenção de crise", motivo: "Chega depois da ruptura. O Creative Business Turnaround atua antes, quando a janela de oportunidade ainda está aberta." },
];

const evidencias = [
  {
    numero: "R$16M → R$163M",
    periodo: "Receita, em 24 meses",
    contexto: "Reestruturação da área de ativação e eventos de uma agência multinacional para o patrocínio global de uma grande marca de tecnologia nos Jogos Rio 2016.",
    tag: "Pré-IA",
  },
  {
    numero: "-64% → +15%",
    periodo: "Margem, em 6 meses",
    contexto: "Conta publicitária de multinacional do setor de bebidas. Revisão de processos e métricas recuperou 79pp de margem sem aumento de receita.",
    tag: "Pré-IA",
  },
  {
    numero: "400h → 36h",
    periodo: "Operação mensal, mesma equipe",
    contexto: "Operação jurídica de alto volume. IA aplicada com supervisão humana liberou R$160 mil de capacidade adicional de faturamento por mês com a mesma equipe.",
    tag: "Pós-IA · supervisão humana",
  },
];

// Shared style helpers
const eyebrow = (light = false): React.CSSProperties => ({
  fontSize: "0.625rem",
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: light ? "#1A5568" : "#e8e0d6",
  marginBottom: "2rem",
  display: "block",
});

const h2Dark: React.CSSProperties = {
  fontWeight: 600,
  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  color: "#F5F5F2",
  marginBottom: "2rem",
};

const h2Light: React.CSSProperties = {
  fontWeight: 600,
  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  color: "#05262e",
  marginBottom: "2rem",
};

const bodyDark: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.75,
  fontWeight: 300,
  color: "#F5F5F2",
};

const bodyLight: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.75,
  fontWeight: 300,
  color: "#05262e",
};

const hrDark: React.CSSProperties = {
  borderColor: "rgba(245,245,242,0.10)",
  borderTopWidth: 1,
  margin: "0",
};

const hrLight: React.CSSProperties = {
  borderColor: "rgba(5,38,46,0.12)",
  borderTopWidth: 1,
  margin: "0",
};

export default function CreativeBusinessTurnaroundPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* CBT-1 · Header — Ink */}
      <div className="bg-ink pt-20 md:pt-24 mb-10 md:mb-16">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-body" style={{ fontSize: "0.75rem", color: "#e8e0d6", listStyle: "none", padding: 0, margin: 0 }}>
              <li><a href="/" style={{ color: "#e8e0d6", textDecoration: "none" }}>Home</a></li>
              <li style={{ color: "#6B8A8F" }}>·</li>
              <li style={{ color: "#a8b8bb" }}>Creative Business Turnaround</li>
            </ol>
          </nav>
          <h1 className="font-display mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F2" }}>
            Creative Business Turnaround
          </h1>
          <p className="font-body max-w-2xl" style={{ fontSize: "clamp(1.0625rem, 1.8vw, 1.25rem)", lineHeight: 1.65, fontWeight: 300, color: "#e8e0d6" }}>
            O processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes que a janela de oportunidade se feche: quando clientes, caixa e reputação ainda existem, mas o modelo de trabalho começou a comprometer margem, valor percebido e capacidade de decisão.
          </p>
        </div>
      </div>

      {/* CBT-2 · O que é — Sand */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-site">
          <span className="font-body" style={eyebrow(true)}>Definição</span>
          <div className="max-w-3xl">
            <p className="font-display mb-10" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 400,
              lineHeight: 1.4,
              color: "#05262e",
              letterSpacing: "-0.01em",
            }}>
              <strong style={{ fontWeight: 600 }}>Creative Business Turnaround</strong> é o processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes que a{" "}
              <span style={{ color: "#C4421A" }}>janela</span> de oportunidade se feche.
            </p>

            <div className="space-y-5 mb-10">
              <p className="font-body" style={bodyLight}>
                <strong style={{ fontWeight: 500, color: "#05262e" }}>&ldquo;Creative&rdquo;</strong> porque o problema em empresas de serviços raramente é só financeiro ou operacional. É sobre como o valor é criado, entregado e percebido. Exige leitura do sistema inteiro, não apenas análise de indicadores.
              </p>
              <p className="font-body" style={bodyLight}>
                <strong style={{ fontWeight: 500, color: "#05262e" }}>&ldquo;Business&rdquo;</strong> porque o foco é o negócio como sistema. Não o produto, não o canal, não a ferramenta. O negócio inteiro, com suas interdependências, seus gargalos e seu potencial represado.
              </p>
              <p className="font-body" style={bodyLight}>
                <strong style={{ fontWeight: 500, color: "#05262e" }}>&ldquo;Turnaround&rdquo;</strong> porque é virada real com resultado verificável. Não relatório de prateleira. Não plano que pressupõe implementação por conta própria. Virada. O negócio estava de uma forma. Passou a ser de outra. A diferença é mensurável.
              </p>
              <p className="font-body" style={bodyLight}>
                É a diferença entre medicina preventiva, medicina responsiva e medicina paliativa. As três tratam o mesmo paciente. O que muda é o momento, e o momento muda tudo: o que é possível fazer, quanto custa fazer e o que sobra depois. O Creative Business Turnaround atua no primeiro momento, quando ainda há opções, velocidade e margem para decidir.
              </p>
              <p className="font-body" style={bodyLight}>
                O resultado não é a ausência de crise. É um negócio que voltou a crescer com margem, que toma decisões antes que virem urgência e que opera sem depender do esforço constante de quem o lidera. Um negócio que respira.
              </p>
            </div>

            <p className="font-body mt-10" style={{ fontSize: "1rem", fontWeight: 500, lineHeight: 1.6, color: "#05262e" }}>
              A Pira Labs nomeou, define e opera o Creative Business Turnaround no Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* CBT-2B · Comparativo — Ink */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container-site">
          <span className="font-body" style={eyebrow()}>Comparativo</span>
          <h2 className="font-display" style={h2Dark}>
            Turnaround tradicional vs Creative Business Turnaround
          </h2>
          <p className="font-body mb-12 max-w-2xl" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#e8e0d6" }}>
            A diferença central é o momento de entrada: o turnaround tradicional atua na crise, quando as opções já estão reduzidas. O Creative Business Turnaround atua antes, quando a empresa ainda tem clientes, caixa e reputação para agir com clareza.
          </p>
          <div className="overflow-x-auto max-w-4xl">
            <table className="w-full font-body" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(245,245,242,0.12)" }}>
                  <th className="text-left pb-4 pr-8" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8e0d6", width: "180px" }}>
                    Dimensão
                  </th>
                  <th className="text-left pb-4 pr-8" style={{ fontSize: "0.8125rem", fontWeight: 400, color: "#e8e0d6" }}>
                    Sem intervenção agora
                  </th>
                  <th className="text-left pb-4" style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#F5F5F2" }}>
                    Creative Business Turnaround
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparativo.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(245,245,242,0.07)" }}>
                    <td className="py-4 pr-8 align-top font-body" style={{ fontSize: "0.8125rem", fontWeight: 500, color: "#e8e0d6" }}>
                      {row.dimensao}
                    </td>
                    <td className="py-4 pr-8 align-top font-body" style={{ fontSize: "0.9375rem", lineHeight: 1.6, fontWeight: 300, color: "#e8e0d6" }}>
                      {row.tradicional}
                    </td>
                    <td className="py-4 align-top font-body" style={{ fontSize: "0.9375rem", lineHeight: 1.6, fontWeight: 400, color: "#F5F5F2" }}>
                      {row.cbt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CBT-3 · Para quem — Sand */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-site">
          <span className="font-body" style={eyebrow(true)}>Para quem</span>
          <h2 className="font-display" style={h2Light}>Para quais empresas serve</h2>
          <div className="max-w-3xl space-y-5">
            <p className="font-body" style={bodyLight}>
              Creative Business Turnaround serve para empresas de serviços que chegaram a um ponto onde o crescimento parou, a margem sumiu ou o fundador virou gargalo, mas a janela de oportunidade ainda está aberta.
            </p>
            <p className="font-body" style={bodyLight}>
              A janela de oportunidade está aberta quando o negócio ainda tem clientes, caixa e reputação ao mesmo tempo. Quando um dos três começa a faltar, a janela começa a fechar.
            </p>
            <hr style={hrLight} />
            <p className="font-body pt-4" style={{ ...bodyLight, fontSize: "0.8125rem", fontWeight: 400 }}>
              <span style={{ fontWeight: 500, color: "#05262e" }}>Setores com maior aplicação:</span>{" "}
              jurídico, comunicação e marketing, consultorias especializadas e educação corporativa. Expansão natural: saúde, RH, engenharia, arquitetura e outros serviços profissionais intensivos em conhecimento.
            </p>
            <p className="font-body" style={{ ...bodyLight, fontSize: "0.8125rem", fontWeight: 400 }}>
              <span style={{ fontWeight: 500, color: "#05262e" }}>O perfil do decisor:</span>{" "}
              sócia ou sócio, CEO ou presidente com autonomia real para mudar. Alguém que reconhece o problema, tem abertura genuína para repensar o modelo e não está procurando validação para decisão já tomada.
            </p>
            <p className="font-body pt-2" style={{ fontSize: "0.8125rem", fontWeight: 300, color: "#05262e" }}>
              Não tem certeza se o momento é agora?{" "}
              <a href="/faisca/oxigenio-ia-search" style={{ fontWeight: 500, color: "#1A5568", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                O Oxigênio existe para isso.
              </a>{" "}
              Fast R$3.500 · Full R$5.300.
            </p>
          </div>
        </div>
      </section>

      {/* CBT-4 · Os sinais — Teal */}
      <section className="bg-teal py-20 md:py-28">
        <div className="container-site">
          <span className="font-body" style={eyebrow()}>Os sinais</span>
          <h2 className="font-display" style={h2Dark}>Os sinais que indicam o momento certo</h2>
          <p className="font-body mb-14 max-w-xl" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#e8e0d6" }}>
            Cinco sinais que aparecem antes da crise. Quanto mais presentes, mais próximo está o momento de agir.
          </p>
          <div className="max-w-3xl">
            {sinais.map((sinal, i) => (
              <div key={i}>
                <div className="py-8 grid grid-cols-[3rem_1fr] gap-6">
                  <span className="font-display" style={{
                    fontSize: "0.75rem",
                    fontWeight: 300,
                    color: "#e8e0d6",
                    letterSpacing: "0.05em",
                    paddingTop: "3px",
                  }}>
                    {sinal.num}
                  </span>
                  <div>
                    <p className="font-body mb-2" style={{ fontSize: "1rem", fontWeight: 500, color: "#F5F5F2" }}>
                      {sinal.titulo}
                    </p>
                    <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#e8e0d6" }}>
                      {sinal.texto}
                    </p>
                  </div>
                </div>
                {i < sinais.length - 1 && <hr style={{ borderColor: "rgba(245,245,242,0.08)", borderTopWidth: 1 }} />}
              </div>
            ))}
          </div>
          <div className="max-w-3xl mt-12 pt-10" style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}>
            <p className="font-body mb-6" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2" }}>
              Se você reconheceu <span style={{ color: "#eb5c2e" }}>três</span> ou mais desses sinais, a janela de oportunidade ainda está aberta.
            </p>
            <CTAButton variant="secondary" href="/contato" origin={ORIGINS.CREATIVE_BUSINESS_TURNAROUND}>
              Entender o próximo passo
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CBT-5 · O que não é — Ink */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container-site">
          <span className="font-body" style={eyebrow()}>O que não é</span>
          <h2 className="font-display" style={h2Dark}>O Creative Business Turnaround não é</h2>
          <p className="font-body mb-12 max-w-2xl" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#e8e0d6" }}>
            O Creative Business Turnaround não se confunde com consultoria estratégica, agência criativa, mentoria ou intervenção de crise porque nenhum desses resolve o negócio como sistema antes do problema virar <span style={{ color: "#eb5c2e" }}>urgência</span>.
          </p>
          <div className="max-w-3xl">
            {naoE.map((row, i) => (
              <div key={i}>
                <div className="py-7 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-8">
                  <p className="font-body" style={{ fontSize: "0.9375rem", fontWeight: 500, color: "#F5F5F2" }}>
                    {row.categoria}
                  </p>
                  <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#e8e0d6" }}>
                    {row.motivo}
                  </p>
                </div>
                {i < naoE.length - 1 && <hr style={hrDark} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CBT-6 · Como funciona — Sand */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-site">
          <span className="font-body" style={eyebrow(true)}>O método</span>
          <h2 className="font-display" style={h2Light}>Como o Creative Business Turnaround funciona na prática</h2>
          <p className="font-body mb-14 max-w-2xl" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#05262e" }}>
            A sequência natural é diagnóstico, execução e resultado verificado. O ponto de entrada pode variar conforme o momento.
          </p>

          <div className="max-w-3xl space-y-0">
            {/* INSPIRA */}
            <div className="py-10" style={{ borderTop: "1px solid rgba(5,38,46,0.12)" }}>
              <p className="font-body mb-1" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A5568" }}>
                INSPIRA
              </p>
              <p className="font-display mb-4" style={{ fontSize: "1.25rem", fontWeight: 500, color: "#05262e" }}>
                Diagnóstico
              </p>
              <p className="font-body mb-6" style={bodyLight}>
                O INSPIRA lê o negócio em seis camadas coordenadas antes de nomear qualquer problema. A força do método está na síntese entre elas. O output é o módulo Propulsão: uma rota executável com movimentos, responsáveis, ordem e critério de conclusão. Gabriela Aguiar conduz.
              </p>
              <CTAButton variant="secondary" theme="light" href="/inspira">
                Conhecer INSPIRA
              </CTAButton>
            </div>

            {/* TRANSPIRA */}
            <div className="py-10" style={{ borderTop: "1px solid rgba(5,38,46,0.12)" }}>
              <p className="font-body mb-1" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A5568" }}>
                TRANSPIRA
              </p>
              <p className="font-display mb-4" style={{ fontSize: "1.25rem", fontWeight: 500, color: "#05262e" }}>
                Execução
              </p>
              <p className="font-body mb-6" style={bodyLight}>
                Acontece dentro da operação do cliente, com o time que vai operar depois. Redesenha a relação entre trabalho, valor, tecnologia e governança. Duas configurações: COO Temporário e Arquiteto de Delegação. Celso Gama conduz. O projeto encerra quando os resultados acordados são verificados, não quando o prazo acaba.
              </p>
              <CTAButton variant="secondary" theme="light" href="/transpira">
                Conhecer TRANSPIRA
              </CTAButton>
            </div>

            {/* RESPIRA */}
            <div className="py-10" style={{ borderTop: "1px solid rgba(5,38,46,0.12)" }}>
              <p className="font-body mb-1" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A5568" }}>
                RESPIRA
              </p>
              <p className="font-display mb-4" style={{ fontSize: "1.25rem", fontWeight: 300, color: "#05262e", letterSpacing: "0.01em" }}>
                Estado
              </p>
              <p className="font-body" style={bodyLight}>
                Quando o redesenho está verificado, o negócio opera com clareza. Decisão mais distribuída. Capacidade de avançar sem improviso constante.{" "}
                <span style={{ fontWeight: 600, color: "#05262e" }}>RESPIRA</span> é o estado alcançado, não um produto entregue.
              </p>
            </div>

            {/* Ponto de entrada */}
            <div className="py-10" style={{ borderTop: "1px solid rgba(5,38,46,0.12)", borderBottom: "1px solid rgba(5,38,46,0.12)" }}>
              <p className="font-body mb-1" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A5568" }}>
                Ponto de entrada
              </p>
              <p className="font-body mb-6" style={bodyLight}>
                Para quem quer começar com escopo fechado, a Pira Labs tem a Faísca: produtos de entrada com entrega verificável e preço fixo, sem compromisso longo. O Oxigênio é o diagnóstico de presença em motores de IA: como a empresa aparece quando o ICP busca o problema que ela resolve no ChatGPT, Claude, Gemini ou Perplexity.{" "}
                <span style={{ fontWeight: 500, color: "#05262e" }}>Fast R$3.500 · Full R$5.300.</span>{" "}
                Até 5 dias úteis.
              </p>
              <CTAButton variant="secondary" theme="light" href="/faisca/oxigenio-ia-search">
                Conhecer Oxigênio
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* CBT-7 · Quem opera — Ink */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container-site">
          <span className="font-body" style={eyebrow()}>Quem opera</span>
          <h2 className="font-display" style={h2Dark}>Quem opera essa categoria no Brasil</h2>
          <p className="font-body mb-12 max-w-2xl" style={bodyDark}>
            A Pira Labs é a empresa que nomeou, define e opera o Creative Business Turnaround no Brasil. Cada projeto tem os dois fundadores do diagnóstico à entrega. <span style={{ color: "#eb5c2e" }}>Boutique</span> por escolha, não por limitação.
          </p>

          <div className="max-w-4xl mb-4">
            {evidencias.map((ev, i) => (
              <div key={i} className="py-10" style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}>
                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-5 md:gap-12 items-start">
                  <div>
                    <p className="font-body" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b0a596", marginBottom: "1rem" }}>{ev.tag}</p>
                    <p className="font-display" style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.035em", color: "#F5F5F2" }}>{ev.numero}</p>
                    <p className="font-body" style={{ fontSize: "0.875rem", fontWeight: 400, color: "#b0a596", marginTop: "0.75rem" }}>{ev.periodo}</p>
                  </div>
                  <p className="font-body" style={{ fontSize: "1.125rem", lineHeight: 1.6, fontWeight: 400, color: "#e8e0d6" }}>{ev.contexto}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body mb-10" style={{ fontSize: "0.75rem", color: "#e8e0d6", fontWeight: 300 }}>
            Estas não são cases da Pira Labs. São registros do julgamento calibrado por consequência real.
          </p>

          <CTAButton variant="secondary" href="/sobre">
            Conhecer os dois fundadores
          </CTAButton>
        </div>
      </section>

      {/* CBT-8 · FAQ — Teal */}
      <section className="bg-teal py-20 md:py-28">
        <div className="container-site max-w-3xl">
          <span className="font-body" style={eyebrow()}>FAQ</span>
          <h2 className="font-display mb-12" style={h2Dark}>
            Perguntas que as IAs já respondem sobre Creative Business Turnaround
          </h2>
          <div>
            {faqItems.map((item, i) => (
              <details key={i} className="group" style={{ borderBottom: "1px solid rgba(245,245,242,0.12)" }}>
                <summary
                  className="w-full flex items-start justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                  style={{ outline: "none" }}
                >
                  <span className="font-body" style={{ fontSize: "1rem", fontWeight: 400, color: "#F5F5F2", lineHeight: 1.5 }}>
                    {item.question}
                  </span>
                  <span className="shrink-0 transition-transform duration-200 group-open:rotate-45 font-body" style={{ color: "#e8e0d6", fontSize: "1.25rem", fontWeight: 300, marginTop: "2px" }} aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="font-body pb-6" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2", paddingTop: "0.25rem" }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CBT-9 · CTA final — Ink */}
      <FinalCTA
        heading="Existe um próximo nível para o seu negócio. O que está entre você e ele, descobrimos junto."
        ctaLabel="RESPIRE"
        origin={ORIGINS.CREATIVE_BUSINESS_TURNAROUND}
        className="!pt-12 md:!pt-16"
      />
    </>
  );
}
