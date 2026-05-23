# Pacote Final v3.0 · Refação do Site PIRA LABS
**Versão:** 3.0 · Maio 2026
**Substitui:** pacote-final-v2_3.md
**Base:** PiraLabs_Documento_Mestre_v13.md (aprovado GPT, C=0,94)
**Branch de trabalho:** `feature/refacao-v13`

**Mudanças v2.3 → v3.0:**
- Contexto atualizado: site base no ar desde mai/2026, escopo agora é refação alinhada ao v13
- Portfólio corrigido: pricing, naming e descrições conforme v13 Seção 8
- Oxigênio Fast R$3.500 / Full R$5.300 (substitui R$6.200/R$9.800)
- FAÍSCA: descrição corrigida (não é universo educacional)
- Substack: "Antes, Pira" (substitui "Antes da Crise")
- CNPJ: transferência concluída, em registro na Junta Comercial
- Memory.md adicionado como referência de arsenal e skills
- Seção de automação e skills (.claude/, comandos, MCPs, rotinas)
- Vercel MCP disponível para deploy direto via Code

---

## COMO USAR ESTE DOCUMENTO

Briefing único para o Claude Code na refação. Cole na primeira mensagem junto com o `[Environment Snapshot]`.

O Code lê este documento e os arquivos referenciados antes de qualquer ação. Não inventa conteúdo. Onde copy estiver pendente, deixa `<!-- COPY PENDENTE: [bloco-id] -->`. Usa `/plan` antes de qualquer tarefa não trivial. Aguarda confirmação antes de executar.

---

## CONTEXTO INSTITUCIONAL (v13 canônico)

**Frase canônica obrigatória** — aparece literal na home dentro dos primeiros 150 termos, em sentença única sem quebra:
> A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes que a janela se feche.

### Portfólio ativo (fonte: v13 Seção 8)

**FAÍSCA**
Porta de entrada. C-level advisory. Oficina executiva de 4 horas: mapa de oportunidades e riscos, critérios de uso de IA, próximos passos. Não presta consultoria jurídica.

**FAÍSCA Jurídica**
Oficina executiva presencial com Celso Gama. Para escritórios, áreas jurídicas, instituições de ensino. Aviso obrigatório em toda comunicação: não presta consultoria jurídica.

**INSPIRA**
Diagnóstico em seis camadas. Termina quando o problema real está nomeado e há plano. Prazo de validade: 6 a 9 meses. Sob consulta.

**INSPIRA Jurídico**
Cinco leituras com lente jurídica, 2 a 3 semanas. Pricing: R$12.500 a R$26.000.
Quem não deveria contratar: quem busca laudo LGPD ou certificação de compliance.

**Oxigênio IA Search**
Diagnóstico de presença e citabilidade em IAs. Produto autônomo ou dentro do FÔLEGO do INSPIRA.
- Fast: R$3.500 — 5 queries × 4 plataformas × 3 execuções = 60 respostas, relatório 2 páginas, sessão 45 min
- Full: R$5.300 — tudo do Fast + frente competitiva, 200 respostas adicionais, Gap com causa, 3 ações, âncora financeira 3 cenários, sessão 60 min

Filtro negativo (bloco obrigatório na página): sem ICP definido, sem presença pública mínima, que busca SEO técnico/mídia paga, garantia de citação, score automático, ou não pretende agir após o diagnóstico.

Matriz decisória (visível na página): "Compre Fast se..." / "Compre Full se..."

**TRANSPIRA**
Execução em quatro movimentos: Leitura, Construção, Ativação, Calibração. Sob consulta.

**TRANSPIRA Jurídico**
Modelo A: implementação junto ao time, 12 a 20 semanas, operação independente ao final.
Modelo B: assistant as a service por projeto. Todo output sob revisão e assinatura de advogada ou advogado habilitados. A Pira NÃO faz: emitir parecer, definir estratégia de caso, representar cliente, assinar peça.
Quem não deveria contratar: quem busca terceirizar responsabilidade jurídica.

**RESPIRA**
Estado alcançado, não produto comprado. Não criar página de venda.

### Fundadores

**Gabriela Aguiar — CEO & Co-founder**
Docente em educação executiva em múltiplas instituições. MIT Universal AI Foundational Modules (em andamento, 2026). Crunchbase: crunchbase.com/person/gabriela-aguiar-a12a (sufixo -a12a crítico).

**Celso Gama — COO & Co-founder**
25 anos. Bacharelando em Direito (Mackenzie). MIT Applied AI Certificate (em andamento, 2026).
Sempre "bacharelando em Direito" — nunca "advogado" nem "bacharel".

### Dados institucionais
CNPJ: 46.954.891/0001-16 (transferência para Gabriela Aguiar concluída, em registro na Junta Comercial)
ICP núcleo: empresas de serviços B2B, R$10M a R$80M, 25 a 150 pessoas
Tagline: Liberamos o próximo nível.

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
| Branch de trabalho | `feature/refacao-v13` |
| Form | Fillout integrado a Notion DB |
| MCP disponível | Vercel MCP (deploy direto via Code) |

---

## PALETA VISUAL

```
ink:        #0C0F16
deep-teal:  #05262D
teal:       #004756
orange:     #EA6335
peach:      #F2A85E
off-white:  #E8E0D6
```

**Tipografia (sistema Caminho C):**
Body / UI / headers / navegação: **Space Grotesk** — `--font-grotesk`
Frases canônicas / citações dos fundadores / números de destaque: **Cormorant Garamond** — `--font-cormorant`
Nunca Cormorant em headers de seção, navegação, body ou UI.

**Botão primário:** fundo `orange` + texto `ink`. off-white sobre orange falha WCAG AA.
**Restrição visual:** nunca visual SaaS, dashboard, agência criativa, curso ou consultoria de IA. Estética premium, editorial, sóbria.

---

## REGRAS ABSOLUTAS DE CONTEÚDO

**Travessão proibido.** Substituir por dois pontos, vírgula ou ponto.

**Vocabulário proibido:** "travar" e variações / "em paralelo" / "neste contexto" / "além disso" / "por fim" / "o objetivo é" / "é importante destacar" / "vale ressaltar" / "certamente" / "com certeza"

**PIRA LABS sempre em caixa alta.** Nunca "Pira Labs" ou "pira labs".

**Anonimizações:** Diageo → "multinacional do setor de bebidas" / Samsung → "uma grande marca de tecnologia"

**Caso jurídico (R$160 mil/mês):** sempre marcado como pós-IA com supervisão humana. Nunca como pré-IA.

**Credenciais MIT:** sempre com o nome do programa. Nunca apenas "MIT".
- Gabriela: "Universal AI Foundational Modules (MIT)"
- Celso: "Applied AI Certificate Program (MIT)"

**Promessa de resultado:** sempre "avanços acordados" ou "critérios acordados". Nunca "resultado garantido".

**Frase de prazo nos CTAs:** "Respondemos em até dois dias úteis."

**Itálico no TRANSPIRA:** "trabalho certo" e "trabalho muito" sempre em itálico via CSS na tagline. Sem aspas.

**Asterisco nos CTAs de produtos boutique:** "* mediante consulta e disponibilidade"

---

## ARQUITETURA DE ROTAS

### Rotas indexáveis (entram no sitemap)

| Rota | Prioridade |
|---|---|
| `/` | 1.0 |
| `/sobre` | 0.8 |
| `/inspira` | 0.8 |
| `/inspira/oxigenio` | 0.9 |
| `/inspira/juridico` | 0.7 |
| `/transpira` | 0.8 |
| `/transpira/juridico` | 0.7 |
| `/faisca` | 0.7 |
| `/faisca/juridica` | 0.7 |
| `/creative-business-turnaround` | 0.8 |
| `/antes-da-crise` | 0.6 |
| `/contato` | 0.5 |

### Redirects 301 obrigatórios
`/oxigenio` → `/inspira/oxigenio`
`/oxigenio-ia-search` → `/inspira/oxigenio`
`/faisca/ia-search` → `/inspira/oxigenio`
`/servicos` → `/inspira`
`/cases` → `/#provas`
`/en/*` → equivalente PT
`/es/*` → equivalente PT
Todos preservam query strings.

### Sistema de origens nos CTAs
Todos os CTAs para `/contato` incluem `?origem=` com identificador da página de partida.

---

## ARQUIVOS A LER ANTES DE IMPLEMENTAR

O Code lê todos estes antes de tocar no código:

| Arquivo | Função |
|---|---|
| `pacote-final-v3.md` | Este documento — briefing único |
| `wireframe-completo-site-pira-labs-v3_5.md` | Estrutura de blocos por página |
| `estado-tecnico-site-pira-labs-17mai2026.md` | Estado atual do site em produção |
| `copy-home-pira-labs.md` | Copy completa da home |
| `copy-paginas-internas-pira-labs.md` | Copy de /sobre, /inspira, /transpira, /faisca, /contato e verticais jurídicas |
| `copy-inspira-oxigenio.md` | Copy completa de /inspira/oxigenio |
| `PiraLabs_Documento_Mestre_v13.md` | Fonte da verdade institucional |
| `Memory.md` | Arsenal de 294 fichas — consultar antes de sugerir qualquer framework |

Antes de sugerir qualquer abordagem técnica ou de copy, consultar Memory.md pelo campo T (título da ficha). Citar o T exato ao recomendar.

---

## ORDEM DE IMPLEMENTAÇÃO

### Fase 0 — Preparação (antes de qualquer código)
1. Criar branch `feature/refacao-v13` a partir de main
2. Ler todos os arquivos de referência listados acima
3. Executar `/audit-v13` para mapear gaps entre site atual e v13
4. Apresentar relatório de auditoria e aguardar aprovação antes de avançar

### Fase 1 — Correções canônicas urgentes
1. Corrigir pricing Oxigênio em todas as páginas e schemas (R$3.500/R$5.300)
2. Corrigir FAÍSCA — remover "universo educacional"
3. Corrigir Substack: "Antes, Pira" em todos os contextos
4. Corrigir credenciais MIT com nome do programa
5. Verificar CNPJ e anonimizações

**Critério de pronto:** `/check-canonical` retorna zero conflitos com v13.

### Fase 2 — Páginas novas ou reescritas
1. `/inspira/juridico` — alinhada com v13 Seção 8
2. `/faisca` e `/faisca/juridica` — descrições corrigidas
3. `/creative-business-turnaround` — claim de categoria v13
4. Matriz decisória Oxigênio visível em `/inspira/oxigenio`
5. Filtro negativo Oxigênio como bloco explícito na página

**Critério de pronto:** todas as páginas renderizam com copy literal dos arquivos de referência.

### Fase 3 — Camada GEO/AEO
1. Schemas JSON-LD atualizados em todas as páginas (Organization, Person, Service, FAQPage, BreadcrumbList)
2. Schema Person com `educationalCredential` para fundadores (com nomes dos programas MIT)
3. `llms.txt` e `llms-full.txt` atualizados
4. `ai-agents.json` atualizado
5. `robots.txt` com 21 crawlers de IA
6. Sitemap dinâmico

**Critério de pronto:** schemas validam em validator.schema.org, llms.txt acessível, schemas confirmados via `/schema-validate`.

### Fase 4 — Polimento e deploy
1. Lighthouse Mobile e Desktop: 90+ em Performance, SEO, Accessibility, Best Practices
2. Headers de segurança: CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy
3. Teste FilloutEmbed e origens
4. Deploy via Vercel MCP
5. Verificação pós-deploy conforme checklist abaixo

---

## AUTOMAÇÃO E SKILLS — CONFIGURAÇÃO DO PROJETO

### Estrutura .claude/ obrigatória

```
.claude/
├── settings.json
└── commands/
    ├── audit-v13.md
    ├── check-canonical.md
    ├── deploy.md
    ├── geo-check.md
    └── schema-validate.md
```

### settings.json

```json
{
  "permissions": {
    "allow": [
      "Bash(git:*)",
      "Bash(npm:*)",
      "Bash(npx:*)",
      "Bash(node:*)",
      "Read(*)",
      "Write(src/**)",
      "Write(public/**)",
      "Write(.claude/**)",
      "Write(tasks/**)"
    ],
    "deny": [
      "Bash(rm -rf:*)",
      "Write(.env*)"
    ]
  },
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [{"type": "command", "command": "echo '[Code] Executando: $TOOL_INPUT'"}]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [{"type": "command", "command": "echo '[Code] Arquivo gravado: $TOOL_RESULT'"}]
      }
    ]
  }
}
```

### Comandos customizados

**`/audit-v13`** — Auditoria de alinhamento com v13
Lê v13 Seção 8 (portfólio), Seção 5 (fundadores) e Seção 7 (ICP). Varre todas as páginas do site. Lista: (1) pricing incorreto, (2) descrições de produto divergentes, (3) dados de fundadores incorretos, (4) Substack name incorreto, (5) anonimizações faltando. Retorna relatório em tabela: arquivo | campo | valor atual | valor correto.

**`/check-canonical`** — Verificação de dados canônicos
Verifica em todos os arquivos: CNPJ 46.954.891/0001-16 / Oxigênio Fast R$3.500 / Oxigênio Full R$5.300 / INSPIRA Jurídico R$12.500-R$26.000 / Substack "Antes, Pira" / Celso "bacharelando em Direito (Mackenzie)" / MIT com nome do programa / sem Diageo / sem travessão. Retorna: OK ou lista de conflitos.

**`/deploy`** — Deploy controlado
1. Roda `npm run build` — para se houver erro
2. Executa `/check-canonical` — para se houver conflito
3. Executa `/schema-validate` — para se schema inválido
4. Roda Lighthouse CLI nas 3 páginas principais — para se score < 90
5. Deploy via Vercel MCP
6. Abre URLs críticas e confirma 200
7. Registra em `tasks/lessons.md`

**`/geo-check`** — Checklist GEO (23 fatores)
Para cada página principal, verifica os 8 fatores Tier 1 e 2: Query-Answer Match, Search Rank readiness, AI-ready Structure, Brand/Entity Trust, Factually Specific, Self-Contained Passages, Freshness, Intent-Format Match. Retorna score por página e lista de gaps.

**`/schema-validate`** — Validação de schemas JSON-LD
Extrai todos os blocos `<script type="application/ld+json">` de cada página. Valida estrutura contra os tipos esperados por rota. Verifica campos obrigatórios: @context, @type, name, url. Para Organization: verifica sameAs com Crunchbase, Wikidata, LinkedIn. Para Person: verifica educationalCredential.

### Skills a instalar antes da primeira sessão

```bash
# Skills de frontend e design
npx claude-code skills add frontend-design
npx claude-code skills add theme-factory
npx claude-code skills add brand-guidelines

# Skills de SEO e schemas
npx claude-code skills add schema-markup
npx claude-code skills add site-architecture
npx claude-code skills add seo-audit
```

Skills do Memory.md (Destino B) a acionar por tipo de sessão:

| Situação | Ficha Memory.md a consultar |
|---|---|
| Construção de componente visual | frontend-design (T: "frontend-design") |
| Aplicação da identidade | brand-guidelines (T: "brand-guidelines") |
| Implementação de schema | schema-markup da ficha "AI-ready Structure" |
| Planejamento antes de executar | T: "Plan Mode obrigatório antes de cada tarefa no Claude Code" |
| Correção autônoma de erros | T: "Autonomous Fixing" / "Verification Rules" |
| Sessão lenta ou contexto alto | T: "Comandos de Elite e Manutenção" — usar /compact |
| Rotina recorrente a automatizar | T: "PIRA Routine Design Skill" |
| Output visual com direção estética | T: "PIRA Visual Direction Skill" |

### Integração Vercel MCP

O Vercel MCP está disponível e conectado. Usar para:
- Deploy de produção sem sair do Code
- Verificação de status do build
- Consulta de logs de deploy
- Gerenciamento de variáveis de ambiente (não expor valores sensíveis)

Nunca fazer deploy manual via terminal quando o Vercel MCP estiver disponível.

### Protocolo de sessão (PIRA Routine Design)

Todo chat neste projeto segue esta rotina:

**Abertura:**
1. Ler `tasks/lessons.md` — o que estava pendente
2. Ler `estado-tecnico-site-*` mais recente — estado atual do site
3. Confirmar com Celso: qual é o foco desta sessão

**Durante:**
- `/plan` antes de qualquer tarefa não trivial
- Mostrar 3-4 próximas ações antes de executar todas
- Nunca marcar tarefa como concluída sem prova (build local, schema validando, URL retornando 200)

**Encerramento:**
1. Atualizar `tasks/lessons.md` com o que foi feito, erros encontrados e pendências
2. Gerar novo `estado-tecnico-site-[data].md` se houve mudança estrutural
3. Commitar e fazer push
4. Registrar se deploy foi feito

---

## CLAUDE.md DO PROJETO (máximo 200 linhas)

```markdown
# PIRA LABS — Site piralabs.com.br
Boutique brasileira de Creative Business Turnaround.
Fonte da verdade: PiraLabs_Documento_Mestre_v13.md

## Estado atual
Refação v13. Branch: feature/refacao-v13
Site base no ar. Escopo: alinhar todas as páginas ao v13.

## Arquivos a ler antes de qualquer sessão
1. pacote-final-v3.md (briefing completo)
2. wireframe-completo-site-pira-labs-v3_5.md
3. estado-tecnico-site-[data mais recente].md
4. tasks/lessons.md

## Voz e conteúdo
- PIRA LABS sempre em caixa alta
- Sem travessão em nenhum texto
- Vocabulário proibido: travar / em paralelo / neste contexto / além disso / por fim / o objetivo é / é importante destacar / vale ressaltar / certamente
- Frase canônica na home: "A PIRA LABS é uma boutique brasileira de Creative Business Turnaround..."
- Anonimizar: Diageo → "multinacional do setor de bebidas"
- Oxigênio: Fast R$3.500 / Full R$5.300
- Substack: "Antes, Pira" (com vírgula)

## Stack
Next.js 15 + TypeScript + Tailwind + Vercel

## Workflow obrigatório
1. /plan antes de qualquer tarefa não trivial
2. Apresentar plano e aguardar confirmação antes de executar
3. Registrar aprendizados em tasks/lessons.md
4. Não marcar tarefa como concluída sem prova técnica
5. Deploy sempre via Vercel MCP

## Comandos disponíveis
/audit-v13 · /check-canonical · /deploy · /geo-check · /schema-validate

## Consultar Memory.md pelo campo T antes de sugerir qualquer framework ou skill
```

---

## VARIÁVEIS DE AMBIENTE

`.env.local` (não commitar):
```
NEXT_PUBLIC_FILLOUT_URL=[URL do formulário Fillout]
NEXT_PUBLIC_SITE_URL=https://piralabs.com.br
NEXT_PUBLIC_FLAG_D1=false
NEXT_PUBLIC_FLAG_D4=false
NEXT_PUBLIC_FLAG_PULSO=false
```

Configurar também na Vercel: Project Settings > Environment Variables.

---

## CHECKLIST PRÉ-SESSÃO

```
[ ] Branch feature/refacao-v13 criada e ativa
[ ] Skills instaladas (frontend-design, theme-factory, brand-guidelines, schema-markup, site-architecture, seo-audit)
[ ] .claude/settings.json configurado
[ ] .claude/commands/ com os 5 comandos
[ ] CLAUDE.md na raiz (máximo 200 linhas)
[ ] tasks/lessons.md criado
[ ] [Environment Snapshot] capturado
[ ] Memory.md disponível no KB do projeto Claude.ai
[ ] Vercel MCP conectado
```

---

## CHECKLIST PÓS-DEPLOY

```
[ ] /sobre retorna 200
[ ] /contato retorna 200
[ ] /servicos redireciona 301 para /inspira
[ ] /inspira/oxigenio retorna 200 com pricing R$3.500/R$5.300
[ ] Frase canônica presente na home dentro dos primeiros 150 termos
[ ] Schemas validam em validator.schema.org
[ ] llms.txt acessível em piralabs.com.br/llms.txt
[ ] Lighthouse Mobile: 90+ em todas as categorias
[ ] Headers de segurança: grau A em securityheaders.com
[ ] Search Console: sitemap novo submetido
[ ] Wikidata: verificar se CNPJ atualizado após registro na Junta
```

---

## VALIDAÇÃO GPT ANTES DO CODE

Antes de abrir o Code, passar este Pacote Final v3.0 + wireframe + copy para um GPT separado:

1. As regras de conteúdo são exequíveis e não conflitam entre si?
2. A ordem das fases faz sentido operacionalmente?
3. Os redirects cobrem todas as URLs conhecidas do site atual?
4. Os schemas JSON-LD especificados são suficientes para os fatores GEO Tier 1 e 2?
5. O `.claude/` está configurado para evitar os problemas históricos (186 "Command Failed", loop "prossiga", token limit silencioso)?

---

*Pacote Final v3.0 · PIRA LABS · Maio 2026*
*Substitui pacote-final-v2_3.md*
*Próxima atualização: quando houver mudança de stack, novo produto ou mudança de ICP*
