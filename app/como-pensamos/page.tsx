export const dynamic = 'force-static'

import type { Metadata } from "next"
import { Section } from "@/components/shared/Section"
import { Breadcrumbs } from "@/components/shared/Breadcrumbs"
import { FinalCTA } from "@/components/shared/FinalCTA"
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "@id": "https://piralabs.com.br/como-pensamos#creative-business-turnaround",
          name: "Creative Business Turnaround",
          description: "Categoria de atuação que aplica a inteligência do turnaround antes da emergência, quando a empresa ainda tem clientes, caixa e reputação para agir com clareza e com opções. Não é turnaround reativo. É intervenção preventiva com resultado verificado.",
          inDefinedTermSet: "https://piralabs.com.br/como-pensamos",
        },
        {
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "@id": "https://piralabs.com.br/como-pensamos#janela-de-oportunidade",
          name: "Janela de oportunidade",
          description: "O período em que a empresa ainda tem condições de agir com clareza, opções e margem para testar, corrigir e decidir sem operar no limite. Não é metáfora. É descrição de uma condição real que tem início, duração e fim.",
          inDefinedTermSet: "https://piralabs.com.br/como-pensamos",
        },
        {
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "@id": "https://piralabs.com.br/como-pensamos#antes",
          name: "Antes",
          description: "A palavra de posicionamento da Pira. Não como urgência ou alerta. Como localização no tempo. A Pira atua antes: antes da crise, antes da decisão irreversível, antes que a janela de oportunidade se feche.",
          inDefinedTermSet: "https://piralabs.com.br/como-pensamos",
        },
        {
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "@id": "https://piralabs.com.br/como-pensamos#julgamento-humano",
          name: "Julgamento humano",
          description: "A capacidade de ler contexto, antecipar consequências, integrar informações de naturezas diferentes e decidir com critério calibrado por experiência real. Não é intuição. É competência construída. O diferencial que nenhuma ferramenta substitui.",
          inDefinedTermSet: "https://piralabs.com.br/como-pensamos",
        },
        {
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "@id": "https://piralabs.com.br/como-pensamos#sistema-pleno",
          name: "Sistema pleno",
          description: "O estado em que pessoas, processos, decisões, tecnologias e entregas operam juntos. Quando o sistema não opera em conjunto, a empresa trabalha mais, decide pior e perde margem em silêncio.",
          inDefinedTermSet: "https://piralabs.com.br/como-pensamos",
        },
        {
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "@id": "https://piralabs.com.br/como-pensamos#respira",
          name: "RESPIRA",
          description: "O estado de destino do Creative Business Turnaround. Um negócio que voltou a crescer com margem, que toma decisões antes que virem urgência e que opera sem depender do esforço constante de quem o lidera. Não é produto contratável. É o que acontece quando INSPIRA e TRANSPIRA cumpriram o que prometeram.",
          inDefinedTermSet: "https://piralabs.com.br/como-pensamos",
        },
      ]) }} />

      {/* Header — tamanho H1 reduzido para página editorial */}
      <div className="bg-ink">
        <div className="pt-20 md:pt-24 mb-6 md:mb-10">
          <div className="container-site">
            <Breadcrumbs items={breadcrumbs} />
            <p className="font-body font-semibold uppercase mb-4" style={{ color: "#e8e0d6", fontSize: "0.75rem", letterSpacing: "0.14em" }}>
              Como pensamos
            </p>
            <h1 className="font-display font-semibold mb-4" style={{ color: "#F5F5F2", fontSize: "clamp(2.375rem, 6.5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
              Toda empresa de serviços tem uma <span style={{ color: "#eb5c2e" }}>janela</span>. Quase ninguém a vê fechar.
            </h1>
            <p className="font-body leading-relaxed max-w-2xl" style={{ color: "#e8e0d6", fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)", lineHeight: 1.5 }}>
              As teses, referências e vocabulário que orientam cada diagnóstico e cada execução.
            </p>
            <p className="font-display" style={{
              fontFamily: "var(--font-atyp-display), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              color: "#e8e0d6",
              maxWidth: "640px",
              marginTop: "24px",
            }}>
              A Pira Labs opera a partir de cinco teses sobre como empresas de serviços perdem e recuperam margem.
            </p>
          </div>
        </div>
      </div>

      {/* Abertura */}
      <Section variant="ink" paddingY="lg">
        <div className="max-w-3xl space-y-6">
          <p className="font-body leading-relaxed" style={{ color: "#F5F5F2", fontSize: "1.125rem" }}>
            A maioria das intervenções chega tarde. O problema já virou crise, as opções já diminuíram, o custo de cada decisão já subiu. E o que resta é conter o dano.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#F5F5F2", fontSize: "1.125rem" }}>
            Não é que as empresas não vissem os sinais. É que havia sempre algo mais urgente do que parar para lê-los. O modelo funcionava. A receita entrava. A operação girava.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#F5F5F2", fontSize: "1.125rem" }}>
            Até o dia em que o esforço para manter tudo rodando começou a custar mais do que o resultado que produzia.
          </p>
          <div style={{ borderTop: "1px solid rgba(245,245,242,0.12)", marginTop: "40px", paddingTop: "40px" }}>
            <p style={{
              fontFamily: "var(--font-atyp-display), sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.875rem, 4.4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#e8e0d6",
              maxWidth: "680px",
              marginBottom: "24px",
            }}>
              O trabalho feito no tempo certo gera um resultado que o mesmo trabalho feito <span style={{ color: "#eb5c2e" }}>tarde</span> não gera mais.
            </p>
            <p className="font-body" style={{ color: "#b0a596", fontSize: "0.875rem", lineHeight: 1.55 }}>
              Não como princípio abstrato. Como constatação de quem trabalhou dentro de operações reais e viu a janela de oportunidade se fechar.
            </p>
          </div>
        </div>
      </Section>

      {/* Teses */}
      <Section variant="teal" paddingY="lg">
        <div className="max-w-3xl" style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <p className="font-body font-semibold uppercase" style={{ color: "#e8e0d6", fontSize: "0.75rem", letterSpacing: "0.14em", marginBottom: "64px" }}>
            TESES
          </p>

          {([
            {
              num: "01",
              title: "O que envelheceu não foi o trabalho. Foi o modelo.",
              body: [
                "Vender mais não resolve o problema de quem vende bem mas vê a margem encolher. Contratar mais não resolve o problema de quem tem equipe suficiente mas entrega menos do que o cliente percebe. Adotar mais ferramentas não resolve o problema de quem tem o fluxo de trabalho errado rodando mais rápido.",
                <>O problema está no modelo. Na forma como o trabalho está organizado, na forma como as decisões fluem, na forma como o valor produzido chega até quem contratou. Quando o modelo envelhece, o negócio trabalha mais para entregar <strong style={{ fontWeight: 600 }}>o mesmo</strong>. E trabalha em silêncio: a margem some antes de aparecer no resultado, o crescimento trava antes que o caixa mostre, quem fundou vira gargalo antes de perceber que virou.</>,
              ],
            },
            {
              num: "02",
              title: "Quanto mais tarde a intervenção, menos opções e maior o custo de cada uma.",
              body: [
                "Enquanto a janela está aberta, o negócio ainda tem clientes, caixa e reputação para agir. A intervenção é preventiva: diagnóstico, redesenho, resultado verificado. Quando a janela fecha e a crise se instala, a intervenção muda de natureza. Passa de preventiva para responsiva, e às vezes para paliativa.",
                <>É a diferença entre medicina preventiva, medicina responsiva e medicina paliativa. As três tratam o mesmo paciente. O que muda é <strong style={{ fontWeight: 600 }}>o momento</strong>, e o momento muda tudo o que é possível fazer e quanto custa fazer.</>,
              ],
            },
            {
              num: "03",
              title: null,
              body: [
                "95% das organizações analisadas pelo MIT NANDA em 2025 não obtiveram retorno financeiro mensurável com IA generativa. O problema apontado não foi a qualidade dos modelos. Foi a abordagem, a integração e a ausência de aprendizagem organizacional.",
                <>IA não é inteligência. É processo matemático, probabilidade e leitura de padrões. Aplicada antes de entender o problema real, não resolve. Acelera o ruído. No próximo ciclo, a vantagem das empresas de serviços não estará na ferramenta. Estará no <strong style={{ fontWeight: 600 }}>julgamento</strong> que organiza o uso da ferramenta.</>,
              ],
            },
            {
              num: "04",
              title: "Governança de IA deixou de ser compliance. Virou operação.",
              body: [
                <>Governança de IA para empresas de serviços é a definição de quem decide o que a ferramenta faz, quem revisa o que ela produziu e quem responde quando erra. Não é controle posterior. É capacidade competitiva.</>,
                <>Empresas de serviços que dependem de julgamento humano para entregar valor estão no centro desse risco. Um estudo da Meta em parceria com a Fundação Dom Cabral, de 2026, identificou que <strong style={{ fontWeight: 600 }}>68,3%</strong> das grandes empresas e multinacionais analisadas não possuem núcleo dedicado à governança de IA. Se nem as organizações com mais recursos e estrutura de compliance montaram essa governança, a empresa de serviços que opera no improviso está ainda mais exposta. No Global Risks Report 2026, o WEF registra que os riscos adversos de IA saltaram da 30ª posição no horizonte de dois anos para a 5ª no horizonte de dez.</>,
                <>Quando modelos e automações passam a influenciar decisão, escopo e entrega, governança deixa de ser função de compliance e vira estrutura de operação. Quem define o que a IA faz, quem revisa o que ela produziu e quem responde quando erra não é questão técnica. É questão de sobrevivência comercial.</>,
              ],
            },
            {
              num: "05",
              title: "Valor percebido não se declara. Se constrói e se prova.",
              body: [
                <>Empresas de serviços que não conseguem tornar o valor que entregam visível e verificável acabam vendendo esforço. E esforço é o argumento mais fraco que existe numa conversa de renovação ou expansão. A capacidade de nomear o que foi entregue, medir o que mudou e comunicar isso na linguagem de quem contratou não é habilidade de marketing. É <strong style={{ fontWeight: 600 }}>diferenciação operacional</strong>.</>,
              ],
            },
          ] as { num: string; title: string | null; body: React.ReactNode[] }[]).map((tese, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(245,245,242,0.12)", paddingTop: "48px", paddingBottom: "48px" }}>
              {/* Índice de seção — MICRO em fluxo, acima do título (Eixo 6, v2 linha 315). Sand sobre Teal por contraste e Eixo 5. */}
              <p className="font-body font-semibold" style={{ color: "#e8e0d6", fontSize: "0.75rem", letterSpacing: "0.14em", marginBottom: "16px" }}>
                {tese.num}
              </p>

              {/* Título — Tese 3 especial */}
              {i === 2 ? (
                <h3 style={{ fontFamily: "var(--font-atyp-display), sans-serif", fontWeight: 600, fontSize: "clamp(1.875rem, 4.4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F2", marginBottom: "24px" }}>
                  IA não corrige bagunça. Escala <span style={{ color: "#eb5c2e" }}>bagunça</span>.
                </h3>
              ) : (
                <h3 style={{ fontFamily: "var(--font-atyp-display), sans-serif", fontWeight: 600, fontSize: "clamp(1.875rem, 4.4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F2", marginBottom: "24px" }}>
                  {tese.title}
                </h3>
              )}

              {/* Corpo */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {tese.body.map((par, j) => (
                  <p key={j} className="font-body leading-relaxed" style={{ color: "#F5F5F2", fontSize: "1.125rem" }}>
                    {par}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Linha de ponte para Referências */}
          <div style={{ borderTop: "1px solid rgba(245,245,242,0.12)", paddingTop: "40px", paddingBottom: "8px" }}>
            <p className="font-body" style={{ color: "#e8e0d6", fontSize: "0.875rem", lineHeight: 1.55 }}>
              As referências abaixo não são decoração. São o repertório que torna cada tese verificável.
            </p>
          </div>
        </div>
      </Section>

      {/* Referências */}
      <Section variant="ink" paddingY="lg">
        <div className="max-w-3xl space-y-10">
          <p className="font-body font-semibold uppercase" style={{ color: "#e8e0d6", fontSize: "0.75rem", letterSpacing: "0.14em" }}>
            REFERÊNCIAS
          </p>
          <p style={{
            fontFamily: "var(--font-atyp-display), sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1.4375rem, 2.9vw, 2rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
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
              <div key={i} className="space-y-2 pl-6" style={{ borderLeft: "2px solid rgba(245,245,242,0.12)" }}>
                <p className="font-body font-semibold leading-snug" style={{ fontSize: "1.125rem", color: "#F5F5F2" }}>{title}</p>
                <p className="font-body leading-relaxed" style={{ color: "#e8e0d6", fontSize: "1.125rem" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Vocabulário — fundo Sand */}
      <section style={{ backgroundColor: "#e8e0d6" }} className="py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-3xl space-y-10">
            <p className="font-body font-semibold uppercase" style={{ color: "#05262e", fontSize: "0.75rem", letterSpacing: "0.14em", marginBottom: "16px" }}>
              VOCABULÁRIO
            </p>
            <p className="font-body leading-relaxed" style={{ color: "#05262e", fontSize: "1.125rem" }}>
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
                <div key={i} style={{ borderTop: "1px solid rgba(5,38,46,0.12)", paddingTop: "24px", paddingBottom: "8px" }}>
                  {tier === 1 ? (
                    <p style={{ fontFamily: "var(--font-atyp-display), sans-serif", fontWeight: 400, fontSize: "clamp(1.125rem, 2vw, 1.375rem)", lineHeight: 1.3, color: "#05262e", marginBottom: "8px" }}>{term}</p>
                  ) : (
                    <p style={{ fontFamily: "var(--font-atyp-text), sans-serif", fontWeight: 600, fontSize: "1.125rem", color: "#05262e", marginBottom: "6px" }}>{term}</p>
                  )}
                  <p className="font-body leading-relaxed" style={{ color: "#1A5568", fontSize: "1.125rem" }}>{def}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Reconheceu seu negócio em alguma tese? A janela ainda está aberta. Vale conversar."
        origin="como_pensamos"
        ctaLabel="RESPIRE"
      />
    </>
  )
}
