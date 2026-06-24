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
    absolute: "Contato · Pira Labs",
  },
  description:
    "Falar com a Pira Labs sobre INSPIRA, TRANSPIRA, Oxigênio IA Search ou Faísca. Respondemos em até dois dias úteis.",
  alternates: {
    canonical: "https://piralabs.com.br/contato",
  },
  openGraph: {
    title: "Contato · Pira Labs",
    description: "Falar com a Pira Labs. Respondemos em até dois dias úteis.",
    url: "https://piralabs.com.br/contato",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contato" },
];

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://piralabs.com.br/contato#webpage",
  url: "https://piralabs.com.br/contato",
  name: "Contato · Pira Labs",
  description:
    "Falar com a Pira Labs sobre INSPIRA, TRANSPIRA, Oxigênio IA Search ou Faísca. Respondemos em até dois dias úteis.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "pt-BR",
};

export default function ContatoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />

      {/* CONTATO-1 · Header da página */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          h1="Falar com a Pira Labs"
          subtitle="Conte o contexto. Respondemos em até dois dias úteis."
        />
      </div>

      {/* CONTATO-2 + 3 · Texto introdutório + Formulário Fillout */}
      <Section variant="ink" paddingY="lg">
        <p className="font-body mb-8 max-w-xl" style={{ color: '#e8e0d6' }}>
          Quanto mais contexto você compartilhar agora, mais útil é a resposta.
        </p>
        <Suspense
          fallback={
            <div className="p-10 text-center" style={{ border: "1px solid rgba(245,245,242,0.12)" }}>
              <p className="font-body text-sm" style={{ color: "#e8e0d6" }}>
                Carregando formulário...
              </p>
            </div>
          }
        >
          <FilloutEmbed />
        </Suspense>
      </Section>

      {/* CONTATO-4 · Contato direto */}
      <Section variant="ink" paddingY="lg">
        <h2 className="type-h3" style={{ color: '#F5F5F2', marginBottom: '2rem' }}>
          Contato direto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          {/* Email */}
          <div>
            <p className="font-body font-semibold uppercase tracking-widest mb-2" style={{ fontSize: '12px', letterSpacing: '0.14em', color: '#b0a596' }}>
              Email
            </p>
            <a
              href={`mailto:${SOCIAL.EMAIL}`}
              className="font-body transition-colors"
              style={{ color: '#F5F5F2' }}
              aria-label="Enviar email para a Pira Labs"
            >
              {SOCIAL.EMAIL}
            </a>
          </div>

          {/* Localização */}
          <div>
            <p className="font-body font-semibold uppercase tracking-widest mb-2" style={{ fontSize: '12px', letterSpacing: '0.14em', color: '#b0a596' }}>
              Localização
            </p>
            <p className="font-body" style={{ color: '#F5F5F2' }}>São Paulo, Brasil</p>
          </div>

          {/* LinkedIn */}
          <div>
            <p className="font-body font-semibold uppercase tracking-widest mb-2" style={{ fontSize: '12px', letterSpacing: '0.14em', color: '#b0a596' }}>
              LinkedIn
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={SOCIAL.PIRA_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body transition-colors"
                  style={{ color: '#e8e0d6' }}
                  aria-label="LinkedIn da Pira Labs (abre em nova aba)"
                >
                  Pira Labs
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.GABRIELA_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body transition-colors"
                  style={{ color: '#e8e0d6' }}
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
                  className="text-sm font-body transition-colors"
                  style={{ color: '#e8e0d6' }}
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
            <p className="font-body font-semibold uppercase tracking-widest mb-2" style={{ fontSize: '12px', letterSpacing: '0.14em', color: '#b0a596' }}>
              Imprensa e parcerias
            </p>
            <p className="font-body leading-relaxed" style={{ fontSize: '14px', color: '#b0a596' }}>
              Para imprensa e parcerias institucionais, o email acima é o canal
              principal.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
