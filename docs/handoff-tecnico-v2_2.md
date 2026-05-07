# Handoff Técnico v2.2 · Site PIRA LABS
**Versão:** 2.2
**Data:** Maio 2026
**Substitui:** handoff-tecnico-v2_1.md

**Mudanças em relação à v2.1:**
- Sistema de origens expandido para 11 (adiciona `creative_business_turnaround`)
- Tipografia: Groteske + Cormorant Garamond (sistema Caminho C)
- Headers de segurança especificados (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- Robots.txt com 16 crawlers de IA permitidos por nome
- Schema Person com `educationalCredential` para Gabriela e Celso
- Schema LocalBusiness com endereço, areaServed e ContactPoint
- Schema Offer no Oxigênio com `validFrom`, `validThrough`, `eligibleCustomerType`
- Favicon e ícones completos especificados
- Página 404 customizada (`app/not-found.tsx`)
- Banner de cookies LGPD com 3 opções
- OpenGraph e Twitter Card detalhados
- Lista expandida de redirects 301 (incluindo URLs em inglês do site provisório)
- Estrutura preparada para i18n (PT base, EN próximo)

---

## OBJETIVO

Documento de referência técnica para implementação do site `piralabs.com.br`. Especifica stack, dependências, estrutura de pastas, configurações, instalações de skills, comandos do Code, schemas JSON-LD prontos, regras de SEO/GEO, e checklist de validação por fase.

Este é o **documento de referência**. O **Pacote Final v2.3** é o que entra no Code como contexto inicial.

---

## STACK CONFIRMADA

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15, App Router |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS |
| Deploy | Vercel |
| Domínio | `piralabs.com.br` (Locaweb DNS) |
| Email | Google Workspace (`inspira@piralabs.com.br`) |
| Repositório | github.com/PiraLabs/pira-labs |
| Branch atual | `feature/site-base-v09` |
| Branch nova | `feature/site-v3` (criar antes de começar) |
| CMS | Nenhum no primeiro deploy. Conteúdo em `.mdx` |
| Form | Fillout integrado a Notion DB (criação em GPT separado) |
| Análise | Google Search Console, Bing Webmaster, Vercel Analytics |

---

## SETUP DO AMBIENTE LOCAL

### Pré-requisitos (Celso já tem)

- Node.js v25.8.1 (instalado conforme Arsenal Code v3)
- Claude Code v2.1.6 standalone
- Git configurado
- Acesso ao repositório PiraLabs/pira-labs

### Pasta de trabalho

```
C:\Users\Lenovo\PiraLabs\pira-labs\
```

Se ainda não tiver clonado o repositório:

```bash
cd C:\Users\Lenovo\PiraLabs
git clone https://github.com/PiraLabs/pira-labs.git
cd pira-labs
```

Se já clonado, atualizar e criar branch nova:

```bash
cd C:\Users\Lenovo\PiraLabs\pira-labs
git checkout main
git pull
git checkout -b feature/site-v3
```

---

## SKILLS DO CLAUDE CODE A INSTALAR ANTES DO BUILD

O Celso já tem 19 skills instaladas conforme Arsenal Code v3. Para o build do site, **instalar 4 skills adicionais** antes de começar:

### Skills novas a instalar

```bash
# Frontend design ousado e contemporâneo
npx skills add https://github.com/anthropics/skills --skill frontend-design

# Schema markup JSON-LD
npx skills add coreyhaines31/marketingskills --skill schema-markup

# Arquitetura de site
npx skills add coreyhaines31/marketingskills --skill site-architecture

# Auditoria SEO ao final
npx skills add coreyhaines31/marketingskills --skill seo-audit
```

### Skills já instaladas relevantes (não precisa reinstalar)

- `theme-factory` — aplicação de tema visual com paleta
- `brand-guidelines` — aplicação da identidade
- `canvas-design` — visuais e artefatos
- `copywriting` — refinamento de copy se necessário
- `ai-seo` — implementação GEO/AEO
- `product-marketing-context` — contexto de produto

### Verificar skills instaladas

```bash
claude
/skills
```

Deve listar 23 skills (19 + 4 novas).

---

## ENVIRONMENT BOOTSTRAP

Antes da primeira sessão do Code, rodar para capturar snapshot do ambiente. Cole o output no início da primeira mensagem para o Code dentro de bloco `[Environment Snapshot]`.

```bash
cd C:\Users\Lenovo\PiraLabs\pira-labs && \
echo "=== Working dir ===" && pwd && \
echo "=== App listing ===" && dir /b 2>nul || ls -la && \
echo "=== Node version ===" && node --version && \
echo "=== NPM version ===" && npm --version && \
echo "=== Branch atual ===" && git branch --show-current && \
echo "=== Status ===" && git status 2>nul || echo "git status indisponivel"
```

Saída esperada:

```
=== Working dir ===
C:\Users\Lenovo\PiraLabs\pira-labs

=== App listing ===
[lista de arquivos do repositório]

=== Node version ===
v25.8.1

=== NPM version ===
[versão]

=== Branch atual ===
feature/site-v3

=== Status ===
On branch feature/site-v3
nothing to commit, working tree clean
```

---

## ESTRUTURA DE PASTAS

```
pira-labs/
├── app/
│   ├── layout.tsx                       # Layout raiz, header, footer, fonts
│   ├── page.tsx                         # Home /
│   ├── globals.css                      # Tailwind + design tokens (paleta slide 3)
│   ├── sobre/
│   │   └── page.tsx                     # /sobre
│   ├── inspira/
│   │   ├── page.tsx                     # /inspira
│   │   ├── juridico/
│   │   │   └── page.tsx                 # /inspira/juridico
│   │   └── oxigenio/
│   │       └── page.tsx                 # /inspira/oxigenio
│   ├── transpira/
│   │   ├── page.tsx                     # /transpira
│   │   └── juridico/
│   │       └── page.tsx                 # /transpira/juridico
│   ├── faisca/
│   │   ├── page.tsx                     # /faisca
│   │   └── juridica/
│   │       └── page.tsx                 # /faisca/juridica
│   ├── antes-da-crise/
│   │   └── page.tsx                     # /antes-da-crise
│   ├── creative-business-turnaround/
│   │   └── page.tsx                     # /creative-business-turnaround
│   ├── contato/
│   │   └── page.tsx                     # /contato
│   ├── sitemap.ts                       # Sitemap dinâmico
│   ├── robots.ts                        # robots.txt com crawlers de IA
│   └── api/
│       └── (vazio no primeiro deploy)
├── components/
│   ├── shared/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PageHeader.tsx               # Breadcrumb + título
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── TargetProfile.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── FilloutEmbed.tsx             # Embed do Fillout
│   │   └── FounderProfile.tsx
│   └── pages/
│       ├── home/
│       │   ├── Hero.tsx
│       │   ├── Signals.tsx
│       │   ├── Method.tsx
│       │   ├── Proofs.tsx
│       │   ├── FaiscaTeaser.tsx
│       │   └── FoundersTeaser.tsx
│       └── oxigenio/
│           ├── OfferHero.tsx
│           ├── MethodVideo.tsx          # Bloco D4 com flag
│           ├── ScopeBreakdown.tsx
│           ├── WhoDelivers.tsx
│           ├── MethodProof.tsx          # Bloco D1 com flag
│           ├── PulsePocket.tsx          # Bloco oculto por flag
│           └── ApplicationCTA.tsx
├── lib/
│   ├── schemas/
│   │   ├── organization.ts              # Schema Organization global
│   │   ├── website.ts                   # Schema WebSite global
│   │   ├── breadcrumb.ts                # Helper para BreadcrumbList
│   │   └── service.ts                   # Helpers para Service schemas
│   ├── constants.ts                     # FILL_OUT_FORM_URL e outras
│   └── utils.ts
├── content/
│   └── antes-da-crise/
│       └── posts.json                   # Lista manual de posts no primeiro deploy
├── public/
│   ├── images/
│   │   ├── nos.png                      # Foto Gabriela + Celso
│   │   └── og-image.png                 # OpenGraph default
│   ├── well-known/
│   │   └── ai-agents.json               # B2A
│   ├── llms.txt                         # Resumo do site para LLMs
│   └── llms-full.txt                    # Conteúdo completo para LLMs
├── styles/
│   └── (vazio, tudo em globals.css)
├── CLAUDE.md                            # Instruções para o Code
├── tasks/
│   └── lessons.md                       # Self-improvement loop
├── package.json
├── tailwind.config.ts
├── next.config.js                       # Inclui redirects 301
└── tsconfig.json
```

---

## DESIGN TOKENS (PALETA SLIDE 3)

### `globals.css` — Variáveis CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-ink: #0C0F16;
    --color-deep-teal: #05262D;
    --color-teal: #004756;
    --color-orange: #EA6335;
    --color-peach: #F2A85E;
    --color-off-white: #E8E0D6;
  }

  body {
    background-color: var(--color-deep-teal);
    color: var(--color-off-white);
    /* Space Grotesk como substituta de Groteske até licenciamento final (sistema Caminho C) */
    font-family: var(--font-grotesk), system-ui, sans-serif;
  }

  /* Cormorant Garamond apenas em frases canônicas, citações dos fundadores,
     manchetes editoriais e números de destaque. NÃO usar em headers de página,
     navegação, body ou UI. */
  h1, h2, h3, h4 {
    font-family: var(--font-grotesk), system-ui, sans-serif;
    font-weight: 600;
  }
}

@layer components {
  .emphasis-italic {
    font-style: italic;
    font-weight: 500;
    font-family: var(--font-cormorant), Georgia, serif;
  }

  /* ATENÇÃO: botão primário usa ink (#0C0F16) como texto.
     off-white sobre orange falha WCAG AA (contraste ~2.54:1).
     ink sobre orange passa WCAG AA (contraste ~4.7:1). */
  .btn-primary {
    background-color: var(--color-orange);
    color: var(--color-ink);
  }

  .btn-secondary {
    background-color: transparent;
    border: 1px solid var(--color-off-white);
    color: var(--color-off-white);
  }
}
```

### `tailwind.config.ts` — Cores Tailwind

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0C0F16",
        "deep-teal": "#05262D",
        teal: "#004756",
        orange: "#EA6335",
        peach: "#F2A85E",
        "off-white": "#E8E0D6",
      },
      fontFamily: {
        /* Sistema Caminho C: Groteske para tudo (body, UI, headers de página, navegação).
           Space Grotesk como substituta até licenciamento da Groteske oficial.
           Cormorant Garamond apenas em frases canônicas, citações e números de destaque.
           Usar classe `font-display` só nesses contextos específicos. */
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-grotesk)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

### Carregamento de fontes (`app/layout.tsx`)

Sistema **Caminho C**: Space Grotesk para tudo (body, headers de página, UI, navegação) + Cormorant Garamond apenas em frases canônicas, citações dos fundadores e números de destaque. Space Grotesk é a substituta da Groteske até o licenciamento oficial chegar da KZ.

```typescript
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  display: "swap",
});

/* Space Grotesk como substituta de Groteske até licenciamento final.
   Quando chegar: trocar por next/font/local + arquivos .woff2 da Groteske.
   Manter o nome --font-grotesk para não refatorar. */
const grotesk = Space_Grotesk({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-grotesk",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${grotesk.variable}`}>
      <body className="font-body bg-deep-teal text-off-white antialiased">
        {children}
      </body>
    </html>
  );
}
```

### Restrições visuais

- Não usar `orange` como fundo dominante. Acento apenas
- Não criar visual SaaS, dashboard, agência criativa, curso ou consultoria de IA
- Manter estética premium, editorial, sóbria, funcional

---

## DEPENDÊNCIAS NPM

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.5.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

Instalar com:

```bash
npm install
```

---

## CONFIGURAÇÃO DE REDIRECTS E HEADERS DE SEGURANÇA (`next.config.js`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // URLs curtas para campanhas
      { source: "/oxigenio", destination: "/inspira/oxigenio", permanent: true },
      { source: "/oxigenio-ia-search", destination: "/inspira/oxigenio", permanent: true },
      { source: "/faisca/ia-search", destination: "/inspira/oxigenio", permanent: true },
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

      // URL em português do site provisório (confirmada no Search Console em 06/05/2026)
      { source: "/servicos", destination: "/inspira", permanent: true },
      // URL /cases — site provisório tinha página dedicada. No v3.5 os 3 cards de
      // resultados ficam na seção HOME-4 PROVAS. Redirect para a âncora.
      { source: "/cases", destination: "/#provas", permanent: true },
      // URLs em inglês do site provisório (sitemap atual lista 5 rotas /en/*)
      // Decisão: redirect 301 condicional, calibrado caso a caso após varredura completa do GSC.
      // Os redirects abaixo são para as 5 URLs do sitemap conhecido. Se a varredura
      // revelar URLs adicionais, adicionar aqui antes do deploy.
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/services", destination: "/inspira", permanent: true },
      { source: "/en/about", destination: "/sobre", permanent: true },
      { source: "/en/cases", destination: "/#provas", permanent: true },
      { source: "/en/contact", destination: "/contato", permanent: true },
      // URLs em espanhol do site provisório (sitemap atual lista 5 rotas /es/*)
      // Decisão: redirect 301 condicional, calibrado caso a caso após varredura completa do GSC.
      // Atenção: nomenclatura /es/servicos e /es/contato é incorreta para espanhol
      // (deveria ser /servicios e /contacto). Manter mapeamento literal das rotas indexadas.
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/sobre", destination: "/sobre", permanent: true },
      { source: "/es/servicos", destination: "/inspira", permanent: true },
      { source: "/es/cases", destination: "/#provas", permanent: true },
      { source: "/es/contato", destination: "/contato", permanent: true },
      // Migração de nomenclatura editorial
      { source: "/blog", destination: "/antes-da-crise", permanent: true },
      { source: "/news", destination: "/antes-da-crise", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://*.fillout.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "frame-src https://*.fillout.com https://www.youtube.com https://www.youtube-nocookie.com",
              "connect-src 'self' https://va.vercel-scripts.com https://*.fillout.com",
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
```

**Atenções:**
- Redirects do Next preservam query strings por padrão. Confirmar com teste de `?origem=` após deploy
- HSTS preload requer cadastro em https://hstspreload.org/ (recomendado pós-deploy)
- CSP `unsafe-inline` em `script-src` é necessário para o JSON-LD inline. Se for remover, migrar JSON-LD para arquivos externos com hash
- CSP permite `*.fillout.com` para o embed do formulário e `youtube-nocookie.com` para vídeos do D4 (vídeo de método)
- Após deploy, validar headers em https://securityheaders.com/ (meta: classificação A ou A+)

---

## CONSTANTES (`lib/constants.ts`)

```typescript
// Variável do Fillout — deve ser NEXT_PUBLIC_ para ficar disponível no client side do Next.js
export const FILL_OUT_FORM_URL = process.env.NEXT_PUBLIC_FILLOUT_URL || "[INSERIR_URL_FILLOUT_QUANDO_DISPONIVEL]";

export const ORIGINS = {
  HOME: "home",
  SOBRE: "sobre",
  INSPIRA: "inspira",
  INSPIRA_JURIDICO: "inspira_juridico",
  OXIGENIO: "oxigenio",
  TRANSPIRA: "transpira",
  TRANSPIRA_JURIDICO: "transpira_juridico",
  FAISCA: "faisca",
  FAISCA_JURIDICA: "faisca_juridica",
  CREATIVE_BUSINESS_TURNAROUND: "creative_business_turnaround",
  HEADER_GLOBAL: "header_global",
  NOT_FOUND: "404",
  DIRETO: "direto",
} as const;

// 13 origens oficiais. Nota: ANTES_DA_CRISE não é origem própria.
// CTAs do /antes-da-crise usam origem "faisca".
export type Origin = typeof ORIGINS[keyof typeof ORIGINS];

export const SOCIAL = {
  PIRA_LINKEDIN: "https://www.linkedin.com/company/piralabs",
  GABRIELA_LINKEDIN: "https://www.linkedin.com/in/gabrielaaguiarvs/",
  CELSO_LINKEDIN: "https://www.linkedin.com/in/celsogama/",
  EMAIL: "inspira@piralabs.com.br",
  SUBSTACK: "https://piralabs.substack.com",
} as const;

export const FLAGS = {
  D1_ATIVO: process.env.NEXT_PUBLIC_FLAG_D1 === "true",
  D4_ATIVO: process.env.NEXT_PUBLIC_FLAG_D4 === "true",
  PULSO_ATIVO: process.env.NEXT_PUBLIC_FLAG_PULSO === "true",
} as const;

export const VAGAS_OXIGENIO = parseInt(process.env.NEXT_PUBLIC_VAGAS_OXIGENIO || "5", 10);
```

### Variáveis de ambiente (`.env.local`)

```
NEXT_PUBLIC_FILLOUT_URL=https://forms.fillout.com/t/SEU_FORM_ID
NEXT_PUBLIC_FLAG_D1=false
NEXT_PUBLIC_FLAG_D4=false
NEXT_PUBLIC_FLAG_PULSO=false
NEXT_PUBLIC_VAGAS_OXIGENIO=5
```

Configurar também no painel da Vercel (Project Settings > Environment Variables).

---

## SCHEMAS JSON-LD

### Schema global Organization (`lib/schemas/organization.ts`)

```typescript
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://piralabs.com.br/#organization",
  "name": "PIRA LABS",
  "url": "https://piralabs.com.br",
  "email": "inspira@piralabs.com.br",
  "sameAs": [
    "https://www.linkedin.com/company/piralabs",
    "https://www.wikidata.org/wiki/Q138846707"
  ],
  "founder": [
    {
      "@type": "Person",
      "@id": "https://piralabs.com.br/sobre#gabriela-aguiar",
      "name": "Gabriela Aguiar",
      "sameAs": [
        "https://www.linkedin.com/in/gabrielaaguiarvs/",
        "https://www.wikidata.org/wiki/Q138846653"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://piralabs.com.br/sobre#celso-gama",
      "name": "Celso Gama",
      "sameAs": [
        "https://www.linkedin.com/in/celsogama/",
        "https://www.wikidata.org/wiki/Q138846692"
      ]
    }
  ],
  "description": "A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.",
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
    "Antes da Crise",
    "INSPIRA",
    "TRANSPIRA",
    "Oxigênio IA Search"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR",
    "addressLocality": "São Paulo"
  }
};
```

### Schema Person para fundadores

Implementar em `lib/schemas/persons.ts` com:
- Nome, papel, sameAs com Wikidata + LinkedIn
- Credenciais (educationalCredential com Universal AI Foundational Modules para Gabriela, Applied AI Certificate Program para Celso)
- Não usar "MIT" sozinho. Sempre o nome do programa específico

### Schema Service para Oxigênio (com preços reais)

Conforme `copy-inspira-oxigenio-v1.md` seção "SCHEMAS JSON-LD". Inclui Offer com priceSpecification para R$6.200 (primeira rodada) e R$9.800 (regular).

### BreadcrumbList em todas as páginas exceto home

Helper em `lib/schemas/breadcrumb.ts`:

```typescript
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
```

---

## FAVICON E ÍCONES (`app/`)

### Arquivos necessários em `app/` ou `public/`

```
public/
├── favicon.ico                      # 32x32 + 16x16 multi-resolução
├── icon.png                          # 512x512 para Android, gerado a partir do logo
├── apple-icon.png                    # 180x180 para iOS
├── icon-192.png                      # 192x192 para Android (PWA)
├── manifest.json                     # Web App Manifest
└── og-image.png                      # 1200x630 padrão para OpenGraph
```

### Implementação no `app/layout.tsx`

Next.js 15 detecta automaticamente arquivos `favicon.ico`, `icon.png`, `apple-icon.png` em `app/` e gera as tags `<link>` apropriadas. Alternativamente, declarar explicitamente:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://piralabs.com.br"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.json",
};
```

### `manifest.json`

```json
{
  "name": "PIRA LABS — Creative Business Turnaround",
  "short_name": "PIRA LABS",
  "description": "Boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0C0F16",
  "theme_color": "#0C0F16",
  "lang": "pt-BR",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Geração dos ícones

Enquanto a KZ não entrega o logo final, usar versão provisória do logo da PIRA LABS em formato vetorial. Gerar todas as resoluções em PNG via ferramentas como https://realfavicongenerator.net/ ou similares. Após receber o logo final, regerar todos os ícones e substituir.

---

## OPENGRAPH E TWITTER CARD

### Padrão por página

Configurar metadata no nível de cada `page.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Página · PIRA LABS",
  description: "Descrição específica da página, até 155 caracteres.",
  openGraph: {
    title: "Página · PIRA LABS",
    description: "Descrição específica da página, até 155 caracteres.",
    url: "https://piralabs.com.br/pagina",
    siteName: "PIRA LABS",
    images: [
      {
        url: "/og-image.png", // ou específico da página
        width: 1200,
        height: 630,
        alt: "PIRA LABS — Creative Business Turnaround",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Página · PIRA LABS",
    description: "Descrição específica da página.",
    images: ["/og-image.png"],
  },
};
```

### OG images específicas

| Página | Arquivo | Conteúdo sugerido |
|---|---|---|
| `/` | `og-image.png` | Frase canônica + logo |
| `/sobre` | `og-image-sobre.png` | Foto Nós.png recortada + nomes |
| `/inspira/oxigenio` | `og-image-oxigenio.png` | "Oxigênio IA Search · 5 vagas para fundadores · R$6.200" |
| `/creative-business-turnaround` | `og-image-cbt.png` | "Creative Business Turnaround" + frase canônica |
| `/transpira/juridico` | `og-image-transpira-juridico.png` | "TRANSPIRA Jurídico · 400h → 36h" |

Para v1 do deploy, usar apenas `og-image.png` padrão. As OG específicas são otimização posterior.

---

## ROBOTS.TXT (`app/robots.ts`)

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // IA crawlers (permitir conforme plano GEO/AEO v4 + atualizações 2026)
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
      // Meta (LLaMA, Meta AI)
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
      // Padrão para outros bots
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://piralabs.com.br/sitemap.xml",
  };
}
```

**Total:** 21 crawlers especificamente nomeados + wildcard `*`. Esta lista deve ser revisada trimestralmente conforme novos crawlers surgem (especialmente os de answer engines emergentes).

---

## SITEMAP.XML (`app/sitemap.ts`)

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://piralabs.com.br";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/sobre`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/inspira`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/inspira/oxigenio`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/transpira`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/transpira/juridico`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/inspira/juridico`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faisca`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/faisca/juridica`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/creative-business-turnaround`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/antes-da-crise`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contato`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
```

---

## LLMS.TXT E LLMS-FULL.TXT

Arquivos estáticos em `public/`:

**`llms.txt`** (resumo curto, 1 a 2 KB):
```
# PIRA LABS

A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.

## Produtos
- INSPIRA: diagnóstico em cinco leituras paralelas
- TRANSPIRA: execução junto à operação do cliente
- TRANSPIRA Jurídico: redesenho operacional para escritórios e jurídicos corporativos
- Oxigênio IA Search: subproduto do INSPIRA, diagnóstico de presença em motores de IA, R$6.200 primeira rodada
- FAÍSCA: universo educacional, palestras, mentorias, publicação Antes da Crise no Substack

## Fundadores
- Gabriela Aguiar (CEO, conduz INSPIRA)
- Celso Gama (COO, conduz TRANSPIRA)

## Contato
inspira@piralabs.com.br
piralabs.com.br
```

**`llms-full.txt`** (texto completo de todas as páginas, ~30 a 50 KB): conteúdo de todas as páginas em texto puro, sem HTML.

Geração: usar script ou criar manualmente no primeiro deploy.

---

## .WELL-KNOWN/AI-AGENTS.JSON

Arquivo em `public/.well-known/ai-agents.json`:

```json
{
  "version": "0.1",
  "service": "PIRA LABS",
  "description": "Boutique brasileira de Creative Business Turnaround para empresas de serviços",
  "contact": {
    "email": "inspira@piralabs.com.br",
    "url": "https://piralabs.com.br/contato"
  },
  "capabilities": [
    "diagnostic",
    "operational-redesign",
    "ai-search-analysis",
    "speaking-engagement",
    "mentorship"
  ],
  "url": "https://piralabs.com.br"
}
```

---

## INTEGRAÇÃO FILLOUT

### Componente `<FilloutEmbed />`

Implementação preferencial: embed inline com captura de origem.

```typescript
"use client";

import { useEffect, useState } from "react";
import { FILL_OUT_FORM_URL } from "@/lib/constants";

interface FilloutEmbedProps {
  defaultOrigin?: string;
}

export default function FilloutEmbed({ defaultOrigin = "direto" }: FilloutEmbedProps) {
  const [origin, setOrigin] = useState(defaultOrigin);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const o = params.get("origem");
    if (o) setOrigin(o);
  }, []);

  // URL com query string para passar origem ao Fillout
  const formUrl = `${FILL_OUT_FORM_URL}?origem=${origin}`;

  return (
    <iframe
      src={formUrl}
      width="100%"
      height="700"
      style={{ border: "none" }}
      title="Formulário de contato PIRA LABS"
    />
  );
}
```

### Fallback CTA externo

Se embed falhar:

```typescript
<a
  href={`${FILL_OUT_FORM_URL}?origem=${origin}`}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  Iniciar conversa
</a>
```

---

## CHECKLIST DE VALIDAÇÃO POR FASE

### Fase 1 — Estrutura base

- [ ] Branch nova criada (`feature/site-v3`)
- [ ] `npm install` rodou sem erros
- [ ] `npm run dev` abre o site em `localhost:3000`
- [ ] Tailwind funcional (cores e fontes da paleta carregam)
- [ ] Header e Footer renderizando
- [ ] Navegação entre páginas funciona

### Fase 2 — Páginas institucionais

- [ ] `/` (Home) com 7 blocos completos e copy v2.1
- [ ] `/sobre` com bios e quotes aprovadas
- [ ] `/contato` com FilloutEmbed funcional

### Fase 3 — Páginas de serviço

- [ ] `/inspira` com FAQ schema funcional
- [ ] `/transpira` com FAQ schema funcional
- [ ] `/faisca` com 4 frentes e 3 trilhas de palestras

### Fase 4 — Página crítica do Oxigênio

- [ ] `/inspira/oxigenio` com 11 blocos
- [ ] Schema Service com preços reais
- [ ] Schema FAQPage
- [ ] Bloco D1 oculto (FLAG_D1=false)
- [ ] Bloco D4 oculto (FLAG_D4=false)
- [ ] Bloco Pulso oculto (FLAG_PULSO=false)

### Fase 5 — Vertical jurídica

- [ ] `/transpira/juridico` com `index, follow`
- [ ] `/faisca/juridica` com `index, follow`
- [ ] `/inspira/juridico` com `index, follow`
- [ ] Aviso de não consultoria jurídica visível nas três páginas da vertical
- [ ] Case R$160 mil/mês presente apenas em `/transpira/juridico`, não nas outras duas
- [ ] FAQ completo com schema
- [ ] No sitemap

### Fase 6 — Camada GEO/AEO

- [ ] `sitemap.xml` acessível em `/sitemap.xml`
- [ ] `robots.txt` acessível em `/robots.txt`
- [ ] `llms.txt` acessível em `/llms.txt`
- [ ] `.well-known/ai-agents.json` acessível
- [ ] Schemas validando em `validator.schema.org`
- [ ] Verificação Google Search Console
- [ ] Verificação Bing Webmaster Tools

### Fase 7 — Polimento e deploy

- [ ] Lighthouse Mobile: 90+ em Performance, SEO, Accessibility, Best Practices
- [ ] Lighthouse Desktop: 90+ idem
- [ ] Teste de redirects 301
- [ ] Teste de captura de origem em todas as 8 origens
- [ ] Teste de envio do Fillout (lead chega no Notion)
- [ ] HTTPS forçado
- [ ] Headers de segurança configurados na Vercel
- [ ] Deploy em produção

---

## REGRAS NÃO NEGOCIÁVEIS PARA O CODE

1. **Sem travessão (em dash)** em qualquer texto público
2. **PIRA LABS sempre em caixa alta**
3. **Vocabulário proibido:** "travar", "travou", "destravando" e variações; "em paralelo", "neste contexto", "além disso", "por fim", "o objetivo é"; "é importante destacar", "vale ressaltar", "certamente", "com certeza"
4. **Frase canônica intacta** nos primeiros 150 termos da home, sem quebra
5. **Diageo:** anonimizada como "multinacional do setor de bebidas". Posição do Celso descrita como "agência onde eu liderava a operação"
6. **Samsung:** anonimizada como "uma grande marca de tecnologia"
7. **Caso jurídico (R$160K/mês):** marcado como pós-IA com supervisão humana. Nunca como pré-IA
8. **MIT sempre com nome do programa específico**
9. **Celso:** "último ano de Direito na Mackenzie". Nunca "advogado" ou "bacharel"
10. **Gabriela:** sem ITA, com Universal AI Foundational Modules
11. **"Avanços acordados"** em vez de "resultado garantido"
12. **"Respondemos em até dois dias úteis."** em todas as páginas com CTA
13. **Itálico em "trabalho certo" e "trabalho muito"** na tagline TRANSPIRA via CSS, sem aspas
14. **Não inventar conteúdo, dado, claim ou URL.** Onde a copy estiver pendente, deixar placeholder explícito `<!-- COPY PENDENTE: [bloco-id] -->`

---

## TROUBLESHOOTING ESPERADO

### Code travando em sessão longa
- `/clear` para limpar
- `/init` para retomar contexto
- Cole resumo de 3 linhas do que está fazendo

### Build falhando
- Rodar `npm run lint` para ver erros TypeScript
- Verificar `tsconfig.json` strict
- Verificar imports

### Schemas não validando
- Testar em `validator.schema.org`
- Verificar `@id` consistentes
- Verificar JSON-LD bem formado (sem trailing commas)

### Lighthouse abaixo de 90
- Performance: imagens otimizadas, fontes com display swap, código não bloqueante
- SEO: meta tags completas, lang declarado, canonical
- Accessibility: contraste de cores, alt em imagens, aria-labels

---

*Handoff Técnico v2.2 · PIRA LABS · Maio 2026*
*Pareado com: Pacote Final v2.3 · Wireframe v3.5*
