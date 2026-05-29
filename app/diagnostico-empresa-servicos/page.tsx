import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { FAQ } from "@/components/shared/FAQ";
import { CTAWithMicrocopy } from "@/components/shared/CTAWithMicrocopy";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/diagnostico-empresa-servicos",
  name: "Como saber se sua empresa de serviços precisa de diagnóstico agora",
  description:
    "Seis perguntas para avaliar o momento da empresa de serviços e identificar se já existe material suficiente para uma conversa de diagnóstico.",
  publisher: { "@id": "https://piralabs.com.br/#organization" },
};

const faqItems = [
  {
    question: "O Oxigênio IA Search é diferente do INSPIRA?",
    answer:
      "Sim. O Oxigênio IA Search diagnostica como a empresa aparece para os motores de inteligência artificial: presença externa, visibilidade em buscas feitas por IA. O INSPIRA diagnostica o negócio como sistema: seis camadas lidas em sequência, convergindo em síntese integrada. Escopos e formatos distintos. O Oxigênio pode ser um ponto de entrada antes do INSPIRA.",
  },
  {
    question: "Preciso contratar para ter um diagnóstico?",
    answer:
      "Não. A conversa inicial é sem compromisso. Nela, a Pira Labs ouve o contexto e ajuda a nomear o problema antes de propor qualquer solução. Se o INSPIRA fizer sentido, proposta em até 5 dias úteis.",
  },
  {
    question: "Quanto tempo leva um diagnóstico INSPIRA?",
    answer:
      "4 a 6 semanas. A proposta inicial define o prazo específico conforme complexidade do negócio.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O Oxigênio IA Search é diferente do INSPIRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O Oxigênio IA Search diagnostica como a empresa aparece para os motores de inteligência artificial. O INSPIRA diagnostica o negócio como sistema: seis camadas lidas em sequência, convergindo em síntese integrada. Escopos e formatos distintos. O Oxigênio pode ser um ponto de entrada antes do INSPIRA.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso contratar para ter um diagnóstico da Pira Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A conversa inicial é sem compromisso. A Pira Labs ouve o contexto e ajuda a nomear o problema antes de propor qualquer solução. Se o INSPIRA fizer sentido, proposta em até 5 dias úteis.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva um diagnóstico INSPIRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4 a 6 semanas. A proposta inicial define o prazo específico conforme complexidade do negócio.",
      },
    },
  ],
};

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  {
    name: "Diagnóstico para empresas de serviços",
    url: "https://piralabs.com.br/diagnostico-empresa-servicos",
  },
]);

export const metadata: Metadata = {
  title: {
    absolute: "Como saber se sua empresa de serviços precisa de diagnóstico agora",
  },
  description:
    "Seis perguntas para avaliar o momento da sua empresa de serviços. Se três ou mais gerarem hesitação, talvez seja hora de diagnosticar o modelo.",
  alternates: {
    canonical: "https://piralabs.com.br/diagnostico-empresa-servicos",
  },
  openGraph: {
    title: "Como saber se sua empresa de serviços precisa de diagnóstico agora",
    description:
      "Seis perguntas para avaliar o momento. Se três ou mais gerarem hesitação, talvez seja hora de diagnosticar o modelo.",
    url: "https://piralabs.com.br/diagnostico-empresa-servicos",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Diagnóstico para empresas de serviços" },
];

const perguntas = [
  "Você sabe qual cliente gera margem positiva e qual gera prejuízo disfarçado de receita?",
  "Você consegue crescer receita sem crescer headcount na mesma proporção?",
  "Seu time mais sênior passa mais tempo em entrega do que em decisão e aprovação?",
  "Você tem clareza de qual problema o seu cliente acha que você resolve, versus qual você resolve de verdade?",
  "Se você saísse da operação por 30 dias, o que travaria primeiro?",
  "Você sabe qual seria o próximo nível do seu negócio se o modelo atual não fosse um limitador?",
];

export default function DiagnosticoEmpresaServicosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      {/* Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Como saber se a sua empresa de serviços precisa de um diagnóstico agora"
        />
      </div>

      {/* Corpo principal */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl space-y-8">
          {/* Parágrafos de abertura */}
          <p className="text-off-white/85 font-body leading-relaxed">
            Em 4 a 6 semanas de diagnóstico, o INSPIRA entrega o problema real
            nomeado e uma rota executável. Não um relatório para arquivar. O
            diagnóstico não inventa o problema. Revela o que a fundadora ou o
            fundador já sentia, mas ainda não havia encontrado palavras para
            nomear.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Antes de propor qualquer solução, a Pira Labs ouve. O ponto de
            partida é sempre a leitura do negócio como sistema. Seis perguntas
            que ajudam a calibrar o momento:
          </p>

          {/* As seis perguntas */}
          <ol className="space-y-4">
            {perguntas.map((pergunta, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-orange font-body font-semibold shrink-0 w-6 pt-px">
                  {i + 1}.
                </span>
                <p className="text-off-white/85 font-body leading-relaxed">{pergunta}</p>
              </li>
            ))}
          </ol>

          {/* Parágrafos de fechamento */}
          <p className="text-off-white/85 font-body leading-relaxed">
            Se três ou mais dessas perguntas geraram hesitação, já existe
            material suficiente para uma conversa de diagnóstico. Não porque a
            empresa está em crise. Porque ainda não está. E é quando há
            clientes, caixa e reputação que o diagnóstico da Pira Labs entrega
            mais: o problema nomeado, a rota desenhada e a decisão tomada com
            clareza.
          </p>

          <p className="text-off-white/85 font-body leading-relaxed">
            O diagnóstico não cria urgência artificial. Ele organiza sinais que
            já apareceram no negócio, mas ainda não viraram decisão. O{" "}
            <Link
              href="/creative-business-turnaround"
              className="text-off-white underline underline-offset-2 hover:text-orange transition-colors"
            >
              Creative Business Turnaround
            </Link>{" "}
            atua exatamente nesse intervalo.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="highlighted" paddingY="lg">
        <FAQ heading="Perguntas frequentes" items={faqItems} />
      </Section>

      {/* CTA final */}
      <Section variant="default" paddingY="lg">
        <CTAWithMicrocopy
          label="Respire"
          href="/contato?origem=diagnostico_empresa_servicos"
          microcopy="Diagnóstico antes de proposta. Conversa inicial sem compromisso."
        />
      </Section>
    </>
  );
}
