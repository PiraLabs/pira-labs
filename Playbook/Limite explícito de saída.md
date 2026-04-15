---
tipo: prompt
tags: [produtividade, prompt-engineering, estrutura-prompt]
uso: [operacional-celso]
destino: A
---

T: Limite explícito de saída
F: [Arsenal Pira Labs — fonte não recuperada]
TP: técnica
FN: Impõe limites de tamanho ou formato para cortar verbosidade que não foi pedida. Use quando você quer controlar a extensão e o shape da resposta antes da geração.
PERSONA: —
ETAPAS:
- Adicionar ao final do prompt uma restrição explícita de tamanho ou formato.
REGRAS: Sem isso, você paga verbosidade que não pediu.
SC: —
OF:
```text
Answer in under 100 words
Return bullet points only
Max 5 steps
```
CP: limite de palavras, formato desejado, número máximo de passos.
OT: —
SP: —
