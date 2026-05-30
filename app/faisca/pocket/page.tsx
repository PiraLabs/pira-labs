export const dynamic = 'force-static';

import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { TargetProfile } from "@/components/shared/TargetProfile";
import { CTAWithMicrocopy } from "@/components/shared/CTAWithMicrocopy";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/faisca/pocket#service",
  name: "Pocket do INSPIRA",
  description:
    "Leitura diagnóstica inicial em três dimensões: mercado, financeiro e presença em motores de inteligência artificial. Sessão de 1,5h. Gabriela Aguiar conduz, Celso Gama opera os agentes de IA em tempo real.",
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
    question: "O que é o Pocket do INSPIRA?",
    answer:
      "É uma leitura diagnóstica inicial em três dimensões: mercado, financeiro e presença em motores de inteligência artificial. Rodado em uma sessão de 1,5h com Gabriela Aguiar conduzindo e Celso Gama operando os agentes de IA em tempo real. Você sai com uma síntese inicial integrada dessas três dimensões e próximos passos prioritários.",
  },
  {
    question: "Qual a diferença entre o Pocket e o INSPIRA completo?",
    answer:
      "O INSPIRA completo roda seis camadas em 4 a 6 semanas com síntese integrada e aprovação humana em cada etapa. O Pocket roda três dimensões em 1,5h. O Pocket responde \"por onde começo?\". O INSPIRA responde \"o que está acontecendo de verdade?\". Um não substitui o outro.",
  },
  {
    question: "Qual a diferença entre o Pocket e o Oxigênio IA Search?",
    answer:
      "O Oxigênio IA Search é um diagnóstico dedicado exclusivamente à presença em motores de inteligência artificial, com análise de queries, plataformas e concorrentes. O Pocket inclui uma leitura de presença em IA como um dos três formulários, junto com mercado e financeiro. Se o único ponto de atenção é presença em IA, o Oxigênio IA Search é o produto certo.",
  },
  {
    question: "O que recebo ao final da sessão?",
    answer:
      "Síntese inicial com leitura integrada das três dimensões e próximos passos prioritários ordenados por urgência e esforço. A leitura é entregue na própria sessão, com tempo para perguntas e alinhamento.",
  },
  {
    question: "Preciso preparar algo antes?",
    answer:
      "Não há material obrigatório. Os formulários são rodados durante a sessão. Uma boa preparação é chegar com uma questão específica em mente: o que mais incomoda hoje, o que você quer entender melhor.",
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

const formularios = [
  {
    title: "Formulário 1 · Mercado",
    description:
      "Leitura de como a empresa se posiciona, quem atende, como define e entrega valor, e o que diferencia na percepção do cliente. Não é pesquisa de mercado. É leitura da relação entre a empresa e o território onde opera.",
  },
  {
    title: "Formulário 2 · Financeiro",
    description:
      "Leitura de onde a pressão econômica está concentrada. Onde a margem vaza, onde o custo é opaco, onde o crescimento não se traduz em resultado. Sem acesso a balanços. Com as perguntas certas.",
  },
  {
    title: "Formulário 3 · Presença em IA",
    description:
      "Leitura de como a empresa aparece para os motores de inteligência artificial. Versão compacta da leitura de presença em IA Search: o que o ICP encontra quando pesquisa o setor.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Pocket do INSPIRA · Leitura diagnóstica inicial · PIRA LABS",
  },
  description:
    "Leitura diagnóstica compacta em 1,5h. Gabriela Aguiar conduz. Celso Gama opera os agentes. R$3.900. Mercado, financeiro e presença em IA em síntese integrada.",
  alternates: {
    canonical: "https://piralabs.com.br/faisca/pocket",
  },
  openGraph: {
    title: "Pocket do INSPIRA · Pira Labs",
    description:
      "Leitura diagnóstica inicial em três dimensões: mercado, financeiro e presença em IA. Sessão de 1,5h. R$3.900.",
    url: "https://piralabs.com.br/faisca/pocket",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Faísca", href: "/faisca" },
  { label: "Pocket do INSPIRA" },
];

export default function PocketPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      {/* POCKET-1 · Header da página */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Pocket do INSPIRA"
          subtitle="Uma leitura inicial com metodologia. Três dimensões do negócio em 1,5h."
        />
      </div>

      {/* POCKET-2 · Hero da oferta */}
      <Section variant="default" paddingY="lg">
        <p className="text-off-white/85 font-body leading-relaxed max-w-3xl mb-8">
          O INSPIRA completo roda seis camadas em 4 a 6 semanas. O Pocket roda
          três formulários em uma sessão de 1,5h: mercado, financeiro e presença
          em motores de inteligência artificial. Ao final, você tem uma leitura
          inicial integrada dessas três dimensões e os próximos passos
          prioritários.
        </p>

        {/* Bloco da oferta */}
        <div className="bg-teal/20 border border-teal/40 rounded-lg p-8 max-w-lg mb-8">
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-off-white/10 pb-3">
              <span className="text-off-white/60 font-body text-sm">Investimento</span>
              <span className="text-2xl font-body font-semibold text-orange">R$3.900</span>
            </div>
            <div className="flex justify-between items-center border-b border-off-white/10 pb-3">
              <span className="text-off-white/60 font-body text-sm">Formato</span>
              <span className="text-off-white font-body font-semibold text-sm">1,5h online</span>
            </div>
            <div className="flex justify-between items-center border-b border-off-white/10 pb-3">
              <span className="text-off-white/60 font-body text-sm">Conduz a sessão</span>
              <span className="text-off-white font-body font-semibold text-sm">Gabriela Aguiar</span>
            </div>
            <div className="flex justify-between items-center border-b border-off-white/10 pb-3">
              <span className="text-off-white/60 font-body text-sm">Opera os agentes</span>
              <span className="text-off-white font-body font-semibold text-sm">Celso Gama</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-off-white/60 font-body text-sm">Entrega</span>
              <span className="text-off-white font-body font-semibold text-sm">Síntese integrada na sessão</span>
            </div>
          </div>
        </div>

        <CTAWithMicrocopy
          label="Respire"
          href="#falar"
          microcopy="Sessão de 1,5h online. Respondemos em até 2 dias úteis."
        />
      </Section>

      {/* POCKET-3 · O que acontece na sessão */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          O que acontece na sessão
        </h2>
        <div className="max-w-2xl mb-10">
          <ProcessSteps steps={formularios} />
        </div>

        {/* O que você recebe ao final */}
        <div className="border-l-2 border-orange/40 pl-6 max-w-2xl mb-6">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
            O que você recebe ao final
          </p>
          <p className="text-off-white/85 font-body text-sm leading-relaxed">
            Síntese inicial com leitura integrada das três dimensões. Os pontos
            de convergência entre mercado, financeiro e presença em IA. Os
            próximos passos prioritários ordenados por urgência e esforço.
          </p>
        </div>

        {/* Postura do produto */}
        <div className="border-l-2 border-off-white/20 pl-6 max-w-2xl mb-6">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
            Postura do produto
          </p>
          <p className="text-off-white/65 font-body text-sm leading-relaxed">
            O Pocket do INSPIRA é leitura inicial com metodologia. Não substitui
            o INSPIRA completo, que roda as seis camadas em 4 a 6 semanas com
            aprovação humana em cada etapa. O Pocket responde: &quot;por onde
            começo?&quot; O INSPIRA responde: &quot;o que está acontecendo de verdade?&quot;
          </p>
        </div>

        {/* Confidencialidade */}
        <div className="border-l-2 border-off-white/20 pl-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
            Dados e confidencialidade
          </p>
          <p className="text-off-white/65 font-body text-sm leading-relaxed">
            Os formulários trabalham sobre informações que o decisor compartilha
            na sessão. Dados sensíveis, informações de clientes e documentos
            confidenciais só entram com critério e alinhamento prévio. A sessão
            ensina a ler o negócio, não a expor o que não precisa ser exposto.
          </p>
        </div>
      </Section>

      {/* POCKET-4 · Para quem é */}
      <Section variant="default" paddingY="lg">
        <TargetProfile
          heading="Para quem é"
          items={[
            "Fundador que quer uma primeira leitura antes de comprometer semanas com o INSPIRA completo. O Pocket entrega leitura estruturada com metodologia em uma tarde.",
            "Decisor com uma questão específica que precisa de diagnóstico rápido com critério: \"minha empresa aparece bem nos motores de IA?\", \"onde está vazando margem?\", \"como o mercado me lê?\"",
            "Empresa em movimento (rebrand, nova frente, mudança de ICP) que quer uma calibragem rápida antes de agir. Não para substituir o diagnóstico completo, mas para informar a decisão imediata.",
          ]}
          notForItems={[
            "Quem precisa de redesenho estrutural de trabalho, modelo de delegação ou governança de IA: o Pocket dará leitura útil, mas o próximo passo imediato será o INSPIRA completo ou o TRANSPIRA.",
          ]}
        />
      </Section>

      {/* POCKET-5 · Quem conduz */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Quem conduz
        </h2>
        <div className="max-w-2xl space-y-6">
          <div>
            <p className="text-off-white font-body font-semibold mb-1">Gabriela Aguiar</p>
            <p className="text-off-white/85 font-body leading-relaxed">
              Conduz a sessão e faz a leitura integrada. Universal AI
              Foundational Modules (MIT, em andamento, 2026). Docente em
              programas de MBA na FIAP e no Instituto Cidades Responsivas.
              Mentora FGV Ventures.
            </p>
          </div>
          <div>
            <p className="text-off-white font-body font-semibold mb-1">Celso Gama</p>
            <p className="text-off-white/85 font-body leading-relaxed">
              Opera os agentes de IA em tempo real durante a sessão. Applied AI
              Certificate Program (MIT, em andamento, 2026). Bacharelando em
              Direito (Mackenzie).
            </p>
          </div>
          <CTAButton variant="tertiary" href="/sobre">
            Conhecer Gabriela e Celso
          </CTAButton>
        </div>
      </Section>

      {/* POCKET-6 · FAQ */}
      <Section variant="default" paddingY="lg">
        <FAQ heading="Perguntas frequentes" items={faqItems} />
      </Section>

      {/* POCKET-7 · CTA final — âncora obrigatória */}
      <div id="falar">
        <FinalCTA
          heading="A sessão começa depois de uma conversa inicial para garantir que o Pocket é o produto certo para o momento."
          ctaLabel="Respire"
          origin={ORIGINS.FAISCA_POCKET}
        />
      </div>
    </>
  );
}
