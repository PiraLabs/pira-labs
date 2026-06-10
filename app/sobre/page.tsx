export const dynamic = 'force-static';

import type { Metadata } from "next";
import Image from "next/image";
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

      {/* SOBRE-1 · Header (Ink) */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Duas lentes. Uma só operação."
          subtitle={
            <>
              Consultoria{" "}
              <span style={{ color: "#eb5c2e" }}>boutique</span>{" "}
              brasileira de Creative Business Turnaround para empresas de serviços que precisam transformar sinais fracos em decisão, proteger reputação e voltar a crescer com margem, antes que a janela se feche.
            </>
          }
        />
      </div>

      {/* SOBRE-2 · Por que a Pira Labs existe (Sand) */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-3xl space-y-5">
            <p className="font-body leading-relaxed text-lg" style={{ color: "#05262e" }}>
              A Pira Labs existe para o momento em que o fundador percebe que o modelo de trabalho começou a custar mais do que entrega, e que mudar enquanto a empresa ainda tem clientes, caixa e reputação é diferente de mudar quando não há mais escolha.
            </p>
            <p className="font-body leading-relaxed text-lg" style={{ color: "#05262e" }}>
              Boutique não é eufemismo para pequeno. É{" "}
              <span style={{ color: "#eb5c2e" }}>escolha</span>{" "}
              deliberada. Cada projeto tem Gabriela e Celso do diagnóstico à entrega. Sem camada intermediária entre quem entende o problema e quem resolve.
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE-3 · Gabriela Aguiar (Teal) */}
      <section className="bg-teal w-full" aria-labelledby="sobre-gabriela-heading">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: "720px" }}>

          {/* Eyebrow */}
          <p className="font-body mb-12" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,245,242,0.45)" }}>
            Fundadora
          </p>

          {/* FOTO */}
          <div className="w-full overflow-hidden mb-8" style={{ aspectRatio: "4/5", borderRadius: "2px", maxHeight: "560px" }}>
            <Image
              src="/gabriela-aguiar.jpg"
              alt="Gabriela Aguiar, CEO e cofundadora da Pira Labs"
              width={640}
              height={800}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 10%" }}
              priority
            />
          </div>

          {/* NOME */}
          <h2 id="sobre-gabriela-heading" className="font-display mt-8 mb-1" style={{ fontWeight: 600, fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, color: "#F5F5F2", letterSpacing: "-0.02em" }}>
            Gabriela Aguiar
          </h2>

          {/* PAPEL */}
          <p className="font-body mb-6" style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase" }}>
            <span style={{ color: "#eb5c2e" }}>CEO e cofundadora</span>
            <span style={{ color: "rgba(245,245,242,0.60)" }}> · Conduz o INSPIRA</span>
          </p>

          {/* BIO */}
          <div className="space-y-4 mb-8">
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "rgba(245,245,242,0.80)" }}>
              Gabriela lê o que está chegando antes de chegar ao Brasil. Uma carreira construída dentro das redes onde tecnologia, inovação e educação se cruzam: Google, Meta, X, Amazon, entre outras. Não como observadora. Como parte ativa dos projetos, programas e conexões que definem para onde o mercado está indo.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "rgba(245,245,242,0.80)" }}>
              O que ela traz para cada projeto não é repertório aplicado de fora. É a capacidade de nomear o que o mercado local ainda não nomeou. Conduz o INSPIRA.
            </p>
          </div>

          {/* CREDENCIAIS */}
          <ul className="mb-6 space-y-2">
            <li className="font-body flex items-start gap-2" style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "rgba(245,245,242,0.65)", fontWeight: 300 }}>
              <span style={{ color: "rgba(245,245,242,0.40)", flexShrink: 0, marginTop: "2px" }}>·</span>
              <span>Docente em MBA na FIAP, Instituto Cidades Responsivas, USP e ITA</span>
            </li>
            <li className="font-body flex items-start gap-2" style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "rgba(245,245,242,0.65)", fontWeight: 300 }}>
              <span style={{ color: "rgba(245,245,242,0.40)", flexShrink: 0, marginTop: "2px" }}>·</span>
              <span>Mentora na FGV Ventures, German Accelerator, FINEP e Empreendedoras Tech (Sebrae)</span>
            </li>
            <li className="font-body flex items-start gap-2" style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "rgba(245,245,242,0.65)", fontWeight: 300 }}>
              <span style={{ color: "rgba(245,245,242,0.40)", flexShrink: 0, marginTop: "2px" }}>·</span>
              <span>Universal AI Foundational Modules (MIT, em andamento, 2026)</span>
            </li>
          </ul>

          {/* LINKEDIN */}
          <a href="https://www.linkedin.com/in/gabrielaaguiarvs/" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center gap-2 mt-6 mb-12" style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(245,245,242,0.60)", textDecoration: "none" }} aria-label="LinkedIn de Gabriela Aguiar">
            LinkedIn
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* SEPARADOR */}
          <hr style={{ borderColor: "rgba(245,245,242,0.15)", borderTopWidth: 1, margin: "2.5rem 0" }} />

          {/* QUOTE */}
          <blockquote className="font-display" style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)", fontWeight: 400, lineHeight: 1.6, color: "#F5F5F2", fontStyle: "normal", margin: 0, padding: 0 }}>
            &ldquo;O diagnóstico não inventa o problema. Revela o que a fundadora ou o fundador já sentia mas ainda não havia encontrado palavras para nomear.&rdquo;
          </blockquote>

        </div>
      </section>

      {/* SOBRE-4 · Celso Gama (Ink) */}
      <section className="bg-ink w-full" aria-labelledby="sobre-celso-heading">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: "720px" }}>

          {/* Eyebrow */}
          <p className="font-body mb-12" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(232,224,214,0.45)" }}>
            Fundador
          </p>

          {/* FOTO */}
          <div className="w-full overflow-hidden mb-8" style={{ aspectRatio: "4/5", borderRadius: "2px", maxHeight: "560px" }}>
            <Image
              src="/celso-gama.jpg"
              alt="Celso Gama, COO e cofundador da Pira Labs"
              width={640}
              height={800}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>

          {/* NOME */}
          <h2 id="sobre-celso-heading" className="font-display mt-8 mb-1" style={{ fontWeight: 600, fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, color: "#F5F5F2", letterSpacing: "-0.02em" }}>
            Celso Gama
          </h2>

          {/* PAPEL */}
          <p className="font-body mb-6" style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase" }}>
            <span style={{ color: "#eb5c2e" }}>COO e cofundador</span>
            <span style={{ color: "rgba(232,224,214,0.60)" }}> · Conduz o TRANSPIRA</span>
          </p>

          {/* BIO */}
          <div className="space-y-4 mb-8">
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "rgba(232,224,214,0.80)" }}>
              Celso entra quando a operação precisa de alguém que já viu isso antes. E já viu muita coisa.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "rgba(232,224,214,0.80)" }}>
              Vinte e cinco anos dentro de operações complexas: de hubs regionais de multinacionais a empresas de serviços que cresceram, travaram, viraram e, algumas, não voltaram.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "rgba(232,224,214,0.80)" }}>
              Sabe onde colocar tecnologia e onde colocar gente porque já errou nos dois. Conduz o TRANSPIRA. Entra na operação, trabalha junto com o time, sai quando os resultados acordados são verificados. Não quando o prazo acaba.
            </p>
          </div>

          {/* CREDENCIAIS */}
          <ul className="mb-3 space-y-2">
            <li className="font-body flex items-start gap-2" style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "rgba(232,224,214,0.65)", fontWeight: 300 }}>
              <span style={{ color: "rgba(232,224,214,0.40)", flexShrink: 0, marginTop: "2px" }}>·</span>
              <span>Bacharelando em Direito (Mackenzie)</span>
            </li>
            <li className="font-body flex items-start gap-2" style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "rgba(232,224,214,0.65)", fontWeight: 300 }}>
              <span style={{ color: "rgba(232,224,214,0.40)", flexShrink: 0, marginTop: "2px" }}>·</span>
              <span>MBA Insper · Pós-graduação em Marketing (ESPM) · Publicidade (FAAP)</span>
            </li>
            <li className="font-body flex items-start gap-2" style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "rgba(232,224,214,0.65)", fontWeight: 300 }}>
              <span style={{ color: "rgba(232,224,214,0.40)", flexShrink: 0, marginTop: "2px" }}>·</span>
              <span>Applied AI Certificate Program (MIT, em andamento, 2026)</span>
            </li>
          </ul>

          {/* LINKEDIN */}
          <a href="https://www.linkedin.com/in/celsogama/" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center gap-2 mt-6 mb-12" style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(232,224,214,0.60)", textDecoration: "none" }} aria-label="LinkedIn de Celso Gama">
            LinkedIn
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* SEPARADOR */}
          <hr style={{ borderColor: "rgba(232,224,214,0.15)", borderTopWidth: 1, margin: "2.5rem 0" }} />

          {/* QUOTE */}
          <blockquote className="font-display" style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)", fontWeight: 400, lineHeight: 1.6, color: "#F5F5F2", fontStyle: "normal", margin: 0, padding: 0 }}>
            &ldquo;A Pira Labs não sai quando o prazo acaba. Sai quando os resultados acordados são verificados.&rdquo;
          </blockquote>

        </div>
      </section>

      {/* SOBRE-5 · Como as duas lentes trabalham juntas (Sand) */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-site">
          <h2 className="font-display font-semibold mb-10" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.2, color: "#05262e" }}>
            Como as duas lentes trabalham juntas
          </h2>
          <div className="max-w-2xl mb-10 overflow-hidden rounded-lg" style={{ maxHeight: "420px" }}>
            <Image
              src="/nos2.png"
              alt="Gabriela Aguiar e Celso Gama, cofundadores da Pira Labs"
              width={800}
              height={533}
              className="w-full object-cover object-top"
              style={{ maxHeight: "420px" }}
              priority={false}
            />
          </div>
          <div className="max-w-3xl space-y-5 mb-8">
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#05262e" }}>
              Gabriela lê contexto, sinais e movimentos de mercado antes de virarem demanda óbvia. Celso lê operação, gargalo e consequência antes de virarem perda visível. Separadas, essas lentes geram diagnóstico parcial.{" "}
              <span style={{ color: "#eb5c2e" }}>Juntas</span>,
              mostram onde o negócio está travado e o que precisa mudar para avançar sem quebrar o que já funciona.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#05262e" }}>
              Não é divisão de trabalho. É metodologia: o diagnóstico real exige as duas perspectivas ao mesmo tempo. Gabriela nomeia o que está chegando antes de chegar. Celso executa o redesenho dentro da operação, com o time que vai operar depois.
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE-6+7 · Boutique por dentro. Ecossistema por fora. (Teal) */}
      <section className="bg-teal py-16 md:py-24">
        <div className="container-site">
          <h2 className="font-display font-semibold mb-8" style={{ fontSize: "clamp(24px, 2.8vw, 36px)", color: "#F5F5F2" }}>
            Boutique por dentro.{" "}
            <span style={{ color: "#eb5c2e" }}>Ecossistema</span>{" "}
            por fora.
          </h2>
          <div className="max-w-3xl space-y-4 mb-12">
            <p className="font-body leading-relaxed" style={{ fontSize: "16px", color: "rgba(245,245,242,0.85)" }}>
              Quem contrata a Pira Labs não recebe um sócio na venda e um analista na entrega. Recebe Gabriela e Celso do diagnóstico ao encerramento.
            </p>
            <p className="font-body leading-relaxed" style={{ fontSize: "16px", color: "rgba(245,245,242,0.85)" }}>
              Boutique é o modelo deliberado. O ecossistema é o que torna isso possível: uma rede de especialistas, parceiros e referências que entra quando o projeto pede, sem virar overhead fixo.
            </p>
          </div>
          <p className="font-body font-semibold uppercase mb-6" style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(245,245,242,0.45)" }}>
            PARA IMPRENSA, PALESTRAS E PARCERIAS
          </p>
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
