# HANDOFF — Site piralabs.com.br
**Versão:** 2.0 · Maio 2026
**Substitui:** handoff-site-piralabs-18mai2026.md
**Atualizações:** D8 status corrigido · decisões /antes-pira e YouTube registradas

---

## COMO ABRIR O PRIMEIRO CHAT

"Abrindo o projeto Site PIRA LABS. Lê o handoff de abertura, confirma o estado e aguarda instrução."

---

## ESCOPO DESTE PROJETO

Dentro: piralabs.com.br — código, deploy, copy implementada, schemas JSON-LD, metadados, arquivos técnicos (llms.txt, llms-full.txt, ai-agents.json, robots.txt, sitemap), rebuild visual com KZ.

Fora: GEO/AEO/SEO estratégico, posicionamento e marca, operação do Oxigênio, conteúdo editorial Substack/LinkedIn.

Regra de consumo: consome outputs do v13 e do projeto Marca e Posicionamento. Não reescreve o que esses definem. Conflito → v13 prevalece.

---

## ESTADO DO SITE — 18/05/2026

### Infraestrutura

| Item | Estado |
|---|---|
| URL produção | https://www.piralabs.com.br |
| Framework | Next.js (App Router) |
| Hospedagem | Vercel |
| Deploy | `.\deploy.bat` PowerShell / `! deploy.bat` no Code |
| Commits | Direto no master |
| Repositório local | C:\Users\Lenovo\PiraLabs\piralabs-site |
| Analytics | GA4 + Search Console vinculado |
| Formulário | Fillout em /inspira/oxigenio |

### Páginas em produção (15 rotas indexáveis)

| URL | Schemas JSON-LD |
|---|---|
| / | Organization + WebSite |
| /sobre | BreadcrumbList + Person (Gabriela) + Person (Celso) |
| /inspira | BreadcrumbList + Service + FAQPage |
| /inspira/oxigenio | BreadcrumbList + Service + Offer + FAQPage |
| /inspira/juridico | BreadcrumbList + Service + FAQPage |
| /transpira | BreadcrumbList + Service + FAQPage |
| /transpira/juridico | BreadcrumbList + Service + FAQPage |
| /faisca | BreadcrumbList |
| /faisca/juridica | BreadcrumbList + FAQPage |
| /creative-business-turnaround | BreadcrumbList + DefinedTerm + WebPage + FAQPage |
| /antes-da-crise → /antes-pira | BreadcrumbList ← MIGRAR |
| /contato | BreadcrumbList |
| /politica-privacidade | BreadcrumbList |
| /termos | BreadcrumbList |
| /cookies | [VERIFICAR — schema não confirmado] |

### Arquivos técnicos

| Arquivo | Estado |
|---|---|
| public/llms.txt | Deployado. ⚠️ Pricing desatualizado — corrigir |
| public/llms-full.txt | Deployado. ⚠️ Pricing desatualizado — corrigir |
| public/.well-known/ai-agents.json | Deployado. ⚠️ Substack name desatualizado — corrigir |
| app/robots.ts | Dinâmico, ativo |
| app/sitemap.ts | 15 rotas indexáveis — atualizar após migração /antes-pira |
| app/layout.tsx | metadataBase declarado, og:image resolve corretamente |
| CLAUDE.md (raiz) | Atualizado 17/05 |

### Redirects ativos

| De | Para |
|---|---|
| /services | /inspira |
| /about | /sobre |
| /contact | /contato |
| /antesdacrise | /antes-da-crise |
| /antes-da-crise | /antes-pira ← ADICIONAR após migração |

---

## ⚠️ CONFLITOS CRÍTICOS COM v13 — PRIORIDADE ABSOLUTA

### CONFLITO 1 — Pricing do Oxigênio

| Item | Atual | Canônico v13 |
|---|---|---|
| Fast | R$4.400 | R$3.500 |
| Full | R$8.900 | R$5.300 |
| Upgrade | R$4.500 | Não mencionado |

Arquivos a corrigir: public/llms.txt · public/llms-full.txt · app/inspira/oxigenio/page.tsx · public/.well-known/ai-agents.json · schema JSON-LD Offer em /inspira/oxigenio

### CONFLITO 2 — Migração /antes-da-crise → /antes-pira

**Decisão tomada:** URL muda para /antes-pira com redirect 301.

Execução obrigatória:
1. Renomear pasta: app/antes-da-crise/ → app/antes-pira/
2. Adicionar redirect 301: /antes-da-crise → /antes-pira em next.config.js
3. Manter redirect já existente: /antesdacrise → /antes-pira (encadear)
4. Atualizar sitemap.ts
5. Atualizar public/llms.txt e llms-full.txt
6. Atualizar public/.well-known/ai-agents.json
7. Atualizar schemas JSON-LD que referenciam a publicação
8. Verificar links internos no site que apontem para /antes-da-crise
9. Após deploy: submeter nova URL no GSC e solicitar reindexação

### CONFLITO 3 — YouTube no ai-agents.json

**Decisão tomada:** manter YouTube no sameAs. Canal existe estruturalmente, será ativado. Documenta a entidade.

Nenhuma ação necessária além de confirmar que a entrada está correta.

### CONFLITO 4 — Documento Mestre no KB

Subir PiraLabs_Documento_Mestre_v13.md e remover v11 do knowledge base do projeto.

---

## DEFERRED — não executar antes do gatilho

| # | Ação | Gatilho | Status |
|---|---|---|---|
| D1 | /obrigado — página de confirmação + GA4 | Após visual KZ | Pendente |
| D2 | Banners Reddit Celso e Gabriela | Após visual KZ | Pendente |
| D3 | Rebuild visual completo | Após visual KZ + assets | Pendente |
| D4 | YouTube: primeiro vídeo | Gabriela grava | Pendente |
| D5 | Clutch: primeiro review | Após primeiro cliente entregue | Pendente |
| D6 | Páginas editoriais no site | Após banco de queries v1 (Oxigênio) | Pendente |
| D7 | D1 flag no site | Após D1 reexecutado com metodologia v5.2 | Pendente |
| D8 | CNPJ em 5 arquivos | Aguardar confirmação do registro na Junta Comercial | Em andamento — transferência concluída, registro em curso |
| D9 | SSRN/Zenodo | Oxigênio com 10+ diagnósticos reais | Pendente |

**Os 5 arquivos do D8:**
- public/.well-known/ai-agents.json
- app/politica-privacidade/page.tsx
- app/termos/page.tsx
- docs/politica-privacidade-pira-labs-v1.md
- docs/termos-de-uso-pira-labs-v1.md

---

## REBUILD VISUAL COM KZ

### O que chega
Assets: paleta final, tipografia, logo tratado, fotos dos fundadores com tratamento de cor, og-image.png (1200x630px).

### Sequência de integração
1. Substituir tokens de cor/tipografia no CSS global
2. Substituir public/nos.png, public/celso-gama.jpg, public/gabriela-aguiar.jpg
3. Gerar nova public/og-image.png
4. Checar contraste WCAG AA (mínimo 4.5:1 texto normal, 3:1 texto grande)
5. npm run build sem erro
6. Lighthouse ≥ 90 em todas as categorias
7. Teste visual: 15 páginas desktop e mobile
8. Deploy na Vercel
9. Validar OG: LinkedIn Post Inspector + Facebook Sharing Debugger
10. Monitorar GSC 7 dias após deploy

### Benchmark visual — House of Beautiful Business
1. Worldview primeiro, serviço depois
2. Sequência da navegação como identidade
3. "Hire us" como postura de escassez
4. Minimalismo progressivo (a Pira ainda precisa de contexto suficiente)
5. Plataforma como destino

---

## DADOS CANÔNICOS — v13

### Empresa
- Nome público: PIRA LABS (sempre caixa alta)
- CNPJ: 46.954.891/0001-16 (transferência concluída, em registro na Junta Comercial)
- Tagline: Liberamos o próximo nível.
- Frase internacional: Where businesses find propulsion to new heights.
- Site: piralabs.com.br · Email: inspira@piralabs.com.br
- Substack: piralabs.substack.com — "Antes, Pira" (com vírgula)
- URL no site: /antes-pira

### Pricing
- Oxigênio Fast: R$3.500
- Oxigênio Full: R$5.300
- INSPIRA e TRANSPIRA: sob consulta
- INSPIRA Jurídico: R$12.500 a R$26.000 sob consulta

### Fundadores
- Celso Gama: 25 anos de experiência. COO. Bacharelando em Direito (Mackenzie). MIT Applied AI Certificate (em andamento, 2026). Nunca "bacharel" nem "advogado".
- Gabriela Aguiar: CEO. MIT Universal AI Foundational Modules (em andamento, 2026). Crunchbase: -a12a obrigatório.
- Diageo: nunca nomear — "multinacional do setor de bebidas"

### Números aprovados
- Margem -64% → +15% em 6 meses (multinacional do setor de bebidas)
- R$16M → R$163M em 24 meses (Cheil)
- 400h → 36h (jurídico)

### Vocabulário proprietário — o que entra no site
- Camada 1 (todo canal público): Antes. Creative Business Turnaround.
- Camada 2 (proposta, produto): INSPIRA, TRANSPIRA, RESPIRA, FAÍSCA, Oxigênio.
- Camada 3 (interno — NÃO entra no site): Sopro, Fôlego, Pulso, Acústica, Pressão, Suspiro.

---

## MAPA DE CANAIS — referência para ai-agents.json e llms.txt

| Tier | Canal | Estado |
|---|---|---|
| 1 ativo | LinkedIn Gabriela, Celso, Pira Labs | ✅ |
| 1 ativo | Substack "Antes, Pira" | ✅ 4 posts |
| 2 passivo | Medium @piralabs | ✅ Posts 1-4 |
| 2 passivo | Crunchbase (empresa + fundadores) | ✅ |
| 2 passivo | Clutch | ⏳ Aguardando aprovação |
| 2 passivo | GitHub github.com/PiraLabs/pira-labs | ✅ |
| 2 passivo | Google Business Profile | ✅ |
| 3 congelado | YouTube @piralabs | Estrutura criada, sem conteúdo — manter no sameAs |
| 3 congelado | Reddit | Perfis existem, produção suspensa |
| Desenvolvimento | Podcast "Antes, Pira" | Em planejamento |
| Desenvolvimento | Wikidata Q138846707, Q138846653, Q138846692 | ✅ Posts 1-4 |
| Desenvolvimento | Wikipedia | Pendente |

---

## KNOWLEDGE BASE DO PROJETO

| Arquivo | Função |
|---|---|
| PiraLabs_Documento_Mestre_v13.md | Fonte da verdade |
| wireframe-completo-site-pira-labs-v3_5.md | Estrutura técnica |
| estado-tecnico-site-pira-labs-17mai2026.md | Estado do repositório |
| Memory.md | Arsenal de fichas |
| my-rules.md | Regras de postura |
| arsenal-code-skills-celso-v3.md | Skills Claude Code |
| handoff-site-piralabs-v2.md | Este arquivo |

Não subir neste projeto: handoffs GEO, rubrica Oxigênio, my-voice (pertencem aos projetos respectivos). pacote-final-v3.md fica na raiz do repositório Code, não no KB do projeto Claude.ai.

---

## ACESSO E FERRAMENTAS

| Ferramenta | Acesso |
|---|---|
| Claude Code | Terminal — ativar Auto Mode |
| deploy.bat | Pasta raiz |
| Vercel | vercel.com/piralabs-projects |
| Google Search Console | search.google.com/search-console |
| GA4 | analytics.google.com |
| Bing Webmaster Tools | bing.com/webmasters |
| Facebook Debugger | developers.facebook.com/tools/debug |
| Fillout | fillout.com |

Bug conhecido: deploy.bat sem mensagem de commit causa aviso "Aborting" mas push ocorre normalmente.

---

*Handoff Site PIRA LABS v2.0 · Maio 2026*
*Substitui handoff-site-piralabs-18mai2026.md*
*Decisões incorporadas: /antes-pira com 301 · YouTube mantido no sameAs · D8 em andamento*
