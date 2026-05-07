import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { FAQ } from "@/components/shared/FAQ";
import { CTAButton } from "@/components/shared/CTAButton";
import { LegalNotice } from "@/components/shared/LegalNotice";
import { ORIGINS } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "TRANSPIRA Jurídico · Execução operacional e legal ops com IA · PIRA LABS",
  },
  description:
    "Redesenho operacional para escritórios de advocacia e departamentos jurídicos. Dois modelos: implementação junto ao time ou capacidade de produção jurídica sob demanda.",
  alternates: {
    canonical: "https://piralabs.com.br/transpira/juridico",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "TRANSPIRA Jurídico · Execução operacional e legal ops com IA · PIRA LABS",
    description:
      "Dois modelos: implementação junto ao time ou capacidade de produção jurídica sob demanda. Execução real dentro da operação.",
    url: "https://piralabs.com.br/transpira/juridico",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Transpira", href: "/transpira" },
  { label: "Jurídico" },
];

const faqItems = [
  {
    question: "Vocês prestam consultoria jurídica?",
    answer:
      "Não. O TRANSPIRA Jurídico trata de fluxos de trabalho, produtividade, governança de uso de IA e capacidade operacional jurídica. Todo material produzido no Modelo B passa pelo advogado habilitado do escritório para revisão, validação e assinatura. A PIRA LABS não representa clientes, não assina peças e não emite pareceres.",
  },
  {
    question: "Como vocês garantem confidencialidade?",
    answer:
      "Sempre via NDA. Acordo de confidencialidade assinado antes de qualquer coleta de informação ou acesso a documentos. Acordo é base canônica de todo trabalho da PIRA LABS, independente do modelo contratado. Quando há uso de ferramentas de IA, trabalhamos exclusivamente com soluções que oferecem garantias contratuais de não treinamento sobre dados do cliente. Cada protocolo de uso é validado pelo decisor jurídico do cliente antes de operar.",
  },
  {
    question:
      "Qual a qualificação de quem executa o trabalho jurídico operacional?",
    answer:
      "Celso Gama, COO da PIRA LABS, está cursando o último ano de Direito no Mackenzie e tem o Applied AI Certificate Program pelo MIT. Atua na condução operacional de legal ops com método e IA aplicada, sempre com supervisão, revisão, validação e assinatura do advogado habilitado do escritório contratante em cada entrega.",
  },
  {
    question: "Como começa um projeto?",
    answer:
      "Conversa inicial para entender o contexto e definir o modelo mais adequado (A ou B). Proposta com escopo, prazo e investimento. Início após aceite e assinatura do acordo de confidencialidade.",
  },
  {
    question: "Quanto dura e como é precificado?",
    answer:
      "Modelo A *: 12 a 20 semanas com gates de aprovação humana, por projeto. Modelo B *: por projeto, escopo definido antes de começar. Ambos sob consulta e disponibilidade. Por sermos uma boutique, trabalhamos com agenda limitada de projetos simultâneos.",
  },
  {
    question: "O resultado de R$160 mil/mês é típico?",
    answer:
      "O número veio de cálculo feito pelo próprio cliente. Ele somou quantas pessoas precisaria contratar para realizar as mesmas tarefas, o tempo dedicado por cada uma e o tempo total. Com o tempo economizado, a mesma equipe passou a estar disponível para faturamento adicional. Não prometemos resultado idêntico. Cada operação tem seu ponto de partida. O que prometemos é diagnóstico honesto, redesenho com a equipe e medição clara dos avanços acordados.",
  },
];

export default function TranspiraJuridicoPage() {
  return (
    <>
      {/* JURIDICO-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="TRANSPIRA Jurídico"
          subtitle="Execução operacional para escritórios e departamentos jurídicos que querem resultado agora, não apenas um diagnóstico."
        />
      </div>

      {/* JURIDICO-2 · Posicionamento */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Por que o jurídico precisa de execução diferente
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Escritórios de advocacia têm camadas de complexidade que outras
            empresas de serviços não têm. Confidencialidade rigorosa.
            Responsabilidade técnica do advogado. Volume de trabalho mecânico
            que cresceu nos últimos anos sem que o desenho do trabalho tenha
            acompanhado.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            A IA mudou o que é possível, mas não como o mercado vende. Não
            substitui advogado. Não automatiza julgamento. Acelera trabalho
            mecânico repetitivo, sob supervisão humana, e libera capacidade da
            equipe para o que efetivamente exige formação e responsabilidade
            técnica.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            O TRANSPIRA Jurídico é a frente executiva da PIRA LABS para esse
            contexto. Não entregamos relatório. Entramos na operação e fazemos
            o trabalho mudar.
          </p>
        </div>
      </Section>

      {/* JURIDICO-3 · Caso âncora */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          O que aconteceu em uma operação jurídica de alto volume
        </h2>
        <div className="max-w-3xl">
          {/* Métrica em destaque */}
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-display text-5xl md:text-6xl text-peach">
              400h
            </span>
            <span className="text-off-white/50 font-body text-xl">para</span>
            <span className="font-display text-5xl md:text-6xl text-orange">
              36h
            </span>
          </div>
          <div className="space-y-4">
            <p className="text-off-white/85 font-body leading-relaxed">
              Operação jurídica de alto volume com tarefa mecânica recorrente
              que ocupava 400 horas mensais da equipe. IA bem aplicada e
              supervisionada por humanos reduziu o tempo da mesma tarefa para
              36 horas mensais.
            </p>
            <p className="text-off-white/85 font-body leading-relaxed">
              O cliente não cortou pessoas. Liberou capacidade de R$160 mil de
              faturamento adicional por mês com a mesma equipe que ele já
              tinha. O número veio de cálculo feito pelo próprio cliente: ele
              somou quantas pessoas precisaria contratar para realizar as mesmas
              tarefas, o tempo dedicado por cada uma e o tempo total. Com o
              tempo economizado, a mesma equipe passou a estar disponível para
              faturamento adicional.
            </p>
            <p className="text-off-white/85 font-body leading-relaxed">
              Esse caso é o que IA bem aplicada faz quando entra depois de
              método. Sem método antes, a mesma tecnologia teria escalado o
              ruído que já existia.
            </p>
          </div>
        </div>
      </Section>

      {/* JURIDICO-4 · Dois modelos de entrega */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-10">
          Como trabalhamos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Modelo A */}
          <div className="bg-teal/20 border border-teal/40 rounded-lg p-8 flex flex-col">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-3">
              Modelo A
            </p>
            <h3 className="text-xl font-semibold text-off-white mb-4">
              Implementação junto ao time
            </h3>
            <p className="text-off-white/80 font-body leading-relaxed mb-6">
              A PIRA LABS trabalha dentro do escritório, com a equipe,
              redesenhando os fluxos de trabalho jurídico e implementando IA
              onde ela amplifica. O escritório aprende fazendo. No final, a
              operação roda sem depender da PIRA LABS.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-3">
                O que entra
              </p>
              {[
                "Mapeamento de fluxos críticos e gargalos reais",
                "Implementação de legal ops com supervisão humana",
                "Estrutura de governança de uso de IA",
                "Capacitação do time para operar o novo desenho",
                "Gates de aprovação entre as fases",
              ].map((item) => (
                <p
                  key={item}
                  className="text-off-white/70 font-body text-sm leading-relaxed flex gap-2"
                >
                  <span className="text-orange mt-0.5 shrink-0">·</span>
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-teal/30 space-y-1">
              <p className="text-off-white/60 font-body text-sm">
                <span className="text-off-white/40">Para quem:</span>{" "}
                escritórios que querem construir capacidade interna. Time
                disponível para o processo de implementação.
              </p>
              <p className="text-off-white/60 font-body text-sm">
                <span className="text-off-white/40">Duração:</span> 12 a 20
                semanas com gates de aprovação humana.
              </p>
            </div>
          </div>

          {/* Modelo B */}
          <div className="bg-teal/20 border border-teal/40 rounded-lg p-8 flex flex-col">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-3">
              Modelo B *
            </p>
            <h3 className="text-xl font-semibold text-off-white mb-4">
              Assistant as a service
            </h3>
            <p className="text-off-white/80 font-body leading-relaxed mb-4">
              A atividade jurídica está cada vez mais sendo executada por
              ferramentas de IA. O serviço jurídico, o julgamento, a
              estratégia, a relação com o cliente, esse segue humano e seguirá
              crescendo em valor exatamente por isso. A PIRA LABS entra para
              ajudar o advogado a entregar o seu melhor serviço, cuidando da
              atividade para que ele foque no que só ele pode fazer.
            </p>
            <p className="text-off-white/80 font-body leading-relaxed mb-6">
              No Modelo B, a PIRA LABS executa o trabalho operacional de legal
              ops. O escritório recebe o material produzido, o advogado
              habilitado do próprio escritório revisa, valida e assina.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-3">
                O que entra
              </p>
              {[
                "Análise e decupagem de processos",
                "Pesquisa e levantamento de jurisprudência",
                "Construção de modelos e templates de peças",
                "Rascunhos para revisão e validação do advogado",
                "Organização e sistematização de documentação interna",
              ].map((item) => (
                <p
                  key={item}
                  className="text-off-white/70 font-body text-sm leading-relaxed flex gap-2"
                >
                  <span className="text-orange mt-0.5 shrink-0">·</span>
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-teal/30 space-y-2">
              <p className="text-off-white/55 font-body text-xs leading-relaxed italic">
                Todo material produzido pela PIRA LABS no Modelo B passa pelo
                advogado habilitado do próprio escritório antes de qualquer
                uso. A PIRA LABS não assina peça, não representa cliente e não
                presta consultoria jurídica.
              </p>
              <p className="text-off-white/60 font-body text-sm">
                <span className="text-off-white/40">Para quem:</span>{" "}
                escritórios com volume alto de atividade mecânica repetitiva e
                sem banda para ciclo de implementação longa.
              </p>
              <p className="text-off-white/60 font-body text-sm">
                <span className="text-off-white/40">Duração:</span> por
                projeto, escopo definido antes de começar.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs text-off-white/40 font-body">
          * Mediante consulta e disponibilidade. Por sermos uma boutique,
          trabalhamos com agenda limitada de projetos simultâneos no Modelo B.
        </p>
      </Section>

      {/* JURIDICO-5 · Para quem é */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Para quem é o TRANSPIRA Jurídico
        </h2>
        <div className="max-w-3xl space-y-4 mb-10">
          <p className="text-off-white/85 font-body leading-relaxed">
            Escritórios de advocacia e departamentos jurídicos com volume alto
            de trabalho mecânico repetitivo. Decisores com autonomia real para
            mudar o funcionamento da operação.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Pode entrar direto ou depois do INSPIRA Jurídico. Quem tem
            diagnóstico pronto começa mais rápido. Quem não tem pode fazer o
            diagnóstico como parte da abertura do projeto.
          </p>
        </div>

        <div className="border-l-2 border-off-white/20 pl-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
            Quem não deveria contratar
          </p>
          <p className="text-off-white/60 font-body text-sm leading-relaxed">
            Escritórios que buscam terceirizar a responsabilidade jurídica. O
            TRANSPIRA Jurídico não substitui advogado, não assina peça e não
            presta consultoria jurídica. Trabalhamos dentro da operação, não no
            lugar dela.
          </p>
        </div>
      </Section>

      {/* JURIDICO-6 · FAQ */}
      <Section variant="default" paddingY="lg">
        <FAQ heading="Perguntas frequentes" items={faqItems} />
        <p className="mt-6 text-xs text-off-white/40 font-body">
          * Mediante consulta e disponibilidade.
        </p>
      </Section>

      {/* JURIDICO-7 · CTAs */}
      <section className="bg-ink section-padding">
        <div className="container-site text-center">
          <p className="font-display text-2xl md:text-3xl italic text-peach mb-8 leading-snug max-w-2xl mx-auto">
            O trabalho mecânico que ocupa o time hoje pode ser feito de outra
            forma. O que libera é o que não pode ser automatizado: o julgamento,
            a estratégia, a relação com o cliente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="primary"
              href="/contato"
              origin={ORIGINS.TRANSPIRA_JURIDICO}
              withAsterisk
            >
              Falar sobre TRANSPIRA Jurídico
            </CTAButton>
            <CTAButton variant="secondary" href="/inspira/juridico">
              Prefere começar pelo diagnóstico? Conheça o INSPIRA Jurídico
            </CTAButton>
          </div>
          <p className="mt-4 text-sm text-off-white/60 font-body">
            Respondemos em até dois dias úteis.
          </p>
          <p className="mt-2 text-xs text-off-white/40 font-body">
            * Mediante consulta e disponibilidade.
          </p>
          <div className="max-w-2xl mx-auto mt-8">
            <LegalNotice variant="transpira_juridico" />
          </div>
        </div>
      </section>
    </>
  );
}
