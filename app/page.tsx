import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS } from "@/lib/constants";
import { organizationSchema } from "@/lib/schemas/organization";
import { websiteSchema } from "@/lib/schemas/website";

export const metadata: Metadata = {
  title: "PIRA LABS · Creative Business Turnaround para empresas de serviços",
  description:
    "A PIRA LABS é uma boutique brasileira de Creative Business Turnaround. Atuamos antes da crise, quando ainda dá para mudar com tranquilidade.",
  alternates: {
    canonical: "https://piralabs.com.br/",
  },
  openGraph: {
    title: "PIRA LABS · Creative Business Turnaround",
    description:
      "Boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.",
    url: "https://piralabs.com.br/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PIRA LABS" }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Schemas globais — home é o único lugar onde entram Organization + WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* HOME-1 · HERO */}
      <Section variant="dark" paddingY="xl" id="hero">
        <div className="max-w-3xl">
          <p className="text-sm font-body font-medium text-orange uppercase tracking-widest mb-4">
            Propulsão de negócios
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-off-white leading-tight mb-6">
            Existe um momento em que transformar ainda é um processo, não uma crise.
          </h1>
          {/* Frase canônica — obrigatória nos primeiros 150 termos, sentença única */}
          <p className="text-lg md:text-xl text-off-white/85 font-body leading-relaxed mb-4">
            A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.
          </p>
          <p className="text-lg text-off-white/75 font-body leading-relaxed mb-10">
            Entramos quando ainda há clientes, caixa e reputação, mas o modelo de trabalho começou a custar caro demais. Saímos quando o negócio opera com clareza e capacidade de avançar sem depender de nós.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton variant="primary" href="#metodo">
              Entender o método
            </CTAButton>
            <CTAButton variant="secondary" href="/inspira/oxigenio">
              Aplicar para Oxigênio
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* HOME-2 · SINAIS */}
      <Section variant="default" paddingY="lg">
        <p className="text-sm font-body font-medium text-orange uppercase tracking-widest mb-3">
          Quando a operação começa a custar mais do que deveria
        </p>
        <p className="text-off-white/80 font-body leading-relaxed mb-10 max-w-2xl">
          Não é falha de gestão. É um modelo de trabalho que envelheceu enquanto a empresa crescia. Cinco sinais que aparecem antes da crise:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sinais 1-2: split em duas frases. Sinais 3-5: frase única no summary. */}
          {[
            {
              summary: "A empresa cresce, mas a margem some.",
              detail: "O esforço aumenta, o resultado fica igual.",
            },
            {
              summary: "Decisões importantes passam todas pelo fundador.",
              detail: "O resto do time espera.",
            },
            {
              summary: "A operação só funciona porque algumas pessoas fazem o que não é papel delas.",
              detail: null,
            },
            {
              summary: "Você implementou tecnologia, incluindo IA, e o resultado foi acelerar o ruído que já existia.",
              detail: null,
            },
            {
              summary: "Em IA Search e em pitches automatizados, sua empresa não aparece, ou aparece errado.",
              detail: null,
            },
          ].map((sinal, i) => (
            <details
              key={i}
              className="bg-teal/20 border border-teal/40 rounded-lg p-6"
              suppressHydrationWarning
            >
              <summary className="text-off-white/90 font-body leading-relaxed cursor-pointer marker:text-orange/60">
                {sinal.summary}
              </summary>
              {sinal.detail && (
                <p className="mt-3 text-off-white/70 font-body leading-relaxed text-sm">
                  {sinal.detail}
                </p>
              )}
            </details>
          ))}
        </div>
        <p className="mt-8 text-off-white/60 font-body italic">
          Se você reconheceu mais de um, faz sentido continuar a leitura.
        </p>
      </Section>

      {/* HOME-3 · MÉTODO */}
      <Section variant="highlighted" paddingY="lg" id="metodo">
        <h2 className="text-3xl md:text-4xl font-semibold text-off-white mb-3">
          O método
        </h2>
        <p className="text-off-white/75 font-body mb-12 max-w-2xl">
          Três movimentos do corpo. Três fases do trabalho. Não é metáfora forçada. É como o negócio se move.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* INSPIRA */}
          <div className="bg-deep-teal/50 rounded-lg p-8">
            <p className="text-orange font-semibold font-body text-sm uppercase tracking-widest mb-2">INSPIRA</p>
            <p className="text-off-white font-body font-medium text-lg mb-4">
              Quando você para de resolver o problema errado.
            </p>
            {/* Duas primeiras frases no summary; restante colapsado */}
            <details className="mb-6" suppressHydrationWarning>
              <summary className="text-off-white/80 font-body leading-relaxed cursor-pointer marker:text-orange/60">
                O diagnóstico é onde você pausa, respira fundo e olha para o negócio com lente que de dentro não dá. A PIRA LABS lê cinco áreas antes de nomear qualquer problema.
              </summary>
              <p className="mt-3 text-off-white/80 font-body leading-relaxed">
                Mercado, pessoas, governança, tensão econômica e síntese integrada. Cada leitura passa por aprovação humana antes de avançar. O resultado é um relatório único, com o problema real nomeado e a rota desenhada.
              </p>
            </details>
            <p className="text-xs text-off-white/50 font-body mb-4">Conduz: Gabriela Aguiar.</p>
            <CTAButton variant="tertiary" href="/inspira">
              Ver INSPIRA →
            </CTAButton>
          </div>

          {/* TRANSPIRA */}
          <div className="bg-deep-teal/50 rounded-lg p-8">
            <p className="text-orange font-semibold font-body text-sm uppercase tracking-widest mb-2">TRANSPIRA</p>
            <p className="text-off-white font-body font-medium text-lg mb-4">
              {/* "trabalho certo" e "trabalho muito" em itálico via CSS — sem aspas */}
              Quando o <em className="emphasis-italic">trabalho certo</em> substitui o <em className="emphasis-italic">trabalho muito</em>.
            </p>
            {/* Duas primeiras frases no summary; restante colapsado */}
            <details className="mb-6" suppressHydrationWarning>
              <summary className="text-off-white/80 font-body leading-relaxed cursor-pointer marker:text-orange/60">
                A execução acontece junto com a operação do cliente, não em uma sala de reunião. Redesenhamos a relação entre trabalho, valor, tecnologia e governança.
              </summary>
              <p className="mt-3 text-off-white/80 font-body leading-relaxed">
                Tecnologia entra onde amplifica, nunca antes de entender o problema. A IA não corrige bagunça. Sem método, ela escala bagunça.
              </p>
            </details>
            <p className="text-xs text-off-white/50 font-body mb-4">Conduz: Celso Gama.</p>
            <CTAButton variant="tertiary" href="/transpira">
              Ver TRANSPIRA →
            </CTAButton>
          </div>
        </div>

        <p className="text-off-white/70 font-body leading-relaxed mb-8 max-w-2xl">
          Quando a clareza chega, o ritmo volta. O negócio decide. A empresa cresce sem improviso constante. Esse é o RESPIRA. Estado, não produto.
        </p>

        <div className="bg-deep-teal/40 border border-teal/30 rounded-lg p-6 max-w-2xl">
          <p className="text-off-white/85 font-body leading-relaxed mb-4">
            Se você quer começar com escopo fechado e prazo curto, conheça o Oxigênio IA Search. Diagnóstico de como sua empresa aparece nos motores de IA, em até 5 dias úteis.
          </p>
          <CTAButton variant="secondary" href="/inspira/oxigenio">
            Conhecer Oxigênio
          </CTAButton>
        </div>
      </Section>

      {/* HOME-4 · PROVAS — id="provas" obrigatório (redirects 301 de /cases apontam aqui) */}
      <Section variant="default" paddingY="lg" id="provas">
        <h2 className="text-3xl md:text-4xl font-semibold text-off-white mb-3">
          O que a operação real ensinou
        </h2>
        <p className="text-off-white/75 font-body mb-10 max-w-2xl">
          Não trazemos teoria de prateleira. Trazemos o que aprendemos errando, corrigindo, entregando. Três marcos que sustentam o método:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 — pré-IA */}
          <div className="bg-teal/20 border border-teal/40 rounded-lg p-8">
            <p className="font-display text-5xl text-peach mb-4">R$163M</p>
            {/* Primeira frase visível no summary; restante colapsado */}
            <details suppressHydrationWarning>
              <summary className="text-off-white/85 font-body leading-relaxed text-sm cursor-pointer marker:text-peach/60">
                Reestruturação da área de ativação e eventos de uma agência multinacional.
              </summary>
              <p className="mt-2 text-off-white/85 font-body leading-relaxed text-sm">
                Crescimento sustentado por dois anos culminou na operação do patrocínio global de uma grande marca de tecnologia nos Jogos Rio 2016. 600 pessoas e 100 fornecedores coordenados.
              </p>
            </details>
          </div>
          {/* Card 2 — pré-IA */}
          <div className="bg-teal/20 border border-teal/40 rounded-lg p-8">
            <p className="font-display text-5xl text-peach mb-4">+79pp</p>
            {/* Primeira frase visível no summary; restante colapsado */}
            <details suppressHydrationWarning>
              <summary className="text-off-white/85 font-body leading-relaxed text-sm cursor-pointer marker:text-peach/60">
                Conta publicitária de multinacional do setor de bebidas, atendida pela agência onde eu liderava a operação.
              </summary>
              <p className="mt-2 text-off-white/85 font-body leading-relaxed text-sm">
                O problema era simples e ninguém olhava no lugar certo. Revisão de processos e métricas recuperou 79 pontos percentuais de margem em 6 meses, sem aumentar receita nem cortar custo.
              </p>
            </details>
          </div>
          {/* Card 3 — pós-IA */}
          <div className="bg-teal/20 border border-teal/40 rounded-lg p-8">
            <p className="font-display text-5xl text-peach mb-4">400h→36h</p>
            {/* Primeira frase visível no summary; restante colapsado */}
            <details suppressHydrationWarning>
              <summary className="text-off-white/85 font-body leading-relaxed text-sm cursor-pointer marker:text-peach/60">
                Operação jurídica de alto volume.
              </summary>
              <p className="mt-2 text-off-white/85 font-body leading-relaxed text-sm">
                IA bem aplicada e supervisionada por humanos liberou o potencial de faturamento de R$160 mil por mês para o cliente, com a mesma equipe que ele já tinha.
              </p>
            </details>
          </div>
        </div>
        <p className="text-off-white/60 font-body text-sm leading-relaxed max-w-3xl">
          Cada número tem caso por trás, e o caso tem cliente que viveu por dentro. Os dois primeiros vieram de redesenho de processo, antes da onda atual de IA. O terceiro veio depois, com IA aplicada e supervisão humana. Em todos, o que entregou resultado foi olhar para onde os outros não estavam olhando.
        </p>
      </Section>

      {/* HOME-5 · FAÍSCA */}
      <Section variant="dark" paddingY="lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-off-white mb-3">
          FAÍSCA · onde a PIRA LABS pensa, publica e ensina
        </h2>
        <p className="text-off-white/75 font-body mb-10 max-w-2xl">
          A faísca é o instante onde a energia latente vira luz. É também o que publicamos, ensinamos e provocamos para que a categoria ganhe forma no Brasil.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Antes da Crise",
              body: "Publicação editorial sobre teses, estudos e o que aprendemos operando. Inclui o que não funcionou.",
            },
            {
              title: "Palestras",
              body: "Conversas em empresas e eventos sobre Creative Business Turnaround, governança de IA e o que vem antes da crise.",
            },
            {
              title: "Mentorias",
              body: "Ciclos curtos de mentoria para fundadores e líderes de empresas de serviços que querem repensar o modelo de trabalho.",
            },
          ].map((frente) => (
            <div key={frente.title} className="border-t border-orange/50 pt-6">
              <h3 className="text-off-white font-semibold font-body mb-2">{frente.title}</h3>
              <p className="text-off-white/75 font-body text-sm leading-relaxed">{frente.body}</p>
            </div>
          ))}
        </div>
        <CTAButton variant="secondary" href="/faisca">
          Conhecer FAÍSCA
        </CTAButton>
      </Section>

      {/* HOME-6 · FUNDADORES */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-2xl">
          <p className="text-off-white/90 font-body leading-relaxed text-lg mb-4">
            A PIRA LABS é boutique por escolha, não por estágio. Cada projeto tem Gabriela e Celso do diagnóstico à entrega. Sem camada intermediária entre quem entende o problema e quem resolve.
          </p>
          <p className="text-off-white/65 font-body leading-relaxed mb-8">
            Uma década dentro dos ecossistemas globais de inovação. Mais de vinte anos de operação em multinacionais. A combinação não é comum. É o que sustenta cada decisão da PIRA LABS.
          </p>
          <CTAButton variant="secondary" href="/sobre">
            Conhecer Gabriela e Celso
          </CTAButton>
        </div>
      </Section>

      {/* HOME-7 · CTA FINAL */}
      <section className="bg-ink section-padding">
        <div className="container-site text-center">
          <p className="font-display text-2xl md:text-4xl italic text-peach mb-8 leading-snug max-w-2xl mx-auto">
            Existe um próximo nível para o seu negócio. O que está entre você e ele, descobrimos junto.
          </p>
          <CTAButton variant="primary" href="/contato" origin={ORIGINS.HOME}>
            Falar com a PIRA LABS
          </CTAButton>
          <p className="mt-4 text-sm text-off-white/50 font-body">
            Respondemos em até dois dias úteis.
          </p>
          <p className="mt-8 font-display text-lg italic text-off-white/40">
            Inspira. Transpira. Respira.<br />
            <span className="font-semibold not-italic font-body text-sm text-off-white/30">Liberamos o próximo nível.</span>
          </p>
        </div>
      </section>
    </>
  );
}
