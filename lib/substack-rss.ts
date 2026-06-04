// lib/substack-rss.ts
// Busca e parseia o RSS do Substack da Pira Labs.
// Usado pela página /antes-da-crise como Server Component.

export interface SubstackPost {
  titulo: string;
  data: string;
  previa: string;
  href: string;
}

const FEED_URL = "https://piralabs.substack.com/feed";

function formatarData(pubDate: string): string {
  const d = new Date(pubDate);
  return d.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function extrairTexto(str: string): string {
  return str
    .replace(/<!\[CDATA\[/, "")
    .replace(/\]\]>/, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .trim();
}

function extrairCampo(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\/${tag}>`, "i");
  const match = xml.match(regex);
  return match ? extrairTexto(match[1]) : "";
}

export async function buscarPostsSubstack(limite = 5): Promise<SubstackPost[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 }, // revalida a cada 1 hora
    });

    if (!res.ok) return [];

    const xml = await res.text();

    // Extrai cada <item>
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const posts: SubstackPost[] = [];
    let match;

    while ((match = itemRegex.exec(xml)) !== null && posts.length < limite) {
      const item = match[1];
      const titulo = extrairCampo(item, "title");
      const href = extrairCampo(item, "link");
      const previa = extrairCampo(item, "description");
      const pubDate = extrairCampo(item, "pubDate");

      if (titulo && href) {
        posts.push({
          titulo,
          data: formatarData(pubDate),
          previa,
          href,
        });
      }
    }

    return posts;
  } catch {
    return [];
  }
}
