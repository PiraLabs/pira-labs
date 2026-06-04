export const dynamic = 'force-static';

import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { FAQ } from "@/components/shared/FAQ";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";
import { faqPageSchema } from "@/lib/schemas/service";

export const metadata: Metadata = {
  title: {
    absolute: "Creative Business Turnaround: o que é e quando faz sentido contratar",
  },
  description:
    "Creative Business Turnaround é o processo de diagnóstico e redesenho para empresas de serviços que precisam agir antes que a janela se feche. Operado pela Pira Labs no Brasil.",
  alternates: {
    canonical: "https://piralabs.com.br/creative-business-turnaround",
    languages: {
      "pt-BR": "https://piralabs.com.br/creative-business-turnaround",
      en: "https://piralabs.com.br/en/creative-business-turnaround",
    },
  },
  openGraph: {
    title: "Creative Business Turnaround · Pira Labs",
    description:
      "O processo de diagnóstico e redesenho para empresas de serviços que precisam agir antes que a janela se feche.",
    url: "https://piralabs.com.br/creative-business-turnaround",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
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
  url: "https://piralabs.com.br/creative-business-turnaround",
  name: "Creative Business Turnaround",
  description:
    "Processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes que a janela se feche: quando clientes, caixa e reputação ainda existem, mas o modelo de trabalho começou a comprometer margem, valor percebido e capacidade de decisão.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Glossário Pira Labs",
    url: "https://piralabs.com.br/glossario",
  },
  publisher: {
    "@id": "https://piralabs.com.br/#organization",
  },
  breadcrumb: breadcrumbSchema([
    { name: "Home", url: "https://piralabs.com.br/" },
    { name: "Creative Business Turnaround", url: "https://piralabs.com.br/creative-business-turnaround" },
  ]),
};

const faqItems = [
  {
    question: "O que é Creative Business Turnaround?",
    answer:
      "Creative Business Turnaround é o processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes que a janela se feche: quando clientes, caixa e reputação ainda existem, mas o modelo de trabalho começou a comprometer margem, valor percebido e capacidade de decisão. A Pira Labs nomeou, define e opera o Creative Business Turnaround no Brasil.",
  },
  {
    question: "Qual a diferença entre Creative Business Turnaround e consultoria estratégica?",
    answer:
      "Consultoria estratégica entrega relatório e sai. O Creative Business Turnaround conecta diagnóstico à rota executável e, quando contratado como execução, acompanha até resultado verificado. A diferença central é que o CBT resolve o negócio como sistema, não uma área isolada.",
  },
  {
    question: "Para que tipo de empresa faz sentido o Creative Business Turnaround?",
    answer:
      "Empresas de serviços que chegaram a um ponto onde o crescimento parou, a margem sumiu ou o fundador virou gargalo, mas a crise ainda não chegou de verdade. Setores com maior aplicação: jurídico, comunicação e marketing, consultorias especializadas e educação corporativa.",
  },
];

const faqSchema = faqPageSchema(faqItems);

export default function CreativeBusinessTurnaroundPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* CBT-1 · Header da página */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Creative Business Turnaround"
          subtitle="O processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes que a janela se feche: quando clientes, caixa e reputação ainda existem, mas o modelo de trabalho começou a comprometer margem, valor percebido e capacidade de decisão."
        />
      </div>

      {/* CBT-2 · O que é
          Frase canônica da categoria nos primeiros 150 termos — âncora GEO/AEO obrigatória */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que é Creative Business Turnaround
        </h2>
        <div className="max-w-3xl space-y-4 mb-8">
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">Creative Business Turnaround</strong>{" "}
            é o processo de diagnóstico e redesenho que ajuda empresas de
            serviços a agir antes que a janela se feche.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">&ldquo;Creative&rdquo;</strong>{" "}
            porque o problema em empresas de serviços raramente é só financeiro
            ou operacional. É sobre como o valor é criado, entregado e
            percebido. Exige leitura do sistema inteiro, não apenas análise de
            indicadores.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">&ldquo;Business&rdquo;</strong>{" "}
            porque o foco é o negócio como sistema. Não o produto, não o canal,
            não a ferramenta. O negócio inteiro, com suas interdependências,
            seus gargalos e seu potencial represado.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">&ldquo;Turnaround&rdquo;</strong>{" "}
            porque é virada real com resultado verificável. Não relatório de
            prateleira. Não plano que pressupõe implementação por conta própria.
            Virada. O negócio estava de uma forma. Passou a ser de outra. A
            diferença é mensurável.
          </p>
        </div>
        <div className="bg-teal/20 border border-teal/40 rounded-lg p-6 max-w-3xl">
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white font-semibold">A Pira Labs atua antes:</strong>{" "}
            quando a empresa ainda tem clientes, caixa e reputação, mas o modelo
            de trabalho começou a custar caro demais. O nome veio de fora. A
            alma, o método e o recorte são da Pira.
          </p>
        </div>
      </Section>

      {/* CBT-2B · Turnaround tradicional vs Creative Business Turnaround */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-4">
          Turnaround tradicional vs Creative Business Turnaround
        </h2>
        <p className="text-off-white/70 font-body mb-8 max-w-2xl">
          A diferença central é o momento de entrada: o turnaround tradicional
          atua na crise, quando as opções já estão reduzidas. O Creative
          Business Turnaround atua antes, quando a empresa ainda tem clientes,
          caixa e reputação para agir com clareza.
        </p>
        <div className="overflow-x-auto max-w-4xl">
          <table className="w-full text-sm font-body border-collapse">
            <thead>
              <tr className="border-b border-teal/40">
                <th className="text-left py-3 pr-6 text-orange font-semibold uppercase tracking-widest text-xs w-40">
                  Dimensão
                </th>
                <th className="text-left py-3 pr-6 text-off-white/60 font-semibold">
                  Turnaround tradicional
                </th>
                <th className="text-left py-3 text-orange font-semibold">
                  Creative Business Turnaround
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal/20">
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">Quando entra</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">Na crise: quando o fogo já começou</td>
                <td className="py-4 text-off-white align-top">Antes: quando os sinais aparecem</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">Contexto</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">Empresa com caixa comprometido</td>
                <td className="py-4 text-off-white align-top">Empresa com clientes, caixa e reputação</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">Objetivo</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">Estabilizar e sobreviver</td>
                <td className="py-4 text-off-white align-top">Redesenhar e avançar</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">Foco</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">Corte e reestruturação financeira</td>
                <td className="py-4 text-off-white align-top">Trabalho, valor, tecnologia e governança</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">Custo da inação</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">Já alto: opções reduzidas</td>
                <td className="py-4 text-off-white align-top">Baixo agora, alto se esperar</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white/60 font-semibold align-top">Opções disponíveis</td>
                <td className="py-4 pr-6 text-off-white/75 align-top">Limitadas pela urgência</td>
                <td className="py-4 text-off-white align-top">Amplas: janela ainda aberta</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* CBT-3 · Para quais empresas serve */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Para quais empresas serve
        </h2>
        <div className="max-w-3xl space-y-4 mb-8">
          <p className="text-off-white/85 font-body leading-relaxed">
            Creative Business Turnaround serve para empresas de serviços que
            chegaram a um ponto onde o crescimento parou, a margem sumiu ou o
            fundador virou gargalo, mas a crise ainda não chegou de verdade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-3">
              Setores com maior aplicação
            </p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed">
              Jurídico, comunicação e marketing, consultorias especializadas e
              educação corporativa. Expansão natural: saúde, RH, engenharia,
              arquitetura e outros serviços profissionais intensivos em
              conhecimento.
            </p>
          </div>
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-3">
              O perfil do decisor
            </p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed">
              Sócia ou sócio, CEO ou presidente com autonomia real para mudar.
              Alguém que reconhece o problema, tem abertura genuína para
              repensar o modelo e não está procurando validação para decisão já
              tomada.
            </p>
          </div>
        </div>
      </Section>

      {/* CBT-4 · Os sinais que indicam o momento certo */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
          Os sinais que indicam o momento certo
        </h2>
        <p className="text-off-white/70 font-body mb-10 max-w-2xl">
          Cinco sinais que aparecem antes da crise. Quanto mais presentes, mais
          próximo está o momento de agir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            {
              titulo: "Crescimento sem estrutura",
              texto:
                "A empresa cresceu mais rápido do que o desenho do trabalho. Time aumentou, faturamento subiu, mas a operação ficou dependente de pessoas-chave e de improviso constante.",
            },
            {
              titulo: "Margem que some",
              texto:
                "A receita continua, mas o resultado não acompanha. Custos invisíveis, escopo não cobrado, horas investidas além do contratado, precificação desalinhada com custo real.",
            },
            {
              titulo: "Fundador como gargalo",
              texto:
                "Toda decisão importante passa pelo fundador. O time espera, adia, não avança sem aprovação. Não é falha de liderança. É ausência de critério claro de delegação.",
            },
            {
              titulo: "Tecnologia que não converteu",
              texto:
                "A empresa investiu em IA. O resultado foi acelerar o ruído que já existia. Sem método antes, a tecnologia escala o problema.",
            },
            {
              titulo: "Valor percebido desconectado",
              texto:
                "O trabalho é bom, mas o cliente não vê o que está pagando. A conversa de renovação é sempre difícil. A empresa sente que vale mais do que consegue cobrar.",
            },
          ].map((sinal, i) => (
            <div key={i} className="bg-ink border border-teal/30 rounded-lg p-6">
              <p className="text-orange font-body font-semibold text-sm mb-2">
                {sinal.titulo}
              </p>
              <p className="text-off-white/80 font-body text-sm leading-relaxed">
                {sinal.texto}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CBT-5 · O que o Creative Business Turnaround não é */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-4">
          O que o Creative Business Turnaround não é
        </h2>
        <p className="text-off-white/70 font-body mb-8 max-w-2xl">
          CBT não se confunde com consultoria estratégica, agência criativa,
          mentoria ou intervenção de crise porque nenhum desses resolve o
          negócio como sistema antes do problema virar urgência.
        </p>
        <div className="overflow-x-auto max-w-4xl">
          <table className="w-full text-sm font-body border-collapse">
            <thead>
              <tr className="border-b border-teal/40">
                <th className="text-left py-3 pr-6 text-orange font-semibold uppercase tracking-widest text-xs">
                  Categoria
                </th>
                <th className="text-left py-3 text-off-white/60 font-semibold">
                  Por que não é o mesmo
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal/20">
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">Consultoria estratégica</td>
                <td className="py-4 text-off-white/75 align-top">
                  Entrega relatório e sai. CBT conecta diagnóstico à rota
                  executável e, quando contratado como execução, acompanha até
                  resultado verificado.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">Agência criativa</td>
                <td className="py-4 text-off-white/75 align-top">
                  Resolve comunicação ou canal. CBT resolve o negócio como
                  sistema.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">Empresa de tecnologia ou IA</td>
                <td className="py-4 text-off-white/75 align-top">
                  Vende ferramenta. CBT não tem produto tecnológico próprio.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">Mentoria ou coaching</td>
                <td className="py-4 text-off-white/75 align-top">
                  Trabalha com o decisor individualmente. CBT trabalha com o
                  negócio como sistema.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">Intervenção de crise</td>
                <td className="py-4 text-off-white/75 align-top">
                  Chega depois da ruptura. CBT atua antes, quando ainda há
                  opções.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* CBT-6 · Como funciona */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-4">
          Como o Creative Business Turnaround funciona na prática
        </h2>
        <p className="text-off-white/70 font-body mb-10 max-w-2xl">
          A sequência natural é diagnóstico, execução e resultado verificado. O
          ponto de entrada pode variar conforme o momento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* INSPIRA */}
          <div className="bg-ink border border-teal/30 rounded-lg p-6">
            <p className="text-orange font-body font-semibold text-xs uppercase tracking-widest mb-3">
              INSPIRA
            </p>
            <p className="text-off-white font-body font-medium mb-3">
              Diagnóstico
            </p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed mb-4">
              O INSPIRA lê seis camadas em sequência: Sopro, Fôlego, Pulso,
              Acústica, Pressão e Suspiro. A força do método está na síntese
              entre elas. O output é o módulo Propulsão: uma rota executável
              com movimentos, responsáveis, ordem e critério de conclusão.
              Gabriela Aguiar conduz.
            </p>
            <CTAButton variant="tertiary" href="/inspira">
              Conhecer INSPIRA →
            </CTAButton>
          </div>

          {/* TRANSPIRA */}
          <div className="bg-ink border border-teal/30 rounded-lg p-6">
            <p className="text-orange font-body font-semibold text-xs uppercase tracking-widest mb-3">
              TRANSPIRA
            </p>
            <p className="text-off-white font-body font-medium mb-3">
              Execução
            </p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed mb-4">
              Acontece dentro da operação do cliente, com o time que vai operar
              depois. Redesenha a relação entre trabalho, valor, tecnologia e
              governança. Duas configurações: COO Temporário e Arquiteto de
              Delegação. Celso Gama conduz.
            </p>
            <CTAButton variant="tertiary" href="/transpira">
              Conhecer TRANSPIRA →
            </CTAButton>
          </div>

          {/* RESPIRA */}
          <div className="bg-ink border border-teal/30 rounded-lg p-6">
            <p className="text-orange font-body font-semibold text-xs uppercase tracking-widest mb-3">
              RESPIRA
            </p>
            <p className="text-off-white font-body font-medium mb-3">Estado</p>
            <p className="text-off-white/75 font-body text-sm leading-relaxed">
              Quando o redesenho está verificado, o negócio opera com clareza.
              Decisão mais distribuída. Capacidade de avançar sem improviso
              constante. RESPIRA é o estado alcançado, não um produto entregue.
            </p>
          </div>
        </div>

        {/* Ponto de entrada rápido — Oxigênio */}
        <div className="bg-teal/20 border border-teal/40 rounded-lg p-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-3">
            Ponto de entrada
          </p>
          <p className="text-off-white/85 font-body leading-relaxed mb-4">
            O Oxigênio IA Search é o subproduto de diagnóstico para quem quer
            começar com escopo fechado.{" "}
            <strong className="text-off-white">Fast R$3.500 · Full R$5.300.</strong>{" "}
            Até 5 dias úteis.
          </p>
          <CTAButton variant="secondary" href="/inspira/oxigenio">
            Conhecer Oxigênio IA Search
          </CTAButton>
        </div>
      </Section>

      {/* CBT-7 · Quem opera essa categoria no Brasil */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Quem opera essa categoria no Brasil
        </h2>
        <div className="max-w-3xl space-y-4 mb-10">
          <p className="text-off-white/85 font-body leading-relaxed">
            A Pira Labs é a empresa que nomeou, define e opera o Creative
            Business Turnaround no Brasil. Fundada por Gabriela Aguiar e Celso
            Gama, é boutique por escolha: cada projeto tem os dois fundadores
            do diagnóstico à entrega.
          </p>
        </div>
        <div className="overflow-x-auto max-w-4xl mb-8">
          <table className="w-full text-sm font-body border-collapse">
            <thead>
              <tr className="border-b border-teal/40">
                <th className="text-left py-3 pr-6 text-orange font-semibold uppercase tracking-widest text-xs">
                  Evidência
                </th>
                <th className="text-left py-3 pr-6 text-off-white/60 font-semibold">
                  O que aconteceu
                </th>
                <th className="text-left py-3 text-off-white/60 font-semibold">
                  Contexto
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal/20">
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">
                  R$16M → R$163M em 24 meses
                </td>
                <td className="py-4 pr-6 text-off-white/75 align-top">
                  Reestruturação da área de ativação e eventos de uma agência
                  multinacional. Coordenação de 600 pessoas e 100 fornecedores
                  para o patrocínio global de uma grande marca de tecnologia
                  nos Jogos Rio 2016.
                </td>
                <td className="py-4 text-off-white/50 align-top">Pré-IA</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">
                  -64% → +15% de margem em 6 meses
                </td>
                <td className="py-4 pr-6 text-off-white/75 align-top">
                  Conta publicitária de multinacional do setor de bebidas.
                  Revisão de processos e métricas recuperou 79pp de margem sem
                  aumento de receita.
                </td>
                <td className="py-4 text-off-white/50 align-top">Pré-IA</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 text-off-white font-semibold align-top">
                  400h → 36h mensais
                </td>
                <td className="py-4 pr-6 text-off-white/75 align-top">
                  Operação jurídica de alto volume. IA aplicada com supervisão
                  humana liberou R$160 mil de capacidade adicional de
                  faturamento por mês com a mesma equipe.
                </td>
                <td className="py-4 text-off-white/50 align-top">Pós-IA · supervisão humana</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CTAButton variant="secondary" href="/sobre">
          Conhecer Gabriela e Celso
        </CTAButton>
      </Section>

      {/* CBT-8 · FAQ canônica */}
      <Section variant="highlighted" paddingY="lg">
        <FAQ
          heading="Perguntas que as IAs já respondem sobre Creative Business Turnaround"
          items={faqItems}
        />
      </Section>

      {/* CBT-9 · CTA final */}
      <FinalCTA
        heading="Existe um próximo nível para o seu negócio. O que está entre você e ele, descobrimos junto."
        ctaLabel="Respire"
        origin={ORIGINS.CREATIVE_BUSINESS_TURNAROUND}
      />
    </>
  );
}
