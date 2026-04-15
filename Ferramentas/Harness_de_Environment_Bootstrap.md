---
tipo: prompt
tags: [agentes-ia, produtividade, gestão-conhecimento]
uso: [produtividade, gestão-conhecimento]
destino: B
---

T: Harness de Environment Bootstrap
F: [Arsenal Pira Labs, fonte não recuperada]
TP: workflow
FN: Injeta um snapshot do ambiente antes do primeiro turno do agente para reduzir exploração inútil. Use em tarefas de coding quando o ambiente não estiver óbvio.
PERSONA: —
ETAPAS:
- Rodar antes do loop do agente: executar o comando com `timeout 15`
- Coletar snapshot: working dir, listing de `/app`, versões de Python e Node, memória
- Injetar no prompt inicial: incluir o output como bloco `[Environment Snapshot]`
REGRAS: Falha silenciosa. Herdar do harness base: native tool calling, output cap de 30KB, completion checklist.
SC: `2>/dev/null || true`
OF: Bloco `[Environment Snapshot]` no prompt inicial.
CP: —
OT: Bash com `timeout 15`.
SP: O comando imprime `Working dir`, `App listing`, `Python`, `Node` e `Memory`.
