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
  "@id": "https://piralabs.com.br/faisca/imersa-em-ia#service",
  name: "Imersão em IA",
  description:
    "Sessão de trabalho com IA sobre os processos reais da empresa. Três sessões, 5,5 horas total. Conduzido por Celso Gama.",
  provider: { "@id": "https://piralabs.com.br/#organization" },
  serviceType: "Sessão prática de IA aplicada à operação",
  offers: {
    "@type": "Offer",
    name: "Imersão em IA",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "7100",
      priceCurrency: "BRL",
    },
  },
};

const faqItems = [
  {
    question: "Isso é um curso de IA?",
    answer:
      "Não. É sessão de trabalho sobre os processos reais da sua empresa. A diferença é que você sai com primeiras aplicações testadas no seu contexto, prompts de base documentados e plano de próximos passos, não com conhecimento geral sobre ferramentas.",
  },
  {
    question: "Preciso já ter IA implementada?",
    answer:
      "Não necessariamente. A Sessão 1 serve exatamente para mapear onde a empresa está hoje. O ponto de entrada pode ser zero uso formal ou uso informal já em curso.",
  },
  {
    question: "Qual a diferença para o Oxigênio IA Search?",
    answer:
      "O Oxigênio IA Search diagnostica como a empresa aparece para os motores de inteligência artificial: buscas externas, como o ICP encontra a empresa, presença de marca em IA. A Imersão em IA trabalha o uso interno: como a operação da empresa usa IA, onde está exposta, o que melhorar. São leituras complementares. Uma olha para fora. A outra olha para dentro.",
  },
  {
    question: "O que recebo ao final?",
    answer:
      "Ao final das três sessões: casos prioritários testados com IA, prompts de base documentados para o dia a dia, checklists de uso e plano de próximos passos priorizado por esforço e impacto.",
  },
  {
    question: "A Imersão em IA substitui o TRANSPIRA ou o INSPIRA?",
    answer:
      "Não. A Imersão em IA trabalha IA aplicada à operação existente. O TRANSPIRA redesenha a operação. O INSPIRA diagnostica o negócio como sistema. Cada um responde a uma pergunta diferente.",
  },
  {
    question: "Preciso preparar algo antes?",
    answer:
      "Sim. Para a Sessão 2, o cliente envia pelo menos três casos reais com pelo menos três dias de antecedência. Quanto mais específico o material, mais útil a sessão.",
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
  { name: "Imersão em IA", url: "https://piralabs.com.br/faisca/imersa-em-ia" },
]);

const sessoes = [
  {
    title: "Sessão 1 · Cultura e adaptação (2 horas)",
    description:
      "O que está funcionando no setor, o que não funciona, exemplos reais de uso correto e de mau uso. Exploração direta de ChatGPT, Claude, Gemini e Perplexity com foco nos processos do cliente. O cliente sai com leitura clara de onde está em relação ao setor e com os primeiros casos mapeados para a Sessão 2.",
  },
  {
    title: "Sessão 2 · Execução de processos (2 horas)",
    description:
      "Trabalho com os casos reais enviados pelo cliente com pelo menos três dias de antecedência. Prompts de base para as rotinas do dia a dia, checklists, automações de comunicação e aplicações específicas para o contexto da empresa. O cliente sai com primeiras aplicações testadas sobre os próprios processos, não sobre exemplos fabricados.",
  },
  {
    title: "Sessão 3 · Ajustes e próximos passos (1,5 hora)",
    description:
      "Dúvidas abertas da Sessão 2, refinamento do que ficou para trás, e definição dos próximos passos de implementação. O que o time vai testar, o que depende de decisão interna, o que pode escalar. O cliente sai com plano de implementação priorizado.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Imersão em IA · Sessão prática com IA · PIRA LABS",
  },
  description:
    "Não é curso. É sessão de trabalho com os casos reais da sua empresa. Celso Gama conduz. R$7.100. Três sessões, 5,5 horas no total.",
  alternates: {
    canonical: "https://piralabs.com.br/faisca/imersa-em-ia",
  },
  openGraph: {
    title: "Imersão em IA · PIRA LABS",
    description:
      "Sessão de trabalho com IA sobre os processos reais da empresa. R$7.100. Três sessões.",
    url: "https://piralabs.com.br/faisca/imersa-em-ia",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Faísca", href: "/faisca" },
  { label: "Imersão em IA" },
];

export default function ImersaEmIaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      {/* IMERSA-1 · Header da página */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Imersão em IA"
          subtitle="Não é curso. É sessão de trabalho com IA dentro da operação real da sua empresa."
        />
      </div>

      {/* IMERSA-2 · Hero da oferta */}
      <Section variant="default" paddingY="lg">
        <p className="text-off-white/85 font-body leading-relaxed max-w-3xl mb-8">
          Saber o que é IA é diferente de saber o que ela faz na sua operação
          específica. A Imersão em IA não usa exemplos genéricos. Trabalha sobre
          os processos, os documentos e os casos reais da empresa, nas três
          sessões.
        </p>

        {/* Bloco da oferta */}
        <div className="bg-teal/20 border border-teal/40 rounded-lg p-8 max-w-lg mb-8">
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-off-white/10 pb-3">
              <span className="text-off-white/60 font-body text-sm">Investimento</span>
              <span className="text-2xl font-body font-semibold text-orange">R$7.100</span>
            </div>
            <div className="flex justify-between items-center border-b border-off-white/10 pb-3">
              <span className="text-off-white/60 font-body text-sm">Formato</span>
              <span className="text-off-white font-body font-semibold text-sm">3 sessões online ou presenciais</span>
            </div>
            <div className="flex justify-between items-center border-b border-off-white/10 pb-3">
              <span className="text-off-white/60 font-body text-sm">Duração total</span>
              <span className="text-off-white font-body font-semibold text-sm">5,5 horas</span>
            </div>
            <div className="flex justify-between items-center border-b border-off-white/10 pb-3">
              <span className="text-off-white/60 font-body text-sm">Conduz</span>
              <span className="text-off-white font-body font-semibold text-sm">Celso Gama</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-off-white/60 font-body text-sm">Quando começa</span>
              <span className="text-off-white font-body font-semibold text-sm">Após confirmação de encaixe</span>
            </div>
          </div>
        </div>

        <CTAWithMicrocopy
          label="Respire"
          href="#falar"
          microcopy="Conversa inicial para confirmar encaixe. Respondemos em até 2 dias úteis."
        />
      </Section>

      {/* IMERSA-3 · O que acontece nas três sessões */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          O que acontece nas três sessões
        </h2>
        <div className="max-w-2xl mb-10">
          <ProcessSteps steps={sessoes} />
        </div>

        {/* O que não é */}
        <div className="border-l-2 border-off-white/20 pl-6 max-w-2xl mb-6">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
            O que não é
          </p>
          <p className="text-off-white/65 font-body text-sm leading-relaxed">
            A Imersão em IA não substitui o TRANSPIRA. Saber usar IA não resolve
            gargalo de delegação, não documenta processos e não instala critério
            de decisão. Quando o que falta é execução profunda e redesenho de
            operação, o próximo passo é o TRANSPIRA.
          </p>
        </div>

        {/* Confidencialidade */}
        <div className="border-l-2 border-off-white/20 pl-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
            Dados e confidencialidade
          </p>
          <p className="text-off-white/65 font-body text-sm leading-relaxed">
            Materiais sensíveis, dados pessoais, informações de clientes e
            documentos confidenciais só entram nas sessões com anonimização,
            critério de uso e alinhamento prévio. A Imersão em IA ensina a usar
            IA sem terceirizar julgamento para a ferramenta.
          </p>
        </div>
      </Section>

      {/* IMERSA-4 · Para quem é */}
      <Section variant="default" paddingY="lg">
        <TargetProfile
          heading="Para quem é"
          items={[
            "Empresa que já usa IA de forma informal, sem método, e quer estruturar o uso antes de escalar. O risco sem método é escalar o erro junto com a ferramenta.",
            "Fundador ou gestor que quer entender de verdade o que é possível fazer com IA nos processos da empresa antes de tomar decisão de investimento maior.",
            "Time que recebeu instrução para adotar IA mas não recebeu critério: onde usar, onde não usar, o que revisar antes de enviar, o que nunca colocar na ferramenta.",
          ]}
          notForItems={[
            "Quem busca curso genérico de ferramentas.",
            "Quem quer onboarding de plataforma.",
            "Quem precisa de redesenho profundo de operação: para esse caso, o caminho é o TRANSPIRA ou o INSPIRA primeiro.",
          ]}
        />
      </Section>

      {/* IMERSA-5 · Quem conduz */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Quem conduz
        </h2>
        <div className="max-w-2xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Celso Gama conduz as três sessões. Applied AI Certificate Program
            (MIT, em andamento, 2026). Bacharelando em Direito (Mackenzie). MBA
            pelo Insper.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Não há equipe intermediária. Quem confirma o encaixe é quem executa
            as sessões.
          </p>
          <CTAButton variant="tertiary" href="/sobre">
            Conhecer Celso
          </CTAButton>
        </div>
      </Section>

      {/* IMERSA-6 · FAQ */}
      <Section variant="default" paddingY="lg">
        <FAQ heading="Perguntas frequentes" items={faqItems} />
      </Section>

      {/* IMERSA-7 · CTA final — âncora obrigatória */}
      <div id="falar">
        <FinalCTA
          heading="Antes de confirmar, fazemos uma conversa inicial para garantir que a Imersão em IA é o produto certo para o momento da empresa."
          ctaLabel="Respire"
          origin={ORIGINS.FAISCA_IMERSA}
        />
      </div>
    </>
  );
}
