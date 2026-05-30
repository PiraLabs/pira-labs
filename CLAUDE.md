# CLAUDE.md
**Versão:** 3.6 · Maio 2026
**Branch:** rebuild-v2
**Ler este arquivo inteiro antes de qualquer ação.**
**Comando de inicialização:** `/init` no início de cada sessão

---

## CONTEXTO

Celso Gama, COO e cofundador da PIRA LABS. Estamos fazendo o rebuild completo do site
piralabs.com.br na branch rebuild-v2. O site atual continua no ar em master.
Este rebuild é novo build a partir do zero, não edição do site existente.
Fonte da verdade: PiraLabs_Documento_Mestre_v14.md

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
3. Botão primário: fundo `#EB5C2E` (orange) com texto `#0C0F16` (ink). Nunca off-white.
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
11. Gabriela: "docente em educação executiva" — nunca ecossistemas globais, nunca Plug and Play como conexão atual
12. /faisca/juridica é página própria. Nunca redirecionar para /transpira/juridico.
13. CTA do header: "Respire" simples, sem microcopy
14. CTA de página: componente <CTAWithMicrocopy /> com microcopy contextual como prop
15. "Respondemos em até dois dias úteis." em toda página com CTA
16. Não inventar copy. Onde não houver conteúdo: `<!-- COPY PENDENTE: [bloco-id] -->`
17. /plan antes de qualquer tarefa não trivial. Aguardar confirmação antes de executar.
18. GEO-SFE — aplicar em todas as páginas do rebuild:
    - Parágrafos: 150 a 300 palavras por bloco
    - 25 a 35% do conteúdo em tabelas ou listas
    - Bold em 5 a 10% do conteúdo (prioridade: início de frase > fronteira de seção)
    - Ao menos um número concreto nos primeiros 100 palavras de cada página
    - Links internos: cada página linka para ao menos 2 páginas de produto
19. Lighthouse alvo: Performance ≥96 mobile (não regredir do score atual do site)
20. "Mentorias" não existe mais como produto. Não mencionar em nenhum arquivo.
21. Imersão em IA: R$7.100. Pocket do INSPIRA: R$3.900. Sem outro valor.
22. Produto "Mentorias Especializadas" foi descontinuado. Não tem substituto direto.
23. Camada 3 (Sopro, Fôlego, Pulso, Acústica, Pressão, Suspiro): aparecem nos nomes
    das seis camadas do INSPIRA mas sem detalhar arquitetura interna no site.
24. Direção visual: 70% fundo escuro (ink/deep-teal), 30% fundo claro (off-white).
    Seções claras são respiro intencional, não padrão. Nunca inverter essa proporção.
25. Logo animado: vinheta de 5s, uso editorial pontual (não fundo de hero nem splash).
    Entra uma vez por página, no bloco de Método (HOME-3) ou em /sobre.
    Nunca em loop contínuo como textura. Fallback: imagem estática para mobile e
    prefers-reduced-motion. Arquivo: public/logo-animation.mp4 + .webm.
26. Nós e conectores: sistema animado por scroll (IntersectionObserver + CSS transforms).
    Nós aparecem desconectados e se conectam conforme o usuário desce a página.
    Nunca partículas em loop livre no hero — causa dano de performance no Lighthouse.

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

## TIPOGRAFIA (SISTEMA KZ — decisão D10, Trilho B)

AtypDisplay (`font-atypDisplay` / alias `font-display`): H1–H4, CTAs, wordmark
AtypText (`font-atypText` / alias `font-body`): body, navegação, UI, botões, formulários, FAQs

Variáveis CSS: `--font-atyp-display` e `--font-atyp-text`. Fallback: Plus Jakarta Sans.
Cormorant e Space Grotesk foram removidos no Trilho B. Não reintroduzir.

---

## PALETA — confirmada pelo kit KZ (Maio 2026)

```css
--color-ink:        #0C0F16;   /* fundo dominante — 70% das seções */
--color-deep-teal:  #05262E;   /* fundo alternativo escuro */
--color-teal:       #004757;   /* destaque, bordas, elementos secundários */
--color-orange:     #EB5C2E;   /* CTA primário, acento — cor de ação */
--color-off-white:  #E8E0D6;   /* fundo claro — 30% das seções, texto sobre escuro */
```

Cinco cores. Sem peach (#F2A85E — removido: não consta na paleta oficial KZ).
Nota: KZ usa preto puro (#000000) como variante de ink em alguns contextos.
Resolver com o guia completo quando o kit chegar. Até lá, usar #0C0F16.

Kit KZ pendente: quando chegar, atualizar tokens, fotos (nos.png, celso-gama.jpg,
gabriela-aguiar.jpg) e og-image.png (1200×630px). Só trocar tokens e imagens — sem
refatorar estrutura.

---

## SISTEMA DE NÓS E CONECTORES — regras de implementação

O símbolo da marca é um sistema de nós (círculos) e conectores (linhas).
A metáfora: sistema disperso → sistema em operação → sistema pleno.
Essa progressão mapeia a jornada do cliente e deve aparecer no scroll da home.

**Regras:**
- Implementar com SVG inline + IntersectionObserver. Sem canvas, sem WebGL.
- Nós: círculos ocos (stroke) e sólidos (fill). Cores: orange, teal, off-white sobre fundo escuro.
- Conectores: linhas finas (1px), opacidade 40-60%, animadas com stroke-dashoffset.
- Animação de entrada: 0.6s ease-out por nó, offset de 80ms entre nós consecutivos.
- prefers-reduced-motion: remover transforms e transitions, manter layout estático.
- Mobile: simplificar o sistema (menos nós, sem animação de conector — só fade-in).
- Nunca bloquear o texto principal. Nós ficam atrás do conteúdo (z-index < 0 ou pointer-events: none).

**Onde aparece:**
- Hero da home: nós desconectados, começam a se conectar no scroll
- HOME-3 (Método): conexão completa ao chegar na seção — metáfora visual do método
- HOME-4 (Provas): nó de resultado conectado ao sistema
- /sobre: versão estática menor, decorativa
- Outros: não replicar sem decisão explícita do Celso

---

## SISTEMA DE ORIGENS (18 oficiais)

```typescript
export const ORIGINS = {
  HOME:                         "home",
  SOBRE:                        "sobre",
  INSPIRA:                      "inspira",
  INSPIRA_JURIDICO:             "inspira_juridico",
  OXIGENIO:                     "oxigenio",
  TRANSPIRA:                    "transpira",
  TRANSPIRA_JURIDICO:           "transpira_juridico",
  TRANSPIRA_UNIFICADO:          "transpira_unificado",
  FAISCA:                       "faisca",
  FAISCA_JURIDICA:              "faisca_juridica",
  FAISCA_IMERSA:                "faisca_imersa",
  FAISCA_POCKET:                "faisca_pocket",
  FAISCA_PALESTRAS:             "faisca_palestras",
  FAISCA_WORKSHOPS:             "faisca_workshops",
  FAISCA_CLEVEL:                "faisca_clevel",
  CREATIVE_BUSINESS_TURNAROUND: "creative_business_turnaround",
  HEADER_GLOBAL:                "header_global",
  NOT_FOUND:                    "404",
} as const;
```

Nota: `direto` foi removido do sistema de origens oficial (v4). Não incluir em rotas.

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
| wireframe-completo-site-pira-labs-v4.md | Antes de qualquer página — USAR ESTE, não v3.9.1 nem v3.5 |
| componentes-compartilhados-v1.md | Antes de Header, Footer, componentes shared |
| copy-home-pira-labs-v2_2.md | Antes de implementar / |
| copy-paginas-internas-pira-labs-v4_4.md | Antes de qualquer página interna |
| copy-inspira-oxigenio-v1_1.md | Antes de /inspira/oxigenio |
| copy-creative-business-turnaround-v1_2.md | Antes de /creative-business-turnaround |
| copy-faisca-imersa-em-ia-v1.md | Antes de /faisca/imersa-em-ia |
| copy-faisca-pocket-v1.md | Antes de /faisca/pocket |
| copy-paginas-legais-v1.md | Antes de /politica-privacidade, /termos, /cookies |
| politica-privacidade-pira-labs-v1.md | Conteúdo jurídico de /politica-privacidade |
| termos-de-uso-pira-labs-v1.md | Conteúdo jurídico de /termos |
| schemas-json-ld.ts | Antes de qualquer schema JSON-LD |
| prompt-fillout-notion-v2.md | Antes de implementar qualquer formulário |
| pos-deploy/handoff-geo-aeo-23mai2026.md | Antes de implementar qualquer página editorial |

**Discrepâncias a saber:**
- componentes-compartilhados-v1.md tem CTA "Falar com a PIRA" e href /antes-da-crise.
  Wireframe v4 prevalece: CTA "Respire", href /antes-pira, label "Antes, Pira".
- componentes-compartilhados-v1.md pareado com wireframe v3.5. Wireframe v4 prevalece.
- copy-faisca-imersa-em-ia-v1.md e copy-faisca-pocket-v1.md vêm do projeto de conteúdo.
  Se ainda não disponíveis em docs/ quando a Fase 6 iniciar: usar COPY PENDENTE em todos os blocos.

**NÃO usar:** copy-vertical-juridica-v1.md (histórico), qualquer arquivo v3.4 e abaixo,
wireframe v3.9.1 ou anterior, PiraLabs_Documento_Mestre_v13.md ou anterior.

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
- Toggle de idioma PT/EN persiste em cookie pira_lang
- Vocabulário proprietário (INSPIRA, TRANSPIRA, FAÍSCA, RESPIRA, Oxigênio, "Antes, Pira") não traduz
- Logo animado requer ajuste de Content-Security-Policy no next.config.js para autoplay muted
- Vídeo do logo: servir public/logo-animation.webm (primário) + public/logo-animation.mp4 (fallback)
  Gerar versão WebM antes de implementar o componente de vídeo
- lib/constants.ts é a fonte da verdade para ORIGINS, FLAGS, VAGAS_OXIGENIO e FILLOUT_URL_*
  Qualquer alteração nesses valores passa por lá — nunca hardcodar em página

---

## ORDEM DE IMPLEMENTAÇÃO

> **Estado atual (Mai 2026):** Fases 1–9 concluídas. Fase 10 (Lighthouse ≥96, QA mobile,
> verificação das 18 origens) é a única pendente.
> A lista abaixo é referência histórica de decisões de implementação.

Fase 1: globals.css, tailwind.config.ts, layout.tsx, next.config.js (com todos os redirects
        abaixo), robots.ts, sitemap.ts

        Paleta no globals.css:
        --color-ink: #0C0F16 | --color-deep-teal: #05262E | --color-teal: #004757
        --color-orange: #EB5C2E | --color-off-white: #E8E0D6
        Sem peach. Sem outra cor fora dessas cinco.

        Direção visual no Tailwind:
        bg-ink como classe padrão de seção escura
        bg-off-white como classe de seção clara — usar com moderação (30%)
        bg-deep-teal como alternativa escura para seções de destaque

        Redirects obrigatórios no next.config.js desta fase:
        — /antes-da-crise → /antes-pira (301)
        — /antesdacrise → /antes-pira (301)
        — /imersa → /faisca/imersa-em-ia (301)
        — /pocket → /faisca/pocket (301)
        — /oxigenio → /inspira/oxigenio (301)
        — /oxigenio-ia-search → /inspira/oxigenio (301)
        — /faisca/ia-search → /inspira/oxigenio (301)
        — /turnaround → /creative-business-turnaround (301)
        — /cbt → /creative-business-turnaround (301)
        — /servicos → /inspira (301)
        — /cases → /#provas (301)
        — /blog → /antes-pira (301)
        — /news → /antes-pira (301)
        — /services → /inspira (301)
        — /about → /sobre (301)
        — /contact → /contato (301)
        — /en → / (301)
        — /en/services → /inspira (301)
        — /en/about → /sobre (301)
        — /en/cases → /#provas (301)
        — /en/contact → /contato (301)
        — /es → / (301)
        — /es/sobre → /sobre (301)
        — /es/servicos → /inspira (301)
        — /es/cases → /#provas (301)
        — /es/contato → /contato (301)
        — /empresa-cresce-margem-some → /crescimento-sem-margem (301)
        Todos preservam query strings (UTMs).

Fase 2: Componentes shared:
        Header, Footer, PageHeader, CTA, FAQ, FinalCTA, CTAWithMicrocopy, FilloutEmbed
        Componentes novos obrigatórios (v4):
        <TranspiraConfigurations />, <UnifiedContract />,
        <FaiscaGroup1 />, <FaiscaGroup2 />, <FaiscaGroup3 />,
        <OfferHero />, <TargetProfile />, <ProcessSteps />,
        <HowFirstContact />, <FounderProfile />, <MediaKit />
        Componentes visuais novos:
        <NodeSystem /> — nós e conectores animados por scroll (SVG + IntersectionObserver)
        <LogoVideo /> — player editorial do logo animado com fallback estático e prefers-reduced-motion

Fase 3: Home (/)
        Implementar progressão de nós via <NodeSystem /> nas seções HOME-1 a HOME-4
        Logo animado em HOME-3 (Método) via <LogoVideo hasVideo={false} /> por padrão
        até arquivo otimizado disponível em public/

Fase 4: /sobre e /creative-business-turnaround
        (expandir /cbt com tabela CBT vs tradicional — ver handoff GEO)

Fase 5: /inspira/oxigenio (página crítica de conversão)

Fase 6: /inspira, /transpira, /faisca, /faisca/imersa-em-ia, /faisca/pocket,
        /antes-pira, /contato
        — /transpira requer <TranspiraConfigurations /> e <UnifiedContract />
        — /faisca requer <FaiscaGroup1 />, <FaiscaGroup2 />, <FaiscaGroup3 />
        — copy de imersa-em-ia e pocket devem estar em docs/ antes de iniciar esta fase

Fase 7: Verticais jurídicas (/inspira/juridico, /transpira/juridico, /faisca/juridica)

Fase 8: Legais e 404 (/politica-privacidade, /termos, /cookies, not-found.tsx)

Fase 8b: Páginas editoriais GEO — Deploy A (copy gerada pelo Code com specs GEO-SFE):
         /crescimento-sem-margem (6 causas de margem sumindo em empresas de serviços)
         /diagnostico-empresa-servicos (formato diagnóstico em 6 perguntas do ICP)

Fase 8c: EN mínimo viável:
         /en (home EN), /en/about, /en/creative-business-turnaround, /en/contact
         — hreflang em todas as páginas com versão equivalente
         — toggle PT/EN no header (cookie pira_lang)
         — estrutura app/[locale]/page.tsx com locale enum: 'pt-BR', 'en'

Fase 9: Schemas JSON-LD em páginas de produto + llms.txt + llms-full.txt + ai-agents.json
         Incluir produtos novos: Imersão em IA (R$7.100), Pocket do INSPIRA (R$3.900)
         Schemas das páginas editoriais: após conteúdo estabilizado (decisão handoff GEO)

Fase 10: Lighthouse ≥96 mobile, testes, QA, deploy para preview Vercel

---

## TASKS/LESSONS.MD

Atualizar ao final de cada sessão:
- O que foi concluído (com prova técnica)
- Problemas encontrados e como foram resolvidos
- O que fica para a próxima sessão

Nunca marcar tarefa como concluída sem teste real.

---

*CLAUDE.md v3.5 · PIRA LABS rebuild-v2 · Maio 2026*
*Alterações v3.4: orange #EA6335 → #EB5C2E · deep-teal #05262D → #05262E · teal #004756 → #004757*
*peach removido · direção visual 70/30 · sistema de nós e conectores · logo animado*
*Alterações v3.5: redirect /empresa-cresce-margem-some → /crescimento-sem-margem adicionado*
*Alterações v3.6: tipografia atualizada para sistema KZ/AtypDisplay+AtypText (Trilho B) · fases 1–9 marcadas como concluídas · lib/constants.ts documentada como fonte da verdade*
