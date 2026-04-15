---
tipo: prompt
tags: [estrutura-prompt, prompt-engineering, framework]
uso: [operacional-celso]
destino: A
---

T: Os 10 Blocos
F: [Arsenal Pira Labs — fonte não recuperada]
TP: framework
FN: Organiza os blocos que podem compor um prompt completo sem deixar o modelo adivinhar contexto. Use quando precisar decidir quais camadas de instrução entram em um prompt novo.
PERSONA: —
ETAPAS:
- Task Context: Por que essa tarefa existe. Use sempre que o contexto não for óbvio.
- Tone Context: Tom e voz desejados. Use em qualquer tarefa autoral.
- Context Data/Docs: Documentos ou dados relevantes. Use quando a resposta depende de informação específica.
- Task Description & Rules: O que fazer e o que não fazer. Use sempre.
- Examples: Exemplo do output desejado. Use quando o formato importa ou é não óbvio.
- Conversation History: O que já foi discutido. Use em tarefas que continuam de sessão anterior.
- Immediate Request: O pedido direto. Use sempre, porque é o centro do prompt.
- Think Step by Step: Instrução de raciocínio explícito. Use para problemas complexos com múltiplas variáveis.
- Output Format: Como entregar. Use quando o formato da resposta importa.
- Prefilled Response: Começar a resposta para o Claude continuar. Use para forçar formato ou tom específico.

REGRAS: Todo prompt funciona melhor quando tem contexto suficiente para o Claude não precisar adivinhar. Não é necessário usar os 10 blocos em todo prompt. Use os que fazem falta para aquela tarefa específica.
SC: —
OF: —
CP: —
OT: Claude
SP: —

