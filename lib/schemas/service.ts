// Helper genérico para schemas Service.
// Cada página de produto (INSPIRA, TRANSPIRA, Oxigênio, etc.) cria sua instância
// passando os campos relevantes. A página do Oxigênio adiciona priceSpecification
// diretamente com Offer (ver copy-inspira-oxigenio-v1.md seção SCHEMAS JSON-LD).

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string; // "@id" da Organization — default: organização principal
  areaServed?: string;
  serviceType?: string;
}

export function serviceSchema({
  name,
  description,
  url,
  provider = "https://piralabs.com.br/#organization",
  areaServed = "Brasil",
  serviceType,
}: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@id": provider,
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    ...(serviceType ? { serviceType } : {}),
  };
}

// Helper para FAQPage — aceita array de Q&A.
// Usado em /inspira, /transpira, /faisca, /transpira/juridico e /faisca/oxigenio-ia-search.
export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
