# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Versão:** Junho 2026
**Branch ativo:** rebuild-v2

---

## Hierarquia de fontes — ordem de precedência

1. `PiraLabs_ManualDeMarca_v3.md` — visual, grafia, paleta, tipografia, logo, sistema de nós, voz pública
2. `PiraLabs_Documento_Mestre_v15.md` — estratégia, portfólio, ICP, fundadores, evidências, limites
3. `wireframe-completo-site-pira-labs-v5.md` — rotas, blocos, stack, schemas, deploy
4. Este CLAUDE.md — regras de execução desta sessão

Em conflito entre qualquer arquivo e o Manual v3, o Manual v3 prevalece.
Em conflito entre este CLAUDE.md e o wireframe v5, comunicar ao Celso antes de resolver.

---

## Ambiente de desenvolvimento

**Shell Bash:** inoperante neste ambiente Windows — nunca tente rodar comandos shell.
**Ferramentas que funcionam:** Read, Write, Edit, Glob, Grep (ferramentas nativas do Code).
**Diagnóstico de build:** `npm run capture-win` (abre Node.js diretamente, funciona no Windows).
**Deploy:** via `deploy.bat` (git add → commit → push → vercel --prod).

Scripts disponíveis (referência — não executar via bash):
- `npm run dev` — servidor local (porta 3000), Turbopack desabilitado
- `npm run build` — build de produção Next.js
- `npm run lint` — ESLint com Next.js config
- `npm run capture-win` — captura métricas de build no Windows

---

## Arquitetura técnica

**Stack:** Next.js 16.2.6 App Router · React 19 · TypeScript · Tailwind CSS 3 · Vercel
**Animações:** GSAP 3.15 (produção) — ScrollTrigger e float no home; importar de `gsap/ScrollTrigger`
**Conteúdo em .tsx** (não .mdx — decisão deliberada)
**Renderização:** todas as páginas usam `export const dynamic = 'force-static'` (SSG puro)

### Estrutura de rotas

Português é o locale primário (sem prefixo `/pt`). Inglês usa subdiretório `/en`.

```
app/
├── layout.tsx              # root layout: fonts, GA, Header, Footer, schemas globais
├── page.tsx                # home PT
├── robots.ts               # 21 crawlers de IA permitidos explicitamente
├── sitemap.ts              # 19 rotas indexáveis com prioridades
├── api/indexnow/route.ts   # POST endpoint para reindexação rápida
├── en/
│   ├── layout.tsx          # define document.lang="en" via LangSetter
│   ├── page.tsx            # home EN
│   └── creative-business-turnaround/
├── sobre/                  # fundadores (Gabriela + Celso)
├── contato/                # formulário Fillout embed
├── inspira/
│   ├── page.tsx
│   ├── oxigenio/
│   └── juridico/
├── transpira/
│   ├── page.tsx
│   └── juridico/
├── faisca/
│   ├── page.tsx
│   ├── imersa-em-ia/
│   ├── pocket/
│   └── juridica/
├── creative-business-turnaround/
├── antes-pira/             # blog/conteúdo (URL canônica: /antes-pira, não /blog)
│   └── arquivo/            # placeholder — "Em breve"
├── como-pensamos/          # placeholder — "Em breve"
├── podcast/                # placeholder — "Em breve"
├── glossario/              # placeholder — "Em breve"
└── cookies/ · politica-privacidade/ · termos/
```

### Componentes compartilhados (`/components/shared/`)

| Componente | Função |
|---|---|
| `Header.tsx` | Nav com mega-menu desktop + accordion mobile + toggle de idioma |
| `Footer.tsx` | Colunas com accordion mobile + `LegalNotice` |
| `Section.tsx` | Wrapper com variants: `dark` \| `default` \| `highlighted` + padding presets |
| `NodeSystem.tsx` | Canvas animado com nós (ver seção abaixo) |
| `CTAButton.tsx` | Link com prop `origin` para rastreamento (18 origens canônicas em `lib/constants.ts`) |
| `CTAWithMicrocopy.tsx` | CTA com linha de texto auxiliar abaixo |
| `FinalCTA.tsx` | Bloco de encerramento de página com CTA |
| `FAQ.tsx` | `<details>`/`<summary>` nativos + JSON-LD FAQPage inline |
| `FilloutEmbed.tsx` | iframe do formulário Fillout |
| `Breadcrumbs.tsx` | Trilha de navegação + JSON-LD BreadcrumbList |
| `PageHeader.tsx` | Cabeçalho de página interna (título + subtítulo) |
| `OfferHero.tsx` | Hero de página de oferta (produto/serviço) |
| `TargetProfile.tsx` | Bloco "para quem é" com lista de perfis |
| `ProcessSteps.tsx` | Etapas numeradas de processo |
| `FounderProfile.tsx` | Card de fundador (foto + bio) |
| `UnifiedContract.tsx` | Bloco de contrato/proposta unificada |
| `TranspiraConfigurations.tsx` | Variantes de configuração do TRANSPIRA |
| `FaiscaGroup1/2/3.tsx` | Grupos de conteúdo da página Faísca |
| `MediaKit.tsx` | Bloco de kit de mídia |
| `LogoVideo.tsx` | Exibição de vídeo do logo |
| `LegalNotice.tsx` | Aviso jurídico (variant: `"short"` \| `"full"`) |
| `SkipLink.tsx` | Link de acessibilidade "pular para conteúdo" |
| `LangSetter.tsx` | Client component que seta `document.documentElement.lang` |
| `CookieBanner.tsx` | Banner LGPD/GDPR |
| `CookieBannerLoader.tsx` | Lazy loader do CookieBanner (importado no root layout) |
| `HowFirstContact.tsx` | Bloco "como funciona o primeiro contato" |

Home-specific (`/components/home/`): cada seção usa par duplo de arquivos. `*SectionClient.tsx` é um thin wrapper `'use client'` que usa `dynamic()` com `{ ssr: false }` para desabilitar SSR do componente GSAP. `*Section.tsx` contém o conteúdo real com as animações. Exemplo: `HeroSectionClient.tsx` importa dinamicamente `HeroSection.tsx`. Seções existentes: Hero · System · Signals · CBT · Method · Faisca · Proofs · Founders · Editorial · FAQ · FinalCTA. `CountUp.tsx` é componente auxiliar de contador animado.

`components/Nav.tsx` e `components/Footer.tsx` na raiz de components são legado — os ativos são `components/shared/Header.tsx` e `components/shared/Footer.tsx`.

### Padrões de implementação

**Nova página:**
```tsx
export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: '...',
  alternates: { canonical: 'https://piralabs.com.br/rota' },
}
```

**Section variants:**
- `dark` → fundo `ink` (#05262e)
- `highlighted` → fundo `teal` (#004757)
- `default` → fundo padrão

**CTA com rastreamento:**
```tsx
<CTAButton origin="home-hero" />  // origens em lib/constants.ts
```

**FAQ com schema:**
```tsx
<FAQ items={faqItems} />  // gera details/summary + JSON-LD automaticamente
```

**CSS utilities customizadas (globals.css — não recriar via Tailwind):**
- `.emphasis-italic` — AtypDisplay italic weight 500 (frases canônicas, citações, números de destaque)
- `.container-site` — max-width 1200px com padding fluid via clamp
- `.section-padding` — padding-top/bottom 80px mobile / 120px desktop
- `.btn-primary` — botão laranja, texto ink (WCAG AA verificado: contraste 4.7:1)
- `.btn-secondary` — botão outline off-white

**Código legado em `app/page.tsx`:** a partir da linha 138 existe um bloco marcado `/* legado — manter abaixo até refactor completo */` com seções duplicadas das HOME-3 a HOME-8 antigas. Não deletar sem instrução do Celso.

### Schemas SEO (`/lib/schemas/`)

- `organization.ts` — Organization + LocalBusiness com fundadores, credentials MIT, sameAs links
- `website.ts` — WebSite com sitelinks search box
- `service.ts` — helper genérico para INSPIRA/TRANSPIRA/etc.
- `breadcrumb.ts` — helper BreadcrumbList

Todos injetados via `<script type="application/ld+json">` no corpo dos componentes. A home injeta Organization + WebSite + WebPage + FAQPage simultaneamente.

### i18n

`lib/i18n.ts` é legado — não usar para novas implementações, não deletar sem confirmação.
O padrão atual é conteúdo duplicado em componentes PT e EN separados (não dicionário dinâmico).
Rotas EN são MVP mínimo: apenas home e creative-business-turnaround (about e contact foram removidos).

### NodeSystem (canvas animado)

Props: `density: "sparse"(5) | "medium"(10) | "dense"(19)` · `variant: "dark" | "light"`

4 estados de nó com easing de 800ms cada. Respeita `prefers-reduced-motion`. Conexões entre nós a menos de 200px com opacidade proporcional à distância.

### Variáveis de ambiente

| Var | Uso |
|---|---|
| `NEXT_PUBLIC_FILLOUT_URL` | URL do iframe Fillout (não configurada na Vercel — formulário inativo) |
| `NEXT_PUBLIC_FLAG_D1` / `FLAG_D4` / `FLAG_PULSO` | Feature flags de produtos |
| `NEXT_PUBLIC_VAGAS_OXIGENIO` | Vagas disponíveis (default 5) |

### Webpack / imports

Alias `@/` → raiz do projeto (configurado em `next.config.js` via `webpack.resolve.alias`).
Turbopack está **desabilitado** (`experimental.turbopack: false`) — usar webpack.

---

## Regras de execução

- Etapa por etapa. Nunca avançar sem OK explícito do Celso.
- Não inventar copy. Bloco sem copy aprovada → `<!-- COPY PENDENTE: [bloco-id] -->`.
- Não alterar pricing sem confirmação. Preços canônicos: Oxigênio Fast R$3.500 / Full R$5.300 · pocket R$3.900 · Imersão em IA R$7.100.
- Não nomear Diageo nem Samsung em nenhum texto público.
- Antes de editar arquivo existente, mostrar o diff e aguardar confirmação.
- Nunca deletar arquivo sem confirmação explícita.
- Após cada fase concluída, commitar com mensagem descritiva.

---

## Grafia canônica — obrigatória em todo texto público

| Contexto | Grafia |
|---|---|
| Logotipo | PiraLabs |
| Texto corrido | Pira Labs |
| Nunca usar | PIRA LABS · PIRALABS · piralabs |
| Publicação | Antes, Pira (com vírgula) |
| URL da publicação | /antes-pira |

---

## Design tokens canônicos

| Conceito | Hex | Classe Tailwind |
|---|---|---|
| ink | `#05262e` | `bg-ink` / `text-ink` |
| teal | `#004757` | `bg-teal` / `text-teal` |
| ember | `#EB5C2E` | `bg-orange` / `text-orange` |
| sand / off-white | `#E8E0D6` | `bg-off-white` / `text-off-white` |
| tealMid | `#1A5568` | — (uso inline) |
| emberDeep | `#C4421A` | — (uso inline) |
| white | `#F5F5F2` | — (uso inline) |

> O Tailwind usa `orange` para ember e `off-white` para sand — nomes distintos do manual de marca. Usar as classes Tailwind no código, os nomes do manual no copy e documentação.

Tokens extintos — nunca usar: `#0C0F16` · `#05262D` · `#EA6335` · `#F2A85E`

Regra do Ember: uma ocorrência singular por contexto visual. Nunca fundo de seção, CTA preenchido ou label.

---

## Tipografia

Fontes exclusivas: AtypDisplay (títulos, CTAs) + AtypText (corpo, nav, UI) — arquivos em `public/fonts/`
Fallback: `'Plus Jakarta Sans', sans-serif` (configurado em `tailwind.config.ts` e `layout.tsx`)
Space Grotesk e Cormorant Garamond estão extintos neste projeto.

CSS vars: `--font-atyp-display` · `--font-atyp-text`
Classes Tailwind: `font-display` / `font-body` (aliases para as vars acima; `font-atypDisplay` e `font-atypText` também disponíveis)

Nota: `AtypText-Regular` ainda não disponível — `AtypText-Medium (500)` serve como 400 até chegar.

---

## Grafia das submarcas

| Elemento | Grafia correta |
|---|---|
| Faísca | Title Case |
| INSPIRA | ALL CAPS |
| TRANSPIRA | ALL CAPS |
| RESPIRA | ALL CAPS · peso Light 300 |
| Oxigênio | Title Case |
| pocket do INSPIRA | p minúsculo + INSPIRA em caps |
| Faísca Jurídica | Title Case |

---

## Vocabulário proibido em todo texto público

Travessão (—) · "em paralelo" · "neste contexto" · "além disso" · "por fim" · "o objetivo é" · "é importante destacar" · "vale ressaltar" · "certamente" · "com certeza" · "fundador no teto" · "Mentorias" como produto

---

## Assets de marca (`/public/brand/`)

Nomenclatura atual (pós-redesign jun/2026):

| Arquivo | Uso |
|---|---|
| `COMPLETA_OFFWHITE.svg` | Logo completo fundo escuro (footer, header dark) |
| `COMPLETA_BRANCA.svg` | Logo completo branco puro |
| `COMPLETA_INK.svg` | Logo completo ink (fundo claro) |
| `ICONE_BRANCO.svg` / `ICONE_INK.svg` / `ICONE_SAND.svg` | Ícone isolado nas três variações |
| `FAISCA_Ink_transp.svg` / `FAISCA_Sand_transp.svg` | Símbolo Faísca (PNG e SVG disponíveis) |
| `INSPIRA_Ink_Sand.png` / `RESPIRA_Ink_Sand.png` / `TRANSPIRA_Ink_Sand.png` | Wordmarks de submarcas |

Arquivos antigos `logo-completo-*.svg` e `logo-icone-*.svg` foram deletados. Não referenciar.

---

## Estado atual do repositório

- Build: passando
- Rotas no ar: 15 indexáveis (estado mai/2026)
- Branch ativo: rebuild-v2
- Formulário Fillout: NEXT_PUBLIC_FILLOUT_URL não configurado na Vercel
- lib/i18n.ts: legado — não usar, não deletar sem confirmação
- Foto home: /nos.png (aprovada, não substituir)
- Fotos /sobre: placeholder intencional — não gerar nem substituir sem instrução do Celso
- Playwright (`^1.59.1`): instalado como devDep, sem testes escritos até jun/2026

---

## Dados canônicos

```
CNPJ:    46.954.891/0001-16
Email:   inspira@piralabs.com.br
Site:    piralabs.com.br
```
