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
          <p className="text-off-white/85 font-body leading-relaxed">
            A maioria das intervenções chega tarde. O problema já virou crise, as opções já diminuíram, o custo de cada decisão já subiu. E o que resta é conter o dano.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Não é que as empresas não vissem os sinais. É que havia sempre algo mais urgente do que parar para lê-los. O modelo funcionava. A receita entrava. A operação girava.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Até o dia em que o esforço para manter tudo rodando começou a custar mais do que o resultado que produzia.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            A Pira Labs foi construída sobre uma crença de operação: o mesmo trabalho feito antes produz resultado que o mesmo trabalho feito tarde não consegue mais produzir. Não como princípio abstrato. Como constatação de quem trabalhou dentro de operações reais, viu a janela se fechar e entendeu o que muda quando você chega antes dela fechar.
          </p>
        </div>
      </Section>

      {/* Teses */}
      <Section variant="highlighted" paddingY="lg">
        <div className="max-w-3xl space-y-16">
          <p className="font-body font-semibold uppercase text-sand/50" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
            TESES
          </p>

          {/* Tese 1 */}
          <div className="space-y-4">
            <h2 className="font-display text-off-white" style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, lineHeight: 1.3 }}>
              O trabalho não acabou. O modelo de trabalho das empresas de serviços é que envelheceu.
            </h2>
            <p className="text-off-white/75 font-body leading-relaxed">
              Vender mais não resolve o problema de quem vende bem mas vê a margem encolher. Contratar mais não resolve o problema de quem tem equipe suficiente mas entrega menos do que o cliente percebe. Adotar mais ferramentas não resolve o problema de quem tem o fluxo de trabalho errado rodando mais rápido.
            </p>
            <p className="text-off-white/75 font-body leading-relaxed">
              O problema está no modelo. Na forma como o trabalho está organizado, na forma como as decisões fluem, na forma como o valor produzido chega até quem contratou. Quando o modelo envelhece, o negócio trabalha mais para entregar o mesmo. E trabalha em silêncio: a margem some antes de aparecer no resultado, o crescimento trava antes que o caixa mostre, quem fundou vira gargalo antes de perceber que virou.
            </p>
          </div>

          {/* Tese 2 */}
          <div className="space-y-4">
            <h2 className="font-display text-off-white" style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, lineHeight: 1.3 }}>
              A janela de oportunidade tem tempo contado. E a maioria das empresas não percebe quando ela fecha.
            </h2>
            <p className="text-off-white/75 font-body leading-relaxed">
              Enquanto a janela está aberta, o negócio ainda tem clientes, caixa e reputação para agir. A intervenção é preventiva: diagnóstico, redesenho, resultado verificado. Quando a janela fecha e a crise se instala, a intervenção muda de natureza. Passa de preventiva para responsiva, e às vezes para paliativa.
            </p>
            <p className="text-off-white/75 font-body leading-relaxed">
              É a diferença entre medicina preventiva, medicina responsiva e medicina paliativa. As três tratam o mesmo paciente. O que muda é o momento, e o momento muda tudo o que é possível fazer e quanto custa fazer.
            </p>
          </div>

          {/* Tese 3 */}
          <div className="space-y-4">
            <h2 className="font-display text-off-white" style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, lineHeight: 1.3 }}>
              IA não corrige bagunça. Escala bagunça.
            </h2>
            <p className="text-off-white/75 font-body leading-relaxed">
              95% das organizações analisadas pelo MIT NANDA em 2025 não obtiveram retorno financeiro mensurável com IA generativa. O problema apontado não foi a qualidade dos modelos. Foi a abordagem, a integração e a ausência de aprendizagem organizacional.
            </p>
            <p className="text-off-white/75 font-body leading-relaxed">
              IA não é inteligência. É processo matemático, probabilidade e leitura de padrões. Aplicada antes de entender o problema real, não resolve. Acelera o ruído. No próximo ciclo, a vantagem das empresas de serviços não estará na ferramenta. Estará no julgamento que organiza o uso da ferramenta.
            </p>
          </div>

          {/* Tese 4 */}
          <div className="space-y-4">
            <h2 className="font-display text-off-white" style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, lineHeight: 1.3 }}>
              Governança não é controle posterior. É capacidade competitiva.
            </h2>
            <p className="text-off-white/75 font-body leading-relaxed">
              Quando modelos, dados e automações passam a influenciar decisão, risco e performance de negócio, governança deixa de ser função de compliance e vira estrutura de operação. O Gartner estima que, até 2027, 40% das empresas rebaixarão ou descontinuarão agentes autônomos por falhas de governança identificadas apenas depois de incidentes em produção.
            </p>
          </div>

          {/* Tese 5 */}
          <div className="space-y-4">
            <h2 className="font-display text-off-white" style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, lineHeight: 1.3 }}>
              Valor percebido não se declara. Se constrói e se prova.
            </h2>
            <p className="text-off-white/75 font-body leading-relaxed">
              Empresas de serviços que não conseguem tornar o valor que entregam visível e verificável acabam vendendo esforço. E esforço é o argumento mais fraco que existe numa conversa de renovação ou expansão. A capacidade de nomear o que foi entregue, medir o que mudou e comunicar isso na linguagem de quem contratou não é habilidade de marketing. É diferenciação operacional.
            </p>
          </div>
        </div>
      </Section>

      {/* Referências */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl space-y-10">
          <p className="font-body font-semibold uppercase text-off-white/50" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
            REFERÊNCIAS
          </p>
          <p className="text-off-white/75 font-body leading-relaxed">
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
              <div key={i} className="space-y-2 border-l border-off-white/10 pl-6">
                <p className="text-off-white font-body font-semibold leading-snug" style={{ fontSize: "14px" }}>{title}</p>
                <p className="text-off-white/60 font-body leading-relaxed" style={{ fontSize: "14px" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Vocabulário */}
      <Section variant="highlighted" paddingY="lg">
        <div className="max-w-3xl space-y-10">
          <p className="font-body font-semibold uppercase text-sand/50" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
            VOCABULÁRIO
          </p>
          <p className="text-off-white/75 font-body leading-relaxed">
            A Pira usa algumas palavras de forma específica. O significado que damos a elas não é o uso de mercado.
          </p>
          <div className="space-y-8">
            {[
              {
                term: "Creative Business Turnaround",
                def: "Categoria de atuação que aplica a inteligência do turnaround antes da emergência, quando a empresa ainda tem clientes, caixa e reputação para agir com clareza e com opções. Não é turnaround reativo. É intervenção preventiva com resultado verificado.",
              },
              {
                term: "Antes",
                def: "A palavra de posicionamento da Pira. Não como urgência ou alerta. Como localização no tempo. A Pira atua antes: antes da crise, antes da decisão irreversível, antes que a janela de oportunidade se feche.",
              },
              {
                term: "Janela de oportunidade",
                def: "O período em que a empresa ainda tem condições de agir com clareza, opções e margem para testar, corrigir e decidir sem operar no limite. Não é metáfora. É descrição de uma condição real que tem início, duração e fim.",
              },
              {
                term: "Julgamento humano",
                def: "A capacidade de ler contexto, antecipar consequências, integrar informações de naturezas diferentes e decidir com critério calibrado por experiência real. Não é intuição. É competência construída. O diferencial que nenhuma ferramenta substitui.",
              },
              {
                term: "Sistema pleno",
                def: "O estado em que pessoas, processos, decisões, tecnologias e entregas operam juntos. Quando o sistema não opera em conjunto, a empresa trabalha mais, decide pior e perde margem em silêncio.",
              },
              {
                term: "RESPIRA",
                def: "O estado de destino do Creative Business Turnaround. Um negócio que voltou a crescer com margem, que toma decisões antes que virem urgência e que opera sem depender do esforço constante de quem o lidera. Não é produto contratável. É o que acontece quando INSPIRA e TRANSPIRA cumpriram o que prometeram.",
              },
            ].map(({ term, def }, i) => (
              <div key={i} className="space-y-1">
                <p className="text-off-white font-body font-semibold" style={{ fontSize: "15px" }}>{term}</p>
                <p className="text-off-white/65 font-body leading-relaxed" style={{ fontSize: "14px" }}>{def}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-2xl space-y-6">
          <p className="font-display text-off-white" style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, lineHeight: 1.35 }}>
            Quer entender se o seu momento é o momento da Pira?
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
