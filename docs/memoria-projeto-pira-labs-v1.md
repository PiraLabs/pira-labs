# Memória do Projeto · Site PIRA LABS v3.5
**Iniciado:** Maio 2026
**Atualizar:** ao final de cada sessão Claude Code ou cada decisão relevante

---

## STATUS GERAL

| Fase | Status | Data |
|---|---|---|
| Estratégia e posicionamento | ✅ Concluído | Março 2026 |
| Copy (todas as páginas) | ✅ Concluído | Maio 2026 |
| Arquitetura técnica e GEO/AEO | ✅ Concluído | Maio 2026 |
| Validação GPT (6 camadas, C=0,96) | ✅ Concluído | Maio 2026 |
| Build (Claude Code) | 🔄 Iniciando | — |
| Deploy | ⏳ Pendente | — |
| Fillout + Notion | ⏳ Pendente | — |
| GEO/AEO baseline | ⏳ Pendente | — |

---

## FASES DO BUILD

### Fase 1 — Estrutura base
- [ ] Next.js 15 + TypeScript + Tailwind CSS configurados
- [ ] Fontes: Space Grotesk (`--font-grotesk`) + Cormorant Garamond (`--font-cormorant`)
- [ ] Tokens CSS em `globals.css`
- [ ] Tailwind config com paleta completa
- [ ] Layout root com Header e Footer
- [ ] `next.config.js` com redirects e headers de segurança
- [ ] `robots.ts` com 21 crawlers IA
- [ ] `sitemap.ts` com 15 URLs
- [ ] `public/llms.txt`
- [ ] `public/.well-known/ai-agents.json`

### Fase 2 — Páginas institucionais
- [ ] `/sobre`
- [ ] `/creative-business-turnaround`
- [ ] `/contato` (embed Fillout, repassa `?origem=`)

### Fase 3 — Páginas de serviço
- [ ] `/inspira`
- [ ] `/transpira`
- [ ] `/faisca`
- [ ] `/antes-da-crise`

### Fase 4 — Página crítica Oxigênio
- [ ] `/inspira/oxigenio` (página de conversão da campanha)
- [ ] Schema Service com Offer + preços + vagas
- [ ] Integração Fillout com `origem=oxigenio`
- [ ] Placeholder D4 (vídeo de método)
- [ ] Placeholder D1 (prova social)

### Fase 5 — Vertical jurídica
- [ ] `/inspira/juridico`
- [ ] `/transpira/juridico`
- [ ] `/faisca/juridica`

### Fase 6 — Camada GEO/AEO
- [ ] Schemas JSON-LD em todas as páginas
- [ ] `lib/schemas/organization.ts`
- [ ] `lib/schemas/persons.ts`
- [ ] `lib/schemas/breadcrumb.ts`
- [ ] `lib/schemas/services/` (um por produto)
- [ ] FAQPage em todas as páginas relevantes
- [ ] `llms-full.txt` gerado por script pós-build

### Fase 7 — Polimento e deploy
- [ ] Lighthouse ≥ 90 em Mobile e Desktop
- [ ] Teste em iOS Safari e Chrome Android
- [ ] Teste das 13 origens no Fillout
- [ ] HTTPS forçado, HSTS ativo
- [ ] Deploy via merge para main na Vercel
- [ ] Sitemap submetido no Search Console
- [ ] Google Business Profile atualizado

---

## PROBLEMAS ENCONTRADOS

*Registrar aqui cada problema identificado durante o build, com data, descrição e resolução.*

| Data | Fase | Problema | Resolução | Status |
|---|---|---|---|---|
| — | — | — | — | — |

---

## DECISÕES TOMADAS DURANTE O BUILD

*Registrar aqui qualquer decisão nova tomada pelo Code ou pelo Celso durante o build.*

| Data | Decisão | Motivo |
|---|---|---|
| — | — | — |

---

## ARQUIVOS CANÔNICOS (fonte de verdade)

Sempre que houver divergência entre arquivos, esses prevalecem:

| Área | Arquivo canônico |
|---|---|
| Instrução geral ao Code | `pacote-final-v2_3.md` |
| Stack e código técnico | `handoff-tecnico-v2_2.md` |
| Arquitetura de rotas | `wireframe-completo-site-pira-labs-v3_5.md` |
| Copy home | `copy-home-pira-labs-v2_1.md` |
| Copy páginas internas | `copy-paginas-internas-pira-labs-v4_3.md` |
| Copy Oxigênio | `copy-inspira-oxigenio-v1.md` |
| Copy CBT | `copy-creative-business-turnaround-v1_1.md` |
| Copy páginas legais | `copy-paginas-legais-v1.md` |
| Schemas JSON-LD | `schemas-json-ld.ts` |
| Redirects e headers | `next.config.js` |
| Sitemap | `sitemap.ts` |
| Robots | `robots.ts` |
| llms.txt | `llms.txt` |
| Formulário e CRM | `prompt-fillout-notion-v2.md` |
| GEO/AEO baseline | `geo-aeo-baseline-pira-labs-v1_1.md` |

**NÃO usar como input do Code:**
- `copy-vertical-juridica-v1.md` (arquivo histórico)
- Qualquer arquivo de versão anterior (v3.4 e abaixo, v4.2 e abaixo)

---

## REGRAS ABSOLUTAS (nunca violar)

1. **Sem travessão** em nenhum texto público
2. **PIRA LABS** sempre em caixa alta
3. **Diageo** sempre anonimizada como "multinacional do setor de bebidas". Celso atuou na agência, não na Diageo.
4. **Samsung** sempre anonimizada como "grande marca do setor de tecnologia"
5. **MIT**: sempre o nome exato do programa. Gabriela: "Universal AI Foundational Modules". Celso: "Applied AI Certificate Program"
6. **Celso** nunca chamado de advogado ou bacharel. "Cursando último ano de Direito na Mackenzie"
7. **Modelo B TRANSPIRA**: "assistant as a service". Nunca "estagiário jurídico". Todo material passa pelo advogado habilitado do cliente.
8. **Botão primário**: `orange` com texto `ink`. Nunca `off-white` (falha WCAG AA)
9. **`/faisca/juridica`**: página própria, sem redirect. Nunca redirecionar para `/transpira/juridico`
10. **Fonte de verdade do formulário**: `prompt-fillout-notion-v2.md`, não a seção /contato da copy

---

## NOTAS TÉCNICAS IMPORTANTES

**Variável Fillout:** `NEXT_PUBLIC_FILLOUT_URL` (não `FILL_OUT_FORM_URL`). Precisa do prefixo `NEXT_PUBLIC_` para ficar disponível no client side do Next.js.

**Fontes:** variáveis `--font-grotesk` (Space Grotesk) e `--font-cormorant` (Cormorant Garamond). Quando a Groteske oficial da KZ chegar, trocar apenas o import — as variáveis permanecem.

**`/cases` no GSC:** redireciona para `/#provas`. A seção HOME-4 precisa ter `<section id="provas">` obrigatoriamente.

**`/sobre` e `/contato` no GSC:** reportam erro de redirect no site atual (bug do site provisório). No v3.5 retornam 200 normalmente. Não adicionar redirect para essas rotas.

**`unsafe-eval` na CSP:** reavaliado no build de produção. Remover se não houver dependência real.

**`Atribuído a` no Notion:** campo Pessoa. Funciona se Gabriela e Celso estiverem como membros do workspace. Campo `Responsável inicial` (Select) como contingência.

**`llms-full.txt`:** gerado por script após build concluído. Não bloqueia deploy. Vai em `public/llms-full.txt`.

---

## CONTATOS E ACESSOS

| Serviço | Detalhe |
|---|---|
| Site | piralabs.com.br |
| Repositório | github.com/PiraLabs/pira-labs (branch: master) |
| Deploy | Vercel |
| DNS | Locaweb |
| Email | Google Workspace |
| Contato institucional | inspira@piralabs.com.br |
| Wikidata PIRA LABS | Q138846707 |
| Wikidata Gabriela | Q138846653 |
| Wikidata Celso | Q138846692 |

---

## CHANGELOG

| Data | Evento |
|---|---|
| Maio 2026 | Validação GPT completa (6 camadas, C=0,96). Aprovado para build. |
| Maio 2026 | Copy de todas as páginas finalizada e validada. |
| Maio 2026 | Arquitetura técnica, GEO/AEO e operação definidas. |
| Maio 2026 | Site provisório no ar há 2 meses. 3 URLs indexadas pelo Google. |

---

*Memória do Projeto · PIRA LABS v3.5 · Atualizar ao final de cada sessão*
