export const dynamic = 'force-static';

import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { MediaKit } from "@/components/shared/MediaKit";
import { ORIGINS, SOCIAL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const schemas = {
  breadcrumb: breadcrumbSchema([
    { name: "Home", url: "https://piralabs.com.br/" },
    { name: "Sobre", url: "https://piralabs.com.br/sobre" },
  ]),
  gabriela: {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://piralabs.com.br/sobre#gabriela",
    name: "Gabriela Aguiar",
    jobTitle: "CEO and Co-founder",
    worksFor: { "@id": "https://piralabs.com.br/#organization" },
    sameAs: [
      "https://www.linkedin.com/in/gabrielaaguiarvs/",
      "https://www.wikidata.org/wiki/Q138846653",
      "https://www.crunchbase.com/person/gabriela-aguiar-a12a",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Universal AI Foundational Modules",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "MIT" },
      },
    ],
    knowsAbout: [
      "Creative Business Turnaround",
      "diagnóstico empresarial",
      "IA aplicada à operação",
      "inovação em empresas de serviços",
    ],
  },
  celso: {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://piralabs.com.br/sobre#celso",
    name: "Celso Gama",
    jobTitle: "COO and Co-founder",
    worksFor: { "@id": "https://piralabs.com.br/#organization" },
    sameAs: [
      "https://www.linkedin.com/in/celsogama/",
      "https://www.wikidata.org/wiki/Q138846692",
      "https://www.crunchbase.com/person/celso-gama",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Applied AI Certificate Program",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "MIT" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "MBA",
        name: "MBA",
        recognizedBy: { "@type": "EducationalOrganization", name: "Insper" },
      },
    ],
    knowsAbout: [
      "execução operacional",
      "redesenho de processos",
      "legal ops com IA",
      "governança de uso de IA",
      "Creative Business Turnaround",
    ],
  },
};

export const metadata: Metadata = {
  title: {
    absolute: "Sobre · Pira Labs · Gabriela Aguiar e Celso Gama",
  },
  description:
    "A Pira Labs é uma consultoria boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam transformar sinais fracos em decisão, proteger reputação e voltar a crescer com margem, antes que a janela se feche. Conheça Gabriela Aguiar e Celso Gama, os fundadores.",
  alternates: {
    canonical: "https://piralabs.com.br/sobre",
    languages: { en: "https://piralabs.com.br/en/about" },
  },
  openGraph: {
    title: "Sobre · Pira Labs · Gabriela Aguiar e Celso Gama",
    description:
      "Consultoria boutique brasileira de Creative Business Turnaround. Gabriela e Celso em cada projeto, do diagnóstico à entrega.",
    url: "https://piralabs.com.br/sobre",
    images: [{ url: "https://piralabs.com.br/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Sobre" },
];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://piralabs.com.br/sobre#webpage",
  url: "https://piralabs.com.br/sobre",
  name: "Sobre · Pira Labs · Gabriela Aguiar e Celso Gama",
  description:
    "A Pira Labs é uma consultoria boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam transformar sinais fracos em decisão, proteger reputação e voltar a crescer com margem, antes que a janela se feche. Conheça Gabriela Aguiar e Celso Gama, os fundadores.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  about: [
    { "@id": "https://piralabs.com.br/sobre#gabriela" },
    { "@id": "https://piralabs.com.br/sobre#celso" },
  ],
  inLanguage: "pt-BR",
};

export default function SobrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.gabriela) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.celso) }} />

      {/* SOBRE-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Duas lentes. Uma só operação."
          subtitle="Consultoria boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam transformar sinais fracos em decisão, proteger reputação e voltar a crescer com margem, antes que a janela se feche."
        />
      </div>

      {/* SOBRE-2 · Por que a Pira Labs existe (Sand) */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-3xl space-y-4">
            <p className="font-body leading-relaxed" style={{ color: "#05262e" }}>
              A Pira Labs existe para o momento em que o fundador percebe que o
              modelo de trabalho começou a custar mais do que entrega, e que mudar
              enquanto a empresa ainda tem clientes, caixa e reputação é diferente
              de mudar quando não há mais escolha.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "#05262e" }}>
              Boutique não é eufemismo para pequeno. É escolha deliberada. Cada
              projeto tem Gabriela e Celso do diagnóstico à entrega. Sem camada
              intermediária entre quem entende o problema e quem resolve.
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE-3 · Gabriela Aguiar (Teal) */}
      <section className="bg-teal py-16 md:py-24">
        <div className="container-site">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
              <Image
                src="/gabriela-aguiar.jpg"
                alt="Gabriela Aguiar, CEO e cofundadora da Pira Labs"
                width={240}
                height={300}
                className="rounded-lg object-cover w-48 md:w-60"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-semibold mb-1" style={{ fontSize: "clamp(20px, 2vw, 26px)", color: "#F5F5F2" }}>
                Gabriela Aguiar
              </h2>
              <p className="font-body font-medium mb-4" style={{ fontSize: "14px", color: "#eb5c2e" }}>
                CEO e cofundadora · Conduz o INSPIRA
              </p>
              <div className="space-y-3 mb-6">
                <p className="font-body leading-relaxed" style={{ color: "rgba(245,245,242,0.85)" }}>
                  Gabriela lê o que está chegando antes de chegar ao Brasil. Uma carreira construída dentro das redes onde tecnologia, inovação e educação se cruzam: Google, Meta, X, Amazon, entre outras. Não como observadora. Como parte ativa dos projetos, programas e conexões que definem para onde o mercado está indo.
                </p>
                <p className="font-body leading-relaxed" style={{ color: "rgba(245,245,242,0.85)" }}>
                  Docente em programas de MBA e educação executiva na FIAP, no Instituto Cidades Responsivas, na USP e no ITA. Mentora de startups na FGV Ventures, no German Accelerator, na FINEP e no programa Empreendedoras Tech (Sebrae). Universal AI Foundational Modules (MIT, em andamento, 2026).
                </p>
                <p className="font-body leading-relaxed" style={{ color: "rgba(245,245,242,0.85)" }}>
                  O que ela traz para cada projeto não é repertório aplicado de fora. É a capacidade de nomear o que o mercado local ainda não nomeou. Conduz o INSPIRA.
                </p>
              </div>
              <ul className="space-y-1 mb-6">
                {[
                  "Docente em MBA na FIAP, Instituto Cidades Responsivas, USP e ITA",
                  "Mentora na FGV Ventures, German Accelerator, FINEP e Empreendedoras Tech (Sebrae)",
                  "Universal AI Foundational Modules (MIT, em andamento, 2026)",
                ].map((cred, i) => (
                  <li key={i} className="font-body" style={{ fontSize: "13px", color: "rgba(245,245,242,0.6)" }}>
                    <span style={{ color: "#eb5c2e", marginRight: "8px" }}>·</span>{cred}
                  </li>
                ))}
              </ul>
              {SOCIAL.GABRIELA_LINKEDIN && (
                <a
                  href={SOCIAL.GABRIELA_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body underline transition-opacity hover:opacity-70"
                  style={{ fontSize: "13px", color: "rgba(245,245,242,0.6)" }}
                  aria-label="LinkedIn de Gabriela Aguiar (abre em nova aba)"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Tese intelectual */}
          <blockquote className="mt-12 max-w-3xl">
            <p className="font-display italic leading-relaxed" style={{ fontSize: "clamp(16px, 1.8vw, 22px)", color: "rgba(245,245,242,0.75)", fontWeight: 300 }}>
              &ldquo;O futuro do trabalho nas empresas de serviços não será resolvido por ferramentas. Será decidido por quem conseguir redesenhar a relação entre trabalho, valor, tecnologia e governança, e agir antes que a janela para essa escolha se feche.&rdquo;
            </p>
          </blockquote>

          {/* Quote */}
          <blockquote className="mt-8 border-l-2 pl-6 max-w-2xl" style={{ borderColor: "rgba(235,92,46,0.4)" }}>
            <p className="font-display italic leading-relaxed" style={{ fontSize: "clamp(16px, 1.6vw, 20px)", color: "rgba(245,245,242,0.8)" }}>
              &ldquo;O diagnóstico não inventa o problema. Revela o que a fundadora ou o fundador já sentia mas ainda não havia encontrado palavras para nomear.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* SOBRE-4 · Celso Gama (Ink) */}
      <section className="bg-ink py-16 md:py-24">
        <div className="container-site">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
              <Image
                src="/celso-gama.jpg"
                alt="Celso Gama, COO e cofundador da Pira Labs"
                width={240}
                height={300}
                className="rounded-lg object-cover w-48 md:w-60"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-semibold mb-1" style={{ fontSize: "clamp(20px, 2vw, 26px)", color: "#F5F5F2" }}>
                Celso Gama
              </h2>
              <p className="font-body font-medium mb-4" style={{ fontSize: "14px", color: "#eb5c2e" }}>
                COO e cofundador · Conduz o TRANSPIRA
              </p>
              <div className="space-y-3 mb-6">
                <p className="font-body leading-relaxed" style={{ color: "rgba(245,245,242,0.85)" }}>
                  Celso entra quando a operação precisa de alguém que já viu isso antes. E já viu muita coisa.
                </p>
                <p className="font-body leading-relaxed" style={{ color: "rgba(245,245,242,0.85)" }}>
                  Vinte e cinco anos dentro de operações complexas: de hubs regionais de multinacionais a empresas de serviços que cresceram, travaram, viraram e, algumas, não voltaram. Bacharelando em Direito (Mackenzie), MBA pelo Insper, pós-graduação em Marketing pela ESPM e Publicidade pela FAAP. Applied AI Certificate Program (MIT, em andamento, 2026).
                </p>
                <p className="font-body leading-relaxed" style={{ color: "rgba(245,245,242,0.85)" }}>
                  Sabe onde colocar tecnologia e onde colocar gente porque já errou nos dois. Conduz o TRANSPIRA. Entra na operação, trabalha junto com o time, sai quando os resultados acordados são verificados. Não quando o prazo acaba.
                </p>
              </div>
              <ul className="space-y-1 mb-6">
                {[
                  "Margem de -64% para +15% em seis meses em conta de multinacional do setor de bebidas, sem aumento de receita",
                  "R$16M para R$163M em 24 meses no patrocínio global de uma grande marca de tecnologia nos Jogos Rio 2016",
                  "Applied AI Certificate Program (MIT, em andamento, 2026)",
                ].map((cred, i) => (
                  <li key={i} className="font-body" style={{ fontSize: "13px", color: "rgba(245,245,242,0.6)" }}>
                    <span style={{ color: "#eb5c2e", marginRight: "8px" }}>·</span>{cred}
                  </li>
                ))}
              </ul>
              {SOCIAL.CELSO_LINKEDIN && (
                <a
                  href={SOCIAL.CELSO_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body underline transition-opacity hover:opacity-70"
                  style={{ fontSize: "13px", color: "rgba(245,245,242,0.6)" }}
                  aria-label="LinkedIn de Celso Gama (abre em nova aba)"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Quote */}
          <blockquote className="mt-10 border-l-2 pl-6 max-w-2xl" style={{ borderColor: "rgba(235,92,46,0.4)" }}>
            <p className="font-display italic leading-relaxed" style={{ fontSize: "clamp(16px, 1.6vw, 20px)", color: "rgba(245,245,242,0.8)" }}>
              &ldquo;A Pira Labs não sai quando o prazo acaba. Sai quando os resultados acordados são verificados.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* SOBRE-5 · Como as duas lentes trabalham juntas (Sand) */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-site">
          <h2 className="font-display font-semibold mb-8" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", color: "#05262e" }}>
            Como as duas lentes trabalham juntas
          </h2>
          <div className="max-w-3xl mb-10">
            <Image
              src="/nos.png"
              alt="Gabriela Aguiar e Celso Gama, cofundadores da Pira Labs"
              width={800}
              height={533}
              className="rounded-lg w-full object-cover"
              priority={false}
            />
          </div>
          <div className="max-w-3xl space-y-4 mb-8">
            <p className="font-body leading-relaxed" style={{ color: "#05262e" }}>
              Gabriela lê contexto, sinais e movimentos de mercado antes de virarem demanda óbvia. Celso lê operação, gargalo e consequência antes de virarem perda visível. Separadas, essas lentes geram diagnóstico parcial. Juntas, mostram onde o negócio está travado e o que precisa mudar para avançar sem quebrar o que já funciona.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "#05262e" }}>
              Não é divisão de trabalho. É metodologia: o diagnóstico real exige as duas perspectivas ao mesmo tempo. Gabriela nomeia o que está chegando antes de chegar. Celso executa o redesenho dentro da operação, com o time que vai operar depois.
            </p>
          </div>
          <p className="font-body" style={{ fontSize: "13px", color: "rgba(5,38,46,0.5)" }}>
            Estas não são cases da Pira Labs. São registros do julgamento calibrado por consequência real.
          </p>
        </div>
      </section>

      {/* SOBRE-6+7 · Boutique por dentro. Ecossistema por fora. (Teal) */}
      <section className="bg-teal py-16 md:py-24">
        <div className="container-site">
          <h2 className="font-display font-semibold mb-8" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", color: "#F5F5F2" }}>
            Boutique por dentro. <span style={{ color: "#eb5c2e" }}>Ecossistema</span> por fora.
          </h2>
          <div className="max-w-3xl space-y-4 mb-12">
            <p className="font-body leading-relaxed" style={{ color: "rgba(245,245,242,0.85)" }}>
              Quem contrata a Pira Labs não recebe um sócio na venda e um analista na entrega. Recebe Gabriela e Celso do diagnóstico ao encerramento.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "rgba(245,245,242,0.85)" }}>
              Boutique é o modelo deliberado. O ecossistema é o que torna isso possível: uma rede de especialistas, parceiros e referências que entra quando o projeto pede, sem virar overhead fixo.
            </p>
          </div>
          <h3 className="font-body font-semibold uppercase mb-6" style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(245,245,242,0.5)" }}>
            PARA IMPRENSA, PALESTRAS E PARCERIAS
          </h3>
          <MediaKit className="max-w-2xl" />
        </div>
      </section>

      {/* SOBRE-8 · CTA final (Ink) */}
      <FinalCTA
        heading="Existe um próximo nível para o seu negócio. O que está entre você e ele, descobrimos junto."
        ctaLabel="RESPIRE"
        origin={ORIGINS.SOBRE}
      />
    </>
  );
}
