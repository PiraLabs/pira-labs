export const dynamic = 'force-static';

import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { TargetProfile } from "@/components/shared/TargetProfile";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";
import { serviceSchema, faqPageSchema } from "@/lib/schemas/service";

const schemas = {
  breadcrumb: breadcrumbSchema([
    { name: "Home", url: "https://piralabs.com.br/" },
    { name: "INSPIRA", url: "https://piralabs.com.br/inspira" },
  ]),
  service: serviceSchema({
    name: "INSPIRA · Diagnóstico de Creative Business Turnaround",
    description:
      "Diagnóstico da Pira Labs para empresas de serviços. Seis camadas em sequência, convergindo em síntese integrada. Output: módulo Propulsão com rota executável.",
    url: "https://piralabs.com.br/inspira",
    serviceType: "Diagnóstico empresarial",
  }),
};

export const metadata: Metadata = {
  title: {
    absolute: "INSPIRA · Diagnóstico de Creative Business Turnaround · Pira Labs",
  },
  description:
    "O INSPIRA é o diagnóstico da Pira Labs. Seis dimensões do negócio em sequência, convergindo em síntese integrada. Gabriela Aguiar conduz.",
  alternates: {
    canonical: "https://piralabs.com.br/inspira",
  },
  openGraph: {
    title: "INSPIRA · Diagnóstico de Creative Business Turnaround · Pira Labs",
    description:
      "Seis dimensões do negócio em sequência, convergindo em síntese integrada. Gabriela Aguiar conduz.",
    url: "https://piralabs.com.br/inspira",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "INSPIRA" },
];

const camadas = [
  {
    title: "Sopro",
    description: "De onde a empresa parte e o que declara querer.",
  },
  {
    title: "Fôlego",
    description: "Como aparece para o mercado e para os motores de inteligência artificial.",
  },
  {
    title: "Pulso",
    description: "Como as pessoas e os papéis reais funcionam na prática.",
  },
  {
    title: "Acústica",
    description: "Como a governança e os processos realmente operam.",
  },
  {
    title: "Pressão",
    description: "Onde a tensão econômica está concentrada.",
  },
  {
    title: "Suspiro",
    description: "O que as seis camadas revelam quando lidas juntas.",
  },
  {
    number: "→",
    title: "Propulsão",
    description:
      "A rota para frente. O que muda, quem muda, em que ordem e como se sabe que está feito. Uma ação. Um responsável. Um prazo.",
  },
];

const comoComeça = [
  {
    title: "Conversa de calibragem",
    description:
      "Conversa inicial entre o decisor e a Gabriela. Não é venda. É verificar se há condições reais para o diagnóstico funcionar.",
  },
  {
    title: "Proposta com escopo definido",
    description:
      "Após a conversa, proposta com escopo, prazo e investimento. Cada proposta é desenhada para o negócio que vai diagnosticar.",
  },
  {
    title: "Início do diagnóstico",
    description:
      "Com a proposta aceita, o INSPIRA começa. Seis camadas avançam com aprovação humana em cada etapa.",
  },
];

const faqItems = [
  {
    question: "Qual a diferença entre o INSPIRA e uma consultoria estratégica?",
    answer:
      "Consultoria estratégica entrega relatório e sai. O INSPIRA é diagnóstico com output executável: problema real nomeado, rota desenhada, próximo passo em até sete dias. É o ponto de entrada para um turnaround real, não para um slide.",
  },
  {
    question: "Quanto tempo leva?",
    answer:
      "4 a 6 semanas. A proposta inicial define o prazo específico conforme complexidade.",
  },
  {
    question: "O INSPIRA inclui execução?",
    answer:
      "Não. Execução é o TRANSPIRA, conduzido pelo Celso. O INSPIRA entrega o problema nomeado e a rota. Muitos clientes seguem para o TRANSPIRA, mas é decisão pós-diagnóstico.",
  },
  {
    question: "Vocês usam IA no INSPIRA?",
    answer:
      "Sim, em pontos específicos, sempre com supervisão humana. A IA amplifica capacidade onde faz sentido. O julgamento final é humano em cada etapa.",
  },
  {
    question: "Posso começar com algo menor antes do INSPIRA completo?",
    answer:
      "Pode. O Oxigênio IA Search é o subproduto de entrada, com escopo fechado e prazo curto. O Pocket do INSPIRA é uma leitura inicial de 1,5h com metodologia. Os dois funcionam como porta de entrada antes de qualquer compromisso maior.",
  },
  {
    question: "Como funciona a confidencialidade?",
    answer:
      "Sempre via NDA assinado antes de qualquer coleta de informação.",
  },
];

const faqSchema = faqPageSchema(faqItems);

export default function InspiraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* INSPIRA-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="INSPIRA · Diagnóstico de Creative Business Turnaround"
          subtitle="Quando você para de resolver o problema errado."
        />
      </div>

      {/* INSPIRA-2 · O que é o INSPIRA */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que é o INSPIRA
        </h2>
        <div className="max-w-3xl space-y-4 mb-8">
          <p className="text-off-white/85 font-body leading-relaxed">
            O INSPIRA é o diagnóstico da Pira Labs. Lê seis dimensões do negócio
            em sequência: Sopro, de onde a empresa parte e o que declara querer;
            Fôlego, como aparece para o mercado e para os motores de inteligência
            artificial; Pulso, como as pessoas e os papéis reais funcionam na
            prática; Acústica, como a governança e os processos realmente operam;
            Pressão, onde a tensão econômica está concentrada; e Suspiro, o que
            as seis camadas revelam quando lidas juntas. A força do INSPIRA está
            na convergência entre elas, não na leitura isolada de cada uma.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            O diagnóstico fecha com{" "}
            <strong className="text-off-white">Propulsão:</strong> a rota para
            frente. O que muda, quem muda, em que ordem e como se sabe que está
            feito. O cliente sai da entrega sabendo o que fazer primeiro, não
            apenas o que está errado.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            O diagnóstico não inventa o problema. Revela o que a fundadora ou o
            fundador já sentia mas ainda não havia encontrado palavras para
            nomear. Gabriela Aguiar conduz.
          </p>
        </div>
        <blockquote className="border-l-2 border-orange/40 pl-6 max-w-2xl">
          <p className="font-display text-xl italic text-off-white/80 leading-relaxed">
            &ldquo;O INSPIRA sempre termina com ação. Não com relatório para
            arquivar.&rdquo;
          </p>
        </blockquote>
      </Section>

      {/* INSPIRA-3 · As seis camadas e a Propulsão */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
          As seis camadas e a Propulsão
        </h2>
        <p className="text-off-white/70 font-body mb-10 max-w-2xl">
          Descritores canônicos por camada. Sem detalhar arquitetura interna.
        </p>
        <div className="max-w-2xl">
          <ProcessSteps steps={camadas} />
        </div>
      </Section>

      {/* INSPIRA-4 · O output: rota executável */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O output: rota executável
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            O INSPIRA não entrega relatório para arquivar. O output final é o
            módulo{" "}
            <strong className="text-off-white">PROPULSÃO:</strong> o que muda
            para o cliente, os movimentos necessários em sequência, o que
            precisam para rodar, como a Pira Labs pode ajudar e o próximo passo
            em até sete dias. Uma ação. Um responsável. Um prazo.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            O diagnóstico é de propriedade do cliente. Pode ser usado
            internamente sem qualquer continuidade com a Pira Labs. O TRANSPIRA
            é natural e complementar, nunca obrigatório.
          </p>
        </div>
      </Section>

      {/* INSPIRA-5 · Para quem é */}
      <Section variant="highlighted" paddingY="lg">
        <TargetProfile
          heading="Para quem é"
          items={[
            "Crescimento sem estrutura: a empresa cresceu mais rápido do que o desenho do trabalho. Time aumentou, faturamento subiu, mas a operação ficou dependente de pessoas-chave e de improviso constante.",
            "Margem que some: a receita continua, mas o resultado não acompanha. Custos invisíveis, escopo não cobrado, precificação desalinhada com custo real.",
            "Tecnologia que não converteu: a empresa investiu em IA e o resultado foi acelerar o ruído que já existia. Sem método antes, a tecnologia escala o problema.",
          ]}
          notForItems={[
            "Decisor sem autonomia real para mudar.",
            "Empresa em crise aguda.",
            "Quem busca validação de decisão já tomada.",
          ]}
        />
      </Section>

      {/* INSPIRA-5b · Subproduto de entrada: Oxigênio */}
      <Section variant="default" paddingY="lg">
        <div className="bg-teal/20 border border-teal/40 rounded-lg p-8 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-3">
            Comece com escopo fechado
          </p>
          <h2 className="text-xl font-semibold text-off-white mb-3">
            Oxigênio IA Search
          </h2>
          <p className="text-off-white/80 font-body leading-relaxed mb-4">
            Quer começar com escopo fechado antes de qualquer compromisso maior?
            O Oxigênio IA Search diagnostica como sua empresa aparece nos motores
            de IA.{" "}
            <strong className="text-off-white">Fast R$3.500 · Full R$5.300.</strong>{" "}
            Entrega em até 5 dias úteis.
          </p>
          <CTAButton variant="secondary" href="/inspira/oxigenio">
            Conhecer Oxigênio
          </CTAButton>
        </div>

        {/* INSPIRA-5c · Investimento INSPIRA completo */}
        <div className="mt-6 max-w-2xl">
          <p className="text-off-white/60 font-body text-sm leading-relaxed">
            O INSPIRA completo é dimensionado individualmente após a primeira
            conversa. Cada projeto considera complexidade da operação, profundidade
            necessária e duração.
          </p>
        </div>
      </Section>

      {/* INSPIRA-6 · Como começa */}
      <Section variant="highlighted" paddingY="lg">
        <div className="max-w-2xl">
          <ProcessSteps heading="Como começa" steps={comoComeça} />
        </div>
      </Section>

      {/* INSPIRA-7 · FAQ */}
      <Section variant="default" paddingY="lg">
        <FAQ heading="Perguntas frequentes" items={faqItems} />
      </Section>

      {/* INSPIRA-8 · CTA final */}
      <FinalCTA
        heading="O INSPIRA começa quando a conversa começa."
        ctaLabel="RESPIRE"
        origin={ORIGINS.INSPIRA}
      />
    </>
  );
}
