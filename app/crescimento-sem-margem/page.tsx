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
  "@id": "https://piralabs.com.br/crescimento-sem-margem",
  name: "A empresa cresce mas a margem some: o que está acontecendo",
  description:
    "Crescimento de receita sem crescimento de margem é sintoma, não resultado. Seis causas que aparecem antes da crise.",
  publisher: { "@id": "https://piralabs.com.br/#organization" },
};

const faqItems = [
  {
    question: "Isso acontece só em empresas pequenas?",
    answer:
      "Não. Crescimento sem margem é um padrão recorrente em empresas de serviços de diferentes portes. Quanto mais rápido o crescimento, mais invisível fica o problema, porque a receita nova mascara o custo da receita antiga.",
  },
  {
    question: "Parar de crescer resolve o problema?",
    answer:
      "Raramente. Desacelerar o crescimento reduz a exposição, mas não corrige o modelo. As causas permanecem: escopo não cobrado, precificação desalinhada, retrabalho sem custo visível. O problema continua acumulando, só mais devagar.",
  },
  {
    question: "Como a Pira Labs aborda esse problema?",
    answer:
      "Via INSPIRA, diagnóstico que lê seis camadas do negócio em sequência antes de nomear qualquer problema. O output é uma rota executável com movimentos, responsáveis e critérios de conclusão. A conversa inicial é sem compromisso.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Crescimento sem margem acontece só em empresas pequenas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. Crescimento sem margem é um padrão recorrente em empresas de serviços de diferentes portes. Quanto mais rápido o crescimento, mais invisível fica o problema, porque a receita nova mascara o custo da receita antiga.",
      },
    },
    {
      "@type": "Question",
      name: "Parar de crescer resolve o problema de margem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Raramente. Desacelerar reduz a exposição, mas não corrige o modelo. As causas permanecem: escopo não cobrado, precificação desalinhada, retrabalho sem custo visível.",
      },
    },
    {
      "@type": "Question",
      name: "Como a Pira Labs aborda o problema de crescimento sem margem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Via INSPIRA, diagnóstico que lê seis camadas do negócio em sequência antes de nomear qualquer problema. O output é uma rota executável com movimentos, responsáveis e critérios de conclusão. A conversa inicial é sem compromisso.",
      },
    },
  ],
};

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  {
    name: "A empresa cresce, a margem some",
    url: "https://piralabs.com.br/crescimento-sem-margem",
  },
]);

export const metadata: Metadata = {
  title: {
    absolute: "A empresa cresce mas a margem some: o que está acontecendo",
  },
  description:
    "Crescimento de receita sem crescimento de margem é sintoma, não resultado. Seis causas que aparecem antes da crise. Diagnóstico via INSPIRA da Pira Labs.",
  alternates: {
    canonical: "https://piralabs.com.br/crescimento-sem-margem",
  },
  openGraph: {
    title: "A empresa cresce mas a margem some: o que está acontecendo",
    description:
      "Seis causas que aparecem antes da crise. Diagnóstico via INSPIRA da Pira Labs.",
    url: "https://piralabs.com.br/crescimento-sem-margem",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "A empresa cresce, a margem some" },
];

const causas = [
  {
    n: "1",
    causa: "Escopo que cresce sem reprecificação",
    pratica: "O cliente pede mais. A equipe entrega. A conta não muda.",
  },
  {
    n: "2",
    causa: "Equipe que cresce mais rápido que a receita",
    pratica:
      "A operação se estrutura antes de o modelo de trabalho sustentar o novo tamanho.",
  },
  {
    n: "3",
    causa: "Retrabalho invisível que não entra no custo",
    pratica:
      "Revisões, correções e alinhamentos extras consomem horas que não aparecem em nenhuma planilha.",
  },
  {
    n: "4",
    causa: "Precificação baseada em horas, não em valor entregue",
    pratica:
      "A empresa vende tempo quando o cliente paga pelo resultado. O custo real aumenta; o preço fica parado.",
  },
  {
    n: "5",
    causa: "Clientes cujo custo de atendimento supera a margem gerada",
    pratica: "Alguns contratos geram receita visível e prejuízo invisível. Ninguém fez a conta.",
  },
  {
    n: "6",
    causa: "Tecnologia adicionada sem revisão do processo que ela deveria substituir",
    pratica:
      "A ferramenta nova acelera um fluxo que já estava errado. O custo operacional sobe. A margem cai.",
  },
];

export default function CrescimentoSemMargemPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      {/* Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Sua empresa cresce. A margem some. O que está acontecendo?"
        />
      </div>

      {/* Corpo principal */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl space-y-8">
          {/* Parágrafo de abertura com métrica */}
          <p className="text-off-white/85 font-body leading-relaxed">
            Em 6 meses, uma operação de agência recuperou 79 pontos percentuais
            de margem sem aumentar receita. O problema estava exatamente onde
            ninguém estava olhando: o que era cobrado versus o que era entregue,
            e quanto esforço real ia além do contratado. Crescimento de receita
            sem crescimento de margem é sintoma, não resultado. Antes de ser
            crise, é sinal.
          </p>

          {/* Introdução às causas */}
          <p className="text-off-white/85 font-body leading-relaxed">
            Seis causas que aparecem com frequência quando a receita cresce e a
            margem não acompanha:
          </p>

          {/* Tabela de causas */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-teal/50">
                  <th className="text-left py-3 pr-4 text-off-white/50 font-body font-medium w-8">#</th>
                  <th className="text-left py-3 pr-6 text-off-white font-body font-medium">Causa</th>
                  <th className="text-left py-3 text-off-white font-body font-medium">O que acontece na prática</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal/20 font-body text-off-white/80">
                {causas.map((c) => (
                  <tr key={c.n}>
                    <td className="py-3 pr-4 text-off-white/40">{c.n}</td>
                    <td className="py-3 pr-6 font-medium text-off-white">{c.causa}</td>
                    <td className="py-3">{c.pratica}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Parágrafos de fechamento */}
          <p className="text-off-white/85 font-body leading-relaxed">
            Quando várias dessas causas aparecem juntas, o problema raramente é
            só operacional. É de modelo. É aí que entra o{" "}
            <Link
              href="/creative-business-turnaround"
              className="text-off-white underline underline-offset-2 hover:text-orange transition-colors"
            >
              Creative Business Turnaround da Pira Labs
            </Link>
            : diagnóstico e redesenho antes que o crescimento vire crise.
          </p>

          <p className="text-off-white/85 font-body leading-relaxed">
            O diagnóstico não inventa o problema. Revela onde ele está. O INSPIRA
            lê seis camadas do negócio antes de nomear qualquer causa. O resultado
            é uma rota executável, não um relatório para arquivar.
          </p>

          {/* CTA inline */}
          <p className="font-body">
            <Link
              href="/inspira"
              className="text-orange underline underline-offset-2 hover:text-orange/80 transition-colors font-medium"
            >
              O INSPIRA identifica onde a margem está vazando.
            </Link>
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
          href="/contato?origem=crescimento_sem_margem"
          microcopy="Diagnóstico antes de proposta. Conversa inicial sem compromisso."
        />
      </Section>
    </>
  );
}
