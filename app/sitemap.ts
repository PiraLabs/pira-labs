import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://piralabs.com.br'
  const now = new Date()

  return [
    // Português (raiz)
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/cases`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // English
    { url: `${base}/en`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/en/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/en/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/en/cases`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/en/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Español
    { url: `${base}/es`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/es/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/es/servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/es/cases`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/es/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Agradecimento (noindex — excluídas de indexação mas declaradas no sitemap)
    { url: `${base}/obrigado`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/en/thank-you`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/es/gracias`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ]
}
