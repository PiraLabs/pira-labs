---
tipo: prompt
tags: [estrutura-prompt, prompt-engineering, framework]
uso: [operacional-celso]
destino: A
---

T: Como Usar o Prompting Constitucional
F: [Arsenal Pira Labs — fonte não recuperada]
TP: técnica
FN: Define uma ordem de instrução em que as proibições vêm antes das instruções positivas. Use quando quiser reduzir defaults ruins do modelo e controlar melhor tom e estrutura.
PERSONA: —
ETAPAS:
- Declarar restrições negativas primeiro: Instrua o que NÃO fazer antes de instruir o que fazer.
REGRAS: O princípio mais eficaz do Destino A. Restrições negativas competem diretamente com os defaults do modelo. Instruções positivas só adicionam camadas sobre eles. NUNCA usar: travessão, "em paralelo", "neste contexto", "é importante destacar", "vale ressaltar", "certamente", frases de enchimento. NUNCA soar como relatório ou slide. NUNCA abrir com os resultados — contexto vem antes do número.
SC: —
OF: —
CP: —
OT: my-voice-celso.md já implementa isso. Quando o arquivo está no projeto, o Claude lê e aplica automaticamente. Não precisa repetir no prompt.
SP: —
