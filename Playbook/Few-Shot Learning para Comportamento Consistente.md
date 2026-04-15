---
tipo: prompt
tags: [framework, estrutura-prompt, prompt-engineering]
uso: [operacional-celso]
destino: A
---
T: Few-Shot Learning para Comportamento Consistente
F: [Arsenal Pira Labs — fonte não recuperada]
TP: framework
FN: Ensina comportamento por exemplos em vez de instruções abstratas. Use quando precisar de formatação consistente, padrões específicos de raciocínio ou tratamento de edge cases.
PERSONA: —
ETAPAS:
- Mostrar padrão: forneça de 2 a 5 pares input/output
- Fixar formato: exemplifique exatamente o formato desejado
- Processar caso real: peça que o modelo execute o input final seguindo os exemplos
REGRAS: Ensine o modelo mostrando exemplos em vez de descrever regras. Regra: 2-5 pares são suficientes. Mais do que isso raramente melhora o resultado.
SC: —
OF: Informações-chave no formato exemplificado pelos pares Input e Output.
CP: [SEU SEGUNDO EXEMPLO], [OUTPUT ESPERADO], [SEU INPUT REAL]
OT: —
SP: ```text
Extraia informações-chave no formato abaixo:

Exemplo 1:
Input: "My login doesn't work and I keep getting error 403"
Output: {"issue":"authentication","error_code":"403","priority":"high"}

Exemplo 2:
Input: [SEU SEGUNDO EXEMPLO]
Output: [OUTPUT ESPERADO]

Agora processe: [SEU INPUT REAL]
```
