---
tipo: prompt
tags: [estrutura-prompt, prompt-engineering, raciocínio]
uso: [operacional-celso]
destino: A
---

T: Quando Adicionar Think Step by Step
F: [Arsenal Pira Labs — fonte não recuperada]
TP: técnica
FN: Adiciona uma instrução de raciocínio explícito antes da resposta final. Use quando o problema tiver múltiplas variáveis e o custo do erro for alto.
PERSONA: —
ETAPAS:
- Inserir no final do prompt: Antes de responder, raciocine passo a passo dentro de tags <thinking>. Mostre o raciocínio antes da resposta final.
REGRAS: Use quando o problema tem múltiplas variáveis e a resposta errada tem custo real. Isso força o Claude a trabalhar o problema antes de concluir. Reduz alucinação em tarefas analíticas e estratégicas.
SC: —
OF: Raciocínio dentro de tags <thinking> antes da resposta final.
CP: —
OT: Claude
SP: —
