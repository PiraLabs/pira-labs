// Helper para BreadcrumbList — usado em todas as páginas internas exceto a home.
// Exemplo de uso:
//   breadcrumbSchema([
//     { name: "Home", url: "https://piralabs.com.br/" },
//     { name: "INSPIRA", url: "https://piralabs.com.br/inspira" },
//   ])

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
