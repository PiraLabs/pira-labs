---
tipo: prompt
tags: [produtividade, prompt-engineering, estrutura-prompt]
uso: [operacional-celso]
destino: A
---

T: Prompt estruturado em campos
F: [Arsenal Pira Labs — fonte não recuperada]
TP: técnica
FN: Troca parágrafos descritivos por campos explícitos para reduzir tokens e aumentar previsibilidade. Use quando você quer prompt mais enxuto e output mais controlado.
PERSONA: —
ETAPAS:
- Trocar parágrafos descritivos por campos explícitos.
- Preencher cada campo com o mínimo necessário para a tarefa.
REGRAS: Menos tokens de entrada, output mais previsível.
SC: —
OF:
```text
Task:   [O que fazer]
Data:   [O que está disponível]
Goal:   [O que otimizar]
Output: [Formato e restrição de tamanho]
```
CP: tarefa, dados disponíveis, objetivo, formato e restrição de tamanho.
OT: —
SP: —
