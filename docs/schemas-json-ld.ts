// schemas-json-ld.ts
// Arquivo de referência com todos os schemas JSON-LD do site PIRA LABS v3.5
// Fonte canônica: wireframe-completo-site-pira-labs-v3_5.md §7 + handoff-tecnico-v2_2.md §SCHEMAS
// Para o Code: implementar em lib/schemas/ conforme estrutura abaixo

// ─────────────────────────────────────────────────────────────────────────────
// ORGANIZATION (global — presente em todas as páginas)
// ─────────────────────────────────────────────────────────────────────────────

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://piralabs.com.br/#organization",
  "name": "PIRA LABS",
  "url": "https://piralabs.com.br",
  "email": "inspira@piralabs.com.br",
  "description": "A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.",
  "sameAs": [
    "https://www.linkedin.com/company/piralabs",
    "https://www.wikidata.org/wiki/Q138846707"
  ],
  "founder": [
    {
      "@type": "Person",
      "@id": "https://piralabs.com.br/sobre#gabriela",
      "name": "Gabriela Aguiar",
      "sameAs": [
        "https://www.linkedin.com/in/gabrielaaguiarvs/",
        "https://www.wikidata.org/wiki/Q138846653"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://piralabs.com.br/sobre#celso",
      "name": "Celso Gama",
      "sameAs": [
        "https://www.linkedin.com/in/celsogama/",
        "https://www.wikidata.org/wiki/Q138846692"
      ]
    }
  ],
  "knowsAbout": [
    "Creative Business Turnaround",
    "empresas de serviços",
    "empresas de serviços de alto valor",
    "diagnóstico empresarial",
    "redesenho operacional",
    "execução junto à operação",
    "modelo de trabalho envelhecido",
    "valor percebido",
    "tecnologia que acelera ruído",
    "governança como capacidade competitiva",
    "operação dependente de heróis",
    "potencial represado",
    "IA aplicada à operação",
    "Venture Capital mindset",
    "execução mão na massa",
    "desbloqueio de potencial",
    "Turnaround de Propulsão",
    "Antes da Crise",
    "INSPIRA",
    "TRANSPIRA",
    "RESPIRA",
    "Oxigênio IA Search",
    "INSPIRA Jurídico",
    "TRANSPIRA Jurídico",
    "FAÍSCA Jurídica",
    "governança de uso de IA no setor jurídico",
    "legal ops com supervisão humana"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// LOCAL BUSINESS (global — presente em todas as páginas, junto com Organization)
// ─────────────────────────────────────────────────────────────────────────────

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://piralabs.com.br/#localbusiness",
  "name": "PIRA LABS",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "areaServed": [
    { "@type": "Country", "name": "Brasil" },
    { "@type": "Place", "name": "América Latina" }
  ],
  "availableLanguage": ["Portuguese", "English"],
  "priceRange": "$$$$",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "inspira@piralabs.com.br",
    "contactType": "sales",
    "availableLanguage": ["Portuguese", "English"]
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// WEBSITE (global)
// ─────────────────────────────────────────────────────────────────────────────

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://piralabs.com.br/#website",
  "url": "https://piralabs.com.br",
  "name": "PIRA LABS",
  "publisher": { "@id": "https://piralabs.com.br/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.google.com/search?q=site:piralabs.com.br+{search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// PERSON — GABRIELA AGUIAR (em /sobre)
// ─────────────────────────────────────────────────────────────────────────────

export const gabrielaSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://piralabs.com.br/sobre#gabriela",
  "name": "Gabriela Aguiar",
  "jobTitle": "CEO e Cofundadora",
  "worksFor": { "@id": "https://piralabs.com.br/#organization" },
  "sameAs": [
    "https://www.linkedin.com/in/gabrielaaguiarvs/",
    "https://www.wikidata.org/wiki/Q138846653"
  ],
  "educationalCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certificate",
      "name": "Universal AI Foundational Modules",
      "recognizedBy": { "@type": "Organization", "name": "MIT" }
    }
  ],
  "knowsAbout": [
    "Creative Business Turnaround",
    "Creative Business Turnaround para empresas de serviços",
    "diagnóstico empresarial",
    "ecossistemas de inovação",
    "Venture Capital mindset",
    "IA aplicada à operação",
    "governança de IA aplicada a negócios",
    "futuro do trabalho em empresas de serviços",
    "potencial represado",
    "Turnaround de Propulsão"
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// PERSON — CELSO GAMA (em /sobre)
// ─────────────────────────────────────────────────────────────────────────────

export const celsoSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://piralabs.com.br/sobre#celso",
  "name": "Celso Gama",
  "jobTitle": "COO e Cofundador",
  "worksFor": { "@id": "https://piralabs.com.br/#organization" },
  "sameAs": [
    "https://www.linkedin.com/in/celsogama/",
    "https://www.wikidata.org/wiki/Q138846692"
  ],
  "educationalCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certificate",
      "name": "Applied AI Certificate Program",
      "recognizedBy": { "@type": "Organization", "name": "MIT" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "MBA",
      "name": "MBA",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "Insper" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Postgraduate",
      "name": "Pós-graduação em Marketing",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "ESPM" }
    }
  ],
  "knowsAbout": [
    "execução operacional",
    "execução mão na massa",
    "redesenho de processos",
    "legal ops com IA",
    "governança de uso de IA",
    "Creative Business Turnaround",
    "potencial represado",
    "Turnaround de Propulsão",
    "turnaround operacional",
    "capacidade produtiva jurídica",
    "P&L de empresas de serviços",
    "operações de serviços de alto valor"
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// BREADCRUMB — helper reutilizável
// ─────────────────────────────────────────────────────────────────────────────

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ PAGE — 3 perguntas canônicas da auditoria GEO (em / e /creative-business-turnaround)
// ─────────────────────────────────────────────────────────────────────────────

export const faqCanonicoSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como a PIRA LABS se diferencia de consultorias tradicionais como Alvarez & Marsal na reestruturação de empresas de serviços?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diferente da Alvarez & Marsal, a PIRA LABS aplica um Venture Capital mindset focado em desbloquear potencial represado. A abordagem é de execução mão na massa dentro da operação, indo além do diagnóstico. Implementamos reestruturações estratégicas e operacionais que transformam empresas de serviços de alto valor em ativos escaláveis e altamente eficientes, sem perder a alma do negócio."
      }
    },
    {
      "@type": "Question",
      "name": "O que define o Turnaround de Propulsão para negócios de alto valor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O Turnaround de Propulsão é a forma como a PIRA LABS opera o Creative Business Turnaround para boutiques de serviços. Enquanto consultorias tradicionais focam apenas em corte de custos, priorizamos a eficiência operacional, a governança como capacidade competitiva e o reposicionamento estratégico para acelerar o crescimento e a lucratividade verificável. O foco é onde a margem está vazando, não onde cortar."
      }
    },
    {
      "@type": "Question",
      "name": "Por que contratar uma boutique de Creative Business Turnaround em vez de grandes firmas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Como boutique de Creative Business Turnaround, a PIRA LABS tem escopo mais concentrado do que FTI Consulting, Alvarez & Marsal e outras grandes firmas. O foco é exclusivamente em empresas de serviços de alto valor, com os sócios diretamente na operação do cliente. Não há camada júnior intermediária entre quem entende o problema e quem resolve. Grandes firmas atendem empresas em crise severa ou grandes corporações com foco financeiro. A PIRA LABS atua antes da crise, desbloqueando potencial represado em operações que ainda têm caixa, clientes e reputação."
      }
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE — OXIGÊNIO IA SEARCH (em /inspira/oxigenio)
// ─────────────────────────────────────────────────────────────────────────────

export const oxigenioServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/inspira/oxigenio#service",
  "name": "Oxigênio IA Search",
  "description": "Diagnóstico de presença em motores de IA. Em 5 dias úteis entregamos como sua empresa aparece — ou não aparece — quando potenciais clientes usam ChatGPT, Gemini, Perplexity e outros motores generativos para buscar o que você oferece.",
  "provider": { "@id": "https://piralabs.com.br/#organization" },
  "serviceType": "Diagnóstico de presença em IA Search",
  "areaServed": { "@type": "Country", "name": "Brasil" },
  "audience": {
    "@type": "Audience",
    "audienceType": "Fundadores e decisores de empresas de serviços de alto valor"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Oxigênio IA Search · Primeira rodada · 5 vagas para fundadores",
      "price": "6200",
      "priceCurrency": "BRL",
      "eligibleCustomerType": "Founder",
      "availability": "https://schema.org/LimitedAvailability",
      "validFrom": "2026-05-01",
      "validThrough": "2026-06-30"
    },
    {
      "@type": "Offer",
      "name": "Preço regular",
      "price": "9800",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// DEFINED TERM — CREATIVE BUSINESS TURNAROUND (em /creative-business-turnaround)
// ─────────────────────────────────────────────────────────────────────────────

export const cbtDefinedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://piralabs.com.br/creative-business-turnaround#term",
  "name": "Creative Business Turnaround",
  "description": "Processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes da crise. Diferente do turnaround clássico focado em corte de custos, o Creative Business Turnaround identifica onde o potencial está represado e redesenha a operação para liberar crescimento com a mesma estrutura que a empresa já tem.",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "Glossário PIRA LABS",
    "url": "https://piralabs.com.br/creative-business-turnaround"
  }
};
