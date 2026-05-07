# Componentes Compartilhados · Site PIRA LABS
**Versão:** 1.0
**Data:** Maio 2026
**Para:** Claude Code implementar como `components/shared/`
**Wireframe pareado:** wireframe-completo-site-pira-labs-v3.5.md

Este arquivo especifica os componentes que aparecem em todas ou na maioria das páginas do site. São implementados uma vez e referenciados por toda a aplicação.

---

## 1. Header (`<Header />`)

### Localização
`components/shared/Header.tsx`

### Aparência
Sticky no topo (`position: sticky; top: 0; z-index: 50`). Backdrop blur quando o usuário rola além de 80px. Altura: 72px desktop, 64px mobile.

### Estrutura

**Desktop:**
```
┌──────────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Sobre  ·  Inspira ▾  ·  Transpira ▾  ·  Faísca ▾  ·  Antes da Crise   [CTA]│
└──────────────────────────────────────────────────────────────────────────────────┘
```

**Mobile:**
```
┌──────────────────────────────────────────────┐
│ [LOGO]                                  [☰]  │
└──────────────────────────────────────────────┘
```

### Items do menu (com dropdowns)

```typescript
const menuItems = [
  { label: 'Sobre', href: '/sobre' },
  {
    label: 'Inspira',
    href: '/inspira',
    children: [
      { label: 'Inspira', href: '/inspira' },
      { label: 'Inspira Jurídico', href: '/inspira/juridico' },
      { label: 'Oxigênio IA Search', href: '/inspira/oxigenio' },
    ],
  },
  {
    label: 'Transpira',
    href: '/transpira',
    children: [
      { label: 'Transpira', href: '/transpira' },
      { label: 'Transpira Jurídico', href: '/transpira/juridico' },
    ],
  },
  {
    label: 'Faísca',
    href: '/faisca',
    children: [
      { label: 'Faísca', href: '/faisca' },
      { label: 'Faísca Jurídica', href: '/faisca/juridica' },
    ],
  },
  { label: 'Antes da Crise', href: '/antes-da-crise' },
];

const ctaButton = {
  label: 'Falar com a PIRA',
  href: '/contato?origem=header_global',
};
```

### CTA do header
- Texto: "Falar com a PIRA"
- Estilo: botão `orange` (#EA6335) com texto `ink` (#0C0F16)
- Padding: 12px 20px
- Tipografia: Groteske Medium 15px
- Border radius: 4px
- Hover: leve escurecimento (-5% lightness)
- Foco visível: outline 2px `orange` com offset 2px
- Em mobile: aparece dentro do menu hamburger expandido, não no header colapsado

### Comportamento

**Sticky e backdrop blur:**
- Sempre sticky no topo
- Antes do scroll: fundo `ink` sólido
- Após 80px de scroll: fundo `ink` com 90% opacidade + `backdrop-filter: blur(8px)`
- Transição suave de 200ms

**Dropdown desktop:**
- Abre no `:hover` com delay de 150ms (anti-flickering)
- Permanece aberto enquanto cursor sobre o dropdown
- Fecha em 300ms após sair
- Fundo `deep-teal` (#05262D), border 1px `teal` (#004756) com 30% opacidade
- Items do dropdown: padding 12px 16px, hover `teal` background

**Menu hamburger mobile:**
- Toque no `[☰]` abre painel full-screen com transição slide-in da direita
- Items verticais, fonte maior (18px)
- Submenus expandem inline (acordeão), não como dropdown
- Fechar: tocar no `[X]` ou em qualquer link
- `Esc` fecha o menu (acessibilidade)

### Acessibilidade

- `<header role="banner">`
- `<nav aria-label="Navegação principal">`
- Itens com submenu: `aria-haspopup="true"` e `aria-expanded={isOpen}`
- Item da página atual: `aria-current="page"`
- Hamburger: `<button aria-label="Abrir menu de navegação" aria-expanded={isOpen}>`
- Foco trap dentro do menu mobile aberto
- Tab order: logo → items do menu → CTA

### Skip link
Antes do header, primeiro elemento focável da página:
```jsx
<a href="#main-content" className="sr-only focus:not-sr-only ...">
  Pular para o conteúdo principal
</a>
```
Aparece apenas no foco. Estilo: posicionamento absoluto top-left, fundo `orange`, texto `ink`, padding 12px 16px, z-index acima do header.

---

## 2. Footer (`<Footer />`)

### Localização
`components/shared/Footer.tsx`

### Aparência
Fundo `ink` (#0C0F16), texto `off-white` (#E8E0D6). Padding 64px 0 32px desktop, 48px 0 24px mobile.

### Estrutura

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [LOGO PIRA LABS]                                                                │
│                                                                                  │
│ INSTITUCIONAL    O QUE FAZEMOS    VERTICAL JURÍDICA    CONTATO                  │
│ Sobre            Inspira          Inspira Jurídico     inspira@piralabs.com.br  │
│ Creative         Oxigênio IA      Transpira Jurídico                             │
│   Business       Search            Faísca Jurídica     LinkedIn PIRA LABS       │
│   Turnaround    Transpira                              LinkedIn Gabriela Aguiar │
│ Antes da Crise  Faísca                                 LinkedIn Celso Gama      │
│ Contato                                                                          │
│                                                                                  │
│ ─────────────────────────────────────────────────────────────────────────────── │
│                                                                                  │
│           [Cormorant Italic 22px]: "Liberamos o próximo nível."                 │
│                                                                                  │
│ PIRA LABS · CNPJ XX.XXX.XXX/0001-XX · São Paulo, Brasil                         │
│ © 2026 PIRA LABS. Todos os direitos reservados.                                 │
│                                                                                  │
│ Política de Privacidade  ·  Termos de Uso  ·  Aviso de Cookies                  │
│                                                                                  │
│ [Aviso jurídico em fonte 13px, off-white com 70% opacidade]                     │
│ A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e    │
│ não substitui advogados habilitados pela OAB. As páginas da vertical jurídica   │
│ tratam de fluxos de trabalho, governança operacional de IA e capacidade         │
│ produtiva, com supervisão obrigatória de advogado habilitado do escritório      │
│ contratante.                                                                     │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Estrutura técnica das colunas

```typescript
const footerColumns = [
  {
    heading: 'Institucional',
    links: [
      { label: 'Sobre', href: '/sobre' },
      { label: 'Creative Business Turnaround', href: '/creative-business-turnaround' },
      { label: 'Antes da Crise', href: '/antes-da-crise' },
      { label: 'Contato', href: '/contato' },
    ],
  },
  {
    heading: 'O que fazemos',
    links: [
      { label: 'Inspira', href: '/inspira' },
      { label: 'Oxigênio IA Search', href: '/inspira/oxigenio' },
      { label: 'Transpira', href: '/transpira' },
      { label: 'Faísca', href: '/faisca' },
    ],
  },
  {
    heading: 'Vertical Jurídica',
    links: [
      { label: 'Inspira Jurídico', href: '/inspira/juridico' },
      { label: 'Transpira Jurídico', href: '/transpira/juridico' },
      { label: 'Faísca Jurídica', href: '/faisca/juridica' },
    ],
  },
  {
    heading: 'Contato',
    links: [
      { label: 'inspira@piralabs.com.br', href: 'mailto:inspira@piralabs.com.br' },
      { label: 'LinkedIn PIRA LABS', href: 'https://linkedin.com/company/piralabs', external: true },
      { label: 'LinkedIn Gabriela Aguiar', href: 'https://linkedin.com/in/gabrielaaguiarvs', external: true },
      { label: 'LinkedIn Celso Gama', href: 'https://linkedin.com/in/celsogama', external: true },
    ],
  },
];
```

### Comportamento mobile
- Cada coluna vira um acordeão fechado por padrão
- Heading da coluna é botão clicável que expande
- Aviso jurídico sempre visível (não fica dentro de acordeão)

### Frase de assinatura
- Texto: "Liberamos o próximo nível."
- Fonte: Cormorant Garamond Italic 22px
- Cor: `peach` (#F2A85E)
- Alinhamento: centralizado
- Margem: 32px vertical

### Aviso jurídico
- Sempre visível em todas as páginas (não apenas vertical jurídica)
- Fonte: Groteske Regular 13px
- Cor: `off-white` com 70% opacidade
- Padding-top de 24px com border-top sutil

### Acessibilidade
- `<footer role="contentinfo">`
- Cada coluna: `<section>` com `<h2>` (visualmente menor mas semanticamente correto)
- Links externos: `target="_blank" rel="noopener noreferrer"` + ícone visual indicando link externo
- Email como `mailto:` com `aria-label="Enviar email para PIRA LABS"`

---

## 3. Banner de Cookies (`<CookieBanner />`)

### Localização
`components/shared/CookieBanner.tsx`

### Comportamento

**Aparece quando:**
- Cookie `pira_consent` não existe
- OU cookie `pira_consent` existe mas tem valor `"pending"` (caso revogação)

**Não aparece quando:**
- Cookie `pira_consent` existe com valor `"accepted"` ou `"essential_only"`

### Aparência

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│ A PIRA LABS usa cookies essenciais para o funcionamento do site e cookies       │
│ analíticos para entender como o site é usado. Você pode aceitar todos, recusar  │
│ opcionais ou ler mais.                                                          │
│                                                                                  │
│ [Aceitar todos]   [Recusar opcionais]   Ler mais                                │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

- Posição: `position: fixed; bottom: 0; left: 0; right: 0`
- Fundo: `deep-teal` (#05262D) com border-top 1px `teal`
- Padding: 24px desktop, 20px mobile
- z-index: 60 (acima de tudo)
- Animação: slide-up de 300ms ao montar

### Botões

**Aceitar todos (primário):**
- Estilo: fundo `orange`, texto `ink`, Groteske Medium 15px
- Padding 12px 24px
- Salva cookie `pira_consent = "accepted"` por 12 meses
- Ativa Vercel Analytics

**Recusar opcionais (secundário):**
- Estilo: outline `off-white` 1px, fundo transparente, texto `off-white`
- Padding 12px 24px
- Salva cookie `pira_consent = "essential_only"` por 12 meses
- Não ativa Vercel Analytics

**Ler mais (link textual):**
- Estilo: texto `peach` sublinhado, sem botão visual
- Abre `/cookies` em nova aba
- Não dispensa o banner

### Acessibilidade

- `<div role="dialog" aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-text">`
- Foco trap enquanto aberto (Tab cicla entre os 3 botões + link)
- `Esc` NÃO fecha (precisa decisão explícita do usuário)
- Botões com `aria-label` claros

### Implementação técnica

```typescript
// utils/cookies.ts
export const getCookieConsent = (): 'accepted' | 'essential_only' | null => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/pira_consent=([^;]+)/);
  return match ? (match[1] as 'accepted' | 'essential_only') : null;
};

export const setCookieConsent = (value: 'accepted' | 'essential_only') => {
  const expires = new Date();
  expires.setMonth(expires.getMonth() + 12);
  document.cookie = `pira_consent=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax; Secure`;
};
```

**Vercel Analytics opt-in:**
- Componente `<Analytics />` da Vercel só renderiza se `getCookieConsent() === 'accepted'`
- Usar hook `useEffect` para hidratação correta

**Link "Gerenciar cookies" no footer:**
- Item adicional na lista de links legais do footer
- Quando clicado: reseta cookie para `"pending"` e mostra banner novamente

---

## 4. Página 404 (`app/not-found.tsx`)

### Comportamento
Aparece automaticamente para qualquer URL não mapeada no App Router.

### Estrutura

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [Header normal]                                                                  │
│                                                                                  │
│ Home > 404                                                                       │
│                                                                                  │
│ Essa página não existe na PIRA LABS                                             │
│                                                                                  │
│ Talvez o link tenha mudado, ou talvez você esteja procurando algo que ainda     │
│ não publicamos. Aqui estão os caminhos principais:                              │
│                                                                                  │
│ → Home                                                                           │
│ → Sobre                                                                          │
│ → Creative Business Turnaround                                                   │
│ → Inspira (e Inspira Jurídico, Oxigênio IA Search)                              │
│ → Transpira (e Transpira Jurídico)                                              │
│ → Faísca (e Faísca Jurídica)                                                    │
│ → Antes da Crise                                                                 │
│                                                                                  │
│ [Falar com a PIRA →]                                                             │
│                                                                                  │
│ [Footer normal]                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Conteúdo

**Texto exato:**
- H1: "Essa página não existe na PIRA LABS"
- Parágrafo: "Talvez o link tenha mudado, ou talvez você esteja procurando algo que ainda não publicamos. Aqui estão os caminhos principais:"
- Lista de links em formato de bullets visuais com seta `→`
- CTA: "Falar com a PIRA →" → `/contato?origem=404`

### Schema
- `WebPage` com `mainEntity` apontando para a Organization
- Indexação: `noindex, nofollow`

### Acessibilidade
- H1 único na página
- Lista semântica `<ul>`
- Links com texto descritivo, sem "clique aqui"

---

## 5. Skip Link (`<SkipLink />`)

### Localização
`components/shared/SkipLink.tsx`

### Implementação

```tsx
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        focus:absolute focus:top-4 focus:left-4
        focus:z-[100]
        focus:bg-orange focus:text-ink
        focus:px-4 focus:py-3
        focus:rounded
        focus:outline-2 focus:outline-offset-2 focus:outline-orange
        focus:font-medium
      "
    >
      Pular para o conteúdo principal
    </a>
  );
}
```

### Uso

Em `app/layout.tsx`:
```tsx
<body>
  <SkipLink />
  <Header />
  <main id="main-content">{children}</main>
  <Footer />
  <CookieBanner />
</body>
```

---

## 6. Breadcrumbs (`<Breadcrumbs />`)

### Localização
`components/shared/Breadcrumbs.tsx`

### Aparência
- Aparece no topo de toda página exceto a home
- Posição: abaixo do header, acima do conteúdo principal
- Padding: 16px 0 24px
- Tipografia: Groteske Regular 14px
- Cor: `off-white` com 60% opacidade
- Separador: " · " (não use ">", visual mais limpo)

### Estrutura

```
Home  ·  Inspira  ·  Inspira Jurídico
Home  ·  Transpira  ·  Jurídico
Home  ·  Faísca  ·  Jurídica
Home  ·  Sobre
Home  ·  Antes da Crise
Home  ·  Creative Business Turnaround
Home  ·  Contato
```

### Comportamento
- Cada item, exceto o último, é link clicável
- Último item é texto sem link (página atual)
- Hover nos links: cor muda para `peach`
- Em mobile: quebra de linha se necessário, sem truncar

### Schema (BreadcrumbList)
Cada página gera seu BreadcrumbList JSON-LD próprio. O componente recebe a estrutura como prop e renderiza tanto o HTML quanto o schema.

```typescript
type BreadcrumbItem = {
  label: string;
  href?: string; // último item não tem href
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};
```

### Acessibilidade
- `<nav aria-label="Breadcrumb">`
- `<ol>` com items em ordem
- Item atual: `aria-current="page"`

---

## 7. CTA Reutilizável (`<CTAButton />`)

### Localização
`components/shared/CTAButton.tsx`

### Variantes

**Primary (botão laranja):**
- Fundo: `orange` (#EA6335)
- Texto: `ink` (#0C0F16)
- Tipografia: Groteske Medium 16px (15px mobile)
- Padding: 16px 32px (12px 24px mobile)
- Border radius: 4px
- Hover: leve escurecimento + leve elevação (`transform: translateY(-1px)`)
- Foco: outline 2px `orange` com offset 2px

**Secondary (outline):**
- Border: 1px `off-white`
- Texto: `off-white`
- Fundo: transparente
- Hover: fundo `off-white` 10% opacidade

**Tertiary (link textual):**
- Texto: `peach` (#F2A85E) sublinhado
- Sem fundo, sem border
- Hover: cor `orange`

### Props

```typescript
type CTAButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary';
  href: string;
  origin?: string; // adiciona ?origem=X automaticamente
  external?: boolean;
  withAsterisk?: boolean; // adiciona * para indicar "mediante consulta"
  children: React.ReactNode;
};
```

### Asterisco
Quando `withAsterisk={true}`, adiciona ` *` ao final do texto e renderiza tooltip ou nota de rodapé com "Mediante consulta e disponibilidade".

### Acessibilidade
- `<a>` para navegação interna ou externa
- `<button>` apenas se for ação JavaScript (não navegação)
- Texto descritivo (não "Clique aqui" ou "Saber mais" sem contexto)
- Estado de hover/focus visualmente distintos

---

## 8. Aviso Jurídico (`<LegalNotice />`)

### Localização
`components/shared/LegalNotice.tsx`

### Uso
Componente reutilizável para o aviso de "não consultoria jurídica" que aparece:
- No rodapé de todas as páginas (versão curta)
- Como bloco fixo no fim das páginas da vertical jurídica (versão completa)

### Versão curta (footer geral)

```
A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e 
não substitui advogados habilitados pela OAB. As páginas da vertical jurídica 
tratam de fluxos de trabalho, governança operacional de IA e capacidade 
produtiva, com supervisão obrigatória de advogado habilitado do escritório 
contratante.
```

### Versão completa (páginas da vertical jurídica)

Específica por página, definida no copy v4.3:
- INSPIRA Jurídico: aviso específico do produto
- TRANSPIRA Jurídico: aviso específico com regra do Modelo B
- FAÍSCA Jurídica: aviso específico do produto

### Props

```typescript
type LegalNoticeProps = {
  variant: 'short' | 'inspira_juridico' | 'transpira_juridico' | 'faisca_juridica';
};
```

### Estilo
- Fonte: Groteske Regular 13px
- Cor: `off-white` com 70% opacidade
- Border-top sutil
- Padding-top 24px

---

## 9. Page Header (`<PageHeader />`)

### Localização
`components/shared/PageHeader.tsx`

### Uso
Topo de toda página exceto home. Inclui breadcrumbs, H1 e subtítulo.

### Estrutura

```
[Breadcrumbs]

[H1 - Groteske Semibold 48px desktop / 32px mobile]

[Subtítulo - Groteske Regular 20px / 17px mobile, off-white 80%]
```

### Props

```typescript
type PageHeaderProps = {
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  subtitle?: string;
};
```

### Espaçamento
- Padding-top: 80px desktop, 56px mobile
- Margin-bottom: 64px desktop, 40px mobile

---

## 10. Section Wrapper (`<Section />`)

### Localização
`components/shared/Section.tsx`

### Uso
Wrapper consistente para todas as seções de conteúdo dentro das páginas. Garante padding e largura máxima.

### Props

```typescript
type SectionProps = {
  variant?: 'default' | 'highlighted' | 'dark'; // dark é fundo deep-teal
  fullBleed?: boolean; // sem max-width, ocupa toda largura
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
};
```

### Largura máxima
- Desktop: max-width 1200px, centralizada
- Padding lateral: 24px desktop, 20px mobile

### Padding vertical
- sm: 32px / 24px
- md: 64px / 40px
- lg: 96px / 64px
- xl: 128px / 80px

---

## 11. Lista de componentes especializados (não compartilhados, mas referenciados aqui)

Estes ficam em `components/sections/` ou `components/pages/`, mas são listados aqui para referência:

| Componente | Página onde aparece | Função |
|---|---|---|
| `<HeroHome />` | `/` | Hero da home com frase canônica |
| `<FoundersBlock />` | `/sobre`, `/` | Bloco com Gabriela e Celso |
| `<MethodSteps />` | `/inspira`, `/transpira` | Passos visualizados do método |
| `<OfferHero />` | `/inspira/oxigenio` | Hero da oferta com preço |
| `<FAQAccordion />` | múltiplas | FAQ acordeão com schema FAQPage |
| `<FilloutEmbed />` | `/contato` | Embed do formulário Fillout |
| `<PostCard />` | `/antes-da-crise` | Card de post do Substack |
| `<CategoryDefinition />` | `/creative-business-turnaround` | Bloco de definição da categoria com DefinedTerm |
| `<NotConsultingNotice />` | páginas da vertical jurídica | Aviso jurídico em destaque |
| `<TwoModelsCard />` | `/transpira/juridico` | Cards lado a lado dos Modelos A e B |

Cada um destes tem implementação específica no diretório da página correspondente. As convenções gerais (tipografia, cores, padding) seguem o sistema definido neste arquivo.

---

## 12. Variáveis CSS globais (resumo)

```css
:root {
  /* Cores */
  --color-ink: #0C0F16;
  --color-deep-teal: #05262D;
  --color-teal: #004756;
  --color-orange: #EA6335;
  --color-peach: #F2A85E;
  --color-off-white: #E8E0D6;

  /* Tipografia */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Groteske', system-ui, -apple-system, sans-serif;

  /* Spacing scale (8px base) */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-6: 48px;
  --space-8: 64px;
  --space-12: 96px;
  --space-16: 128px;

  /* Container */
  --container-max: 1200px;
  --container-padding: 24px;

  /* Z-index */
  --z-banner: 50;
  --z-header: 50;
  --z-cookie: 60;
  --z-skip-link: 100;

  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-base: 200ms ease-out;
  --transition-slow: 300ms ease-out;
}

@media (max-width: 768px) {
  :root {
    --container-padding: 20px;
  }
}
```

---

*Componentes Compartilhados v1.0 · PIRA LABS · Maio 2026*
