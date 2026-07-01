import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { breadcrumbSchema } from "@/lib/schemas/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://piralabs.com.br/" },
  { name: "Newsletter", url: "https://piralabs.com.br/newsletter" },
  { name: "Confirmado", url: "https://piralabs.com.br/newsletter/confirmado" },
]);

export const metadata: Metadata = {
  title: {
    absolute: "Inscrição confirmada · Pira Labs",
  },
  description: "Sua inscrição na Pira de Dentro está confirmada.",
  alternates: {
    canonical: "https://piralabs.com.br/newsletter/confirmado",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Confirmado" },
];

export default function NewsletterConfirmadoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* CONFIRMADO-1 · Header */}
      <div className="bg-ink">
        <PageHeader
          breadcrumbs={breadcrumbs}
          eyebrow="NEWSLETTER"
          h1="Inscrição confirmada."
        />
      </div>

      {/* CONFIRMADO-2 · Mensagem */}
      <Section variant="sand" paddingY="lg">
        <div className="max-w-xl">
          <p
            className="font-body"
            style={{ color: "#05262e", fontSize: "18px", lineHeight: "1.6", marginBottom: "1.5rem" }}
          >
            Inscrição confirmada. A próxima edição da Pira de Dentro chega assim
            que sair. Enquanto isso, o Substack{" "}
            <a
              href="https://piralabs.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1A5568", textDecoration: "underline" }}
            >
              &ldquo;Antes, Pira&rdquo;
            </a>{" "}
            tem tudo o que publicamos até aqui.
          </p>
        </div>
      </Section>
    </>
  );
}
