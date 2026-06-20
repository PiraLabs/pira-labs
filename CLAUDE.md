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
**Deploy:** via `deploy.bat "mensagem de commit"` — executa em sequência:
1. `git add -A`
2. `git commit -m "<mensagem>"`
3. `git push origin rebuild-v2`
4. `npx vercel --prod --yes`

O argumento `%~1` é a mensagem do commit. Sem argumento, o commit fica sem mensagem e falha. Exemplo: `deploy.bat "fix: ajuste hero mobile"`.

Scripts disponíveis (referência — não executar via bash):
- `npm run dev` — servidor local (porta 3000), Turbopack desabilitado
- `npm run build` — build de produção Next.js
- `npm run lint` — ESLint com Next.js config
- `npm run capture-win` — captura métricas de build no Windows

---

## Arquitetura técnica

**Stack:** Next.js 16.2.6 App Router · React 19 · TypeScript · Tailwind CSS 3 · Vercel
**Animações:** GSAP 3.15 (produção) — ScrollTrigger e float no home; importar de `gsap/ScrollTrigger`

### Padrões GSAP obrigatórios

**Registro de plugins:** `gsap.registerPlugin(ScrollTrigger)` no topo do módulo (fora do componente), não dentro de `useEffect`.

**Padrão de inicialização segura (SSR):** todo `useEffect` com GSAP usa double-RAF para garantir que o DOM está pintado antes de animar:
```tsx
useEffect(() => {
  let raf1: number, raf2: number
  raf1 = requestAnimationFrame(() => {
    raf2 = requestAnimationFrame(() => {
      // animações aqui
    })
  })
  return () => {
    cancelAnimationFrame(raf1)
    cancelAnimationFrame(raf2)
    tweensRef.current.forEach((t) => t.kill())
    tweensRef.current = []
  }
}, [])
```

**`prefers-reduced-motion`:** verificar via `window.matchMedia("(prefers-reduced-motion: reduce)").matches` antes de criar qualquer tween. Para ScrollTrigger, usar `gsap.set()` para estado estático final e retornar early.

**Cleanup de ScrollTrigger:** matar via `ScrollTrigger.getAll().forEach(t => t.kill())` no return do useEffect quando a seção cria triggers próprios.

**Float (nós animados):** duração lida de `node.dataset.dur`, distância Y 14–18px, X 4–6px, `yoyo: true`, `repeat: -1`, `ease: "sine.inOut"`. Refs via `querySelectorAll(".hero-node")` no SVG.
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
│   └── juridico/
├── transpira/
│   ├── page.tsx
│   └── juridico/
├── faisca/
│   ├── layout.tsx          # layout específico do Faisca
│   ├── page.tsx
│   ├── oxigenio-ia-search/
│   ├── imersao-em-ia/
│   ├── pocket/
│   └── juridica/
├── creative-business-turnaround/
├── chama/                  # palestras, workshops, aulas e mentorias (Gabriela + Celso)
├── antes-pira/             # blog/conteúdo (URL canônica: /antes-pira, não /blog)
│   └── arquivo/            # placeholder — "Em breve"
├── como-pensamos/          # placeholder — "Em breve"
├── podcast/                # placeholder — "Em breve"
├── glossario/              # ativo — 3 termos: creative-business-turnaround, janela-de-oportunidade, antes-da-crise
│   ├── creative-business-turnaround/
│   ├── janela-de-oportunidade/
│   └── antes-da-crise/
└── cookies/ · politica-privacidade/ · termos/
```

### Componentes compartilhados (`/components/shared/`)

| Componente | Função |
|---|---|
| `Header.tsx` | Nav com mega-menu desktop + accordion mobile + toggle de idioma |
| `Footer.tsx` | Colunas com accordion mobile + `LegalNotice` |
| `Section.tsx` | Wrapper com variants: `dark` \| `default` \| `highlighted` + padding presets |
| `NodeSystem.tsx` | Canvas animado com nós (ver seção abaixo) |
| `CTAButton.tsx` | Link com prop `origin` para rastreamento (20 origens em `lib/constants.ts`); variants: `primary` \| `secondary` \| `tertiary`; prop `theme: "dark"\|"light"` |
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
| `MobileMenu.tsx` | Menu mobile full-screen (drawer), invocado pelo Header |

Home-specific (`/components/home/`): cada seção usa par duplo de arquivos. `*SectionClient.tsx` é um thin wrapper `'use client'` que usa `dynamic()` com `{ ssr: false }` para desabilitar SSR do componente GSAP. `*Section.tsx` contém o conteúdo real com as animações. Exemplo: `HeroSectionClient.tsx` importa dinamicamente `HeroSection.tsx`. Seções existentes: Hero · System (fundida com Method — `MethodSection.tsx` é legado, não usar) · Signals · CBT · Faisca · Proofs · Founders · Editorial · FAQ · FinalCTA. `CountUp.tsx` é componente auxiliar de contador animado.

`components/Nav.tsx` e `components/Footer.tsx` na raiz de components são legado — os ativos são `components/shared/Header.tsx` e `components/shared/Footer.tsx`.

### Onde colocar novos componentes

| Situação | Pasta |
|---|---|
| Componente reutilizável entre páginas | `components/shared/` |
| Seção específica da home com GSAP | `components/home/` — criar par `*Section.tsx` + `*SectionClient.tsx` |
| Link/botão simples sem rastreamento de origem | `components/ui/` |
| Componente one-off de uma única página | dentro da própria pasta da rota (`app/[rota]/`) |

Não criar componente em `components/shared/` para uso exclusivo de uma página. Não criar abstração genérica para padrão que ocorre menos de 3 vezes.

### Padrões de implementação

**Nova página:**
```tsx
export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: '...',
  alternates: { canonical: 'https://piralabs.com.br/rota' },
}
```

**Section variants** (prop `variant`):
- `dark` → `bg-ink` (#05262e)
- `highlighted` → `bg-teal` (#004757)
- `default` → `bg-deep-teal` (#05262E — mesmo hex que ink; alias legado)

**Section paddingY** (prop `paddingY`, default `"lg"`):
- `sm` → py-8 / md:py-8
- `md` → py-10 / md:py-16
- `lg` → py-16 / md:py-24
- `xl` → py-20 / md:py-32

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
- `.btn-primary` (BTN-1) — ember bg, texto off-white, uppercase, tracking 0.14em; contraste 3.4:1 (AA large)
- `.btn-secondary` (BTN-2) — outline off-white, fundo transparente; para fundos escuros (ink, teal)
- `.btn-secondary-light` (BTN-2-light) — outline ink; para fundos claros (sand, white)
- `.btn-tertiary` (BTN-3) — link de texto com seta, sem fundo nem borda

**`components/ui/CTAButton.tsx`:** CTAButton alternativo com API diferente do `shared/CTAButton.tsx`. Props: `href`, `label`, `theme: 'light'|'dark'`, `external`. Não usa `origin`. Renderiza texto + seta animada via inline styles. Usar `shared/CTAButton.tsx` para CTAs com rastreamento de origem; usar `ui/CTAButton.tsx` para links simples sem UTM.

### Schemas SEO (`/lib/schemas/`)

- `organization.ts` — Organization + LocalBusiness com fundadores, credentials MIT, sameAs links
- `website.ts` — WebSite com sitelinks search box
- `service.ts` — helpers para INSPIRA/TRANSPIRA/etc.; também exporta `faqPageSchema()` usado na home
- `breadcrumb.ts` — helper BreadcrumbList

`lib/substack-rss.ts` — busca e parseia RSS do Substack (`piralabs.substack.com/feed`) via `fetch` com revalidação de 1h. Exporta `buscarPostsSubstack(limite)` e tipo `SubstackPost`. Usado pela página `/antes-pira` como Server Component.

Todos injetados via `<script type="application/ld+json">` no corpo dos componentes. A home injeta Organization + WebSite + WebPage + FAQPage simultaneamente.

### i18n

`lib/i18n.ts` é legado — não usar para novas implementações, não deletar sem confirmação.
O padrão atual é conteúdo duplicado em componentes PT e EN separados (não dicionário dinâmico).
Rotas EN: arquivos existentes são apenas `app/en/page.tsx` e `app/en/creative-business-turnaround/`. O sitemap referencia `/en/about` e `/en/contact` mas esses arquivos de rota não existem — causam 404 se acessados diretamente.

### NodeSystem (canvas animado)

Props: `density: "sparse"(5) | "medium"(10) | "dense"(19)` · `variant: "dark" | "light"`

4 estados de nó com easing de 800ms cada. Respeita `prefers-reduced-motion`. Conexões entre nós a menos de 200px com opacidade proporcional à distância.

### Variáveis de ambiente

| Var | Status na Vercel | Uso |
|---|---|---|
| `NEXT_PUBLIC_FILLOUT_URL` | **ausente** | URL do iframe Fillout — formulário inativo até configurar |
| `NEXT_PUBLIC_FLAG_D1` | ausente (default `false`) | Feature flag produto D1 |
| `FLAG_D4` | ausente (default `false`) | Feature flag produto D4 (server-side) |
| `FLAG_PULSO` | ausente (default `false`) | Feature flag produto Pulso (server-side) |
| `NEXT_PUBLIC_VAGAS_OXIGENIO` | ausente (default `"5"`) | Vagas exibidas em `/faisca/oxigenio-ia-search` |

Flags ausentes na Vercel resultam em produto oculto (comportamento esperado). Não adicionar valor `"false"` explícito — ausência já desativa. Para ativar um produto, adicionar a var com valor `"true"` no painel da Vercel em Environment Variables → Production.

### Imports

Alias `@/` → raiz do projeto (configurado em `next.config.js` via `turbopack.resolveAlias`).
O bundler em uso é o webpack (padrão Next.js); o bloco `turbopack` no config existe apenas para manter o alias funcionando nos dois modos.

### Headers de segurança e CSP

`next.config.js` aplica headers globais em `/:path*`: HSTS, X-Frame-Options (`SAMEORIGIN`), X-Content-Type-Options, Referrer-Policy e Content-Security-Policy.

**Domínios permitidos na CSP atual:** `va.vercel-scripts.com`, `*.fillout.com`, `googletagmanager.com`, `google-analytics.com`, `youtube.com`, `youtube-nocookie.com`.

Ao adicionar qualquer novo embed, analytics ou fonte externa, atualizar o array CSP em `next.config.js` nas diretivas relevantes (`script-src`, `frame-src`, `connect-src`, etc.) antes de fazer deploy. CSP restritiva quebra embeds silenciosamente no browser sem erro de build.

### Redirects em next.config.js

Atalhos de campanha: `/oxigenio` · `/oxigenio-ia-search` · `/faisca/ia-search` · `/inspira/oxigenio` → `/faisca/oxigenio-ia-search` · `/turnaround` e `/cbt` → `/creative-business-turnaround` · `/imersa` → `/faisca/imersao-em-ia` · `/pocket` → `/faisca/pocket`.

Resíduos do site provisório: `/servicos` → `/inspira` · `/cases` → `/#provas` · `/blog` e `/news` e `/antes-da-crise` e `/antesdacrise` → `/antes-pira` · `/index.html` e `/home` → `/` · rotas `/en/*` e `/es/*` antigas · `/about`, `/services`, `/contact` sem prefixo → equivalentes PT.

Migração editorial: `/glossario/janela-de-decisao` → `/glossario/janela-de-oportunidade` · `/empresa-cresce-margem-some` → `/crescimento-sem-margem`.

Não adicionar redirect para `/sobre` nem `/contato` (essas rotas existem com o mesmo URL e retornam 200).

### `lib/constants.ts` — exports relevantes

- `ORIGINS` — 20 origens do sistema de rastreamento de CTAs; usar via `shared/CTAButton.tsx`
- `FILL_OUT_FORM_URL` / `FILLOUT_URL_HEADER` / `FILLOUT_URL_CONTATO` — URLs Fillout com UTMs embutidos
- `SOCIAL` — links LinkedIn (empresa + Gabriela + Celso), email, Substack
- `FLAGS` — feature flags D1 / D4 / PULSO (controle via env vars)
- `VAGAS_OXIGENIO` — vagas exibidas em `/faisca/oxigenio-ia-search` (default 5)

---

## Regras de execução

- Etapa por etapa. Nunca avançar sem OK explícito do Celso.
- Não inventar copy. Bloco sem copy aprovada → `<!-- COPY PENDENTE: [bloco-id] -->`.
- Não alterar pricing sem confirmação. Preços canônicos: Oxigênio Fast R$3.500 / Full R$5.300 · pocket R$3.900 · Imersão em IA R$7.100.
- Não nomear Diageo nem Johnnie Walker em nenhum texto público.
- Samsung: pode ser nomeada exclusivamente no contexto factual e histórico da operação dos Jogos Olímpicos Rio 2016 (registro público). Fora desse contexto, não nomear.
- Cheil: pode ser nomeada.
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
| deep-teal | `#05262E` | `bg-deep-teal` / `text-deep-teal` (alias legado de ink — preferir `ink`) |
| emberDeep | `#C4421A` | — (uso inline) |
| white | `#F5F5F2` | — (uso inline) |
| taupe | `#B0A596` | `bg-taupe` / `text-taupe` (metadados, texto secundário sobre fundo claro) |

> O Tailwind usa `orange` para ember e `off-white` para sand — nomes distintos do manual de marca. Usar as classes Tailwind no código, os nomes do manual no copy e documentação.

Tokens extintos — nunca usar: `#0C0F16` · `#05262D` · `#EA6335` · `#F2A85E`

Regra do Ember: uma ocorrência singular por contexto visual. Nunca fundo de seção, CTA preenchido ou label.

Nota: `bg-ember` e `bg-orange` são aliases no Tailwind — apontam para o mesmo `#EB5C2E`. Usar `bg-orange` / `text-orange` por convenção; `bg-ember` existe mas não é o padrão.

---

## Tipografia

Fontes exclusivas: AtypDisplay (títulos, CTAs) + AtypText (corpo, nav, UI) — arquivos em `public/fonts/`
Fallback: `'Plus Jakarta Sans', sans-serif` (configurado em `tailwind.config.ts` e `layout.tsx`)
Space Grotesk e Cormorant Garamond estão extintos neste projeto.

CSS vars: `--font-atyp-display` · `--font-atyp-text`
Classes Tailwind: `font-display` / `font-body` (aliases para as vars acima; `font-atypDisplay` e `font-atypText` também disponíveis)

Nota: `AtypText-Regular` ainda não disponível — `AtypText-Medium (500)` serve como 400 até chegar.

### Escala tipográfica canônica (Design System v1)

Classes utilitárias em `globals.css` — usar em vez de compor manualmente font-size + line-height:

| Classe | Tamanho (clamp) | Peso | Uso |
|---|---|---|---|
| `.type-display-xl` | 54px → 120px | 700 | Hero home principal |
| `.type-display` | 52px → 112px | 700 | Hero de página (PageHeader) |
| `.type-h1` | 38px → 72px | 600 | Título principal de seção |
| `.type-h2` | 30px → 48px | 600 | Subtítulo de seção |
| `.type-h3` | 23px → 32px | 600 | Títulos de cards/blocos |
| `.type-h4` | 18px → 22px | 400 | Títulos menores, rótulos |
| `.type-body` | 18px fixo | 400 | Corpo de texto |
| `.type-support` | 14px fixo | 400 | Texto de suporte, legendas |
| `.type-micro` | 12px fixo, uppercase, tracking 0.14em | 600 | Eyebrows, labels de categoria |

Nos commits o `.type-display` é chamado de "DISPLAY" e `.type-micro` de "MICRO".

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
| `ICONE_INK.svg` / `ICONE_BRANCO.svg` / `ICONE_SAND.svg` | Ícone standalone KZ, formato paisagem viewBox 831x293 (ink / branco #F5F5F2 / sand #E8E0D6) |
| `FAISCA_Ink_transp.svg` / `FAISCA_Sand_transp.svg` | Símbolo Faísca (PNG e SVG disponíveis) |
| `INSPIRA_Ink_Sand.svg` / `INSPIRA_Sand_Ink.svg` / `INSPIRA_Teal_Sand.svg` / `TRANSPIRA_Ink_Sand.svg` / `TRANSPIRA_Sand_Ink.svg` / `TRANSPIRA_Teal_Sand.svg` / `RESPIRA_Ink_Sand.svg` / `RESPIRA_Sand_Ink.svg` / `RESPIRA_Teal_Sand.svg` | Wordmarks de submarcas |

Arquivos antigos `logo-completo-*.svg` e `logo-icone-*.svg` foram deletados. Não referenciar.

---

## Estado atual do repositório

- Build: passando
- Rotas no ar: 27 no sitemap (estado jun/2026); /en/about e /en/contact no sitemap mas sem arquivos de rota (404)
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

---

## TypeScript e configuração de path

`tsconfig.json` usa `"strict": true` com target ES2017. O alias `@/` é resolvido via `paths: { "@/*": ["./*"] }` no tsconfig e espelhado em `next.config.js` → `turbopack.resolveAlias`. Ao criar novos arquivos, importar sempre com `@/` e nunca com caminhos relativos além de um nível.

---

## Padrão `'use client'` no projeto

Componentes com GSAP ou estado de browser são sempre `'use client'`. O padrão de par na home (`*SectionClient.tsx` + `*Section.tsx`) existe para manter SSG puro: o `*SectionClient.tsx` usa `dynamic(() => import('./NomeSection'), { ssr: false })` e é o único arquivo com `'use client'`. Nunca adicionar `'use client'` ao arquivo `*Section.tsx` real.

Componentes shared que precisam de estado (ex: `CookieBanner.tsx`, `MobileMenu.tsx`, `LangSetter.tsx`) declaram `'use client'` no próprio arquivo — não usam o padrão de par duplo.

---

## Armadilhas conhecidas

- **CSP quebra embeds silenciosamente:** ao adicionar qualquer iframe/script externo novo, atualizar `next.config.js` antes do deploy. Não há erro de build — só falha no browser.
- **`ScrollTrigger` no SSR:** nunca importar `gsap/ScrollTrigger` em componente sem `'use client'` e sem o double-RAF. O plugin acessa `window` e quebra o build estático.
- **`lib/i18n.ts` legado:** o arquivo existe mas não é usado. Não importar em novos componentes.
- **Fontes Atyp:** `AtypText-Regular` (400) não está disponível — usar `AtypText-Medium` (500) como substituto. Não criar fallback para peso 400 no CSS.
