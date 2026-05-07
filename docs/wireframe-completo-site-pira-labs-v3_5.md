# Wireframe Completo — Site PIRA LABS
**Versão:** 3.5
**Data:** Maio 2026
**Substitui:** wireframe-completo-site-pira-labs-v3.4.md
**Status:** Aprovado para implementação após validação final no GPT

**Mudanças em relação à v3.4:**
- Tipografia: sistema Cormorant + Groteske (Caminho C — mix sofisticado)
- Acessibilidade WCAG 2.1 AA declarada como requisito de pronto
- Banner de cookies LGPD completo (aceitar/recusar) especificado
- Favicon e ícones completos (favicon.ico, apple-touch-icon, manifest.json)
- LocalBusiness schema adicionado à Organization principal
- 16 crawlers de IA permitidos no robots.txt (versus 5 da v3.4)
- Atributos pendentes da auditoria GEO de 28/04/2026 incorporados nos textos canônicos
- Página `/creative-business-turnaround` v1.1 com FAQs estruturadas extraídas da auditoria
- INSPIRA Jurídico declarado com 5 leituras do INSPIRA padrão sob lente jurídica
- Asterisco em todos os produtos boutique: "mediante consulta e disponibilidade"
- Oxigênio: "5 vagas para fundadores" (não apenas "5 vagas")
- NDA explícito como base canônica em todas as páginas comerciais
- Estrutura de i18n preparada (PT como base, EN próximo, ES futuro)
- Header e Footer especificados em arquivo de componentes compartilhados
- Estrutura de menu principal definida
- Página 404 customizada
- Headers de segurança (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- OpenGraph e Twitter Card por página

---

## 0. SOBRE ESTE DOCUMENTO

Este documento é a especificação estrutural completa do site `piralabs.com.br`. Foi escrito para ser **independente de IA executora**. Pode ser implementado em Claude Code, OpenAI Codex, Cursor, Windsurf ou qualquer LLM com acesso ao repositório `github.com/PiraLabs/pira-labs`, branch `feature/site-base-v09` ou nova branch derivada.

Contém:
- Mapa completo de páginas e rotas
- Estrutura de blocos por página, sem copy
- Hierarquia de navegação (header, footer, breadcrumbs)
- Fluxo de conversão da campanha do Oxigênio IA Search
- Especificação de schemas, redirects e regras de indexação
- Lista de assets e componentes compartilhados
- Plano de implementação por fase

**O que este documento NÃO contém:**
- Copy final (vai em `copy-home-pira-labs-v2.md` e `copy-paginas-internas-pira-labs-v4.md`)
- Identidade visual (vem da KZ depois, layout provisório no primeiro deploy)
- Código de implementação (vai em `handoff-tecnico-site-pira-labs-v2.md`)

---

## 1. CONTEXTO ESTRATÉGICO PARA O IMPLEMENTADOR

A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços. CEO Gabriela Aguiar conduz INSPIRA. Cofundador e COO Celso Gama conduz TRANSPIRA. O site precisa servir três objetivos simultâneos:

1. **Estabelecer autoridade institucional** para os dois fundadores e para a empresa
2. **Converter campanha de 10 dias** do produto Oxigênio IA Search a partir do dia 1
3. **Servir como base de GEO/AEO** para que LLMs e mecanismos de busca citem a PIRA LABS quando o ICP procurar por turnaround de empresas de serviços

A arquitetura de produtos é a seguinte:

```
INSPIRA (diagnóstico — Gabriela conduz)
  └── Oxigênio IA Search (subproduto pago, escopo fechado)

TRANSPIRA (execução — Celso conduz)
  └── Jurídico (subproduto, mantém noindex no primeiro deploy)

FAÍSCA (educacional — universo guarda-chuva)
  ├── Antes da Crise (publicação editorial no Substack)
  ├── Palestras
  ├── Mentorias
  └── Conteúdo aberto

RESPIRA — não é produto. É o estado que o cliente alcança. Aparece como conceito no manifesto, não como bloco no Método.
```

**Restrições absolutas que não podem ser violadas em nenhum lugar do site:**
- Travessão (em dash) proibido em qualquer texto público
- Vocabulário proibido: "travar", "travou", "destravando" e variações; "em paralelo", "neste contexto", "além disso", "por fim", "o objetivo é"; "é importante destacar", "vale ressaltar", "certamente", "com certeza"
- "PIRA LABS" sempre em caixa alta
- Frase canônica obrigatória nos primeiros 150 termos da home: *A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.*
- Nunca nomear Diageo (caso anonimizado como "multinacional do setor de bebidas") ou Samsung (anonimizada como "uma grande marca do setor de tecnologia")
- "Avanços acordados" ou "critérios acordados", nunca "resultados garantidos"
- "Respondemos em até dois dias úteis." em todas as páginas com CTA
- MIT: "Universal AI Foundational Modules" para Gabriela, "Applied AI Certificate Program" para Celso. Nunca apenas "MIT" sem o programa
- Celso: "último ano de Direito na Mackenzie", nunca "advogado" ou "bacharel"

---

## 2. STACK TÉCNICA

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15, App Router |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS |
| Deploy | Vercel |
| Domínio | Locaweb |
| Email | Google Workspace (`inspira@piralabs.com.br`) |
| Repositório | github.com/PiraLabs/pira-labs |
| Branch | `feature/site-base-v09` ou nova |
| CMS | Nenhum no primeiro deploy. Conteúdo em arquivos `.mdx` |
| Análise | Google Search Console, Bing Webmaster, Vercel Analytics |

**Design tokens provisórios** (paleta do slide 3 do `PiraLabs_ap_v4.pdf`, até identidade visual final da KZ chegar):

```text
ink:        #0C0F16
deep-teal:  #05262D
teal:       #004756
orange:     #EA6335
peach:      #F2A85E
off-white:  #E8E0D6
```

**Uso recomendado:**
- `ink` e `deep-teal`: fundos principais
- `off-white`: texto claro sobre fundos escuros
- `teal`: blocos, cards e superfícies secundárias (ou borda sutil sobre `deep-teal`)
- `orange`: CTA principal, marcadores de conversão, hover, highlight curto
- `peach`: acentos editoriais secundários, detalhes de card
- linhas e divisores: `off-white` com baixa opacidade

**Restrições visuais (importantes):**
- Não usar `orange` como fundo dominante de grandes seções. Funciona como acento, não como base
- Não criar visual SaaS, dashboard, agência criativa, curso ou consultoria de IA
- Manter estética premium, editorial, sóbria e funcional

**Tipografia (sistema Caminho C — mix sofisticado):**

| Família | Uso | Pesos |
|---|---|---|
| **Groteske** (sans-serif moderna) | Body, navegação, headers de página, UI, formulários, footer, breadcrumbs, tabelas, FAQs, listas | Regular (400), Medium (500), Semibold (600) |
| **Cormorant Garamond** (serif editorial) | Frases canônicas, citações dos fundadores, manchetes editoriais do `/antes-da-crise`, números de destaque (R$163M, 79pp, 400h→36h), assinaturas de seção | Light (300), Regular (400), Italic |

**Hierarquia tipográfica:**
- H1 (página): Groteske Semibold, 48px desktop / 32px mobile, line-height 1.1
- H2 (seção): Groteske Medium, 32px desktop / 24px mobile, line-height 1.2
- H3 (subseção): Groteske Medium, 22px desktop / 18px mobile, line-height 1.3
- Body: Groteske Regular, 17px desktop / 16px mobile, line-height 1.6
- Citação editorial / canônica: Cormorant Regular Italic, 22-28px, line-height 1.4
- Número de destaque: Cormorant Light, 56-72px, kerning -0.02em
- Caption / metadata: Groteske Regular, 14px

**Por que Space Grotesk (e não DM Sans):**
Acessibilidade superior em tela. Posicionamento contemporâneo sem perder peso editorial. Cormorant entra apenas onde é fala humana ou afirmação de valor — assim a marca não vira mais um SaaS, mas também não cai no visual "consultoria tradicional". Quando a KZ entregar o sistema visual final, a Groteske permite ajuste fino de pesos e variantes sem refatorar o código.

**Onde usar Cormorant (regra disciplinar):**
- Frases canônicas que aparecem nos primeiros 150 termos das páginas principais
- Citações dos fundadores em primeira pessoa (em `/sobre` e em alguns blocos de produto)
- Números âncora em destaque no `/sobre`, `/transpira` e `/transpira/juridico`
- Manchetes do `/antes-da-crise` e abertura de cada artigo
- Frase de fechamento institucional antes do CTA final ("Existe um próximo nível...")

**Onde NÃO usar Cormorant:**
- Headers de seção (use Groteske Medium)
- Body de qualquer página (use Groteske Regular)
- Navegação, footer, breadcrumbs, FAQs (use Groteske)
- Botões e CTAs (use Groteske Medium)

---

## 2.1 ACESSIBILIDADE (WCAG 2.1 AA)

Padrão obrigatório, não negociável.

**Contraste de cores:**
- Texto sobre fundo: contraste mínimo 4.5:1 (AA normal)
- Texto grande (18pt+ ou 14pt+ bold): contraste mínimo 3:1
- Verificar combinações:
  - `off-white` (#E8E0D6) sobre `ink` (#0C0F16): contraste ~14:1 ✓
  - `off-white` sobre `deep-teal` (#05262D): contraste ~12:1 ✓
  - `off-white` sobre `teal` (#004756): contraste ~9:1 ✓
  - `orange` (#EA6335) sobre `ink`: contraste ~4.7:1 ✓
  - `ink` sobre `peach` (#F2A85E): contraste ~9:1 ✓
- Não usar `peach` ou `orange` como cor de texto sobre fundo claro (contraste insuficiente)

**Foco visível:**
- Todos os elementos interativos (links, botões, inputs) com `:focus-visible` claro
- Outline 2px sólido em `orange` com `outline-offset: 2px`
- Sem `outline: none` em qualquer estilo

**Navegação por teclado:**
- Tab order lógico (top to bottom, left to right)
- Skip link no topo: "Pular para o conteúdo principal"
- Menu mobile abre/fecha por teclado (Esc fecha)
- Modais e overlays com trap de foco

**Semântica HTML:**
- `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>` semânticos
- Um único `<h1>` por página
- Hierarquia de headings sem pular níveis
- `<button>` para ações, `<a>` para navegação
- `<form>` com `<label>` associado a cada input

**Imagens:**
- Toda imagem com `alt` descritivo (ou `alt=""` se decorativa)
- Imagens com texto embutido evitadas
- Foto dos fundadores: `alt="Gabriela Aguiar e Celso Gama, cofundadores da PIRA LABS"`

**Tamanho mínimo de toque (mobile):**
- Botões e links com área de toque mínima de 44x44px
- Espaçamento mínimo entre elementos clicáveis: 8px

**Movimento e animação:**
- Respeitar `prefers-reduced-motion`
- Sem animações em loop infinito
- Sem flash > 3 vezes por segundo

**ARIA quando necessário:**
- `aria-label` em botões com apenas ícone (menu mobile, fechar modal)
- `aria-expanded` em menus que abrem/fecham
- `aria-current="page"` no item de menu da página atual
- `role="banner"` no header, `role="contentinfo"` no footer (implícito mas explicitar quando ambíguo)

**Idioma:**
- `<html lang="pt-BR">` na versão portuguesa
- `<html lang="en">` na futura versão inglesa
- Trechos em outro idioma com `lang` específico

**Critério de pronto da acessibilidade:**
- Lighthouse Accessibility ≥ 95
- Teste manual com leitor de tela (VoiceOver ou NVDA) na home, `/contato` e `/inspira/oxigenio`
- Teste manual com navegação só por teclado em todas as páginas indexáveis

---

## 3. MAPA DE ROTAS

### 3.1 Rotas indexáveis (entram no sitemap.xml)

| Rota | Tipo | Indexação | Prioridade Sitemap |
|---|---|---|---|
| `/` | Home | index, follow | 1.0 |
| `/sobre` | Institucional | index, follow | 0.8 |
| `/inspira` | Serviço pai | index, follow | 0.8 |
| `/inspira/oxigenio` | Subproduto pago | index, follow | 0.9 |
| `/transpira` | Serviço pai | index, follow | 0.8 |
| `/transpira/juridico` | Subproduto vertical | index, follow | 0.7 |
| `/faisca/juridica` | Subproduto vertical FAÍSCA | index, follow | 0.7 |
| `/creative-business-turnaround` | Página canônica da categoria | index, follow | 0.8 |
| `/inspira/juridico` | Subproduto vertical INSPIRA | index, follow | 0.7 |
| `/faisca` | Universo educacional | index, follow | 0.7 |
| `/antes-da-crise` | Página descritora da publicação | index, follow | 0.6 |
| `/contato` | Contato | index, follow | 0.5 |
| `/politica-privacidade` | Política de privacidade (LGPD) | index, follow | 0.3 |
| `/termos` | Termos de uso | index, follow | 0.3 |
| `/cookies` | Política de cookies | index, follow | 0.3 |

### 3.2 Rotas técnicas (sem indexação por natureza)

Sem rotas com `noindex` no primeiro deploy. Todas as páginas de conteúdo entram no sitemap.

### 3.3 Rotas técnicas

| Rota | Função |
|---|---|
| `/sitemap.xml` | Sitemap dinâmico gerado em build |
| `/robots.txt` | Permite 16+ crawlers de IA por nome, conforme plano GEO/AEO v4 |
| `/llms.txt` | Resumo do site para LLMs |
| `/llms-full.txt` | Conteúdo completo do site em texto puro para LLMs |
| `/.well-known/ai-agents.json` | B2A — declara capacidades e contato para agentes autônomos |
| `/feed.xml` | RSS feed do conteúdo, para sindicalização |
| `/404` | Página 404 customizada (`app/not-found.tsx`), `noindex` |
| `/favicon.ico` | Favicon principal |
| `/apple-touch-icon.png` | Ícone para iOS |
| `/manifest.json` | Web App Manifest para PWA-ready |

### 3.4 Redirects 301 obrigatórios

**Base de evidência:** `sitemap.ts` do site provisório (em produção em 06/05/2026) lista 15 URLs em 3 idiomas. Search Console confirma 3 indexadas (`/`, `/servicos`, `/en/services`). As outras 12 estão provavelmente em "Discovered" ou "Crawled - currently not indexed". Todas precisam de redirect 301 para evitar 404 no novo deploy.

**URLs que NÃO precisam de redirect (mas precisam de atenção):**

| URL | Status GSC hoje | Ação no v3.5 |
|---|---|---|
| `/sobre` | Erro de redirecionamento (bug do site provisório) | Nenhuma. Página existe no v3.5 com mesma URL. Retorna 200. Erro desaparece automaticamente. |
| `/contato` | Erro de redirecionamento (bug do site provisório) | Nenhuma. Página existe no v3.5 com mesma URL. Retorna 200. Erro desaparece automaticamente. |

**CRÍTICO para o Code:** não criar redirect para `/sobre` nem `/contato`. Se o Code ver "erro de redirecionamento" no GSC e tentar "corrigir" adicionando um redirect para essas URLs, vai criar problema novo onde não havia.

**URLs curtas para campanha:**

| De | Para | Motivo |
|---|---|---|
| `/oxigenio` | `/inspira/oxigenio` | URL curta para DM, posts |
| `/faisca/ia-search` | `/inspira/oxigenio` | Migração de arquitetura anterior |
| `/oxigenio-ia-search` | `/inspira/oxigenio` | Variante de URL para resiliência |
| `/turnaround` | `/creative-business-turnaround` | URL curta + termo da auditoria |
| `/cbt` | `/creative-business-turnaround` | Sigla curta |

**URLs do site provisório (PT raiz):**

| De | Para | Motivo |
|---|---|---|
| `/index.html` | `/` | Resíduo de variantes |
| `/home` | `/` | Variante comum |
| `/servicos` | `/inspira` | **CONFIRMADA INDEXADA** no GSC em 06/05/2026 |
| `/cases` | `/#provas` | Cases ficam na seção HOME-4 do v3.5 (3 cards de prova). Âncora preserva intenção do usuário. |
| `/blog` | `/antes-da-crise` | Migração de nomenclatura |
| `/news` | `/antes-da-crise` | Migração de nomenclatura |

**URLs do site provisório (EN, todas no sitemap atual):**

| De | Para | Motivo |
|---|---|---|
| `/en` | `/` | Raiz da versão EN |
| `/en/services` | `/inspira` | **CONFIRMADA INDEXADA** no GSC em 06/05/2026 |
| `/en/about` | `/sobre` | Equivalente PT |
| `/en/cases` | `/#provas` | Equivalente PT |
| `/en/contact` | `/contato` | Equivalente PT |

**URLs do site provisório (ES, todas no sitemap atual):**

| De | Para | Motivo |
|---|---|---|
| `/es` | `/` | Raiz da versão ES |
| `/es/sobre` | `/sobre` | Equivalente PT |
| `/es/servicos` | `/inspira` | **Atenção:** nomenclatura era PT, não ES correta (`/servicios`). Mantém mapeamento literal da URL indexada. |
| `/es/cases` | `/#provas` | Equivalente PT |
| `/es/contato` | `/contato` | **Atenção:** nomenclatura era PT, não ES correta (`/contacto`). Mantém literal. |

**Variantes em inglês fora da estrutura `/en/*` (proteção extra):**

| De | Para | Motivo |
|---|---|---|
| `/services` | `/inspira` | Caso alguém tenha linkado sem prefixo `/en` |
| `/about` | `/sobre` | Caso alguém tenha linkado sem prefixo `/en` |
| `/contact` | `/contato` | Caso alguém tenha linkado sem prefixo `/en` |

**Decisão sobre EN e ES futuros:**
Quando a versão EN nova entrar (próxima fase), os redirects de `/en/*` precisam ser revistos. A versão ES é fase 3, então os redirects de `/es/*` permanecem válidos por mais tempo. Documentar essa intenção no `tasks/lessons.md` para não esquecer.

**Notas críticas sobre redirects:**
- Todos os redirects preservam query strings (importante para UTMs)
- `/faisca/juridica` NÃO tem redirect. É página própria indexável dentro do FAÍSCA. Versões anteriores do wireframe tinham redirect equivocado para `/transpira/juridico`. Esse redirect foi removido.
- **As URLs `/`, `/servicos` e `/en/services` foram confirmadas como INDEXADAS pelo Google em 06/05/2026.** As outras 12 do sitemap estão em estados intermediários e precisam dos redirects acima para não retornarem 404 no deploy.
- Antes do deploy, **rodar varredura COMPLETA no Search Console** (filtros "Excluded", "Crawled - currently not indexed" e "Discovered - currently not indexed") para capturar URLs além das 15 do sitemap atual. Adicionar redirects sob demanda.
- Após o deploy, monitorar o relatório "Coverage" do GSC por 30 dias para capturar URLs que retornem 404 e adicionar redirects pontuais.
- **Nos primeiros 7 dias pós-deploy, testar manualmente** os redirects para todas as URLs do sitemap antigo (15 mapeadas) e confirmar retorno 301 com destino correto.

### 3.5 Sistema de origens nos CTAs

Todos os CTAs do site que apontam para `/contato` devem incluir parâmetro `?origem=` para rastreamento. O parâmetro é capturado pelo formulário Fillout e gravado no Notion DB.

**11 origens definidas:**

| Origem | Página de partida |
|---|---|
| `home` | `/` |
| `sobre` | `/sobre` |
| `inspira` | `/inspira` |
| `oxigenio` | `/inspira/oxigenio` |
| `transpira` | `/transpira` |
| `transpira_juridico` | `/transpira/juridico` |
| `faisca` | `/faisca` e `/antes-da-crise` |
| `faisca_juridica` | `/faisca/juridica` |
| `inspira_juridico` | `/inspira/juridico` |
| `creative_business_turnaround` | `/creative-business-turnaround` |
| `direto` | qualquer entrada direta sem origem prévia |

**Exemplos de URLs com origem:**

```
/contato?origem=home
/contato?origem=oxigenio
/contato?origem=transpira_juridico
```

A página `/contato` precisa preservar o parâmetro `origem` e repassar ao Fillout (via embed ou via abertura externa) sempre que tecnicamente possível.

### 3.6 Rotas que existiam na v2 e foram removidas ou alteradas

| Rota antiga | Status |
|---|---|
| `/faisca/ia-search` | Redirect 301 para `/inspira/oxigenio` |
| `/faisca/juridica` | **Página própria indexável na v3.5.** Não tem redirect. Versões anteriores do wireframe tinham redirect equivocado para `/transpira/juridico`. Esse redirect foi removido definitivamente. |
| `/respira` | Não existe. RESPIRA não é produto, é estado |

---

## 4. NAVEGAÇÃO

### 4.1 Header (desktop e mobile)

**Estrutura desktop:**

```
[LOGO PIRA LABS]   Sobre  ·  Inspira ▾  ·  Transpira ▾  ·  Faísca ▾  ·  Antes da Crise  ·  [Falar com a PIRA]
```

**Dropdowns:**
- Inspira ▾ → Inspira (página principal) · Inspira Jurídico · Oxigênio IA Search
- Transpira ▾ → Transpira (página principal) · Transpira Jurídico
- Faísca ▾ → Faísca (página principal) · Faísca Jurídica

**Não incluído no menu principal (acessíveis por links contextuais):**
- `/creative-business-turnaround` (link no footer + links contextuais nos textos)
- `/contato` (já é o CTA do header)

**Comportamento:**
- Sticky no topo (translucent backdrop blur quando scroll > 80px)
- Em mobile, hamburger expande para menu vertical full-screen com mesma estrutura
- Dropdown abre no hover (desktop) e por toque (mobile)
- Submenus com `aria-expanded` e tab navegável
- Item ativo da página com `aria-current="page"` e indicador visual sutil
- Skip link "Pular para o conteúdo" no início do tab order, visível só no foco

**CTA do header:**
- Texto: "Falar com a PIRA"
- Destino: `/contato?origem=header_global`
- Estilo: botão `orange` com texto `ink`, padding generoso, Groteske Medium
- Em mobile: aparece dentro do menu expandido, não no header colapsado

### 4.2 Footer

**Estrutura em 4 colunas (desktop) / acordeão (mobile):**

```
COLUNA 1                  COLUNA 2                  COLUNA 3                  COLUNA 4
INSTITUCIONAL             O QUE FAZEMOS             VERTICAL JURÍDICA         CONTATO
- Sobre                   - Inspira                 - Inspira Jurídico        inspira@piralabs.com.br
- Creative Business       - Oxigênio IA Search      - Transpira Jurídico      
  Turnaround              - Transpira               - Faísca Jurídica         LinkedIn PIRA LABS
- Antes da Crise          - Faísca                                            LinkedIn Gabriela Aguiar
- Contato                                                                     LinkedIn Celso Gama

────────────────────────────────────────────────────────────────────────────────────────────

[Cormorant italic]: "Liberamos o próximo nível."

PIRA LABS · CNPJ XX.XXX.XXX/0001-XX · São Paulo, Brasil
© 2026 PIRA LABS. Todos os direitos reservados.

Política de Privacidade  ·  Termos de Uso  ·  Aviso de Cookies

[Aviso jurídico em fonte 13px, off-white com 70% opacidade]:
A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e não substitui 
advogados habilitados pela OAB. As páginas da vertical jurídica tratam de fluxos de trabalho, 
governança operacional de IA e capacidade produtiva, com supervisão obrigatória de advogado 
habilitado do escritório contratante.
```

**Componentes do footer:**
- Logo PIRA LABS no topo, alinhado à esquerda, mesma versão do header
- 4 colunas no desktop, acordeão fechado no mobile
- Aviso jurídico SEMPRE presente (não fica só nas páginas da vertical)
- Política de Privacidade, Termos de Uso e Aviso de Cookies abrem páginas próprias (`/politica-privacidade`, `/termos`, `/cookies`)

**Não incluir no footer:**
- Telefone
- Endereço físico completo
- Newsletter signup (vai inline em `/antes-da-crise`)
- Botões de redes sociais com ícones (apenas links textuais)

**Acessibilidade do footer:**
- `<footer role="contentinfo">`
- Cada coluna tem heading próprio (h2 visualmente menor mas semanticamente correto)
- Links com sublinhado no hover
- Email como `mailto:` com `aria-label="Enviar email para PIRA LABS"`

### 4.3 Breadcrumbs

Breadcrumbs visíveis em todas as páginas que não são a home, no topo do conteúdo principal, abaixo do header.

```
Home > Inspira > Oxigênio IA Search
Home > Transpira > Jurídico
Home > Faísca
Home > Antes da Crise
Home > Sobre
```

**Schema:** BreadcrumbList em JSON-LD em cada página. Conforme plano GEO/AEO v4.

### 4.4 Componentes globais (presentes em todas as páginas)

**Banner de cookies (LGPD):**
- Aparece no primeiro acesso, ancorado no rodapé da viewport
- Texto: "A PIRA LABS usa cookies essenciais para o funcionamento do site e cookies analíticos para entender como o site é usado. Você pode aceitar todos, recusar opcionais ou ler mais."
- 3 botões: "Aceitar todos" (primário, `orange`), "Recusar opcionais" (secundário, outline `off-white`), "Ler mais" (link textual para `/cookies`)
- Estado salvo em cookie próprio `pira_consent` com 12 meses de validade
- Sem cookies de tracking carregam antes do consentimento (Vercel Analytics opt-out até aceite)
- Link "Gerenciar cookies" no footer permite revogar a qualquer momento
- Acessibilidade: `role="dialog"` com `aria-labelledby` apontando para o título do banner; trap de foco enquanto aberto; Esc não fecha (precisa decisão explícita do usuário)

**Página 404:**
- Rota: qualquer URL não mapeada
- Implementação: `app/not-found.tsx`
- Estrutura:
  - Header e footer normais
  - H1: "Essa página não existe na PIRA LABS"
  - Texto curto em prosa: "Talvez o link tenha mudado, ou talvez você esteja procurando algo que ainda não publicamos. Aqui estão os caminhos principais:"
  - Lista vertical de links: Home, Inspira, Transpira, Faísca, Antes da Crise, Contato, Creative Business Turnaround
  - CTA secundário: "Falar com a PIRA" → `/contato?origem=404`
- Schema: WebPage com `mainEntity` apontando para a Organization
- Não indexável (`noindex`)

**Skip link:**
- Primeiro elemento focável no tab order
- Texto: "Pular para o conteúdo principal"
- Visível apenas no foco
- Aponta para `<main id="main-content">`

**Idioma e i18n (preparado para EN futuro):**
- Estrutura de pastas preparada: `app/[locale]/page.tsx` mas com locale fixo em `pt-BR` no primeiro deploy
- Strings literais nas copies (não há sistema de traduções no v1)
- Quando a versão EN entrar:
  - Copy duplicada em `content/en/`
  - `hreflang` declarado em todas as páginas
  - Alternate links no `<head>`
  - Toggle de idioma no header (apenas quando segunda versão estiver pronta)
- ES fica para terceira fase

---

## 5. ESTRUTURA DE PÁGINAS

A partir daqui, cada seção descreve uma página em blocos. Cada bloco tem:
- **ID:** identificador único do bloco para referência cruzada
- **Função:** o que o bloco precisa fazer mover no leitor
- **Componente:** componente React reutilizável a ser criado
- **Conteúdo:** o que vai dentro, em alto nível (sem copy final)
- **Schema:** se o bloco gera marcação JSON-LD específica

### 5.1 Home `/`

**Objetivo da página:** estabelecer categoria, posicionar a marca, conduzir o leitor à página apropriada (Inspira, Transpira ou Oxigênio).

**SEO:**
- Title: até 60 caracteres, com "Creative Business Turnaround" nos primeiros 30
- Meta description: até 155 caracteres
- Canonical: `https://piralabs.com.br/`
- Schema: Organization, WebSite, WebPage, BreadcrumbList (apenas item Home)

#### Blocos

**HOME-1 · Hero**
- Função: estabelecer categoria e tagline em 5 segundos
- Componente: `<Hero />`
- Conteúdo:
  - Sobretítulo institucional curto (1 linha)
  - H1: opção C aprovada — *Existe um momento em que transformar ainda é um processo, não uma crise.*
  - Subtítulo com a frase canônica obrigatória (contém "boutique brasileira de Creative Business Turnaround")
  - CTA primário: "Entender o método" → âncora para HOME-3
  - CTA secundário: "Aplicar para Oxigênio" → `/inspira/oxigenio`
- Schema: nenhum específico

**HOME-2 · Sinais**
- Função: ativar reconhecimento no leitor que está no momento certo
- Componente: `<Signals />`
- Conteúdo:
  - Label da seção: *Quando a operação começa a custar mais do que deveria*
  - 4 a 6 sinais em cards curtos (sem ícones genéricos)
  - Cada sinal é uma situação concreta, não uma pergunta abstrata
- Schema: nenhum

**HOME-3 · Método**
- Função: explicar a tríade INSPIRA → TRANSPIRA, e nomear que RESPIRA é resultado
- Componente: `<Method />`
- Conteúdo:
  - Título da seção
  - Bloco INSPIRA: o que é, quem conduz (Gabriela), CTA "Ver INSPIRA" → `/inspira`
  - Bloco TRANSPIRA: o que é, quem conduz (Celso), CTA "Ver TRANSPIRA" → `/transpira`
  - Linha curta de fechamento mencionando RESPIRA como o estado alcançado
  - Menção a Oxigênio IA Search como ponto de entrada possível, com CTA "Conhecer Oxigênio" → `/inspira/oxigenio`
- Schema: nenhum nesse bloco. Schemas Service ficam nas páginas filhas

**HOME-4 · Provas**
- Função: dar peso de execução real
- Componente: `<Proofs />`
- **Requisito técnico:** elemento `<section id="provas">` obrigatório. Usado como destino dos redirects 301 de `/cases`, `/en/cases` e `/es/cases` que existiam no site provisório. URL `piralabs.com.br/#provas` precisa fazer scroll até esta seção.
- Conteúdo:
  - 3 cards com números reais aprovados (conforme copy v2.1):
    - R$16M para R$163M em 24 meses (Jogos 2016, anonimizado como "grande marca de tecnologia")
    - Margem -64% para +15% em 6 meses sem aumentar receita (caso bebidas, anonimizado como "multinacional do setor de bebidas, agência onde eu liderava a operação")
    - 400h para 36h (caso jurídico pós-IA, R$160 mil/mês de capacidade liberada calculada pelo cliente)
  - Cada card com contexto curto, sem nomear cliente
  - Frase de fechamento da seção que distingue os 2 cards pré-IA do 1 pós-IA
- Schema: nenhum (cases ficam dentro do schema da página, não geram schema próprio)

**HOME-5 · FAÍSCA (educacional)**
- Função: posicionar o universo educacional sem comercial direto
- Componente: `<FaiscaTeaser />`
- Conteúdo:
  - Título e descrição de 1 a 2 frases
  - 3 entradas: Antes da Crise, Palestras, Mentorias
  - CTA "Conhecer Faísca" → `/faisca`
- Schema: nenhum

**HOME-6 · Fundadores (teaser)**
- Função: humanizar a marca, levar para `/sobre`
- Componente: `<FoundersTeaser />`
- Conteúdo:
  - Foto Nós.png (Gabriela esquerda, Celso direita)
  - 2 a 3 linhas sobre a dupla
  - CTA "Conhecer Gabriela e Celso" → `/sobre`
- Schema: nenhum nesse bloco. Person schemas ficam em `/sobre`

**HOME-7 · CTA final**
- Função: conduzir contato
- Componente: `<FinalCTA />`
- Conteúdo:
  - Frase de fechamento institucional
  - CTA primário "Falar com a PIRA LABS" → `/contato`
  - "Respondemos em até dois dias úteis."
  - Assinatura: "Liberamos o próximo nível."
- Schema: nenhum

---

### 5.2 Sobre `/sobre`

**Objetivo:** estabelecer autoridade individual de Gabriela e Celso, e justificar boutique.

**SEO:**
- Title: até 60 caracteres com "Gabriela Aguiar" e "Celso Gama"
- Canonical: `https://piralabs.com.br/sobre`
- Schema: ProfilePage para cada fundador, AboutPage para a página, Person para cada um, Organization (referenciado via `@id`)

#### Blocos

**SOBRE-1 · Header da página**
- Componente: `<PageHeader />` (compartilhado)
- Conteúdo:
  - Breadcrumb
  - Título da página
  - Subtítulo curto

**SOBRE-2 · Bloco institucional**
- Componente: `<AboutInstitution />`
- Conteúdo:
  - Frase canônica
  - 2 a 3 parágrafos sobre boutique como escolha
  - 1 parágrafo sobre a categoria: "A PIRA LABS desenvolveu essa categoria para nomear sua forma de atuar no Brasil."

**SOBRE-3 · Gabriela Aguiar**
- Componente: `<FounderProfile />`
- Conteúdo:
  - Foto individual da Gabriela
  - Nome, papel (CEO, conduz INSPIRA)
  - Bio aprovada (versão final, sem ITA, com Universal AI Foundational Modules MIT)
  - Lista de credenciais em formato estruturado
  - Quote em primeira pessoa
  - Link LinkedIn: https://www.linkedin.com/in/gabrielaaguiarvs/
- Schema: Person + ProfilePage (`@id` apontando para entrada Wikidata Q138846653)

**SOBRE-4 · Celso Gama**
- Componente: `<FounderProfile />` (mesmo componente, dados diferentes)
- Conteúdo:
  - Foto individual do Celso
  - Nome, papel (COO, conduz TRANSPIRA)
  - Bio aprovada (versão final com "último ano de Direito na Mackenzie", Applied AI Certificate Program MIT)
  - Lista de credenciais
  - Trecho dos Jogos com anonimização: "Responsável pela ativação e execução das ações de patrocínio global de uma grande marca do setor de tecnologia nos Jogos Rio 2016. Coordenou 600 pessoas e 100 fornecedores. Elevou a receita da área de R$16M para R$163M no período de 2 anos."
  - Quote em primeira pessoa
  - Link LinkedIn: https://www.linkedin.com/in/celsogama/
- Schema: Person + ProfilePage (`@id` apontando para Wikidata Q138846692)

**SOBRE-5 · Como trabalhamos juntos**
- Componente: `<HowWeWork />`
- Conteúdo:
  - Como Gabriela e Celso se complementam
  - Por que cada projeto tem os dois do diagnóstico ao encerramento
  - Sem jargão de consultoria

**SOBRE-6 · CTA final**
- Mesma estrutura de HOME-7, com CTA para `/contato`

---

### 5.3 Inspira `/inspira`

**Objetivo:** descrever o INSPIRA como diagnóstico, levar interessados ao Oxigênio (subproduto pago) ou ao contato (INSPIRA completo, sob consulta).

**SEO:**
- Title: até 60 caracteres com "INSPIRA" e "diagnóstico"
- Schema: Service com `provider` (Organization PIRA LABS), `serviceType: "Diagnóstico empresarial"`, `audience`, `areaServed: "Brasil"`, `offers` com `priceSpecification: "Sob consulta"`

#### Blocos

**INSPIRA-1 · Header da página**
- Componente: `<PageHeader />`

**INSPIRA-2 · O que é o INSPIRA**
- Componente: `<ServiceIntro />`
- Conteúdo:
  - Definição em 2 a 3 parágrafos
  - O que está incluído (cinco leituras paralelas, gates de aprovação humana, entrega de relatório integrado)
  - Quem conduz (Gabriela)

**INSPIRA-3 · As cinco leituras**
- Componente: `<FiveReadings />`
- Conteúdo:
  - Mercado e presença
  - Pessoas e operação
  - Governança e processos
  - Tensão econômica
  - Síntese integrada
  - Cada uma com 2 a 3 frases descritivas

**INSPIRA-4 · Para quem é**
- Componente: `<TargetProfile />`
- Conteúdo:
  - ICP descrito sem jargão
  - 3 a 4 perfis concretos de empresa
  - 1 frase sobre quem não deveria contratar (filtro de qualificação)

**INSPIRA-5 · Subproduto destacado: Oxigênio IA Search**
- Componente: `<OxygenHighlight />`
- Conteúdo:
  - Card destacado
  - "Se você quer começar com escopo fechado, conheça o Oxigênio IA Search"
  - Preço da primeira rodada visível: R$6.200
  - CTA "Conhecer Oxigênio" → `/inspira/oxigenio`

**INSPIRA-6 · Como começar**
- Componente: `<HowToStart />`
- Conteúdo:
  - 3 passos do processo (contato, conversa de calibragem, proposta)
  - "Respondemos em até dois dias úteis."
  - CTA "Falar com a PIRA LABS" → `/contato`

**INSPIRA-7 · FAQ**
- Componente: `<FAQ />`
- Conteúdo:
  - 5 a 7 perguntas reais
  - Resposta direta, sem jargão
- Schema: FAQPage

**INSPIRA-8 · CTA final**
- Mesma estrutura de HOME-7

---

### 5.4 Inspira / Oxigênio IA Search `/inspira/oxigenio`

**Objetivo:** vender. Esta é a única página comercial-direta do site, com escopo fechado, vagas limitadas e preço público.

**SEO:**
- Title: até 60 caracteres com "Oxigênio IA Search" e "PIRA LABS"
- Meta description: até 155 caracteres com preço da primeira rodada e número de vagas
- Canonical: `https://piralabs.com.br/inspira/oxigenio`
- Schema: Service com `provider`, `serviceType: "Análise de presença em IA Search"`, `audience`, `areaServed: "Brasil"`, `offers` com:
  - `priceSpecification` para R$6.200 (primeira rodada, 5 vagas para fundadores)
  - `priceSpecification` para R$9.800 (preço regular, sem limite de vagas)
  - `availability` indicando vagas remanescentes da primeira rodada
  - `validFrom` (data de lançamento da campanha) e `validThrough` (60 dias após validFrom ou esgotamento das 5 vagas, o que acontecer primeiro)
  - `eligibleCustomerType: "Founder"` na primeira rodada

#### Blocos

**OXIGENIO-1 · Header da página**
- Componente: `<PageHeader />`

**OXIGENIO-2 · Hero da oferta**
- Componente: `<OfferHero />`
- Conteúdo:
  - H1 com nome do produto
  - Sobretítulo posicionando como subproduto do INSPIRA
  - Subtítulo com a promessa central em 2 linhas
  - Bloco visível com:
    - Preço da primeira rodada: R$6.200
    - Preço regular após esgotamento: R$9.800
    - Vagas: 5 nesta primeira rodada
    - Prazo de entrega: "até 5 dias úteis"
  - CTA primário: "Aplicar agora" → âncora ou formulário
  - CTA secundário: "Ver como funciona" → âncora para OXIGENIO-4

**OXIGENIO-3 · Para quem é**
- Componente: `<TargetProfile />` (compartilhado com `/inspira`, dados diferentes)
- Conteúdo:
  - ICP do Oxigênio (decisor de empresa de serviços que quer entender como aparece em IA Search antes de fazer movimento maior)
  - Setores prioritários
  - Quem não deve aplicar (filtro)

**OXIGENIO-4 · Vídeo de método (D4)**
- Componente: `<MethodVideo />`
- Conteúdo:
  - Embed do vídeo Loom ou YouTube unlisted (4 a 5 minutos, gravado pela Gabriela)
  - Legenda curta acima do vídeo
  - Transcrição abaixo, em accordion (boa para SEO e acessibilidade)
- Schema: VideoObject com `name`, `description`, `thumbnailUrl`, `uploadDate`, `duration`

**OXIGENIO-5 · O que está incluído**
- Componente: `<ScopeBreakdown />`
- Conteúdo:
  - Lista do que entrega:
    - Análise de como a empresa aparece em 4 LLMs principais
    - Mapa de gaps semânticos
    - Lista priorizada de correções
    - Recomendações de quick wins
    - Sessão de 30 a 45 minutos para apresentação
  - Lista do que NÃO entrega (filtro de expectativa)

**OXIGENIO-6 · Como funciona**
- Componente: `<ProcessSteps />`
- Conteúdo:
  - Passo 1: aplicação online
  - Passo 2: confirmação e onboarding em até 24h
  - Passo 3: análise rodando, entrega em até 5 dias úteis
  - Passo 4: sessão de leitura conjunta
  - Cada passo com 1 a 2 frases

**OXIGENIO-7 · Quem conduz**
- Componente: `<WhoDelivers />`
- Conteúdo:
  - Gabriela conduz a leitura institucional
  - Celso conduz a análise de governança e exposição
  - Foto pequena dos dois com link para `/sobre`

**OXIGENIO-8 · Prova social do método (D1)**
- Componente: `<MethodProof />`
- Conteúdo:
  - Bloco "Rodamos o Oxigênio em nós mesmos antes de oferecer"
  - 3 a 5 achados reais que vieram da auto-aplicação
  - Link para o post de campanha (publicado no dia 4 ou 5) com a história completa
- **Importante:** este bloco depende da auto-aplicação ser executada antes do deploy. Se não estiver pronto, esconder com flag até estar.

**OXIGENIO-9 · FAQ**
- Componente: `<FAQ />`
- Conteúdo:
  - 6 a 8 perguntas reais focadas em objeções de compra
  - "Por que não pesquiso por conta própria?"
  - "Como sei que funciona?"
  - "Vocês conhecem meu setor?"
  - "Por que tem prazo escalonado?"
  - "Posso aplicar e desistir?"
  - Resposta direta, sem jargão
- Schema: FAQPage

**OXIGENIO-10 · Bloco oculto: Oxigênio Pulso**
- Componente: `<PulsePocket />`
- Conteúdo:
  - Bloco escondido por padrão (CSS `display: none` ou flag em `.env`)
  - Ativado manualmente pelo Celso se a campanha emperrar
  - Quando ativo: mostra "Se você não tem urgência das 5 vagas para fundadores, conheça o Oxigênio Pulso"
  - Versão menor do Oxigênio: R$3.500
  - Sem URL própria, sem schema próprio, sem indexação

**OXIGENIO-11 · CTA final + aplicação**
- Componente: `<ApplicationCTA />`
- Conteúdo:
  - Recapitula vagas restantes (idealmente atualizado manualmente, ou com contador estático)
  - Formulário de aplicação inline OU link para formulário externo (Google Forms, Typeform)
  - "Respondemos em até dois dias úteis."
  - Assinatura

---

### 5.5 Transpira `/transpira`

**Objetivo:** descrever o TRANSPIRA como execução, sem subproduto destacado no momento (Jurídico fica `noindex`).

**SEO:**
- Title: até 60 caracteres com "TRANSPIRA" e "execução"
- Schema: Service com `serviceType: "Redesenho operacional e execução"`, `provider`, `audience`, `areaServed`, `offers` com `priceSpecification: "Sob consulta"`

#### Blocos

**TRANSPIRA-1 · Header da página**
**TRANSPIRA-2 · O que é o TRANSPIRA**
- Mesma estrutura de INSPIRA-2, com conteúdo de TRANSPIRA
- Quem conduz: Celso

**TRANSPIRA-3 · O que entregamos**
- Componente: `<DeliveryScope />`
- Conteúdo:
  - 4 a 6 frentes típicas
  - Tecnologia curada onde amplifica
  - Execução junto à operação

**TRANSPIRA-4 · Para quem é**
- Componente: `<TargetProfile />` (compartilhado)

**TRANSPIRA-5 · Como começa**
- Conteúdo:
  - TRANSPIRA começa após INSPIRA na maioria dos casos
  - Quando começa direto, e em que condições
  - "Respondemos em até dois dias úteis."
  - CTA `/contato`

**TRANSPIRA-6 · FAQ**
- Componente: `<FAQ />`
- Schema: FAQPage

**TRANSPIRA-7 · CTA final**

---

### 5.6 Transpira / Jurídico `/transpira/juridico`

**Objetivo:** página vertical de subproduto da TRANSPIRA, indexada e acessível pelo menu principal. Lançamento previsto para próxima semana, copy precisa estar pronta antes do deploy.

**SEO:**
- Title: até 60 caracteres com "TRANSPIRA Jurídico" e "PIRA LABS"
- Meta description: até 155 caracteres
- Canonical: `https://piralabs.com.br/transpira/juridico`
- Indexação: `index, follow`
- Entra no sitemap.xml com prioridade 0.7
- Schema: Service com `serviceType: "Redesenho operacional para empresas jurídicas"`, `provider`, `audience` (escritórios de advocacia, departamentos jurídicos), `areaServed: "Brasil"`, `offers` com `priceSpecification: "Sob consulta"`. FAQPage incluída.

#### Blocos

**JURIDICO-1 · Header da página**

**JURIDICO-2 · Posicionamento jurídico**
- Conteúdo: o que é, contexto regulatório (LGPD, OAB, Marco Legal da IA), por que TRANSPIRA Jurídico existe como vertical específica

**JURIDICO-3 · Caso âncora**
- Componente: `<CaseAnchor />`
- Conteúdo:
  - Resultado anonimizado: 400h → 36h, R$160 mil/mês de capacidade desbloqueada
  - Sem nomear cliente
  - Marcar explicitamente como caso de IA bem aplicada com supervisão humana

**JURIDICO-4 · O que entregamos**
- Mesmo componente de TRANSPIRA-3, dados específicos do jurídico
- Frentes típicas: legal ops, automação de tarefas mecânicas com supervisão, redesenho de fluxo de processos repetitivos, governança de IA aplicada à operação jurídica

**JURIDICO-5 · Para quem é**
- Componente: `<TargetProfile />`
- Conteúdo: escritórios e departamentos jurídicos com volume alto de trabalho mecânico repetitivo

**JURIDICO-6 · FAQ**
- Componente: `<FAQ />`
- Conteúdo: 5 a 7 perguntas focadas em objeções comuns
  - Como vocês garantem confidencialidade?
  - Qual o papel da IA versus advogado humano?
  - Vocês conhecem regulação setorial?
  - Como começa um projeto de TRANSPIRA Jurídico?
- Schema: FAQPage

**JURIDICO-7 · CTA final**
- CTA `/contato` com referência a "TRANSPIRA Jurídico"
- "Respondemos em até dois dias úteis."

---

### 5.7 Faísca `/faisca`

**Objetivo:** apresentar o universo educacional. Não é página de venda. É página de posicionamento intelectual.

**SEO:**
- Title: até 60 caracteres com "Faísca" e "PIRA LABS"
- Schema: WebPage, sem Service (não é serviço pago)

#### Blocos

**FAISCA-1 · Header da página**

**FAISCA-2 · O que é Faísca**
- Componente: `<UniverseIntro />`
- Conteúdo:
  - Definição: faísca como instante onde energia latente vira luz
  - Posicionamento: arena educacional da PIRA LABS
  - Por que existe (formar a categoria, expor método, contribuir com o ecossistema)

**FAISCA-3 · Frentes editoriais**
- Componente: `<FaiscaFronts />`
- Conteúdo: cards para cada frente
  - **Antes da Crise** — publicação editorial no Substack → `/antes-da-crise`
  - **Palestras** — descrição, formato, como contratar → CTA `/contato`
  - **Mentorias** — descrição, formato, como entrar → CTA `/contato`
  - **Conteúdo aberto** — links para LinkedIn, posts mais relevantes

**FAISCA-4 · CTA final**
- Sem CTA comercial direto. Convite a acompanhar Antes da Crise como porta de entrada.

---

### 5.8 Antes da Crise `/antes-da-crise`

**Objetivo:** página descritora curta da publicação. Conteúdo vive no Substack. Esta página existe para SEO/AEO e como ponte para inscrição.

**SEO:**
- Title: "Antes da Crise — Publicação editorial da PIRA LABS"
- Schema: WebPage, com referência à Organization

#### Blocos

**ADC-1 · Header da página**

**ADC-2 · Sobre a publicação**
- Componente: `<PublicationIntro />`
- Conteúdo:
  - Texto curto (200 a 300 palavras)
  - O que é, qual o tipo de conteúdo, periodicidade
  - Posicionamento: publicação dentro do universo Faísca
  - Quem escreve

**ADC-3 · Posts recentes**
- Componente: `<RecentPosts />`
- Conteúdo:
  - Lista dos 3 a 5 posts mais recentes
  - **No primeiro deploy:** lista manual em arquivo `.mdx`, atualizada quando há novo post
  - **Fase 2 (após primeiro deploy):** integração com API do Substack para atualização automática
  - Cada item com título, data, prévia de 1 a 2 linhas, link externo

**ADC-4 · CTA**
- Componente: `<NewsletterCTA />`
- Conteúdo:
  - CTA primário: "Ler no Substack" → link externo
  - CTA secundário: "Receber por email" → link de inscrição direto do Substack

---

### 5.7 FAÍSCA / Jurídica `/faisca/juridica`

**Objetivo:** página de entrada da vertical jurídica. Palestra e workshop executivo. Produto de relacionamento e geração de lead para INSPIRA e TRANSPIRA Jurídico.

**SEO:**
- Title: até 60 caracteres com "FAÍSCA Jurídica" e "PIRA LABS"
- Schema: Service com `serviceType: "Palestra e workshop executivo de governança de IA para o jurídico"`, `provider`, `audience`, `areaServed: "Brasil"`, `offers` com `priceSpecification: "Sob consulta"`

**Aviso obrigatório (incluir em FAQ ou rodapé):** "A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e não substitui advogados habilitados pela OAB."

#### Blocos

**FAISCA-JUR-1 · Header** — breadcrumb Home > Faísca > Jurídica, H1, subtítulo
**FAISCA-JUR-2 · Problema** — o que está acontecendo nos escritórios, uso informal de IA
**FAISCA-JUR-3 · O que é** — palestra ou workshop executivo, Gabriela conduz
**FAISCA-JUR-4 · Formatos** — Palestra executiva (60-90 min) e Workshop (2h)
**FAISCA-JUR-5 · Para quem é** — sócios, heads jurídicos, professores, coordenadores de curso, DPOs
**FAISCA-JUR-6 · Quem conduz** — Gabriela (Mackenzie Celso como contribuição técnica)
**FAISCA-JUR-7 · FAQ** — 4 perguntas incluindo aviso de não consultoria jurídica
**FAISCA-JUR-8 · CTA final** — `/contato?origem=faisca_juridica`

---

### 5.8 INSPIRA / Jurídico `/inspira/juridico`

**Objetivo:** diagnóstico de 2 a 3 semanas. Mapeamento de uso de IA, matriz de risco, política mínima, plano de ação. Produto intermediário entre FAÍSCA Jurídica e TRANSPIRA Jurídico.

**SEO:**
- Title: até 60 caracteres com "INSPIRA Jurídico" e "diagnóstico"
- Schema: Service com `serviceType: "Diagnóstico de governança de IA para escritórios jurídicos"`, `provider`, `audience`, `areaServed`, `offers` com faixa de preço R$12.500 a R$26.000

**Aviso obrigatório:** mesmo do FAÍSCA Jurídica.

#### Blocos

**INSPIRA-JUR-1 · Header** — breadcrumb Home > Inspira > Jurídico, H1, subtítulo
**INSPIRA-JUR-2 · Problema** — o que a maioria dos escritórios não sabe sobre si mesmo
**INSPIRA-JUR-3 · O que é** — diagnóstico com método INSPIRA, foco jurídico
**INSPIRA-JUR-4 · O que está incluído** — 5 entregas: mapeamento, matriz, política, plano, sessão
**INSPIRA-JUR-5 · Para quem é** — quem tem o problema mas não sabe onde está exposto
**INSPIRA-JUR-6 · Quem conduz** — Gabriela (institucional) + Celso (governança e exposição)
**INSPIRA-JUR-7 · FAQ** — 5 perguntas incluindo aviso, prazo, precificação e NDA
**INSPIRA-JUR-8 · CTA final** — `/contato?origem=inspira_juridico`

---

### 5.9 TRANSPIRA / Jurídico `/transpira/juridico` (versão expandida v3.3)

Mantém todos os blocos da versão anterior (v3.2). Expande com dois modelos de entrega e posicionamento de risco invisível.

**Mudanças em relação à v3.2:**
- JURIDICO-4 agora apresenta dois modelos de entrega (A e B) em vez de frentes únicas
- JURIDICO-3 (caso âncora) mantido, agora com origem do cálculo explicada
- JURIDICO-2 reformulado com ângulo de risco invisível
- FAQ expandido com pergunta sobre qualificação de quem executa o Modelo B
- Aviso de não consultoria jurídica adicionado ao FAQ

**Modelo B (novo):** capacidade de produção jurídica sob demanda. Celso (último ano de Direito, Mackenzie) executa trabalho operacional de legal ops sob supervisão e validação do advogado habilitado do escritório contratante. Por projeto, sob consulta.

---

### Lógica de funil entre os três produtos jurídicos

```
/faisca/juridica → /inspira/juridico → /transpira/juridico

Cada página deve linkar para o próximo nível do funil com CTA secundário:
- /faisca/juridica: CTA secundário "Quer ir além do workshop? Conheça o INSPIRA Jurídico" → /inspira/juridico
- /inspira/juridico: CTA secundário "Quer executar o plano? Conheça o TRANSPIRA Jurídico" → /transpira/juridico
- /transpira/juridico: CTA inverso "Prefere começar pelo diagnóstico? Conheça o INSPIRA Jurídico" → /inspira/juridico
```

---

### 5.10 Creative Business Turnaround `/creative-business-turnaround`

**Objetivo:** página canônica da categoria. Torna "Creative Business Turnaround" recuperável por LLMs quando o ICP pesquisar pela categoria. É a resposta direta para "o que é Creative Business Turnaround" em qualquer motor de IA.

**SEO:**
- Title: até 60 caracteres com "Creative Business Turnaround" e "PIRA LABS"
- Prioridade no sitemap: 0.8 (acima das páginas de serviço individuais)
- Schema: WebPage + DefinedTerm (inDefinedTermSet apontando para a PIRA LABS)

**Nota GEO/AEO crítica:** frase canônica da categoria deve aparecer literal nos primeiros 150 termos: "Creative Business Turnaround é o processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes da crise."

#### Blocos

**CBT-1 · Header** — breadcrumb, H1, subtítulo com frase canônica
**CBT-2 · O que é** — definição dos três termos (Creative, Business, Turnaround, "antes da crise")
**CBT-3 · Para quais empresas** — setores e perfil do decisor
**CBT-4 · Os sinais** — 5 sinais que indicam o momento certo para atuar
**CBT-5 · Como difere** — não é consultoria, não é agência, não é empresa de IA, não é mentoria, não é intervenção de crise
**CBT-6 · Como funciona** — INSPIRA → TRANSPIRA → RESPIRA, com CTAs para cada produto
**CBT-7 · Quem opera** — PIRA LABS como empresa que desenvolveu e opera a categoria no Brasil
**CBT-8 · CTA final** — `/contato?origem=creative_business_turnaround`

---

### 5.11 Contato `/contato`

**Objetivo:** ponto único de conversão para INSPIRA, TRANSPIRA, TRANSPIRA Jurídico, Oxigênio IA Search, palestras e mentorias.

**SEO:**
- Title: "Falar com a PIRA LABS"
- Schema: ContactPage, Organization (referenciada)

**Decisão técnica definitiva:** formulário via Fillout integrado a Notion DB. Não usar Formspree, FormSubmit ou inline em Vercel Functions como solução principal.

**Constante configurável a ser criada no projeto:**

```
FILL_OUT_FORM_URL = "[INSERIR_URL_FILLOUT]"
```

#### Blocos

**CONTATO-1 · Header da página**
- Componente: `<PageHeader />`

**CONTATO-2 · Formulário Fillout**
- Componente: `<FilloutEmbed />` ou `<FilloutCTA />`
- Implementação preferencial: embed do Fillout dentro da página
- Implementação alternativa: botão CTA que abre Fillout em nova aba ou modal
- Captura do parâmetro `?origem=` da URL e repasse ao Fillout (via embed config ou query string), quando tecnicamente possível
- Se o repasse automático de origem falhar na primeira implementação: manter formulário funcional e registrar `[AJUSTE PENDENTE: repasse de origem para Fillout]` no handoff técnico

**Campos a configurar no Fillout (não no Next.js):**
- Nome (texto curto, obrigatório)
- Email (email, obrigatório)
- Empresa (texto curto, obrigatório)
- Setor (dropdown: Publicidade, Saúde, Jurídico, Alimentação, Serviços profissionais, Outro)
- Sobre o que você quer conversar (dropdown: INSPIRA, TRANSPIRA, TRANSPIRA Jurídico, Oxigênio IA Search, Palestra, Mentoria, Outro)
- Mensagem (texto longo, obrigatório)
- Origem (campo oculto, populado pelo parâmetro URL)

**Mensagem de confirmação a configurar no Fillout:**
- "Recebemos sua mensagem. Respondemos em até dois dias úteis."

**CONTATO-3 · Texto da página**
- Texto curto acima do embed/CTA do Fillout
- Frase: "Quanto mais contexto você compartilhar agora, mais útil é a resposta."

**CONTATO-4 · Contato direto**
- Componente: `<DirectContact />`
- Conteúdo:
  - Email: `inspira@piralabs.com.br`
  - LinkedIn da PIRA, Gabriela e Celso
  - Sem telefone

---

## 6. COMPONENTES COMPARTILHADOS

Lista de componentes React reutilizáveis a criar. Localização sugerida: `/components/shared/`.

| Componente | Usado em |
|---|---|
| `<Header />` | Todas as páginas |
| `<Footer />` | Todas as páginas |
| `<PageHeader />` (breadcrumb + título) | Todas exceto Home |
| `<FAQ />` | INSPIRA, OXIGENIO, TRANSPIRA |
| `<TargetProfile />` | INSPIRA, OXIGENIO, TRANSPIRA |
| `<FinalCTA />` | Home, INSPIRA, TRANSPIRA, FAISCA, SOBRE |
| `<ProcessSteps />` | OXIGENIO, INSPIRA, TRANSPIRA |
| `<FounderProfile />` | SOBRE |

Componentes específicos de página podem viver em `/components/pages/[slug]/`.

---

## 7. SCHEMAS JSON-LD POR PÁGINA

Conforme plano GEO/AEO v4 e auditoria GEO de 28/04/2026 que identificou Estrutura em 76/100 como gargalo. Cada página recebe um `<script type="application/ld+json">` com `@graph` interconectado via `@id`.

### 7.1 Schema global (presente em todas as páginas)

- `Organization` com `@id: "https://piralabs.com.br/#organization"` — inclui `LocalBusiness` herdando dela
- `LocalBusiness` declarado dentro do `@graph` com endereço (cidade, estado, país), idiomas atendidos (pt-BR, en próximo) e `ContactPoint`
- `WebSite` com `@id: "https://piralabs.com.br/#website"` e `potentialAction` para SearchAction (mesmo sem busca interna no v1, declarar)
- `BreadcrumbList` específico da página

### 7.2 Schemas adicionais por página

| Página | Schemas adicionais |
|---|---|
| `/` | WebPage, FAQPage (3 perguntas canônicas da auditoria) |
| `/sobre` | AboutPage, Person (Gabriela com `educationalCredential`), Person (Celso com `educationalCredential`), ProfilePage |
| `/inspira` | Service (INSPIRA), FAQPage |
| `/inspira/oxigenio` | Service (Oxigênio com `provider`, `serviceType`, `audience`), Offer (R$6.200 primeira rodada com `validFrom`/`validThrough` e `eligibleCustomerType: "Founder"`), Offer (R$9.800 regular), VideoObject (vídeo de método quando ativo), FAQPage |
| `/transpira` | Service (TRANSPIRA), FAQPage |
| `/transpira/juridico` | Service (TRANSPIRA Jurídico com dois modelos), FAQPage |
| `/faisca/juridica` | Service (FAÍSCA Jurídica), FAQPage |
| `/inspira/juridico` | Service (INSPIRA Jurídico com faixa de preço R$12.500–R$26.000), FAQPage |
| `/faisca` | WebPage, ItemList (frentes editoriais) |
| `/antes-da-crise` | WebPage, ItemList (posts recentes), Blog (com `publisher` apontando para Organization) |
| `/creative-business-turnaround` | WebPage, DefinedTerm, FAQPage (3 perguntas canônicas da auditoria) |
| `/contato` | ContactPage |
| `/politica-privacidade` | WebPage |
| `/termos` | WebPage |
| `/cookies` | WebPage |

### 7.3 Schema `Person` detalhado (em `/sobre`)

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
    "https://www.wikidata.org/wiki/Q138846653"
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
    "Venture Capital mindset",
    "IA aplicada à operação"
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
    "https://www.wikidata.org/wiki/Q138846692"
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
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Postgraduate",
      "name": "Pós-graduação em Marketing",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "ESPM" }
    }
  ],
  "knowsAbout": [
    "execução operacional",
    "redesenho de processos",
    "legal ops com IA",
    "governança de uso de IA",
    "Creative Business Turnaround",
    "potencial represado"
  ]
}
```

### 7.4 Atributos `knowsAbout` da Organization

Lista expandida aprovada após auditoria GEO de 28/04/2026 (vai no schema Organization global):

```
Creative Business Turnaround, empresas de serviços, empresas de serviços
de alto valor, diagnóstico empresarial, redesenho operacional, execução
junto à operação, modelo de trabalho envelhecido, valor percebido,
tecnologia que acelera ruído, governança como capacidade competitiva,
operação dependente de heróis, potencial represado, IA aplicada à
operação, Venture Capital mindset, execução mão na massa, desbloqueio
de potencial, Turnaround de Propulsão, Antes da Crise, INSPIRA, TRANSPIRA,
RESPIRA, Oxigênio IA Search, INSPIRA Jurídico, TRANSPIRA Jurídico,
FAÍSCA Jurídica, governança de uso de IA no setor jurídico,
legal ops com supervisão humana.
```

**Nota da auditoria GEO:** os termos `Venture Capital mindset`, `execução mão na massa`, `desbloqueio de potencial` e `Turnaround de Propulsão` foram incorporados porque a auditoria de 28/04/2026 apontou esses 4 atributos como pendentes de conquista pela PIRA LABS no ecossistema de IAs generativas. Aparecer neles no `knowsAbout`, no `llms.txt` e nos textos das páginas é parte da estratégia para mover o score de Citação de 50/100 para 75+.

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

## 8. FLUXO DE CONVERSÃO DA CAMPANHA OXIGÊNIO

Mapeamento de onde o tráfego vem na campanha de 10 dias e para onde vai. Implementador precisa garantir que UTMs e redirects funcionem.

### 8.1 Origens de tráfego

| Origem | Veículo | URL de destino | UTM |
|---|---|---|---|
| LinkedIn PIRA | Post na página | `piralabs.com.br/oxigenio` | `?utm_source=linkedin&utm_medium=organic&utm_campaign=oxigenio-lancamento&utm_content=pira-post-[N]` |
| LinkedIn Gabriela | Post pessoal | `piralabs.com.br/oxigenio` | `?utm_source=linkedin&utm_medium=organic&utm_campaign=oxigenio-lancamento&utm_content=gabi-post-[N]` |
| LinkedIn Celso | Post pessoal | `piralabs.com.br/oxigenio` | `?utm_source=linkedin&utm_medium=organic&utm_campaign=oxigenio-lancamento&utm_content=celso-post-[N]` |
| Instagram Gabriela | Post no perfil | `piralabs.com.br/oxigenio` (via link na bio) | `?utm_source=instagram&utm_medium=organic&utm_campaign=oxigenio-lancamento&utm_content=gabi-ig-[N]` |
| Instagram Celso | Post no perfil | `piralabs.com.br/oxigenio` (via link na bio) | `?utm_source=instagram&utm_medium=organic&utm_campaign=oxigenio-lancamento&utm_content=celso-ig-[N]` |
| DM direta | Mensagem da Gabriela ou Celso | `piralabs.com.br/oxigenio` | `?utm_source=dm&utm_medium=direct&utm_campaign=oxigenio-lancamento&utm_content=[gabi-ou-celso]-dm` |
| Substack (Antes da Crise) | Edição da newsletter | `piralabs.com.br/oxigenio` | `?utm_source=substack&utm_medium=newsletter&utm_campaign=oxigenio-lancamento` |

**Importante:** o redirect 301 de `/oxigenio` para `/inspira/oxigenio` precisa preservar query strings (UTMs).

### 8.2 Fluxo do prospect na página

```
Aterrissa na /inspira/oxigenio
  ↓
Lê hero (preço, vagas, prazo)
  ↓
Decide: aplica direto OU lê mais
  ├── Aplica direto → formulário em OXIGENIO-11
  └── Lê mais → vídeo (D4), escopo, processo, prova (D1), FAQ → formulário
  ↓
Preenche formulário
  ↓
Recebe email automático de confirmação em até 24h
  ↓
Onboarding agendado
```

### 8.3 Métricas a acompanhar

| Métrica | Como medir |
|---|---|
| Visitas únicas em `/inspira/oxigenio` | Vercel Analytics + GA4 |
| Origem de cada visita | UTMs |
| Taxa de scroll (até onde lê) | Vercel Analytics ou Microsoft Clarity |
| Aplicações iniciadas | Form analytics |
| Aplicações completadas | Form analytics |
| Aplicações qualificadas (filtro manual) | Manual |
| Vendas fechadas | Manual |

---

## 9. PLANO DE IMPLEMENTAÇÃO

Sequência sugerida para o implementador. Cada fase tem critério de pronto.

### Fase 1 — Estrutura base (1 a 2 dias)
- [ ] Setup do repositório, branch nova `feature/site-v3`
- [ ] Configuração de Tailwind com design tokens provisórios
- [ ] Estrutura de pastas (`/app`, `/components`, `/lib`, `/content`)
- [ ] Componentes compartilhados básicos: `Header`, `Footer`, `PageHeader`, `FinalCTA`, `FAQ`
- [ ] Sistema de tipografia base
- [ ] Critério de pronto: build local rodando, navegação esqueleto funcionando

### Fase 2 — Páginas institucionais (1 a 2 dias)
- [ ] `/` (Home)
- [ ] `/sobre`
- [ ] `/contato` com formulário funcional
- [ ] Critério de pronto: as três páginas renderizando com copy v2.0 (a ser entregue separadamente)

### Fase 3 — Páginas de serviço (2 dias)
- [ ] `/inspira`
- [ ] `/transpira`
- [ ] `/faisca`
- [ ] `/antes-da-crise` com lista manual de posts
- [ ] Critério de pronto: todas as páginas renderizando com copy v4.0

### Fase 4 — Página crítica do Oxigênio (1 dia, com prioridade máxima)
- [ ] `/inspira/oxigenio` completa
- [ ] Embed de vídeo (Loom ou YouTube unlisted)
- [ ] Formulário de aplicação
- [ ] Bloco D1 oculto até auto-aplicação ser concluída
- [ ] Bloco Oxigênio Pulso oculto por flag
- [ ] Critério de pronto: página pronta para receber tráfego da campanha

### Fase 5 — Vertical jurídica (1 dia)
- [ ] `/transpira/juridico` com `index, follow`
- [ ] FAQ completo com schema FAQPage
- [ ] Caso âncora marcado como pós-IA com supervisão humana
- [ ] Entrada no sitemap.xml
- [ ] Critério de pronto: página acessível pelo menu principal, indexável, lançamento alinhado com a próxima semana

### Fase 6 — Camada GEO/AEO (1 dia)
- [ ] Schemas JSON-LD em todas as páginas (Organization, LocalBusiness, WebSite, BreadcrumbList globais + específicos por página)
- [ ] `Person` schemas com `educationalCredential` para Gabriela e Celso em `/sobre`
- [ ] `Service` com `Offer` completos (validFrom, validThrough, eligibleCustomerType) em `/inspira/oxigenio`
- [ ] `DefinedTerm` em `/creative-business-turnaround` com inDefinedTermSet
- [ ] `FAQPage` em todas as páginas que têm FAQ (home, CBT, vertical jurídica, inspira, transpira, oxigenio)
- [ ] `sitemap.xml` dinâmico (incluindo `/creative-business-turnaround` com prioridade 0.8 e páginas legais)
- [ ] `robots.txt` permitindo 16+ crawlers de IA por nome (lista completa no handoff técnico)
- [ ] `llms.txt` (resumo executivo) e `llms-full.txt` (conteúdo denso)
- [ ] Ambos llms.txt incluem: definição canônica de Creative Business Turnaround, atributos pendentes da auditoria GEO (Venture Capital mindset, execução mão na massa, desbloqueio de potencial, Turnaround de Propulsão), método INSPIRA-TRANSPIRA-RESPIRA descrito
- [ ] `/.well-known/ai-agents.json` declarando capacidades, contato, políticas de treinamento
- [ ] `feed.xml` (RSS feed do conteúdo em `/antes-da-crise`). Implementar como `app/feed.xml/route.ts`
- [ ] Redirects 301 configurados em `next.config.js` (lista completa na seção 3.4, todos preservando query strings)
- [ ] Verificação Google Search Console e Bing Webmaster
- [ ] Atualização do Google Business Profile da PIRA LABS (categoria, endereço, descrição padronizada com frase canônica)
- [ ] Critério de pronto: schemas validados em validator.schema.org, sitemap acessível, redirects testados, Search Console verificado

### Fase 7 — Acessibilidade, segurança e deploy (1 dia)

**Acessibilidade:**
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Skip link funcionando
- [ ] Tab order lógico em todas as páginas
- [ ] Contraste de cores validado (todas as combinações da paleta acima de 4.5:1 para texto normal)
- [ ] `:focus-visible` em todos os elementos interativos
- [ ] Teste manual com leitor de tela (VoiceOver no macOS ou NVDA no Windows) em home, `/contato` e `/inspira/oxigenio`
- [ ] `prefers-reduced-motion` respeitado

**Segurança:**
- [ ] Headers de segurança configurados (lista completa no handoff técnico):
  - `Content-Security-Policy` (CSP) com diretivas restritas
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` desabilitando câmera, microfone, geolocalização
  - `Strict-Transport-Security` (HSTS) com `includeSubDomains; preload`
- [ ] HTTPS forçado, redirect de HTTP para HTTPS
- [ ] Certificado SSL válido na Vercel
- [ ] Sem console.log() em produção
- [ ] Sem dados sensíveis em código-cliente

**LGPD e cookies:**
- [ ] Banner de cookies funcional com 3 opções (Aceitar todos / Recusar opcionais / Ler mais)
- [ ] Estado salvo em cookie `pira_consent` por 12 meses
- [ ] Vercel Analytics opt-out até consentimento
- [ ] Página `/cookies` publicada com lista completa de cookies usados
- [ ] Páginas `/politica-privacidade` e `/termos` publicadas

**Performance:**
- [ ] Lighthouse Performance ≥ 90 (mobile e desktop)
- [ ] Imagens otimizadas (formato WebP ou AVIF, lazy loading)
- [ ] Fontes Groteske e Cormorant carregadas via `next/font` com `display: swap`
- [ ] Bundle size < 200KB inicial
- [ ] Critical CSS inline

**Funcional:**
- [ ] Teste em mobile real (iOS e Android)
- [ ] Teste de formulário ponta a ponta (com origem capturada corretamente em Notion)
- [ ] Teste de banner de cookies em modo incógnito
- [ ] Teste de página 404 acessando URL inexistente
- [ ] Teste dos redirects 301 (cada um na lista)

**Favicon e ícones:**
- [ ] `favicon.ico` 32x32 + 16x16
- [ ] `apple-touch-icon.png` 180x180
- [ ] `icon-192.png` e `icon-512.png` para Android
- [ ] `manifest.json` com `name`, `short_name`, `theme_color`, `background_color`, `start_url`, `icons`

**OpenGraph e Twitter Card:**
- [ ] `og-image.png` 1200x630 padrão (gerado com brand kit ou paleta provisória)
- [ ] `og-image-cbt.png`, `og-image-oxigenio.png` específicos para páginas críticas
- [ ] `og:title`, `og:description`, `og:url`, `og:image`, `og:type` em todas as páginas
- [ ] `twitter:card="summary_large_image"`, `twitter:title`, `twitter:description`, `twitter:image`

**Deploy:**
- [ ] Deploy na Vercel, domínio apontado
- [ ] Verificação de DNS (apex `piralabs.com.br` e `www.piralabs.com.br` ambos respondendo)
- [ ] Decisão: redirect de `www.piralabs.com.br` para `piralabs.com.br` (apex como canônico)
- [ ] Verificação de HSTS preload (opcional para v1, decisão pós-deploy)
- [ ] Critério de pronto: site no ar em produção, todos os testes acima passando

**Total estimado:** 8 a 10 dias úteis se executado em fluxo contínuo. A página `/inspira/oxigenio` pode ser priorizada para sair antes do resto se a campanha de lançamento tiver data fixa.

---

## 10. DEPENDÊNCIAS EXTERNAS

Itens que dependem de ação fora do código.

| Item | Responsável | Bloqueia |
|---|---|---|
| Copy home v2.1 | Entregue | Nada |
| Copy páginas internas v4.3 | Entregue | Nada |
| Copy `/inspira/oxigenio` | Próxima entrega | Fase 4 |
| URL do Fillout (`FILL_OUT_FORM_URL`) | Celso cria via GPT separado, conecta com Notion DB | Fase 7 (deploy final) |
| Notion DB para receber leads | Celso cria | Fase 7 |
| Vídeo de método (D4) | Gabriela grava | Fase 4 (mas pode entrar depois com bloco escondido) |
| Auto-aplicação O2 (D1) | Celso e Gabriela executam | Bloco OXIGENIO-8 |
| Plano de campanha 10 dias | Próxima entrega | Lançamento |
| Identidade visual final | KZ | Pode entrar depois sem refazer estrutura. Paleta provisória do slide 3 do `PiraLabs_ap_v4.pdf` em uso |
| Foto Nós.png | Já existe | Nada |
| Bios aprovadas | Já existem | Nada |
| Wikidata Q138846653 e Q138846692 | Já existem | Nada |

---

## 11. CHECKLIST DE VERIFICAÇÃO ANTES DO DEPLOY

Conferir antes de subir para produção.

**Conteúdo:**
- [ ] Frase canônica nos primeiros 150 termos da home
- [ ] Nenhum travessão (em dash) em qualquer página
- [ ] Nenhuma palavra do vocabulário proibido
- [ ] PIRA LABS sempre em caixa alta
- [ ] "Respondemos em até dois dias úteis." nas páginas com CTA
- [ ] Diageo não nomeado em lugar nenhum
- [ ] Samsung não nomeada em lugar nenhum
- [ ] MIT sempre com nome do programa específico
- [ ] Celso descrito como "último ano de Direito na Mackenzie", nunca "advogado" ou "bacharel"
- [ ] Gabriela com Universal AI Foundational Modules, sem ITA

**Técnico:**
- [ ] Lighthouse 90+ em Performance, SEO, Accessibility, Best Practices
- [ ] Schemas JSON-LD validando em validator.schema.org
- [ ] Sitemap.xml acessível e válido
- [ ] Robots.txt permitindo crawlers de IA listados no plano GEO v4
- [ ] Todos os redirects 301 testados (incluindo preservação de query strings)
- [ ] `/transpira/juridico` com `index, follow` confirmado
- [ ] `/transpira/juridico` no sitemap.xml com prioridade 0.7
- [ ] `/transpira/juridico` com schema FAQPage funcional
- [ ] Constante `FILL_OUT_FORM_URL` populada com URL real do Fillout
- [ ] Embed do Fillout funcionando em `/contato` ou CTA externo configurado
- [ ] Parâmetro `?origem=` sendo capturado e repassado ao Fillout em todas as 11 origens, ou ajuste pendente registrado no handoff
- [ ] CTAs de todas as páginas com origem correta na URL de destino
- [ ] Notion DB conectado ao Fillout e recebendo leads de teste
- [ ] Aplicação do Oxigênio (formulário de aplicação) funcionando, separado do formulário de contato geral
- [ ] UTMs preservados nos redirects
- [ ] Teste em mobile (iOS Safari, Chrome Android)
- [ ] HTTPS forçado, HSTS ativo
- [ ] Headers de segurança: CSP, X-Frame-Options, Referrer-Policy

**SEO/GEO:**
- [ ] Google Search Console verificado
- [ ] Bing Webmaster Tools verificado
- [ ] IndexNow ativo
- [ ] `llms.txt` com conteúdo correto
- [ ] `/.well-known/ai-agents.json` válido

---

## 12. NOTAS PARA A IA EXECUTORA

Independente de qual ferramenta esteja implementando (Claude Code, Codex, Cursor, Windsurf):

1. **Antes de codificar, leia:** `PiraLabs_Documento_Mestre_v11.md`, `my-rules.md`, este wireframe, e (quando entregue) os arquivos de copy v2.0 e v4.0.

2. **Não invente conteúdo.** Se a copy de uma seção não estiver entregue ainda, deixar placeholder explícito (`<!-- COPY PENDENTE: [bloco-id] -->`) e seguir.

3. **Componentes compartilhados primeiro.** Construir Header, Footer, PageHeader, FinalCTA, FAQ antes de páginas, para evitar retrabalho.

4. **Schemas no final, mas não pular.** Schemas validam a estrutura. Se schema quebra, revisar conteúdo. É a etapa que mais detecta inconsistência tarde.

5. **Mobile-first.** Maior parte do tráfego vai vir de LinkedIn em celular durante a campanha.

6. **Performance é critério de pronto.** Se Lighthouse cair abaixo de 90 em qualquer eixo, otimizar antes de seguir.

7. **Em caso de dúvida sobre regra de conteúdo:** consultar `my-rules.md` no projeto. Se a regra não estiver lá, perguntar ao Celso, não inferir.

---

*Wireframe v3.5 · PIRA LABS · Maio 2026*
