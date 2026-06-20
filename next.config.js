/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
      resolveAlias: {
        '@': '.',
      },
    },
  async redirects() {
    return [
      // Migração de rota canônica — Oxigênio IA Search
      { source: "/inspira/oxigenio", destination: "/faisca/oxigenio-ia-search", permanent: true },

      // URLs curtas para campanhas
      { source: "/oxigenio", destination: "/faisca/oxigenio-ia-search", permanent: true },
      { source: "/oxigenio-ia-search", destination: "/faisca/oxigenio-ia-search", permanent: true },
      { source: "/faisca/ia-search", destination: "/faisca/oxigenio-ia-search", permanent: true },
      { source: "/turnaround", destination: "/creative-business-turnaround", permanent: true },
      { source: "/cbt", destination: "/creative-business-turnaround", permanent: true },
      // Resíduos do site provisório anterior
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },

      // ATENÇÃO: /sobre e /contato NÃO têm redirect aqui.
      // O GSC reporta "erro de redirecionamento" para essas URLs no site provisório,
      // mas o problema é no site atual, não no v3.5.
      // No v3.5 essas páginas existem com a mesma URL e retornam 200 normalmente.
      // NÃO adicionar redirect para /sobre nem /contato.

      // URLs do site provisório PT (confirmadas no Search Console em 06/05/2026)
      { source: "/servicos", destination: "/inspira", permanent: true },
      // /cases → seção HOME-4 PROVAS (3 cards de resultado verificado)
      { source: "/cases", destination: "/#provas", permanent: true },

      // URLs em inglês do site provisório (5 rotas /en/* do sitemap antigo)
      { source: "/en/services", destination: "/inspira", permanent: true },
      { source: "/en/about", destination: "/sobre", permanent: true },
      { source: "/en/cases", destination: "/#provas", permanent: true },
      { source: "/en/contact", destination: "/contato", permanent: true },

      // Proteção extra — EN sem prefixo /en/ (caso alguém tenha linkado sem prefixo)
      { source: "/services", destination: "/inspira", permanent: true },
      { source: "/about", destination: "/sobre", permanent: true },
      { source: "/contact", destination: "/contato", permanent: true },

      // URLs em espanhol do site provisório (5 rotas /es/* do sitemap antigo)
      // Nota: /es/servicos e /es/contato usam nomenclatura PT incorreta para ES.
      // Manter mapeamento literal das rotas indexadas.
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/sobre", destination: "/sobre", permanent: true },
      { source: "/es/servicos", destination: "/inspira", permanent: true },
      { source: "/es/cases", destination: "/#provas", permanent: true },
      { source: "/es/contato", destination: "/contato", permanent: true },

      // Migração de nomenclatura editorial
      { source: "/antes-da-crise", destination: "/antes-pira", permanent: true },
      { source: "/antesdacrise", destination: "/antes-pira", permanent: true },
      { source: "/glossario/janela-de-decisao", destination: "/glossario/janela-de-oportunidade", permanent: true },
      { source: "/blog", destination: "/antes-pira", permanent: true },
      { source: "/news", destination: "/antes-pira", permanent: true },

      // Migração editorial
      { source: "/empresa-cresce-margem-some", destination: "/crescimento-sem-margem", permanent: true },

      // Pocket e Imersão
      { source: "/imersa", destination: "/faisca/imersao-em-ia", permanent: true },
      { source: "/faisca/imersa-em-ia", destination: "/faisca/imersao-em-ia", permanent: true },
      { source: "/pocket", destination: "/faisca/pocket", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://*.fillout.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "img-src 'self' data: https: blob:",
              "frame-src https://*.fillout.com https://www.youtube.com https://www.youtube-nocookie.com",
              "connect-src 'self' https://va.vercel-scripts.com https://*.fillout.com https://www.google-analytics.com",
              "form-action 'self' https://*.fillout.com",
              "base-uri 'self'",
              "object-src 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
