import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { FAQ } from "@/components/shared/FAQ";
import { CTAButton } from "@/components/shared/CTAButton";
import { LegalNotice } from "@/components/shared/LegalNotice";
import { ORIGINS } from "@/lib/constants";
import { serviceSchema, faqPageSchema } from "@/lib/schemas/service";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://piralabs.com.br/faisca/juridica#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://piralabs.com.br" },
    { "@type": "ListItem", position: 2, name: "Faísca", item: "https://piralabs.com.br/faisca" },
    { "@type": "ListItem", position: 3, name: "FAÍSCA Jurídica", item: "https://piralabs.com.br/faisca/juridica" },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute:
      "FAÍSCA Jurídica · Palestra e workshop de IA para o jurídico · PIRA LABS",
  },
  description:
    "Palestra e workshop executivo para escritórios, áreas jurídicas e instituições de ensino. Como usar IA com método, critério e governança na rotina jurídica.",
  alternates: {
    canonical: "https://piralabs.com.br/faisca/juridica",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "FAÍSCA Jurídica · Palestra e workshop de IA para o jurídico · PIRA LABS",
    description:
      "Como usar IA com método, critério e governança na rotina jurídica. Para escritórios, áreas jurídicas e instituições de ensino.",
    url: "https://piralabs.com.br/faisca/juridica",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "PIRA LABS" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Faísca", href: "/faisca" },
  { label: "Jurídica" },
];

const faqItems = [
  {
    question: "Vocês prestam consultoria jurídica?",
    answer:
      "Não. O FAÍSCA Jurídica trata de fluxos de trabalho, produtividade, governança de uso de IA e operação jurídica. Não define estratégia de caso, não substitui a atuação de advogados habilitados pela OAB e não é consultoria jurídica.",
  },
  {
    question: "O workshop pode ser adaptado para o contexto do nosso escritório?",
    answer:
      "Sim. Antes de qualquer workshop, fazemos uma conversa de calibragem para entender o contexto do escritório, o perfil do time e o momento da adoção de IA. O conteúdo é ajustado sem custo adicional para grupos que fazem essa conversa prévia.",
  },
  {
    question: "Funciona para instituição de ensino jurídico?",
    answer:
      "Sim. Temos conteúdo específico para formar profissionais que vão sair da faculdade já sabendo como usar IA com critério na prática jurídica. O formato para instituições é adaptado para audiência de alunos e professores.",
  },
  {
    question: "Vocês assinam NDA quando é workshop fechado para um escritório?",
    answer:
      "Sempre. Quando há trabalho de calibragem prévia ou conteúdo customizado para o cliente, o NDA é assinado antes da conversa. NDA é base canônica de todo trabalho da PIRA LABS, independente do produto.",
  },
  {
    question: "Como é a precificação?",
    answer:
      "Sob consulta e disponibilidade. Depende do formato, da audiência, do deslocamento e do nível de customização. Por sermos uma boutique, mantemos agenda limitada de palestras e workshops simultâneos para preservar a qualidade da conversa de calibragem prévia. Respondemos em até dois dias úteis com proposta.",
  },
];

const service = serviceSchema({
  name: "FAÍSCA Jurídica",
  description:
    "Palestra e workshop executivo para escritórios de advocacia, áreas jurídicas corporativas e instituições de ensino jurídico. Como usar IA com método, critério e governança na rotina jurídica.",
  url: "https://piralabs.com.br/faisca/juridica",
  serviceType: "Educação executiva em IA para o setor jurídico",
});

const faqSchema = faqPageSchema(faqItems);

export default function FaiscaJuridicaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* FAISCA-JUR-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="FAÍSCA Jurídica"
          subtitle="Antes de ensinar prompt para o time jurídico, vale saber o que não pode entrar na ferramenta."
        />
      </div>

      {/* FAISCA-JUR-2 · O problema */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que está acontecendo agora nos escritórios
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Alguém no seu escritório já usou ChatGPT, Claude ou Gemini para
            resumir um contrato, pesquisar jurisprudência ou rascunhar uma
            peça. Provavelmente mais de uma pessoa. Provavelmente sem política
            interna, sem critério de anonimização e sem que a sócia ou o head
            jurídico soubesse exatamente o que foi inserido onde.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            O problema não é usar IA. O problema é usar IA com documento
            jurídico real, em conta pessoal, sem método e sem controle
            institucional.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Quando um profissional cola uma petição, um contrato ou uma
            procuração com dados de cliente em uma ferramenta de IA pública,
            isso é tratamento de dados pessoais nos termos da LGPD. Se não há
            política, não há base legal e não há controle de quem usa o quê, o
            escritório está operando com exposição que a maioria ainda não
            mapeou.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            O FAÍSCA Jurídica existe para nomear esse problema e dar ao time as
            ferramentas para resolvê-lo.
          </p>
        </div>
      </Section>

      {/* FAISCA-JUR-3 · O que é */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que é o FAÍSCA Jurídica
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Palestra ou workshop executivo para escritórios de advocacia, áreas
            jurídicas corporativas e instituições de ensino jurídico. Celso
            Gama conduz.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Não começa pela ferramenta. Começa pelo fluxo. Onde a IA pode
            ajudar na rotina jurídica, onde não deve entrar sem revisão, e o
            que cada profissional do time precisa saber antes de usar qualquer
            modelo.
          </p>
        </div>
      </Section>

      {/* FAISCA-JUR-4 · Formatos disponíveis */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-10">
          Como acontece
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Formato 1 */}
          <div className="bg-teal/20 border border-teal/40 rounded-lg p-8 flex flex-col">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-3">
              Formato 1
            </p>
            <h3 className="text-xl font-semibold text-off-white mb-2">
              Palestra executiva
            </h3>
            <p className="text-off-white/50 font-body text-sm mb-6">
              60 a 90 minutos
            </p>
            <p className="text-off-white/80 font-body leading-relaxed mb-6">
              Para eventos, congressos, seccionais da OAB, associações de
              classe e encontros de lideranças jurídicas. Audiência de 20 a 300
              pessoas. Presencial ou online.
            </p>
            <div className="mt-auto pt-4 border-t border-teal/30">
              <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-3">
                Conteúdo
              </p>
              {[
                "Estado atual do uso de IA no jurídico",
                "O que os modelos fazem com dados inseridos",
                "Distinção entre planos gratuitos e enterprise",
                "O que o escritório precisa decidir antes de avançar",
              ].map((item) => (
                <p
                  key={item}
                  className="text-off-white/70 font-body text-sm leading-relaxed flex gap-2 mb-1"
                >
                  <span className="text-orange mt-0.5 shrink-0">·</span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Formato 2 */}
          <div className="bg-teal/20 border border-teal/40 rounded-lg p-8 flex flex-col">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange mb-3">
              Formato 2
            </p>
            <h3 className="text-xl font-semibold text-off-white mb-2">
              Workshop executivo
            </h3>
            <p className="text-off-white/50 font-body text-sm mb-6">
              4 horas
            </p>
            <p className="text-off-white/80 font-body leading-relaxed mb-4">
              Para grupos de 5 a 25 pessoas. Sócios, heads jurídicos,
              coordenadores de curso. Presencial ou online. Inclui conversa de
              calibragem prévia para ajustar o conteúdo ao contexto específico,
              sem custo adicional.
            </p>
            <div className="mt-auto pt-4 border-t border-teal/30">
              <p className="text-xs font-body font-semibold uppercase tracking-widest text-off-white/40 mb-3">
                Saída
              </p>
              {[
                "Mapa de oportunidades e riscos de IA na rotina jurídica",
                "Primeiros critérios de política interna",
                "Próximos passos práticos",
              ].map((item) => (
                <p
                  key={item}
                  className="text-off-white/70 font-body text-sm leading-relaxed flex gap-2 mb-1"
                >
                  <span className="text-orange mt-0.5 shrink-0">·</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAISCA-JUR-5 · Para quem faz sentido */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Para quem faz sentido
        </h2>
        <div className="max-w-3xl space-y-3">
          <p className="text-off-white/85 font-body leading-relaxed">
            Sócios e heads jurídicos que sabem que o time já usa IA mas não têm
            política interna ainda.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Professores e coordenadores de cursos de Direito que querem
            preparar alunos com critério real, não com entusiasmo genérico
            sobre o futuro da IA.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Gestores de compliance e DPOs em empresas com área jurídica interna.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Escritórios que passaram por evento de risco e querem endereçar o
            problema antes que aconteça de novo.
          </p>
        </div>
      </Section>

      {/* FAISCA-JUR-6 · Quem conduz */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Quem conduz
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Celso Gama, bacharelando em Direito (Mackenzie) com Applied AI
            Certificate Program (MIT, em andamento, 2026), conduz o conteúdo
            técnico-jurídico.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Gabriela Aguiar, docente em programas de MBA na FIAP e no Instituto
            Cidades Responsivas, contribui com o conteúdo sobre contexto e
            futuro do trabalho quando o formato pede.
          </p>
        </div>
      </Section>

      {/* FAISCA-JUR-7 · FAQ */}
      <Section variant="highlighted" paddingY="lg">
        <FAQ heading="Perguntas frequentes" items={faqItems} />
      </Section>

      {/* FAISCA-JUR-8 · CTAs */}
      <section className="bg-ink section-padding">
        <div className="container-site text-center">
          <p className="font-display text-2xl md:text-3xl italic text-off-white/70 mb-8 leading-snug max-w-2xl mx-auto">
            O risco não está no futuro. Está no navegador aberto agora no
            computador do estagiário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="primary"
              href="/contato"
              origin={ORIGINS.FAISCA_JURIDICA}
            >
              Respire
            </CTAButton>
            <CTAButton variant="secondary" href="/inspira/juridico">
              Quer ir além do workshop? INSPIRA Jurídico
            </CTAButton>
          </div>
          <p className="mt-4 text-sm text-off-white/60 font-body">
            Conversa inicial sem compromisso. Respondemos em até 2 dias úteis.
          </p>
          <div className="max-w-2xl mx-auto mt-8">
            <LegalNotice variant="faisca_juridica" />
          </div>
        </div>
      </section>
    </>
  );
}
