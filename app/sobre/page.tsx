export const dynamic = 'force-static';

import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { FounderProfile } from "@/components/shared/FounderProfile";
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
    jobTitle: "CEO e Cofundadora",
    worksFor: { "@id": "https://piralabs.com.br/#organization" },
    sameAs: [
      "https://www.linkedin.com/in/gabrielaaguiarvs/",
      "https://www.wikidata.org/wiki/Q138846653",
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
    jobTitle: "COO e Cofundador",
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
    absolute: "Sobre · PIRA LABS · Gabriela Aguiar e Celso Gama",
  },
  description:
    "A Pira Labs é uma boutique brasileira de Creative Business Turnaround. Conheça Gabriela Aguiar e Celso Gama, os fundadores.",
  alternates: {
    canonical: "https://piralabs.com.br/sobre",
    languages: { en: "https://piralabs.com.br/en/about" },
  },
  openGraph: {
    title: "Sobre · PIRA LABS · Gabriela Aguiar e Celso Gama",
    description:
      "Boutique brasileira de Creative Business Turnaround. Gabriela e Celso em cada projeto, do diagnóstico à entrega.",
    url: "https://piralabs.com.br/sobre",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
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
  name: "Sobre · PIRA LABS · Gabriela Aguiar e Celso Gama",
  description:
    "A Pira Labs é uma boutique brasileira de Creative Business Turnaround. Conheça Gabriela Aguiar e Celso Gama, os fundadores.",
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

      {/* SOBRE-1 · Header da página */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Sobre a PIRA LABS"
          subtitle="Boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes que a janela se feche."
        />
      </div>

      {/* SOBRE-2 · Por que a Pira Labs existe */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            A Pira Labs existe para o momento em que o fundador percebe que o
            modelo de trabalho começou a custar mais do que entrega, e que mudar
            enquanto a empresa ainda tem clientes, caixa e reputação é diferente
            de mudar quando não há mais escolha.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Boutique não é eufemismo para pequeno. É escolha deliberada. Cada
            projeto tem Gabriela e Celso do diagnóstico à entrega. Sem camada
            intermediária entre quem entende o problema e quem resolve.
          </p>
        </div>
      </Section>

      {/* SOBRE-3 · Gabriela Aguiar */}
      <Section variant="highlighted" paddingY="lg">
        <FounderProfile
          name="Gabriela Aguiar"
          role="CEO e cofundadora · Conduz o INSPIRA"
          photoSrc="/gabriela-aguiar.jpg"
          photoAlt="Gabriela Aguiar, CEO e cofundadora da Pira Labs"
          bio={[
            "Gabriela lê o que está chegando antes de chegar ao Brasil. Uma carreira construída dentro das redes onde tecnologia, inovação e educação se cruzam: Google, Meta, X, Amazon, entre outras. Não como observadora. Como parte ativa dos projetos, programas e conexões que definem para onde o mercado está indo.",
            "Docente em programas de MBA na FIAP e no Instituto Cidades Responsivas. Mentora de startups na FGV Ventures. Universal AI Foundational Modules (MIT, em andamento, 2026).",
            "O que ela traz para cada projeto não é repertório aplicado de fora. É a capacidade de nomear o que o mercado local ainda não nomeou. Conduz o INSPIRA.",
          ]}
          credentials={[
            "Docente em MBA na FIAP e no Instituto Cidades Responsivas",
            "Mentora de startups na FGV Ventures",
            "Universal AI Foundational Modules (MIT, em andamento, 2026)",
          ]}
          linkedinHref={SOCIAL.GABRIELA_LINKEDIN}
        />
        <blockquote className="mt-10 border-l-2 border-orange/40 pl-6 max-w-2xl">
          <p className="font-display text-xl md:text-2xl italic text-off-white/80 leading-relaxed">
            &ldquo;O diagnóstico não inventa o problema. Revela o que a
            fundadora ou o fundador já sentia mas ainda não havia encontrado
            palavras para nomear.&rdquo;
          </p>
        </blockquote>
      </Section>

      {/* SOBRE-4 · Celso Gama */}
      <Section variant="default" paddingY="lg">
        <FounderProfile
          name="Celso Gama"
          role="COO e cofundador · Conduz o TRANSPIRA"
          photoSrc="/celso-gama.jpg"
          photoAlt="Celso Gama, COO e cofundador da Pira Labs"
          bio={[
            "Celso entra quando a operação precisa de alguém que já viu isso antes. Mais de 25 anos dentro de operações complexas: de multinacionais a empresas de serviços que cresceram, travaram, viraram.",
            "MBA pelo Insper. Pós-graduação em Marketing pela ESPM e Publicidade pela FAAP. Bacharelando em Direito (Mackenzie). Applied AI Certificate Program (MIT, em andamento, 2026).",
            "Sabe onde colocar tecnologia e onde colocar gente porque já errou nos dois. Conduz o TRANSPIRA. Entra na operação, trabalha junto com o time, sai quando os resultados acordados são verificados.",
          ]}
          credentials={[
            "Margem de -64% para +15% em conta de multinacional do setor de bebidas, sem aumento de receita",
            "R$16M para R$163M em 24 meses coordenando 600 pessoas e 100 fornecedores",
            "Applied AI Certificate Program (MIT, em andamento, 2026)",
          ]}
          linkedinHref={SOCIAL.CELSO_LINKEDIN}
        />
        <blockquote className="mt-10 border-l-2 border-orange/40 pl-6 max-w-2xl">
          <p className="font-display text-xl md:text-2xl italic text-off-white/80 leading-relaxed">
            &ldquo;A Pira Labs não sai quando o prazo acaba. Sai quando os
            resultados acordados são verificados.&rdquo;
          </p>
        </blockquote>
      </Section>

      {/* SOBRE-5 · Como as duas lentes trabalham juntas */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-8">
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
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            Gabriela lê contexto, sinais e movimentos de mercado antes de
            virarem demanda óbvia. Celso lê operação, gargalo e consequência
            antes de virarem perda visível. Separadas, essas lentes geram
            diagnóstico parcial. Juntas, mostram onde o negócio está travado e o
            que precisa mudar para avançar sem quebrar o que já funciona.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            Não é divisão de trabalho. É metodologia: o diagnóstico real exige
            as duas perspectivas ao mesmo tempo. Gabriela nomeia o que está
            chegando antes de chegar. Celso executa o redesenho dentro da
            operação, com o time que vai operar depois.
          </p>
        </div>
      </Section>

      {/* SOBRE-6 · O que isso muda para o cliente */}
      <Section variant="default" paddingY="lg">
        <div className="max-w-3xl">
          <p className="text-off-white/85 font-body leading-relaxed text-lg">
            Quem contrata a Pira Labs não recebe um sócio na venda e um analista
            na entrega. Recebe Gabriela e Celso do diagnóstico ao encerramento.
          </p>
        </div>
      </Section>

      {/* SOBRE-7 · Para imprensa, palestras e parcerias */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          Para imprensa, palestras e parcerias
        </h2>
        <MediaKit className="max-w-2xl" />
      </Section>

      {/* SOBRE-8 · CTA final */}
      <FinalCTA
        heading="Existe um próximo nível para o seu negócio. O que está entre você e ele, descobrimos junto."
        ctaLabel="Respire"
        origin={ORIGINS.SOBRE}
      />
    </>
  );
}
