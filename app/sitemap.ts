import type { MetadataRoute } from "next";

// 30 rotas indexáveis do site Pira Labs — jun 2026.
// Rotas antigas (/servicos, /cases, /es/*, etc.) cobertas por redirects 301 no next.config.js.
// EN: /en e /en/creative-business-turnaround têm página real. /en/about e /en/contact suspensos.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://piralabs.com.br";
  return [
    // PT — rotas principais
    { url: `${base}/`,                                        changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/faisca/oxigenio-ia-search`,               changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/sobre`,                                   changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/inspira`,                                 changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/transpira`,                               changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/inspira/juridico`,                        changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/transpira/juridico`,                      changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/creative-business-turnaround`,            changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/como-pensamos`,                           changeFrequency: "monthly", priority: 0.8 },
    // Faísca
    { url: `${base}/faisca`,                                  changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/faisca/juridica`,                         changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faisca/imersao-em-ia`,                    changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faisca/pocket`,                           changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faisca/c-level-as-a-service`,             changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/chama`,                                   changeFrequency: "monthly", priority: 0.7 },
    // GEO — páginas de problema
    { url: `${base}/crescimento-sem-margem`,                  changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/diagnostico-empresa-servicos`,            changeFrequency: "monthly", priority: 0.7 },
    // Glossário
    { url: `${base}/glossario`,                               changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/glossario/creative-business-turnaround`,  changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/glossario/janela-de-oportunidade`,        changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/glossario/antes-da-crise`,                changeFrequency: "monthly", priority: 0.6 },
    // Editorial
    { url: `${base}/antes-pira`,                              changeFrequency: "weekly",  priority: 0.6 },
    { url: `${base}/antes-pira/arquivo`,                      changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/podcast`,                                 changeFrequency: "monthly", priority: 0.5 },
    // Contato e newsletter
    { url: `${base}/contato`,                                 changeFrequency: "yearly",  priority: 0.5 },
    { url: `${base}/newsletter`,                              changeFrequency: "yearly",  priority: 0.5 },
    // Legais
    { url: `${base}/cookies`,                                 changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/politica-privacidade`,                    changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/termos`,                                  changeFrequency: "yearly",  priority: 0.3 },
    // EN — páginas reais
    { url: `${base}/en`,                                      changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/en/creative-business-turnaround`,         changeFrequency: "monthly", priority: 0.5 },
  ];
}
