# Prompt de Inicialização — Site Pira Labs
# Cole este prompt inteiro no Claude Code para criar o projeto completo.
# Versão 1.0 · Março 2026

---

## CONTEXTO DO PROJETO

Você está construindo o site institucional da Pira Labs, uma boutique brasileira de
Creative Business Turnaround. O site é o cartão de visitas que recebe prospects do
LinkedIn, serve de âncora de credibilidade para vendas B2B, e precisa ser indexado
tanto por buscadores (SEO) quanto por agentes de IA (GEO/AEO/B2A).

**Empresa:** Pira Labs — Propulsão de Negócios  
**Tagline:** Liberamos o próximo nível.  
**Categoria:** Creative Business Turnaround  
**URL de destino:** piralabs.com.br  
**Repositório GitHub:** github.com/PiraLabs/pira-labs  

**Fundadores (Gabriela sempre primeiro):**
- Gabriela Aguiar — CEO, lidera INSPIRA. Quase uma década em inovação e VC no Brasil,
  EUA e países nórdicos. Professora de MBA na FIAP. Mentora FGV Ventures. Em formação
  em IA no MIT.
- Celso Gama — Co-fundador, lidera TRANSPIRA e operações. Escalou R$16M para R$163M
  em 24 meses. Virou margem de -64% para +15% em 6 meses na Diageo sem aumentar
  receita (79 pontos percentuais). Esses resultados são pré-IA.

**Contato:** inspira@piralabs.com.br

---

## STACK TÉCNICA

- Next.js 15+ com App Router
- TypeScript
- Tailwind CSS
- Deploy: Vercel (região São Paulo)
- Fontes: Google Fonts (Cormorant Garamond para display, DM Sans para corpo)
- Sem bibliotecas de UI externas (Shadcn, MUI, etc.)
- Sem banco de dados por enquanto

---

## PALETA DE CORES E DESIGN SYSTEM

```css
/* Variáveis globais — definir em globals.css */
--color-navy: #0D1B2A;          /* fundo escuro principal */
--color-navy-mid: #1A2B3C;      /* cards escuros */
--color-amber: #BA7517;         /* acento principal âmbar */
--color-amber-light: #D4891F;   /* hover de âmbar */
--color-cream: #F5F0E8;         /* fundo claro */
--color-cream-dark: #EDE8DF;    /* seções alternadas claras */
--color-white: #FAFAF8;         /* texto em fundos escuros */
--color-gray-text: #6B7280;     /* texto secundário */
--color-green-respira: #1F5C35; /* badge RESPIRA */

/* Tipografia */
--font-display: 'Cormorant Garamond', Georgia, serif;  /* títulos grandes */
--font-body: 'DM Sans', system-ui, sans-serif;         /* corpo e UI */

/* Tamanhos */
--text-hero: clamp(2.5rem, 6vw, 5rem);
--text-h2: clamp(1.8rem, 4vw, 3rem);
--text-h3: clamp(1.2rem, 2.5vw, 1.75rem);
--text-body: 1rem;
--text-small: 0.875rem;

/* Espaçamento */
--section-padding: clamp(4rem, 8vw, 8rem);
--container-max: 1200px;
--container-padding: clamp(1.5rem, 4vw, 3rem);
```

---

## ESTRUTURA DE ARQUIVOS

Criar a seguinte estrutura:

```
app/
  layout.tsx
  page.tsx                    (Home)
  sobre/
    page.tsx
  servicos/
    page.tsx
  cases/
    page.tsx
  contato/
    page.tsx
  globals.css
components/
  Nav.tsx
  Footer.tsx
  Hero.tsx
  MetodoTriade.tsx
  FundadoresSection.tsx
  CasePreview.tsx
  ProvaSection.tsx
  CTASection.tsx
public/
  llms.txt
  llms-full.txt
  robots.txt
```

---

## ARQUIVO: app/layout.tsx

```tsx
import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Pira Labs — Creative Business Turnaround',
    template: '%s | Pira Labs',
  },
  description:
    'Boutique brasileira de Creative Business Turnaround. Entramos em negócios com potencial represado, encontramos o problema real e construímos o caminho para o próximo nível.',
  keywords: [
    'Creative Business Turnaround',
    'turnaround empresarial',
    'consultoria crescimento empresa serviços',
    'propulsão de negócios',
    'Pira Labs',
    'Gabriela Aguiar',
    'Celso Gama',
  ],
  authors: [
    { name: 'Gabriela Aguiar', url: 'https://piralabs.com.br/sobre' },
    { name: 'Celso Gama', url: 'https://piralabs.com.br/sobre' },
  ],
  creator: 'Pira Labs',
  metadataBase: new URL('https://piralabs.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://piralabs.com.br',
    siteName: 'Pira Labs',
    title: 'Pira Labs — Creative Business Turnaround',
    description:
      'Boutique brasileira de Creative Business Turnaround. Liberamos o próximo nível.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pira Labs — Propulsão de Negócios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pira Labs — Creative Business Turnaround',
    description: 'Boutique brasileira de Creative Business Turnaround.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://piralabs.com.br',
    languages: {
      'pt-BR': 'https://piralabs.com.br',
    },
  },
}

// JSON-LD estruturado para GEO/AEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://piralabs.com.br/#organization',
      name: 'Pira Labs',
      alternateName: 'Pira Labs — Propulsão de Negócios',
      url: 'https://piralabs.com.br',
      description:
        'Boutique brasileira de Creative Business Turnaround. Entramos em negócios de serviços com potencial represado, encontramos o problema real, construímos o caminho para o próximo nível e saímos quando o negócio está em propulsão.',
      foundingDate: '2025',
      foundingLocation: {
        '@type': 'Place',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      email: 'inspira@piralabs.com.br',
      sameAs: [
        'https://linkedin.com/company/piralabs',
        'https://github.com/PiraLabs/pira-labs',
      ],
      founder: [
        {
          '@type': 'Person',
          '@id': 'https://piralabs.com.br/#gabriela-aguiar',
          name: 'Gabriela Aguiar',
          jobTitle: 'CEO',
          description:
            'CEO da Pira Labs. Quase uma década em inovação e venture capital no Brasil, EUA e países nórdicos. Professora de MBA na FIAP, mentora na FGV Ventures, em formação em IA no MIT.',
          sameAs: ['https://linkedin.com/in/gabriela-aguiar'],
        },
        {
          '@type': 'Person',
          '@id': 'https://piralabs.com.br/#celso-gama',
          name: 'Celso Gama',
          jobTitle: 'Co-fundador e COO',
          description:
            'Co-fundador da Pira Labs. Especialista em turnaround operacional. Escalou receita de R$16M para R$163M em 24 meses. Virou margem de -64% para +15% em 6 meses sem aumentar receita.',
          sameAs: ['https://linkedin.com/in/celso-gama'],
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços Pira Labs',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'INSPIRA',
              description:
                'Diagnóstico do problema real. Leitura do setor. Curadoria de tecnologias disponíveis. O problema nomeado, a rota desenhada.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'TRANSPIRA',
              description:
                'Execução. Entramos na operação, trabalhamos junto com o time, integramos tecnologia curada e saímos com resultado verificado.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://piralabs.com.br/#website',
      url: 'https://piralabs.com.br',
      name: 'Pira Labs',
      inLanguage: 'pt-BR',
      publisher: { '@id': 'https://piralabs.com.br/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://piralabs.com.br/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que é Creative Business Turnaround?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Creative Business Turnaround é a categoria de serviço que combina diagnóstico estratégico, execução operacional e curadoria de tecnologia para liberar o próximo nível de crescimento em empresas de serviços com potencial represado. A Pira Labs é a primeira boutique brasileira nessa categoria.',
          },
        },
        {
          '@type': 'Question',
          name: 'Para que tipo de empresa a Pira Labs trabalha?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Pira Labs trabalha com decisores de empresas de serviços de alto valor agregado que têm potencial represado. Três situações típicas: o fundador virou o gargalo de todas as decisões, o negócio cresce mas a estrutura não acompanha, ou a empresa tem dados mas ninguém transformou isso em decisão.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual a diferença entre INSPIRA e TRANSPIRA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'INSPIRA é o diagnóstico: encontramos onde o problema real está, lemos o setor e mapeamos as tecnologias disponíveis. TRANSPIRA é a execução: entramos na operação, construímos junto com o time e saímos com resultado verificado. O cliente pode contratar os dois em sequência ou entrar direto no TRANSPIRA quando o problema já está claro.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto tempo dura um projeto da Pira Labs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende do escopo definido no INSPIRA. Os critérios de encerramento são acordados no início do projeto. A Pira Labs não sai quando o prazo acaba — sai quando os primeiros resultados acordados são verificados.',
          },
        },
        {
          '@type': 'Question',
          name: 'A Pira Labs usa IA nos projetos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. Tecnologia, incluindo IA, é um amplificador integrado ao método. Entra depois de entender o problema real — nunca antes. A Pira Labs não vende ferramentas nem tem tecnologia própria: faz curadoria do que existe no mercado e aplica onde faz sentido para o problema do cliente específico.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-cream text-navy antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## ARQUIVO: app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-navy: #0D1B2A;
    --color-navy-mid: #1A2B3C;
    --color-amber: #BA7517;
    --color-amber-light: #D4891F;
    --color-cream: #F5F0E8;
    --color-cream-dark: #EDE8DF;
    --color-white: #FAFAF8;
    --color-gray-text: #6B7280;
    --color-green-respira: #1F5C35;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-dm-sans), system-ui, sans-serif;
    background-color: var(--color-cream);
    color: var(--color-navy);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    font-family: var(--font-cormorant), Georgia, serif;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
}

@layer utilities {
  .text-amber { color: var(--color-amber); }
  .text-navy { color: var(--color-navy); }
  .text-cream { color: var(--color-cream); }
  .bg-navy { background-color: var(--color-navy); }
  .bg-navy-mid { background-color: var(--color-navy-mid); }
  .bg-amber { background-color: var(--color-amber); }
  .bg-cream { background-color: var(--color-cream); }
  .bg-cream-dark { background-color: var(--color-cream-dark); }
  .font-display { font-family: var(--font-cormorant), Georgia, serif; }
  .font-body { font-family: var(--font-dm-sans), system-ui, sans-serif; }
  .border-amber { border-color: var(--color-amber); }

  /* Animação de entrada */
  .fade-up {
    opacity: 0;
    transform: translateY(24px);
    animation: fadeUp 0.7s ease forwards;
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-up-delay-1 { animation-delay: 0.1s; }
  .fade-up-delay-2 { animation-delay: 0.2s; }
  .fade-up-delay-3 { animation-delay: 0.35s; }
  .fade-up-delay-4 { animation-delay: 0.5s; }

  /* Linha âmbar decorativa */
  .amber-line::before {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background-color: var(--color-amber);
    margin-bottom: 1rem;
  }
}
```

---

## ARQUIVO: tailwind.config.ts

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',
        'navy-mid': '#1A2B3C',
        amber: '#BA7517',
        'amber-light': '#D4891F',
        cream: '#F5F0E8',
        'cream-dark': '#EDE8DF',
        'off-white': '#FAFAF8',
        'gray-text': '#6B7280',
        'green-respira': '#1F5C35',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## ARQUIVO: components/Nav.tsx

```tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/cases', label: 'Cases' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-amber/20">
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-xl tracking-wide">
            <span className="text-amber font-semibold">PIRA</span>
            <span className="text-navy"> LABS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm text-navy/70 hover:text-amber transition-colors duration-200 tracking-wide uppercase"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="ml-4 px-5 py-2 bg-navy text-off-white font-body text-sm tracking-wide uppercase hover:bg-amber transition-colors duration-200"
          >
            Solicitar diagnóstico
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-navy transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-navy transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-navy transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-amber/20 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-navy text-lg"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="mt-2 px-5 py-3 bg-navy text-off-white font-body text-sm tracking-wide uppercase text-center"
            onClick={() => setOpen(false)}
          >
            Solicitar diagnóstico
          </Link>
        </div>
      )}
    </header>
  )
}
```

---

## ARQUIVO: components/Footer.tsx

```tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-off-white/70">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Identidade */}
          <div>
            <p className="font-display text-2xl text-off-white mb-3">
              <span className="text-amber">PIRA</span> LABS
            </p>
            <p className="font-body text-sm leading-relaxed">
              Propulsão de Negócios.<br />
              Creative Business Turnaround.
            </p>
            <p className="font-body text-xs mt-4 text-amber italic">
              Liberamos o próximo nível.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-off-white/40 mb-4">
              Navegação
            </p>
            <nav className="flex flex-col gap-2">
              {[
                ['/', 'Home'],
                ['/servicos', 'Serviços'],
                ['/cases', 'Cases'],
                ['/sobre', 'Sobre'],
                ['/contato', 'Contato'],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="font-body text-sm hover:text-amber transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-off-white/40 mb-4">
              Contato
            </p>
            <p className="font-body text-sm mb-2">inspira@piralabs.com.br</p>
            <p className="font-body text-sm mb-6">São Paulo, Brasil</p>
            <a
              href="https://linkedin.com/company/piralabs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm hover:text-amber transition-colors duration-200"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        <div className="border-t border-off-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="font-body text-xs text-off-white/30">
            © {new Date().getFullYear()} Pira Labs. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-off-white/30">
            Seguimos em propulsão. 🔥
          </p>
        </div>
      </div>
    </footer>
  )
}
```

---

## ARQUIVO: app/page.tsx (Home)

```tsx
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pira Labs — Creative Business Turnaround',
  description:
    'Boutique brasileira de Creative Business Turnaround. Liberamos o próximo nível de negócios com potencial represado.',
  alternates: { canonical: 'https://piralabs.com.br' },
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen bg-navy flex items-center relative overflow-hidden pt-16">
        {/* Linha decorativa âmbar */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-amber/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-amber/20" />

        {/* Elemento gráfico de fundo — ondas sutis */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at bottom right, #BA7517 0%, transparent 60%)',
          }}
        />

        <div className="max-w-container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="font-body text-xs tracking-widest uppercase text-amber mb-8 fade-up">
              Creative Business Turnaround
            </p>
            <h1
              className="font-display text-off-white leading-none mb-8 fade-up fade-up-delay-1"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              Todo negócio tem<br />
              um próximo nível.
            </h1>
            <p className="font-body text-off-white/70 text-xl leading-relaxed mb-12 max-w-xl fade-up fade-up-delay-2">
              O que a Pira Labs encontra é o que está entre você e ele.
              Entramos, diagnosticamos o problema real, construímos junto
              e saímos quando o negócio está em propulsão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-up fade-up-delay-3">
              <Link
                href="/contato"
                className="px-8 py-4 bg-amber text-navy font-body font-medium tracking-wide uppercase text-sm hover:bg-amber-light transition-colors duration-200 text-center"
              >
                Solicitar diagnóstico
              </Link>
              <Link
                href="/cases"
                className="px-8 py-4 border border-off-white/30 text-off-white font-body text-sm tracking-wide uppercase hover:border-amber hover:text-amber transition-colors duration-200 text-center"
              >
                Ver case
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVA NUMÉRICA ── */}
      <section className="bg-cream-dark py-24">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-gray-text mb-16 text-center">
            Resultado verificado · Case jurídico anonimizado
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '1.500+',
                label: 'Páginas analisadas',
                desc: 'Leis, jurisprudências e doutrina cruzadas',
              },
              {
                num: '400h → 36h',
                label: 'Esforço equivalente',
                desc: '10 profissionais por uma semana. Entregamos o equivalente em 36 horas.',
              },
              {
                num: 'R$160K/mês',
                label: 'Potencial de receita',
                desc: 'Capacidade operacional liberada para novos contratos',
              },
            ].map((item) => (
              <div key={item.num} className="border-t border-amber pt-8">
                <p className="font-display text-navy leading-none mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {item.num}
                </p>
                <p className="font-body font-medium text-navy text-sm uppercase tracking-wide mb-2">
                  {item.label}
                </p>
                <p className="font-body text-gray-text text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-gray-text text-center mt-12">
            Case anonimizado. Identidade disponível mediante NDA.
          </p>
        </div>
      </section>

      {/* ── MÉTODO: INSPIRA / TRANSPIRA / RESPIRA ── */}
      <section className="bg-navy py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">
              O método
            </p>
            <h2
              className="font-display text-off-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Três momentos.<br />Um processo.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* INSPIRA */}
            <div className="bg-navy-mid p-8 border-t-2 border-[#2A6B8A]">
              <span className="inline-block px-3 py-1 bg-[#2A6B8A] text-off-white font-body text-xs tracking-widest uppercase mb-6">
                INSPIRA
              </span>
              <p className="font-body text-amber text-xs uppercase tracking-wide mb-4">
                Gabriela lidera
              </p>
              <h3 className="font-display text-off-white text-2xl mb-4">
                Diagnóstico do problema real
              </h3>
              <p className="font-body text-off-white/60 text-sm leading-relaxed">
                Não chegamos com solução pronta. Chegamos com as perguntas
                que ninguém fez antes. Mapeamos o problema real — que muitas
                vezes não é onde o decisor imagina — e desenhamos a rota.
              </p>
            </div>

            {/* TRANSPIRA */}
            <div className="bg-navy-mid p-8 border-t-2 border-amber">
              <span className="inline-block px-3 py-1 bg-amber text-navy font-body text-xs tracking-widest uppercase mb-6">
                TRANSPIRA
              </span>
              <p className="font-body text-amber text-xs uppercase tracking-wide mb-4">
                Celso lidera
              </p>
              <h3 className="font-display text-off-white text-2xl mb-4">
                Execução com resultado verificado
              </h3>
              <p className="font-body text-off-white/60 text-sm leading-relaxed">
                Entramos na operação. Construímos junto com o time.
                Integramos tecnologia curada onde amplifica — depois de
                entender o problema, nunca antes. Saímos com resultado
                verificado.
              </p>
            </div>

            {/* RESPIRA */}
            <div className="bg-navy-mid p-8 border-t-2 border-green-respira">
              <span className="inline-block px-3 py-1 bg-green-respira text-off-white font-body text-xs tracking-widest uppercase mb-6">
                RESPIRA
              </span>
              <p className="font-body text-amber text-xs uppercase tracking-wide mb-4">
                O resultado, não um produto
              </p>
              <h3 className="font-display text-off-white text-2xl mb-4">
                Negócio em propulsão
              </h3>
              <p className="font-body text-off-white/60 text-sm leading-relaxed">
                O negócio opera com clareza. O decisor está no comando
                do que importa. Esse é o estado que cada entrega da Pira Labs
                busca alcançar. Não ficamos para sempre. Não saímos antes
                de entregar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM ── */}
      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">
                Para quem
              </p>
              <h2
                className="font-display text-navy mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Negócios de serviços<br />com potencial represado.
              </h2>
              <p className="font-body text-gray-text leading-relaxed">
                O cliente da Pira Labs é o decisor que reconhece que o que
                existe hoje não leva ao próximo nível. A condição necessária
                não é o tamanho da empresa. É a disposição genuína de ver
                o problema de novo.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  title: 'Gargalo de decisão',
                  desc: 'Tudo passa por você. Cada decisão depende de você. Não por fraqueza — por ausência de clareza sobre o que pode ser delegado e como.',
                },
                {
                  title: 'Crescimento sem estrutura',
                  desc: 'O negócio cresce mas o que funcionava antes já não sustenta o próximo nível. Crescer sem reconstruir vai quebrar o que está funcionando.',
                },
                {
                  title: 'Dados que não viram decisão',
                  desc: 'A empresa tem informação. Mas ninguém parou para transformar isso em clareza. O problema está à vista — falta o olhar externo para nomeá-lo.',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-amber pl-6">
                  <p className="font-body font-medium text-navy mb-2">{item.title}</p>
                  <p className="font-body text-gray-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FUNDADORES ── */}
      <section className="bg-cream-dark py-24">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">
            Os fundadores
          </p>
          <h2
            className="font-display text-navy mb-16"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Dois fundadores.<br />Nós que operamos.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gabriela */}
            <div className="bg-navy p-10">
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-6">
                CEO · INSPIRA
              </p>
              <h3 className="font-display text-off-white text-3xl mb-4">
                Gabriela Aguiar
              </h3>
              <p className="font-body text-off-white/60 text-sm leading-relaxed mb-6">
                Quase uma década construindo ecossistemas de inovação e
                venture capital no Brasil, EUA e países nórdicos. Professora
                de MBA na FIAP, mentora na FGV Ventures, em formação em IA
                no MIT. Chega com o repertório global que o cliente sozinho
                não alcançaria em anos.
              </p>
              <p className="font-body text-amber text-sm italic">
                "Não chegamos com solução pronta. Chegamos com a pergunta que
                muda o enquadramento do problema."
              </p>
            </div>

            {/* Celso */}
            <div className="bg-cream border border-amber/20 p-10">
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-6">
                Co-fundador · TRANSPIRA
              </p>
              <h3 className="font-display text-navy text-3xl mb-4">
                Celso Gama
              </h3>
              <p className="font-body text-gray-text text-sm leading-relaxed mb-6">
                Escalou R$16M para R$163M em 24 meses. Virou margem de
                -64% para +15% em 6 meses na Diageo, sem aumentar receita.
                79 pontos percentuais, parando onde ela vazava. Esses
                resultados são pré-IA — construídos com julgamento calibrado
                por consequência real.
              </p>
              <p className="font-body text-amber text-sm italic">
                "Sabe onde colocar tecnologia e onde colocar gente porque
                já errou nos dois."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-amber py-20">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2
            className="font-display text-navy mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Vale uma conversa.
          </h2>
          <p className="font-body text-navy/70 text-lg mb-10 max-w-xl mx-auto">
            Se você reconheceu o seu negócio em qualquer ponto desta página,
            a primeira conversa é gratuita e sem compromisso.
          </p>
          <Link
            href="/contato"
            className="inline-block px-10 py-4 bg-navy text-off-white font-body text-sm tracking-wide uppercase hover:bg-navy-mid transition-colors duration-200"
          >
            Solicitar diagnóstico →
          </Link>
        </div>
      </section>
    </>
  )
}
```

---

## ARQUIVO: app/sobre/page.tsx

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre os Fundadores',
  description:
    'Gabriela Aguiar e Celso Gama, fundadores da Pira Labs. Boutique brasileira de Creative Business Turnaround.',
  alternates: { canonical: 'https://piralabs.com.br/sobre' },
}

export default function Sobre() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">
            Os fundadores
          </p>
          <h1
            className="font-display text-off-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Sem intermediário entre<br />quem entende e quem resolve.
          </h1>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">
          {/* Gabriela */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-start">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-2">CEO · INSPIRA</p>
              <h2 className="font-display text-navy text-5xl mb-6">Gabriela Aguiar</h2>
              <p className="font-body text-gray-text leading-relaxed mb-4">
                Gabriela abre caminhos que ainda não estavam no mapa. Quase uma
                década construindo ecossistemas ativos dentro e fora do Brasil —
                pela Plug and Play, German Accelerator, Web Summit, South Summit.
              </p>
              <p className="font-body text-gray-text leading-relaxed mb-4">
                Professora de MBA na FIAP, mentora de startups na FGV Ventures,
                membro do Angel Investor Club. Em formação em IA no MIT.
              </p>
              <p className="font-body text-gray-text leading-relaxed mb-8">
                Chega com repertório real: sabe o que funciona no ecossistema global,
                o que ainda não chegou no Brasil, onde estão as conexões que o cliente
                sozinho não alcançaria em anos.
              </p>
              <a
                href="https://linkedin.com/in/gabriela-aguiar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-amber hover:underline"
              >
                LinkedIn →
              </a>
            </div>
            <div className="bg-navy-mid p-10 border-l-4 border-[#2A6B8A]">
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-6">INSPIRA</p>
              <p className="font-display text-off-white text-2xl leading-relaxed">
                "Não chego com solução pronta. Chego com a pergunta que muda
                o enquadramento do problema e com a visão do que está chegando
                no ecossistema global antes de chegar ao cliente."
              </p>
            </div>
          </div>

          <div className="border-t border-amber/20 mb-24" />

          {/* Celso */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="order-2 md:order-1 bg-cream-dark p-10 border-l-4 border-amber">
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-6">TRANSPIRA</p>
              <div className="space-y-4">
                {[
                  'R$16M para R$163M em 24 meses',
                  'Margem de -64% para +15% em 6 meses na Diageo, sem aumentar receita (79 pp)',
                  '600 pessoas e 100 fornecedores coordenados',
                  'Setor jurídico: semana de 10 pessoas substituída por 4 ciclos de 8 horas',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-amber mt-0.5">✓</span>
                    <p className="font-body text-gray-text text-sm">{item}</p>
                  </div>
                ))}
                <p className="font-body text-xs text-gray-text/60 pt-2 italic">
                  Todos os resultados são pré-IA.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="font-body text-xs tracking-widest uppercase text-amber mb-2">Co-fundador · TRANSPIRA</p>
              <h2 className="font-display text-navy text-5xl mb-6">Celso Gama</h2>
              <p className="font-body text-gray-text leading-relaxed mb-4">
                Celso entra quando a operação precisa de alguém que já viu isso antes.
                Os resultados à esquerda são cicatriz de execução real, não currículo
                de consultor.
              </p>
              <p className="font-body text-gray-text leading-relaxed mb-4">
                Sabe onde colocar tecnologia e onde colocar gente porque já errou
                nos dois. Esses resultados vieram de julgamento calibrado por
                consequência real. A tecnologia entrou depois como amplificador.
              </p>
              <p className="font-body text-gray-text leading-relaxed mb-8">
                A especificidade é a credibilidade. Não "melhoramos a margem" —
                virou -64% para +15% em seis meses na Diageo, sem aumentar receita,
                parando onde ela vazava.
              </p>
              <a
                href="https://linkedin.com/in/celso-gama"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-amber hover:underline"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

---

## ARQUIVO: app/servicos/page.tsx

```tsx
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serviços — INSPIRA e TRANSPIRA',
  description:
    'INSPIRA: diagnóstico do problema real. TRANSPIRA: execução com resultado verificado. Serviços da Pira Labs para empresas de serviços com potencial represado.',
  alternates: { canonical: 'https://piralabs.com.br/servicos' },
}

export default function Servicos() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">Serviços</p>
          <h1
            className="font-display text-off-white max-w-2xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Dois serviços.<br />Uma sequência natural.
          </h1>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6 space-y-16">

          {/* INSPIRA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-3 py-1 bg-[#2A6B8A] text-off-white font-body text-xs tracking-widest uppercase mb-6">
                INSPIRA
              </span>
              <h2 className="font-display text-navy text-4xl mb-4">
                Diagnóstico do problema real
              </h2>
              <p className="font-body text-gray-text leading-relaxed mb-6">
                O momento em que a condição certa encontra o ponto certo e
                algo que estava parado começa a se mover. Não chegamos com
                solução pronta — chegamos com as perguntas que ninguém fez
                antes.
              </p>
              <p className="font-body text-gray-text leading-relaxed mb-8">
                Saída: o problema nomeado e a rota desenhada. Em formato
                que o decisor pode usar — documento ou apresentação,
                acordado no início.
              </p>
              <Link href="/contato" className="font-body text-sm text-amber hover:underline">
                Solicitar INSPIRA →
              </Link>
            </div>
            <div className="bg-cream-dark p-8 space-y-4">
              <p className="font-body text-xs uppercase tracking-widest text-gray-text mb-4">
                O que o INSPIRA entrega
              </p>
              {[
                'Diagnóstico de onde o problema está limitando o potencial',
                'Leitura de tendências e riscos do setor',
                'Mapeamento de soluções disponíveis no mercado para o problema identificado',
                'Rota desenhada em formato que o decisor pode usar',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-amber mt-0.5">→</span>
                  <p className="font-body text-sm text-gray-text leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-amber/20" />

          {/* TRANSPIRA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-3 py-1 bg-amber text-navy font-body text-xs tracking-widest uppercase mb-6">
                TRANSPIRA
              </span>
              <h2 className="font-display text-navy text-4xl mb-4">
                Execução com resultado verificado
              </h2>
              <p className="font-body text-gray-text leading-relaxed mb-6">
                Tem um momento em que o decisor percebe que o que existe hoje
                não leva ao próximo nível. Isso não é falha de liderança.
                É ausência de clareza sobre o que precisa mudar — e clareza
                se constrói, não se inspira.
              </p>
              <p className="font-body text-gray-text leading-relaxed mb-8">
                A Pira Labs não sai quando o prazo acaba. Os critérios de
                encerramento são definidos no início do projeto. Saímos quando
                os primeiros resultados acordados são verificados.
              </p>
              <Link href="/contato" className="font-body text-sm text-amber hover:underline">
                Solicitar TRANSPIRA →
              </Link>
            </div>
            <div className="bg-navy p-8 space-y-6">
              <p className="font-body text-xs uppercase tracking-widest text-amber mb-4">
                Os quatro movimentos
              </p>
              {[
                ['Leitura', 'O que está acontecendo hoje é mapeado sem julgamento.'],
                ['Construção', 'O caminho é construído com o time, não para o time.'],
                ['Ativação', 'O novo caminho entra em operação real. Com consequência real.'],
                ['Calibração', 'Ajustes finos. Verificação dos resultados acordados.'],
              ].map(([title, desc]) => (
                <div key={title} className="border-l border-amber/40 pl-4">
                  <p className="font-body font-medium text-off-white text-sm mb-1">{title}</p>
                  <p className="font-body text-off-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber py-16">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-navy text-4xl mb-4">Acenda sua faísca.</h2>
          <p className="font-body text-navy/70 mb-8">
            A primeira conversa é gratuita e sem compromisso.
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-4 bg-navy text-off-white font-body text-sm uppercase tracking-wide hover:bg-navy-mid transition-colors duration-200"
          >
            Solicitar diagnóstico →
          </Link>
        </div>
      </section>
    </>
  )
}
```

---

## ARQUIVO: app/cases/page.tsx

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cases — Resultados verificados',
  description:
    'Case jurídico: 1.500+ páginas analisadas, equivalente a 400 horas de esforço entregue em 36 horas. Resultados verificados da Pira Labs.',
  alternates: { canonical: 'https://piralabs.com.br/cases' },
}

export default function Cases() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">Cases</p>
          <h1
            className="font-display text-off-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Resultados verificados.
          </h1>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">

          {/* Case 1 — Jurídico */}
          <div className="bg-navy mb-8">
            {/* Header do case */}
            <div className="p-10 border-b border-off-white/10">
              <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-amber mb-2">
                    Setor jurídico · Boutique · Direito Civil
                  </p>
                  <h2 className="font-display text-off-white text-4xl">
                    Mais capacidade.<br />
                    <span className="text-amber">Sem precisar contratar.</span>
                  </h2>
                </div>
                <span className="px-3 py-1 border border-off-white/20 text-off-white/50 font-body text-xs uppercase tracking-wide">
                  Case anonimizado
                </span>
              </div>
              <p className="font-body text-off-white/60 text-sm leading-relaxed max-w-2xl">
                Escritório boutique de Direito Civil com alta demanda e equipe no limite.
                Contratar não era opção. Terceirizar, risco. O trabalho precisava ser
                entregue com qualidade de sócio, no prazo de cliente impaciente.
              </p>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-off-white/10">
              {[
                { num: '1.500+', label: 'Páginas analisadas', desc: 'Leis, jurisprudências e doutrina' },
                { num: '400h → 36h', label: 'Esforço equivalente', desc: '10 profissionais × 1 semana = 36 horas' },
                { num: 'R$160K/mês', label: 'Receita potencial', desc: 'Capacidade liberada para novos contratos' },
              ].map((m) => (
                <div key={m.num} className="p-8">
                  <p className="font-display text-off-white text-4xl mb-1">{m.num}</p>
                  <p className="font-body font-medium text-amber text-xs uppercase tracking-wide mb-2">{m.label}</p>
                  <p className="font-body text-off-white/40 text-sm">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Método */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-off-white/10 border-t border-off-white/10">
              {[
                {
                  badge: 'INSPIRA',
                  color: '#2A6B8A',
                  title: 'Diagnóstico do problema real',
                  desc: 'Não começamos com ferramentas. Mapeamos o fluxo real de trabalho para identificar onde a energia vazava.',
                },
                {
                  badge: 'TRANSPIRA',
                  color: '#BA7517',
                  title: 'Co-criação e calibração',
                  desc: 'Construímos um squad de agentes calibrados para o contexto jurídico, com julgamento humano ativo em cada etapa.',
                },
                {
                  badge: 'RESPIRA',
                  color: '#1F5C35',
                  title: 'Negócio em propulsão',
                  desc: 'Base de dados organizada como ativo. Capacidade para novos contratos. Clareza sobre estratégia de crescimento.',
                },
              ].map((card) => (
                <div key={card.badge} className="p-8">
                  <span
                    className="inline-block px-2 py-0.5 font-body text-xs tracking-widest uppercase text-off-white mb-4"
                    style={{ backgroundColor: card.color }}
                  >
                    {card.badge}
                  </span>
                  <h3 className="font-display text-off-white text-xl mb-3">{card.title}</h3>
                  <p className="font-body text-off-white/50 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Citação */}
            <div className="p-10 border-t border-off-white/10">
              <blockquote className="border-l-4 border-amber pl-6">
                <p className="font-display text-off-white text-2xl italic mb-4">
                  "Fizemos o que uma equipe de 10 pessoas demoraria uma semana para fazer."
                </p>
                <p className="font-body text-off-white/40 text-xs uppercase tracking-widest">
                  Sócio de escritório boutique de Direito Civil, após revisão do trabalho entregue
                </p>
              </blockquote>
            </div>
          </div>

          <p className="font-body text-xs text-gray-text text-center">
            Case anonimizado. Identidade disponível mediante NDA. · inspira@piralabs.com.br
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-navy text-4xl mb-4">
            Seu negócio tem o próximo nível esperando.
          </h2>
          <p className="font-body text-gray-text mb-8">
            A primeira conversa é gratuita e sem compromisso.
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-4 bg-navy text-off-white font-body text-sm uppercase tracking-wide hover:bg-amber hover:text-navy transition-colors duration-200"
          >
            Solicitar diagnóstico →
          </Link>
        </div>
      </section>
    </>
  )
}
```

---

## ARQUIVO: app/contato/page.tsx

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato — Solicitar diagnóstico',
  description:
    'Entre em contato com a Pira Labs para solicitar um diagnóstico. A primeira conversa é gratuita e sem compromisso.',
  alternates: { canonical: 'https://piralabs.com.br/contato' },
}

export default function Contato() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-container mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-amber mb-4">Contato</p>
          <h1
            className="font-display text-off-white max-w-2xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Vale uma conversa.
          </h1>
          <p className="font-body text-off-white/60 text-xl mt-6 max-w-xl">
            A primeira conversa é gratuita e sem compromisso. Se você
            reconheceu o seu negócio, isso é suficiente para começar.
          </p>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Formulário */}
            <div>
              <h2 className="font-display text-navy text-3xl mb-8">
                Solicitar diagnóstico
              </h2>
              <form
                action="https://formsubmit.co/inspira@piralabs.com.br"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="Novo contato — piralabs.com.br" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://piralabs.com.br/contato?enviado=true" />

                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-gray-text block mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    className="w-full border border-navy/20 bg-transparent px-4 py-3 font-body text-sm text-navy placeholder-gray-text/50 focus:outline-none focus:border-amber transition-colors duration-200"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-gray-text block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-navy/20 bg-transparent px-4 py-3 font-body text-sm text-navy placeholder-gray-text/50 focus:outline-none focus:border-amber transition-colors duration-200"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-gray-text block mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    className="w-full border border-navy/20 bg-transparent px-4 py-3 font-body text-sm text-navy placeholder-gray-text/50 focus:outline-none focus:border-amber transition-colors duration-200"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-gray-text block mb-2">
                    O que está acontecendo no negócio?
                  </label>
                  <textarea
                    name="mensagem"
                    rows={5}
                    className="w-full border border-navy/20 bg-transparent px-4 py-3 font-body text-sm text-navy placeholder-gray-text/50 focus:outline-none focus:border-amber transition-colors duration-200 resize-none"
                    placeholder="Descreva brevemente o que está travando o crescimento ou o que você quer alcançar."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-navy text-off-white font-body text-sm tracking-wide uppercase hover:bg-amber hover:text-navy transition-colors duration-200"
                >
                  Enviar mensagem →
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-12">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-amber mb-4">
                  Email direto
                </p>
                <p className="font-display text-navy text-2xl">inspira@piralabs.com.br</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-amber mb-4">
                  Localização
                </p>
                <p className="font-body text-gray-text">São Paulo, Brasil</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-amber mb-4">
                  LinkedIn
                </p>
                <a
                  href="https://linkedin.com/company/piralabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-gray-text hover:text-amber transition-colors duration-200"
                >
                  linkedin.com/company/piralabs →
                </a>
              </div>
              <div className="bg-cream-dark p-8 border-l-4 border-amber">
                <p className="font-display text-navy text-xl mb-3">
                  Boutique por escolha.
                </p>
                <p className="font-body text-gray-text text-sm leading-relaxed">
                  Celso e Gabriela em cada projeto, do diagnóstico ao fechamento.
                  Sem intermediário entre quem entende o problema e quem resolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

---

## ARQUIVO: public/llms.txt

```
# Pira Labs — Propulsão de Negócios
# https://piralabs.com.br
# Atualizado: Março 2026

## Identidade

A Pira Labs é uma boutique brasileira de Creative Business Turnaround.
Fundada em 2025 por Gabriela Aguiar (CEO) e Celso Gama (co-fundador).
Localização: São Paulo, Brasil.
Contato: inspira@piralabs.com.br

## O que faz

A Pira Labs entra em negócios de serviços com potencial represado,
encontra onde o problema real está, constrói junto o caminho para o
próximo nível, e sai quando o negócio está em propulsão.

Não é consultoria que entrega relatório e some.
Não é empresa de IA.
É parceira que trabalha junto e sai com resultado verificado.

## Método: Inspira / Transpira / Respira

INSPIRA: Diagnóstico do problema real. Leitura do setor. Curadoria de
tecnologias disponíveis. O problema nomeado, a rota desenhada.
Liderado por Gabriela Aguiar.

TRANSPIRA: Execução. Entrada na operação. Construção junto com o time.
Integração de tecnologia curada onde amplifica — depois de entender o
problema, nunca antes. Saída com resultado verificado.
Liderado por Celso Gama.

RESPIRA: Estado que o negócio alcança, não um produto.
O negócio opera com clareza. O decisor está no comando do que importa.

## Para quem

Decisor de empresa de serviços de alto valor agregado com potencial represado.
Sócio, CEO ou presidente com autonomia real e abertura genuína para mudar.

Três portas de entrada:
1. Gargalo de decisão — tudo passa pelo fundador
2. Crescimento sem estrutura — o negócio cresce mais rápido que a capacidade
3. Dados que não viram decisão — informação existe, clareza não

Setores prioritários: publicidade, saúde, jurídico, alimentação,
serviços profissionais especializados.

## Resultados verificados

Case jurídico (anonimizado):
- 1.500+ páginas analisadas
- Equivalente a 400 horas de esforço entregue em 36 horas
- R$160K/mês de capacidade operacional liberada

Celso Gama (pré-IA):
- R$16M para R$163M em 24 meses
- Margem de -64% para +15% em 6 meses na Diageo, sem aumentar receita (79pp)

## Fundadores

Gabriela Aguiar — CEO, lidera INSPIRA
Quase uma década em inovação e venture capital no Brasil, EUA e países nórdicos.
Professora de MBA na FIAP. Mentora na FGV Ventures. Em formação em IA no MIT.
LinkedIn: https://linkedin.com/in/gabriela-aguiar

Celso Gama — Co-fundador, lidera TRANSPIRA
Especialista em turnaround operacional. Resultados pré-IA verificáveis.
LinkedIn: https://linkedin.com/in/celso-gama

## Links

Site: https://piralabs.com.br
LinkedIn: https://linkedin.com/company/piralabs
GitHub: https://github.com/PiraLabs/pira-labs
Serviços: https://piralabs.com.br/servicos
Cases: https://piralabs.com.br/cases
Sobre: https://piralabs.com.br/sobre
Contato: https://piralabs.com.br/contato
```

---

## ARQUIVO: public/robots.txt

```
User-agent: *
Allow: /

# Crawlers de IA — permitir explicitamente
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Omgilibot
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: ia_archiver
Allow: /

Sitemap: https://piralabs.com.br/sitemap.xml
```

---

## INSTRUÇÕES FINAIS DE SETUP

Após criar todos os arquivos acima:

1. Instalar dependências:
```bash
npx create-next-app@latest piralabs --typescript --tailwind --app --src-dir=false --import-alias="@/*"
cd piralabs
```

2. Substituir os arquivos gerados pelo create-next-app pelos arquivos deste prompt.

3. Rodar localmente:
```bash
npm run dev
```

4. Verificar as cinco páginas:
- http://localhost:3000
- http://localhost:3000/sobre
- http://localhost:3000/servicos
- http://localhost:3000/cases
- http://localhost:3000/contato

5. Quando aprovado, fazer deploy na Vercel:
```bash
npx vercel --prod
```

6. No painel da Vercel: conectar domínio piralabs.com.br e apontar os DNS.

7. Verificar no Google Search Console após o domínio estar ativo.

---

FIM DO PROMPT DE INICIALIZAÇÃO
```
