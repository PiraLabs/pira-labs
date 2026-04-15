---
tipo: prompt
tags: [estrutura-prompt, prompt-engineering, framework]
uso: [operacional-celso]
destino: A
---

T: Como Usar o XML para Estruturar Output
F: [Arsenal Pira Labs — fonte não recuperada]
TP: técnica
FN: Estrutura a resposta em tags XML para forçar um formato de saída previsível. Use quando a forma de entrega importar muito e você quiser o output pronto para reaproveitar ou apresentar.
PERSONA: —
ETAPAS:
- Declarar formato: Entregue a resposta neste formato.
REGRAS: Quando o formato de entrega importa muito, especifique com tags XML. O Claude segue o molde. Você recebe o output já estruturado para usar ou apresentar.
SC: —
OF: <diagnostico> [problema identificado em 2 frases] </diagnostico> <rota> [3 movimentos concretos, em ordem de prioridade] </rota> <pergunta_de_verificacao> [uma pergunta para checar se o diagnóstico está certo] </pergunta_de_verificacao>
CP: —
OT: Claude
SP: —
