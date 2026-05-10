import { Suspense } from "react";
import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import FilloutEmbed from "@/components/shared/FilloutEmbed";
import { SOCIAL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Contato", url: "https://piralabs.com.br/contato" },
]);

export const metadata: Metadata = {
  title: {
    absolute: "Contato · PIRA LABS",
  },
  description:
    "Falar com a PIRA LABS sobre INSPIRA, TRANSPIRA, Oxigênio IA Search, palestras ou mentorias. Respondemos em até dois dias úteis.",
  alternates: {
    canonical: "https://piralabs.com.br/contato",
  },
  openGraph: {
    title: "Contato · PIRA LABS",
    description: "Falar com a PIRA LABS. Respondemos em até dois dias úteis.",
    url: "https://piralabs.com.br/contato",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contato" },
];

export default function ContatoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* CONTATO-1 · Header da página */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Falar com a PIRA LABS"
          subtitle="Conte o contexto. Respondemos em até dois dias úteis."
        />
      </div>

      {/* CONTATO-2 + 3 · Texto introdutório + Formulário Fillout */}
      <Section variant="default" paddingY="lg">
        <p className="text-off-white/70 font-body mb-8 max-w-xl">
          Quanto mais contexto você compartilhar agora, mais útil é a resposta.
        </p>
        <Suspense
          fallback={
            <div className="border border-dashed border-off-white/20 rounded-lg p-10 text-center">
              <p className="text-off-white/40 font-body text-sm">
                Carregando formulário...
              </p>
            </div>
          }
        >
          <FilloutEmbed />
        </Suspense>
      </Section>

      {/* CONTATO-4 · Contato direto */}
      <Section variant="dark" paddingY="lg">
        <h2 className="text-xl font-semibold text-off-white mb-8">
          Contato direto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          {/* Email */}
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-2">
              Email
            </p>
            <a
              href={`mailto:${SOCIAL.EMAIL}`}
              className="text-off-white/85 font-body hover:text-peach transition-colors"
              aria-label="Enviar email para a PIRA LABS"
            >
              {SOCIAL.EMAIL}
            </a>
          </div>

          {/* Localização */}
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-2">
              Localização
            </p>
            <p className="text-off-white/85 font-body">São Paulo, Brasil</p>
          </div>

          {/* LinkedIn */}
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-2">
              LinkedIn
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={SOCIAL.PIRA_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-off-white/70 hover:text-peach transition-colors"
                  aria-label="LinkedIn da PIRA LABS (abre em nova aba)"
                >
                  PIRA LABS
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.GABRIELA_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-off-white/70 hover:text-peach transition-colors"
                  aria-label="LinkedIn de Gabriela Aguiar (abre em nova aba)"
                >
                  Gabriela Aguiar
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.CELSO_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-off-white/70 hover:text-peach transition-colors"
                  aria-label="LinkedIn de Celso Gama (abre em nova aba)"
                >
                  Celso Gama
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Imprensa */}
          <div>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-orange/80 mb-2">
              Imprensa e parcerias
            </p>
            <p className="text-sm text-off-white/60 font-body leading-relaxed">
              Para imprensa e parcerias institucionais, o email acima é o canal
              principal.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
