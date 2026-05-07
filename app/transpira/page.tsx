import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "TRANSPIRA · Execução de Creative Business Turnaround · PIRA LABS",
  },
  description:
    "O TRANSPIRA é a execução da PIRA LABS junto à operação do cliente. Redesenho de trabalho, valor, tecnologia e governança em empresas de serviços.",
  alternates: {
    canonical: "https://piralabs.com.br/transpira",
  },
  openGraph: {
    title: "TRANSPIRA · Execução de Creative Business Turnaround · PIRA LABS",
    description:
      "Redesenho de trabalho, valor, tecnologia e governança. Execução mão na massa dentro da operação do cliente.",
    url: "https://piralabs.com.br/transpira",
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
      "Mapeamento de fluxos críticos, identificação de gargalos reais e redesenho da relação entre o que é feito, por quem e com qual objetivo. Sai a operação dependente de heróis. Entra processo que funciona com gente comum fazendo trabalho extraordinário.",
  },
  {
    title: "Tecnologia curada",
    description:
      "Não vendemos tecnologia. Curamos. Identificamos onde a IA, automação ou ferramenta específica amplifica capacidade real, e onde não amplifica nada. Quando indicamos um parceiro de tecnologia, declaramos qualquer revenue share envolvido.",
  },
  {
    title: "Governança aplicada",
    description:
      "Quando modelos, dados e automações passam a influenciar decisão, risco e performance, governança deixa de ser controle posterior e vira capacidade competitiva. Estruturamos processos críticos, pontos de decisão e protocolos de aprovação que sustentam o negócio depois que saímos.",
  },
  {
    title: "Valor percebido",
    description:
      "Empresas de serviços precisam parar de vender esforço e começar a provar valor. A capacidade de tornar o valor percebido visível e verificável é diferenciação real. Trabalhamos isso na operação, não no marketing.",
  },
];

const comoComeça = [
  {
    title: "Diagnóstico ou validação prévia",
    description:
      "Em projetos novos, o TRANSPIRA começa após o INSPIRA da PIRA LABS. Em projetos onde o cliente já tem diagnóstico próprio, o Celso valida o material antes de qualquer proposta.",
  },
  {
    title: "Proposta com escopo, prazo e gates",
    description:
      "A proposta define o escopo da execução, o prazo previsto, os gates de aprovação humana ao longo do projeto, e o investimento. Sem proposta padrão.",
  },
  {
    title: "Execução junto à operação",
    description:
      "O TRANSPIRA acontece dentro da operação do cliente. A equipe da PIRA LABS trabalha com o time, não substitui o time.",
  },
];

const faqItems = [
  {
    question:
      "Qual a diferença entre o TRANSPIRA e contratar uma agência ou consultoria de operação?",
    answer:
      "Agência opera por entrega contratada. Consultoria entrega plano e sai. O TRANSPIRA redesenha o trabalho com a equipe do cliente, deixa a operação rodando sem depender da PIRA LABS, e tem encerramento explícito. A saída faz parte do escopo. É execução mão na massa, dentro da operação, voltada ao desbloqueio do potencial represado da empresa.",
  },
  {
    question: "Vocês trazem tecnologia própria?",
    answer:
      "Não. A PIRA LABS não tem tecnologia própria. Toda solução tecnológica vem do mercado, curada e introduzida com aplicabilidade desenhada junto com o cliente. Quando indicamos parceiros, declaramos qualquer revenue share envolvido.",
  },
  {
    question: "Quanto tempo dura um TRANSPIRA?",
    answer:
      "Depende do escopo. Projetos curtos ficam em 8 a 12 semanas. Projetos mais profundos podem chegar a 6 meses. A proposta define o prazo específico, com gates de aprovação humana entre as fases.",
  },
  {
    question: "O TRANSPIRA inclui o setor jurídico?",
    answer:
      "Existe uma frente vertical chamada TRANSPIRA Jurídico, com método específico para escritórios de advocacia e departamentos jurídicos. Conhecer detalhes em /transpira/juridico.",
  },
  {
    question: "Como vocês lidam com a equipe interna do cliente?",
    answer:
      "A equipe do cliente é parceira do projeto. O TRANSPIRA não substitui pessoas. Redesenha o que cada uma faz, como o trabalho conecta, e onde a tecnologia amplifica capacidade existente.",
  },
  {
    question: "Vocês assinam NDA?",
    answer:
      "Sempre. Acordo de confidencialidade é base canônica de todo trabalho da PIRA LABS, assinado antes de qualquer coleta de informação ou conversa com a equipe do cliente.",
  },
  {
    question: "Como é a precificação? *",
    answer:
      "Sob consulta e disponibilidade. Por sermos uma boutique, mantemos agenda limitada de projetos simultâneos. Investimento varia conforme escopo, prazo, profundidade do redesenho e setor. Respondemos em até dois dias úteis com proposta.",
  },
];

export default function TranspiraPage() {
  return (
    <>
      {/* TRANSPIRA-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="TRANSPIRA · Execução de Creative Business Turnaround"
          subtitle="Quando o trabalho certo substitui o trabalho muito."
        />
      </div>

      {/* TRANSPIRA-2 · O que é o TRANSPIRA */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que é o TRANSPIRA
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            O TRANSPIRA é a execução da PIRA LABS junto à operação do cliente.
            Não é projeto que acontece em sala de reunião e vira PowerPoint.
            Acontece dentro do negócio, com a equipe que vai operar depois.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Redesenhamos a relação entre trabalho, valor, tecnologia e
            governança. Tecnologia entra onde amplifica, nunca antes de entender
            o problema. A IA não corrige bagunça. Sem método, ela escala
            bagunça.
          </p>
          <p className="text-off-white/60 font-body text-sm">
            Conduz: Celso Gama.
          </p>
        </div>
      </Section>

      {/* TRANSPIRA-3 · O que entregamos */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
          O que entregamos
        </h2>
        <div className="max-w-2xl mt-8">
          <ProcessSteps steps={frentesEntrega} />
        </div>
      </Section>

      {/* TRANSPIRA-4 · Para quem é */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Para quem é
        </h2>
        <div className="max-w-3xl space-y-4 mb-10">
          <p className="text-off-white/85 font-body leading-relaxed">
            Empresas de serviços que já passaram pelo diagnóstico, com a PIRA
            LABS ou por conta própria, e estão prontas para a execução. Os
            setores onde o método tem maior validação são publicidade, saúde,
            jurídico, alimentação e serviços profissionais especializados.
          </p>
        </div>

        {/* Entrada direta sem INSPIRA */}
        <div className="border-l-2 border-orange/40 pl-6 max-w-2xl mb-10">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-2">
            Quando entra direto, sem INSPIRA
          </p>
          <p className="text-off-white/70 font-body text-sm leading-relaxed">
            Em casos específicos, o TRANSPIRA pode começar sem o INSPIRA
            prévio. Acontece quando o cliente já tem diagnóstico claro do
            problema, evidência de causa raiz, e busca uma equipe que execute
            sem precisar refazer leitura. Esses casos são minoria. A regra
            geral é INSPIRA antes de TRANSPIRA.
          </p>
        </div>

        {/* CTA para vertical jurídica */}
        <div className="bg-teal/20 border border-teal/40 rounded-lg p-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-2">
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

      {/* TRANSPIRA-5 · Como começa */}
      <Section variant="highlighted" paddingY="lg">
        <div className="max-w-2xl">
          <ProcessSteps
            heading="Como começa um TRANSPIRA"
            steps={comoComeça}
          />
          <p className="mt-8 text-off-white/60 font-body text-sm">
            Respondemos em até dois dias úteis.
          </p>
          <div className="mt-6">
            <CTAButton
              variant="secondary"
              href="/contato"
              origin={ORIGINS.TRANSPIRA}
            >
              Falar com a PIRA LABS
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* TRANSPIRA-6 · FAQ */}
      <Section variant="default" paddingY="lg">
        <FAQ heading="Perguntas frequentes" items={faqItems} />
        <p className="mt-6 text-xs text-off-white/40 font-body">
          * Mediante consulta e disponibilidade.
        </p>
      </Section>

      {/* TRANSPIRA-7 · CTA final */}
      <FinalCTA
        heading="O TRANSPIRA não é projeto que se vende. É projeto que se aceita."
        origin={ORIGINS.TRANSPIRA}
        showAsterisk
      />
    </>
  );
}
