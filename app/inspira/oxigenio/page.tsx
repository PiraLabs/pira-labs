export const dynamic = 'force-static';

import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { TargetProfile } from "@/components/shared/TargetProfile";
import { FAQ } from "@/components/shared/FAQ";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS, FLAGS, VAGAS_OXIGENIO, FILL_OUT_FORM_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

export const metadata: Metadata = {
  title: {
    absolute: "Oxigênio IA Search · Diagnóstico de presença em IA · Pira Labs",
  },
  description:
    "Diagnóstico de como sua empresa aparece nos motores de IA. Fast R$3.500, Full R$5.300. Relatório em até 5 dias úteis.",
  alternates: {
    canonical: "https://piralabs.com.br/inspira/oxigenio",
  },
  openGraph: {
    title: "Oxigênio IA Search · Pira Labs",
    description:
      "Fast R$3.500 · Full R$5.300. Diagnóstico de presença em motores de IA. Relatório em até 5 dias úteis.",
    url: "https://piralabs.com.br/inspira/oxigenio",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Inspira", href: "/inspira" },
  { label: "Oxigênio IA Search" },
];

const passos = [
  {
    title: "Aplicação",
    description:
      "Você preenche o formulário com informações básicas sobre a empresa, setor e contexto. Leva 5 a 10 minutos.",
  },
  {
    title: "Confirmação em até 24h",
    description:
      "Se o seu caso encaixa no escopo, enviamos confirmação e briefing curto. Se não encaixa, dizemos antes de começar. Sem cobrança.",
  },
  {
    title: "Execução do diagnóstico",
    description:
      "A partir do briefing preenchido, executamos o Oxigênio. Prazo: até 5 dias úteis a partir do recebimento do briefing.",
  },
  {
    title: "Sessão de leitura conjunta",
    description:
      "Encontro online com Gabriela e Celso para apresentar o diagnóstico. Fast: 45 minutos. Full: 60 minutos. Pode incluir até dois convidados do cliente.",
  },
];

const faqItems = [
  {
    question: "Por que não faço a pesquisa por conta própria?",
    answer:
      "Você pode. A diferença está em três pontos: cruzamento de quatro plataformas com queries específicas do seu setor, leitura interpretativa do que cada padrão de resposta revela, e priorização de ações por esforço versus impacto. A diferença entre rodar uma busca no ChatGPT e ter um diagnóstico estruturado é parecida com a diferença entre olhar um exame e ter alguém interpretando o que ele revela.",
  },
  {
    question: "O Oxigênio é a mesma coisa que SEO?",
    answer:
      "Não. SEO trata de como seu site aparece em buscadores como Google. O Oxigênio diagnostica como sua empresa aparece em respostas de modelos de IA como ChatGPT, Claude, Gemini e Perplexity. São sistemas e lógicas diferentes. O que funciona em SEO tradicional não garante visibilidade em IA Search.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "Até 5 dias úteis a partir do recebimento do briefing preenchido.",
  },
  {
    question: "O Oxigênio inclui execução das ações?",
    answer:
      "Não. O Oxigênio entrega o diagnóstico e os próximos passos priorizados. Execução é decisão do cliente. Para quem quer apoio na execução, o próximo passo depende do que o diagnóstico revela.",
  },
  {
    question: "Qual a diferença entre Fast e Full?",
    answer:
      "O Fast responde como você aparece hoje. O Full responde isso e também por que você aparece pior, aparece errado ou não aparece diante de um concorrente específico, com causa nomeada, três ações customizadas, âncora financeira e reexecução em 60 dias para medir variação.",
  },
  {
    question: "Vocês assinam NDA?",
    answer:
      "Sim. Quando o diagnóstico exigir informação sensível ou briefing detalhado, assinamos NDA antes do acesso. O formulário inicial coleta apenas dados básicos para avaliar encaixe.",
  },
  {
    question: "O que acontece se meu caso não encaixar no escopo?",
    answer:
      "Dizemos antes de qualquer cobrança. A confirmação de aplicação não cria obrigação financeira. Se o caso não encaixa, indicamos o que faria mais sentido.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/inspira/oxigenio#service",
  name: "Oxigênio IA Search",
  description:
    "Diagnóstico de como empresas de serviços aparecem nos motores de inteligência artificial. Subproduto do INSPIRA da Pira Labs.",
  provider: {
    "@id": "https://piralabs.com.br/#organization",
  },
  serviceType: "Diagnóstico de presença em IA Search",
  areaServed: { "@type": "Country", name: "Brasil" },
  offers: [
    {
      "@type": "Offer",
      name: "Oxigênio IA Search Fast",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "3500",
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "Offer",
      name: "Oxigênio IA Search Full",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "5300",
        priceCurrency: "BRL",
      },
    },
  ],
};

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
  { name: "Inspira", url: "https://piralabs.com.br/inspira" },
  { name: "Oxigênio IA Search", url: "https://piralabs.com.br/inspira/oxigenio" },
]);

export default function OxigenioPage() {
  const applyUrl = `${FILL_OUT_FORM_URL}?origem=${ORIGINS.OXIGENIO}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      {/* OXIGENIO-1 · Header da página */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Oxigênio IA Search"
          subtitle="Diagnóstico de como sua empresa aparece quando alguém pergunta para uma IA sobre o seu setor."
        />
      </div>

      {/* OXIGENIO-2 · Hero da oferta */}
      <Section variant="default" paddingY="lg">
        <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-4">
          Subproduto do INSPIRA. Escopo fechado. Preço público.
        </p>
        <p className="text-off-white/85 font-body leading-relaxed max-w-3xl mb-10">
          Parte das decisões de consideração já acontece antes do formulário,
          antes da reunião, antes do contato direto. Em muitos casos, essa busca
          passa por motores de inteligência artificial. O Oxigênio IA Search
          diagnostica como sua empresa aparece nessa etapa, e o que mudar para
          que sua presença seja lida com mais clareza pelos motores de
          inteligência artificial.
        </p>

        {/* Tabela Fast vs Full */}
        <div className="overflow-x-auto max-w-3xl mb-8">
          <table className="w-full text-sm font-body border-collapse">
            <thead>
              <tr className="border-b border-teal/40">
                <th className="text-left py-3 pr-6 text-off-white/40 font-semibold w-40"></th>
                <th className="text-left py-3 pr-6 text-off-white font-semibold">
                  Fast <span className="text-orange ml-1">R$3.500</span>
                </th>
                <th className="text-left py-3 text-off-white font-semibold">
                  Full <span className="text-orange ml-1">R$5.300</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal/20">
              <tr>
                <td className="py-3 pr-6 text-off-white/50 align-top">Queries</td>
                <td className="py-3 pr-6 text-off-white/80 align-top">5 queries em 4 plataformas</td>
                <td className="py-3 text-off-white/80 align-top">5 queries + frente do concorrente</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/50 align-top">Respostas</td>
                <td className="py-3 pr-6 text-off-white/80 align-top">60 respostas coletadas e classificadas</td>
                <td className="py-3 text-off-white/80 align-top">60 + 200 respostas adicionais</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/50 align-top">Entrega</td>
                <td className="py-3 pr-6 text-off-white/80 align-top">Relatório de 2 páginas com evidência literal</td>
                <td className="py-3 text-off-white/80 align-top">
                  Tudo do Fast + gap nomeado com causa específica + 3 ações customizadas + âncora financeira
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/50 align-top">Sessão</td>
                <td className="py-3 pr-6 text-off-white/80 align-top">Leitura conjunta 45 minutos</td>
                <td className="py-3 text-off-white/80 align-top">Leitura conjunta 60 minutos</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/50 align-top">Ciclo</td>
                <td className="py-3 pr-6 text-off-white/80 align-top">Entrega única</td>
                <td className="py-3 text-off-white/80 align-top">Reexecução metodológica em 60 dias</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/50 align-top">Prazo</td>
                <td className="py-3 pr-6 text-off-white/80 align-top">Até 5 dias úteis</td>
                <td className="py-3 text-off-white/80 align-top">Até 5 dias úteis</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Vagas + CTA */}
        <p className="text-off-white/70 font-body text-sm mb-6">
          <strong className="text-off-white">{VAGAS_OXIGENIO} vagas disponíveis.</strong>
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <CTAButton variant="primary" href="#aplicar">
            Aplicar agora
          </CTAButton>
          <p className="text-off-white/50 font-body text-sm">
            5 dias úteis para o relatório. Respondemos em até 24h.
          </p>
        </div>
      </Section>

      {/* OXIGENIO-3 · O que é e o que não é */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que é e o que não é
        </h2>
        <div className="max-w-3xl space-y-6">
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-3">
              O que é
            </p>
            <p className="text-off-white/85 font-body leading-relaxed mb-3">
              O Oxigênio IA Search é um diagnóstico de presença em motores de
              IA. Rodamos queries específicas do seu setor em ChatGPT, Claude,
              Gemini e Perplexity, coletamos as respostas, classificamos o que
              aparece sobre você, sobre seus concorrentes e sobre o seu setor, e
              entregamos evidência literal com próximos passos priorizados.
            </p>
            <p className="text-off-white/85 font-body leading-relaxed">
              <strong className="text-off-white">O que o cliente recebe ao final:</strong>{" "}
              sabe como aparece hoje, quem está no mesmo espaço semântico, onde
              está o gap específico, e o que fazer primeiro.
            </p>
          </div>
          <div className="border-l-2 border-off-white/20 pl-6">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-3">
              O que não é
            </p>
            <p className="text-off-white/60 font-body leading-relaxed">
              Oxigênio IA Search não é SEO técnico, não é gestão de mídia paga,
              não é criação de conteúdo e não é gestão de redes sociais. É
              diagnóstico. O que o cliente faz com o diagnóstico é decisão dele.
            </p>
          </div>
        </div>
      </Section>

      {/* OXIGENIO-4 · Fast vs Full: quando cada um faz sentido */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-4">
          Fast ou Full: quando cada um faz sentido
        </h2>
        <p className="text-off-white/70 font-body mb-8 max-w-2xl">
          O Fast responde como a empresa aparece hoje. O Full responde por que
          aparece pior, aparece errado ou não aparece diante de um concorrente
          identificado, e o que mudar primeiro.
        </p>
        <div className="overflow-x-auto max-w-3xl mb-6">
          <table className="w-full text-sm font-body border-collapse">
            <thead>
              <tr className="border-b border-teal/40">
                <th className="text-left py-3 pr-6 text-off-white/50 font-semibold">Pergunta</th>
                <th className="text-left py-3 pr-6 text-off-white font-semibold">Fast</th>
                <th className="text-left py-3 text-off-white font-semibold">Full</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal/20">
              <tr>
                <td className="py-3 pr-6 text-off-white/75 align-top">Você quer saber como aparece hoje?</td>
                <td className="py-3 pr-6 text-orange font-semibold align-top">✓</td>
                <td className="py-3 text-orange font-semibold align-top">✓</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/75 align-top">Há um concorrente específico para comparar?</td>
                <td className="py-3 pr-6 text-off-white/40 align-top">Não inclui</td>
                <td className="py-3 text-orange font-semibold align-top">✓</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/75 align-top">Quer causa nomeada do gap, não só o gap?</td>
                <td className="py-3 pr-6 text-off-white/40 align-top">Não inclui</td>
                <td className="py-3 text-orange font-semibold align-top">✓</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/75 align-top">Quer reexecução metodológica em 60 dias?</td>
                <td className="py-3 pr-6 text-off-white/40 align-top">Não inclui</td>
                <td className="py-3 text-orange font-semibold align-top">✓</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/75 align-top">Quer âncora financeira do impacto?</td>
                <td className="py-3 pr-6 text-off-white/40 align-top">Não inclui</td>
                <td className="py-3 text-orange font-semibold align-top">✓</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/75 align-top">Budget disponível?</td>
                <td className="py-3 pr-6 text-off-white font-semibold align-top">R$3.500</td>
                <td className="py-3 text-off-white font-semibold align-top">R$5.300</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-off-white/60 font-body text-sm max-w-xl">
          <strong className="text-off-white/80">Dúvida entre Fast e Full?</strong>{" "}
          Diga no formulário. Na confirmação, indicamos qual faz mais sentido para o seu contexto.
        </p>
      </Section>

      {/* OXIGENIO-5 · Para quem é */}
      <Section variant="highlighted" paddingY="lg">
        <TargetProfile
          heading="Para quem faz sentido aplicar"
          items={[
            "Decisor que desconfia que sua empresa não aparece onde o cliente pesquisa antes de pedir reunião, mas não tem evidência concreta disso.",
            "Empresa que investiu em conteúdo, site ou presença digital e não converteu como esperava. Antes de gastar mais, quer entender o que os motores de IA leem do que já existe.",
            "Empresa em movimento (rebrand, novo produto, expansão de setor) que quer saber de qual ponto está partindo nos motores de IA antes de agir.",
          ]}
          notForItems={[
            "Empresas sem ICP minimamente definido.",
            "Negócios sem presença pública mínima.",
            "Quem busca SEO técnico, mídia paga ou gestão de redes sociais.",
            "Quem não pretende executar nenhuma ação depois do diagnóstico.",
          ]}
        />
      </Section>

      {/* OXIGENIO-6 · Vídeo de método (D4) */}
      <Section variant="default" paddingY="lg" id="metodo">
        {FLAGS.D4_ATIVO ? (
          <>
            <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
              Como funciona, em 5 minutos
            </h2>
            <p className="text-off-white/70 font-body mb-8 max-w-2xl">
              Gabriela Aguiar, CEO da Pira Labs, mostra como o Oxigênio IA
              Search é executado, com exemplo ilustrativo.
            </p>
            <div className="bg-teal/20 border border-teal/40 rounded-lg aspect-video max-w-3xl flex items-center justify-center">
              <p className="text-off-white/40 font-body text-sm">
                [INSERIR_EMBED_QUANDO_DISPONÍVEL]
              </p>
            </div>
          </>
        ) : (
          <div className="border border-dashed border-off-white/20 rounded-lg p-8 max-w-2xl">
            <p className="text-off-white/50 font-body text-sm leading-relaxed">
              O vídeo de método está sendo gravado. Abaixo, a descrição completa
              do escopo e do processo.
            </p>
          </div>
        )}
      </Section>

      {/* OXIGENIO-7 · Como funciona */}
      <Section variant="highlighted" paddingY="lg">
        <div className="max-w-2xl">
          <ProcessSteps heading="Como funciona" steps={passos} />
        </div>
      </Section>

      {/* OXIGENIO-8 · Quem conduz */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Quem conduz
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start max-w-3xl">
          <div className="shrink-0">
            <Image
              src="/nos.png"
              alt="Gabriela Aguiar e Celso Gama, cofundadores da Pira Labs"
              width={200}
              height={133}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-off-white/85 font-body leading-relaxed">
              O Oxigênio IA Search é executado por Gabriela Aguiar e Celso Gama.
              Não há equipe intermediária. Quem apresenta na confirmação é quem
              analisa e quem entrega.
            </p>
            <p className="text-off-white/85 font-body leading-relaxed">
              Gabriela conduz a leitura institucional e de presença, com
              Universal AI Foundational Modules (MIT, em andamento, 2026). Celso
              conduz a leitura de governança e exposição operacional, com Applied
              AI Certificate Program (MIT, em andamento, 2026).
            </p>
            <CTAButton variant="tertiary" href="/sobre">
              Conhecer Gabriela e Celso
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* OXIGENIO-8b · Prova da auto-aplicação (D1) */}
      {FLAGS.D1_ATIVO ? (
        <Section variant="highlighted" paddingY="lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
            Rodamos o Oxigênio em nós antes de oferecer
          </h2>
          <div className="max-w-3xl space-y-4">
            <p className="text-off-white/85 font-body leading-relaxed">
              Antes de cobrar R$3.500 por um Fast, rodamos o método na própria
              Pira Labs. Em parte porque é o que faz sentido. Em parte porque é
              o que separa método validado de método teórico.
            </p>
            <div className="bg-teal/20 border border-teal/40 rounded-lg p-6">
              <p className="text-off-white/40 font-body text-sm">
                [PREENCHER APÓS AUTO-APLICAÇÃO CONCLUÍDA]
              </p>
            </div>
          </div>
        </Section>
      ) : null}

      {/* OXIGENIO-9 · CTA de aplicação */}
      <Section variant="dark" paddingY="lg" id="aplicar">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          Aplicar para o Oxigênio IA Search
        </h2>

        {/* Tabela resumo */}
        <div className="overflow-x-auto max-w-lg mb-8">
          <table className="w-full text-sm font-body border-collapse">
            <thead>
              <tr className="border-b border-teal/40">
                <th className="text-left py-3 pr-6 text-off-white/40 font-semibold w-40"></th>
                <th className="text-left py-3 pr-6 text-off-white font-semibold">Fast</th>
                <th className="text-left py-3 text-off-white font-semibold">Full</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal/20">
              <tr>
                <td className="py-3 pr-6 text-off-white/50">Preço</td>
                <td className="py-3 pr-6 text-orange font-semibold">R$3.500</td>
                <td className="py-3 text-orange font-semibold">R$5.300</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/50">Vagas disponíveis</td>
                <td className="py-3 pr-6 text-off-white font-semibold">{VAGAS_OXIGENIO}</td>
                <td className="py-3 text-off-white font-semibold">{VAGAS_OXIGENIO}</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-off-white/50">Prazo</td>
                <td className="py-3 pr-6 text-off-white">até 5 dias úteis</td>
                <td className="py-3 text-off-white">até 5 dias úteis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-off-white/70 font-body mb-6 max-w-xl">
          Quanto mais contexto você compartilhar na aplicação, mais útil é a
          primeira resposta. Se o seu caso não encaixa no escopo, dizemos antes
          de qualquer cobrança.
        </p>

        <CTAButton variant="primary" href={applyUrl}>
          Aplicar agora
        </CTAButton>
        <p className="mt-4 text-off-white/50 font-body text-sm">
          5 dias úteis para o relatório. Respondemos em até 24h.
        </p>

        {/* Três caminhos pós-diagnóstico */}
        <div className="mt-12 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-6">
            Após a sessão: os três caminhos
          </p>
          <p className="text-off-white/70 font-body text-sm mb-6">
            O diagnóstico revela onde a empresa está. O próximo passo depende do
            que revelar:
          </p>
          <div className="space-y-5">
            <div className="border-l-2 border-orange/40 pl-5">
              <p className="text-off-white font-body font-semibold text-sm mb-1">
                Problema de execução específica
              </p>
              <p className="text-off-white/65 font-body text-sm leading-relaxed">
                O gap está identificado e o que falta é ajuste de posicionamento
                e conteúdo. O próximo passo é o TRANSPIRA com foco em GEO/AEO.
              </p>
            </div>
            <div className="border-l-2 border-orange/40 pl-5">
              <p className="text-off-white font-body font-semibold text-sm mb-1">
                Empresa invisível e sem clareza de por onde começar
              </p>
              <p className="text-off-white/65 font-body text-sm leading-relaxed">
                O gap de IA Search é sinal de problema mais amplo de modelo,
                posicionamento ou operação. O próximo passo é o INSPIRA completo.
              </p>
            </div>
            <div className="border-l-2 border-orange/40 pl-5">
              <p className="text-off-white font-body font-semibold text-sm mb-1">
                Boa presença e clareza de ação
              </p>
              <p className="text-off-white/65 font-body text-sm leading-relaxed">
                O diagnóstico confirmou o que o cliente já sentia. O próximo
                passo é FAÍSCA ou conexão com a rede de referência da Pira Labs.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* OXIGENIO-10 · FAQ */}
      <Section variant="highlighted" paddingY="lg">
        <FAQ heading="Perguntas frequentes" items={faqItems} />
      </Section>
    </>
  );
}
