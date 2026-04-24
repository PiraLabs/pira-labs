# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Contexto da empresa

**Nome:** Pira Labs — Propulsão de Negócios
**Tagline:** Liberamos o próximo nível.
**Categoria:** Creative Business Turnaround
**URL:** piralabs.com.br
**Email:** inspira@piralabs.com.br

**Fundadores (Gabriela sempre primeiro em todo material):**
- Gabriela Aguiar — CEO, lidera INSPIRA. Quase uma década em inovação e VC no Brasil, EUA e países nórdicos. Professora de MBA na FIAP. Mentora FGV Ventures. Em formação em IA no MIT.
- Celso Gama — Co-fundador, lidera TRANSPIRA e operações. Escalou R$16M para R$163M em 24 meses. Virou margem de -64% para +15% em 6 meses na Diageo sem aumentar receita (79pp). Resultados pré-IA.

---

## Comandos de desenvolvimento

```bash
npm install       # instalar dependências
npm run dev       # localhost:3000
npm run build     # build de produção
npm start         # servidor de produção
npm run lint      # linting
```

---

## Stack técnica

- Next.js 15 com App Router, React 19, TypeScript estrito
- Tailwind CSS + variáveis CSS em `app/globals.css` (sem CSS Modules, sem bibliotecas de UI)
- Fontes: Google Fonts via `next/font/google` — Cormorant Garamond (display) + DM Sans (corpo)
- Formulário de contato: FormSubmit (sem backend próprio)
- Deploy: Vercel (região São Paulo)

---

## Arquitetura

### Route groups e i18n

O site é **trilíngue** com rota nativa do App Router:
- **PT:** `app/(pt)/` → URLs `/`, `/sobre`, `/servicos`, `/cases`, `/contato`
- **EN:** `app/en/` → URLs `/en`, `/en/about`, `/en/services`, `/en/cases`, `/en/contact`
- **ES:** `app/es/` → URLs `/es`, `/es/sobre`, `/es/servicos`, `/es/cases`, `/es/contato`

`middleware.ts` injeta o header `x-pathname` em toda requisição. O root `app/layout.tsx` lê esse header para definir o atributo `lang` do `<html>` (`pt-BR`, `en` ou `es`). O root layout só define fontes e o `<html>` — não tem Nav, Footer nem JSON-LD.

### Layouts de idioma

`app/(pt)/layout.tsx`, `app/en/layout.tsx` e `app/es/layout.tsx` são os layouts reais de cada versão. Cada um:
- Define metadata completa (title template, OG, Twitter Card, alternates hreflang)
- Contém o JSON-LD `@graph` completo para o idioma (Organization, Person x2, WebSite, FAQPage)
- Renderiza `<Nav locale="pt|en|es" />`, `<main>`, e `<Footer locale="pt|en|es" />`

**Nunca duplicar JSON-LD em páginas filhas.** Cada layout de idioma é o único ponto de verdade para o schema do seu idioma.

### Conteúdo traduzível

Todo texto do site está em `lib/i18n.ts`:
- `dict.pt`, `dict.en` e `dict.es` — strings organizadas por página/componente
- Mapas de rota: `ROUTE_MAP_PT_TO_EN`, `ROUTE_MAP_EN_TO_PT`, `ROUTE_MAP_PT_TO_ES`, `ROUTE_MAP_ES_TO_PT`
- `getPathInLocale(pathname, targetLocale)` — retorna a URL equivalente no idioma alvo (`'pt' | 'en' | 'es'`)
- `getAlternatePath()` está **deprecada** — usar `getPathInLocale` em código novo

As páginas importam `dict` e os componentes recebem `locale` como prop.

### Componentes

Apenas dois componentes globais existem: `components/Nav.tsx` e `components/Footer.tsx`. Todo o conteúdo das páginas é inline nas próprias pages — não há componentes de seção separados.

`Nav.tsx` é client component (`'use client'`). Usa `usePathname()` para calcular `getPathInLocale()` e renderizar o seletor PT/EN/ES.

---

## Design system

Todas as cores estão registradas no `tailwind.config.ts` como tokens Tailwind E em `app/globals.css` como variáveis CSS e utilities customizadas. Use sempre as classes Tailwind (`bg-navy`, `text-amber`, `bg-cream-dark`). O container padrão de toda seção é `max-w-container mx-auto px-6` (`max-w-container` = 1200px definido em `tailwind.config.ts`).

Variáveis CSS definidas em `app/globals.css`:

```css
--color-navy: #0D1B2A;           /* fundo escuro principal */
--color-navy-mid: #1A2B3C;       /* cards escuros */
--color-amber: #BA7517;          /* acento principal */
--color-amber-light: #D4891F;    /* hover âmbar */
--color-cream: #F5F0E8;          /* fundo claro */
--color-cream-dark: #EDE8DF;     /* seções alternadas */
--color-white: #FAFAF8;          /* texto em fundo escuro (token Tailwind: off-white) */
--color-gray-text: #6B7280;      /* texto secundário */
--color-green-respira: #1F5C35;  /* badge RESPIRA */
--color-blue-inspira: #2A6B8A;   /* badge INSPIRA */

--font-display: 'Cormorant Garamond', Georgia, serif;
--font-body: 'DM Sans', system-ui, sans-serif;

--text-hero: clamp(2.5rem, 6vw, 5rem);
--text-h2: clamp(1.8rem, 4vw, 3rem);
--text-h3: clamp(1.2rem, 2.5vw, 1.75rem);
--section-padding: clamp(4rem, 8vw, 8rem);
--container-max: 1200px;
--container-padding: clamp(1.5rem, 4vw, 3rem);
```

Classes de animação disponíveis em `globals.css`: `fade-up`, `fade-up-delay-1`, `fade-up-delay-2` (entrada com translateY + opacity).

---

## Regras de código

- CSS via Tailwind + variáveis CSS globais — não criar CSS Modules
- Imagens via `next/image` com `alt` descritivo obrigatório
- Todo link externo: `target="_blank" rel="noopener noreferrer"`
- FormSubmit: o formulário usa `action="https://formsubmit.co/inspira@piralabs.com.br"`. Campos ocultos obrigatórios: `_subject`, `_captcha` (false), `_next` (URL de redirect pós-envio).

### Adicionar nova página

Toda nova página exige alterações coordenadas em 8 pontos:

1. `lib/i18n.ts` — adicionar aos 4 mapas de rota (`ROUTE_MAP_PT_TO_EN`, `ROUTE_MAP_EN_TO_PT`, `ROUTE_MAP_PT_TO_ES`, `ROUTE_MAP_ES_TO_PT`)
2. `lib/i18n.ts` — adicionar strings em `dict.pt`, `dict.en` e `dict.es`
3. Criar `app/(pt)/[rota]/page.tsx` com metadata + canonical + hreflang
4. Criar `app/en/[route]/page.tsx` com metadata + canonical + hreflang
5. Criar `app/es/[rota]/page.tsx` com metadata + canonical + hreflang
6. `app/sitemap.ts` — adicionar as 3 novas URLs (PT + EN + ES)
7. `public/llms.txt` e `public/llms-full.txt` — atualizar com o novo conteúdo

---

## Regras de GEO/SEO (não negociáveis)

- JSON-LD `@graph` apenas nos layouts de idioma `(pt)/layout.tsx`, `en/layout.tsx` e `es/layout.tsx`
- `public/llms.txt` e `public/llms-full.txt` devem ser atualizados ao adicionar conteúdo
- `public/robots.txt` lista crawlers de IA liberados por nome
- `app/sitemap.ts` gera as 15 URLs dinamicamente (5 PT + 5 EN + 5 ES)
- Metadata única por página com canonical URL e alternates hreflang (incluir `es` nos hreflang)
- Open Graph e Twitter Card em todas as páginas

---

## Regras de texto e voz

- NUNCA usar travessão em textos
- Português brasileiro por padrão
- Tom: quem já fez e prova com número — não usar adjetivos sem âncora numérica
- Nunca inventar número ou resultado não fornecido
- Gabriela sempre aparece antes de Celso em qualquer lista
- Vocabulário proibido: "em paralelo", "neste contexto", "além disso", "por fim", "o objetivo é", "é importante destacar", "vale ressaltar", "certamente", "com certeza"
