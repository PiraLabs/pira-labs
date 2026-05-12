// Schema Organization global — inclui LocalBusiness e fundadores com Wikidata.
// Usado no layout root e na página /sobre.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://piralabs.com.br/#organization",
  name: "PIRA LABS",
  url: "https://piralabs.com.br",
  email: "inspira@piralabs.com.br",
  description:
    "A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.",
  sameAs: [
    "https://www.linkedin.com/company/piralabs",
    "https://www.wikidata.org/wiki/Q138846707",
    "https://piralabs.substack.com",
    "https://github.com/PiraLabs/pira-labs",
    "https://www.crunchbase.com/organization/pira-labs",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressLocality: "São Paulo",
    addressRegion: "SP",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "inspira@piralabs.com.br",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
  founder: [
    {
      "@type": "Person",
      "@id": "https://piralabs.com.br/sobre#gabriela-aguiar",
      name: "Gabriela Aguiar",
      jobTitle: "CEO",
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
          recognizedBy: {
            "@type": "Organization",
            name: "MIT",
          },
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://piralabs.com.br/sobre#celso-gama",
      name: "Celso Gama",
      jobTitle: "COO",
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
          recognizedBy: {
            "@type": "Organization",
            name: "MIT",
          },
        },
      ],
    },
  ],
  knowsAbout: [
    "Creative Business Turnaround",
    "empresas de serviços de alto valor",
    "diagnóstico empresarial",
    "redesenho operacional",
    "execução junto à operação",
    "potencial represado",
    "IA aplicada à operação",
    "governança de IA",
    "Antes da Crise",
    "INSPIRA",
    "TRANSPIRA",
    "Oxigênio IA Search",
  ],
};
