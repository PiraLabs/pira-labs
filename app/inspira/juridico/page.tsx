import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { FAQ } from "@/components/shared/FAQ";
import { CTAButton } from "@/components/shared/CTAButton";
import { LegalNotice } from "@/components/shared/LegalNotice";
import { ORIGINS } from "@/lib/constants";
import { serviceSchema } from "@/lib/schemas/service";

const schemas = {
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://piralabs.com.br/inspira/juridico#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://piralabs.com.br" },
      { "@type": "ListItem", position: 2, name: "Inspira", item: "https://piralabs.com.br/inspira" },
      { "@type": "ListItem", position: 3, name: "INSPIRA Jurídico", item: "https://piralabs.com.br/inspira/juridico" },
    ],
  },
  service: serviceSchema({
    name: "INSPIRA Jurídico",
    description:
      "Diagnóstico operacional de como o escritório ou departamento jurídico usa IA, onde está a exposição real e o que fazer primeiro. Entrega mapeamento de uso atual, matriz de risco, política mínima de uso de IA e plano de ação priorizado.",
    url: "https://piralabs.com.br/inspira/juridico",
    serviceType: "Diagnóstico de governança de IA para o setor jurídico",
  }),
};

export const metadata: Metadata = {
  title: {
    absolute:
      "INSPIRA Jurídico · Diagnóstico de uso de IA para escritórios · PIRA LABS",
  },
  description:
    "Diagnóstico de 2 a 3 semanas. Mapeamos como o escritório usa IA hoje, onde está a exposição, e entregamos política mínima e plano de ação priorizado.",
  alternates: {
    canonical: "https://piralabs.com.br/inspira/juridico",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "INSPIRA Jurídico · Diagnóstico de risco de IA para escritórios · PIRA LABS",
    description:
      "Mapeamos como o escritório usa IA hoje, onde está a exposição, e entregamos política mínima e plano de ação priorizado.",
    url: "https://piralabs.com.br/inspira/juridico",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PIRA LABS" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Inspira", href: "/inspira" },
  { label: "Jurídico" },
];

const entregas = [
  {
    title: "Mapeamento de uso atual",
    description:
      "Levantamento de como a equipe usa IA hoje: quais ferramentas, em quais planos, com quais tipos de dado, com qual frequência. Feito via entrevistas estruturadas e análise documental.",
  },
  {
    title: "Matriz de risco por tipo de uso",
    description:
      "Classificação dos usos identificados em três zonas: permitido, permitido com controle (anonimização, revisão humana, ferramentas adequadas), e exposto sem política específica.",
  },
  {
    title: "Política mínima de uso de IA",
    description:
      "Documento prático para o escritório: o que o time pode fazer com IA, o que não pode sem protocolo específico, como anonimizar documentos antes de inserir em ferramenta externa, quais ferramentas e planos são adequados para uso com dados de cliente, quem aprova exceções. Calibrada para o perfil do escritório, não genérica.",
  },
  {
    title: "Plano de ação priorizado",
    description:
      "Lista de 5 a 10 ações ordenadas por urgência e esforço. Onde o escritório tem exposição imediata. Onde há oportunidade de ganho rápido com IA bem aplicada. O que pode esperar o próximo ciclo.",
  },
  {
    title: "Sessão de leitura conjunta",
    description:
      "Encontro de 45 a 60 minutos com os decisores para apresentar o diagnóstico, discutir a política mínima e definir o próximo passo.",
  },
];

const faqItems = [
  {
    question: "Isso é consultoria jurídica?",
    answer:
      "Não. É diagnóstico operacional de governança de uso de IA. Não emite parecer jurídico, não define estratégia de caso e não substitui advogado habilitado.",
  },
  {
    question: "Quanto tempo leva?",
    answer:
      "2 a 3 semanas da abertura até a sessão de leitura conjunta.",
  },
  {
    question: "Como é a precificação?",
    answer:
      "R$12.500 a R$26.000 conforme tamanho do escritório e escopo do mapeamento. Sob consulta e disponibilidade.",
  },
  {
    question: "O que acontece depois?",
    answer:
      "Você decide. O INSPIRA Jurídico entrega o diagnóstico e o plano. Para quem quer apoio na execução, o próximo passo natural é o TRANSPIRA Jurídico.",
  },
  {
    question: "Vocês assinam NDA?",
    answer:
      "Sempre. NDA assinado antes de qualquer conversa com a equipe ou acesso a documentos.",
  },
];

export default function InspiraJuridicoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />

      {/* INSPIRA-JUR-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="INSPIRA Jurídico"
          subtitle="Diagnóstico de como o escritório usa IA hoje, onde está exposto e o que fazer primeiro."
        />
      </div>

      {/* INSPIRA-JUR-2 · O problema */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que a maioria dos escritórios ainda não sabe sobre si mesmo
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Saber que o time usa IA é diferente de saber o que o time insere
            nas ferramentas.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            A maioria dos sócios e heads jurídicos já percebeu que IA está na
            rotina do escritório. Mas quando perguntam com detalhe, a resposta
            costuma ser vaga: "a gente usa para pesquisa", "para rascunho de
            emails", "para resumir documentos".
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            O que raramente está mapeado é quais ferramentas, em quais planos,
            com quais dados, com qual critério de revisão, com qual controle de
            acesso e com qual base legal. Sem esse mapeamento, o escritório não
            tem governança. Tem improviso individual.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            O improviso tem custo. Dependendo da ferramenta, do plano
            contratado e das configurações, dado de cliente inserido em
            ferramenta de IA pode ser usado para treinamento, retenção ou
            melhoria do serviço. Peça com informação estratégica colada em
            ferramenta pública pode vazar contexto confidencial. Decisão
            jurídica tomada com base em output de IA sem revisão técnica pode
            ser contestada.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            O INSPIRA Jurídico mapeia isso. Com precisão, sem julgamento e com
            plano de ação concreto ao final.
          </p>
        </div>
      </Section>

      {/* INSPIRA-JUR-3 · O que é */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que é o INSPIRA Jurídico
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Diagnóstico conduzido pela PIRA LABS em 2 a 3 semanas. Mapeamos
            como o escritório ou departamento jurídico usa IA hoje, onde está a
            exposição real, e entregamos política mínima de uso de IA e plano
            de ação priorizado.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            É o método INSPIRA da Pira Labs aplicado com lente jurídica. As
            seis camadas do INSPIRA com lente jurídica: confidencialidade,
            sigilo profissional, LGPD aplicada ao tratamento de dados de
            clientes, responsabilidade técnica do advogado, governança de uso
            de IA e exposição operacional do escritório.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Cada projeto da vertical jurídica alimenta a base própria de
            conhecimento setorial que a Pira Labs está construindo desde 2026.
            Isso significa que cada novo INSPIRA Jurídico chega ao cliente mais
            calibrado do que o anterior, com referências reais do mercado
            jurídico brasileiro acumuladas ao longo do tempo.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Não é auditoria de conformidade. Não é consultoria jurídica. É
            diagnóstico operacional de como o escritório lida com IA hoje, e o
            que precisa mudar para operar com menos exposição e mais
            produtividade.
          </p>
        </div>
      </Section>

      {/* INSPIRA-JUR-4 · O que você recebe */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-2xl">
          <ProcessSteps heading="O que você recebe" steps={entregas} />
        </div>
      </Section>

      {/* INSPIRA-JUR-5 · Para quem faz sentido */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Para quem faz sentido
        </h2>
        <div className="max-w-3xl space-y-3 mb-10">
          <p className="text-off-white/85 font-body leading-relaxed">
            Sócios e heads jurídicos que sabem que a equipe usa IA mas não têm
            clareza de onde estão expostos.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Escritórios em crescimento que estão contratando novos advogados e
            estagiários e querem estabelecer critérios claros antes de escalar
            o problema.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Departamentos jurídicos de empresas com múltiplas áreas usando IA
            de forma descentralizada.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Escritórios que contrataram o FAÍSCA Jurídica e querem ir além da
            educação para o diagnóstico estruturado.
          </p>
        </div>

        <div className="border-l-2 border-off-white/20 pl-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
            Quem não deveria contratar
          </p>
          <p className="text-off-white/60 font-body text-sm leading-relaxed">
            Quem busca laudo de conformidade LGPD ou certificação de
            compliance. O INSPIRA Jurídico entrega governança operacional.
            Adequação legal completa é trabalho de advogado especializado em
            proteção de dados.
          </p>
        </div>
      </Section>

      {/* INSPIRA-JUR-6 · Quem conduz */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Quem conduz
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Gabriela Aguiar conduz a leitura institucional. Celso Gama,
            bacharelando em Direito (Mackenzie) com Applied AI Certificate
            Program (MIT, em andamento, 2026), conduz a leitura de governança
            e exposição operacional.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Os dois juntos, como em todo diagnóstico da PIRA LABS. Sem equipe
            júnior entre o dado e a interpretação.
          </p>
        </div>
      </Section>

      {/* INSPIRA-JUR-7 · FAQ */}
      <Section variant="highlighted" paddingY="lg">
        <FAQ heading="Perguntas frequentes" items={faqItems} />
      </Section>

      {/* INSPIRA-JUR-8 · CTAs */}
      <section className="bg-ink section-padding">
        <div className="container-site text-center">
          <p className="font-display text-2xl md:text-3xl italic text-off-white/70 mb-8 leading-snug max-w-2xl mx-auto">
            Saber onde está a exposição já é metade do trabalho. A outra metade
            é decidir o que fazer com isso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="primary"
              href="/contato"
              origin={ORIGINS.INSPIRA_JURIDICO}
            >
              Respire
            </CTAButton>
            <CTAButton variant="secondary" href="/transpira/juridico">
              Conheça o TRANSPIRA Jurídico
            </CTAButton>
          </div>
          <p className="mt-4 text-sm text-off-white/60 font-body">
            Conversa inicial sem compromisso. Respondemos em até 2 dias úteis.
          </p>
          <div className="max-w-2xl mx-auto mt-8">
            <LegalNotice variant="inspira_juridico" />
          </div>
        </div>
      </section>
    </>
  );
}
