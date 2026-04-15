---
tipo: prompt
tags: [produtividade, prompt-engineering, estrutura-prompt]
uso: [operacional-celso]
destino: A
---

T: Compression prompt
F: [Arsenal Pira Labs — fonte não recuperada]
TP: técnica
FN: Resume conteúdo longo em três linhas preservando fatos centrais para reutilização como contexto. Use quando você precisa transformar material extenso em contexto portátil para chamadas seguintes.
PERSONA: —
ETAPAS:
- Pedir um resumo em 3 linhas preservando fatos-chave.
- Guardar o output comprimido para usar como contexto nas chamadas seguintes.
REGRAS: Quando tiver conteúdo longo que precisa virar contexto reutilizável, comprima antes de seguir.
SC: —
OF:
```text
Summarize this in 3 lines, preserving key facts: [CONTEÚDO]
```
CP: conteúdo.
OT: —
SP: —
