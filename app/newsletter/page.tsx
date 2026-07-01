import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";
import NewsletterForm from "@/components/shared/NewsletterForm";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Newsletter", url: "https://piralabs.com.br/newsletter" },
]);

export const metadata: Metadata = {
  title: {
    absolute: "Newsletter · Pira Labs",
  },
  description:
    "A Pira de Dentro reúne o melhor do Substack, registros de eventos, insights de clientes e o que ficou relevante no período. Uma vez por mês.",
  alternates: {
    canonical: "https://piralabs.com.br/newsletter",
  },
  openGraph: {
    title: "Newsletter · Pira Labs",
    description:
      "A Pira de Dentro reúne o melhor do Substack, registros de eventos, insights de clientes e o que ficou relevante no período. Uma vez por mês.",
    url: "https://piralabs.com.br/newsletter",
    images: [{ url: "/piralabs-og-image.png", width: 1200, height: 630, alt: "Pira Labs" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Newsletter" },
];

const newsletterPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/newsletter#webpage",
  url: "https://piralabs.com.br/newsletter",
  name: "Newsletter · Pira Labs",
  description:
    "A Pira de Dentro reúne o melhor do Substack, registros de eventos, insights de clientes e o que ficou relevante no período. Uma vez por mês.",
  isPartOf: { "@id": "https://piralabs.com.br/#website" },
  inLanguage: "pt-BR",
};

export default function NewsletterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsletterPageSchema) }}
      />

      {/* NEWSLETTER-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          eyebrow="NEWSLETTER"
          h1="O que acontece na Pira antes de virar conteúdo."
          subtitle="Uma vez por mês, o que acontece dentro da Pira Labs antes de chegar em qualquer canal."
        />
      </div>

      {/* NEWSLETTER-2 · Ancoragem + formulário em duas colunas */}
      <Section variant="sand" paddingY="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Coluna esquerda · ancoragem */}
          <div>
            <h2 className="type-h2" style={{ color: "#05262e", marginBottom: "1.5rem" }}>
              O que a Pira vê <span style={{ color: "#C4421A" }}>antes</span> de publicar.
            </h2>
            <p
              className="font-body"
              style={{ color: "#05262e", fontSize: "18px", lineHeight: "1.6" }}
            >
              O &ldquo;Antes, Pira&rdquo; do mês, os eventos em que estivemos, o que
              surgiu no trabalho com clientes e o que chegou cedo demais para virar
              post.
            </p>
          </div>

          {/* Coluna direita · formulário */}
          <div>
            <NewsletterForm />
          </div>
        </div>
      </Section>
    </>
  );
}
