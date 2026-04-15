---
tipo: prompt
tags: [agentes-ia, produtividade, gestão-conhecimento, estrutura-prompt]
uso: [operacional-celso]
destino: A
---

T: Briefing matinal — prompt pronto
F: @itstylergermain
TP: workflow
FN: Configura um briefing automático diário com leitura de memória, prioridades e envio por Slack. Use para preparar uma rotina de acompanhamento em Claude Code com tarefas agendadas.
PERSONA: —
ETAPAS:
- Set up: Set up an automated morning briefing using Claude Code's scheduled tasks.
- Schedule: Every day at 8am, you should: read my /memory files, check active.md in /todos, summarize what I was last working on, and generate 3 priorities for today.
- Send: Then send the briefing to my Slack as a DM using a webhook.
- Store: Store the webhook URL in my .env file as SLACK_WEBHOOK_URL.
REGRAS: —
SC: —
OF: —
CP: —
OT: Claude Code scheduled tasks; diretório /memory; arquivo /todos/active.md; Slack webhook; variável SLACK_WEBHOOK_URL em .env.
SP: Rotina diária às 8am com leitura de memória, resumo do trabalho anterior e geração de 3 prioridades.
