---
tipo: prompt
tags: [produtividade, estrutura-prompt, prompt-engineering]
uso: [operacional-celso]
destino: A
---
T: Batching de perguntas
F: [Arsenal Pira Labs — fonte não recuperada]
TP: técnica
FN: Agrupa solicitações encadeadas em uma única mensagem para reduzir custo e dispersão. Use quando houver duas ou mais perguntas relacionadas sobre o mesmo tema.
PERSONA: —
ETAPAS:
- Agrupar: reúna perguntas relacionadas sobre o mesmo tema em uma única mensagem
- Formular: escreva o pedido com lista numerada
- Restringir: peça que a resposta cubra todos os itens no mesmo envio
REGRAS: Três perguntas relacionadas = um envio, não três.
SC: —
OF: Entregar as três na mesma resposta.
CP: [TEMA], [PERGUNTA 1], [PERGUNTA 2], [PERGUNTA 3]
OT: —
SP: ```text
Preciso de três coisas sobre [TEMA]:
1. [PERGUNTA 1]
2. [PERGUNTA 2]
3. [PERGUNTA 3]
Entregue as três na mesma resposta.
```
