import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { FaiscaGroup1 } from "@/components/shared/FaiscaGroup1";
import { FaiscaGroup2 } from "@/components/shared/FaiscaGroup2";
import { FaiscaGroup3 } from "@/components/shared/FaiscaGroup3";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { ORIGINS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const bcSchema = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "FAÍSCA", url: "https://piralabs.com.br/faisca" },
]);

export const metadata: Metadata = {
  title: {
    absolute: "FAÍSCA · Porta de entrada da PIRA LABS",
  },
  description:
    "Engajamentos de tempo curto que ensinam, despertam ou provocam antes de qualquer compromisso maior. Três grupos, sete produtos com preço fixo e escopo fechado.",
  alternates: {
    canonical: "https://piralabs.com.br/faisca",
  },
  openGraph: {
    title: "FAÍSCA · Porta de entrada da PIRA LABS",
    description:
      "Três grupos, sete produtos. Preço fixo. Escopo fechado. Zero atrito de entrada.",
    url: "https://piralabs.com.br/faisca",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Faísca" },
];

export default function FaiscaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      {/* FAISCA-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="FAÍSCA"
          subtitle="A porta de entrada. Engajamentos de tempo curto antes de qualquer compromisso maior."
        />
      </div>

      {/* FAISCA-2 · O que é a FAÍSCA */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-6">
          O que é a FAÍSCA
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-off-white/85 font-body leading-relaxed">
            A FAÍSCA é a camada de entrada da Pira Labs. Cada produto FAÍSCA se
            justifica pelo valor que entrega no preço cobrado, independente do
            que vier depois. O cliente experimenta o método antes de qualquer
            compromisso maior.
          </p>
          <p className="text-off-white/85 font-body leading-relaxed">
            <strong className="text-off-white">Sete produtos em três grupos.</strong>{" "}
            O ponto de entrada certo depende do momento.
          </p>
        </div>
      </Section>

      {/* FAISCA-3 · Grupo 1: Entrada comercial padrão */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
          Grupo 1 · Entrada comercial padrão
        </h2>
        <p className="text-off-white/70 font-body mb-8">
          Preço fixo. Escopo fechado. Zero atrito de entrada.
        </p>
        <FaiscaGroup1 />
      </Section>

      {/* FAISCA-4 · Grupo 2: Autoridade e relacionamento */}
      <Section variant="default" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
          Grupo 2 · Autoridade e relacionamento
        </h2>
        <p className="text-off-white/70 font-body mb-8">
          Constrói audiência e gera leads qualificados. Não exige ciclo longo de
          venda.
        </p>
        <FaiscaGroup2 />
      </Section>

      {/* FAISCA-5 · Grupo 3: Oferta seletiva */}
      <Section variant="highlighted" paddingY="lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-off-white mb-3">
          Grupo 3 · Oferta seletiva
        </h2>
        <p className="text-off-white/70 font-body mb-8">
          Demanda qualificação prévia. Não é oferta de prateleira. A Pira Labs
          responde à demanda, não promove ativamente.
        </p>
        <FaiscaGroup3 />
      </Section>

      {/* FAISCA-6 · CTA final */}
      <FinalCTA
        heading="O ponto de entrada certo depende do momento. Conte o contexto."
        ctaLabel="Respire"
        origin={ORIGINS.FAISCA}
      />
    </>
  );
}
