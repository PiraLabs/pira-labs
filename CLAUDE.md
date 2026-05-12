# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Ler este arquivo inteiro antes de qualquer ação.**
**Versão:** 1.6 · Maio 2026
**Comando de inicialização:** `/init` no início de cada sessão

---

## COMANDOS

```bash
npm run dev       # servidor local em localhost:3000
npm run build     # build de produção (obrigatório antes de qualquer deploy)
npm run lint      # ESLint — resolver antes de commitar
npm run capture   # captura screenshots de benchmark via Playwright
```

> **O shell Bash é PERMANENTEMENTE inoperante neste ambiente Windows.** Nunca usar a Bash tool para nenhum comando. Todos os comandos de terminal (npm, git) rodam em CMD separado pelo Celso, ou via `! comando` no prompt do Claude Code.

---

## QUEM É O CELSO E O QUE ESTAMOS CONSTRUINDO

Celso Gama, COO e cofundador da PIRA LABS. Estamos construindo o site institucional da PIRA LABS v3.5 em Next.js 15 com TypeScript e Tailwind CSS, deployado na Vercel.

O pacote completo já foi validado (6 camadas de validação GPT, C=0,96). Não há nada a decidir estrategicamente. O trabalho aqui é implementar com fidelidade ao que está nos arquivos `docs/`.

---

## REGRAS ABSOLUTAS — NUNCA VIOLAR

1. **Sem travessão** em nenhum texto público renderizado no site
2. **PIRA LABS** sempre em caixa alta em todo texto renderizado
3. **Botão primário:** `background: #EA6335 (orange)` com `color: #0C0F16 (ink)`. Nunca off-white no botão primário.
4. **`/faisca/juridica`** é página própria indexável. Sem redirect. Nunca redirecionar para `/transpira/juridico`.
5. **Fonte de verdade do formulário:** `docs/prompt-fillout-notion-v2.md`. Não criar campos manualmente na página `/contato`.
6. **Sem inventar copy.** Se um bloco não tiver conteúdo definido nos arquivos `docs/`, criar placeholder explícito e registrar em `tasks/lessons.md`.
7. **Plano antes de executar.** Para cada fase ou tarefa complexa: propor o plano, aguardar confirmação, então executar.
8. **Escopo explícito de copy.** Só alterar o texto que foi pedido. Nunca propagar correção de copy para outras páginas sem confirmação do Celso.

---

## STACK

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS
- **Deploy:** Vercel
- **DNS:** Locaweb (não mexer)
- **Email:** Google Workspace (não mexer)
- **Repositório:** github.com/PiraLabs/pira-labs (branch: master)
- **Formulário:** Fillout (embed via `NEXT_PUBLIC_FILLOUT_URL`)
- **CRM:** Notion (configurado separadamente)
- **Analytics:** Vercel Analytics (opt-in via cookie)

---

## TIPOGRAFIA (SISTEMA CAMINHO C)

```typescript
// Duas fontes. Cada uma com papel específico.
// Space Grotesk: TUDO — body, headers, navegação, UI, formulários, tabelas, FAQs, footer
// Cormorant Garamond: APENAS frases canônicas, citações dos fundadores e números de destaque

import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  display: "swap",
});

const grotesk = Space_Grotesk({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-grotesk",
  display: "swap",
});
```

**Cormorant não entra em:**  headers de seção, navegação, body padrão, UI, botões, formulários, breadcrumbs, legenda de tabelas.

---

## PALETA DE CORES

```css
--color-ink: #0C0F16;
--color-deep-teal: #05262D;
--color-teal: #004756;
--color-orange: #EA6335;
--color-peach: #F2A85E;
--color-off-white: #E8E0D6;
```

---

## SISTEMA DE ORIGENS (13 oficiais)

```typescript
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
// Nota: /antes-da-crise usa origem "faisca"
```

Todos os CTAs do site passam `?origem=[valor]` para o Fillout.

---

## ARQUIVOS DE REFERÊNCIA (ler antes de implementar cada fase)

Todos os arquivos estão em `docs/`.

| Arquivo | Quando ler |
|---|---|
| `pacote-final-v2_3.md` | Início de cada sessão |
| `handoff-tecnico-v2_2.md` | Antes de qualquer código técnico |
| `wireframe-completo-site-pira-labs-v3_5.md` | Antes de implementar qualquer página |
| `componentes-compartilhados-v1.md` | Antes de criar Header, Footer, CookieBanner, 404 |
| `copy-home-pira-labs-v2_1.md` | Antes de implementar `/` |
| `copy-paginas-internas-pira-labs-v4_3.md` | Antes de implementar qualquer página interna |
| `copy-inspira-oxigenio-v1.md` | Antes de implementar `/inspira/oxigenio` |
| `copy-creative-business-turnaround-v1_1.md` | Antes de implementar `/creative-business-turnaround` |
| `copy-paginas-legais-v1.md` | Antes de implementar `/politica-privacidade`, `/termos`, `/cookies` |
| `politica-privacidade-pira-labs-v1.md` | Antes de implementar `/politica-privacidade` (conteúdo jurídico real) |
| `termos-de-uso-pira-labs-v1.md` | Antes de implementar `/termos` (conteúdo jurídico real) |
| `schemas-json-ld.ts` | Antes de adicionar schemas em qualquer página |
| `next.config.js` | Fonte de verdade de redirects e headers |
| `prompt-fillout-notion-v2.md` | Antes de implementar qualquer formulário |

**NÃO usar como referência:**
- `copy-vertical-juridica-v1.md` (arquivo histórico, substituído pela copy v4.3)
- Qualquer arquivo com versão anterior (v3.4 e abaixo, v4.2 e abaixo)

---

## ORDEM DE IMPLEMENTAÇÃO

### Fase 1 — Estrutura base
Tokens CSS, fontes, layout root, Header, Footer, CookieBanner, 404, `next.config.js`, `robots.ts`, `sitemap.ts`, `public/llms.txt`, `public/.well-known/ai-agents.json`

### Fase 2 — Páginas institucionais
`/sobre`, `/creative-business-turnaround`, `/contato`

### Fase 3 — Páginas de serviço
`/inspira`, `/transpira`, `/faisca`, `/antes-da-crise`

### Fase 4 — Oxigênio (página crítica)
`/inspira/oxigenio` com schema Service+Offer, integração Fillout com `origem=oxigenio`, placeholders D4 e D1

### Fase 5 — Vertical jurídica
`/inspira/juridico`, `/transpira/juridico`, `/faisca/juridica`

### Fase 6 — Camada GEO/AEO
Schemas JSON-LD em todas as páginas, `lib/schemas/`, `llms-full.txt` (já existe em `public/` — atualizar, não gerar do zero)

**Progresso (11/05/2026):** `public/llms-full.txt` atualizado (EEAT, sameAs, CNPJ, founders), `public/.well-known/ai-agents.json` atualizado, `lib/schemas/organization.ts` com sameAs expandido. **Pendente:** schemas BreadcrumbList nas páginas `/inspira/juridico`, `/transpira/juridico` e `/faisca/juridica`.

### Fase 7 — Polimento e deploy
Lighthouse ≥ 90, testes mobile, teste das 13 origens, deploy na Vercel

---

## WORKFLOW OBRIGATÓRIO

Para cada tarefa:

1. **Ler** o arquivo de referência correspondente à fase
2. **Propor** o plano de implementação
3. **Aguardar** confirmação do Celso
4. **Executar** em incrementos verificáveis
5. **Registrar** aprendizados e problemas em `tasks/lessons.md`
6. **Nunca** marcar tarefa como concluída sem teste real

---

## VARIÁVEIS DE AMBIENTE

```bash
# .env.local
NEXT_PUBLIC_FILLOUT_URL=[INSERIR_URL_FILLOUT_QUANDO_DISPONIVEL]
NEXT_PUBLIC_FLAG_D1=false   # achados da auto-aplicação do Celso (bloco OXIGENIO-8)
NEXT_PUBLIC_FLAG_D4=false   # vídeo de método da Gabriela (bloco OXIGENIO-4)
NEXT_PUBLIC_FLAG_PULSO=false # bloco Pulso Pocket no Oxigênio (OXIGENIO-10)
NEXT_PUBLIC_VAGAS_OXIGENIO=5 # vagas exibidas na página /inspira/oxigenio
```

Todas as flags e constantes lidas de env estão centralizadas em `lib/constants.ts`. Não duplicar leitura de `process.env` fora desse arquivo.

---

## ARQUITETURA ATUAL (o que já está construído)

### Estado — Fases 1 a 5 completas + Fase 6 em andamento (11/05/2026)

Fases 1 a 5 entregues e commitadas. Páginas legais criadas (verificar commit status). Fase 6 parcialmente concluída: `public/llms-full.txt` atualizado (EEAT, sameAs organização, CNPJ, founders), `public/.well-known/ai-agents.json` atualizado, `lib/schemas/organization.ts` com sameAs expandido. Pendente: schemas JSON-LD nas páginas jurídicas. Ver `tasks/STATUS.md` para estado exato.

**Páginas implementadas:**
- `app/page.tsx` — home (7 blocos, `id="provas"` obrigatório)
- `app/sobre/page.tsx` — 6 blocos, fotos dos fundadores, quotes em Cormorant
- `app/creative-business-turnaround/page.tsx` — 9 blocos, schema DefinedTerm+WebPage+FAQPage
- `app/contato/page.tsx` — FilloutEmbed com Suspense boundary
- `app/inspira/page.tsx` — 8 blocos, ProcessSteps, FAQ, Oxigênio box
- `app/transpira/page.tsx` — 7 blocos, 4 frentes, card vertical jurídica
- `app/faisca/page.tsx` — 4 blocos, 4 frentes editoriais, 3 cards de trilhas
- `app/antes-da-crise/page.tsx` — 4 blocos, busca posts via `lib/substack-rss.ts` (Server Component, ISR 3600s)
- `app/inspira/oxigenio/page.tsx` — 11 blocos, Service schema, 3 feature flags, âncoras `#aplicar` e `#metodo`
- `app/inspira/juridico/page.tsx` — 8 blocos, ProcessSteps (5 entregas), FAQ, LegalNotice variant="inspira_juridico"
- `app/transpira/juridico/page.tsx` — 7 blocos, caso âncora "400h para 36h" (EXCLUSIVO desta página), 2 cards Modelo A/B, LegalNotice variant="transpira_juridico"
- `app/faisca/juridica/page.tsx` — 8 blocos, 2 cards de formato (palestra/workshop), LegalNotice variant="faisca_juridica"
- `app/politica-privacidade/page.tsx` — 13 seções LGPD, breadcrumb JSON-LD (não commitada)
- `app/termos/page.tsx` — 13 seções, breadcrumb JSON-LD (não commitada)

**Página pendente (Fase 7):**
- `app/cookies/page.tsx` — já existe (criada na Fase 1)

**Decisões técnicas registradas:**
- Shell Bash PERMANENTEMENTE inoperante: nunca usar Bash tool, tudo via `! comando`
- FilloutEmbed requer Suspense boundary (useSearchParams no App Router)
- FilloutEmbed lê `?origem=` internamente — `/contato` não precisa passar searchParams
- Quotes dos fundadores renderizadas fora do `FounderProfile` como `<blockquote>`
- `title: { absolute: "..." }` em páginas internas (evita duplicação com template do root layout)
- `LegalNotice` tem variante específica para cada página jurídica
- `FinalCTA` não suporta CTA secundário — páginas com dois CTAs constroem a seção final inline com `bg-ink` + `container-site`, sem usar o componente
- Blocos condicionais por flag: usar `{FLAGS.X_ATIVO ? <Componente /> : null}` — não usar `&&` com booleano (pode renderizar `false`)
- Métricas de destaque (ex: 400h/36h): `font-display text-5xl md:text-6xl text-peach` ou `text-orange`
- Caso âncora "400h para 36h": RESTRITO à página `/transpira/juridico`. Nunca replicar em outras páginas.

### Estrutura de componentes

Todos os componentes reutilizáveis estão em `components/shared/`:

- **`Section`** — container de seção com três variantes de background e padding configurável:
  - `variant="default"` → `bg-deep-teal` (padrão)
  - `variant="highlighted"` → `bg-teal`
  - `variant="dark"` → `bg-ink`
  - Prop `id` obrigatória nas seções com âncora (ex: `id="provas"`, `id="metodo"`)
- **`CTAButton`** — botão/link com três variantes (`primary`, `secondary`, `tertiary`). Prop `origin` appenda automaticamente `?origem=[valor]` ao href. Sempre usar `origin={ORIGINS.X}` em CTAs que levam ao `/contato`.
- **`FilloutEmbed`** — embed do formulário Fillout. Lê `FILL_OUT_FORM_URL` de `lib/constants.ts`.
- **`PageHeader`**, **`FinalCTA`**, **`FAQ`**, **`ProcessSteps`**, **`TargetProfile`**, **`FounderProfile`**, **`Breadcrumbs`**, **`LegalNotice`** — blocos de seção padronizados.

### CSS utilitário

- `container-site` — classe custom em `globals.css`, aplica `max-width` + `padding` lateral padrão do site.
- `font-display` → Cormorant Garamond (só frases canônicas e números de destaque)
- `font-body` → Space Grotesk (todo o resto)

### Schemas JSON-LD

Helpers em `lib/schemas/`: `organization.ts`, `website.ts`, `breadcrumb.ts`, `service.ts`. Organization e WebSite só entram na home. BreadcrumbList entra em todas as páginas internas.

### Arquivos públicos críticos

- `public/og-image.png` — OG image com foto dos dois fundadores e paleta correta. Não substituir por versão sem foto.
- `public/llms.txt` — conteúdo validado. Não sobrescrever sem motivo.
- `public/llms-full.txt` — conteúdo EEAT completo. Atualizar incrementalmente, nunca reescrever do zero.
- `public/.well-known/ai-agents.json` — spec GEO/AEO. Atualizar campos, nunca remover campos existentes.

### lib/i18n.ts — LEGADO, não usar no v3.5

O arquivo `lib/i18n.ts` contém o dicionário trilíngue (PT/EN/ES) e mapeamento de rotas do site provisório anterior. **Não usar como referência para copy ou rotas do v3.5.** A estrutura multilíngue foi substituída por um site monolíngue PT com redirects 301 para as URLs /en e /es antigas.

---

## SEÇÃO HOME-4 (detalhe crítico)

A seção de resultados na home (3 cards de prova) precisa renderizar como `<section id="provas">`. Essa âncora é o destino dos redirects 301 de `/cases`, `/en/cases` e `/es/cases` que estão indexados no Google.

---

## PROBLEMAS CONHECIDOS DO SITE ATUAL (não reproduzir)

- `/sobre` e `/contato` no site atual têm erro de redirect (bug do site provisório). No v3.5 essas páginas retornam 200 normalmente. Não adicionar redirect para essas rotas.
- O site atual tinha nomenclatura incorreta em espanhol (`/es/servicos`, `/es/contato`). Os redirects no `next.config.js` mapeiam essas rotas literalmente.

---

## TASKS/LESSONS.MD

Manter atualizado ao longo de cada sessão:

```markdown
# tasks/lessons.md

## Sessão [N] — [data]

### Concluído
- [ ] item

### Em andamento
- [ ] item

### Problemas encontrados
- [problema]: [como resolveu]

### Aprendizados
- [aprendizado]

### Próxima sessão
- [ ] item prioritário
```

---

*CLAUDE.md · PIRA LABS v3.5 · v1.6 · Maio 2026*
*Atualizar quando houver decisão técnica nova que afete o build*
