# CLAUDE.md
**Versão:** 3.1 · Maio 2026
**Branch:** rebuild-v2
**Ler este arquivo inteiro antes de qualquer ação.**
**Comando de inicialização:** `/init` no início de cada sessão

---

## CONTEXTO

Celso Gama, COO e cofundador da PIRA LABS. Estamos fazendo o rebuild completo do site
piralabs.com.br na branch rebuild-v2. O site atual continua no ar em master.
Este rebuild é novo build a partir do zero, não edição do site existente.
Fonte da verdade: PiraLabs_Documento_Mestre_v13.md

---

## COMANDOS

```bash
npm run dev           # servidor local em localhost:3000
npm run build         # build de produção — obrigatório antes de qualquer deploy
npm run lint          # ESLint — resolver antes de commitar
```

> Shell Bash PERMANENTEMENTE inoperante neste ambiente Windows.
> Nunca usar a Bash tool. Todos os comandos rodam via `! comando` no Code
> ou no PowerShell separado pelo Celso.

---

## REGRAS ABSOLUTAS — NUNCA VIOLAR

1. Sem travessão em nenhum texto público
2. PIRA LABS sempre em caixa alta
3. Botão primário: fundo `#EA6335` (orange) com texto `#0C0F16` (ink). Nunca off-white.
4. Frase canônica na home dentro dos primeiros 150 termos, sentença única sem quebra:
   "A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para
   empresas de serviços que precisam agir antes que a janela se feche."
5. Oxigênio: Fast R$3.500 / Full R$5.300 — sem outro valor em nenhum arquivo
6. Substack: "Antes, Pira" (com vírgula) — rota /antes-pira — nunca /antes-da-crise
7. Diageo → "multinacional do setor de bebidas". Celso na agência, não na Diageo.
8. Samsung → "uma grande marca de tecnologia"
9. MIT sempre com o nome do programa:
   Gabriela: "Universal AI Foundational Modules (MIT)"
   Celso: "Applied AI Certificate Program (MIT)"
10. Celso: "bacharelando em Direito (Mackenzie)" — nunca "advogado" ou "bacharel"
11. /faisca/juridica é página própria. Nunca redirecionar para /transpira/juridico.
12. CTA do header: "Respire" simples, sem microcopy
13. CTA de página: componente <CTAWithMicrocopy /> com microcopy contextual como prop
14. "Respondemos em até dois dias úteis." em toda página com CTA
15. Não inventar copy. Onde não houver conteúdo: `<!-- COPY PENDENTE: [bloco-id] -->`
16. /plan antes de qualquer tarefa não trivial. Aguardar confirmação antes de executar.
17. GEO-SFE — aplicar em todas as páginas do rebuild:
    - Parágrafos: 150 a 300 palavras por bloco
    - 25 a 35% do conteúdo em tabelas ou listas
    - Bold em 5 a 10% do conteúdo (prioridade: início de frase > fronteira de seção)
    - Ao menos um número concreto nos primeiros 100 palavras de cada página
    - Links internos: cada página linka para ao menos 2 páginas de produto
18. Lighthouse alvo: Performance ≥96 mobile (não regredir do score atual do site)

---

## STACK

- Framework: Next.js 15, App Router
- Linguagem: TypeScript
- Estilo: Tailwind CSS
- Deploy: Vercel (via Vercel MCP quando disponível)
- Repositório: github.com/PiraLabs/pira-labs — branch rebuild-v2
- Formulário: Fillout (embed via NEXT_PUBLIC_FILLOUT_URL)
- CRM: Notion

---

## TIPOGRAFIA (SISTEMA CAMINHO C)

Space Grotesk (`--font-grotesk`): body, headers, navegação, UI, botões, formulários, FAQs
Cormorant Garamond (`--font-cormorant`): frases canônicas, citações dos fundadores,
números de destaque

Cormorant NÃO entra em: headers de seção, navegação, body padrão, UI, botões, formulários.

---

## PALETA

```css
--color-ink:        #0C0F16;
--color-deep-teal:  #05262D;
--color-teal:       #004756;
--color-orange:     #EA6335;
--color-peach:      #F2A85E;
--color-off-white:  #E8E0D6;
```

Tokens provisórios até assets da KZ chegarem. Quando chegarem: só trocar tokens e imagens.

---

## SISTEMA DE ORIGENS (13 oficiais)

```typescript
export const ORIGINS = {
  HOME: "home", SOBRE: "sobre", INSPIRA: "inspira",
  INSPIRA_JURIDICO: "inspira_juridico", OXIGENIO: "oxigenio",
  TRANSPIRA: "transpira", TRANSPIRA_JURIDICO: "transpira_juridico",
  FAISCA: "faisca", FAISCA_JURIDICA: "faisca_juridica",
  CREATIVE_BUSINESS_TURNAROUND: "creative_business_turnaround",
  HEADER_GLOBAL: "header_global", NOT_FOUND: "404", DIRETO: "direto",
} as const;
```

---

## VARIÁVEIS DE AMBIENTE (.env.local — não commitar)

```
NEXT_PUBLIC_FILLOUT_URL=[copiar do .env.local atual]
NEXT_PUBLIC_FLAG_D1=false
NEXT_PUBLIC_FLAG_D4=false
NEXT_PUBLIC_FLAG_PULSO=false
NEXT_PUBLIC_VAGAS_OXIGENIO=5
```

Copiar NEXT_PUBLIC_FILLOUT_URL do .env.local existente na master.
Configurar as mesmas variáveis na Vercel em Project Settings > Environment Variables.

---

## ARQUIVOS DE REFERÊNCIA (ler antes de implementar cada fase)

Todos em docs/ exceto onde indicado.

| Arquivo | Quando ler |
|---|---|
| pacote-final-v3.md | Início de cada sessão |
| wireframe-completo-site-pira-labs-v3_9_1.md | Antes de qualquer página — USAR ESTE, não v3.5 |
| componentes-compartilhados-v1.md | Antes de Header, Footer, componentes shared |
| copy-home-pira-labs-v2_1.md | Antes de implementar / |
| copy-paginas-internas-pira-labs-v4_3.md | Antes de qualquer página interna |
| copy-inspira-oxigenio-v1.md | Antes de /inspira/oxigenio |
| copy-creative-business-turnaround-v1_1.md | Antes de /creative-business-turnaround |
| copy-paginas-legais-v1.md | Antes de /politica-privacidade, /termos, /cookies |
| politica-privacidade-pira-labs-v1.md | Conteúdo jurídico de /politica-privacidade |
| termos-de-uso-pira-labs-v1.md | Conteúdo jurídico de /termos |
| schemas-json-ld.ts | Antes de qualquer schema JSON-LD |
| prompt-fillout-notion-v2.md | Antes de implementar qualquer formulário |
| pos-deploy/handoff-geo-aeo-23mai2026.md | Antes de implementar qualquer página editorial |

**Discrepâncias a saber:**
- componentes-compartilhados-v1.md tem CTA "Falar com a PIRA" e href /antes-da-crise.
  Wireframe v3.9.1 prevalece: CTA "Respire", href /antes-pira, label "Antes, Pira".
- componentes-compartilhados-v1.md pareado com wireframe v3.5. Wireframe v3.9.1 prevalece.

**NÃO usar:** copy-vertical-juridica-v1.md (histórico), qualquer arquivo v3.4 e abaixo.

---

## DECISÕES TÉCNICAS HERDADAS DO SITE ATUAL

- FilloutEmbed requer Suspense boundary (useSearchParams no App Router)
- FilloutEmbed lê ?origem= internamente — /contato não precisa passar searchParams
- title: { absolute: "..." } em páginas internas (evita duplicação com template)
- FinalCTA não suporta CTA secundário — páginas com dois CTAs constroem inline com bg-ink
- Blocos condicionais por flag: `{FLAGS.X ? <Componente /> : null}` — não usar && com booleano
- og:image: sempre URL absoluta. metadataBase declarado no root layout.
- useState dentro de .map() viola Rules of Hooks — extrair submenu mobile para componente
- <section id="provas"> obrigatório na home (destino de redirect de /cases)
- container-site: classe custom em globals.css com max-width + padding lateral
- public/robots.txt: deletar no rebuild. Next.js serve app/robots.ts, não o estático.

---

## ORDEM DE IMPLEMENTAÇÃO

Fase 1: globals.css, tailwind.config.ts, layout.tsx, next.config.js, robots.ts, sitemap.ts
Fase 2: Componentes shared (Header, Footer, CTA, FAQ, FinalCTA, CTAWithMicrocopy, FilloutEmbed)
Fase 3: Home (/)
Fase 4: /sobre e /creative-business-turnaround (expandir com tabela CBT vs tradicional — ver handoff GEO)
Fase 5: /inspira/oxigenio (página crítica de conversão)
Fase 6: /inspira, /transpira, /faisca, /antes-pira, /contato
Fase 7: Verticais jurídicas (/inspira/juridico, /transpira/juridico, /faisca/juridica)
Fase 8: Legais e 404 (/politica-privacidade, /termos, /cookies, not-found.tsx)
Fase 8b: Páginas editoriais GEO — Deploy A (copy gerada pelo Code com specs GEO-SFE):
         /crescimento-sem-margem (6 causas de margem sumindo em empresas de serviços)
         /diagnostico-empresa-servicos (formato diagnóstico em 6 perguntas do ICP)
Fase 9: Schemas JSON-LD em páginas de produto + llms.txt + ai-agents.json
         Páginas editoriais recebem schemas após conteúdo estabilizado (decisão handoff GEO)
Fase 10: Lighthouse ≥96 mobile, testes, QA, deploy para preview Vercel

---

## TASKS/LESSONS.MD

Atualizar ao final de cada sessão:
- O que foi concluído (com prova técnica)
- Problemas encontrados e como foram resolvidos
- O que fica para a próxima sessão

Nunca marcar tarefa como concluída sem teste real.

---

*CLAUDE.md v3.1 · PIRA LABS rebuild-v2 · Maio 2026*
