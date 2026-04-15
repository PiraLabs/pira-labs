---
tipo: prompt
tags: [prompt-engineering, raciocínio, framework]
uso: [operacional-celso]
destino: A
---

T: Como Usar o Encadeamento com Checkpoint
F: [Arsenal Pira Labs — fonte não recuperada]
TP: workflow
FN: Divide tarefas complexas em etapas separadas com validação entre elas. Use quando uma premissa errada pode contaminar etapas seguintes e você quer travar o avanço até revisar a base.
PERSONA: —
ETAPAS:
- Etapa 1: [tarefa da etapa 1]
- Entrega parcial: Entregue só a etapa 1.
- Checkpoint: Pergunte: "Posso prosseguir para a etapa 2?"
REGRAS: Para tarefas complexas que têm múltiplas etapas, divida em prompts separados com aprovação entre cada um. Não execute a etapa 2 sem minha aprovação.
SC: Não avançar para a etapa seguinte sem aprovação do usuário.
OF: Entrega parcial por etapa, seguida da pergunta de liberação para a próxima etapa.
CP: tarefa da etapa 1, tarefa da etapa 2
OT: Claude
SP: —
