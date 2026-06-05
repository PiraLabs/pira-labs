

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { FAQ } from "@/components/shared/FAQ";
import NodeSystem from "@/components/shared/NodeSystem";
import { LogoVideo } from "@/components/shared/LogoVideo";
import { HeroSectionClient } from "@/components/home/HeroSectionClient";
import { SystemSectionClient } from "@/components/home/SystemSectionClient";
import { SignalsSectionClient } from "@/components/home/SignalsSectionClient";
import { CountUp } from "@/components/home/CountUp";
import { organizationSchema } from "@/lib/schemas/organization";
import { websiteSchema } from "@/lib/schemas/website";
import { faqPageSchema } from "@/lib/schemas/service";

export const metadata: Metadata = {
  title: { absolute: "Creative Business Turnaround · Pira Labs" },
  description:
    "A Pira Labs é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes que a janela se feche.",
  alternates: {
    canonical: "https://piralabs.com.br/",
    languages: {
      "pt-BR": "https://piralabs.com.br",
      en: "https://piralabs.com.br/en",
    },
  },
  openGraph: {
    title: "Pira Labs · Creative Business Turnaround",
    description:
      "Boutique brasileira de Creative Business Turnaround para empresas de serviços. Entramos antes que o modelo de trabalho vire crise.",
    url: "https://piralabs.com.br/",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs · Creative Business Turnaround" }],
  },
};

const faqItems = [
  {
    question: "Quanto custa trabalhar com a Pira Labs?",
    answer:
      "Cada projeto é dimensionado individualmente. Os produtos de entrada têm preço público: Oxigênio IA Search Fast R$3.500 / Full R$5.300. Pocket do INSPIRA R$3.900. Imersão em IA R$7.100. Para INSPIRA e TRANSPIRA, o investimento é definido após a primeira conversa.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "Depende do produto. Oxigênio: até 5 dias úteis. Pocket do INSPIRA: sessão única de 1,5h. Imersão em IA: 3 sessões, 5,5h no total. INSPIRA completo: 4 a 6 semanas. TRANSPIRA: entre 2 e 6 meses conforme escopo e configuração.",
  },
  {
    question: "E se eu não sei exatamente o que preciso?",
    answer:
      "A primeira conversa é justamente isso. Sem compromisso. Ajudamos a nomear o problema antes de propor qualquer solução.",
  },
  {
    question: "Como começa o primeiro contato?",
    answer:
      "Você manda mensagem pelo formulário. Em até 2 dias úteis Gabriela e Celso respondem. Conversa inicial de 30 a 45 minutos. Se fizer sentido para os dois lados, proposta em até 5 dias úteis.",
  },
  {
    question: "Vocês atendem empresas internacionais?",
    answer: "Sim. Atendemos em português e inglês.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/#webpage",
  url: "https://piralabs.com.br/",
  name: "Creative Business Turnaround · Pira Labs",
  description:
    "A Pira Labs é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes que a janela se feche.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "pt-BR",
};

const faqSchema = faqPageSchema(faqItems);

export default function HomePage() {
  return (
    <>
      {/* Schemas globais — Organization + WebSite + WebPage + FAQPage na home */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HOME-1 · HERO */}
      <HeroSectionClient />

      {/* HOME-2 · SISTEMA */}
      <SystemSectionClient />

      {/* HOME-3 · SINAIS */}
      <SignalsSectionClient />

      {/* legado — manter abaixo até refactor completo */}
      <Section variant="default" paddingY="lg">
        <p className="text-sm font-body font-medium text-orange uppercase tracking-widest mb-4">
          Quando a operação começa a custar mais do que deveria
        </p>
        <p className="text-off-white/80 font-body leading-relaxed mb-10 max-w-2xl">
          Em seis meses, <strong>79 pontos percentuais de margem</strong> recuperados sem
          aumento de receita, em uma evidência de trajetória dos fundadores. O problema estava
          exatamente onde ninguém estava olhando. Esse tipo de sinal é o que a Pira Labs procura
          antes de recomendar qualquer solução. Cinco sinais de quando o modelo começa a mostrar
          o custo:
        </p>
        <ul className="space-y-6 mb-8 max-w-2xl">
          {[
            "A empresa cresce, mas a margem some. O esforço aumenta, o resultado fica igual.",
            "Toda decisão importante passa pelo fundador. O time espera.",
            "A operação só funciona porque algumas pessoas fazem o que não é papel delas.",
            "A empresa adotou IA. O resultado foi acelerar o ruído que já existia.",
            "Em buscas feitas por IA, listas geradas automaticamente e recomendações de mercado, a empresa não aparece, ou aparece errado.",
          ].map((sinal, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                className="shrink-0 text-orange font-body font-semibold text-sm mt-1"
                aria-hidden="true"
              >
                {i + 1}.
              </span>
              <p className="text-off-white/80 font-body leading-relaxed">{sinal}</p>
            </li>
          ))}
        </ul>
        <p className="text-off-white/60 font-body italic">
          Se você reconheceu mais de um, continue a leitura.
        </p>
      </Section>

      {/* HOME-3 · MÉTODO — id="metodo": destino do CTA do hero */}
      <Section variant="highlighted" paddingY="lg" id="metodo">
        <div className="relative overflow-hidden">
          {/* NodeSystem: conexão completa ao chegar na seção */}
          <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <NodeSystem variant="dark" density="medium" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-body font-semibold text-off-white mb-3">
              O método
            </h2>
            <p className="text-off-white/75 font-body mb-12 max-w-2xl">
              Três movimentos. Três fases. Não é metáfora. É como o negócio se move.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* INSPIRA */}
              <div className="bg-ink/60 rounded-lg p-8 backdrop-blur-sm">
                <p className="text-orange font-body font-semibold text-sm uppercase tracking-widest mb-2">
                  INSPIRA
                </p>
                <p className="text-off-white font-body font-medium text-lg mb-4">
                  Quando você para de resolver o problema errado.
                </p>
                <p className="text-off-white/80 font-body leading-relaxed mb-6">
                  O diagnóstico. Seis camadas em sequência, convergindo em síntese integrada com
                  aprovação humana em cada etapa. Nenhuma recomendação antes de todas as leituras
                  estarem integradas. Gabriela Aguiar conduz. O resultado é o problema real nomeado,
                  a rota desenhada e o próximo passo definido.
                </p>
                <Link
                  href="/inspira"
                  className="text-sm font-body font-medium text-off-white hover:text-orange transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  Ver INSPIRA →
                </Link>
              </div>

              {/* TRANSPIRA */}
              <div className="bg-ink/60 rounded-lg p-8 backdrop-blur-sm">
                <p className="text-orange font-body font-semibold text-sm uppercase tracking-widest mb-2">
                  TRANSPIRA
                </p>
                {/* "trabalho certo" e "trabalho muito" em itálico via <em> — sem aspas */}
                <p className="text-off-white font-body font-medium text-lg mb-4">
                  Quando o{" "}
                  <em className="emphasis-italic">trabalho certo</em> substitui o{" "}
                  <em className="emphasis-italic">trabalho muito</em>.
                </p>
                <p className="text-off-white/80 font-body leading-relaxed mb-6">
                  A execução. Acontece dentro da operação do cliente, com o time que vai operar
                  depois. Redesenha a relação entre trabalho, valor, tecnologia e governança. A Pira
                  Labs não sai quando o prazo acaba. Sai quando os resultados acordados são
                  verificados. Celso Gama conduz.
                </p>
                <Link
                  href="/transpira"
                  className="text-sm font-body font-medium text-off-white hover:text-orange transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  Ver TRANSPIRA →
                </Link>
              </div>
            </div>

            {/* LogoVideo — HOME-3, hasVideo=false até arquivo disponível em public/ */}
            <LogoVideo hasVideo={false} className="mb-10 max-w-sm" />

            {/* RESPIRA — estado, não produto */}
            <p className="text-off-white/70 font-body leading-relaxed mb-10 max-w-2xl">
              Quando a clareza chega, o ritmo volta. O negócio decide. A empresa cresce sem
              improviso constante. Esse é o RESPIRA. Estado, não produto.
            </p>

            {/* Bloco Oxigênio */}
            <div className="bg-ink/50 border border-teal/30 rounded-lg p-6 max-w-2xl">
              <p className="text-off-white/85 font-body leading-relaxed mb-4">
                Quer começar com escopo fechado e prazo definido? O Oxigênio IA Search diagnostica
                como a sua empresa aparece nos motores de IA. Fast R$3.500 · Full R$5.300. Entrega
                em até 5 dias úteis.
              </p>
              <Link
                href="/inspira/oxigenio"
                className="text-sm font-body font-medium text-off-white hover:text-orange transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                Conhecer Oxigênio →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* HOME-4 · PROVAS — id="provas": destino dos redirects 301 de /cases */}
      <Section variant="default" paddingY="lg" id="provas">
        <div className="relative overflow-hidden">
          {/* NodeSystem: três origens convergindo para nó de resultado */}
          <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <NodeSystem variant="dark" density="dense" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-body font-semibold text-off-white mb-3">
              O que a operação real ensinou
            </h2>
            <p className="text-off-white/75 font-body mb-10 max-w-2xl">
              Não é teoria de prateleira. É o que aprendemos errando, corrigindo, entregando. Três
              evidências de trajetória dos fundadores, anteriores à Pira Labs como empresa:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Card 1 — pré-IA */}
              <div className="bg-teal/20 border border-teal/40 rounded-lg p-8">
                {/* CountUp anima apenas o número de destino */}
                <p
                  className="font-display text-5xl text-orange mb-1"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  R$16M{" → "}
                  <CountUp prefix="R$" end={163} suffix="M" duration={1.2} />
                </p>
                <p className="text-xs font-body text-off-white/40 uppercase tracking-widest mb-4">
                  pré-IA
                </p>
                <p className="text-off-white/80 font-body text-sm leading-relaxed">
                  Reestruturação da área de ativação e eventos de uma agência multinacional. Dois
                  anos de operação redesenhada culminaram na coordenação de 600 pessoas e 100
                  fornecedores para o patrocínio global de uma grande marca de tecnologia nos Jogos
                  Rio 2016.
                </p>
              </div>

              {/* Card 2 — pré-IA */}
              <div className="bg-teal/20 border border-teal/40 rounded-lg p-8">
                <p
                  className="font-display text-5xl text-orange mb-1"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {"-64%"}{" → "}
                  <CountUp prefix="+" end={15} suffix="%" duration={1.2} />
                </p>
                <p className="text-xs font-body text-off-white/40 uppercase tracking-widest mb-4">
                  pré-IA
                </p>
                <p className="text-off-white/80 font-body text-sm leading-relaxed">
                  Conta publicitária de multinacional do setor de bebidas, atendida pela agência
                  onde Celso liderava a operação. Revisão de processos e métricas recuperou 79
                  pontos percentuais de margem em 6 meses, sem aumentar receita.
                </p>
              </div>

              {/* Card 3 — pós-IA com supervisão humana */}
              <div className="bg-teal/20 border border-teal/40 rounded-lg p-8">
                <p
                  className="font-display text-5xl text-orange mb-1"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {"400h"}{" → "}
                  <CountUp end={36} suffix="h" duration={1.2} />
                </p>
                <p className="text-xs font-body text-off-white/40 uppercase tracking-widest mb-4">
                  pós-IA · supervisão humana
                </p>
                <p className="text-off-white/80 font-body text-sm leading-relaxed">
                  Operação jurídica de alto volume. IA bem aplicada e supervisionada por humanos
                  liberou capacidade de R$160 mil de faturamento adicional por mês, com a mesma
                  equipe que o cliente já tinha.
                </p>
              </div>
            </div>

            <p className="text-off-white/60 font-body text-sm leading-relaxed max-w-3xl">
              Os dois primeiros vieram de redesenho de processo, antes da onda atual de IA. O
              terceiro veio depois, com IA aplicada e supervisão humana. Em todos, o resultado
              veio de olhar para onde ninguém estava olhando.
            </p>
          </div>
        </div>
      </Section>

      {/* HOME-5 · FAÍSCA teaser — 3 grupos, sem Mentorias */}
      <Section variant="dark" paddingY="lg">
        <h2 className="text-3xl md:text-4xl font-body font-semibold text-off-white mb-3">
          FAÍSCA · a porta de entrada
        </h2>
        <p className="text-off-white/75 font-body mb-10 max-w-2xl">
          Engajamentos de tempo curto que ensinam, despertam ou provocam antes de qualquer
          compromisso maior. Três grupos, sete produtos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="border-t border-orange/40 pt-6">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
              Grupo 1
            </p>
            <h3 className="text-off-white font-body font-medium mb-3">
              Entrada rápida: preço fixo, sem atrito
            </h3>
            <p className="text-off-white/65 font-body text-sm leading-relaxed">
              Imersão em IA (R$7.100) · Oxigênio IA Search (R$3.500/R$5.300) · Pocket do INSPIRA
              (R$3.900)
            </p>
          </div>
          <div className="border-t border-orange/40 pt-6">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
              Grupo 2
            </p>
            <h3 className="text-off-white font-body font-medium mb-3">
              Autoridade e relacionamento
            </h3>
            <p className="text-off-white/65 font-body text-sm leading-relaxed">
              Palestras · Workshops
            </p>
          </div>
          <div className="border-t border-orange/40 pt-6">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
              Grupo 3
            </p>
            <h3 className="text-off-white font-body font-medium mb-3">Oferta seletiva</h3>
            <p className="text-off-white/65 font-body text-sm leading-relaxed">
              C-level as a Service · FAÍSCA Jurídica
            </p>
          </div>
        </div>
        <Link
          href="/faisca"
          className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded border border-off-white text-off-white bg-transparent font-body font-medium text-base transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        >
          Conhecer FAÍSCA
        </Link>
      </Section>

      {/* HOME-6 · FUNDADORES teaser */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-2xl">
          <Image
            src="/nos.png"
            alt="Gabriela Aguiar e Celso Gama, cofundadores da Pira Labs"
            width={800}
            height={533}
            className="rounded-lg w-full object-cover mb-8"
            priority={false}
          />
          <p className="text-off-white/90 font-body leading-relaxed text-lg mb-4">
            A Pira Labs é boutique por escolha, não por estágio. Cada projeto tem Gabriela e Celso
            do diagnóstico à entrega. Sem camada intermediária entre quem entende o problema e
            quem resolve.
          </p>
          <p className="text-off-white/65 font-body leading-relaxed mb-8">
            Quase uma década conectando organizações globais de tecnologia, inovação e educação
            executiva. Mais de 25 anos de operação em multinacionais. A combinação não é comum. É
            o que sustenta cada decisão.
          </p>
          <Link
            href="/sobre"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded border border-off-white text-off-white bg-transparent font-body font-medium text-base transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            Conhecer Gabriela e Celso
          </Link>
        </div>
      </Section>

      {/* HOME-7 · FAQ PRIMEIRA CONVERSA — schema FAQPage embutido no componente */}
      <Section variant="dark" paddingY="lg">
        <FAQ heading="Perguntas de quem está chegando agora" items={faqItems} />
      </Section>

      {/* HOME-8 · CTA FINAL */}
      <section className="bg-ink section-padding">
        <div className="container-site text-center">
          <p className="font-display text-2xl md:text-4xl italic text-orange mb-10 leading-snug max-w-2xl mx-auto">
            Existe um próximo nível para o seu negócio. O que está entre você e ele, descobrimos
            junto.
          </p>
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/contato?origem=home"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded bg-orange text-ink font-body font-medium text-base transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              Respire
            </Link>
            <p className="text-sm font-body text-off-white/60">
              Conversa inicial sem compromisso. Respondemos em até dois dias úteis.
            </p>
          </div>
          <p className="mt-10 font-display text-lg italic text-off-white/40">
            Inspira. Transpira. Respira.
          </p>
          <p className="mt-1 font-body text-sm text-off-white/30">Liberamos o próximo nível.</p>
        </div>
      </section>
    </>
  );
}
