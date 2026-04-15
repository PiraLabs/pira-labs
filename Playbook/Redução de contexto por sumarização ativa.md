---
tipo: prompt
tags: [produtividade, prompt-engineering, estrutura-prompt]
uso: [operacional-celso]
destino: A
---

T: Redução de contexto por sumarização ativa
F: [Arsenal Pira Labs — fonte não recuperada]
TP: técnica
FN: Comprime histórico em duas ou três linhas para reabrir o pedido com menos tokens. Use quando o contexto longo já foi consolidado e só o estado atual importa.
PERSONA: —
ETAPAS:
- Reescrever o contexto atual em duas ou três linhas.
- Reabrir o pedido a partir desse estado resumido.
REGRAS: Em vez de reenviar o histórico completo, reescreva o contexto atual em duas ou três linhas e reabra o pedido a partir daí.
SC: —
OF:
```text
Context: [DUAS LINHAS DO ESTADO ATUAL]
Now: [PEDIDO ESPECÍFICO]
```
CP: estado atual, pedido específico.
OT: —
SP: —
