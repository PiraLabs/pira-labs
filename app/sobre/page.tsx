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
    description: "CEO e cofundadora da Pira Labs, conduz o INSPIRA, o diagnóstico que lê seis camadas do negócio antes de nomear qualquer problema. Mais de uma década em ecossistemas de inovação, parcerias estratégicas e desenvolvimento de negócios. Executiva de Inovação, Ecossistemas e Parcerias na Plug and Play Tech Center Brasil entre 2019 e 2025, conectando startups, corporações, investidores, universidades e governo. Antes, Senior Project Manager em CBRE e JLL entre 2012 e 2019, alocada junto aos times de clientes como Google, Amazon, Meta e X em projetos corporativos de expansão e workplace. Professora e mentora em inovação e empreendedorismo na FIAP e no Instituto Cidades Responsivas. Mentora de startups e empreendedoras na FGV Ventures, FINEP, German Accelerator, Unicamp e Casa B2Mommy. MIT, educação executiva em uso estratégico de IA para negócios, em andamento.",
    sameAs: [
      "https://www.linkedin.com/in/gabrielaaguiarvs/",
      "https://www.wikidata.org/wiki/Q138846653",
      "https://www.crunchbase.com/person/gabriela-aguiar-a12a",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Insper" },
      { "@type": "CollegeOrUniversity", name: "ESAMC" },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Educação executiva em uso estratégico de IA para negócios (em andamento)",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "MIT" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "MBA em Gerenciamento de Marketing",
        credentialCategory: "MBA",
        recognizedBy: { "@type": "EducationalOrganization", name: "Insper" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Graduação em Relações Internacionais",
        credentialCategory: "degree",
        recognizedBy: { "@type": "EducationalOrganization", name: "ESAMC" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Project Management Professional (PMP)",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "PMI" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "LEED Green Associate",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "GBC" },
      },
    ],
    knowsLanguage: [
      { "@type": "Language", name: "Português" },
      { "@type": "Language", name: "Inglês" },
    ],
    knowsAbout: [
      "Creative Business Turnaround",
      "diagnóstico empresarial",
      "IA aplicada à operação",
      "inovação em empresas de serviços",
      "desenvolvimento de negócios",
      "parcerias estratégicas",
      "ecossistemas de inovação",
      "futuro do trabalho",
    ],
  },
  celso: {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://piralabs.com.br/sobre#celso",
    name: "Celso Gama",
    jobTitle: "COO and Co-founder",
    worksFor: { "@id": "https://piralabs.com.br/#organization" },
    description: "COO e cofundador da Pira Labs, conduz o TRANSPIRA, o braço de execução que entra na operação do cliente e sai quando os resultados acordados são verificados. Mais de 25 anos em operações complexas. Diretor de Ativação de Marcas e Eventos na Cheil entre 2014 e 2017, liderou a operação brasileira da Samsung nos Jogos Olímpicos Rio 2016 em parceria com o time da Coreia, com 622 profissionais e mais de 100 fornecedores, e escalou a receita da unidade de R$ 16 milhões para R$ 163 milhões em 24 meses. Bacharelando em Direito (Mackenzie).",
    sameAs: [
      "https://www.linkedin.com/in/celsogama/",
      "https://www.wikidata.org/wiki/Q138846692",
      "https://www.crunchbase.com/person/celso-gama",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Insper" },
      { "@type": "CollegeOrUniversity", name: "ESPM" },
      { "@type": "CollegeOrUniversity", name: "FAAP" },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Applied AI Certificate Program (em andamento)",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "MIT" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "MBA Executivo",
        credentialCategory: "MBA",
        recognizedBy: { "@type": "EducationalOrganization", name: "Insper" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Pós-graduação em Marketing",
        credentialCategory: "postgraduate",
        recognizedBy: { "@type": "EducationalOrganization", name: "ESPM" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Publicidade e Cinema",
        credentialCategory: "degree",
        recognizedBy: { "@type": "EducationalOrganization", name: "FAAP" },
      },
    ],
    award: ["Cannes Lions", "Effie Awards", "MMA", "Wave Festival", "Profissionais do Ano"],
    knowsLanguage: [
      { "@type": "Language", name: "Português" },
      { "@type": "Language", name: "Inglês" },
      { "@type": "Language", name: "Espanhol" },
      { "@type": "Language", name: "Italiano" },
    ],
    knowsAbout: [
      "execução operacional",
      "redesenho de processos",
      "legal ops com IA",
      "governança de uso de IA",
      "Creative Business Turnaround",
      "gestão de P&L",
      "turnaround de margem",
      "governança de PMO",
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
      <section className="bg-teal w-full" aria-labelledby="sobre-gabriela">
        <div className="container-site py-20 md:py-28">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

            {/* COLUNA ESQUERDA — FOTO */}
            <div className="w-full md:w-[42%] shrink-0">
              <div className="w-full overflow-hidden" style={{ aspectRatio: "4/5", borderRadius: "2px" }}>
                <Image
                  src="/gabriela-aguiar.png"
                  alt="Gabriela Aguiar, CEO e cofundadora da Pira Labs"
                  width={640}
                  height={800}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                  priority
                />
              </div>
            </div>

            {/* COLUNA DIREITA — TEXTO */}
            <div className="w-full md:flex-1">

              {/* NOME */}
              <h2 id="sobre-gabriela" className="font-display mb-3" style={{ fontWeight: 600, fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1.1, color: "#F5F5F2", letterSpacing: "-0.02em" }}>
                Gabriela Aguiar
              </h2>

              {/* PAPEL */}
              <p className="font-body mb-6" style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase" }}>
                <span style={{ color: "#e8e0d6" }}>CEO e cofundadora</span>
                <a href="/inspira" style={{ color: "#e8e0d6", textDecoration: "none" }}> · Conduz o INSPIRA</a>
              </p>

              {/* BIO CURTA */}
              <div className="space-y-4 mb-8">
                <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2" }}>
                  Gabriela conduz o INSPIRA na Pira Labs: o diagnóstico que lê seis camadas do negócio antes de nomear qualquer problema. Com mais de uma década em ecossistemas globais de inovação e formação em andamento no MIT Universal AI Foundational Modules, ela chega antes de o mapa existir. A trajetória completa explica por quê.
                </p>
              </div>

              {/* QUOTE */}
              <blockquote className="font-display" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.6, color: "#F5F5F2", fontStyle: "normal", marginTop: "2rem", marginBottom: "2rem", padding: 0 }}>
                &ldquo;O diagnóstico não inventa o problema. <span style={{ color: "#eb5c2e" }}>Revela</span>{" "}o que a fundadora ou o fundador já sentia mas ainda não havia encontrado palavras para nomear.&rdquo;
              </blockquote>

              {/* TRAJETÓRIA COMPLETA */}
              <details className="details-clean" style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                <summary className="font-body" style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "#e8e0d6", cursor: "pointer", listStyle: "none" }}>
                  Trajetória completa →
                </summary>
                <div style={{ marginTop: "1.5rem" }}>
                  <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2", marginBottom: "1rem" }}>
                    São mais de dez anos em ecossistemas de inovação, parcerias estratégicas e desenvolvimento de negócios. Entre 2019 e 2025, como Executiva de Inovação, Ecossistemas e Parcerias na Plug and Play Tech Center Brasil, conectou startups, corporações, investidores, universidades e governo em programas de inovação aberta. Antes disso, entre 2012 e 2019, atuou como Senior Project Manager na CBRE e na JLL, alocada junto aos times de clientes como Google, Amazon, Meta e X em projetos corporativos de expansão e workplace.
                  </p>
                  <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2", marginBottom: "1rem" }}>
                    É professora e mentora em inovação e empreendedorismo na FIAP e no Instituto Cidades Responsivas, e atua em programas de aceleração de empreendedorismo e tecnologia ligados ao ITA e à USP. Como mentora de startups e empreendedoras, passou por FGV Ventures, FINEP, German Accelerator, Unicamp e Casa B2Mommy.
                  </p>
                  <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2", marginBottom: "1rem" }}>
                    Palestrante, moderadora e curadora em eventos de inovação, tecnologia e ecossistemas, incluindo Web Summit, Global Summit, ClimateHack, ABES Summit e o Festival Cidade do Futuro. Foi selecionada para o 90 Day Finn, programa internacional da Helsinki Partners na edição Deep Tech.
                  </p>
                  <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2", marginBottom: "1rem" }}>
                    Cursa educação executiva em uso estratégico de IA para negócios no MIT, em andamento. Tem MBA em Gerenciamento de Marketing pelo Insper e graduação em Relações Internacionais pela ESAMC. É certificada PMP pelo PMI e LEED Green Associate pelo GBC. Fala português e inglês.
                  </p>
                </div>
              </details>

              {/* LINKEDIN */}
              <a href="https://www.linkedin.com/in/gabrielaaguiarvs/" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center gap-2 mt-6 mb-4" style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "#e8e0d6", textDecoration: "none" }} aria-label="LinkedIn de Gabriela Aguiar">
                LinkedIn
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* MICRO-CTA */}
              <a href="/inspira" className="font-body" style={{ display: "block", marginTop: "2rem", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "#e8e0d6", textDecoration: "none" }}>
                Ver o INSPIRA →
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* SOBRE-4 · Celso Gama (Ink) */}
      <section className="bg-ink w-full" aria-labelledby="sobre-celso">
        <div className="mx-auto px-6 py-20 md:py-28" style={{ maxWidth: "720px" }}>

          {/* Eyebrow */}
          <p className="font-body mb-12" style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8e0d6" }}>
            Fundador
          </p>

          {/* FOTO */}
          <div className="w-full overflow-hidden mb-8" style={{ aspectRatio: "4/5", borderRadius: "2px", maxHeight: "560px" }}>
            <Image
              src="/celso-gama.png"
              alt="Celso Gama, COO e cofundador da Pira Labs"
              width={640}
              height={800}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>

          {/* NOME */}
          <h2 id="sobre-celso" className="font-display mt-8 mb-1" style={{ fontWeight: 600, fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, color: "#F5F5F2", letterSpacing: "-0.02em" }}>
            Celso Gama
          </h2>

          {/* PAPEL */}
          <p className="font-body mb-6" style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase" }}>
            <span style={{ color: "#eb5c2e" }}>COO e cofundador</span>
            <a href="/transpira" style={{ color: "#e8e0d6", textDecoration: "none" }}> · Conduz o TRANSPIRA</a>
          </p>

          {/* BIO */}
          <div className="space-y-4 mb-8">
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2" }}>
              Celso entra quando a operação precisa de alguém que já viu isso antes. E já viu muita coisa.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2" }}>
              Vinte e cinco anos dentro de operações complexas: de hubs regionais de multinacionais a empresas de serviços que cresceram, travaram, viraram e, algumas, não voltaram.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2" }}>
              Sabe onde colocar tecnologia e onde colocar gente porque já errou nos dois. Conduz o TRANSPIRA. Entra na operação, trabalha junto com o time, sai quando os resultados acordados são verificados. Não quando o prazo acaba.
            </p>
          </div>

          {/* CREDENCIAIS */}
          <ul className="mb-3 space-y-2">
            <li className="font-body flex items-start gap-2" style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "#e8e0d6", fontWeight: 300 }}>
              <span style={{ color: "#e8e0d6", flexShrink: 0, marginTop: "2px" }}>·</span>
              <span>Bacharelando em Direito (Mackenzie)</span>
            </li>
            <li className="font-body flex items-start gap-2" style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "#e8e0d6", fontWeight: 300 }}>
              <span style={{ color: "#e8e0d6", flexShrink: 0, marginTop: "2px" }}>·</span>
              <span>PMO da operação olímpica de multinacional do setor de tecnologia de consumo, Rio 2016. 622 profissionais coordenados e mais de 100 fornecedores externos</span>
            </li>
            <li className="font-body flex items-start gap-2" style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "#e8e0d6", fontWeight: 300 }}>
              <span style={{ color: "#e8e0d6", flexShrink: 0, marginTop: "2px" }}>·</span>
              <span>MBA Insper · Pós-graduação em Marketing (ESPM) · Publicidade (FAAP)</span>
            </li>
            <li className="font-body flex items-start gap-2" style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "#e8e0d6", fontWeight: 300 }}>
              <span style={{ color: "#e8e0d6", flexShrink: 0, marginTop: "2px" }}>·</span>
              <span>MIT Applied AI Certificate Program (em andamento, 2026)</span>
            </li>
          </ul>

          {/* LINKEDIN */}
          <a href="https://www.linkedin.com/in/celsogama/" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center gap-2 mt-6 mb-12" style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "#e8e0d6", textDecoration: "none" }} aria-label="LinkedIn de Celso Gama">
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
          <div className="max-w-3xl mb-10 overflow-hidden" style={{ aspectRatio: "16/9", borderRadius: "2px" }}>
            <Image
              src="/nos2.png"
              alt="Gabriela Aguiar e Celso Gama, cofundadores da Pira Labs"
              width={1600}
              height={900}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center center" }}
              priority={false}
            />
          </div>
          <div className="max-w-3xl space-y-5 mb-4">
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#05262e" }}>
              Gabriela lê contexto, sinais e movimentos de mercado antes de virarem demanda óbvia. Celso lê operação, gargalo e consequência antes de virarem perda visível. Separadas, essas lentes geram diagnóstico parcial.{" "}
              <span style={{ color: "#eb5c2e" }}>Juntas</span>,
              mostram onde o negócio está travado e o que precisa mudar para avançar sem quebrar o que já funciona.
            </p>
          </div>
          <p className="font-display" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 500, lineHeight: 1.3, color: "#05262e", letterSpacing: "-0.02em", maxWidth: "720px", marginBottom: "48px" }}>
            Não é divisão de trabalho.<br />
            <span style={{ color: "#eb5c2e" }}>É metodologia.</span>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", marginBottom: "0" }}>
            <a href="/inspira" className="font-body font-semibold uppercase" style={{ fontSize: "13px", letterSpacing: "0.10em", color: "#e8e0d6", backgroundColor: "#05262e", padding: "14px 28px", borderRadius: "2px", textDecoration: "none" }}>
              VER O INSPIRA →
            </a>
            <a href="/transpira" className="font-body font-semibold uppercase" style={{ fontSize: "13px", letterSpacing: "0.10em", color: "#05262e", backgroundColor: "#e8e0d6", border: "1px solid #05262e", padding: "14px 28px", borderRadius: "2px", textDecoration: "none" }}>
              VER O TRANSPIRA →
            </a>
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
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2" }}>
              Quem contrata a Pira Labs não recebe um sócio na venda e um analista na entrega. Recebe Gabriela e Celso do diagnóstico ao encerramento.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2" }}>
              Boutique é o modelo deliberado. O ecossistema é o que torna isso possível: uma rede de especialistas, parceiros e referências que entra quando o projeto pede, sem virar overhead fixo.
            </p>
            <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.75, fontWeight: 300, color: "#F5F5F2" }}>
              Nos primeiros seis meses de operação, cinco projetos entregues para cinco clientes: KZ Inteligência em Comunicação, Concordia DPS LLC, Pipa e Sordilli.com. O quinto cliente é um escritório de advocacia com nome preservado a pedido.
            </p>
          </div>
          <p className="font-body font-semibold uppercase mb-6" style={{ fontSize: "10px", letterSpacing: "0.18em", color: "#e8e0d6" }}>
            PARA IMPRENSA, PALESTRAS E PARCERIAS
          </p>
          <MediaKit className="max-w-2xl" />
        </div>
      </section>

      {/* SOBRE-8 · CTA final (Ink) */}
      <FinalCTA
        heading="A gente não precisa de mais do que uma conversa para saber se conseguimos ajudar."
        ctaLabel="RESPIRE"
        origin={ORIGINS.SOBRE}
      />
    </>
  );
}
