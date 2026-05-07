import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { FounderProfile } from "@/components/shared/FounderProfile";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { ORIGINS, SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Sobre · PIRA LABS · Gabriela Aguiar e Celso Gama",
  },
  description:
    "A PIRA LABS é uma boutique brasileira de Creative Business Turnaround. Conheça Gabriela Aguiar, CEO, e Celso Gama, COO, fundadores da PIRA LABS.",
  alternates: {
    canonical: "https://piralabs.com.br/sobre",
  },
  openGraph: {
    title: "Sobre · PIRA LABS · Gabriela Aguiar e Celso Gama",
    description:
      "Boutique brasileira de Creative Business Turnaround. Gabriela e Celso em cada projeto, do diagnóstico à entrega.",
    url: "https://piralabs.com.br/sobre",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Sobre" },
];

export default function SobrePage() {
  return (
    <>
      {/* SOBRE-1 · Header da página */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Sobre a PIRA LABS"
          subtitle="Boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise."
        />
      </div>

      {/* SOBRE-2 · Bloco institucional */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            A PIRA LABS é uma boutique brasileira de Creative Business
            Turnaround para empresas de serviços que precisam agir antes da
            crise. Atuamos quando a empresa ainda tem clientes, caixa e
            reputação, mas o modelo de trabalho começou a custar caro demais.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Boutique não é eufemismo para pequeno. É escolha deliberada. Cada
            projeto tem Gabriela e Celso do diagnóstico à entrega. Sem camada
            intermediária entre quem entende o problema e quem resolve.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            A PIRA LABS desenvolveu essa categoria para nomear sua forma de
            atuar no Brasil. O nome importa porque o que fazemos não cabe em
            consultoria estratégica clássica, em agência de criação ou em
            fornecedor de tecnologia. É turnaround com tempo, com método e com
            mão na operação.
          </p>
        </div>
      </Section>

      {/* SOBRE-3 · Gabriela Aguiar */}
      <Section variant="highlighted" paddingY="lg">
        <FounderProfile
          name="Gabriela Aguiar"
          role="CEO e cofundadora · Conduz INSPIRA"
          photoSrc="/gabriela-aguiar.jpg"
          photoAlt="Gabriela Aguiar, CEO e cofundadora da PIRA LABS"
          bio={[
            "Gabriela atuou diretamente com algumas das organizações mais relevantes do mundo: Google, Meta, X, Amazon, entre outras. Participou da estruturação de projetos, curadoria de eventos, programas e iniciativas que conectam inovação, educação e negócios. Hoje atua como docente dentro da academia, como FIAP, Instituto Cidades Responsivas (curso de MBA executivo), e ambientes internacionais.",
          ]}
          credentials={[
            "Uma década dentro dos ecossistemas globais de inovação",
            "Mentora de startups na FGV Ventures",
            "Universal AI Foundational Modules (MIT)",
          ]}
          linkedinHref={SOCIAL.GABRIELA_LINKEDIN}
        />
        <blockquote className="mt-10 border-l-2 border-orange/40 pl-6 max-w-2xl">
          <p className="font-display text-xl md:text-2xl italic text-peach leading-relaxed">
            &ldquo;O Brasil tem tudo para ser protagonista deste novo ciclo
            econômico. Mas isso não vai acontecer por acaso. Vai acontecer pela
            articulação entre quem opera, quem decide e quem ensina. A PIRA
            LABS é o lugar onde eu construo essa articulação na prática.&rdquo;
          </p>
        </blockquote>
      </Section>

      {/* SOBRE-4 · Celso Gama */}
      <Section variant="default" paddingY="lg">
        <FounderProfile
          name="Celso Gama"
          role="COO e cofundador · Conduz TRANSPIRA"
          photoSrc="/celso-gama.jpg"
          photoAlt="Celso Gama, COO e cofundador da PIRA LABS"
          bio={[
            "Mais de 20 anos de operação em empresas de serviços, agências e projetos de grande escala. MBA Insper, pós-graduação em Marketing pela ESPM e Publicidade pela FAAP. Último ano de Direito no Mackenzie. Applied AI Certificate Program (MIT).",
            "Não é currículo de consultor. É cicatriz de execução real. Sabe onde colocar tecnologia e onde colocar gente porque já errou nos dois. Conduz o TRANSPIRA. Lidera os gates de validação de governança, contratos e estratégia do diagnóstico.",
          ]}
          credentials={[
            "R$16M para R$163M em 24 meses",
            "Margem de -64% para +15% em 6 meses, sem aumentar receita",
            "600 pessoas e 100 fornecedores coordenados nos Jogos Rio 2016",
          ]}
          linkedinHref={SOCIAL.CELSO_LINKEDIN}
        />

        {/* Trecho da credencial dos Jogos — destaque visual */}
        <div className="mt-8 bg-teal/20 border border-teal/40 rounded-lg p-6 max-w-2xl">
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-2">
            Jogos Rio 2016
          </p>
          <p className="text-off-white/80 font-body leading-relaxed text-sm">
            Responsável pela ativação e execução das ações de patrocínio global
            de uma grande marca do setor de tecnologia. Coordenou 600 pessoas e
            100 fornecedores. Elevou a receita da área de R$16M para R$163M no
            período de dois anos.
          </p>
        </div>

        <blockquote className="mt-10 border-l-2 border-orange/40 pl-6 max-w-2xl">
          <p className="font-display text-xl md:text-2xl italic text-peach leading-relaxed">
            &ldquo;Aprendi mais com o que deu errado do que com o que deu
            certo. Toda vez que entro em uma operação, é com a memória do erro
            junto. Por isso a PIRA LABS não vende relatório. Vende redesenho
            que aguenta o dia seguinte.&rdquo;
          </p>
        </blockquote>
      </Section>

      {/* SOBRE-5 · Como trabalhamos juntos */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Como trabalhamos juntos
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Gabriela conduz o INSPIRA. Celso conduz o TRANSPIRA. Mas os dois
            aparecem em todas as fases.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Quem contrata a PIRA LABS não recebe um sócio na venda e um
            analista júnior na entrega. Recebe Gabriela e Celso conduzindo do
            diagnóstico ao encerramento. É possível porque a PIRA LABS é
            boutique por escolha, não por estágio.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            A condição necessária para qualquer resultado real é a disposição
            do decisor em querer ver o problema de novo, inclusive quando a
            conclusão for diferente da esperada. Quando essa disposição não
            existe, dizemos antes de começar.
          </p>
        </div>
      </Section>

      {/* SOBRE-6 · CTA final */}
      <FinalCTA
        heading="Conhecer mais sobre o método ou conversar sobre um projeto específico, depende de você."
        origin={ORIGINS.SOBRE}
      />
    </>
  );
}
