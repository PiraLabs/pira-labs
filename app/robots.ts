import type { MetadataRoute } from "next";

// 21 crawlers de IA nomeados explicitamente + wildcard.
// Revisar trimestralmente — novos crawlers surgem com frequência.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Redes sociais e apps de mensagem — preview de links
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" },
      { userAgent: "Slackbot", allow: "/" },
      // OpenAI
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Google
      { userAgent: "Google-Extended", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      // Common Crawl (alimenta múltiplos LLMs)
      { userAgent: "CCBot", allow: "/" },
      // Apple
      { userAgent: "Applebot-Extended", allow: "/" },
      // Meta / LLaMA
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      // ByteDance / TikTok
      { userAgent: "Bytespider", allow: "/" },
      // Cohere
      { userAgent: "Cohere-AI", allow: "/" },
      // Amazon (Alexa, Rufus)
      { userAgent: "Amazonbot", allow: "/" },
      // Diffbot (alimenta answer engines)
      { userAgent: "Diffbot", allow: "/" },
      // Outros
      { userAgent: "PiplBot", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "YandexBot", allow: "/" },
      // Padrão para todos os outros bots
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://piralabs.com.br/sitemap.xml",
  };
}
