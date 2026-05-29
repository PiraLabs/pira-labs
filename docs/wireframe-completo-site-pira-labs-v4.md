# Wireframe Completo — Site PIRA LABS
**Versão:** 4.0
**Data:** Maio 2026
**Substitui:** wireframe-completo-site-pira-labs-v3_9_1.md

**Mudanças v3.9.1 → v4.0 (alinhamento com Documento Mestre v14):**
- Seção 0.1 adicionada: instrução obrigatória de verificação cruzada de todos os arquivos do projeto contra v4 e v14
- Seção 1: diagrama de arquitetura FAÍSCA atualizado — remove "mentorias/oficinas", reflete 7 produtos em 3 grupos
- Seção 3.1: duas novas rotas indexáveis — /faisca/imersa-em-ia e /faisca/pocket
- Seção 3.3: novo redirect /imersa → /faisca/imersa-em-ia
- Seção 3.4: origens de CTA expandidas para novos produtos
- Seção 4.1 Header: dropdown Faísca atualizado com novas páginas
- Seção 5.1 HOME-5: teaser FAÍSCA reestruturado — remove "Mentorias" (produto descontinuado), reflete três grupos do catálogo v14
- Seção 5.5 TRANSPIRA: dois blocos novos — Configurações A e B (COO Temporário / Arquiteto de Delegação) e INSPIRA+TRANSPIRA contrato unificado
- Seção 5.7 FAÍSCA: reestruturação completa — 7 produtos em 3 grupos comerciais, conforme Seção 8 do v14
- Seção 5.20 nova: /faisca/imersa-em-ia (Imersão em IA, R$7.100, Celso conduz)
- Seção 5.21 nova: /faisca/pocket (Pocket do INSPIRA, R$3.900, Gabriela + Celso)
- Seção 6 Componentes: tabela atualizada com novas páginas
- Seção 7.2 Schemas: novas páginas adicionadas
- Seção 9 Deploy A: novas rotas incluídas nas fases
- Seção 12 item 1: referência corrigida de v13 para v14

---

## 0.1 INSTRUÇÃO OBRIGATÓRIA PARA O PROJETO 2 — SITE

**Esta versão (v4.0) incorpora as decisões do Documento Mestre v14, aprovado em Maio 2026.**

Antes de qualquer implementação, o Projeto 2 deve verificar a consistência de TODOS os seus arquivos ativos contra este wireframe v4.0 e contra `PiraLabs_Documento_Mestre_v14.md`.

### Arquivos que precisam ser verificados e atualizados

| Arquivo | O que verificar contra v4/v14 |
|---|---|
| `copy-home-pira-labs-v2.md` (ou versão atual) | HOME-5 FAÍSCA teaser: "Mentorias" removida, três grupos do catálogo v14; conferir todos os blocos contra portfólio v14 |
| `copy-paginas-internas-pira-labs-v4.md` (ou versão atual) | Páginas /faisca, /transpira, /inspira: verificar se catálogo, configurações A/B do TRANSPIRA e contrato unificado INSPIRA+TRANSPIRA estão refletidos |
| `handoff-tecnico-site-pira-labs-v2.md` (ou versão atual) | Rotas novas (/faisca/imersa-em-ia, /faisca/pocket), componentes novos, schemas novos |
| `adendo-v13-estrategia-bilingue.md` | Verificar se novas rotas precisam de versão EN ou apenas hreflang |
| Qualquer arquivo que referencie `PiraLabs_Documento_Mestre_v13.md` | Atualizar referência para v14 em todos os lugares |
| llms.txt e llms-full.txt | Incluir novos produtos (Imersão em IA, Pocket do INSPIRA) e configurações TRANSPIRA A/B |
| schemas JSON-LD (se já gerados) | Atualizar /faisca, /transpira, adicionar novos produtos |

### Regra de verificação

Nenhum arquivo do Projeto 2 entra em implementação sem ter sido conferido linha a linha contra este v4.0 **e** contra a Seção 8 (Portfólio) e Seção 9 (Posicionamento) do v14.

Em caso de conflito entre este wireframe e o v14, **o v14 prevalece**. Comunicar ao Projeto 1 antes de resolver por conta própria.

---

## 0. SOBRE ESTE DOCUMENTO

Este documento é a especificação estrutural completa do site `piralabs.com.br`. Independente de IA executora. Pode ser implementado em Claude Code, Cursor, Windsurf ou qualquer LLM com acesso ao repositório.

Contém:
- Mapa completo de páginas e rotas
- Estrutura de blocos por página, sem copy
- Hierarquia de navegação (header, footer, breadcrumbs)
- Especificação de schemas, redirects e regras de indexação
- Lista de assets e componentes compartilhados
- Plano de implementação por fase
- Sistema de motion e whitespace

**O que este documento NÃO contém:**
- Copy final (em `copy-home-pira-labs-v2.md` e `copy-paginas-internas-pira-labs-v4.md`)
- Identidade visual (vem da KZ, layout provisório no primeiro deploy)
- Código de implementação (em `handoff-tecnico-site-pira-labs-v2.md`)

---

## 1. CONTEXTO ESTRATÉGICO PARA O IMPLEMENTADOR

A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços. CEO Gabriela Aguiar conduz INSPIRA. COO Celso Gama conduz TRANSPIRA. O site serve três objetivos simultâneos:

1. **Estabelecer autoridade institucional** para os dois fundadores e para a empresa
2. **Converter visitantes** para INSPIRA, TRANSPIRA e Oxigênio
3. **Servir como base de GEO/AEO** para que LLMs citem a PIRA LABS quando o ICP procurar por turnaround de empresas de serviços

Arquitetura de produtos (conforme Documento Mestre v14, Seção 8):

```
INSPIRA (diagnóstico — Gabriela conduz)
  └── Oxigênio IA Search (Fast R$3.500 / Full R$5.300)
  └── INSPIRA Jurídico (R$12.500–R$26.000)

INSPIRA + TRANSPIRA (contrato unificado — quando diagnóstico e execução são decididos juntos)
  └── Cláusula de pré-condição obrigatória
  └── Fase 1: Estrutura Operacional (0–3 meses)
  └── Fase 2: Posicionamento e Mercado (3–12 meses)

TRANSPIRA (execução — Celso conduz)
  └── Configuração A: COO Temporário (duração típica 2–3 meses)
  └── Configuração B: Arquiteto de Delegação (duração típica 45–60 dias + acompanhamento)
  └── TRANSPIRA Jurídico (Modelo A e B)

FAÍSCA (porta de entrada — 7 produtos em 3 grupos)
  Grupo 1 — Entrada comercial padrão:
    └── Imersão em IA (R$7.100 — Celso conduz)
    └── Oxigênio standalone (R$3.500/R$5.300)
    └── Pocket do INSPIRA (R$3.900 — Gabriela + Celso)
  Grupo 2 — Autoridade e relacionamento:
    └── Palestras (sob consulta — Gabriela e/ou Celso)
    └── Workshops (a partir de R$12.500 — Celso conduz)
  Grupo 3 — Oferta seletiva (não é prateleira):
    └── C-level as a Service (sob consulta — Gabriela conduz)
    └── FAÍSCA Jurídica (Celso conduz)

Antes, Pira (publicação editorial no Substack)
  └── URL no site: /antes-pira

RESPIRA — não é produto. É o estado alcançado. Aparece no manifesto, não como bloco no método.
```

**Restrições absolutas:**
- Travessão (em dash) proibido em qualquer texto público
- Vocabulário proibido: "em paralelo"; "neste contexto"; "além disso"; "por fim"; "o objetivo é"; "é importante destacar"; "vale ressaltar"; "certamente"; "com certeza"
- "PIRA LABS" sempre em caixa alta
- Frase canônica obrigatória nos primeiros 150 termos da home: *A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes que a janela se feche.*
- Nunca nomear Diageo ("multinacional do setor de bebidas") ou Samsung ("grande marca do setor de tecnologia")
- "Avanços acordados" ou "critérios acordados", nunca "resultados garantidos"
- "Respondemos em até dois dias úteis." em todas as páginas com CTA
- MIT: "Universal AI Foundational Modules" (Gabriela), "Applied AI Certificate Program" (Celso). Nunca apenas "MIT"
- Celso: "bacharelando em Direito (Mackenzie)", nunca "advogado" ou "bacharel"
- "Fundador no teto" é vocabulário de conversa de venda direta — nunca usar em canal público sem aprovação dos fundadores

---

## 2. STACK TÉCNICA

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15, App Router |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS |
| Deploy | Vercel |
| Domínio | piralabs.com.br |
| Email | Google Workspace (inspira@piralabs.com.br) |
| Repositório | github.com/PiraLabs/pira-labs |
| Branch | master |
| Conteúdo | .tsx (não .mdx — decisão deliberada) |
| Analytics | Google Analytics 4 + Search Console + Bing Webmaster |

**Design tokens provisórios** (até identidade visual final da KZ):

```
ink:        #0C0F16
deep-teal:  #05262D
teal:       #004756
orange:     #EA6335
peach:      #F2A85E
off-white:  #E8E0D6
```

**Uso:**
- `ink` e `deep-teal`: fundos principais
- `off-white`: texto claro sobre fundos escuros
- `teal`: superfícies secundárias
- `orange`: CTA principal, hover, highlight — acento, nunca fundo dominante
- `peach`: acentos editoriais secundários

**Tipografia (sistema Caminho C):**

| Família | Uso | Pesos |
|---|---|---|
| Space Grotesk | Body, navegação, headers, UI, formulários, footer | Regular 400, Medium 500, Semibold 600 |
| Cormorant Garamond | Frases canônicas, citações dos fundadores, números de destaque, assinaturas de seção | Light 300, Regular 400, Italic |

**Hierarquia tipográfica:**
- H1: Grotesk Semibold, 48px desktop / 32px mobile, line-height 1.1
- H2: Grotesk Medium, 32px desktop / 24px mobile, line-height 1.2
- H3: Grotesk Medium, 22px desktop / 18px mobile, line-height 1.3
- Body: Grotesk Regular, 17px desktop / 16px mobile, line-height 1.6
- Citação editorial: Cormorant Regular Italic, 22–28px, line-height 1.4
- Número de destaque: Cormorant Light, 56–72px, kerning -0.02em
- Caption: Grotesk Regular, 14px

**Onde usar Cormorant:**
- H1 do hero principal (home) — 64–80px desktop
- Frases canônicas nos primeiros 150 termos
- Citações dos fundadores em primeira pessoa
- Números âncora em HOME-4, /sobre, /transpira, /transpira/juridico
- Manchetes do /antes-pira e abertura de artigos
- Frase de fechamento antes do CTA final
- Statement editorial do footer

**Onde NÃO usar Cormorant:**
- Headers de seção (Grotesk Medium)
- Body de qualquer página
- Navegação, footer links, breadcrumbs, FAQs, botões

---

## 2.1 ACESSIBILIDADE (WCAG 2.1 AA)

Padrão obrigatório, não negociável.

**Contraste:**
- off-white (#E8E0D6) sobre ink (#0C0F16): ~14:1 ✓
- off-white sobre deep-teal (#05262D): ~12:1 ✓
- off-white sobre teal (#004756): ~9:1 ✓
- orange (#EA6335) sobre ink: ~4.7:1 ✓
- ink sobre peach (#F2A85E): ~9:1 ✓
- Não usar peach ou orange como cor de texto sobre fundo claro

**Foco:** todos os elementos interativos com `:focus-visible`, outline 2px sólido em orange, outline-offset 2px.

**Navegação por teclado:** Tab order lógico, skip link no topo, menu mobile fecha com Esc.

**Semântica HTML:** `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`. Um único `<h1>` por página. `<button>` para ações, `<a>` para navegação.

**Imagens:** alt descritivo em todas. Foto dos fundadores: `alt="Gabriela Aguiar e Celso Gama, cofundadores da PIRA LABS"`.

**Touch (mobile):** área mínima de toque 44×44px, espaçamento mínimo entre elementos clicáveis 8px.

**ARIA:** `aria-label` em botões com apenas ícone, `aria-expanded` em menus, `aria-current="page"` no item ativo.

**Critério de pronto:** Lighthouse Accessibility ≥ 95, teste manual com VoiceOver ou NVDA em home, /contato e /inspira/oxigenio.

---

## 2.2 MOTION SYSTEM

Sistema de motion obrigatório. Sem especificação, o implementador inventa ou omite.

**Entrances de seção:**
```css
opacity: 0 → 1
transform: translateY(16px) → translateY(0)
duration: 0.6s
easing: cubic-bezier(0.16, 1, 0.3, 1)
trigger: 10% do elemento visível no viewport (IntersectionObserver)
```

**Números (HOME-4 Provas):**
```
count-up do zero ao valor final
duration: 1.2s, easing: ease-out
trigger: elemento visível no viewport
```

**Header sticky:**
```css
backdrop-filter: blur(0) → blur(12px)
background-color: opacity 0 → 0.92
duration: 0.2s, easing: linear
trigger: scroll > 80px
```

**CTAs hover:**
```css
transform: scale(1) → scale(1.02)
duration: 0.15s
```

**Links de texto hover:**
```css
text-decoration: none → underline
color: color-shift via CSS transition
duration: 0.15s
```

**prefers-reduced-motion:**
```css
@media (prefers-reduced-motion: reduce) {
  /* Desabilitar todos os transforms e count-up */
  /* Manter opacity fades com duration ≤ 0.2s */
  /* Manter color transitions */
}
```

**Proibido:**
- Parallax em qualquer breakpoint
- Animações em loop infinito
- Flash acima de 3 vezes por segundo
- Auto-play de vídeo com som

---

## 2.3 WHITESPACE SYSTEM

Sem especificação de espaçamento, o resultado fica comprimido e perde o caráter editorial.

```
Entre seções principais:    120px desktop / 80px mobile
Dentro de seção (padding):   64px desktop / 40px mobile
Entre elementos de card:     32px desktop / 24px mobile
Entre parágrafo e elemento:  24px desktop / 16px mobile
Margem lateral (container):  max-width 1280px, padding 80px desktop / 24px mobile
```

---

## 3. MAPA DE ROTAS

### 3.1 Rotas indexáveis

| Rota | Tipo | Indexação | Prioridade |
|---|---|---|---|
| / | Home | index, follow | 1.0 |
| /sobre | Institucional | index, follow | 0.8 |
| /inspira | Serviço pai | index, follow | 0.8 |
| /inspira/oxigenio | Subproduto pago | index, follow | 0.9 |
| /transpira | Serviço pai | index, follow | 0.8 |
| /transpira/juridico | Subproduto vertical | index, follow | 0.7 |
| /faisca | Porta de entrada | index, follow | 0.7 |
| /faisca/juridica | Subproduto FAÍSCA — vertical jurídica | index, follow | 0.7 |
| /faisca/imersa-em-ia | Subproduto FAÍSCA — Imersão em IA | index, follow | 0.7 |
| /faisca/pocket | Subproduto FAÍSCA — Pocket do INSPIRA | index, follow | 0.7 |
| /creative-business-turnaround | Página canônica da categoria | index, follow | 0.8 |
| /inspira/juridico | Subproduto vertical INSPIRA | index, follow | 0.7 |
| /antes-pira | Hub editorial da publicação (tese, arquivo, posts) | index, follow | 0.6 |
| /contato | Contato | index, follow | 0.5 |
| /politica-privacidade | LGPD | index, follow | 0.3 |
| /termos | Termos de uso | index, follow | 0.3 |
| /cookies | Política de cookies | index, follow | 0.3 |
| /glossario | Hub de vocabulário proprietário | index, follow | 0.7 |
| /glossario/[termo] | Definição individual de cada termo | index, follow | 0.6 |
| /empresa-cresce-margem-some | Página de problema ICP | index, follow | 0.6 |
| /fundador-virou-gargalo | Página de problema ICP | index, follow | 0.6 |
| /ia-acelerou-o-ruido | Página de problema ICP | index, follow | 0.6 |
| /cliente-nao-percebe-o-valor | Página de problema ICP | index, follow | 0.6 |
| /respirando | Negócios em movimento (cases anonimizados) | index, follow | 0.7 |
| /como-pensamos | Referências intelectuais e linhagem | index, follow | 0.6 |
| /podcast | Placeholder do podcast Antes, Pira | **noindex, follow** (Deploy A) → index quando primeiro episódio publicar | — |
| /en | Home em inglês | index, follow | 0.8 |
| /en/about | Sobre em inglês | index, follow | 0.7 |
| /en/creative-business-turnaround | Página canônica em inglês | index, follow | 0.7 |
| /en/contact | Contato em inglês | index, follow | 0.4 |

### 3.1.1 Rotas públicas não indexáveis (Deploy A)

| Rota | Função | Indexação |
|---|---|---|
| /podcast | Placeholder até primeiro episódio | noindex, follow |
| /404 | Página de erro | noindex, follow |

`/podcast` migra para indexável quando primeiro episódio publicar (Seção 5.18).

### 3.2 Rotas técnicas

| Rota | Função |
|---|---|
| /sitemap.xml | Sitemap dinâmico gerado em build |
| /robots.txt | Permite 21 crawlers de IA por nome |
| /llms.txt | Resumo do site para LLMs |
| /llms-full.txt | Conteúdo completo em texto puro para LLMs |
| /.well-known/ai-agents.json | Declara capacidades e contato para agentes |
| /404 | Página 404 customizada (app/not-found.tsx), noindex |
| /favicon.ico | Favicon principal |
| /apple-touch-icon.png | Ícone iOS |
| /manifest.json | Web App Manifest |

### 3.3 Redirects 301 obrigatórios

**Migração de nomenclatura da publicação:**

| De | Para |
|---|---|
| /antes-da-crise | /antes-pira |
| /antesdacrise | /antes-pira |

**URLs curtas para campanha:**

| De | Para |
|---|---|
| /oxigenio | /inspira/oxigenio |
| /faisca/ia-search | /inspira/oxigenio |
| /oxigenio-ia-search | /inspira/oxigenio |
| /turnaround | /creative-business-turnaround |
| /cbt | /creative-business-turnaround |
| /imersa | /faisca/imersa-em-ia |
| /pocket | /faisca/pocket |

**URLs do site provisório (PT raiz):**

| De | Para |
|---|---|
| /servicos | /inspira |
| /cases | /#provas |
| /blog | /antes-pira |
| /news | /antes-pira |
| /sobre | Não redirecionar — página existe com mesma URL |
| /contato | Não redirecionar — página existe com mesma URL |

**URLs do site provisório (EN — atualizado v3.9.1 para não conflitar com novo EN bilíngue):**

| De | Para |
|---|---|
| /en/services | /en/creative-business-turnaround |
| /en/cases | /en/creative-business-turnaround#proofs (Deploy A) → /respirando (após Deploy B) |

**Removidos em v3.9.1** (conflitavam com novas páginas EN do Deploy A): `/en → /`, `/en/about → /sobre`, `/en/contact → /contato`. Essas rotas agora são páginas próprias, não redirects.

**URLs do site provisório (ES):**

| De | Para |
|---|---|
| /es | / |
| /es/sobre | /sobre |
| /es/servicos | /inspira |
| /es/cases | /#provas |
| /es/contato | /contato |

**Variantes EN sem prefixo:**

| De | Para |
|---|---|
| /services | /inspira |
| /about | /sobre |
| /contact | /contato |

**Notas críticas:**
- Todos os redirects preservam query strings (UTMs)
- /faisca/juridica, /faisca/imersa-em-ia e /faisca/pocket NÃO têm redirect — são páginas próprias indexáveis
- Antes do deploy: varredura completa no GSC para capturar URLs além das listadas
- Após deploy: monitorar Coverage no GSC por 30 dias

### 3.4 Sistema de origens nos CTAs

Todos os CTAs para /contato incluem `?origem=`:

| Origem | Página |
|---|---|
| home | / |
| sobre | /sobre |
| inspira | /inspira |
| oxigenio | /inspira/oxigenio |
| transpira | /transpira |
| transpira_juridico | /transpira/juridico |
| transpira_unificado | bloco INSPIRA+TRANSPIRA em /transpira |
| faisca | /faisca |
| faisca_juridica | /faisca/juridica |
| faisca_imersa | /faisca/imersa-em-ia |
| faisca_pocket | /faisca/pocket |
| faisca_palestras | bloco Palestras em /faisca |
| faisca_workshops | bloco Workshops em /faisca |
| faisca_clevel | bloco C-level as a Service em /faisca |
| inspira_juridico | /inspira/juridico |
| creative_business_turnaround | /creative-business-turnaround |
| header_global | header CTA |
| 404 | página 404 |
| direto | entrada direta sem origem |

---

## 4. NAVEGAÇÃO

### 4.1 Header

**Estrutura desktop (worldview primeiro):**

```
[LOGO PIRA LABS]   Antes, Pira  ·  Sobre  ·  Inspira ▾  ·  Transpira ▾  ·  Faísca ▾  ·  [Respire]
```

**Dropdowns:**
- Inspira ▾ → Inspira · INSPIRA Jurídico · Oxigênio IA Search
- Transpira ▾ → Transpira · TRANSPIRA Jurídico
- Faísca ▾ → Faísca · Imersão em IA · Pocket do INSPIRA · FAÍSCA Jurídica

**Não incluído no menu principal:** /creative-business-turnaround (footer + links contextuais), /contato (é o CTA do header), Palestras e Workshops (aparecem em /faisca, entrada por contato), C-level as a Service (oferta seletiva, sem exposição em menu).

**Comportamento:**
- Sticky no topo
- Backdrop blur: blur(0) → blur(12px) + background opacity 0 → 0.92 quando scroll > 80px (transition 0.2s)
- Mobile: hamburger → menu vertical full-screen
- Dropdown: hover (desktop), toque (mobile)
- `aria-expanded`, tab navegável
- `aria-current="page"` no item ativo

**CTA do header:**
- Texto: "Respire"
- Destino: /contato?origem=header_global
- Estilo: outline off-white sobre fundo escuro (não orange filled — postura de escassez, não urgência de conversão)
- Microcopy abaixo NÃO aparece no header (apenas botão). Microcopy contextual fica em CTAs de página, não no header global.
- Em mobile: dentro do menu expandido

### 4.2 Footer

**Estrutura:**

```
[Cormorant Italic, grande]
"Liberamos o próximo nível."

────────────────────────────────────────

INSTITUCIONAL          O QUE FAZEMOS         VERTICAL JURÍDICA    CONTATO
Sobre                  Inspira               Inspira Jurídico     inspira@piralabs.com.br
Creative Business      Oxigênio              Transpira Jurídico
  Turnaround           Transpira             Faísca Jurídica      LinkedIn PIRA LABS
Antes, Pira            Faísca                                     LinkedIn Gabriela
Contato                Imersão em IA                              LinkedIn Celso
                       Pocket do INSPIRA

────────────────────────────────────────

PIRA LABS · CNPJ 46.954.891/0001-16 · São Paulo, Brasil
© 2026 PIRA LABS. Todos os direitos reservados.
Política de Privacidade · Termos de Uso · Aviso de Cookies

[Aviso jurídico 13px, off-white 70% opacidade]
A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e não substitui
advogados habilitados pela OAB. As páginas da vertical jurídica tratam de fluxos de trabalho,
governança operacional de IA e capacidade produtiva, com supervisão obrigatória de advogado
habilitado do escritório contratante.
```

**Nota sobre ordem:** statement editorial ("Liberamos o próximo nível.") aparece ANTES das colunas de links. Última impressão é intencional, não inventário de páginas.

**CTA no footer:** "Respire" — mesmo texto do header. Consistência de postura.

**Componente mobile:** colunas em acordeão fechado.

**Sem:** telefone, endereço físico completo, newsletter signup (vai em /antes-pira), ícones de redes sociais.

### 4.3 Breadcrumbs

Visíveis em todas as páginas exceto home. BreadcrumbList em JSON-LD em cada página.

**Tabela completa de breadcrumbs:**

| Rota | Breadcrumb |
|---|---|
| /sobre | Home > Sobre |
| /inspira | Home > Inspira |
| /inspira/oxigenio | Home > Inspira > Oxigênio IA Search |
| /inspira/juridico | Home > Inspira > Jurídico |
| /transpira | Home > Transpira |
| /transpira/juridico | Home > Transpira > Jurídico |
| /faisca | Home > Faísca |
| /faisca/juridica | Home > Faísca > Jurídica |
| /faisca/imersa-em-ia | Home > Faísca > Imersão em IA |
| /faisca/pocket | Home > Faísca > Pocket do INSPIRA |
| /creative-business-turnaround | Home > Creative Business Turnaround |
| /antes-pira | Home > Antes, Pira |
| /contato | Home > Contato |
| /respirando | Home > Respirando |
| /como-pensamos | Home > Como pensamos |
| /podcast | Home > Podcast |
| /glossario | Home > Glossário |
| /glossario/[termo] | Home > Glossário > [Termo] |
| /empresa-cresce-margem-some | Home > Empresa cresce, margem some |
| /fundador-virou-gargalo | Home > Fundador virou gargalo |
| /ia-acelerou-o-ruido | Home > IA acelerou o ruído |
| /cliente-nao-percebe-o-valor | Home > Cliente não percebe o valor |
| /politica-privacidade | Home > Política de Privacidade |
| /termos | Home > Termos de Uso |
| /cookies | Home > Cookies |
| /en | Home (EN) |
| /en/about | Home (EN) > About |
| /en/creative-business-turnaround | Home (EN) > Creative Business Turnaround |
| /en/contact | Home (EN) > Contact |

Esquema BreadcrumbList JSON-LD em cada página com `position` numerado, conforme spec Schema.org. Em mobile, breadcrumbs aparecem em fonte 14px abaixo do header e acima do H1 da página.

### 4.4 Componentes globais

**Banner de cookies (LGPD):**
- Ancorado no rodapé da viewport no primeiro acesso
- 3 botões: "Aceitar todos" (primário, orange), "Recusar opcionais" (outline), "Ler mais" (link para /cookies)
- Cookie `pira_consent`, 12 meses
- Vercel Analytics opt-out até consentimento
- `role="dialog"`, trap de foco, Esc não fecha

**Página 404:**
- `app/not-found.tsx`, noindex
- H1: "Essa página não existe na PIRA LABS"
- Lista de caminhos principais
- CTA: "Respire" → /contato?origem=404

**Skip link:** primeiro elemento focável, aponta para `<main id="main-content">`.

### 4.5 Sistema de CTA — "Respire" universal + microcopy contextual

Decisão tomada após análise de Persona 4 (novato): "Respire" como verbo de marca pode confundir quem nunca contratou. Solução: microcopy contextual abaixo do botão em todos os CTAs de página (não no header global).

**Padrão de CTA por contexto:**

| Contexto | Botão | Microcopy abaixo |
|---|---|---|
| Header global | Respire | (sem microcopy) |
| Página de produto (INSPIRA, TRANSPIRA, etc.) | Respire | "Conversa inicial sem compromisso. Respondemos em até 2 dias úteis." |
| Oxigênio (página comercial) | Aplicar agora | "5 dias úteis para o relatório. Respondemos em até 24h." |
| Imersão em IA (página comercial) | Respire | "Conversa inicial para confirmar encaixe. Respondemos em até 2 dias úteis." |
| Pocket do INSPIRA (página comercial) | Respire | "Sessão de 1,5h online. Respondemos em até 2 dias úteis." |
| Página de problema | Respire | "Diagnóstico antes de proposta. Conversa inicial gratuita." |
| /respirando, /como-pensamos | Respire | "Quer entender se o seu momento é o momento da Pira?" |
| Footer | Respire | (sem microcopy — já tem statement editorial acima) |
| Página 404 | Respire | "Volte para o caminho principal abaixo." |

**Regra geral:**
- Botão sempre "Respire" (ou variante específica como "Aplicar agora" em página comercial fechada)
- Microcopy abaixo: 1 linha, 12-14 palavras máximo
- Microcopy responde a pergunta implícita: "o que acontece se eu clicar?"
- Tipografia: Grotesk Regular 14px, off-white com 80% opacidade

**Componente:** `<CTAWithMicrocopy />` recebe props `text`, `microcopy`, `href`.

---

## 5. ESTRUTURA DE PÁGINAS

### 5.1 Home `/`

**Objetivo:** estabelecer categoria, posicionar a marca, conduzir o leitor à página apropriada.

**SEO:** Title com "Creative Business Turnaround" nos primeiros 30 caracteres. Canonical: https://piralabs.com.br/
**Schema:** Organization, WebSite, WebPage, BreadcrumbList

#### Blocos

**HOME-1 · Hero (3 elementos — não mais)**
- Função: estabelecer categoria e tagline em 5 segundos
- Componente: `<Hero />`
- Conteúdo:
  - H1 em Cormorant 64–80px: *Existe um momento em que transformar ainda é um processo, não uma crise.*
  - 1 linha de suporte em Grotesk com a frase canônica
  - 1 CTA único: "Entender o método" → âncora HOME-3
- Nota: durante campanha ativa do Oxigênio, segundo CTA pode aparecer em HOME-3, não no hero
- Schema: nenhum específico

**HOME-2 · Sinais**
- Função: ativar reconhecimento no leitor
- Componente: `<Signals />`
- Conteúdo: 4–6 sinais em texto corrido ou lista tipográfica (sem cards com ícones genéricos)

**HOME-3 · Método**
- Componente: `<Method />`
- Conteúdo: INSPIRA (Gabriela), TRANSPIRA (Celso), linha de fechamento com RESPIRA, destaque para Oxigênio como ponto de entrada possível
- Schema: nenhum (Service schemas ficam nas páginas filhas)

**HOME-4 · Provas**
- Componente: `<Proofs />`
- **Elemento obrigatório:** `<section id="provas">` — destino dos redirects de /cases
- Conteúdo:
  - 3 cards com números reais aprovados
  - **Números em Cormorant Light 56–72px, kerning -0.02em** — especificação obrigatória
  - **Count-up animation ao entrar no viewport** (IntersectionObserver, 1.2s, ease-out)
  - R$16M → R$163M em 24 meses (grande marca de tecnologia)
  - -64% → +15% de margem em 6 meses (multinacional do setor de bebidas)
  - 400h → 36h com R$160 mil/mês de capacidade liberada (jurídico pós-IA)
  - Frase de fechamento distinguindo os 2 pré-IA do 1 pós-IA

**HOME-5 · FAÍSCA (teaser) — atualizado v4.0**
- Componente: `<FaiscaTeaser />`
- Estrutura: três grupos do catálogo v14, apresentados de forma sintética
  - **Grupo 1 — Entrada rápida:** Imersão em IA (R$7.100) · Oxigênio (R$3.500/5.300) · Pocket do INSPIRA (R$3.900)
  - **Grupo 2 — Autoridade:** Palestras · Workshops
  - **Grupo 3 — Seletivo:** C-level as a Service · FAÍSCA Jurídica
- CTA → /faisca
- Nota: não é lista de preços. É convite a conhecer a porta de entrada. O catálogo completo está em /faisca.

**HOME-6 · Fundadores (teaser)**
- Componente: `<FoundersTeaser />`
- Foto Nós.png, 2–3 linhas, CTA → /sobre

**HOME-7 · FAQ Primeira Conversa**
- Função: reduzir fricção para Persona 4 (quem nunca contratou esse tipo de serviço)
- Componente: `<HomeFAQ />`
- Conteúdo: 4-5 perguntas curtas, respostas diretas
  - "Quanto custa trabalhar com a Pira?" → "Cada projeto é dimensionado individualmente. Oxigênio (diagnóstico de IA Search) tem preço público: Fast R$3.500, Full R$5.300. Pocket do INSPIRA: R$3.900. Imersão em IA: R$7.100. Para INSPIRA e TRANSPIRA, o investimento é definido após a primeira conversa."
  - "Quanto tempo demora?" → "INSPIRA: 4 a 6 semanas. TRANSPIRA: depende do escopo e da configuração, normalmente entre 2 e 6 meses. Oxigênio: até 5 dias úteis. Pocket do INSPIRA e Imersão em IA: sessão única."
  - "E se eu não sei exatamente o que preciso?" → "A primeira conversa é justamente isso. Sem compromisso. Ajudamos a nomear o problema antes de propor solução."
  - "Como começa o primeiro contato?" → "Você manda mensagem pelo formulário. Em até 2 dias úteis Gabriela e Celso respondem. Conversa inicial de 30-45 minutos. Proposta em até 5 dias úteis se fizer sentido para os dois lados."
  - "Vocês atendem empresas internacionais?" → "Sim. A maior parte das nossas leituras de ecossistema vem de fora do Brasil. Atendemos em português e inglês."
- Schema: FAQPage

**HOME-8 · CTA final**
- Componente: `<FinalCTA />`
- Frase de fechamento em Cormorant, CTA primário, "Respondemos em até dois dias úteis.", "Liberamos o próximo nível."

---

### 5.2 Sobre `/sobre`

**Objetivo:** não é currículo. É credencial viva — duas lentes complementares que juntas constituem o método.

**Schema:** AboutPage, Person (Gabriela), Person (Celso), Organization

#### Blocos

**SOBRE-1 · Header da página** (`<PageHeader />`)

**SOBRE-2 · Por que a PIRA existe**
- Não "quem somos". A situação que tornou a PIRA necessária.
- O momento que Gabriela e Celso identificaram: empresas de serviços perdem o próximo ciclo não por falta de esforço, mas por modelos de trabalho que envelheceram antes que alguém percebesse.
- Frase canônica integrada ao bloco.

**SOBRE-3 · O que Gabriela enxerga que outros não enxergam**
- Não bio. Lente.
- Gabriela lê o que está chegando antes de chegar ao Brasil. Ecossistemas globais, sinais fracos, antecipação como vantagem.
- Por que isso importa: o diagnóstico começa antes da reunião. O contexto que ela traz de fora é parte do método, não credencial decorativa.
- Credenciais: MIT Universal AI Foundational Modules (em andamento, 2026), professora FIAP, mentora FGV Ventures.
- Foto individual. Quote em primeira pessoa em Cormorant Italic.
- LinkedIn: linkedin.com/in/gabrielaaguiarvs/

**SOBRE-4 · O que Celso resolve que outros não sustentam**
- Não bio. Lente.
- Celso entra na operação. Redesenha o que está custando caro demais sem precisar quebrar para consertar.
- Por que isso importa: execução sem execução é só diagnóstico. O método só funciona porque a segunda lente sabe fazer.
- Casos anonimizados integrados como evidência do argumento, não como lista de conquistas.
  - Multinacional do setor de bebidas: margem -64% → +15% em 6 meses, sem aumento de receita.
  - Jurídico: 400h → 36h, R$160 mil/mês de capacidade desbloqueada.
- Credenciais: bacharelando em Direito (Mackenzie), MIT Applied AI Certificate (em andamento, 2026), MBA Insper.
- Foto individual. Quote em primeira pessoa em Cormorant Italic.
- LinkedIn: linkedin.com/in/celsogama/

**SOBRE-5 · Como as duas lentes trabalham juntas**
- Gabriela entra pelo contexto, Celso entra pela operação. O diagnóstico é o cruzamento dos dois.
- Não é divisão de trabalho. É metodologia: você precisa das duas perspectivas para nomear o problema real.
- Foto conjunta (Nós.png).

**SOBRE-6 · O que isso muda para o cliente**
- O que o cliente ganha por trabalhar com quem combina leitura de fora e execução por dentro.
- Sem jargão de consultoria. Uma ou duas frases concretas.
- Transição natural para o CTA.

**SOBRE-7 · Para imprensa, palestras e parcerias**
- Função: atender Persona 7 (Jornalista, autor, palestrante, organizador de evento)
- Componente: `<MediaKit />`
- Conteúdo:
  - "Para entrevistas, palestras, eventos ou parcerias institucionais, escrever para inspira@piralabs.com.br com o contexto."
  - Lista discreta: "Aparições recentes:" + 3-5 últimas (LinkedIn posts virais, podcasts, eventos) — atualizada manualmente
  - Link textual: "Download de bios e fotos em alta resolução" → /press-kit (ou link direto para Google Drive público)
  - LinkedIn dos fundadores
- Schema: mantém AboutPage

**SOBRE-8 · CTA final**
- Componente `<FinalCTA />`

---

### 5.3 Inspira `/inspira`

**Schema:** Service (INSPIRA), FAQPage

#### Blocos
INSPIRA-1 · Header
INSPIRA-2 · O que é o INSPIRA (Gabriela conduz) — incluir quote da Gabriela em Cormorant Italic logo abaixo do bloco principal (voz vazando, Reboot-style). Quote a ser refinada por Gabriela na própria voz, partindo da fórmula "Sou a que enxerga o que vem de fora porque vivi [...]".
INSPIRA-3 · As seis camadas (Sopro, Fôlego, Pulso, Acústica, Pressão, Suspiro — nível de descrição superficial, sem detalhar a arquitetura interna)
INSPIRA-4 · Para quem é (`<TargetProfile />`)
INSPIRA-5 · Subproduto destacado: Oxigênio IA Search
- Posicionamento: "O Oxigênio é o ponto de entrada do INSPIRA. Diagnóstico de presença em IA Search com escopo fechado e preço público."
- Preços: Fast R$3.500 / Full R$5.300
- CTA "Conhecer Oxigênio" → /inspira/oxigenio

INSPIRA-5b · Investimento INSPIRA completo
- "O INSPIRA completo é dimensionado individualmente após a primeira conversa. Cada projeto considera complexidade da operação, profundidade necessária e duração."
- Sem faixa de valor exposta.

INSPIRA-6 · Como começa o primeiro contato
- Componente: `<HowFirstContact />`
- Conteúdo:
  - Passo 1: Você manda mensagem pelo formulário, descrevendo o momento da empresa
  - Passo 2: Em até 2 dias úteis Gabriela e Celso respondem
  - Passo 3: Conversa inicial de 30-45 minutos, sem compromisso, sem proposta na mesa
  - Passo 4: Se fizer sentido para os dois lados, proposta personalizada em até 5 dias úteis
  - "Respondemos em até dois dias úteis."
  - CTA → /contato?origem=inspira
INSPIRA-7 · FAQ (5–7 perguntas, FAQPage schema)
INSPIRA-8 · CTA final

---

### 5.4 Inspira / Oxigênio IA Search `/inspira/oxigenio`

**Objetivo:** converter. Única página comercial-direta com escopo fechado e preço público.

**Schema:** Service + Offer (Fast R$3.500) + Offer (Full R$5.300) + FAQPage

#### Blocos

**OXIGENIO-1 · Header**

**OXIGENIO-2 · Hero da oferta**
- Componente: `<OfferHero />`
- Conteúdo:
  - H1 com nome do produto
  - Subtítulo com a promessa central
  - Bloco visível com:
    - Fast: R$3.500 — espelho de exposição, sessão 45 min
    - Full: R$5.300 — diagnóstico competitivo completo, sessão 60 min
    - Prazo de entrega: "até 5 dias úteis"
  - CTA primário: "Aplicar agora" → âncora para OXIGENIO-10
  - CTA secundário: "Ver como funciona" → âncora para OXIGENIO-4

**OXIGENIO-3 · Para quem é**
- ICP do Oxigênio, setores prioritários, filtro negativo obrigatório:
  - Sem ICP definido
  - Sem presença pública mínima
  - Que busca SEO técnico, mídia paga ou gestão de redes
  - Que espera garantia de citação por IA
  - Que quer score automático
  - Que não pretende agir após o diagnóstico

**OXIGENIO-4 · Vídeo de método (D4)**
- Embed Loom ou YouTube unlisted
- Transcrição em accordion (SEO + acessibilidade)
- Schema: VideoObject

**OXIGENIO-5 · O que está incluído**
- Fast: 5 queries × 4 plataformas × 3 execuções = 60 respostas, relatório 2 páginas, Protocolo de Reprodutibilidade, sessão 45 min
- Full: tudo do Fast + frente competitiva, 200 respostas adicionais, Gap com causa, 3 ações customizadas, âncora financeira 3 cenários, ciclo 60 dias com reexecução, sessão 60 min
- "O Fast mostra o que existe. O Full explica por que existe e quanto custa não mudar."

**OXIGENIO-6 · Como funciona**
- Componente: `<ProcessSteps />`
- 4 passos: aplicação → confirmação 24h → análise → sessão de leitura

**OXIGENIO-7 · Quem conduz**
- Gabriela: leitura institucional
- Celso: governança e exposição operacional
- Foto pequena com link → /sobre

**OXIGENIO-8 · Prova social do método (D1)**
- Bloco "Rodamos o Oxigênio em nós mesmos antes de oferecer"
- Achados reais da auto-aplicação
- Escondido com flag até D1 executado

**OXIGENIO-9 · FAQ (6–8 perguntas, FAQPage schema)**
- Por que não pesquiso por conta própria?
- Como sei que funciona?
- Vocês conhecem meu setor?
- Posso aplicar e desistir?
- O que diferencia Fast de Full?

**OXIGENIO-10 · CTA final + aplicação**
- Componente: `<ApplicationCTA />`
- Formulário de aplicação inline ou link externo
- "Respondemos em até dois dias úteis."

*(Bloco Oxigênio Pulso removido — produto não existe mais)*

---

### 5.5 Transpira `/transpira`

**Schema:** Service (TRANSPIRA), FAQPage

#### Blocos
TRANSPIRA-1 · Header
TRANSPIRA-2 · O que é (Celso conduz, 4 movimentos: Leitura, Construção, Ativação, Calibração) — incluir quote do Celso em Cormorant Italic logo abaixo do bloco principal. Quote a ser refinada por Celso na própria voz, partindo da fórmula "Sou o que redesenha operação porque vi [...]".
TRANSPIRA-3 · O que entregamos (frentes típicas, tecnologia onde amplifica)
TRANSPIRA-4 · Para quem é
- Pré-requisito sinalizado: disposição de redesenhar o próprio papel dentro da operação. Não é condição de venda. É condição de resultado.

TRANSPIRA-4b · Investimento TRANSPIRA
- "O TRANSPIRA é dimensionado pelo escopo e pela configuração. O investimento é definido após a primeira conversa e registrado em contrato antes do início."
- Sem faixa de valor exposta.

**TRANSPIRA-5 · As duas configurações — atualizado v4.0**
- Componente: `<TranspiraConfigurations />`
- Conteúdo:
  - **Configuração A — COO Temporário:** o cliente sabe o que precisa fazer. Não tem quem conduza enquanto mantém a operação rodando. A Pira entra como o executivo que falta internamente. Duração típica: 2 a 3 meses de imersão.
  - **Configuração B — Arquiteto de Delegação:** o recurso interno existe, mas sem estrutura, critério nem autoridade para operar sem os fundadores em cada decisão. A Pira instala o que esse recurso precisa para funcionar com autonomia. Duração típica: 45 a 60 dias de estruturação + acompanhamento.
  - Parâmetros comuns: mínimo de 8 semanas. Dois dias presenciais + pelo menos um dia de acompanhamento remoto por semana. Encerramento por resultado verificado — a Pira não sai quando o prazo acaba. Sai quando os primeiros resultados acordados são verificados.
  - Nota de postura: a capacidade de condução simultânea é deliberadamente limitada. Esse limite é garantia de profundidade, não restrição operacional.

**TRANSPIRA-5b · Como começa o primeiro contato**
- Componente: `<HowFirstContact />` (compartilhado com INSPIRA)
- Conteúdo: mesma estrutura de 4 passos
- "Respondemos em até dois dias úteis."
- CTA → /contato?origem=transpira

TRANSPIRA-6 · FAQ (FAQPage)
TRANSPIRA-7 · CTA final

**TRANSPIRA-7b · INSPIRA + TRANSPIRA (contrato unificado) — novo v4.0**
- Componente: `<UnifiedContract />`
- Posicionamento: para quem já sabe que precisa de diagnóstico e execução — um contrato, uma decisão, sem interrupção entre as fases.
- Conteúdo do bloco:
  - O programa começa no INSPIRA e avança para o TRANSPIRA sem nova rodada de proposta.
  - **Cláusula de pré-condição:** o projeto só começa com reconhecimento explícito — por escrito ou em conversa documentada — de que pode exigir redesenho do papel do fundador na operação. Sem esse reconhecimento, o contrato não é assinado.
  - Duas fases sequenciais: Fase 1 Estrutura Operacional (0–3 meses) e Fase 2 Posicionamento e Mercado (3–12 meses, condicional ao critério verificável da Fase 1).
  - "O TRANSPIRA pode existir sem o INSPIRA quando o cliente já tem diagnóstico claro."
- CTA → /contato?origem=transpira_unificado

---

### 5.6 Transpira / Jurídico `/transpira/juridico`

**Schema:** Service (TRANSPIRA Jurídico, dois modelos), FAQPage

#### Blocos
JURIDICO-1 · Header
JURIDICO-2 · Posicionamento (contexto regulatório, por que vertical específica)
JURIDICO-3 · Caso âncora (400h → 36h, R$160 mil/mês, pós-IA com supervisão humana)
JURIDICO-4 · Dois modelos de entrega:
- Modelo A: implementação junto ao time, 12–20 semanas, operação independente ao final
- Modelo B: assistant as a service por projeto, output sempre sob revisão e assinatura de advogado habilitado. Celso NÃO faz: emitir parecer, definir estratégia de caso, representar cliente, assinar peça.
JURIDICO-5 · Para quem é
JURIDICO-6 · FAQ com aviso de não consultoria jurídica
JURIDICO-7 · CTA final

---

### 5.7 Faísca `/faisca` — reestruturado v4.0

**Objetivo:** apresentar todos os pontos de entrada da Pira para quem não está pronto para INSPIRA ou TRANSPIRA. Cada produto se justifica pelo valor que entrega, independente do que vier depois.

**Schema:** WebPage + ItemList

#### Blocos

**FAISCA-1 · Header da página** (`<PageHeader />`)

**FAISCA-2 · O que é Faísca**
- O instante em que a energia latente vira movimento.
- Produtos de tempo curto, escopo fechado, preço fixo. O cliente experimenta o método e a perspectiva da Pira antes de qualquer compromisso maior.
- Sem copy de funil. Os produtos FAÍSCA se justificam sozinhos.

**FAISCA-3 · Grupo 1 — Entrada comercial padrão**
- Componente: `<FaiscaGroup1 />`
- Três produtos com preço público e escopo fechado:
  - **Imersão em IA** — R$7.100 · Celso conduz · 3 sessões de trabalho com os casos reais do cliente · CTA "Conhecer" → /faisca/imersa-em-ia
  - **Oxigênio IA Search** — Fast R$3.500 / Full R$5.300 · Diagnóstico de presença em IA Search · CTA "Conhecer" → /inspira/oxigenio
  - **Pocket do INSPIRA** — R$3.900 · Gabriela + Celso · Leitura rápida e estruturada antes de decidir o próximo passo · CTA "Conhecer" → /faisca/pocket
- Nota de postura: preço fixo e escopo fechado — o fundador sabe o que compra antes de assinar.

**FAISCA-4 · Grupo 2 — Autoridade e relacionamento**
- Componente: `<FaiscaGroup2 />`
- Dois formatos sem preço público (sob consulta):
  - **Palestras** — Gabriela e/ou Celso. Três trilhas: Negócio e Mercado, Pessoas e Cultura, Trajetória da Gabriela. Presencial ou remoto, 45 a 90 min com Q&A. CTA → /contato?origem=faisca_palestras
  - **Workshops** — Celso conduz. Aplicação prática com os casos reais do cliente. A audiência sai com algo feito, não só com algo aprendido. Presencial, média 4 horas. A partir de R$12.500. CTA → /contato?origem=faisca_workshops

**FAISCA-5 · Grupo 3 — Oferta seletiva**
- Componente: `<FaiscaGroup3 />`
- Dois produtos que não são oferta de prateleira — a Pira responde à demanda, não prospecta ativamente:
  - **C-level as a Service** — Gabriela conduz. Presença ativa no processo de decisão do cliente por período definido. Diferente de mentoria: Gabriela atua como C-level fracionado, não como conselheira externa. Escopo, carga e investimento sob consulta e disponibilidade. CTA → /contato?origem=faisca_clevel
  - **FAÍSCA Jurídica** — Celso conduz. Oficina executiva para escritórios e áreas jurídicas. CTA "Conhecer" → /faisca/juridica

**FAISCA-6 · Publicação Antes, Pira**
- Convite a acompanhar o que a Pira pensa antes de qualquer compromisso comercial
- Sem CTA comercial direto
- Link → /antes-pira

**FAISCA-7 · CTA final**
- Componente: `<FinalCTA />`
- "Não sabe qual produto faz mais sentido agora? A primeira conversa ajuda a nomear."
- CTA → /contato?origem=faisca

---

### 5.8 Antes, Pira `/antes-pira`

**Objetivo:** não é página descritora. É hub editorial. O lugar onde a Pira pensa em público. Funciona como destino próprio, não como ponte para o Substack.

**Schema:** WebPage + Blog + ItemList

#### Blocos

**ADC-1 · Header** — breadcrumb Home > Antes, Pira

**ADC-2 · Tese da publicação**
- 200-300 palavras em formato editorial denso
- Não "sobre a publicação". É "a publicação em si" — abrir com uma tese clara que orienta os textos
- Frase de abertura em Cormorant grande: "Existe um momento em que..."

**ADC-3 · Arquivo por temas**
- Organização editorial dos posts em 4-5 temas recorrentes:
  - Antes da crise (timing como escolha)
  - Julgamento humano antes da ferramenta (IA aplicada à operação)
  - O que vem antes (sinais globais lidos de dentro)
  - Modelo de trabalho que envelheceu (operações de serviços B2B)
  - Casos lidos por dentro (anonimizados, com aprendizado operacional)
- Cada tema com 2-4 posts mais relevantes destacados
- Link "Ver todos os posts deste tema" → filtro no Substack ou agrupamento próprio

**ADC-4 · Posts recentes**
- Lista dos 5 últimos posts (não 3), com prévia de 2-3 linhas
- Lista manual no primeiro deploy, API Substack na fase 2
- Cada item: título em Cormorant, prévia em Grotesk, data, tempo de leitura, link externo para Substack

**ADC-5 · Links cruzados com glossário**
- "Vocabulário da publicação" — bloco discreto com 3-4 links para páginas do /glossario mais citadas nos posts
- Cria autoridade circular: artigo cita termo → termo tem página → página linka para outros artigos

**ADC-6 · CTA**
- Primário: "Ler no Substack" → link externo
- Secundário discreto: "Receber por email" → inscrição direta Substack
- Terciário: "Em breve, em áudio" → link para /podcast

---

### 5.9 FAÍSCA / Jurídica `/faisca/juridica`

**Schema:** Service (FAÍSCA Jurídica), FAQPage

**Aviso obrigatório:** "A PIRA LABS não presta consultoria jurídica."

#### Blocos
FAISCA-JUR-1 · Header
FAISCA-JUR-2 · Problema (uso informal de IA nos escritórios)
FAISCA-JUR-3 · O que é (palestra ou workshop executivo, Celso conduz)
FAISCA-JUR-4 · Formatos (Palestra 60–90 min, Workshop 4h)
FAISCA-JUR-5 · Para quem (sócios, heads jurídicos, professores, coordenadores, DPOs)
FAISCA-JUR-6 · CTA funil: "Conheça o INSPIRA Jurídico" → /inspira/juridico
FAISCA-JUR-7 · FAQ com aviso de não consultoria
FAISCA-JUR-8 · CTA final → /contato?origem=faisca_juridica

---

### 5.10 INSPIRA / Jurídico `/inspira/juridico`

**Schema:** Service (INSPIRA Jurídico, faixa R$12.500–R$26.000), FAQPage

**Aviso obrigatório:** mesmo do FAÍSCA Jurídica.

#### Blocos
INSPIRA-JUR-1 · Header
INSPIRA-JUR-2 · Problema
INSPIRA-JUR-3 · O que é (diagnóstico 2–3 semanas, lente jurídica)
INSPIRA-JUR-4 · 5 entregas: mapeamento de uso, matriz de risco, política mínima, plano de ação, sessão de leitura
INSPIRA-JUR-5 · Para quem
INSPIRA-JUR-6 · Quem conduz (Gabriela leitura institucional + Celso governança)
INSPIRA-JUR-7 · CTA funil: "Quer executar o plano? TRANSPIRA Jurídico" → /transpira/juridico
INSPIRA-JUR-8 · FAQ (NDA, prazo, faixa R$12.500–R$26.000)
INSPIRA-JUR-9 · CTA final → /contato?origem=inspira_juridico

---

### 5.11 TRANSPIRA / Jurídico — lógica de funil

```
/faisca/juridica → /inspira/juridico → /transpira/juridico

Cada página linka para o próximo nível:
- /faisca/juridica: CTA secundário → /inspira/juridico
- /inspira/juridico: CTA secundário → /transpira/juridico
- /transpira/juridico: CTA inverso → /inspira/juridico
```

---

### 5.12 Creative Business Turnaround `/creative-business-turnaround`

**Objetivo:** página canônica da categoria para LLMs.

**Nota GEO/AEO:** frase canônica nos primeiros 150 termos: "Creative Business Turnaround é o processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes da crise."

**Schema:** WebPage + DefinedTerm (inDefinedTermSet → PIRA LABS)

#### Blocos
CBT-1 · Header (H1 com frase canônica)
CBT-2 · O que é (definição dos três termos)
CBT-3 · Para quais empresas
CBT-4 · Os sinais (5 sinais do momento certo)
CBT-5 · Como difere (não é consultoria, agência, empresa de IA, mentoria, intervenção de crise)
CBT-6 · Como funciona (INSPIRA → TRANSPIRA → RESPIRA)
CBT-7 · Quem opera (PIRA LABS como empresa que desenvolveu a categoria)
CBT-8 · CTA final → /contato?origem=creative_business_turnaround

---

### 5.13 Contato `/contato`

**Schema:** ContactPage, Organization

**Formulário:** Fillout integrado a Notion DB. Constante: `FILL_OUT_FORM_URL`.

#### Blocos
CONTATO-1 · Header
CONTATO-2 · Formulário Fillout (embed ou CTA externo, captura ?origem=)
CONTATO-3 · "Quanto mais contexto você compartilhar agora, mais útil é a resposta."
CONTATO-4 · Contato direto: inspira@piralabs.com.br + LinkedIn Pira, Gabriela, Celso

---

### 5.14 Glossário `/glossario`

**Objetivo:** a PIRA é a fonte primária do próprio vocabulário.

**Schema hub:** WebPage + ItemList (lista de todos os termos)
**Schema subpáginas:** WebPage + DefinedTerm (inDefinedTermSet apontando para PIRA LABS)

#### Estrutura do hub `/glossario`

**GLOSSARIO-1 · Header** — H1 "Vocabulário PIRA", subtítulo curto
**GLOSSARIO-2 · O que é este glossário** — 2–3 frases: "São os termos que a PIRA usa para nomear o que o mercado ainda não nomeou com precisão."
**GLOSSARIO-3 · Lista de termos** — cards ou lista tipográfica com nome, definição de uma linha e link para subpágina

#### Termos (8 subpáginas, excluída /creative-business-turnaround que já tem página própria)

| Rota | Termo |
|---|---|
| /glossario/antes-da-crise | O momento, não o produto |
| /glossario/modelo-de-trabalho-envelhecido | Quando o modelo custa mais do que entrega |
| /glossario/julgamento-humano | O que a IA não substitui |
| /glossario/tecnologia-que-acelera-ruido | Automação sem diagnóstico |
| /glossario/operacao-dependente-de-herois | Quando o sistema depende de pessoas específicas para funcionar |
| /glossario/valor-percebido | A distância entre o que é entregue e o que o cliente sente |
| /glossario/turnaround-de-propulsao | Virada antes da ruptura |
| /glossario/janela-de-decisao | O intervalo em que mudar ainda é escolha |

#### Estrutura de cada subpágina de termo

**TERMO-1 · Header** — H1 com o nome do termo
**TERMO-2 · Definição** — 3–5 frases precisas. Sem jargão. Termina com uma frase sobre quando esse problema aparece.
**TERMO-3 · Por que isso importa agora** — 2–3 frases sobre contexto atual (IA, pressão de margem, envelhecimento de modelo).
**TERMO-4 · Termos relacionados** — links internos para outros termos do glossário e para /creative-business-turnaround.
**TERMO-5 · CTA contextual** — "Esse é um dos padrões que o INSPIRA identifica." → link para /inspira ou produto relevante.

**Regra editorial:** cada subpágina tem entre 200 e 400 palavras.

**Regra de vocabulário:** Camada 1 e Camada 2 apenas. Nenhum termo da Camada 3 (Sopro, Fôlego, Pulso etc.) entra no glossário público.

---

### 5.15 Páginas de Problema `/[problema]`

**Schema:** WebPage + FAQPage (3 perguntas) + link para produto relevante

#### As 4 páginas

**`/empresa-cresce-margem-some`**
- H1: "Sua empresa cresce. A margem some. O que está acontecendo?"
- CTA: "O INSPIRA identifica onde a margem está vazando." → /inspira

**`/fundador-virou-gargalo`**
- H1: "O fundador virou gargalo. E sabe disso. E não consegue sair."
- CTA: → /inspira

**`/ia-acelerou-o-ruido`**
- H1: "A empresa implementou IA. O ruído aumentou."
- CTA: "Diagnosticar antes de implementar." → /inspira e /inspira/oxigenio

**`/cliente-nao-percebe-o-valor`**
- H1: "O trabalho é bom. O cliente não percebe. A conta não fecha."
- CTA: → /inspira

#### Regras das páginas de problema

- Entre 300 e 500 palavras por página
- Tom: diagnóstico preciso, não alarmista
- Nenhuma solução prometida sem evidência. Só diagnóstico nomeado.
- FAQPage com 3 perguntas do padrão específico
- Link interno para /creative-business-turnaround e para o produto mais relevante
- Não entram no menu principal — acessíveis por links contextuais, busca orgânica e Substack

---

### 5.16 Respirando `/respirando`

**Objetivo:** mostrar negócios que alcançaram (ou estão alcançando) o RESPIRA. Cases anonimizados em formato editorial.

**Subtítulo da página:** "Negócios em movimento — onde o próximo nível deixou de ser conceito."

**Schema:** WebPage + ItemList (lista de cases)

#### Blocos

**RESPIRANDO-1 · Header** — H1 "Respirando", subtítulo institucional

**RESPIRANDO-2 · O que esta página é**
- O RESPIRA não é entregue. É alcançado.
- Cases anonimizados até autorização explícita.

**RESPIRANDO-3 · Cases em formato editorial**
- Componente: `<EditorialCases />`
- Cada case: contexto inicial, intervenção, decisão crítica, resultado verificável, limite do caso
- Lista inicial:
  - Multinacional do setor de bebidas: margem -64% → +15% em 6 meses, sem aumento de receita
  - Grande marca de tecnologia (Jogos 2016): R$16M → R$163M em 24 meses
  - Escritório jurídico: 400h → 36h mensais, R$160 mil/mês de capacidade desbloqueada
  - (mais cases entram conforme são autorizados)

**RESPIRANDO-4 · Comunidade de referência (placeholder)**
- Quando clientes autorizarem aparição: máximo 5 logos, layout sutil
- Estado atual: placeholder com texto explicativo

**RESPIRANDO-5 · CTA contextual**
- "Quer entender se o seu momento é o momento da Pira?" → /contato?origem=respirando

---

### 5.17 Como pensamos `/como-pensamos`

**Schema:** WebPage + ItemList

#### Blocos

**COMOPENSAMOS-1 · Header** — H1 "Como pensamos", subtítulo

**COMOPENSAMOS-2 · Tese central**
- "A Pira não inventou tudo o que pensa. Inventou a combinação."

**COMOPENSAMOS-3 · Referências estruturantes**
- 4-6 entradas: nome + descrição + o que a Pira tomou + link externo
  - House of Beautiful Business (Tim Leberecht)
  - Reboot (Jerry Colonna)
  - Farnam Street (Shane Parrish)
  - Sequoia Capital (papers de 2026 sobre IA)

**COMOPENSAMOS-4 · Autores e textos que voltam**
- Lista textual curada. Atualizada manualmente.

**COMOPENSAMOS-5 · O que NÃO pegamos emprestado**
- Consultoria tradicional (vendida por hora)
- Mentoria sem método
- IA como produto mágico
- Crescimento sem operação

**COMOPENSAMOS-6 · CTA contextual**
- "Quer continuar a conversa? Comece pelo Substack." → link para /antes-pira

---

### 5.18 Podcast `/podcast` (placeholder)

**Schema:** WebPage

#### Blocos

**PODCAST-1 · Header** — H1 "Antes, Pira (em produção)"

**PODCAST-2 · O que será**
- Episódios solo de 15 a 25 minutos com Gabriela e Celso.
- Transcrição publicada no site para AEO. Videocast no YouTube. Clips no LinkedIn.

**PODCAST-3 · Inscreva-se para o lançamento**
- Email simples (Fillout ou Substack). Sem promessa de data fixa.

**PODCAST-4 · Enquanto isso**
- Link para o Substack ("Antes, Pira" texto)
- Link para LinkedIn Gabriela, LinkedIn Celso

---

### 5.19 Site em Inglês (mínimo viável)

**Escopo do EN no lançamento (Opção B):**

| Rota PT | Rota EN | Estado |
|---|---|---|
| / | /en | Tradução completa |
| /sobre | /en/about | Tradução completa |
| /creative-business-turnaround | /en/creative-business-turnaround | Tradução completa |
| /contato | /en/contact | Tradução completa |

**Não traduzidas no lançamento:** INSPIRA, TRANSPIRA, FAÍSCA (e subpáginas), Oxigênio, Antes Pira, Glossário, páginas de problema, Respirando, Como pensamos. Entram em fase posterior.

**Implementação:**
- Estrutura `app/[locale]/page.tsx` com locale enum: 'pt-BR', 'en'
- `hreflang` em todas as páginas com versão equivalente declarada
- `<html lang="en">` na versão inglesa
- Toggle de idioma no header desktop — discreto, texto "PT / EN"
- No mobile: dentro do menu expandido
- Estado salvo em cookie `pira_lang`
- Substack permanece PT-BR

**Frase canônica EN:** "Where businesses find propulsion to new heights."

**Tradução:** Gabriela e Celso revisam todas as traduções. Não usar tradutor automático para copy final.

---

### 5.20 FAÍSCA / Imersão em IA `/faisca/imersa-em-ia` — novo v4.0

**Objetivo:** converter prospects para o produto de entrada mais completo do Grupo 1. Escopo fechado, preço público, resultado tangível ao final.

**Schema:** Service + Offer (R$7.100) + FAQPage

#### Blocos

**IMERSA-1 · Header** (`<PageHeader />`)

**IMERSA-2 · Hero da oferta**
- Componente: `<OfferHero />`
- H1 com nome do produto
- Subtítulo: não é curso. É sessão de trabalho a quatro mãos com os casos reais do cliente.
- Preço em destaque: R$7.100
- Celso conduz
- CTA primário: "Respire" → âncora para IMERSA-7

**IMERSA-3 · Estrutura das 3 sessões**
- Componente: `<ProcessSteps />`
- Sessão 1 (2h): cultura e adaptação. O que está funcionando no setor, o que não funciona. Exploração de ChatGPT, Claude, Gemini e Perplexity com foco nos processos do cliente.
- Sessão 2 (2h): execução de processos. Prompts de base para os casos do dia a dia, cover letters, checklists, automações de comunicação. Trabalho com casos reais enviados pelo cliente com pelo menos três dias de antecedência.
- Sessão 3 (1,5h): dúvidas, ajustes e próximos passos de implementação.
- Total: 5,5 horas de trabalho direto com o negócio do cliente.

**IMERSA-4 · Para quem é**
- Componente: `<TargetProfile />`
- Fundador ou equipe que precisa implementar IA com critério nos processos reais — não aprender teoria.
- Filtro negativo: não substitui o TRANSPIRA. Saber usar IA não resolve gargalo de delegação, não documenta processos e não instala critério de decisão.

**IMERSA-5 · Quem conduz**
- Celso Gama. Foto pequena com link → /sobre.
- Referência ao que ele traz: 25 anos operando processos complexos + MIT Applied AI Certificate (em andamento, 2026).

**IMERSA-6 · FAQ (4–6 perguntas, FAQPage schema)**
- O que preciso preparar antes das sessões?
- Precisa ser presencial?
- Quantas pessoas podem participar?
- O que entrego depois da terceira sessão?
- Isso substitui o TRANSPIRA?

**IMERSA-7 · CTA final + contato**
- Componente: `<FinalCTA />`
- "Respondemos em até dois dias úteis."
- CTA → /contato?origem=faisca_imersa

---

### 5.21 FAÍSCA / Pocket do INSPIRA `/faisca/pocket` — novo v4.0

**Objetivo:** converter prospects que querem uma leitura inicial antes de comprometer tempo com o INSPIRA completo, ou que têm uma questão específica e precisam de diagnóstico rápido com metodologia.

**Schema:** Service + Offer (R$3.900) + FAQPage

#### Blocos

**POCKET-1 · Header** (`<PageHeader />`)

**POCKET-2 · Hero da oferta**
- Componente: `<OfferHero />`
- H1 com nome do produto
- Subtítulo: diagnóstico rápido e estruturado antes de decidir o próximo passo.
- Preço em destaque: R$3.900
- Gabriela conduz a sessão. Celso opera os agentes.
- Formato: 1,5h online
- CTA primário: "Respire" → âncora para POCKET-6

**POCKET-3 · O que acontece na sessão**
- Componente: `<ProcessSteps />`
- Três formulários rodados em sessão: mercado, financeiro e Oxigênio.
- Entrega ao final: síntese com leitura integrada e os próximos passos prioritários.
- Nota de postura: é uma leitura inicial com metodologia. Não substitui o INSPIRA completo — que roda seis camadas em 4 a 6 semanas.

**POCKET-4 · Para quem é**
- Componente: `<TargetProfile />`
- Fundador que quer uma primeira leitura antes de comprometer tempo com o INSPIRA completo.
- Fundador com uma questão específica que precisa de diagnóstico rápido com critério metodológico.
- Filtro: se o problema for amplo e a empresa precisar de redesenho estrutural, o INSPIRA completo é o caminho.

**POCKET-5 · Quem conduz**
- Gabriela Aguiar conduz e faz a leitura. Celso Gama opera os agentes em tempo real.
- Foto pequena com link → /sobre.

**POCKET-6 · CTA final + contato**
- Componente: `<FinalCTA />`
- "Respondemos em até dois dias úteis."
- CTA → /contato?origem=faisca_pocket

---

## 6. COMPONENTES COMPARTILHADOS

| Componente | Usado em |
|---|---|
| `<Header />` | Todas |
| `<Footer />` | Todas |
| `<PageHeader />` | Todas exceto Home |
| `<FAQ />` | INSPIRA, OXIGENIO, TRANSPIRA, verticais jurídicas, IMERSA, POCKET |
| `<TargetProfile />` | INSPIRA, OXIGENIO, TRANSPIRA, IMERSA, POCKET |
| `<FinalCTA />` | Home, INSPIRA, TRANSPIRA, FAÍSCA, SOBRE, IMERSA, POCKET |
| `<ProcessSteps />` | OXIGENIO, INSPIRA, TRANSPIRA, IMERSA, POCKET |
| `<FounderProfile />` | SOBRE |
| `<HowFirstContact />` | INSPIRA, TRANSPIRA |
| `<TranspiraConfigurations />` | TRANSPIRA |
| `<UnifiedContract />` | TRANSPIRA |
| `<FaiscaGroup1 />` | FAÍSCA |
| `<FaiscaGroup2 />` | FAÍSCA |
| `<FaiscaGroup3 />` | FAÍSCA |
| `<OfferHero />` | OXIGENIO, IMERSA, POCKET |
| `<CTAWithMicrocopy />` | Todos os CTAs de página (não header/footer) |

---

## 7. SCHEMAS JSON-LD POR PÁGINA

### 7.1 Schema global (todas as páginas)

- `Organization` com `@id: "https://piralabs.com.br/#organization"` + `LocalBusiness`
- `WebSite` com `@id: "https://piralabs.com.br/#website"`
- `BreadcrumbList` específico da página

### 7.2 Schemas adicionais por página

| Página | Schemas adicionais |
|---|---|
| / | WebPage, FAQPage |
| /sobre | AboutPage, Person (Gabriela), Person (Celso), ProfilePage |
| /inspira | Service, FAQPage |
| /inspira/oxigenio | Service, Offer (Fast R$3.500), Offer (Full R$5.300), VideoObject (D4), FAQPage |
| /transpira | Service, FAQPage |
| /transpira/juridico | Service (dois modelos), FAQPage |
| /faisca | WebPage, ItemList |
| /faisca/juridica | Service, FAQPage |
| /faisca/imersa-em-ia | Service, Offer (R$7.100), FAQPage |
| /faisca/pocket | Service, Offer (R$3.900), FAQPage |
| /inspira/juridico | Service (R$12.500–R$26.000), FAQPage |
| /antes-pira | Blog + ItemList (arquivo por temas) + WebPage |
| /creative-business-turnaround | WebPage, DefinedTerm, FAQPage |
| /contato | ContactPage |
| /politica-privacidade, /termos, /cookies | WebPage |
| /glossario | WebPage + ItemList |
| /glossario/[termo] | WebPage + DefinedTerm (inDefinedTermSet: PIRA LABS) |
| /empresa-cresce-margem-some, /fundador-virou-gargalo, /ia-acelerou-o-ruido, /cliente-nao-percebe-o-valor | WebPage + FAQPage |
| /respirando | WebPage + ItemList (cases) |
| /como-pensamos | WebPage + ItemList (referências) |
| /podcast | WebPage com noindex no Deploy A |
| /en, /en/about, /en/creative-business-turnaround, /en/contact | Mesmas das PT equivalentes + hreflang declarado |

### 7.3 Schema Person (em /sobre)

**Gabriela Aguiar:**
```json
{
  "@type": "Person",
  "@id": "https://piralabs.com.br/sobre#gabriela",
  "name": "Gabriela Aguiar",
  "jobTitle": "CEO e Cofundadora",
  "worksFor": { "@id": "https://piralabs.com.br/#organization" },
  "sameAs": [
    "https://www.linkedin.com/in/gabrielaaguiarvs/",
    "https://www.wikidata.org/wiki/Q138846653",
    "https://www.crunchbase.com/person/gabriela-aguiar-a12a"
  ],
  "educationalCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certificate",
      "name": "Universal AI Foundational Modules",
      "recognizedBy": { "@type": "Organization", "name": "MIT" }
    }
  ],
  "knowsAbout": [
    "Creative Business Turnaround",
    "diagnóstico empresarial",
    "ecossistemas de inovação",
    "IA aplicada à operação",
    "antecipação estratégica",
    "empresas de serviços B2B"
  ]
}
```

**Celso Gama:**
```json
{
  "@type": "Person",
  "@id": "https://piralabs.com.br/sobre#celso",
  "name": "Celso Gama",
  "jobTitle": "COO e Cofundador",
  "worksFor": { "@id": "https://piralabs.com.br/#organization" },
  "sameAs": [
    "https://www.linkedin.com/in/celsogama/",
    "https://www.wikidata.org/wiki/Q138846692",
    "https://www.crunchbase.com/person/celso-gama"
  ],
  "educationalCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certificate",
      "name": "Applied AI Certificate Program",
      "recognizedBy": { "@type": "Organization", "name": "MIT" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "MBA",
      "name": "MBA",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "Insper" }
    }
  ],
  "knowsAbout": [
    "execução operacional",
    "redesenho de processos",
    "legal ops com IA",
    "governança de uso de IA",
    "Creative Business Turnaround",
    "empresas de serviços B2B"
  ]
}
```

### 7.4 knowsAbout da Organization

```
Creative Business Turnaround, empresas de serviços, empresas de serviços de alto valor,
diagnóstico empresarial, redesenho operacional, execução junto à operação,
modelo de trabalho envelhecido, valor percebido, tecnologia que acelera ruído,
governança como capacidade competitiva, operação dependente de heróis,
IA aplicada à operação, Venture Capital mindset, execução mão na massa,
Turnaround de Propulsão, Antes, Pira, INSPIRA, TRANSPIRA,
RESPIRA, Oxigênio IA Search, INSPIRA Jurídico, TRANSPIRA Jurídico,
FAÍSCA Jurídica, Imersão em IA, Pocket do INSPIRA,
governança de uso de IA no setor jurídico,
legal ops com supervisão humana.
```

### 7.5 LocalBusiness

```json
{
  "@type": "LocalBusiness",
  "@id": "https://piralabs.com.br/#localbusiness",
  "name": "PIRA LABS",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "areaServed": [
    { "@type": "Country", "name": "Brasil" },
    { "@type": "Place", "name": "América Latina" }
  ],
  "availableLanguage": ["Portuguese", "English"],
  "priceRange": "$$$$",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "inspira@piralabs.com.br",
    "contactType": "sales",
    "availableLanguage": ["Portuguese", "English"]
  }
}
```

---

## 8. FLUXO DE CONVERSÃO — OXIGÊNIO

### 8.1 Origens de tráfego

| Origem | Veículo | UTM |
|---|---|---|
| LinkedIn PIRA | Post página | utm_source=linkedin&utm_medium=organic&utm_campaign=oxigenio&utm_content=pira-[N] |
| LinkedIn Gabriela | Post pessoal | ...utm_content=gabi-[N] |
| LinkedIn Celso | Post pessoal | ...utm_content=celso-[N] |
| DM direta | Mensagem | utm_source=dm&utm_medium=direct |
| Substack Antes, Pira | Newsletter | utm_source=substack&utm_medium=newsletter |

Redirect /oxigenio → /inspira/oxigenio preserva query strings.

### 8.2 Fluxo do prospect

```
/inspira/oxigenio
  ↓
Hero (Fast R$3.500 / Full R$5.300)
  ↓
Aplica direto → OXIGENIO-10
    OU
Lê mais → vídeo D4, escopo, processo, prova D1, FAQ → OXIGENIO-10
  ↓
Formulário → email de confirmação em até 24h → onboarding
```

---

## 9. PLANO DE IMPLEMENTAÇÃO

**Estratégia: deploy faseado técnico, não temporal.**

A separação é técnica: schema base + páginas comerciais antes; páginas editoriais e satélites depois. Se algo quebrar em schema, redirect ou hreflang, é melhor descobrir com menos rotas no ar.

---

### DEPLOY A — Base institucional e comercial

**Páginas PT (14 rotas — atualizado v4.0):**
- / (Home)
- /sobre
- /inspira
- /inspira/oxigenio
- /inspira/juridico
- /transpira
- /transpira/juridico
- /faisca
- /faisca/juridica
- /faisca/imersa-em-ia *(novo v4.0)*
- /faisca/pocket *(novo v4.0)*
- /antes-pira (com estrutura de hub editorial, posts manuais)
- /creative-business-turnaround
- /contato

**EN mínimo viável (4 rotas):**
- /en (Home)
- /en/about
- /en/creative-business-turnaround
- /en/contact

**Páginas técnicas:**
- /404 (noindex)
- /politica-privacidade, /termos, /cookies

**Fases internas do Deploy A:**

#### Fase A1 — Estrutura base
- [ ] Setup, Tailwind, tokens, componentes compartilhados
- [ ] CTA com microcopy (`<CTAWithMicrocopy />`)
- [ ] Sistema de motion (Seção 2.2)
- [ ] Sistema de whitespace (Seção 2.3)
- [ ] Estrutura i18n com `app/[locale]/page.tsx`
- [ ] Novos componentes: `<TranspiraConfigurations />`, `<UnifiedContract />`, `<FaiscaGroup1 />`, `<FaiscaGroup2 />`, `<FaiscaGroup3 />`
- Critério: build local rodando

#### Fase A2 — Páginas PT essenciais (14 rotas)
- [ ] Todas as 14 rotas listadas renderizando com copy
- [ ] FAQ na home (HOME-7) — com preços de Imersão em IA e Pocket do INSPIRA atualizados
- [ ] Bloco "Como começa" em INSPIRA, TRANSPIRA, Oxigênio
- [ ] Bloco "Para imprensa e palestras" em /sobre
- [ ] /antes-pira como hub editorial com tese, arquivo por temas, posts manuais
- [ ] /faisca com os 3 grupos do catálogo v14 completo
- [ ] /transpira com blocos de Configurações A/B e contrato unificado
- [ ] /faisca/imersa-em-ia completa
- [ ] /faisca/pocket completa
- Critério: navegação completa, copy validada

#### Fase A3 — EN mínimo viável (4 rotas)
- [ ] /en, /en/about, /en/creative-business-turnaround, /en/contact traduzidas
- [ ] hreflang em todas as 8 páginas (4 PT essenciais + 4 EN)
- [ ] Toggle de idioma no header
- [ ] Cookie pira_lang
- Critério: visitante internacional pode iniciar conversa em EN

#### Fase A4 — Schemas e GEO/AEO base
- [ ] Schemas JSON-LD em todas as páginas A (incluindo /faisca/imersa-em-ia e /faisca/pocket)
- [ ] Person com educationalCredential
- [ ] Service com Offer para Oxigênio (Fast R$3.500, Full R$5.300), Imersão em IA (R$7.100) e Pocket do INSPIRA (R$3.900)
- [ ] DefinedTerm em /creative-business-turnaround
- [ ] FAQPage em todas as páginas com FAQ
- [ ] sitemap.xml dinâmico com todas as rotas indexáveis da Seção 3.1
- [ ] robots.txt com 21 crawlers de IA
- [ ] llms.txt e llms-full.txt com seções PT e EN — incluir novos produtos
- [ ] /.well-known/ai-agents.json declarando availableLanguage PT-BR e EN
- [ ] Redirects 301 incluindo /antes-da-crise → /antes-pira, /imersa → /faisca/imersa-em-ia, /pocket → /faisca/pocket
- Critério: schemas validam, redirects testados, GSC verificado

#### Fase A5 — Acessibilidade, segurança e deploy
- [ ] Lighthouse: Performance ≥90, Accessibility ≥95, SEO ≥95, Best Practices ≥90
- [ ] Headers de segurança (CSP, HSTS, X-Frame, Referrer-Policy, Permissions-Policy)
- [ ] Banner cookies LGPD funcional
- [ ] Teste manual com leitor de tela em home, /contato, /inspira/oxigenio
- [ ] Deploy na Vercel
- [ ] GSC e Bing Webmaster verificados
- Critério Deploy A: todas as rotas previstas no ar, schemas validando, redirects testados, GSC verificado, Lighthouse atingindo metas, navegação completa em PT e EN mínimo viável.

**Teste do Deploy A:**
- Navegar 3 minutos como Persona 4 (novato): entende o que a Pira faz? Sabe qual primeiro passo?
- Navegar como Persona 1 (crítico): encontra fricção? Encontra opacidade injustificada?
- Validar GSC: indexação iniciada em 7-14 dias
- Diagnóstico de citabilidade em 30 dias: rodar Oxigênio (auto-aplicação) com queries do CBT em 4 LLMs (ChatGPT, Claude, Gemini, Perplexity). Comparar presença antes/depois do deploy. Não promete citação. Mede variação.

Antes do Deploy B começar, ajustar qualquer problema identificado no Deploy A.

---

### DEPLOY B — Camada editorial e satélite

**Páginas:**
- /respirando (cases editoriais)
- /como-pensamos (referências intelectuais)
- /podcast (com noindex — flag para index quando primeiro episódio publicar)
- /glossario + 8 subpáginas de termos
- 4 páginas de problema (/empresa-cresce-margem-some, /fundador-virou-gargalo, /ia-acelerou-o-ruido, /cliente-nao-percebe-o-valor)

#### Fase B1 — Páginas editoriais (3 rotas)
- [ ] /respirando com cases editoriais (3 cases iniciais aprovados)
- [ ] /como-pensamos com referências intelectuais (HBB, Reboot, FS, Sequoia, autores)
- [ ] /podcast com noindex, formulário de inscrição
- [ ] Schemas atualizados
- Critério: páginas indexáveis (exceto /podcast), navegáveis a partir do menu e do footer

#### Fase B2 — Glossário e páginas de problema (13 rotas)
- [ ] /glossario hub + 8 subpáginas de termos
- [ ] 4 páginas de problema
- [ ] DefinedTerm schemas em todas as subpáginas do glossário
- [ ] FAQPage schemas nas páginas de problema
- [ ] Links internos cruzados entre glossário, páginas de problema e serviços
- [ ] Rotas adicionadas ao sitemap.xml
- Critério: todas as páginas indexáveis, schemas validando, links internos funcionando

#### Fase B3 — Validação Deploy B
- [ ] Re-test Lighthouse e acessibilidade
- [ ] Re-test redirects
- [ ] Verificar que páginas editoriais não quebraram navegação base
- Critério Deploy B: todas as rotas previstas na Seção 3.1 publicadas conforme status de indexação definido, sitemap atualizado, schemas validando, links internos funcionando.

**Teste do Deploy B:**
- Glossário capturando busca por termos proprietários
- /respirando como peça compartilhável em LinkedIn e DM
- /como-pensamos sendo enviado para jornalistas, palestrantes, parceiros

---

### Coordenação com adendo Estratégia Bilíngue

O Deploy A inclui as 4 páginas EN mínimas. A camada bilíngue completa (Wikidata bilíngue, ai-agents.json EN, llms.txt EN) também entra no Deploy A — Fase A4.

O que NÃO entra no Deploy A nem B:
- Versões EN de páginas além das 4 mínimas (fase posterior)
- Posts EN no Medium ficam no projeto Conteúdo Editorial
- Tradução do Substack (não acontece — Substack permanece PT-BR)


## 10. DEPENDÊNCIAS EXTERNAS

| Item | Estado |
|---|---|
| Copy home v2.1 | Entregue — conferir contra v4.0 e v14 antes de usar |
| Copy páginas internas v4.3 | Entregue — conferir contra v4.0 e v14 antes de usar |
| Copy /faisca/imersa-em-ia | Pendente — baseado na Seção 8 do v14 |
| Copy /faisca/pocket | Pendente — baseado na Seção 8 do v14 |
| URL do Fillout | Celso configura |
| Notion DB | Celso configura |
| Vídeo de método D4 | Gabriela grava (flag false até chegar) |
| Auto-aplicação D1 | Celso executa (flag false até concluído) |
| Identidade visual KZ | Após assets: substituir tokens, fotos, og-image |
| Foto Nós.png | Disponível |
| Bios aprovadas | Disponíveis |
| Wikidata Q138846707, Q138846653, Q138846692 | Disponíveis |

---

## 11. CHECKLIST DE VERIFICAÇÃO PRÉ-DEPLOY

**Conteúdo:**
- [ ] Frase canônica nos primeiros 150 termos da home
- [ ] Nenhum travessão em qualquer página
- [ ] Nenhuma palavra do vocabulário proibido
- [ ] PIRA LABS sempre em caixa alta
- [ ] "Respondemos em até dois dias úteis." nas páginas com CTA
- [ ] CTA global: "Respire" em header e páginas (não "Falar com a PIRA")
- [ ] CTAs de página usam `<CTAWithMicrocopy />` com microcopy contextual abaixo
- [ ] Header e footer usam botão "Respire" simples (sem microcopy)
- [ ] /podcast com meta robots noindex (Deploy A) — flag para mudar quando primeiro episódio publicar
- [ ] /en/about e /en/contact (não /en/sobre nem /en/contato)
- [ ] hreflang declarado em todas as 8 páginas (4 PT essenciais + 4 EN)
- [ ] Toggle de idioma funcional no header
- [ ] Adendo bilíngue lido e implementado em llms.txt e ai-agents.json
- [ ] Diageo não nomeada
- [ ] Samsung não nomeada
- [ ] MIT sempre com nome do programa
- [ ] Celso: "bacharelando em Direito (Mackenzie)"
- [ ] Gabriela: Universal AI Foundational Modules, sem ITA
- [ ] Pricing: Fast R$3.500 / Full R$5.300 em Oxigênio; R$7.100 em Imersão em IA; R$3.900 em Pocket do INSPIRA; em todas as páginas e schemas correspondentes
- [ ] Substack referenciado como "Antes, Pira"
- [ ] URL /antes-pira no sitemap e llms.txt (não /antes-da-crise)
- [ ] "Mentorias" não aparece em nenhuma página como produto (produto descontinuado)
- [ ] Configurações A e B do TRANSPIRA nomeadas corretamente: "COO Temporário" e "Arquiteto de Delegação"
- [ ] Contrato unificado INSPIRA+TRANSPIRA com cláusula de pré-condição visível no bloco

**Técnico:**
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse SEO ≥ 95
- [ ] Lighthouse Best Practices ≥ 90
- [ ] Schemas validando em validator.schema.org
- [ ] Sitemap acessível e válido com /antes-pira, /faisca/imersa-em-ia, /faisca/pocket
- [ ] Todos os redirects 301 testados incluindo /antes-da-crise → /antes-pira, /imersa → /faisca/imersa-em-ia, /pocket → /faisca/pocket
- [ ] FILL_OUT_FORM_URL populada
- [ ] Notion DB recebendo leads de teste
- [ ] HTTPS forçado, HSTS ativo

**Motion e design:**
- [ ] Entrances de seção funcionando
- [ ] Count-up no HOME-4 funcionando
- [ ] prefers-reduced-motion desabilitando transforms
- [ ] Header sticky com backdrop blur funcionando
- [ ] Whitespace entre seções: 120px desktop / 80px mobile

---

## 12. NOTAS PARA A IA EXECUTORA

1. **Antes de codificar, leia:** `PiraLabs_Documento_Mestre_v14.md` (não v13 — o v14 é o documento ativo), `adendo-v13-estrategia-bilingue.md`, `my-rules.md`, este wireframe e os arquivos de copy. Em caso de conflito entre arquivos, o v14 prevalece. Comunicar ao Celso antes de resolver por conta própria.

2. **Não invente conteúdo.** Copy pendente → `<!-- COPY PENDENTE: [bloco-id] -->`.

3. **Componentes compartilhados primeiro.** Header, Footer, PageHeader, FinalCTA, FAQ antes das páginas.

4. **Schemas no final, não pular.** Schemas validam a estrutura.

5. **Mobile-first.** Maior parte do tráfego vem de LinkedIn em celular.

6. **Performance, acessibilidade, SEO e boas práticas são critérios de pronto.** Usar as metas do checklist técnico: Performance ≥90, Accessibility ≥95, SEO ≥95, Best Practices ≥90. Se qualquer eixo ficar abaixo da meta correspondente, otimizar antes de seguir.

7. **Em caso de dúvida sobre regra de conteúdo:** consultar `PiraLabs_Documento_Mestre_v14.md`. Perguntar ao Celso antes de inferir.

8. **Motion:** implementar o sistema da Seção 2.2 por completo. Não improvisa animações.

9. **Whitespace:** aplicar o sistema da Seção 2.3 consistentemente. Não usa valores ad hoc.

10. **CTA:** sempre usar `<CTAWithMicrocopy />` (Seção 4.5) em CTAs de página. Header e footer usam `<CTA />` sem microcopy.

11. **Bilíngue:** páginas /en/* referenciam Medium @piralabs para conteúdo editorial em EN, e Substack "Antes, Pira" para conteúdo em PT. Toggle de idioma persiste em cookie `pira_lang`. Vocabulário proprietário (INSPIRA, TRANSPIRA, FAÍSCA, RESPIRA, Oxigênio, "Antes, Pira") não traduz.

12. **Produto "Mentorias" não existe mais.** Qualquer referência a "mentorias" como produto em copy ou componente precisa ser removida. O produto descontinuado não foi substituído por um equivalente direto.

13. **Novos componentes necessários (v4.0):** `<TranspiraConfigurations />`, `<UnifiedContract />`, `<FaiscaGroup1 />`, `<FaiscaGroup2 />`, `<FaiscaGroup3 />`. Não reutilizar estrutura de outros produtos sem checar a especificação de bloco neste documento.

---

*Wireframe v4.0 · PIRA LABS · Maio 2026*
*Substitui wireframe-completo-site-pira-labs-v3_9_1.md*
*Alinhado com PiraLabs_Documento_Mestre_v14.md — aprovado por Gabriela Aguiar e Celso Gama*
