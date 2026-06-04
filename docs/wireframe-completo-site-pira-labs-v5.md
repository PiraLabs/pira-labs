# Wireframe Completo — Site Pira Labs
**Versão:** 5.0
**Data:** Junho 2026
**Substitui:** wireframe-completo-site-pira-labs-v4.md

**Mudanças v4.0 → v5.0:**
- Manual de Marca v3 passa a ser canônico para tudo visual, tipográfico, cromático e de grafia
- Paleta inteira substituída pelos 8 tokens canônicos do Manual v3
- Tipografia: Space Grotesk e Cormorant Garamond saem. AtypDisplay entra como fonte exclusiva
- Grafia: "PIRA LABS" em texto corrido cai. Entra "Pira Labs" em todo texto público
- Header: estrutura revisada — menu por intenção + nomenclatura proprietária no dropdown
- Benchmarks atualizados: L+R removido, new.studio e Wolff Olins entram
- Deploy A/B completamente redefinidos por critério estratégico, não por tipo de página
- `/como-pensamos` promovida para Deploy A
- `/antes-pira/arquivo` adicionada como rota do Deploy A
- EN mínimo reduzido a 2 páginas no Deploy A
- Fotos dos fundadores: placeholder intencional no Deploy A (Celso por IA posterior, Gabriela escolhe do arquivo)
- Publicação renomeada de "Antes da Crise" para "Antes, Pira" com URL `/antes-pira` e redirect 301
- Seção de design tokens canônicos adicionada
- Referência cruzada obrigatória com Manual v3 em todas as implementações visuais

---

## 0. INSTRUÇÕES PARA O IMPLEMENTADOR

**Hierarquia de fontes — ordem de precedência:**
1. `PiraLabs_ManualDeMarca_v3.md` — visual, grafia, paleta, tipografia, logo, sistema de nós, voz pública
2. `PiraLabs_Documento_Mestre_v15.md` — estratégia, portfólio, ICP, fundadores, evidências, limites
3. Este wireframe v5 — rotas, blocos, stack técnica, schemas, deploy
4. Auditoria de benchmarks — referência de modelo, nunca fonte de verdade
5. Execução técnica — só pode adaptar, nunca reescrever posicionamento

**Regra de conflito:** Manual v3 prevalece sobre tudo. Em conflito entre este wireframe e o v15, o v15 prevalece. Comunicar ao Celso antes de resolver por conta própria.

**Regra de conteúdo:** não inventar copy. Bloco sem copy aprovada → `<!-- COPY PENDENTE: [bloco-id] -->`.

**Foto dos fundadores:** placeholder intencional no Deploy A. Fundo Teal, textos de Gabriela e Celso, estado visual que comunica ausência temporária sem parecer inacabado. Não atrasar deploy por asset pendente.

---

## 1. STACK TÉCNICA

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15, App Router |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS com tokens canônicos do Manual v3 |
| Deploy | Vercel |
| Domínio | piralabs.com.br |
| Email | Google Workspace — inspira@piralabs.com.br |
| Repositório | github.com/PiraLabs/pira-labs |
| Branch | master |
| Conteúdo | .tsx — decisão deliberada, não .mdx |
| Analytics | GA4 + Search Console + Bing Webmaster |
| Formulário | Fillout → Notion DB |

---

## 2. DESIGN TOKENS CANÔNICOS

Fonte: Manual de Marca v3, Seção 2. Estes são os únicos valores válidos. Os tokens provisórios do wireframe v4 (`#0C0F16`, `#05262D`, `#EA6335`, `#F2A85E`) estão extintos.

### 2.1 Paleta de cores

```ts
colors: {
  ink:        "#05262e",   // Fundo pesado, texto primário
  teal:       "#004757",   // Seções de método e fundadores
  ember:      "#eb5c2e",   // Presença singular — Regra Schindler
  sand:       "#e8e0d6",   // Fundo dominante, hero
  tealMid:    "#1A5568",   // Bordas, estados, badge setorial
  emberDeep:  "#C4421A",   // Hover, print, profundidade
  white:      "#F5F5F2",   // Texto sobre escuro
  black:      "#000000",   // Contraste máximo
}
```

**Regra do Ember — Schindler:** uma ocorrência singular por contexto visual. Nunca fundo de seção, CTA preenchido, label ou número decorativo. O Ember comunica destino (RESPIRA), não produto.

**Combinações canônicas:**

| Fundo | Texto/Elemento |
|---|---|
| Sand `#e8e0d6` | Ink `#05262e` |
| Ink `#05262e` | Sand `#e8e0d6` ou White `#F5F5F2` |
| Teal `#004757` | White `#F5F5F2` |

### 2.2 Arquitetura de fundos — home

Sequência obrigatória, definida no Manual v3, Seção 8:

```
Sand  → hero
Ink   → símbolo/sistema
Teal  → método
Ink   → evidências/provas
Sand  → produtos/FAÍSCA
Teal  → fundadores
Ink   → CTA final
```

### 2.3 Tipografia

Fonte exclusiva: **AtypDisplay** (Tomáš Brousil)
Pesos: Light 300 · Regular 400 · Medium 500 · Semibold 600 · Bold 700
Fallback: Inter → Helvetica Neue → Arial → sans-serif

**Hierarquia:**

| Função | Peso | Tamanho desktop | Tamanho mobile |
|---|---|---|---|
| Hero H1 | Bold 700 | 64–72px | 42–48px |
| H1 página interna | Semibold 600 | 48px | 32px |
| H2 | Medium 500 | 36px | 26px |
| H3 | Regular 400 | 24px | 20px |
| Subhead | Light 300 | 20px | 17px |
| Corpo | Light 300 | 16px / leading 1.75 | 16px |
| Eyebrow/Label | Semibold 600 | 10px · uppercase · tracking 0.18em | 10px |
| CTA | Semibold 600 | 13px · uppercase · tracking 0.10em | 13px |
| Legenda | Light 300 | 13px | 12px |

**Regra especial:** RESPIRA sempre em Light 300 — distingue destino de produto sem nota explicativa.
**Eyebrow/label:** Ink sobre fundo claro, White sobre fundo escuro e teal. Ember removido de labels.
**Ember tipográfico:** uma ocorrência singular por página em headline ou número de evidência.

---

## 3. MAPA DE ROTAS

### 3.1 Rotas indexáveis

| Rota | Tipo | Indexação | Deploy | Prioridade |
|---|---|---|---|---|
| / | Home | index, follow | A | 1.0 |
| /sobre | Institucional | index, follow | A | 0.8 |
| /inspira | Serviço pai | index, follow | A | 0.8 |
| /inspira/oxigenio | Subproduto | index, follow | A | 0.9 |
| /inspira/juridico | Vertical jurídica | index, follow | A | 0.7 |
| /transpira | Serviço pai | index, follow | A | 0.8 |
| /transpira/juridico | Vertical jurídica | index, follow | A | 0.7 |
| /faisca | Porta de entrada | index, follow | A | 0.7 |
| /faisca/juridica | Vertical jurídica | index, follow | A | 0.7 |
| /faisca/imersa-em-ia | Produto FAÍSCA | index, follow | A | 0.7 |
| /faisca/pocket | Produto FAÍSCA | index, follow | A | 0.7 |
| /creative-business-turnaround | Categoria canônica | index, follow | A | 0.8 |
| /antes-pira | Hub editorial | index, follow | A | 0.7 |
| /antes-pira/arquivo | Arquivo editorial | index, follow | A | 0.5 |
| /como-pensamos | Referências intelectuais | index, follow | **A** | 0.6 |
| /contato | Contato | index, follow | A | 0.5 |
| /politica-privacidade | LGPD | index, follow | A | 0.3 |
| /termos | Termos | index, follow | A | 0.3 |
| /cookies | Cookies | index, follow | A | 0.3 |
| /en | Home EN | index, follow | A | 0.8 |
| /en/creative-business-turnaround | Categoria EN | index, follow | A | 0.7 |
| /glossario | Hub vocabulário | index, follow | A (3 termos iniciais) | 0.7 |
| /glossario/[termo] | Definição | index, follow | A (3) → B (restantes) | 0.6 |
| /respirando | Cases editoriais | index, follow | B | 0.7 |
| /en/about | Sobre EN | index, follow | B | 0.7 |
| /en/contact | Contato EN | index, follow | B | 0.4 |
| /empresa-cresce-margem-some | Problema ICP | index, follow | B | 0.6 |
| /fundador-virou-gargalo | Problema ICP | index, follow | B | 0.6 |
| /ia-acelerou-o-ruido | Problema ICP | index, follow | B | 0.6 |
| /cliente-nao-percebe-o-valor | Problema ICP | index, follow | B | 0.6 |
| /podcast | Placeholder | **noindex** até 1º episódio | A | — |

**Nota `/como-pensamos`:** promovida para Deploy A. Se o header inclui esta rota no dropdown, ela precisa existir no ar no mesmo deploy. Link quebrado no menu é pior do que página simples.

**Nota glossário no Deploy A:** 3 termos iniciais obrigatórios — `creative-business-turnaround`, `janela-de-decisao`, `antes-da-crise`. Os demais 5 entram no Deploy B.

### 3.2 Rotas técnicas

| Rota | Função |
|---|---|
| /sitemap.xml | Sitemap dinâmico |
| /robots.txt | 25+ crawlers de IA nomeados |
| /llms.txt | Resumo para LLMs |
| /llms-full.txt | Conteúdo completo para LLMs |
| /.well-known/ai-agents.json | Capacidades para agentes |
| /404 | Página not-found, noindex |
| /favicon.ico | Favicon |
| /apple-touch-icon.png | Ícone iOS |
| /manifest.json | PWA manifest |

### 3.3 Redirects 301 obrigatórios

**Publicação renomeada:**

| De | Para |
|---|---|
| /antes-da-crise | /antes-pira |
| /antesdacrise | /antes-pira |

**URLs curtas:**

| De | Para |
|---|---|
| /oxigenio | /inspira/oxigenio |
| /turnaround | /creative-business-turnaround |
| /cbt | /creative-business-turnaround |
| /imersa | /faisca/imersa-em-ia |
| /pocket | /faisca/pocket |

**URLs legadas:**

| De | Para |
|---|---|
| /servicos | /inspira |
| /cases | /#provas |
| /blog | /antes-pira |
| /news | /antes-pira |
| /services | /inspira |
| /about | /sobre |
| /contact | /contato |
| /es | / |
| /es/sobre | /sobre |
| /es/servicos | /inspira |
| /es/cases | /#provas |
| /es/contato | /contato |
| /en/services | /en/creative-business-turnaround |

**Regras:**
- Todos os redirects preservam query strings (UTMs)
- `/faisca/imersa-em-ia`, `/faisca/pocket` e `/faisca/juridica` NÃO têm redirect — são páginas próprias indexáveis
- Monitorar Coverage no GSC por 30 dias pós-deploy

### 3.4 Sistema de origens nos CTAs

Todos os CTAs para /contato incluem `?origem=`:

| Origem | Localização |
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
| faisca_clevel | bloco C-level em /faisca |
| inspira_juridico | /inspira/juridico |
| creative_business_turnaround | /creative-business-turnaround |
| como_pensamos | /como-pensamos |
| respirando | /respirando |
| header_global | header em qualquer página |
| 404 | página not-found |
| direto | entrada direta sem origem |

---

## 4. NAVEGAÇÃO

### 4.1 Header

**Lógica:** intenção antes de nomenclatura. Quem não conhece a Pira entende pelo que quer fazer. Quem já conhece encontra pelo nome do produto no dropdown.

**Desktop:**

```
[Logo PiraLabs]   Antes, Pira  ·  Como funciona ▾  ·  Soluções ▾  ·  Sobre  ·  [Respire]
```

**Dropdown "Como funciona":**
- O método → âncora HOME-3 (ou /sobre#metodo)
- INSPIRA
- TRANSPIRA
- Creative Business Turnaround

**Dropdown "Soluções":**
- Faísca
- Imersão em IA
- Oxigênio
- pocket do INSPIRA
- Jurídico *(agrupa as 3 verticais — linka para /faisca/juridica como entrada)*
- C-level as a Service

**Regras:**
- `/como-pensamos` no dropdown "Como funciona" **somente** após Deploy A com a página no ar
- "Creative Business Turnaround" no dropdown comunica a categoria sem poluir o menu primário
- "Respirando" não aparece no menu — acessível por footer e links contextuais
- "Contato" não aparece no menu — é o CTA "Respire"
- C-level as a Service no menu: entrada por contexto, não prospecção ativa. Se gerar leads inadequados, remover do dropdown e deixar só em /faisca

**CTA do header:**
- Texto: "Respire"
- Destino: /contato?origem=header_global
- Estilo: outline White sobre fundo escuro · outline Ink sobre fundo Sand · **nunca Ember preenchido**
- Hover: borda EmberDeep ou underline Ember, sem bloco laranja
- Mobile: dentro do menu full-screen, fixo no rodapé

**Mobile full-screen:**
- Fundo Ink `#05262e`
- Links primários: AtypDisplay Semibold, 28px, White
- Subitens: AtypDisplay Light, 18px, White 80%
- "Respire" fixo na base, botão outline White
- Toggle PT/EN no topo

### 4.2 Footer

**Statement editorial** (AtypDisplay, grande, Cormorant Italic em v4 — agora AtypDisplay Light grande):
> "Liberamos o próximo nível."

**Quatro colunas:**

| Pensamento | Soluções | Vertical Jurídica | Contato |
|---|---|---|---|
| Antes, Pira | Faísca | Faísca Jurídica | inspira@piralabs.com.br |
| Creative Business Turnaround | INSPIRA | INSPIRA Jurídico | LinkedIn Pira Labs |
| Como pensamos | TRANSPIRA | TRANSPIRA Jurídico | LinkedIn Gabriela |
| Glossário | Oxigênio | | LinkedIn Celso |
| | Imersão em IA | | |
| | pocket do INSPIRA | | |

**Linha legal:**
```
Pira Labs · CNPJ 46.954.891/0001-16 · São Paulo, Brasil
© 2026 Pira Labs. Todos os direitos reservados.
Política de Privacidade · Termos de Uso · Aviso de Cookies
```

**Aviso jurídico** (em itálico, 13px, White 70%):
*A Pira Labs não presta consultoria jurídica, não define estratégia de caso e não substitui advogados habilitados pela OAB. As páginas da vertical jurídica tratam de fluxos de trabalho, governança operacional de IA e capacidade produtiva, com supervisão obrigatória de advogado habilitado do contratante.*

**Mobile:** colunas em acordeão fechado.

### 4.3 Sistema de CTA — "Respire" universal

| Contexto | Botão | Microcopy abaixo |
|---|---|---|
| Header global | Respire | — |
| Páginas de produto | Respire | "Conversa inicial sem compromisso. Respondemos em até 2 dias úteis." |
| Oxigênio | Aplicar agora | "5 dias úteis para o relatório. Respondemos em até 24h." |
| Imersão em IA | Respire | "Sessão de trabalho com os casos reais da sua empresa. Respondemos em até 2 dias úteis." |
| pocket do INSPIRA | Respire | "Sessão de 1,5h online. Respondemos em até 2 dias úteis." |
| Páginas de problema | Respire | "Diagnóstico antes de proposta. Conversa inicial gratuita." |
| /como-pensamos e /respirando | Respire | "Quer entender se o seu momento é o momento da Pira?" |
| Footer | Respire | — |
| 404 | Respire | "Volte para o caminho principal abaixo." |

**Componente:** `<CTAWithMicrocopy text href microcopy variant origin />`

---

## 5. ESTRUTURA DE PÁGINAS

### 5.1 Home `/`

**Objetivo:** estabelecer categoria, posicionar a marca, conduzir o leitor à página apropriada.

**SEO:** title com "Creative Business Turnaround" nos primeiros 30 caracteres.
**Schema:** Organization, WebSite, WebPage, BreadcrumbList

**Frase canônica obrigatória nos primeiros 150 termos:**
> "A Pira Labs é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes que a janela se feche."

#### Sequência de blocos e fundos

```
HOME-1 · Hero             → fundo Sand
HOME-2 · Sistema          → fundo Ink
HOME-3 · Sinais           → fundo Sand
HOME-4 · CBT categoria    → fundo Teal
HOME-5 · Método           → fundo Teal (ou Ink — ver bloco)
HOME-6 · FAÍSCA teaser    → fundo Sand
HOME-7 · Provas           → fundo Ink
HOME-8 · Fundadores       → fundo Teal
HOME-9 · Antes, Pira      → fundo Sand
HOME-10 · FAQ             → fundo Sand
HOME-11 · CTA final       → fundo Ink
```

#### Blocos

**HOME-1 · Hero**
- Fundo: Sand `#e8e0d6`
- Grid 12 colunas. Colunas 1–7: texto. Colunas 8–12: sistema de nós SVG animado
- H1 AtypDisplay Bold 64–72px: *Existe um momento em que transformar ainda é um processo, não uma crise.*
- Subhead AtypDisplay Light 20px: frase canônica
- CTA único: "Entender o método" → âncora HOME-5
- Visual SVG: 28–42 nós sobre Sand. 70% Ink stroke/fill. 20% Teal Mid. 1 nó Ember (singular). Linhas finas Ink 18% de opacidade. Movimento 2–4px, duração longa, sem loop agressivo. Componente `<NodeSystem density=36 state="hero" theme="sand" animated emberMode />`
- Mobile: visual abaixo do texto, H1 42–48px

**HOME-2 · Sistema**
- Fundo: Ink
- Título: "A Pira Labs opera por organismo."
- Texto: cada nó representa pessoas, processos, decisões, tecnologias e entregas. Quando não operam juntos, a empresa trabalha mais, decide pior e perde margem em silêncio.
- Visual: `<SystemStates />` — 3 estados lado a lado (disperso · em operação · pleno). Último estado tem único nó Ember.
- Componente: `<SystemIntro />`

**HOME-3 · Sinais**
- Fundo: Sand
- Título: "Os sinais aparecem antes da crise. O problema é que quase ninguém para para lê-los."
- Layout: lista tipográfica — sem cards com ícones genéricos
- 6 sinais:
  1. A empresa vende, mas a margem não acompanha.
  2. A fundadora ou o fundador virou passagem obrigatória para quase tudo.
  3. A equipe trabalha mais, mas o cliente percebe menos valor.
  4. A IA entrou pela ferramenta, não pelo fluxo.
  5. O comercial promete uma coisa e a operação entrega outra.
  6. O negócio ainda tem reputação, clientes e caixa, mas perdeu fôlego.
- Interação hover: cada sinal revela segunda linha de aprofundamento
- Componente: `<Signals />`

**HOME-4 · Creative Business Turnaround**
- Fundo: Teal
- Eyebrow: "Creative Business Turnaround"
- Título: "Business Turnaround aplicado antes da emergência."
- Texto editorial (3 parágrafos — ver copy canônico no v15)
- Visual lateral: linha abstrata "crise tarde × turnaround antes"
- CTA: "Ler a categoria" → /creative-business-turnaround
- Componente: `<CategoryBlock />`

**HOME-5 · Método**
- Fundo: Teal ou Ink (decisão visual durante implementação — testar contrast ratio)
- 3 blocos horizontais (stack em mobile):
  - **INSPIRA** — "Quando você para de resolver o problema errado." — Gabriela Aguiar — símbolo INSPIRA SVG
  - **TRANSPIRA** — "Quando o trabalho certo substitui o trabalho muito." — Celso Gama — símbolo TRANSPIRA SVG
  - **RESPIRA** — "Quando a clareza chegou e o negócio decide." — resultado, não entrega — símbolo RESPIRA SVG (único nó Ember)
- RESPIRA: sempre AtypDisplay Light 300. Nunca aparece como produto contratável.
- Componente: `<MethodJourney />`
- ID âncora: `id="metodo"` — destino do CTA do hero

**HOME-6 · FAÍSCA — teaser de portas de entrada**
- Fundo: Sand
- Título: "Nem todo problema pede o mesmo começo."
- Grupo 1 — Entrada rápida: Imersão em IA (R$7.100) · Oxigênio (R$3.500/R$5.300) · pocket do INSPIRA (R$3.900)
- Grupo 2 — Autoridade: Palestras · Workshops
- Grupo 3 — Seletivo: C-level as a Service · Faísca Jurídica
- CTA: "Ver todas as portas de entrada" → /faisca
- Componente: `<EntryPoints />`
- Nota: não é tabela de preços. É convite a conhecer a porta certa.

**HOME-7 · Provas**
- Fundo: Ink
- Título: "Antes da crise, os números ainda contam uma história que dá para mudar."
- ID âncora: `id="provas"` — destino do redirect /cases
- 3 cards com números canônicos:
  - -64% → +15% de margem em 6 meses (multinacional do setor de bebidas)
  - R$16M → R$163M em 24 meses (grande marca do setor de tecnologia)
  - 400h → 36h com R$160 mil/mês de capacidade liberada (jurídico pós-IA)
- Números: AtypDisplay Bold, tamanho grande. Ember em **uma** ocorrência singular se necessário (decidir na implementação qual número recebe — provavelmente o mais impactante)
- Count-up animation ao entrar no viewport (IntersectionObserver, 1.2s, ease-out)
- Frase de fechamento: distingue os 2 pré-Pira Labs do 1 pós-Pira Labs
- Componente: `<Proofs />`

**HOME-8 · Fundadores**
- Fundo: Teal
- Título: "Boutique por dentro. Ecossistema por fora."
- **Foto:** placeholder intencional no Deploy A. Fundo Teal, nomes e posições, texto editorial. Não bloqueia deploy.
- Gabriela: "Lê o que está chegando antes de virar pauta. Conduz INSPIRA."
- Celso: "Entra quando a operação precisa de alguém que já viu isso antes. Conduz TRANSPIRA."
- Fechamento: "Cada projeto tem Gabriela e Celso do diagnóstico à entrega."
- CTA: "Conhecer os fundadores" → /sobre
- Componente: `<FoundersTeaser />`

**HOME-9 · Antes, Pira**
- Fundo: Sand
- Título: "Antes, Pira" (com vírgula — canônico)
- Descrição canônica: "Para quem prefere decidir antes que a crise decida. Gabriela Aguiar e Celso Gama, da Pira Labs, escrevem sobre o intervalo em que mudar ainda é uma escolha, e o que fazer com ele."
- 3 cards das edições mais recentes — títulos + 2 linhas de prévia + link Substack
- CTAs: "Ler no Substack" + "Receber por email"
- Componente: `<EditorialTeaser />`

**HOME-10 · FAQ Primeira Conversa**
- Fundo: Sand
- 5 perguntas com respostas diretas:
  1. Quanto custa trabalhar com a Pira Labs?
  2. Quanto tempo demora?
  3. E se eu não sei exatamente o que preciso?
  4. Como começa o primeiro contato?
  5. Vocês atendem empresas fora do Brasil?
- Schema: FAQPage
- Componente: `<HomeFAQ />`

**HOME-11 · CTA final**
- Fundo: Ink
- Frase: "O negócio ainda pode escolher. Essa é a janela."
- CTA: "Respire" → /contato?origem=home
- Microcopy: "Conte onde a operação começou a pesar. Respondemos em até dois dias úteis."
- Componente: `<FinalCTA />`

---

### 5.2 Antes, Pira `/antes-pira`

**URL canônica:** `/antes-pira` (não mais `/antes-da-crise` — redirect 301 ativo)

**Objetivo:** hub editorial com autoridade de marca. Item 1 do menu. Não pode parecer blog genérico.

**Schema:** WebPage + Blog + ItemList

#### Blocos

**ADC-1 · Header**
- H1 grande: "Antes, Pira" (com vírgula, AtypDisplay Bold)
- Descrição canônica abaixo: "Para quem prefere decidir antes que a crise decida. Gabriela Aguiar e Celso Gama, da Pira Labs, escrevem sobre o intervalo em que mudar ainda é uma escolha, e o que fazer com ele."
- Linha editorial discreta: periodicidade determinada pela existência de algo que mereça ser publicado, não por calendário fixo

**ADC-2 · Edições recentes**
- 10 cards (máximo — quando chegar a 11ª, a mais antiga vai para /antes-pira/arquivo)
- Cada card: título em AtypDisplay Medium, prévia 2 linhas, data, autoria (Gabriela / Celso / ambos), link externo Substack
- Feed manual no Deploy A — atualização manual a cada novo post
- Automação via API Substack na fase posterior

**ADC-3 · CTAs**
- Primário: "Ler no Substack" → link externo
- Secundário discreto: "Receber por email" → inscrição Substack

---

### 5.3 Arquivo `/antes-pira/arquivo`

**Objetivo:** manter acessíveis e indexáveis as edições que saem do hub após atingir 10.

**Schema:** WebPage + ItemList

- H1: "Arquivo — Antes, Pira"
- Lista de todas as edições arquivadas, em ordem cronológica reversa
- Mesma estrutura de card do hub, sem foto/visual de capa
- Link de volta: "Edições recentes" → /antes-pira
- Não aparece no menu — acessível via footer e link na página /antes-pira
- **Regra de arquivo:** quando a 11ª edição entra no hub, a 1ª (mais antiga) migra para esta página. Nunca deletar — URL permanece, conteúdo permanece, link externo para Substack permanece.

---

### 5.4 Como pensamos `/como-pensamos`

**Deploy:** A (obrigatório — aparece no dropdown "Como funciona")

**Objetivo:** linhagem intelectual da Pira. Mostra que a marca tem tese, não só produto.

**Schema:** WebPage + ItemList

#### Blocos

**CP-1 · Header**
- H1: "Como pensamos"
- Subtítulo: "A Pira não inventou tudo o que pensa. Inventou a combinação."

**CP-2 · Teses**
- 5 teses em formato editorial:
  1. O trabalho não acabou. O modelo de trabalho envelheceu.
  2. IA não corrige bagunça. Escala bagunça.
  3. Empresas de serviços precisam provar valor, não vender esforço.
  4. Existe uma janela em que mudar ainda é escolha.
  5. Boutique por dentro, ecossistema por fora.

**CP-3 · Referências estruturantes**
- 4–6 entradas: nome + o que a Pira tomou + link externo
- House of Beautiful Business, ReD Associates, Reboot (Jerry Colonna), Farnam Street, Sequoia Capital (IA papers)

**CP-4 · Vocabulário proprietário**
- Links para /glossario com os 3–4 termos mais centrais
- "Antes" · "Janela" · "Propulsão" · "Creative Business Turnaround"

**CP-5 · CTA**
- "Quer entender se o seu momento é o momento da Pira?" → /contato?origem=como_pensamos

---

### 5.5 Sobre `/sobre`

**Schema:** BreadcrumbList + Person (Gabriela) + Person (Celso) + Organization

#### Blocos

**SOBRE-1 · Header**
- H1: "Duas lentes. Uma só operação."

**SOBRE-2 · Boutique por dentro**
- O que significa boutique como escolha deliberada, não como limitação

**SOBRE-3 · Gabriela Aguiar**
- Foto: **placeholder no Deploy A** — espaço reservado, Gabriela escolhe do arquivo
- Bio completa conforme v15 (credenciais, tese intelectual)
- Conduz INSPIRA

**SOBRE-4 · Celso Gama**
- Foto: **placeholder no Deploy A** — gerar por IA posteriormente com direção do Manual v3
- Bio completa conforme v15
- Conduz TRANSPIRA

**SOBRE-5 · Evidências de trajetória**
- 3 números canônicos sem nomear Diageo ou Samsung
- Frase diferenciadora: "Estas não são cases da Pira Labs. São registros do julgamento calibrado por consequência real."

**SOBRE-6 · Para imprensa e palestras**
- Temas disponíveis para Gabriela e Celso
- Contato: inspira@piralabs.com.br

**SOBRE-7 · CTA**
- "Respire" → /contato?origem=sobre

---

### 5.6 Creative Business Turnaround `/creative-business-turnaround`

**Objetivo:** página canônica da categoria para GEO/AEO. LLMs devem citar esta página quando o ICP procura por turnaround de empresas de serviços.

**Frase canônica nos primeiros 150 termos:**
> "Creative Business Turnaround é o processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes que a janela se feche."

**Schema:** WebPage + DefinedTerm + FAQPage + BreadcrumbList

#### Blocos

CBT-1 · H1 com frase canônica de definição
CBT-2 · O que não é (não é consultoria de crise, não é reestruturação financeira tardia, não é implantação de IA, não é mentoria motivacional, não é diagnóstico para arquivar)
CBT-3 · Por que existe (turnaround tradicional chega tarde, serviços perdem margem antes de perder receita, IA encurta a janela, valor percebido virou centro da disputa)
CBT-4 · Os sinais (5 sinais do momento certo)
CBT-5 · Como a Pira Labs aplica (INSPIRA → TRANSPIRA → RESPIRA)
CBT-6 · Quem opera (Pira Labs como empresa que desenvolveu e nomeia a categoria no Brasil)
CBT-7 · CTA → /contato?origem=creative_business_turnaround

---

### 5.7 INSPIRA `/inspira`

*[Estrutura idêntica ao v4 — sem mudanças de bloco, apenas tokens visuais atualizados]*

**Mudança v5:** quote da Gabriela usa AtypDisplay Light Italic (não Cormorant, que foi removido).

---

### 5.8 Oxigênio `/inspira/oxigenio`

*[Estrutura idêntica ao v4 — sem mudanças de bloco]*

**Flag ativa:** OXIGENIO-8 (auto-aplicação D1) permanece escondida até D1 executado.

---

### 5.9 TRANSPIRA `/transpira`

*[Estrutura idêntica ao v4, incluindo TranspiraConfigurations A e B e UnifiedContract]*

**Mudança v5:** quote do Celso usa AtypDisplay Light Italic.

---

### 5.10–5.15 Páginas internas restantes

Faísca, Jurídicos, Contato, Glossário, Sobre — estrutura de blocos idêntica ao v4. Aplicar tokens v5 (paleta, tipografia).

**Mudança transversal:** toda ocorrência de "PIRA LABS" em texto público vira "Pira Labs".

---

### 5.16 Antes, Pira — spec de implementação técnica

**Feed automático (fase posterior):** integrar RSS do Substack via API. No Deploy A: lista manual hardcoded em `lib/constants/editorial.ts`.

**Lógica de arquivo:**
```typescript
const MAX_POSTS_NO_HUB = 10

// Quando novo post é adicionado:
// 1. Adicionar ao início do array em editorial.ts
// 2. Se length > MAX_POSTS_NO_HUB: mover o último para arquivo.ts
// 3. O post arquivado mantém URL, título, prévia e link Substack
// 4. Nunca deletar — apenas mover entre arrays
```

**Schema BlogPosting** em cada card do hub:
- `datePublished`, `headline`, `url` (Substack), `author` (Gabriela / Celso / ambos)

---

## 6. COMPONENTES

### 6.1 Componentes de marca (novos ou revisados em v5)

| Componente | Mudança v5 |
|---|---|
| `<Logo />` | Usar arquivo SVG oficial KZ — COMPLETA_BRANCA sobre fundo escuro, COMPLETA_INK sobre Sand. Nunca SVG manual |
| `<NodeSystem />` | Props: `density state theme animated emberMode interactive`. Geometria canônica do Manual v3 |
| `<SystemStates />` | Props: `variant="dispersed|operating|full" theme="ink|sand" animated`. 3 estados lado a lado |
| `<ProductSymbol />` | Símbolos SVG por pilar — geometria canônica. Props: `pilar theme size` |
| `<SystemIntro />` | HOME-2 — sistema antes do produto |
| `<FoundersTeaser />` | HOME-8 — placeholder intencional quando foto pendente |

### 6.2 Componentes de navegação

| Componente | Comportamento |
|---|---|
| `<Header />` | Sticky · backdrop-filter blur 12px ao scroll >80px · tema Ink padrão · tema Sand quando fundo é Sand |
| `<MobileMenu />` | Full-screen Ink · AtypDisplay Semibold 28px primário · Light 18px secundário · "Respire" fixo no rodapé |
| `<Footer />` | Statement editorial · 4 colunas · linha legal com CNPJ · aviso jurídico |
| `<Breadcrumbs />` | AtypDisplay Light 14px · visível em todas exceto home |

### 6.3 Componentes de conteúdo

| Componente | Props relevantes |
|---|---|
| `<CTAWithMicrocopy />` | `text href microcopy variant origin` |
| `<ProofMetric />` | `before after unit description note sourceLabel` |
| `<ProductCard />` | `title type description price bestFor href symbol` |
| `<Accordion />` | FAQ em todas as páginas |
| `<EditorialCard />` | Cards de Antes, Pira no hub e na home |

### 6.4 Estrutura de pastas

```
app/
  page.tsx                              # Home
  layout.tsx
  globals.css
  antes-pira/
    page.tsx
    arquivo/page.tsx                    # NOVO v5
  como-pensamos/page.tsx                # Promovido para Deploy A
  creative-business-turnaround/page.tsx
  sobre/page.tsx
  contato/page.tsx
  faisca/
    page.tsx
    imersa-em-ia/page.tsx
    pocket/page.tsx
    juridica/page.tsx
  inspira/
    page.tsx
    oxigenio/page.tsx
    juridico/page.tsx
  transpira/
    page.tsx
    juridico/page.tsx
  glossario/
    page.tsx
    [termo]/page.tsx
  respirando/page.tsx
  en/
    page.tsx
    creative-business-turnaround/page.tsx
    about/page.tsx                      # Deploy B
    contact/page.tsx                    # Deploy B
  politica-privacidade/page.tsx
  termos/page.tsx
  cookies/page.tsx
  podcast/page.tsx                      # noindex

components/
  layout/
    Header.tsx
    Footer.tsx
    MobileMenu.tsx
    Breadcrumbs.tsx
  sections/
    Hero.tsx
    SystemIntro.tsx
    Signals.tsx
    CategoryBlock.tsx
    MethodJourney.tsx
    EntryPoints.tsx
    Proofs.tsx
    FoundersTeaser.tsx
    EditorialTeaser.tsx
    HomeFAQ.tsx
    FinalCTA.tsx
    TranspiraConfigurations.tsx         # v4 — mantém
    UnifiedContract.tsx                 # v4 — mantém
  ui/
    Container.tsx
    Section.tsx
    CTAWithMicrocopy.tsx
    ProductCard.tsx
    ProofMetric.tsx
    Accordion.tsx
    EditorialCard.tsx
  brand/
    Logo.tsx
    NodeSystem.tsx
    ProductSymbol.tsx
    SystemStates.tsx
  seo/
    JsonLd.tsx
    metadata.ts

lib/
  constants/
    brand.ts                            # tokens de cor, tipografia
    routes.ts
    products.ts
    proofs.ts
    navigation.ts
    editorial.ts                        # posts do Antes, Pira — lista manual
    editorial-archive.ts                # posts arquivados
  hooks/
    useInView.ts
    useReducedMotion.ts
  seo/
    schemas.ts
    llms.ts
```

---

## 7. ACESSIBILIDADE (WCAG 2.1 AA)

Padrão inegociável.

- Contraste mínimo 4.5:1 texto normal, 3:1 texto grande
- Pares canônicos validados pelo Manual v3 (Sand/Ink ≈ 14:1, White/Teal ≈ 9:1)
- Um único `<h1>` por página
- `aria-expanded` em dropdowns, `aria-current="page"` no item ativo
- Foco: `focus-visible`, outline 2px sólido EmberDeep, offset 2px
- Touch: mínimo 44×44px, espaçamento mínimo 8px entre alvos
- Skip link para `<main id="main-content">`
- `<NodeSystem />` com `aria-hidden="true"` quando decorativo — `<figure>` + `<figcaption>` quando explica método
- Teste manual VoiceOver ou NVDA: home, /contato, /inspira/oxigenio

---

## 8. MOTION SYSTEM

Nenhuma animação fora deste sistema.

**Entrances de seção:**
```css
opacity: 0 → 1
transform: translateY(16px) → translateY(0)
duration: 0.6s
easing: cubic-bezier(0.16, 1, 0.3, 1)
trigger: IntersectionObserver, 10% visível
```

**Count-up (HOME-7 Provas):**
```
zero → valor final
duration: 1.2s, easing: ease-out
trigger: elemento visível no viewport
```

**Header sticky:**
```css
backdrop-filter: blur(0) → blur(12px)
background-color: opacity 0 → 0.92
duration: 0.2s, linear
trigger: scroll > 80px
```

**NodeSystem — movimento sutil:**
- Variação 2–4px por nó, duração longa (8–12s), sem loop agressivo
- `prefers-reduced-motion: reduce` → parar movimento, manter posições

**CTA hover:**
```css
transform: scale(1) → scale(1.02), duration: 0.15s
```

**Proibido:** parallax em qualquer breakpoint · loop infinito agressivo · autoplay com som · flash >3x por segundo

---

## 9. WHITESPACE

```
Entre seções:          120px desktop / 80px mobile
Padding interno:        64px desktop / 40px mobile
Entre cards:            32px desktop / 24px mobile
Entre parágrafo/elem:   24px desktop / 16px mobile
Container:              max-width 1280px, padding 80px desktop / 24px mobile
```

---

## 10. SCHEMAS JSON-LD

### Por página

| Página | Schemas |
|---|---|
| / | Organization, WebSite, WebPage, FAQPage (HOME-10) |
| /sobre | WebPage, BreadcrumbList, Person (Gabriela), Person (Celso) |
| /inspira | WebPage, BreadcrumbList, Service, FAQPage |
| /inspira/oxigenio | WebPage, BreadcrumbList, Service, Offer (Fast R$3.500), Offer (Full R$5.300), FAQPage |
| /inspira/juridico | WebPage, BreadcrumbList, Service, FAQPage |
| /transpira | WebPage, BreadcrumbList, Service, FAQPage |
| /transpira/juridico | WebPage, BreadcrumbList, Service, FAQPage |
| /faisca | WebPage, BreadcrumbList, ItemList |
| /faisca/imersa-em-ia | WebPage, BreadcrumbList, Service, Offer (R$7.100) |
| /faisca/pocket | WebPage, BreadcrumbList, Service, Offer (R$3.900) |
| /faisca/juridica | WebPage, BreadcrumbList, Service, FAQPage |
| /creative-business-turnaround | WebPage, BreadcrumbList, DefinedTerm, FAQPage |
| /antes-pira | WebPage, BreadcrumbList, Blog |
| /antes-pira/arquivo | WebPage, BreadcrumbList, ItemList |
| /como-pensamos | WebPage, BreadcrumbList, ItemList |
| /contato | ContactPage, BreadcrumbList |
| /glossario | WebPage, BreadcrumbList, ItemList |
| /glossario/[termo] | WebPage, BreadcrumbList, DefinedTerm |
| /respirando | WebPage, BreadcrumbList, ItemList |
| Páginas de problema | WebPage, BreadcrumbList, FAQPage |
| /en, /en/cbt | WebPage, BreadcrumbList |

### Organization schema (home)

```json
{
  "@type": "Organization",
  "name": "Pira Labs",
  "legalName": "Pira Labs Consultoria Ltda",
  "url": "https://piralabs.com.br",
  "logo": "https://piralabs.com.br/logo.svg",
  "email": "inspira@piralabs.com.br",
  "foundingDate": "2025",
  "taxID": "46.954.891/0001-16",
  "addressLocality": "São Paulo",
  "addressCountry": "BR",
  "sameAs": [
    "https://www.linkedin.com/company/piralabs",
    "https://piralabs.substack.com",
    "https://github.com/PiraLabs/pira-labs",
    "https://www.wikidata.org/wiki/Q138846707",
    "https://www.crunchbase.com/organization/pira-labs"
  ]
}
```

---

## 11. ARQUIVOS GEO/AEO

### llms.txt e llms-full.txt

Atualizar para refletir v5:
- Grafia "Pira Labs" em todo o arquivo (substituir "PIRA LABS")
- Nome da publicação: "Antes, Pira" (substituir "Antes da Crise")
- URL hub editorial: `/antes-pira`
- Incluir `/como-pensamos` como página de referência intelectual
- Incluir `/antes-pira/arquivo` como recurso

### ai-agents.json

Atualizar:
- `name`: "Pira Labs"
- `description`: versão PT e EN com "Pira Labs" (não "PIRA LABS")
- Adicionar `/como-pensamos` no `siteMap`

### robots.txt

Manter 25+ crawlers nomeados. Sem alterações de conteúdo no v5.

---

## 12. PLANO DE DEPLOY — REDEFINIDO

### Critério Deploy A

Tudo que um visitante da persona 1 ou 2 precisa para entender o que a Pira faz, confiar que é séria e entrar em contato. Ausência de qualquer item do Deploy A compromete a função comercial do site.

### Deploy A — Base institucional e comercial

**Páginas (18 rotas PT + 2 EN + técnicas):**
- / · /sobre · /inspira · /inspira/oxigenio · /inspira/juridico
- /transpira · /transpira/juridico
- /faisca · /faisca/imersa-em-ia · /faisca/pocket · /faisca/juridica
- /creative-business-turnaround
- /antes-pira · /antes-pira/arquivo
- /como-pensamos *(promovida do B)*
- /contato
- /politica-privacidade · /termos · /cookies · /podcast (noindex)
- /glossario + 3 termos iniciais
- /en · /en/creative-business-turnaround

**Fases internas do Deploy A:**

#### A1 — Fundação técnica
- [ ] Next.js 15, TypeScript, Tailwind com tokens v5
- [ ] AtypDisplay carregada com font-display swap
- [ ] Logo SVG oficial KZ integrado
- [ ] Header e Footer com menu v5
- [ ] `<Container />`, `<Section />`, `<CTAWithMicrocopy />`
- [ ] `<NodeSystem />` e `<SystemStates />` com geometria canônica
- [ ] `<ProductSymbol />` para todos os pilares
- [ ] `<FoundersTeaser />` com suporte a placeholder
- [ ] metadata base (title, description, og:image)
- Critério: build local sem erro

#### A2 — Home completa
- [ ] Todos os blocos HOME-1 a HOME-11
- [ ] Sequência de fundos Sand→Ink→Teal→Ink→Sand→Teal→Ink implementada
- [ ] Count-up nos proofs funcionando
- [ ] NodeSystem animado no hero
- [ ] SystemStates nos 3 estados
- [ ] FAQ com schema
- [ ] Feed manual de Antes, Pira (5 edições recentes da lista atual)
- Critério: home navegável desktop e mobile

#### A3 — Páginas comerciais e editoriais (16 rotas)
- [ ] Todas as páginas listadas no Deploy A renderizando com copy
- [ ] `/antes-pira` com novo nome, nova URL, descrição canônica
- [ ] `/antes-pira/arquivo` com lógica de 10 posts implementada
- [ ] `/como-pensamos` completa (teses, referências, vocabulário)
- [ ] `/creative-business-turnaround` com DefinedTerm schema
- [ ] Glossário com 3 termos iniciais
- [ ] Redirect 301 `/antes-da-crise` → `/antes-pira` ativo
- [ ] Bloco "Como começa" em /inspira, /transpira, /inspira/oxigenio
- [ ] Placeholder intencional de fotos em /sobre e home
- Critério: navegação completa, copy validada contra v15

#### A4 — EN mínimo (2 rotas)
- [ ] /en e /en/creative-business-turnaround
- [ ] hreflang em PT e EN
- [ ] Toggle de idioma no header
- [ ] Cookie `pira_lang`
- Critério: visitante EN encontra categoria e pode entrar em contato

#### A5 — Schemas, GEO e arquivos técnicos
- [ ] Schemas JSON-LD em todas as páginas do Deploy A validando
- [ ] llms.txt e llms-full.txt atualizados (grafia, nome publicação, novas páginas)
- [ ] ai-agents.json atualizado
- [ ] sitemap.xml com todas as rotas A indexáveis
- [ ] robots.txt com crawlers
- [ ] Redirects 301 todos testados
- Critério: schemas validando em validator.schema.org

#### A6 — Qualidade e deploy
- [ ] Lighthouse: Performance ≥90, Accessibility ≥95, SEO ≥95, Best Practices ≥90
- [ ] Headers de segurança (CSP, HSTS, X-Frame, Referrer-Policy)
- [ ] Banner cookies LGPD funcional
- [ ] `prefers-reduced-motion` desabilitando transforms
- [ ] Teste manual com leitor de tela: home, /contato, /inspira/oxigenio
- [ ] Deploy na Vercel
- [ ] GSC e Bing Webmaster verificados
- Critério Deploy A: todas as rotas no ar, schemas validando, Lighthouse atingindo metas

### Deploy B — Camada editorial e satélite

**Páginas (8 rotas):**
- /respirando
- /en/about · /en/contact
- /glossario + 5 termos restantes
- /empresa-cresce-margem-some · /fundador-virou-gargalo · /ia-acelerou-o-ruido · /cliente-nao-percebe-o-valor

**Critério:** todas as rotas indexáveis, schemas validando, links internos cruzados funcionando.

---

## 13. BENCHMARKS DE REFERÊNCIA

Apenas como modelo — nunca como fonte de verdade ou material a copiar.

| Necessidade | Benchmark | O que aplicar |
|---|---|---|
| Tese + hero tipográfico sem imagem genérica | new.studio + Wolff Olins | Autoridade via tipografia e posicionamento antes do produto |
| Reconhecimento de dor do ICP | diffferent | Loop de perguntas reais do cliente (HOME-3) |
| Clareza comercial agrupada | Cognosis (adaptado à escala) | Lógica de agrupamento por necessidade em /faisca |
| Motion + manifesto tipográfico | TIWIS + Laurenti Web Design Studio | Discreto, sem neon, sem 3D blob |
| Profundidade intelectual e tese antes de serviço | ReD Associates | /como-pensamos e /creative-business-turnaround |

**Fora:** L+R (removido — contamina percepção de empresa de tecnologia). House of Beautiful Business mantido apenas como referência de plataforma editorial, não de design.

---

## 14. CHECKLIST PRÉ-DEPLOY

### Conteúdo
- [ ] Frase canônica nos primeiros 150 termos da home
- [ ] Nenhum travessão em texto público
- [ ] Nenhuma palavra do vocabulário proibido
- [ ] "Pira Labs" em texto corrido (não "PIRA LABS")
- [ ] Logo usa arquivos SVG oficiais KZ
- [ ] Ember não é cor dominante em nenhuma seção
- [ ] RESPIRA não aparece como produto contratável
- [ ] "Respondemos em até dois dias úteis." nas páginas com CTA
- [ ] "Antes, Pira" com vírgula em toda ocorrência
- [ ] URL `/antes-pira` ativa, redirect `/antes-da-crise` funcionando
- [ ] pocket do INSPIRA com p minúsculo
- [ ] Diageo não nomeada · Samsung não nomeada
- [ ] MIT sempre com nome completo do programa
- [ ] Celso: "bacharelando em Direito (Mackenzie)"
- [ ] "Mentorias" não aparece como produto
- [ ] Foto placeholder intencional em /sobre e home (não imagem quebrada)

### Técnico
- [ ] Lighthouse Performance ≥90
- [ ] Lighthouse Accessibility ≥95
- [ ] Lighthouse SEO ≥95
- [ ] Lighthouse Best Practices ≥90
- [ ] AtypDisplay carregando com font-display swap
- [ ] Schemas validando no validator
- [ ] Sitemap com todas as rotas A
- [ ] Todos os redirects 301 testados
- [ ] FILL_OUT_FORM_URL configurada
- [ ] Notion DB recebendo leads de teste
- [ ] HTTPS forçado, HSTS ativo

### Visual
- [ ] Tokens de cor corretos (Manual v3, não v4)
- [ ] Sequência de fundos Sand→Ink→Teal→Ink→Sand→Teal→Ink na home
- [ ] Nós seguem geometria canônica (r=18px, r=11px, 52px, gap 4.4px)
- [ ] Logo não aparece sobre figuras humanas
- [ ] Count-up nos proofs funcionando
- [ ] `prefers-reduced-motion` desabilitando transforms

---

## 15. DADOS CANÔNICOS

```
Nome público:       Pira Labs
Nome legal:         Pira Labs Consultoria Ltda
CNPJ:               46.954.891/0001-16
Tagline:            Liberamos o próximo nível.
Tagline EN:         Where businesses find propulsion to new heights.
Email:              inspira@piralabs.com.br
Site:               piralabs.com.br
Substack:           piralabs.substack.com — "Antes, Pira"
Gabriela LinkedIn:  linkedin.com/in/gabrielaaguiarvs
Gabriela Crunchbase: crunchbase.com/person/gabriela-aguiar-a12a
Celso LinkedIn:     linkedin.com/in/celsogama
Wikidata empresa:   Q138846707
Wikidata Gabriela:  Q138846653
Wikidata Celso:     Q138846692
```

---

*Wireframe v5.0 · Pira Labs · Junho 2026*
*Substitui wireframe-completo-site-pira-labs-v4.md*
*Alinhado com PiraLabs_ManualDeMarca_v3.md (canônico) e PiraLabs_Documento_Mestre_v15.md*
*Aprovação pendente: Gabriela Aguiar e Celso Gama*
