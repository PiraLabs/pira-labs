---
tipo: prompt
tags: [produtividade, gestão-conhecimento, agentes-ia]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Git Commit Delegado ao Claude
F: [Arsenal Pira Labs — fonte não recuperada]
TP: prompt
FN: Delega ao Claude o checkpoint do dia sem exigir sintaxe manual de git. Use no final de qualquer sessão de trabalho no Claude Code.
PERSONA: —
ETAPAS:
- Prompt de ativação: Salve o que eu fiz hoje usando o git.
REGRAS: Usar no final de qualquer sessão de trabalho no Claude Code.
SC: —
OF: o Claude executa `git add .` e `git commit` com descrição adequada do que foi feito na sessão.
CP: —
OT: repositório git ativo e acesso do Claude Code ao terminal.
SP: —
