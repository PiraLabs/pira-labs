---
tipo: prompt
tags: [produtividade, gestão-conhecimento, agentes-ia]
uso: [produtividade, gestão-conhecimento]
destino: B
---

T: Bugs de Cache Claude Code — Workarounds Operacionais
F: [Arsenal Pira Labs — fonte não recuperada]
TP: configuração
FN: Documenta dois bugs de cache do Claude Code que podem elevar custo de API em 10-20x e registra os workarounds operacionais imediatos. Use quando houver risco de quebra de prompt cache, aumento anormal de custo ou retomada de sessão.
PERSONA: —
ETAPAS: —
REGRAS: Evitar execução direta pelo binário standalone quando houver conteúdo relacionado a billing. Substituir por `npx @anthropic-ai/claude-code`. Evitar `--resume` enquanto o bug persistir. Confirmar resolução a cada atualização do Claude Code antes de voltar ao fluxo anterior.
SC: confirmar resolução a cada atualização do Claude Code antes de voltar ao fluxo anterior.
OF: —
CP: —
OT: `npx @anthropic-ai/claude-code`, comando `--resume`, comando `/export`.
SP:
- Bug 1 — Runtime standalone quebra cache: o binário standalone usa um runtime customizado que quebra o cache de prompt quando conteúdo relacionado a billing aparece. Fix imediato: substituir `claude` por `npx @anthropic-ai/claude-code`.
- Bug 2 — `--resume` quebra cache: retomar sessão com `--resume` também quebra o cache. Workaround: evitar `--resume` e usar `/export` para salvar o contexto em Markdown e reabrir como contexto inicial numa sessão nova.
