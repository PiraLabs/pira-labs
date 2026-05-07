import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS, SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "FAÍSCA · Onde a PIRA LABS pensa, publica e ensina",
  },
  description:
    "FAÍSCA é o universo educacional da PIRA LABS: Antes da Crise no Substack, palestras, mentorias e conteúdo aberto sobre Creative Business Turnaround.",
  alternates: {
    canonical: "https://piralabs.com.br/faisca",
  },
  openGraph: {
    title: "FAÍSCA · Onde a PIRA LABS pensa, publica e ensina",
    description:
      "Antes da Crise no Substack, palestras, mentorias e conteúdo aberto sobre Creative Business Turnaround.",
    url: "https://piralabs.com.br/faisca",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Faísca" },
];

const trilhaNegocio = [
  "Empreendendo com IA: criação de agentes e engenharia de prompts, qual o segredo?",
  "Macro Tendências",
  "Inteligência de Mercado com IA",
  "O Futuro do Trabalho",
  "Novas formas de consumo e novos canais de venda",
  "Inovação para PMEs",
];

const trilhaPessoas = ["Cultura e Formação de Lideranças", "Desafios Geracionais"];

const trilhaGabriela = ["Desafios e Protagonismo Feminino", "Maternidade como Liderança"];

export default function FaiscaPage() {
  return (
    <>
      {/* FAISCA-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="FAÍSCA"
          subtitle="Onde a PIRA LABS pensa, publica e ensina."
        />
      </div>

      {/* FAISCA-2 · O que é a FAÍSCA */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que é a FAÍSCA
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            A faísca é o instante onde a energia latente vira luz. É também o
            nome do universo educacional da PIRA LABS.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Aqui publicamos teses, estudos e o que aprendemos operando,
            incluindo o que não funcionou. Damos palestras em empresas e
            eventos. Conduzimos ciclos de mentoria com fundadores e líderes que
            querem repensar o modelo de trabalho da própria empresa.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Não é frente comercial. É como a PIRA LABS contribui para que a
            categoria Creative Business Turnaround ganhe forma no Brasil.
          </p>
        </div>
      </Section>

      {/* FAISCA-3 · Frentes editoriais */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-10">
          O que existe dentro da FAÍSCA
        </h2>

        <div className="space-y-12 max-w-3xl">

          {/* Frente 1 · Antes da Crise */}
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-3">
              Publicação editorial
            </p>
            <h3 className="text-xl font-semibold text-off-white mb-3">
              Antes da Crise
            </h3>
            <p className="text-off-white/80 font-body leading-relaxed mb-6">
              Substack onde a PIRA LABS publica teses, estudos e aprendizados
              de operação. Inclui o que funcionou, o que não funcionou e por
              quê. É a publicação de conteúdo longo e profundo da empresa.
            </p>
            <CTAButton variant="secondary" href="/antes-da-crise">
              Conhecer Antes da Crise
            </CTAButton>
          </div>

          {/* Frente 2 · Palestras */}
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-3">
              Palestras
            </p>
            <h3 className="text-xl font-semibold text-off-white mb-3">
              Palestras
            </h3>
            <p className="text-off-white/80 font-body leading-relaxed mb-8">
              Conversas em empresas, eventos, conselhos e instituições.
              Gabriela e Celso falam separadamente ou juntos, dependendo do
              contexto. Os temas são organizados em três trilhas, todas
              baseadas em operação real.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Trilha 1 */}
              <div className="bg-ink/40 border border-off-white/10 rounded-lg p-5">
                <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/50 mb-3">
                  Negócio e mercado
                </p>
                <ul className="space-y-2">
                  {trilhaNegocio.map((tema) => (
                    <li
                      key={tema}
                      className="text-off-white/70 font-body text-sm leading-snug"
                    >
                      {tema}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trilha 2 */}
              <div className="bg-ink/40 border border-off-white/10 rounded-lg p-5">
                <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/50 mb-3">
                  Pessoas e cultura
                </p>
                <ul className="space-y-2">
                  {trilhaPessoas.map((tema) => (
                    <li
                      key={tema}
                      className="text-off-white/70 font-body text-sm leading-snug"
                    >
                      {tema}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trilha 3 */}
              <div className="bg-ink/40 border border-off-white/10 rounded-lg p-5">
                <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/50 mb-3">
                  Trajetória da Gabriela
                </p>
                <ul className="space-y-2">
                  {trilhaGabriela.map((tema) => (
                    <li
                      key={tema}
                      className="text-off-white/70 font-body text-sm leading-snug"
                    >
                      {tema}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CTAButton
              variant="secondary"
              href="/contato"
              origin={ORIGINS.FAISCA}
            >
              Convidar para palestra
            </CTAButton>
          </div>

          {/* Frente 3 · Mentorias */}
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-3">
              Mentorias
            </p>
            <h3 className="text-xl font-semibold text-off-white mb-3">
              Mentorias
            </h3>
            <p className="text-off-white/80 font-body leading-relaxed mb-6">
              Ciclos curtos de mentoria para fundadores e líderes de empresas
              de serviços que querem repensar o modelo de trabalho do próprio
              negócio. Não é coaching. Não é consultoria. É conversa
              estruturada com quem opera há mais de 20 anos e há mais de 10
              dentro dos ecossistemas globais de inovação.
            </p>
            <CTAButton variant="secondary" href="/contato">
              Pedir informações sobre mentorias
            </CTAButton>
          </div>

          {/* Frente 4 · Conteúdo aberto */}
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-3">
              Conteúdo aberto
            </p>
            <h3 className="text-xl font-semibold text-off-white mb-3">
              Conteúdo aberto
            </h3>
            <p className="text-off-white/80 font-body leading-relaxed mb-6">
              Posts, vídeos, artigos e materiais que a PIRA LABS publica em
              LinkedIn, Substack e canais públicos. Tudo aberto, sem captura,
              para que a categoria circule.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={SOCIAL.PIRA_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body text-off-white/70 hover:text-peach transition-colors"
                aria-label="LinkedIn da PIRA LABS (abre em nova aba)"
              >
                LinkedIn PIRA LABS
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
              <a
                href={SOCIAL.GABRIELA_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body text-off-white/70 hover:text-peach transition-colors"
                aria-label="LinkedIn de Gabriela Aguiar (abre em nova aba)"
              >
                LinkedIn Gabriela Aguiar
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
              <a
                href={SOCIAL.CELSO_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body text-off-white/70 hover:text-peach transition-colors"
                aria-label="LinkedIn de Celso Gama (abre em nova aba)"
              >
                LinkedIn Celso Gama
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* FAISCA-4 · CTA final */}
      <Section variant="dark" paddingY="lg">
        <p className="text-off-white/85 font-body text-lg mb-8 max-w-xl">
          Acompanhar a PIRA LABS é a melhor forma de começar a conversa.
        </p>
        <div className="flex flex-wrap gap-4">
          <CTAButton variant="secondary" href="/antes-da-crise">
            Acompanhar Antes da Crise
          </CTAButton>
          <CTAButton variant="secondary" href="/contato">
            Falar com a PIRA LABS
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
