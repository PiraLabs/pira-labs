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
          subtitle="A Pira de Dentro reúne o melhor do Substack &ldquo;Antes, Pira&rdquo;, registros de eventos em que estamos presentes, insights que surgem no trabalho com clientes e o que ficou relevante no período. Uma vez por mês, para quem quer acompanhar a construção de perto."
        />
      </div>

      {/* NEWSLETTER-2 · Formulário */}
      <Section variant="sand" paddingY="lg">
        <NewsletterForm />
      </Section>
    </>
  );
}
