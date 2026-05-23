import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { FAQ } from "@/components/shared/FAQ";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS, FLAGS, VAGAS_OXIGENIO, FILL_OUT_FORM_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Oxigênio IA Search · Diagnóstico de presença em IA · PIRA LABS",
  },
  description:
    "Diagnóstico de como sua empresa aparece nos motores de IA: ChatGPT, Claude, Gemini e Perplexity. Prazo: 5 dias úteis. Fast R$4.400 | Full R$8.900.",
  alternates: {
    canonical: "https://piralabs.com.br/inspira/oxigenio",
  },
  openGraph: {
    title: "Oxigênio IA Search · PIRA LABS",
    description:
      "Diagnóstico de presença nos motores de IA. Fast R$4.400 | Full R$8.900. Entrega em 5 dias úteis.",
    url: "https://piralabs.com.br/inspira/oxigenio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PIRA LABS" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Inspira", href: "/inspira" },
  { label: "Oxigênio IA Search" },
];

const entregas = [
  {
    title: "Análise da sua presença nos quatro LLMs principais",
    description:
      "ChatGPT, Claude, Gemini e Perplexity. Como sua empresa aparece quando perguntada sobre o setor, sobre a categoria onde ela compete e sobre nomes específicos. O que aparece, o que não aparece e o que aparece errado.",
  },
  {
    title: "Mapa de gaps semânticos",
    description:
      "Onde sua empresa deveria aparecer e não aparece. Quais termos de busca relevantes para o seu negócio estão sendo respondidos sem você. Por que isso acontece e como isso muda.",
  },
  {
    title: "Lista priorizada de correções",
    description:
      "Tudo organizado por urgência e por esforço. Onde você ganha mais com menos. O que precisa ser corrigido com cuidado e em qual ordem.",
  },
  {
    title: "Recomendações de quick wins",
    description:
      "Ações específicas que você pode executar nos próximos 30 dias para começar a corrigir. Sem necessidade de equipe técnica especializada para a maioria delas.",
  },
  {
    title: "Sessão de leitura conjunta de 30 a 45 minutos",
    description:
      "Encontro online com Gabriela e Celso para apresentar o diagnóstico, responder perguntas e definir o que faz sentido para você como próximo passo.",
  },
];

const passos = [
  {
    title: "Aplicação online",
    description:
      "Você preenche um formulário de aplicação com informações básicas sobre a empresa, o setor, o momento. Leva entre 5 e 10 minutos.",
  },
  {
    title: "Confirmação e onboarding em até 24h",
    description:
      "Se o seu caso encaixa no escopo, enviamos confirmação, link de pagamento e um briefing curto para você preencher com detalhes do contexto. Se não encaixa, dizemos antes de começar.",
  },
  {
    title: "Análise rodando",
    description:
      "A partir do recebimento do briefing preenchido, a PIRA LABS executa a análise. 1 aplicação fechada: entrega em até 36 horas. Até 3 aplicações: entrega em até 72 horas. Até 5 aplicações: entrega em até 5 dias úteis.",
  },
  {
    title: "Sessão de leitura conjunta",
    description:
      "Encontro de 30 a 45 minutos para apresentar o diagnóstico ao decisor. Online, com Gabriela e Celso. Pode incluir até dois convidados pelo cliente, conforme acordado na confirmação.",
  },
];

const faqItems = [
  {
    question: "Por que não pesquiso por conta própria?",
    answer:
      "Você pode pesquisar. Muitos decisores fazem isso e descobrem alguns achados rápidos. O que o Oxigênio entrega é diferente em três pontos: o cruzamento entre quatro LLMs com queries específicas do seu setor, a leitura interpretativa do que cada padrão de resposta significa, e a priorização de correções por esforço versus impacto. A diferença entre rodar uma busca em ChatGPT e fazer um diagnóstico de presença em IA é parecida com a diferença entre olhar para um exame e ter um médico interpretando o exame.",
  },
  {
    question: "Como sei que funciona se a PIRA LABS é nova?",
    answer:
      "Honestidade primeiro: a PIRA LABS é nova como empresa, fundada em 2025. O método do INSPIRA, do qual o Oxigênio é subproduto, foi desenvolvido ao longo de mais de duas décadas de operação real em empresas de serviços. As credenciais de quem conduz estão na página /sobre, com casos verificáveis. Para o Oxigênio especificamente, rodamos o método na própria PIRA antes de oferecer. Os achados estão sendo publicados como parte da campanha.",
  },
  {
    question: "Vocês conhecem meu setor?",
    answer:
      "Empresas de serviços com foco maior em publicidade, saúde, jurídico, alimentação e serviços profissionais especializados. Se o seu setor é um desses, há repertório direto. Se não é, o método se aplica, mas pode haver limitação de comparação setorial específica. Em caso de dúvida, conte na aplicação qual é o seu contexto e respondemos honestamente antes de você pagar.",
  },
  {
    question: "Por que tem prazo escalonado em vez de 72 horas fixas para todos?",
    answer:
      "Porque vocês são duas pessoas conduzindo a análise inteira sem equipe intermediária, e fazer 5 análises em 72 horas comprometeria a qualidade. O escalonamento garante que cada cliente receba o mesmo nível de atenção, na ordem em que aplicou.",
  },
  {
    question: "Posso aplicar e desistir antes de pagar?",
    answer:
      "Pode. A aplicação não cria obrigação. Avaliamos se o caso encaixa no escopo, conversamos com você se for o caso, e só seguimos para pagamento após sua confirmação. Se em qualquer ponto antes do pagamento você quiser parar, é só dizer.",
  },
  {
    question: "O que acontece se eu não gostar do resultado?",
    answer:
      "Antes do encontro de leitura conjunta, você recebe o relatório por escrito. Se algo no diagnóstico não fizer sentido para você, abrimos espaço na sessão para discutir, refinar interpretação e ajustar onde for justo. Não trabalhamos com garantia de satisfação genérica. Trabalhamos com diagnóstico honesto e disposição para ouvir crítica do cliente.",
  },
  {
    question: "Vocês assinam NDA?",
    answer:
      "Sim. Acordo de confidencialidade assinado antes de qualquer troca de informação ou acesso a dados da empresa. NDA é base canônica de todo trabalho da PIRA LABS, independente do produto. Você recebe o documento antes de pagar.",
  },
  {
    question: "Vocês compartilham os dados da minha empresa com outros clientes ou com terceiros?",
    answer:
      "Não. Cada análise é confidencial entre o cliente, a Gabriela e o Celso. Quando publicamos achados gerais sobre o que IA Search está fazendo no mercado, é a partir de padrões agregados, nunca de empresa específica sem autorização explícita por escrito.",
  },
  {
    question: "O Oxigênio leva ao INSPIRA completo?",
    answer:
      "Em alguns casos sim, em alguns casos não. O Oxigênio resolve uma pergunta específica (como sua empresa aparece nos motores de IA). O INSPIRA completo é diagnóstico de cinco áreas do negócio. Se na sessão de leitura conjunta surgir indicação de que faz sentido aprofundar, conversamos sobre INSPIRA. Não há obrigação nem desconto vinculado.",
  },
];

// Service schema — datas de validade da primeira rodada precisam ser preenchidas antes do deploy.
// Atualizar validFrom e validThrough conforme data de início e fim da campanha.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/inspira/oxigenio#service",
  name: "Oxigênio IA Search",
  description:
    "Diagnóstico de como empresas de serviços aparecem nos motores de inteligência artificial. Subproduto do INSPIRA da PIRA LABS.",
  provider: {
    "@id": "https://piralabs.com.br/#organization",
  },
  serviceType: "Análise de presença em IA Search",
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Decisores de empresas de serviços (publicidade, saúde, jurídico, alimentação, serviços profissionais)",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Oxigênio IA Search · Primeira rodada · 5 vagas para fundadores",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "6200",
        priceCurrency: "BRL",
      },
      availability: "https://schema.org/LimitedAvailability",
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        value: 5,
      },
    },
    {
      "@type": "Offer",
      name: "Oxigênio IA Search · Preço regular",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "9800",
        priceCurrency: "BRL",
      },
      availability: "https://schema.org/InStock",
    },
  ],
};

export default function OxigenioPage() {
  const applyUrl = `${FILL_OUT_FORM_URL}?origem=${ORIGINS.OXIGENIO}`;

  return (
    <>
      {/* Schema Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* OXIGENIO-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Oxigênio IA Search"
          subtitle="Diagnóstico de como sua empresa de serviços aparece nos motores de IA, antes que isso vire decisão de cliente que você nem viu chegando."
        />
      </div>

      {/* OXIGENIO-2 · Hero da oferta */}
      <Section variant="default" paddingY="lg">
        <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-4">
          Subproduto do INSPIRA. Escopo fechado. Prazo curto. Preço público.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6 max-w-3xl">
          Você sabe como sua empresa aparece quando alguém pergunta para uma IA
          sobre o seu setor?
        </h2>
        <p className="text-off-white/80 font-body leading-relaxed max-w-3xl mb-10">
          Decisores estão fazendo perguntas para IAs antes de pedir reunião.
          Concorrentes estão sendo recomendados ou descartados em conversas que
          sua empresa não vê acontecer. O Oxigênio IA Search é o diagnóstico de
          como sua presença chega nesses motores, e o que precisa mudar para
          chegar como deveria.
        </p>

        {/* Bloco de oferta */}
        <div className="bg-teal/20 border border-teal/40 rounded-lg p-8 max-w-lg mb-10">
          <div className="space-y-4">
            <div className="flex justify-between items-start border-b border-off-white/10 pb-4">
              <span className="text-off-white/60 font-body text-sm">
                Investimento · primeira rodada
              </span>
              <div className="text-right">
                <p className="font-body text-sm text-off-white/40 line-through">
                  R$9.800
                </p>
                <p className="font-display text-2xl text-peach leading-tight">
                  R$6.200
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-off-white/10 pb-4">
              <span className="text-off-white/60 font-body text-sm">
                Vagas nesta rodada
              </span>
              <span className="text-off-white font-body font-semibold text-sm">
                {VAGAS_OXIGENIO} vagas para fundadores
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-off-white/60 font-body text-sm">
                Prazo de entrega
              </span>
              <span className="text-off-white font-body font-semibold text-sm">
                até 5 dias úteis
              </span>
            </div>
          </div>
        </div>

        {/* CTAs hero */}
        <div className="flex flex-wrap gap-4">
          <CTAButton variant="primary" href="#aplicar">
            Aplicar agora
          </CTAButton>
          <CTAButton variant="secondary" href="#metodo">
            Ver como funciona
          </CTAButton>
        </div>
      </Section>

      {/* OXIGENIO-3 · Para quem é */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
          Para quem é o Oxigênio IA Search
        </h2>
        <p className="text-off-white/70 font-body mb-10 max-w-2xl">
          Decisores de empresas de serviços que querem entender como a marca
          chega nos motores de IA antes de tomar decisão maior.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            {
              titulo: "Você desconfia que está perdendo conversas que nem chegam até você",
              texto:
                "Cliente potencial pergunta para uma IA \"qual a melhor empresa de [seu setor] em [sua região]\" e o resultado define quem é convidado para reunião. Se sua empresa não aparece, a conversa termina antes de começar.",
            },
            {
              titulo: "Você investiu em conteúdo, presença digital ou mídia paga e não converteu como esperava",
              texto:
                "Tem post, tem site, tem LinkedIn, tem alguma mídia. Mas a tradução de visibilidade humana para visibilidade de IA é diferente. O que ranqueia em busca tradicional não é necessariamente o que aparece em motor de IA.",
            },
            {
              titulo: "Você está prestes a fazer movimento maior e quer começar com o terreno mapeado",
              texto:
                "Antes de gastar tempo e capital em mudança grande, vale entender de que ponto você está partindo nos motores de IA. Sair do lugar errado custa mais do que sair do lugar certo.",
            },
          ].map((p) => (
            <div
              key={p.titulo}
              className="bg-ink/40 border border-off-white/10 rounded-lg p-6"
            >
              <p className="text-orange font-body font-semibold text-sm mb-2">
                {p.titulo}
              </p>
              <p className="text-off-white/75 font-body text-sm leading-relaxed">
                {p.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-off-white/20 pl-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-2">
            Quem não deve aplicar
          </p>
          <p className="text-off-white/60 font-body text-sm leading-relaxed mb-2">
            Quem está comparando preço de SEO. O Oxigênio IA Search não é
            serviço de SEO técnico. É diagnóstico de presença em motores de
            inteligência artificial, com leitura de quatro LLMs, mapa de gaps
            semânticos e priorização de correções.
          </p>
          <p className="text-off-white/60 font-body text-sm leading-relaxed">
            Quem espera resultado em LinkedIn ou Google em 5 dias úteis. O
            resultado do Oxigênio é diagnóstico, não execução. A execução é
            decisão sua a partir do diagnóstico.
          </p>
        </div>
      </Section>

      {/* OXIGENIO-4 · Vídeo de método (D4) */}
      <Section variant="default" paddingY="lg" id="metodo">
        {FLAGS.D4_ATIVO ? (
          <>
            <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
              Como funciona, em 5 minutos
            </h2>
            <p className="text-off-white/70 font-body mb-8 max-w-2xl">
              Gabriela Aguiar, CEO da PIRA LABS, mostra como o Oxigênio IA
              Search é executado. O exemplo é ilustrativo, declarado como tal.
            </p>
            {/* Embed vai aqui quando D4 ativo */}
            <div className="bg-teal/20 border border-teal/40 rounded-lg aspect-video max-w-3xl flex items-center justify-center">
              <p className="text-off-white/40 font-body text-sm">
                [INSERIR_EMBED_LOOM_OU_YOUTUBE]
              </p>
            </div>
          </>
        ) : (
          <div className="border border-dashed border-off-white/20 rounded-lg p-8 max-w-2xl">
            <p className="text-off-white/50 font-body text-sm leading-relaxed">
              O vídeo de método está sendo gravado. Em breve, a Gabriela
              apresenta aqui como o Oxigênio IA Search é executado, em até 5
              minutos. Enquanto isso, a página abaixo descreve o escopo
              completo do produto.
            </p>
          </div>
        )}
      </Section>

      {/* OXIGENIO-5 · O que está incluído */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          O que você recebe
        </h2>
        <div className="max-w-2xl">
          <ProcessSteps steps={entregas} />
        </div>

        {/* Fora do escopo */}
        <div className="mt-12 border-l-2 border-off-white/20 pl-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-3">
            O que está fora do escopo
          </p>
          <p className="text-off-white/60 font-body text-sm leading-relaxed mb-2">
            O Oxigênio IA Search é diagnóstico, não execução. Não inclui
            implementação das correções recomendadas, criação de conteúdo,
            otimização técnica do site, gestão de mídia paga ou consultoria de
            SEO tradicional. Quem decide o que fazer com o diagnóstico é você.
          </p>
          <p className="text-off-white/60 font-body text-sm leading-relaxed">
            Se a sua empresa quer apoio na execução depois do Oxigênio,
            conversamos sobre TRANSPIRA ou sobre INSPIRA completo, conforme o
            caso.
          </p>
        </div>
      </Section>

      {/* OXIGENIO-6 · Como funciona */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-2xl">
          <ProcessSteps heading="Como funciona, passo a passo" steps={passos} />
        </div>
      </Section>

      {/* OXIGENIO-7 · Quem conduz */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Quem conduz
        </h2>
        <div className="max-w-3xl space-y-4 mb-8">
          <p className="text-off-white/85 font-body leading-relaxed">
            O Oxigênio IA Search é executado por Gabriela Aguiar e Celso Gama.
            Não há equipe júnior intermediária. Quem você conhece da venda é
            quem analisa e quem entrega.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            A Gabriela conduz a leitura institucional e de presença, com
            Universal AI Foundational Modules pelo MIT e mais de uma década
            dentro dos ecossistemas globais de inovação.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            O Celso conduz a leitura de governança e exposição operacional, com
            mais de 20 anos de operação real em multinacionais e Applied AI
            Certificate Program pelo MIT.
          </p>
        </div>
        <CTAButton variant="tertiary" href="/sobre">
          Conhecer Gabriela e Celso
        </CTAButton>
      </Section>

      {/* OXIGENIO-8 · Prova social do método (D1) */}
      {FLAGS.D1_ATIVO ? (
        <Section variant="default" paddingY="lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
            Rodamos o Oxigênio em nós antes de oferecer
          </h2>
          <div className="max-w-3xl space-y-4">
            <p className="text-off-white/85 font-body leading-relaxed">
              Antes de cobrar R$6.200 por uma análise, rodamos o Oxigênio IA
              Search na própria PIRA LABS. Em parte porque é o que faz sentido
              fazer. Em parte porque é o que diferencia método validado de
              método teórico.
            </p>
            {/* Achados — preencher após auto-aplicação */}
            <div className="bg-teal/20 border border-teal/40 rounded-lg p-6 space-y-4">
              <p className="text-off-white/40 font-body text-sm">
                [PLACEHOLDER — preencher achados após auto-aplicação concluída]
              </p>
            </div>
            <p className="text-off-white/70 font-body text-sm leading-relaxed">
              A PIRA LABS é nova. Os achados acima são o ponto de partida do
              que estamos corrigindo, não o fim do trabalho. O que estamos
              oferecendo aos clientes do Oxigênio é exatamente o método que
              estamos aplicando em nós.
            </p>
          </div>
        </Section>
      ) : null}

      {/* OXIGENIO-9 · FAQ */}
      <Section variant="highlighted" paddingY="lg">
        <FAQ heading="Perguntas frequentes" items={faqItems} />
      </Section>

      {/* OXIGENIO-10 · Oxigênio Pulso (oculto por padrão) */}
      {FLAGS.PULSO_ATIVO ? (
        <Section variant="default" paddingY="lg">
          <div className="bg-teal/20 border border-teal/40 rounded-lg p-8 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold text-off-white mb-4">
              Sem urgência das 5 vagas? Conheça o Oxigênio Pulso.
            </h2>
            <p className="text-off-white/80 font-body leading-relaxed mb-6">
              Se as cinco vagas do Oxigênio IA Search não cabem no seu momento
              agora, o Oxigênio Pulso é uma versão mais curta para quem quer
              começar pelo básico. Diagnóstico simplificado, sem mapa de gaps
              semânticos completo, sem sessão de leitura conjunta. Análise dos
              quatro LLMs e lista de até 10 correções priorizadas.
            </p>
            <div className="space-y-3 mb-6 border-t border-off-white/10 pt-6">
              <div className="flex justify-between">
                <span className="text-off-white/60 font-body text-sm">
                  Investimento
                </span>
                <span className="font-display text-xl text-peach">R$3.500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-off-white/60 font-body text-sm">
                  Prazo de entrega
                </span>
                <span className="text-off-white font-body font-semibold text-sm">
                  até 7 dias úteis
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-off-white/60 font-body text-sm">
                  Vagas
                </span>
                <span className="text-off-white font-body font-semibold text-sm">
                  sem limite na primeira rodada
                </span>
              </div>
            </div>
            <CTAButton variant="primary" href={`${FILL_OUT_FORM_URL}?origem=oxigenio_pulso`}>
              Aplicar para Oxigênio Pulso
            </CTAButton>
          </div>
        </Section>
      ) : null}

      {/* OXIGENIO-11 · CTA final e aplicação */}
      <Section variant="dark" paddingY="lg" id="aplicar">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
          Aplicar para o Oxigênio IA Search
        </h2>

        {/* Recap visual */}
        <div className="bg-teal/20 border border-teal/40 rounded-lg p-6 max-w-lg mb-8">
          <div className="space-y-4">
            <div className="flex justify-between items-start border-b border-off-white/10 pb-4">
              <span className="text-off-white/60 font-body text-sm">
                Investimento · primeira rodada
              </span>
              <div className="text-right">
                <p className="font-body text-sm text-off-white/40 line-through">
                  R$9.800
                </p>
                <p className="font-display text-2xl text-peach leading-tight">
                  R$6.200
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-off-white/10 pb-4">
              <span className="text-off-white/60 font-body text-sm">
                Vagas restantes para fundadores
              </span>
              {/* Atualizar manualmente conforme vagas fecham: 5/5 → 4/5 → ... → "Vagas esgotadas" */}
              <span className="text-off-white font-body font-semibold text-sm">
                {VAGAS_OXIGENIO}/5
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-off-white/10 pb-4">
              <span className="text-off-white/60 font-body text-sm">
                Prazo de entrega
              </span>
              <span className="text-off-white font-body font-semibold text-sm">
                até 5 dias úteis
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-off-white/60 font-body text-sm">
                Próximo passo
              </span>
              <span className="text-off-white font-body font-semibold text-sm">
                aplicação online de 5 a 10 minutos
              </span>
            </div>
          </div>
        </div>

        <p className="text-off-white/70 font-body mb-6 max-w-xl">
          Quanto mais contexto você compartilhar na aplicação, mais útil é a
          primeira resposta. Se o seu caso não encaixa no escopo, dizemos antes
          de começar.
        </p>

        <CTAButton variant="primary" href={applyUrl}>
          Aplicar agora
        </CTAButton>

        <p className="mt-4 text-off-white/50 font-body text-sm">
          Respondemos em até dois dias úteis. A análise começa após a
          confirmação da aplicação e o briefing preenchido.
        </p>

        <p className="mt-8 text-off-white/60 font-body text-sm max-w-2xl leading-relaxed font-display italic">
          O Oxigênio é o ponto de entrada para empresas de serviços que querem
          agir antes da crise. Cinco dias úteis depois, você tem clareza sobre
          como sua presença nos motores de IA está performando, e o que precisa
          mudar para começar a aparecer como deveria.
        </p>
      </Section>
    </>
  );
}
