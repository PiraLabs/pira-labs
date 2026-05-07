# Pacote Final v2.3 · Implementação Site PIRA LABS
**Versão:** 2.3
**Data:** Maio 2026
**Substitui:** pacote-final-v2_2.md (que ficou nomeado como v2_1.md por equívoco)

**Mudanças em relação à v2.2:**
- Tipografia: sistema Caminho C (Cormorant + Groteske) — Space Grotesk como substituta de Groteske até licenciamento
- Headers de segurança no `next.config.js` (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- Robots.txt com 21 crawlers de IA permitidos por nome (incluindo OAI-SearchBot, Meta-ExternalAgent, Cohere-AI, Amazonbot, Diffbot)
- Schema Person com `educationalCredential` para fundadores
- LocalBusiness schema adicionado
- Banner de cookies LGPD com 3 opções
- Página 404 customizada
- Favicon e manifest.json especificados
- Lista expandida de redirects 301 (12 rotas redirecionadas)
- Aviso jurídico fixo no rodapé de todas as páginas
- Asterisco "* mediante consulta e disponibilidade" em CTAs de produtos boutique
- Atributos pendentes da auditoria GEO de 28/04/2026 incorporados nos textos e schemas
- Arquivos de copy referenciados atualizados para v4.3 e v1.1
- Wireframe referenciado atualizado para v3.5
- Componentes compartilhados v1 listado como referência obrigatória

---

## COMO USAR ESTE DOCUMENTO

Este é o **briefing único para o Claude Code**. Cole o conteúdo deste documento na primeira mensagem para o Code, junto com o `[Environment Snapshot]` capturado conforme o Handoff Técnico v2.2.

O Code também precisa ler os arquivos referenciados ao longo do documento. Confirme que estão no diretório do projeto antes de começar.

---

## CONTEXTO INSTITUCIONAL

A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise. Fundada em 2025 por Gabriela Aguiar (CEO, conduz o INSPIRA) e Celso Gama (COO, conduz o TRANSPIRA).

**Produtos ativos:**
- INSPIRA — diagnóstico em cinco leituras paralelas, sob consulta
- TRANSPIRA — execução junto à operação do cliente, sob consulta
- TRANSPIRA Jurídico — vertical de TRANSPIRA para escritórios e jurídicos corporativos, sob consulta
- Oxigênio IA Search — subproduto pago do INSPIRA, escopo fechado, R$6.200 primeira rodada (5 vagas), R$9.800 regular
- FAÍSCA — universo educacional (palestras, mentorias, publicação Antes da Crise no Substack)

**Estado atual:**
- Site provisório no ar em `piralabs.com.br`
- Repositório `github.com/PiraLabs/pira-labs`
- Site novo deve subir até sexta 8/mai como base para campanha que começa terça 12/mai
- Identidade visual final virá da KZ depois. Layout provisório usa paleta do slide 3 do `PiraLabs_ap_v4.pdf`

---

## STACK E AMBIENTE

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15, App Router |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS |
| Deploy | Vercel |
| Domínio | piralabs.com.br |
| Repositório | github.com/PiraLabs/pira-labs |
| Branch | `feature/site-v3` (criar antes de começar) |
| Form | Fillout integrado a Notion DB |

---

## PALETA VISUAL (TOKENS PROVISÓRIOS)

```
ink:        #0C0F16
deep-teal:  #05262D
teal:       #004756
orange:     #EA6335
peach:      #F2A85E
off-white:  #E8E0D6
```

**Tipografia (sistema Caminho C):**
- Body / UI / headers de página / navegação: **Space Grotesk** (substituta da Groteske até licenciamento da KZ) — variável CSS `--font-grotesk`
- Frases canônicas / citações dos fundadores / números de destaque apenas: **Cormorant Garamond** — variável CSS `--font-cormorant`
- Não usar Cormorant em headers de seção, navegação, body ou UI

**Botão primário:**
- Fundo: `orange` (#EA6335) + texto: `ink` (#0C0F16)
- off-white sobre orange falha WCAG AA. ink sobre orange passa.

**Restrições visuais não negociáveis:**
- Não usar `orange` como fundo dominante. Acento apenas
- Não criar visual SaaS, dashboard, agência criativa, curso ou consultoria de IA
- Manter estética premium, editorial, sóbria, funcional

---

## REGRAS ABSOLUTAS DE CONTEÚDO

### 1. Travessão proibido

Nenhum texto público pode usar travessão (em dash, "—"). Usar dois pontos, vírgula, ou ponto final conforme contexto.

### 2. Vocabulário proibido

Nunca usar:
- "travar", "travou", "destravando" e variações
- "em paralelo", "neste contexto", "além disso", "por fim", "o objetivo é"
- "é importante destacar", "vale ressaltar", "certamente", "com certeza"

### 3. PIRA LABS sempre em caixa alta

Em todos os textos. Nunca "Pira Labs" ou "pira labs".

### 4. Frase canônica obrigatória

Aparece literal na home, dentro dos primeiros 150 termos da página, em sentença única sem quebra:

> A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.

### 5. Anonimizações

- **Diageo:** "multinacional do setor de bebidas". Posição do Celso: "agência onde eu liderava a operação"
- **Samsung:** "uma grande marca de tecnologia"

### 6. Caso jurídico (R$160 mil/mês)

Marcado explicitamente como **pós-IA com supervisão humana**. Nunca como pré-IA. Importante: erros anteriores propagaram esse caso como pré-IA. Corrigido neste pacote.

### 7. Credenciais MIT

Sempre com nome do programa específico:
- Gabriela: "Universal AI Foundational Modules (MIT)"
- Celso: "Applied AI Certificate Program (MIT)"

Nunca apenas "MIT" sem o programa.

### 8. Celso

Sempre "último ano de Direito na Mackenzie". Nunca "advogado", "bacharel" ou similar.

### 9. Gabriela

Sem ITA na credencial. Universal AI Foundational Modules é a credencial MIT a usar.

### 10. Promessa de resultado

Sempre "avanços acordados" ou "critérios acordados". Nunca "resultado garantido".

### 11. Frase de prazo

"Respondemos em até dois dias úteis." em todas as páginas com CTA.

### 12. Itálico no TRANSPIRA

"trabalho certo" e "trabalho muito" sempre em itálico via CSS na tagline TRANSPIRA. Sem aspas.

---

## ARQUITETURA DE ROTAS

### Rotas indexáveis (entram no sitemap)

| Rota | Tipo | Indexação | Prioridade |
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
| `/antes-da-crise` | Descritor publicação | index, follow | 0.6 |
| `/contato` | Contato | index, follow | 0.5 |

### Redirects 301 obrigatórios

- `/oxigenio` → `/inspira/oxigenio`
- `/oxigenio-ia-search` → `/inspira/oxigenio`
- `/faisca/ia-search` → `/inspira/oxigenio`
- `/faisca/juridica` — página própria, `index, follow`, sem redirect

Todos preservam query strings (importante para `?origem=`).

### Sistema de origens nos CTAs

Todos os CTAs que apontam para `/contato` incluem `?origem=`:

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
| `direto` | qualquer entrada direta |

---

## ARQUIVOS DE COPY A CONSULTAR

O Code precisa **ler antes de implementar**:

1. `copy-home-pira-labs-v2_1.md` — copy completa da home
2. `copy-paginas-internas-pira-labs-v4_3.md` — copy de /sobre, /inspira, /inspira/juridico, /transpira, /transpira/juridico, /faisca, /faisca/juridica, /antes-da-crise, /contato
3. `copy-inspira-oxigenio-v1.md` — copy completa de /inspira/oxigenio
4. `wireframe-completo-site-pira-labs-v3_5.md` — estrutura de blocos por página
5. `handoff-tecnico-v2_2.md` — referência técnica

**O Code não deve inventar conteúdo.** Onde a copy estiver pendente (blocos D1 e D4 da página do Oxigênio), deixar placeholder estruturado conforme indicado nos arquivos de copy.

---

## ORDEM DE IMPLEMENTAÇÃO

### Fase 1 — Estrutura base (manhã da quarta 6/mai)

1. Criar branch `feature/site-v3`
2. Confirmar `package.json` com dependências necessárias
3. Configurar Tailwind com paleta do slide 3 (conforme Handoff Técnico v2.0)
4. Configurar fontes (Cormorant Garamond + Space Grotesk via Next/font/google — variáveis `--font-cormorant` e `--font-grotesk`)
5. Estrutura de pastas conforme Handoff Técnico
6. Componentes compartilhados básicos: `<Header />`, `<Footer />`, `<PageHeader />`, `<FAQ />`, `<FinalCTA />`, `<TargetProfile />`, `<ProcessSteps />`, `<FilloutEmbed />`
7. Configurar `lib/constants.ts` com FILL_OUT_FORM_URL placeholder e FLAGS

**Critério de pronto:** `npm run dev` rodando, navegação esqueleto funcionando.

### Fase 2 — Páginas institucionais (tarde de quarta 6/mai)

1. `/` (Home) seguindo `copy-home-pira-labs-v2_1.md`
2. `/sobre` seguindo `copy-paginas-internas-pira-labs-v4_3.md` seção 1
3. `/contato` com `<FilloutEmbed />` configurado para captura de origem

**Critério de pronto:** as três páginas renderizam com copy literal dos arquivos.

### Fase 3 — Páginas de serviço (quinta 7/mai)

1. `/inspira` (seção 2 da copy de páginas internas v4.3)
2. `/transpira` (seção 4)
3. `/faisca` (seção 6)
4. `/antes-da-crise` (seção 8) com lista manual de posts em `content/antes-da-crise/posts.json`

**Critério de pronto:** todas renderizam, FAQ schemas funcionam.

### Fase 4 — Página crítica do Oxigênio (sexta 8/mai manhã)

1. `/inspira/oxigenio` com 11 blocos (OXIGENIO-1 a OXIGENIO-11) seguindo `copy-inspira-oxigenio-v1.md`
2. Bloco D4 (OXIGENIO-4) implementado com flag `FLAG_D4_ATIVO`. Quando false, mostrar texto de placeholder estruturado no documento
3. Bloco D1 (OXIGENIO-8) implementado com flag `FLAG_D1_ATIVO`. Mesmo padrão
4. Bloco Pulso (OXIGENIO-10) com flag `FLAG_PULSO_ATIVO`. Default false
5. Schema Service com priceSpecification para R$6.200 e R$9.800
6. Schema FAQPage funcional

**Critério de pronto:** página renderiza com copy literal, flags funcionam, schemas validam.

### Fase 5 — Vertical jurídica (sexta 8/mai tarde)

1. `/transpira/juridico` (seção 5 da copy de páginas internas v4.3) com `index, follow`
2. FAQ completo com schema FAQPage
3. Caso âncora marcado como pós-IA com supervisão humana
4. Entrada no sitemap

**Critério de pronto:** página acessível pelo menu, indexável, schema validando.

### Fase 6 — Camada GEO/AEO (sexta 8/mai final do dia)

1. Schemas JSON-LD em todas as páginas (Organization, LocalBusiness, WebSite, BreadcrumbList, Service, Person, FAQPage conforme página)
2. `sitemap.xml` dinâmico
3. `robots.txt` com 21 crawlers de IA permitidos
4. `llms.txt` (já gerado e revisado — copiar `llms.txt` para `public/llms.txt`)
5. `llms-full.txt` **→ gerar no final da Fase 6, após o build estar concluído.** É um dump das páginas renderizadas em texto puro. O script `node scripts/generate-llms-full.js` visita cada URL do sitemap e extrai o texto. Roda em minutos e vai para `public/llms-full.txt` antes do deploy final. Não é fase separada — é última etapa da Fase 6.
6. `/.well-known/ai-agents.json` (já gerado — copiar para `public/.well-known/ai-agents.json`)
7. Redirects 301 configurados em `next.config.js` (arquivo já gerado e revisado)

**Critério de pronto:** schemas validam em `validator.schema.org`, sitemap acessível, `llms.txt` acessível em `piralabs.com.br/llms.txt`, redirects testados.

### Fase 7 — Polimento e deploy

1. Lighthouse Mobile e Desktop: 90+ em Performance, SEO, Accessibility, Best Practices
2. Teste em mobile real (iOS Safari, Chrome Android)
3. Teste de FilloutEmbed e captura de 13 origens
4. HTTPS forçado, HSTS ativo
5. Headers de segurança: CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy
6. Deploy na Vercel via merge para main

**Critério de pronto:** site no ar em produção, todos os checklists do Handoff Técnico v2.2 marcados.

---

## SKILLS A USAR DURANTE O BUILD

O Celso já tem 19 skills instaladas (conforme Arsenal Code v3 dele). Adicionalmente, instalar antes do build:

```bash
npx skills add https://github.com/anthropics/skills --skill frontend-design
npx skills add coreyhaines31/marketingskills --skill schema-markup
npx skills add coreyhaines31/marketingskills --skill site-architecture
npx skills add coreyhaines31/marketingskills --skill seo-audit
```

**Skills relevantes para acionar durante o build:**

| Skill | Quando usar |
|---|---|
| `frontend-design` | Construção de componentes visuais. Paleta do slide 3 |
| `theme-factory` | Aplicação consistente da paleta entre páginas |
| `brand-guidelines` | Padronização de aplicação da identidade |
| `schema-markup` | Implementação dos JSON-LD |
| `site-architecture` | Arquitetura geral, navegação, hierarquia |
| `ai-seo` | Implementação GEO/AEO (combina com plano v4 do Celso) |
| `seo-audit` | Auditoria final antes do deploy |
| `copywriting` | Apenas se houver copy a refinar (em geral, copy já está pronta) |

---

## DEPENDÊNCIAS EXTERNAS NÃO CONTROLADAS PELO CODE

Estas precisam estar prontas antes ou durante o build. O Code não cria, mas precisa ser informado:

| Item | Quem cria | Quando | Bloqueia |
|---|---|---|---|
| URL Fillout | GPT separado configurado por Celso | Quarta 6/mai | Variável `NEXT_PUBLIC_FILLOUT_URL`. Se não estiver pronta no build, deixar placeholder e atualizar antes do deploy final |
| Notion DB | GPT separado | Quarta 6/mai | Não bloqueia o build, bloqueia o teste end-to-end |
| Vídeo D4 | Gabriela grava | Domingo 10/mai | Bloco D4 com flag false até esta data |
| Achados D1 | Celso executa auto-aplicação | Domingo 10/mai | Bloco D1 com flag false até esta data |
| Foto Nós.png | Já existe | Pronto | Nada |
| Bios aprovadas | Já existem | Pronto | Nada |
| Wikidata IDs | Já existem | Pronto | Nada (Q138846653, Q138846692, Q138846707) |

---

## ESTRUTURA DO CLAUDE.MD DO PROJETO

Criar `CLAUDE.md` na raiz do repositório com este conteúdo:

```markdown
# PIRA LABS — Site
Boutique brasileira de Creative Business Turnaround para empresas de serviços.

## Tarefa atual
Implementar site novo conforme Pacote Final v2.3.

## Voz e estilo
- Voz institucional PIRA LABS, não autoral individual
- Sem travessão (em dash) em qualquer texto
- PIRA LABS sempre em caixa alta
- Sem vocabulário proibido (ver Pacote Final v2.3)
- Frase canônica intacta na home

## Stack
Next.js 15 + TypeScript + Tailwind + Vercel + Fillout

## Workflow obrigatório
1. /plan antes de qualquer tarefa não trivial
2. Mostrar plano e aguardar confirmação antes de executar
3. Após qualquer correção: registrar em tasks/lessons.md
4. Não marcar tarefa como completa sem provar que funciona (build local rodando, schema validando, lighthouse 90+)

## Arquivos de referência (LER ANTES DE IMPLEMENTAR)
- pacote-final-v2_3.md (este pacote)
- handoff-tecnico-v2_2.md
- wireframe-completo-site-pira-labs-v3_5.md
- componentes-compartilhados-v1.md (Header, Footer, banner cookies, 404, breadcrumbs, CTAs)
- copy-home-pira-labs-v2_1.md
- copy-paginas-internas-pira-labs-v4_3.md
- copy-inspira-oxigenio-v1.md
- copy-creative-business-turnaround-v1_1.md
- copy-vertical-juridica-v1.md (referência alternativa para as 3 páginas jurídicas; fonte de verdade é a copy v4.3)
- geo-aeo-baseline-pira-labs-v1_1.md (rotina interna de monitoramento, não entra no site)

## Saída
Não inventar conteúdo. Onde a copy estiver pendente, deixar `<!-- COPY PENDENTE: [bloco-id] -->`.
```

Mantenha esse `CLAUDE.md` em até 200 linhas. Função: índice e regras-base. Conteúdo detalhado vai nos arquivos referenciados.

---

## ARQUIVO TASKS/LESSONS.MD INICIAL

Criar `tasks/lessons.md` com este cabeçalho:

```markdown
# Lessons Learned — Site PIRA LABS

## Sessão 1 — 6/mai/2026

### O que aprendi
[Vazio. Será preenchido durante a sessão]

### O que dar como certo na próxima sessão
[Vazio. Será preenchido durante a sessão]

---
```

Atualizar a cada erro corrigido ou descoberta importante. Cada sessão começa lendo este arquivo.

---

## VARIÁVEIS DE AMBIENTE

Criar `.env.local` (NÃO commitar):

```
NEXT_PUBLIC_FILLOUT_URL=[INSERIR_URL_FILLOUT]
NEXT_PUBLIC_FLAG_D1=false
NEXT_PUBLIC_FLAG_D4=false
NEXT_PUBLIC_FLAG_PULSO=false
NEXT_PUBLIC_VAGAS_OXIGENIO=5
```

Configurar também na Vercel: Project Settings > Environment Variables.

`.gitignore` precisa incluir `.env.local`.

---

## ORDEM DE PRIMEIRA SESSÃO COM O CODE

### Mensagem 1 (você cola para o Code)

```
[Environment Snapshot]
[Cole aqui o output do bootstrap conforme Handoff Técnico v2.0]

Olá Code. Estamos implementando o site novo da PIRA LABS na branch `feature/site-v3`.

Antes de qualquer ação:
1. Leia o CLAUDE.md desta pasta
2. Leia o pacote-final-v2.md (este documento)
3. Leia handoff-tecnico-v2_2.md, wireframe-completo-site-pira-labs-v3_5.md
4. Leia os 3 arquivos de copy: home v2.1, páginas internas v4.3, oxigenio v1
5. Leia tasks/lessons.md

Após ler, monte um plano de execução da Fase 1 (Estrutura base) e me apresente para aprovação.

Use /plan e aguarde minha confirmação antes de codificar.

Skills relevantes: frontend-design, theme-factory, brand-guidelines, schema-markup, site-architecture.
```

### Mensagem 2 (após aprovação do plano)

```
Plano aprovado. Comece a Fase 1. 

Mostre as primeiras 3 ou 4 ações antes de executar todas. Vou validar e libero a sequência.
```

### Mensagens subsequentes

Padrão: aprovação por bloco. Code mostra próximas ações, você libera. Não deixe ele andar sozinho na primeira sessão.

---

## CHECKLIST PRÉ-SESSÃO

Antes de abrir o Claude Code para a primeira sessão:

- [ ] Repositório clonado em `C:\Users\Lenovo\PiraLabs\pira-labs`
- [ ] Branch `feature/site-v3` criada e ativa
- [ ] Skills novas instaladas (frontend-design, schema-markup, site-architecture, seo-audit)
- [ ] `[Environment Snapshot]` capturado e copiado
- [ ] Arquivos `.md` colocados na raiz do repositório:
  - [ ] CLAUDE.md
  - [ ] pacote-final-v2_3.md
  - [ ] handoff-tecnico-v2_2.md
  - [ ] wireframe-completo-site-pira-labs-v3_5.md
  - [ ] componentes-compartilhados-v1.md
  - [ ] copy-home-pira-labs-v2_1.md
  - [ ] copy-paginas-internas-pira-labs-v4_3.md
  - [ ] copy-inspira-oxigenio-v1.md
  - [ ] copy-creative-business-turnaround-v1_1.md
- [ ] `tasks/lessons.md` criado com cabeçalho inicial
- [ ] `.env.local` criado (mesmo com FILLOUT_URL placeholder)
- [ ] GPT do Fillout disparado em paralelo (usar prompt-fillout-notion-v2.md)
- [ ] **Varredura completa no Google Search Console executada** (ver bloco abaixo)

---

## VARREDURA NO GOOGLE SEARCH CONSOLE ANTES DO DEPLOY

Antes de fazer deploy do site novo, é obrigatório capturar TODAS as URLs que o Google conhece, não apenas as indexadas válidas.

**Base de evidência conhecida em 06/05/2026:**

O `sitemap.ts` do site provisório (gerado pelo Claude e deployado há ~2 meses) lista 15 URLs em 3 idiomas:

| Idioma | URLs no sitemap |
|---|---|
| PT (raiz) | `/`, `/sobre`, `/servicos`, `/cases`, `/contato` |
| EN | `/en`, `/en/about`, `/en/services`, `/en/cases`, `/en/contact` |
| ES | `/es`, `/es/sobre`, `/es/servicos`, `/es/cases`, `/es/contato` |

O Search Console em 06/05/2026 mostra apenas 3 indexadas como "Valid" (`/`, `/servicos`, `/en/services`). As outras 12 estão provavelmente em "Discovered" ou "Crawled - currently not indexed".

**Os redirects 301 para essas 15 URLs já estão configurados no `next.config.js`** conforme tabela 3.4 do wireframe v3.5.

**Passos a executar antes do deploy (decisão caso a caso):**

1. Entrar no Google Search Console da propriedade `piralabs.com.br`
2. Acessar **Indexação > Páginas**
3. Para cada um dos seguintes status, exportar a lista completa em CSV:
   - "Indexada" (já temos: 3 URLs)
   - "Não indexada" e ver todas as razões: rastreada e não indexada, descoberta e não rastreada, página com redirecionamento, página alternativa com tag canônica adequada, etc.
4. Comparar a lista exportada contra as 15 URLs do sitemap conhecido
5. **Se houver URLs além das 15 mapeadas** (artefatos de testes do Code, URLs de sessões antigas, parâmetros de query indexados, paths esquecidos), decidir caso a caso o destino do redirect:
   - URL parece ser de produto ou serviço → redirect para a página equivalente do v3.5
   - URL parece ser de blog/conteúdo → redirect para `/antes-da-crise`
   - URL parece ser de teste/erro → redirect para `/`
   - URL parece ser sensível ou problemática → não redirecionar, deixar 410 (Gone) explícito
6. Adicionar redirects sob demanda ao `next.config.js` antes do deploy
7. Marcar como completo: `[VARREDURA_GSC_COMPLETA_OK]` em `tasks/lessons.md`

**Sobre EN e ES (decisão estratégica do Celso em 06/05/2026):**

As 5 URLs `/en/*` e as 5 URLs `/es/*` foram redirecionadas para o equivalente PT no v3.5 conforme tabela 3.4. Essa decisão é provisória. Quando a versão EN nova for ao ar (próxima fase do projeto), os redirects de `/en/*` precisam ser revistos. A versão ES é fase 3 do projeto, então os redirects de `/es/*` permanecem válidos por mais tempo.

**Por que isso importa:**
URLs que estão em estado intermediário hoje podem ser reativadas pelo Google amanhã. URLs em "Crawled - currently not indexed" estão na fila. Se uma dessas retornar 404 após o deploy, o Google penaliza o domínio inteiro por inconsistência.

**Tempo estimado:** 15 a 30 minutos da Gabriela ou do Celso.

---

## VERIFICAÇÃO PÓS-DEPLOY (primeiros 7 dias)

Imediatamente após o deploy:

- [ ] Acessar `https://piralabs.com.br/sobre` e confirmar **200** (não redirect — o GSC reporta erro de redirect no site atual, isso precisa sumir com o novo site)
- [ ] Acessar `https://piralabs.com.br/contato` e confirmar **200** (idem)
- [ ] Acessar `https://piralabs.com.br/servicos` no navegador e confirmar redirect 301 para `/inspira`
- [ ] Acessar `https://piralabs.com.br/cases` e confirmar redirect 301 para `/#provas` com scroll até a seção
- [ ] Acessar `https://piralabs.com.br/en/services` e confirmar redirect 301 para `/inspira`
- [ ] Acessar `https://piralabs.com.br/en/cases` e confirmar redirect 301 para `/#provas`
- [ ] Acessar `https://piralabs.com.br/es/sobre` e confirmar redirect 301 para `/sobre`
- [ ] Testar as outras 9 URLs do sitemap antigo (lista completa nos redirects do `next.config.js`)
- [ ] Acessar `https://piralabs.com.br/` e confirmar carregamento da home v3.5 com `<section id="provas">` presente
- [ ] No Search Console, submeter sitemap.xml novo
- [ ] No Search Console, solicitar reindexação manual das 3 URLs já indexadas (`/`, `/servicos`, `/en/services`)
- [ ] Validar headers de segurança em https://securityheaders.com/?q=piralabs.com.br (meta: classificação A)
- [ ] Validar schemas em https://validator.schema.org/ para home, /sobre, /inspira/oxigenio e /creative-business-turnaround

Nos 30 dias seguintes ao deploy:

- [ ] Monitorar relatório de Cobertura no Search Console diariamente nos primeiros 7 dias, depois semanalmente
- [ ] Para qualquer URL nova que apareça como 404 ou Soft 404, adicionar redirect específico
- [ ] Iniciar baseline GEO/AEO conforme `geo-aeo-baseline-pira-labs-v1_1.md`
- [ ] Atualizar Google Business Profile conforme `nota-google-maps-business-profile-v1.md`

---

## VALIDAÇÃO NO GPT ANTES DE MANDAR PARA O CODE

Antes de abrir o Code, recomendo passar este Pacote Final v2.3 + Handoff Técnico v2.2 + os arquivos de copy para um GPT separado, fazendo as seguintes perguntas:

1. As regras absolutas de conteúdo são exequíveis e não conflitam entre si?
2. As decisões de SEO/GEO no Handoff Técnico são consistentes com o plano GEO/AEO e com a auditoria GEO de 28/04/2026?
3. A ordem das fases faz sentido operacionalmente, dado o prazo da quinta 7/mai?
4. Há algum risco técnico que o Code possa não conseguir resolver sozinho?
5. As skills indicadas são as adequadas para a tarefa?
6. **Os redirects 301 cobrem TODAS as URLs prováveis do site provisório?** (Confirmar que as 3 URLs do Search Console estão mapeadas: `/`, `/servicos`, `/en/services`.)

Se alguma resposta sinalizar problema, ajustar antes de mandar para o Code.

---

*Pacote Final v2.3 · PIRA LABS · Maio 2026*
