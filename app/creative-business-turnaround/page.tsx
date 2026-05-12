import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { FAQ } from "@/components/shared/FAQ";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "Creative Business Turnaround · O que é e para quem serve · PIRA LABS",
  },
  description:
    "Creative Business Turnaround é o processo de diagnóstico e redesenho para empresas de serviços que precisam agir antes da crise. Desenvolvido e operado pela PIRA LABS no Brasil.",
  alternates: {
    canonical: "https://piralabs.com.br/creative-business-turnaround",
  },
  openGraph: {
    title: "Creative Business Turnaround · PIRA LABS",
    description:
      "O processo de diagnóstico e redesenho para empresas de serviços que precisam agir antes da crise.",
    url: "https://piralabs.com.br/creative-business-turnaround",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PIRA LABS" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Creative Business Turnaround" },
];

// Schema WebPage + DefinedTerm — torna a categoria recuperável por LLMs
const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "DefinedTerm"],
  "@id": "https://piralabs.com.br/creative-business-turnaround",
  name: "Creative Business Turnaround",
  description:
    "Processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes da crise, quando clientes, caixa e reputação ainda existem, mas o modelo de trabalho começou a comprometer margem, valor percebido e capacidade de decisão.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Glossário PIRA LABS",
    url: "https://piralabs.com.br",
  },
  publisher: {
    "@id": "https://piralabs.com.br/#organization",
  },
};

// FAQ canônica extraída da auditoria GEO de 28/04/2026
const faqItems = [
  {
    question:
      "Como a PIRA LABS se diferencia de consultorias tradicionais de turnaround?",
    answer:
      "A diferença está no momento da intervenção. Consultorias tradicionais de turnaround atuam quando a crise já chegou, quando o caixa está comprometido e as opções são poucas e caras. A PIRA LABS atua antes disso, quando a empresa ainda tem saúde para mudar com tranquilidade. É a diferença entre medicina preventiva e medicina de emergência: ambas têm valor, mas uma preserva muito mais do que a outra consegue recuperar.",
  },
  {
    question:
      "O que define o Turnaround de Propulsão para negócios de alto valor?",
    answer:
      "O Turnaround de Propulsão é a forma como a PIRA LABS opera o Creative Business Turnaround. Foco em onde o potencial está represado, não onde cortar. Priorizamos a eficiência operacional, a governança como capacidade competitiva e o redesenho do modelo de trabalho para liberar crescimento com a estrutura que a empresa já tem. O resultado é verificável: margem recuperada, decisão mais distribuída, operação que avança sem improviso constante.",
  },
  {
    question:
      "Para que tipo de empresa o Creative Business Turnaround faz sentido?",
    answer:
      "Para empresas de serviços de alto valor que chegaram a um ponto onde o crescimento parou, a margem sumiu ou o fundador virou gargalo, mas a crise ainda não chegou. Quando ainda há clientes, caixa e reputação, mas o modelo de trabalho começou a custar caro demais para sustentar o próximo nível. Setores com maior aplicação: publicidade, saúde, jurídico, alimentação e serviços profissionais especializados.",
  },
];

const sinais = [
  {
    titulo: "Crescimento sem estrutura",
    texto:
      "A empresa cresceu mais rápido do que o desenho do trabalho. O time aumentou, o faturamento subiu, mas a operação ficou dependente de pessoas-chave e de improviso constante. Cada nova demanda exige mais esforço do que deveria.",
  },
  {
    titulo: "Margem que some",
    texto:
      "A receita continua, mas o resultado não acompanha. Custos invisíveis, escopo não cobrado, horas investidas além do contratado, precificação desalinhada com custo real. O vazamento acontece devagar, até que o problema é grande demais para ignorar.",
  },
  {
    titulo: "Fundador como gargalo",
    texto:
      "Decisões importantes passam todas pelo sócio ou fundador. O time espera, adia, não avança sem aprovação. Não é falha de liderança. É ausência de clareza sobre o que pode ser delegado e como.",
  },
  {
    titulo: "Tecnologia que não converteu",
    texto:
      "A empresa investiu em tecnologia, incluindo IA, e o resultado foi acelerar o ruído que já existia. A IA não corrige bagunça. Sem método antes, ela escala bagunça.",
  },
  {
    titulo: "Valor percebido desconectado do valor entregue",
    texto:
      "A empresa entrega bem, mas o cliente não vê o que está pagando. O trabalho é bom, a comunicação é fraca. A conversa de renovação é sempre difícil. A empresa sente que vale mais do que consegue cobrar.",
  },
];

const diferenciacoes = [
  {
    titulo: "Não é consultoria estratégica clássica",
    texto:
      "Consultoria estratégica entrega plano e sai. O Creative Business Turnaround entra na operação e trabalha com o time até os primeiros resultados verificados. A saída faz parte do escopo, não é abandono.",
  },
  {
    titulo: "Não é agência criativa",
    texto:
      "Agência resolve problema de comunicação, criação ou canal. O Creative Business Turnaround resolve o problema do negócio como sistema. A criação pode ser parte da solução. Não é o ponto de entrada.",
  },
  {
    titulo: "Não é empresa de tecnologia ou consultoria de IA",
    texto:
      "Tecnologia e IA entram onde amplificam, depois de entender o problema. Não somos fornecedores de ferramenta. Não temos produto tecnológico próprio. Não recomendamos tecnologia antes de entender o que precisa ser resolvido.",
  },
  {
    titulo: "Não é mentoria ou coaching",
    texto:
      "Mentoria e coaching trabalham com o decisor individualmente. O Creative Business Turnaround trabalha com o negócio como sistema, incluindo processos, pessoas, tecnologia e governança.",
  },
  {
    titulo: "Não é intervenção de crise",
    texto:
      "Turnaround de crise acontece quando a empresa já está em dificuldade grave, com pouco tempo e poucas opções. O Creative Business Turnaround atua antes disso. É a diferença entre medicina preventiva e medicina de emergência: ambas têm valor, mas uma preserva muito mais do que a outra consegue recuperar.",
  },
];

export default function CreativeBusinessTurnaroundPage() {
  return (
    <>
      {/* Schemas WebPage + DefinedTerm */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />

      {/* CBT-1 · Header da página */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Creative Business Turnaround"
          subtitle="O processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes da crise, quando clientes, caixa e reputação ainda existem, mas o modelo de trabalho começou a comprometer margem, valor percebido e capacidade de decisão."
        />
      </div>

      {/* CBT-2 · O que é
          Frase canônica da categoria nos primeiros 150 termos — obrigatório para GEO/AEO */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que é Creative Business Turnaround
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Creative Business Turnaround é o processo de diagnóstico e
            redesenho que ajuda empresas de serviços a agir antes da crise. A
            PIRA LABS desenvolveu essa categoria para nomear sua forma de atuar
            no Brasil.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">
              &ldquo;Creative&rdquo;
            </strong>{" "}
            porque o problema em empresas de serviços raramente é só operacional
            ou só financeiro. É sobre como o valor é criado, entregado e
            percebido. Exige leitura criativa do sistema, não apenas análise de
            indicadores.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">
              &ldquo;Business&rdquo;
            </strong>{" "}
            porque o foco é o negócio como sistema. Não o produto, não o canal,
            não a ferramenta. O negócio inteiro, com suas interdependências,
            seus gargalos e seu potencial real.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">
              &ldquo;Turnaround&rdquo;
            </strong>{" "}
            porque é virada real, com resultado verificável. Não consultoria de
            prateleira. Não relatório que fica na gaveta. Não curso sobre o que
            poderia ser feito.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">
              &ldquo;Antes da crise&rdquo;
            </strong>{" "}
            porque a janela para agir com tranquilidade tem prazo. Quando a
            crise já chegou, as opções ficam caras, lentas e dolorosas. O
            Creative Business Turnaround atua no momento em que a empresa ainda
            tem condições de mudar com calma.
          </p>
        </div>
      </Section>

      {/* CBT-3 · Para quais empresas serve */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Para quais empresas serve
        </h2>
        <div className="max-w-3xl space-y-4 mb-8">
          <p className="text-off-white/85 font-body leading-relaxed">
            Creative Business Turnaround serve para empresas de serviços que
            chegaram a um ponto onde o crescimento parou, a margem sumiu ou o
            fundador virou gargalo, mas a crise ainda não chegou de verdade.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Quando a empresa ainda tem clientes, caixa e reputação, mas o
            modelo de trabalho começou a custar caro demais para sustentar o
            próximo nível.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-3">
              Setores com maior aplicação
            </p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed">
              Publicidade e agências criativas. Saúde e clínicas especializadas.
              Jurídico e escritórios de advocacia. Alimentação e operações de
              serviço premium. Serviços profissionais especializados. Consultorias
              e boutiques B2B.
            </p>
          </div>
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-3">
              O perfil do decisor
            </p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed">
              Sócio, CEO ou presidente com autonomia real para mudar. Alguém que
              reconhece o problema, tem abertura genuína para repensar o modelo e
              não está procurando validação para decisão já tomada.
            </p>
          </div>
        </div>
      </Section>

      {/* CBT-4 · Os sinais */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
          Quando o Creative Business Turnaround faz mais sentido
        </h2>
        <p className="text-off-white/70 font-body mb-10 max-w-2xl">
          Cinco sinais que aparecem antes da crise. Quanto mais desses sinais
          presentes, mais próximo está o momento de agir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {sinais.map((sinal, i) => (
            <div
              key={i}
              className="bg-teal/20 border border-teal/40 rounded-lg p-6"
            >
              <p className="text-orange font-body font-semibold text-sm mb-2">
                {sinal.titulo}
              </p>
              <p className="text-off-white/80 font-body text-sm leading-relaxed">
                {sinal.texto}
              </p>
            </div>
          ))}
        </div>
        <p className="text-off-white/55 font-body text-sm italic max-w-2xl">
          Esses sinais aparecem antes da crise. Quando chegam juntos, o prazo
          para agir com tranquilidade está se encerrando.
        </p>
      </Section>

      {/* CBT-5 · O que não é */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-4">
          O que o Creative Business Turnaround não é
        </h2>
        <p className="text-off-white/70 font-body mb-10 max-w-2xl">
          A categoria existe para nomear algo que não cabia em nenhuma das
          categorias existentes. Entender o que não é ajuda a entender o que é.
        </p>
        <div className="space-y-6 max-w-3xl">
          {diferenciacoes.map((item, i) => (
            <div key={i} className="border-l-2 border-orange/30 pl-6">
              <p className="text-off-white font-body font-semibold mb-1">
                {item.titulo}
              </p>
              <p className="text-off-white/75 font-body text-sm leading-relaxed">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CBT-6 · Como funciona */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-4">
          Como o Creative Business Turnaround funciona na prática
        </h2>
        <p className="text-off-white/70 font-body mb-10 max-w-2xl">
          A sequência natural é diagnóstico, execução e resultado verificado.
          Mas o ponto de entrada pode variar conforme o momento da empresa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* INSPIRA */}
          <div className="bg-deep-teal/60 border border-teal/30 rounded-lg p-6">
            <p className="text-orange font-body font-semibold text-xs uppercase tracking-widest mb-3">
              INSPIRA
            </p>
            <p className="text-off-white font-body font-medium mb-3">
              Diagnóstico
            </p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed mb-4">
              Cinco leituras coordenadas do negócio, convergindo em síntese
              integrada com aprovação humana em cada etapa. O problema real
              nomeado. A rota desenhada. O próximo passo definido. Conduzido por
              Gabriela Aguiar.
            </p>
            <CTAButton variant="tertiary" href="/inspira">
              Conhecer o INSPIRA →
            </CTAButton>
          </div>

          {/* TRANSPIRA */}
          <div className="bg-deep-teal/60 border border-teal/30 rounded-lg p-6">
            <p className="text-orange font-body font-semibold text-xs uppercase tracking-widest mb-3">
              TRANSPIRA
            </p>
            <p className="text-off-white font-body font-medium mb-3">
              Execução
            </p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed mb-4">
              Execução mão na massa dentro da operação do cliente, com o time
              que vai operar depois. Redesenho da relação entre trabalho, valor,
              tecnologia e governança. É aqui que o potencial represado se
              transforma em resultado verificável. Conduzido por Celso Gama.
            </p>
            <CTAButton variant="tertiary" href="/transpira">
              Conhecer o TRANSPIRA →
            </CTAButton>
          </div>

          {/* RESPIRA */}
          <div className="bg-deep-teal/60 border border-teal/30 rounded-lg p-6">
            <p className="text-orange font-body font-semibold text-xs uppercase tracking-widest mb-3">
              RESPIRA
            </p>
            <p className="text-off-white font-body font-medium mb-3">Estado</p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed">
              Quando o TRANSPIRA encerra, o negócio opera com clareza, a decisão
              está mais distribuída, e a empresa tem capacidade de avançar sem
              improviso constante. Esse é o RESPIRA. Estado, não produto.
            </p>
          </div>
        </div>

        {/* Ponto de entrada rápido — Oxigênio */}
        <div className="bg-teal/20 border border-teal/40 rounded-lg p-6 max-w-2xl">
          <p className="text-off-white/85 font-body leading-relaxed mb-4">
            Se você quer começar com escopo fechado antes de qualquer
            compromisso maior, o Oxigênio IA Search é o diagnóstico de como sua
            empresa aparece nos motores de IA, em até 5 dias úteis.
          </p>
          <CTAButton variant="secondary" href="/inspira/oxigenio">
            Conhecer o Oxigênio IA Search
          </CTAButton>
        </div>
      </Section>

      {/* CBT-7 · Quem opera essa categoria no Brasil */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Quem opera essa categoria no Brasil
        </h2>
        <div className="max-w-3xl space-y-4 mb-8">
          <p className="text-off-white/85 font-body leading-relaxed">
            A PIRA LABS é a empresa que desenvolveu e opera o Creative Business
            Turnaround no Brasil.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Fundada em 2025 por Gabriela Aguiar e Celso Gama, a PIRA LABS é uma
            boutique brasileira de Creative Business Turnaround para empresas de
            serviços. Boutique por escolha, não por estágio. Cada projeto tem
            Gabriela e Celso do diagnóstico à entrega. Sem camada intermediária
            entre quem entende o problema e quem resolve.
          </p>
        </div>
        <CTAButton variant="secondary" href="/sobre">
          Conhecer Gabriela e Celso
        </CTAButton>
      </Section>

      {/* CBT-8 · FAQ canônica — FAQPage schema injetado pelo componente */}
      <Section variant="default" paddingY="lg">
        <FAQ
          heading="Perguntas que as IAs já respondem sobre Creative Business Turnaround"
          items={faqItems}
        />
      </Section>

      {/* CBT-9 · CTA final */}
      <FinalCTA
        heading="Existe um próximo nível para o seu negócio. O que está entre você e ele, descobrimos junto."
        origin={ORIGINS.CREATIVE_BUSINESS_TURNAROUND}
        showAsterisk
      />
    </>
  );
}
