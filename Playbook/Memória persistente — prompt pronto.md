---
tipo: prompt
tags: [agentes-ia, gestão-conhecimento, produtividade, estrutura-prompt]
uso: [operacional-celso]
destino: A
---

T: Memória persistente — prompt pronto
F: @itstylergermain
TP: configuração
FN: Configura um sistema persistente de memória com arquivos dedicados e leitura automática por sessão. Use para preparar ambiente recorrente de trabalho em Claude Code.
PERSONA: —
ETAPAS:
- Create: Create a persistent memory system for me.
- Make: Make a /memory directory with these files: decisions.md, people.md, preferences.md, and user.md.
- Write: Then write a CLAUDE.md that tells you to read all of these files at the start of every session, then create a hook that updates them at the end.
REGRAS: —
SC: —
OF: —
CP: —
OT: Claude Code; diretório /memory; arquivos decisions.md, people.md, preferences.md, user.md; arquivo CLAUDE.md.
SP: Hook de atualização ao fim de cada sessão.
