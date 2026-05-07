import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://piralabs.com.br";
  return [
    // Home
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    // Institucional
    { url: `${base}/sobre`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/creative-business-turnaround`, changeFrequency: "monthly", priority: 0.8 },
    // INSPIRA
    { url: `${base}/inspira`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/inspira/oxigenio`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/inspira/juridico`, changeFrequency: "monthly", priority: 0.7 },
    // TRANSPIRA
    { url: `${base}/transpira`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/transpira/juridico`, changeFrequency: "monthly", priority: 0.7 },
    // FAÍSCA
    { url: `${base}/faisca`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/faisca/juridica`, changeFrequency: "monthly", priority: 0.7 },
    // Conteúdo e contato
    { url: `${base}/antes-da-crise`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contato`, changeFrequency: "yearly", priority: 0.5 },
    // Legais (baixa prioridade, mas indexáveis)
    { url: `${base}/politica-privacidade`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/termos`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
