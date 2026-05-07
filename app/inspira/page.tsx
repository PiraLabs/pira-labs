import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS, VAGAS_OXIGENIO } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";
import { serviceSchema } from "@/lib/schemas/service";

const schemas = {
  breadcrumb: breadcrumbSchema([
    { name: "Home", url: "https://piralabs.com.br/" },
    { name: "INSPIRA", url: "https://piralabs.com.br/inspira" },
  ]),
  service: serviceSchema({
    name: "INSPIRA · Diagnóstico de Creative Business Turnaround",
    description:
      "Diagnóstico da PIRA LABS para empresas de serviços de alto valor. Cinco leituras coordenadas do negócio com aprovação humana em cada gate, entregando o problema real nomeado, a rota desenhada e o próximo passo definido.",
    url: "https://piralabs.com.br/inspira",
    serviceType: "Diagnóstico empresarial",
  }),
};

export const metadata: Metadata = {
  title: {
    absolute:
      "INSPIRA · Diagnóstico de Creative Business Turnaround · PIRA LABS",
  },
  description:
    "O INSPIRA é o diagnóstico da PIRA LABS para empresas de serviços. Cinco leituras paralelas do negócio antes de nomear qualquer problema.",
  alternates: {
    canonical: "https://piralabs.com.br/inspira",
  },
  openGraph: {
    title: "INSPIRA · Diagnóstico de Creative Business Turnaround · PIRA LABS",
    description:
      "Cinco leituras paralelas do negócio antes de nomear qualquer problema. Diagnóstico com aprovação humana em cada etapa.",
    url: "https://piralabs.com.br/inspira",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Inspira" },
];

const cincoLeituras = [
  {
    title: "Mercado e presença",
    description:
      "O que o ambiente externo revela sobre a empresa que ela talvez ainda não esteja vendo. Concorrência, categoria, posicionamento, como a empresa aparece para quem olha de fora, e como é compreendida por motores de busca e por inteligência artificial.",
  },
  {
    title: "Pessoas e operação",
    description:
      "Se o funcionamento humano e os papéis reais sustentam o que a empresa quer crescer. Ritmo de decisão, complementaridade, cultura praticada versus cultura declarada.",
  },
  {
    title: "Governança e processos",
    description:
      "Se a empresa tem cobertura suficiente para reduzir ruído, exceção e exposição. Processos críticos, pontos de decisão, risco operacional e regulatório.",
  },
  {
    title: "Tensão econômica",
    description:
      "Onde o negócio sente o peso primeiro e qual é o ponto de ruptura. Margem, caixa, cobrança, capacidade e o que está comprimindo o resultado.",
  },
  {
    title: "Síntese integrada",
    description:
      "As quatro leituras convergem em diagnóstico único, com aprovação humana em cada etapa antes de avançar. O problema real nomeado. A rota desenhada. O próximo passo definido.",
  },
];

const perfis = [
  {
    titulo: "Crescimento sem estrutura",
    texto:
      "A empresa cresceu mais rápido do que o desenho do trabalho. Time aumentou, faturamento subiu, mas a operação ficou dependente de pessoas-chave e de improviso constante.",
  },
  {
    titulo: "Margem que some",
    texto:
      "A receita continua, mas o resultado não acompanha. Custos invisíveis, escopo não cobrado, horas além do contratado e precificação desalinhada com custo real.",
  },
  {
    titulo: "Tecnologia que não converteu",
    texto:
      "A empresa investiu em tecnologia, incluindo IA, e o resultado foi acelerar o ruído que já existia. Sem método antes, a tecnologia escala bagunça em vez de resolver.",
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
      "Após a conversa, a PIRA LABS envia proposta com escopo, prazo e investimento. Sem boilerplate. Cada proposta é desenhada para o negócio que vai diagnosticar.",
  },
  {
    title: "Início do diagnóstico",
    description:
      "Com a proposta aceita, o INSPIRA começa. Cinco leituras avançam com gates de aprovação humana antes de cada avanço.",
  },
];

const faqItems = [
  {
    question:
      "Qual a diferença entre o INSPIRA e uma consultoria estratégica clássica?",
    answer:
      "Consultoria estratégica entrega relatório e some. O INSPIRA é o ponto de entrada para um turnaround real, com método validado e com aprovação humana em cada gate. O diagnóstico é desenhado para virar execução, não para virar slide. É a primeira metade do que chamamos Turnaround de Propulsão: nomear o problema real para então atacar o desbloqueio do potencial represado da empresa.",
  },
  {
    question: "Quanto tempo leva um INSPIRA completo?",
    answer:
      "Depende da complexidade da empresa. A maioria dos casos fica entre 4 e 8 semanas. A proposta inicial define o prazo específico do projeto.",
  },
  {
    question: "O INSPIRA inclui execução?",
    answer:
      "Não. Execução mão na massa é o TRANSPIRA, conduzido pelo Celso. O INSPIRA entrega o problema nomeado, a rota desenhada e o próximo passo definido. Muitos clientes seguem direto para o TRANSPIRA com a PIRA LABS, mas isso é decisão pós-diagnóstico.",
  },
  {
    question: "Vocês usam IA no INSPIRA?",
    answer:
      "Sim, em pontos específicos do diagnóstico, sempre com supervisão humana. A IA não substitui a leitura. Ela amplifica capacidade onde faz sentido, e fica fora onde não faz.",
  },
  {
    question:
      "Posso começar com algo menor antes de contratar o INSPIRA completo?",
    answer:
      "Pode. O Oxigênio IA Search é um subproduto do INSPIRA, com escopo fechado e prazo curto, que diagnostica como sua empresa aparece nos motores de IA. Funciona como porta de entrada para empresas que querem testar o método antes de avançar.",
  },
  {
    question: "Como vocês lidam com confidencialidade?",
    answer:
      "Sempre via NDA. Acordo de confidencialidade assinado antes de qualquer coleta de informação. NDA é base canônica de todo trabalho da PIRA LABS, independente do produto. Acesso restrito a Gabriela, Celso e quem mais for explicitamente autorizado pelo cliente.",
  },
  {
    question: "Como é a precificação? *",
    answer:
      "Sob consulta e disponibilidade. Por sermos uma boutique, trabalhamos com agenda limitada de projetos simultâneos para preservar o envolvimento direto dos sócios em cada caso. Investimento varia conforme tamanho da empresa, complexidade do diagnóstico e setor. Respondemos em até dois dias úteis com proposta.",
  },
];

export default function InspiraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />

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
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            O INSPIRA é o diagnóstico da PIRA LABS. É onde a empresa pausa,
            respira fundo e olha para o próprio negócio com lente que de dentro
            não dá.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Não é auditoria. Não é workshop de inovação. Não é mapeamento de
            processos para empacotar em consultoria.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            É leitura do negócio em cinco áreas, com aprovação humana em cada
            gate antes de avançar. O resultado é um relatório único, com o
            problema real nomeado, a rota desenhada e o próximo passo definido.
          </p>
          <p className="text-off-white/60 font-body text-sm">
            Conduz: Gabriela Aguiar.
          </p>
        </div>
      </Section>

      {/* INSPIRA-3 · As cinco leituras */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
          As cinco leituras
        </h2>
        <p className="text-off-white/70 font-body mb-10 max-w-2xl">
          O diagnóstico não lê uma área do negócio. Lê cinco, antes de nomear
          qualquer problema.
        </p>
        <div className="max-w-2xl">
          <ProcessSteps steps={cincoLeituras} />
        </div>
        <p className="mt-10 text-off-white/55 font-body text-sm italic max-w-2xl">
          Nenhuma recomendação é feita antes das cinco leituras estarem
          integradas. Esse é o protocolo que impede diagnóstico apressado.
        </p>
      </Section>

      {/* INSPIRA-4 · Para quem é */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
          Para quem é
        </h2>
        <p className="text-off-white/70 font-body mb-10 max-w-2xl">
          Empresas de serviços de alto valor agregado com potencial represado.
          Sócios, CEOs e presidentes com autonomia real e abertura genuína para
          mudar.
        </p>

        {/* 3 perfis típicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {perfis.map((p) => (
            <div
              key={p.titulo}
              className="bg-teal/20 border border-teal/40 rounded-lg p-6"
            >
              <p className="text-orange font-body font-semibold text-sm mb-2">
                {p.titulo}
              </p>
              <p className="text-off-white/80 font-body text-sm leading-relaxed">
                {p.texto}
              </p>
            </div>
          ))}
        </div>

        {/* Quem não deveria contratar */}
        <div className="border-l-2 border-off-white/20 pl-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
            Quem não deveria contratar
          </p>
          <p className="text-off-white/60 font-body text-sm leading-relaxed">
            Decisor sem autonomia real para mudar. Empresa em crise aguda, onde
            o tempo de resposta exige outro tipo de intervenção. Cliente que
            procura validação para decisão já tomada.
          </p>
        </div>
      </Section>

      {/* INSPIRA-5 · Oxigênio IA Search */}
      <Section variant="highlighted" paddingY="lg">
        <div className="bg-ink/40 border border-orange/20 rounded-lg p-8 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-4">
            Comece com escopo fechado
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-off-white mb-4">
            Oxigênio IA Search
          </h2>
          <p className="text-off-white/80 font-body leading-relaxed mb-4">
            Se você quer entender como sua empresa aparece nos motores de IA
            antes de tomar qualquer outra decisão, o Oxigênio IA Search é o
            ponto de entrada. Subproduto do INSPIRA, com escopo fechado, prazo
            curto e preço público.
          </p>
          <p className="font-body text-base text-off-white/40 line-through mb-1">
            R$9.800
          </p>
          <p className="font-display text-3xl text-peach mb-2">R$6.200</p>
          <p className="text-off-white/60 font-body text-sm mb-6">
            Primeiras {VAGAS_OXIGENIO} vagas. Preço regular R$9.800 a partir da
            6ª rodada.
          </p>
          <CTAButton variant="primary" href="/inspira/oxigenio">
            Conhecer Oxigênio IA Search
          </CTAButton>
        </div>
      </Section>

      {/* INSPIRA-6 · Como começa */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-2xl">
          <ProcessSteps
            heading="Como começa um INSPIRA"
            steps={comoComeça}
          />
          <p className="mt-8 text-off-white/60 font-body text-sm">
            Respondemos em até dois dias úteis.
          </p>
          <div className="mt-6">
            <CTAButton
              variant="secondary"
              href="/contato"
              origin={ORIGINS.INSPIRA}
            >
              Falar com a PIRA LABS
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* INSPIRA-7 · FAQ — FAQPage schema injetado pelo componente */}
      <Section variant="highlighted" paddingY="lg">
        <FAQ
          heading="Perguntas frequentes"
          items={faqItems}
        />
        <p className="mt-6 text-xs text-off-white/40 font-body">
          * Mediante consulta e disponibilidade.
        </p>
      </Section>

      {/* INSPIRA-8 · CTA final */}
      <FinalCTA
        heading="O INSPIRA começa quando a conversa começa."
        origin={ORIGINS.INSPIRA}
        showAsterisk
      />
    </>
  );
}
