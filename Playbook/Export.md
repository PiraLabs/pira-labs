---
tipo: prompt
tags: [gestão-conhecimento, produtividade, agentes-ia]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Export
F: @ohmo.ai
TP: técnica
FN: Salva a conversa inteira como arquivo Markdown. Use ao fim da sessão para preservar decisões de arquitetura, raciocínio e trade offs completos.
PERSONA: —
ETAPAS:
- Acionar `/export`: salva a conversa inteira como arquivo Markdown.
REGRAS: Complementa o `tasks/lessons.md`. Use `/export` para preservar o contexto completo da sessão. Use `lessons.md` para registrar apenas a regra derivada.
SC: —
OF: arquivo Markdown com a conversa inteira.
CP: —
OT: Comando nativo do Claude Code. Pode ser combinado com `tasks/lessons.md`.
SP: —
