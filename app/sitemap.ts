import type { MetadataRoute } from "next";

// 12 rotas indexáveis do site PIRA LABS v3.5.
// Rotas antigas (/servicos, /cases, /en/*, /es/*) estão cobertas por
// redirects 301 no next.config.js — não entram no sitemap novo.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://piralabs.com.br";
  return [
    { url: `${base}/`,                               changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/sobre`,                          changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/inspira`,                        changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/inspira/oxigenio`,               changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/transpira`,                      changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/transpira/juridico`,             changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/inspira/juridico`,               changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faisca`,                         changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/faisca/juridica`,                changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/creative-business-turnaround`,   changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/antes-da-crise`,                 changeFrequency: "weekly",  priority: 0.6 },
    { url: `${base}/contato`,                        changeFrequency: "yearly",  priority: 0.5 },
  ];
}
