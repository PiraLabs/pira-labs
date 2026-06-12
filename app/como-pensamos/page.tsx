export const dynamic = 'force-static'

import type { Metadata } from "next"
import { Section } from "@/components/shared/Section"
import { PageHeader } from "@/components/shared/PageHeader"
import { CTAButton } from "@/components/shared/CTAButton"
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb"

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Como pensamos", url: "https://piralabs.com.br/como-pensamos" },
])

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/como-pensamos#webpage",
  url: "https://piralabs.com.br/como-pensamos",
  name: "Como pensamos · Pira Labs",
  description: "As teses, referências e vocabulário que orientam cada diagnóstico e cada execução da Pira Labs.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "pt-BR",
}

export const metadata: Metadata = {
  title: { absolute: "Como pensamos · Pira Labs" },
  description: "As teses, referências e vocabulário que orientam cada diagnóstico e cada execução da Pira Labs.",
  alternates: { canonical: "https://piralabs.com.br/como-pensamos" },
  openGraph: {
    title: "Como pensamos · Pira Labs",
    description: "As teses, referências e vocabulário que orientam cada diagnóstico e cada execução da Pira Labs.",
    url: "https://piralabs.com.br/como-pensamos",
    siteName: "Pira Labs",
    locale: "pt_BR",
    type: "website",
  },
}

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Como pensamos" },
]

export default function ComoPensamos() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Como pensamos."
          subtitle="As teses, referências e vocabulário que orientam cada diagnóstico e cada execução."
        />
      </div>

      {/* Abertura */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl space-y-6">
          <p className="font-body leading-relaxed" style={{ color: "#F5F5F2" }}>
            A maioria das intervenções chega tarde. O problema já virou crise, as opções já diminuíram, o custo de cada decisão já subiu. E o que resta é conter o dano.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#F5F5F2" }}>
            Não é que as empresas não vissem os sinais. É que havia sempre algo mais urgente do que parar para lê-los. O modelo funcionava. A receita entrava. A operação girava.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#F5F5F2" }}>
            Até o dia em que o esforço para manter tudo rodando começou a custar mais do que o resultado que produzia.
          </p>
          <div style={{ borderTop: "1px solid rgba(232,224,214,0.14)", marginTop: "40px", paddingTop: "40px" }}>
            <p style={{
              fontFamily: "var(--font-atyp-display), sans-serif",
              fontWeight: 300,
              fontSize: "clamp(26px, 3.5vw, 42px)",
              lineHeight: 1.35,
              color: "#e8e0d6",
              maxWidth: "680px",
              marginBottom: "24px",
            }}>
              O mesmo trabalho feito antes produz resultado que o mesmo trabalho feito tarde não consegue mais produzir.
            </p>
            <p className="font-body" style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300 }}>
              Não como princípio abstrato. Como constatação de quem esteve dentro.
            </p>
          </div>
        </div>
      </Section>

      {/* Teses */}
      <Section variant="highlighted" paddingY="lg">
        <div className="max-w-3xl" style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <p className="font-body font-semibold uppercase" style={{ color: "#e8e0d6", fontSize: "10px", letterSpacing: "0.18em", marginBottom: "64px" }}>
            TESES
          </p>

          {([
            {
              num: "01",
              title: "O trabalho não acabou. O modelo de trabalho das empresas de serviços é que envelheceu.",
              body: [
                "Vender mais não resolve o problema de quem vende bem mas vê a margem encolher. Contratar mais não resolve o problema de quem tem equipe suficiente mas entrega menos do que o cliente percebe. Adotar mais ferramentas não resolve o problema de quem tem o fluxo de trabalho errado rodando mais rápido.",
                <>O problema está no modelo. Na forma como o trabalho está organizado, na forma como as decisões fluem, na forma como o valor produzido chega até quem contratou. Quando o modelo envelhece, <strong>o negócio trabalha mais para entregar o mesmo</strong>. E trabalha em silêncio: a margem some antes de aparecer no resultado, o crescimento trava antes que o caixa mostre, quem fundou vira gargalo antes de perceber que virou.</>,
              ],
            },
            {
              num: "02",
              title: "A janela de oportunidade tem tempo contado. E a maioria das empresas não percebe quando ela fecha.",
              body: [
                "Enquanto a janela está aberta, o negócio ainda tem clientes, caixa e reputação para agir. A intervenção é preventiva: diagnóstico, redesenho, resultado verificado. Quando a janela fecha e a crise se instala, a intervenção muda de natureza. Passa de preventiva para responsiva, e às vezes para paliativa.",
                <>É a diferença entre medicina preventiva, medicina responsiva e medicina paliativa. As três tratam o mesmo paciente. <strong>O que muda é o momento, e o momento muda tudo o que é possível fazer e quanto custa fazer.</strong></>,
              ],
            },
            {
              num: "03",
              title: null,
              body: [
                "95% das organizações analisadas pelo MIT NANDA em 2025 não obtiveram retorno financeiro mensurável com IA generativa. O problema apontado não foi a qualidade dos modelos. Foi a abordagem, a integração e a ausência de aprendizagem organizacional.",
                <>IA não é inteligência. É processo matemático, probabilidade e leitura de padrões. Aplicada antes de entender o problema real, não resolve. Acelera o ruído. No próximo ciclo, a vantagem das empresas de serviços não estará na ferramenta. <strong>Estará no julgamento que organiza o uso da ferramenta.</strong></>,
              ],
            },
            {
              num: "04",
              title: "Governança não é controle posterior. É capacidade competitiva.",
              body: [
                <>Quando modelos, dados e automações passam a influenciar decisão, risco e performance de negócio, <strong>governança deixa de ser função de compliance e vira estrutura de operação.</strong> O World Economic Forum identificou que os riscos adversos de IA subiram da 30ª para a 5ª posição no ranking de riscos globais no horizonte de dez anos. IA, infraestrutura e governança deixaram de ser agendas separadas e viraram uma equação única de risco e resultado. (The Global Risks Report 2026, WEF)</>,
              ],
            },
            {
              num: "05",
              title: "Valor percebido não se declara. Se constrói e se prova.",
              body: [
                <>Empresas de serviços que não conseguem tornar o valor que entregam visível e verificável acabam vendendo esforço. E esforço é o argumento mais fraco que existe numa conversa de renovação ou expansão. <strong>A capacidade de nomear o que foi entregue, medir o que mudou e comunicar isso na linguagem de quem contratou não é habilidade de marketing. É diferenciação operacional.</strong></>,
              ],
            },
          ] as { num: string; title: string | null; body: React.ReactNode[] }[]).map((tese, i) => (
            <div key={i} style={{ position: "relative", borderTop: "1px solid rgba(232,224,214,0.12)", paddingTop: "48px", paddingBottom: "48px" }}>
              {/* Número decorativo */}
              <span aria-hidden="true" style={{
                position: "absolute",
                top: "32px",
                right: "0",
                fontFamily: "var(--font-atyp-display), sans-serif",
                fontWeight: 300,
                fontSize: "clamp(72px, 9vw, 108px)",
                lineHeight: 1,
                color: "#e8e0d6",
                opacity: 0.08,
                userSelect: "none",
                pointerEvents: "none",
              }}>
                {tese.num}
              </span>

              {/* Título — Tese 3 especial */}
              {i === 2 ? (
                <h2 style={{ fontFamily: "var(--font-atyp-display), sans-serif", fontWeight: 500, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.25, color: "#F5F5F2", marginBottom: "24px" }}>
                  IA não corrige bagunça. Escala <span style={{ color: "#eb5c2e" }}>bagunça</span>.
                </h2>
              ) : (
                <h2 style={{ fontFamily: "var(--font-atyp-display), sans-serif", fontWeight: 500, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.25, color: "#F5F5F2", marginBottom: "24px" }}>
                  {tese.title}
                </h2>
              )}

              {/* Corpo */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {tese.body.map((par, j) => (
                  <p key={j} className="font-body leading-relaxed" style={{ color: "#F5F5F2", fontWeight: 300 }}>
                    {par}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Linha de ponte para Referências */}
          <div style={{ borderTop: "1px solid rgba(232,224,214,0.12)", paddingTop: "40px", paddingBottom: "8px" }}>
            <p className="font-body" style={{ color: "#e8e0d6", fontSize: "15px", fontWeight: 300, opacity: 0.7 }}>
              As referências abaixo não são decoração. São o repertório que torna cada tese verificável.
            </p>
          </div>
        </div>
      </Section>

      {/* Referências */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl space-y-10">
          <p className="font-body font-semibold uppercase" style={{ color: "#e8e0d6", fontSize: "10px", letterSpacing: "0.18em" }}>
            REFERÊNCIAS
          </p>
          <p style={{
            fontFamily: "var(--font-atyp-display), sans-serif",
            fontWeight: 300,
            fontSize: "clamp(20px, 2.8vw, 32px)",
            lineHeight: 1.4,
            color: "#e8e0d6",
            maxWidth: "600px",
            marginBottom: "48px",
          }}>
            A Pira não parte de teoria de prateleira. Parte de operação real, lida com repertório.
          </p>
          <div className="space-y-8">
            {[
              {
                title: "The Enterprise AI Playbook (Stanford Digital Economy Lab, 2026)",
                body: "77% dos desafios mais difíceis em IA corporativa foram custos invisíveis e intangíveis: gestão da mudança, qualidade dos dados e redesenho de processos. O gargalo não é só tecnológico, é organizacional.",
              },
              {
                title: "Organizational Transformation in the Age of AI (World Economic Forum + Accenture, 2026)",
                body: "Apenas 15% das organizações usam IA para redesenhar trabalho de forma fundamental. O restante usa para eficiência pontual. A diferença entre as duas abordagens não é técnica. É de visão do que precisa mudar.",
              },
              {
                title: "The Widening AI Value Gap (BCG, 2025)",
                body: "Apenas 5% das empresas atingem retorno significativo com IA em escala. 60% não geram valor material apesar do investimento.",
              },
              {
                title: "Kamruzzaman, M., Nguyen, H. M., e Kim, G. L. Global is Good, Local is Bad?: Understanding Brand Bias in LLMs (arXiv:2406.13997, junho 2024)",
                body: "Modelos de linguagem reproduzem vieses sistêmicos que favorecem marcas globais e penalizam marcas locais. Para empresas brasileiras, isso não é questão de SEO. É questão de existência nos canais onde a decisão começa a ser formada.",
              },
              {
                title: "From Citation Selection to Citation Absorption (Zhang Kai, He Xinyue e Yao Jingang, arXiv:2604.25707, 2026)",
                body: "Ser citado por um modelo de linguagem não garante influência. Seleção de citação e absorção como referência são resultados diferentes. O que determina posicionamento em IA é ser absorvido, não apenas mencionado.",
              },
            ].map(({ title, body }, i) => (
              <div key={i} className="space-y-2 pl-6" style={{ borderLeft: "2px solid rgba(232,224,214,0.20)" }}>
                <p className="text-off-white font-body font-semibold leading-snug" style={{ fontSize: "14px" }}>{title}</p>
                <p className="font-body leading-relaxed" style={{ color: "#e8e0d6", fontSize: "14px" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Vocabulário */}
      <Section variant="highlighted" paddingY="lg">
        <div className="max-w-3xl space-y-10">
          <p className="font-body font-semibold uppercase" style={{ color: "#e8e0d6", fontSize: "10px", letterSpacing: "0.18em" }}>
            VOCABULÁRIO
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#F5F5F2" }}>
            A Pira usa algumas palavras de forma específica. O significado que damos a elas não é o uso de mercado.
          </p>
          <div className="space-y-8">
            {[
              { term: "Creative Business Turnaround", def: "Categoria de atuação que aplica a inteligência do turnaround antes da emergência, quando a empresa ainda tem clientes, caixa e reputação para agir com clareza e com opções. Não é turnaround reativo. É intervenção preventiva com resultado verificado.", tier: 1 },
              { term: "Antes", def: "A palavra de posicionamento da Pira. Não como urgência ou alerta. Como localização no tempo. A Pira atua antes: antes da crise, antes da decisão irreversível, antes que a janela de oportunidade se feche.", tier: 2 },
              { term: "Janela de oportunidade", def: "O período em que a empresa ainda tem condições de agir com clareza, opções e margem para testar, corrigir e decidir sem operar no limite. Não é metáfora. É descrição de uma condição real que tem início, duração e fim.", tier: 1 },
              { term: "Julgamento humano", def: "A capacidade de ler contexto, antecipar consequências, integrar informações de naturezas diferentes e decidir com critério calibrado por experiência real. Não é intuição. É competência construída. O diferencial que nenhuma ferramenta substitui.", tier: 2 },
              { term: "Sistema pleno", def: "O estado em que pessoas, processos, decisões, tecnologias e entregas operam juntos. Quando o sistema não opera em conjunto, a empresa trabalha mais, decide pior e perde margem em silêncio.", tier: 2 },
              { term: "RESPIRA", def: "O estado de destino do Creative Business Turnaround. Um negócio que voltou a crescer com margem, que toma decisões antes que virem urgência e que opera sem depender do esforço constante de quem o lidera. Não é produto contratável. É o que acontece quando INSPIRA e TRANSPIRA cumpriram o que prometeram.", tier: 1 },
            ].map(({ term, def, tier }, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(232,224,214,0.10)", paddingTop: "24px", paddingBottom: "8px" }}>
                {tier === 1 ? (
                  <p style={{ fontFamily: "var(--font-atyp-display), sans-serif", fontWeight: 400, fontSize: "20px", color: "#F5F5F2", marginBottom: "8px" }}>{term}</p>
                ) : (
                  <p style={{ fontFamily: "var(--font-atyp-text), sans-serif", fontWeight: 600, fontSize: "15px", color: "#F5F5F2", marginBottom: "6px" }}>{term}</p>
                )}
                <p className="font-body leading-relaxed" style={{ color: "#e8e0d6", fontSize: "14px", fontWeight: 300 }}>{def}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-2xl space-y-6">
          <p style={{ fontFamily: "var(--font-atyp-display), sans-serif", fontWeight: 300, fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.35, color: "#F5F5F2" }}>
            Se alguma dessas teses pareceu familiar, é porque provavelmente vale uma conversa.
          </p>
          <CTAButton
            href="/contato"
            origin="como_pensamos"
            variant="primary"
          >
            RESPIRE
          </CTAButton>
        </div>
      </Section>
    </>
  )
}
