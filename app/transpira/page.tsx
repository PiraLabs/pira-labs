import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { TargetProfile } from "@/components/shared/TargetProfile";
import { TranspiraConfigurations } from "@/components/shared/TranspiraConfigurations";
import { UnifiedContract } from "@/components/shared/UnifiedContract";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";
import { serviceSchema } from "@/lib/schemas/service";

const schemas = {
  breadcrumb: breadcrumbSchema([
    { name: "Home", url: "https://piralabs.com.br/" },
    { name: "TRANSPIRA", url: "https://piralabs.com.br/transpira" },
  ]),
  service: serviceSchema({
    name: "TRANSPIRA · Execução de Creative Business Turnaround",
    description:
      "Execução de Creative Business Turnaround da Pira Labs junto à operação do cliente. Redesenho de trabalho, valor, tecnologia e governança em empresas de serviços.",
    url: "https://piralabs.com.br/transpira",
    serviceType: "Execução operacional",
  }),
};

export const metadata: Metadata = {
  title: {
    absolute: "TRANSPIRA · Execução de Creative Business Turnaround · PIRA LABS",
  },
  description:
    "O TRANSPIRA é a execução da Pira Labs dentro da operação do cliente. Duas configurações: COO Temporário e Arquiteto de Delegação.",
  alternates: {
    canonical: "https://piralabs.com.br/transpira",
  },
  openGraph: {
    title: "TRANSPIRA · Execução de Creative Business Turnaround · PIRA LABS",
    description:
      "Redesenho de trabalho, valor, tecnologia e governança. Duas configurações: COO Temporário e Arquiteto de Delegação.",
    url: "https://piralabs.com.br/transpira",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Transpira" },
];

const frentesEntrega = [
  {
    title: "Redesenho de trabalho",
    description:
      "Mapeamento de fluxos críticos, identificação de gargalos reais e redesenho da relação entre o que é feito, por quem e com qual objetivo. Sai a operação dependente de heróis. Entra processo que funciona com clareza.",
  },
  {
    title: "Tecnologia curada",
    description:
      "Não vendemos tecnologia. Curamos onde IA e automação amplificam capacidade real. Quando indicamos parceiro de tecnologia, declaramos qualquer revenue share envolvido.",
  },
  {
    title: "Governança aplicada",
    description:
      "Processos críticos, pontos de decisão e protocolos de aprovação que sustentam o negócio depois que saímos. Governança como capacidade competitiva, não como controle posterior.",
  },
  {
    title: "Valor percebido",
    description:
      "A capacidade de tornar o valor entregado visível e verificável para o cliente é diferenciação real. Trabalhamos isso na operação.",
  },
];

const faqItems = [
  {
    question: "Qual a diferença entre o TRANSPIRA e contratar uma agência ou consultoria?",
    answer:
      "Agência opera por entrega contratada. Consultoria entrega plano e sai. O TRANSPIRA redesenha o trabalho com a equipe do cliente, deixa a operação rodando sem depender da Pira Labs, e tem encerramento explícito por resultado verificado.",
  },
  {
    question: "Vocês trazem tecnologia própria?",
    answer:
      "Não. Toda solução tecnológica vem do mercado, curada e introduzida com aplicabilidade desenhada junto com o cliente. Quando indicamos parceiros, declaramos qualquer revenue share.",
  },
  {
    question: "Qual a diferença entre as duas configurações?",
    answer:
      "A Configuração A (COO Temporário) é para quando falta alguém operando junto. A Configuração B (Arquiteto de Delegação) é para quando existe o recurso interno mas falta estrutura para ele operar com autonomia. O diagnóstico define qual configuração é adequada.",
  },
  {
    question: "O TRANSPIRA inclui o setor jurídico?",
    answer:
      "Existe o TRANSPIRA Jurídico, com método específico para escritórios e departamentos jurídicos. Ver /transpira/juridico.",
  },
  {
    question: "Vocês assinam NDA?",
    answer:
      "Sempre. NDA assinado antes de qualquer coleta de informação ou conversa com a equipe do cliente.",
  },
];

export default function TranspiraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />

      {/* TRANSPIRA-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="TRANSPIRA · Execução de Creative Business Turnaround"
          subtitle={
            <>
              Quando o <em>trabalho certo</em> substitui o{" "}
              <em>trabalho muito</em>.
            </>
          }
        />
      </div>

      {/* TRANSPIRA-2 · O que é o TRANSPIRA */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que é o TRANSPIRA
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            O TRANSPIRA é a execução. Acontece dentro da operação do cliente,
            com o time que vai operar depois. Redesenha a relação entre trabalho,
            valor, tecnologia e governança. Tecnologia entra onde amplifica,
            depois de entender o problema, nunca antes.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            A Pira Labs não sai quando o prazo acaba. Sai quando os resultados
            acordados são verificados. Celso Gama conduz.
          </p>
        </div>
      </Section>

      {/* TRANSPIRA-3 · O que entregamos */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          O que entregamos
        </h2>
        <div className="max-w-2xl">
          <ProcessSteps steps={frentesEntrega} />
        </div>
      </Section>

      {/* TRANSPIRA-4 · Duas configurações */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          Duas configurações
        </h2>
        <TranspiraConfigurations />
      </Section>

      {/* TRANSPIRA-5 · Contrato unificado INSPIRA+TRANSPIRA */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-4">
          Contrato unificado INSPIRA + TRANSPIRA
        </h2>
        <p className="text-off-white/70 font-body max-w-2xl mb-8">
          Diagnóstico e execução como um único contrato, duas fases sequenciais.
          O cliente decide uma vez, no início, e o programa vai do diagnóstico ao
          resultado verificado sem nova rodada de proposta.
        </p>
        <UnifiedContract />
      </Section>

      {/* TRANSPIRA-6 · Para quem é */}
      <Section variant="default" paddingY="lg">
        <TargetProfile
          heading="Para quem é"
          items={[
            "Empresas de serviços que já passaram por diagnóstico e estão prontas para execução. Com diagnóstico da Pira Labs ou diagnóstico próprio verificado pelo Celso antes do início.",
            "Fundador que precisa de alguém operando junto com ele, não consultando de fora (Configuração A).",
            "Fundador com recurso interno identificado que precisa de estrutura para operar com autonomia verificável (Configuração B).",
          ]}
          notForItems={[
            "Empresas em crise aguda, sem fluxo de caixa para sustentar a operação durante o processo.",
            "Decisor sem autonomia real para mudar.",
            "Quem busca consultoria que entrega plano e sai.",
          ]}
        />

        {/* Vertical jurídica */}
        <div className="mt-10 bg-teal/20 border border-teal/40 rounded-lg p-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-2">
            Vertical jurídica
          </p>
          <p className="text-off-white/80 font-body text-sm leading-relaxed mb-4">
            Existe uma frente específica para escritórios de advocacia e
            departamentos jurídicos, com método próprio para o setor.
          </p>
          <CTAButton variant="tertiary" href="/transpira/juridico">
            Conhecer TRANSPIRA Jurídico
          </CTAButton>
        </div>
      </Section>

      {/* TRANSPIRA-7 · FAQ */}
      <Section variant="highlighted" paddingY="lg">
        <FAQ heading="Perguntas frequentes" items={faqItems} />
      </Section>

      {/* TRANSPIRA-8 · CTA final */}
      <FinalCTA
        heading="O TRANSPIRA não é projeto que se vende. É projeto que se aceita."
        ctaLabel="Respire"
        origin={ORIGINS.TRANSPIRA}
      />
    </>
  );
}
