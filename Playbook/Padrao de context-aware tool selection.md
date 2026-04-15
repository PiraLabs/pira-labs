---
tipo: prompt
tags: [agentes-ia, framework, raciocínio]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Padrão de context-aware tool selection
F: The Complete Guide to Building Skills for Claude.pdf
TP: workflow
FN: Escolhe a ferramenta com base no contexto, em vez de fixar uma stack para qualquer caso. Use quando o resultado desejado é o mesmo, mas a melhor rota muda com tipo, tamanho ou finalidade do arquivo.
PERSONA: —
ETAPAS:
- Decision Tree: checar file type e size.
- Determine best storage location: escolher cloud storage para arquivos grandes, Notion/Docs para docs colaborativos, GitHub para código e local storage para temporários.
- Execute Storage: chamar a ferramenta adequada, aplicar metadata específica e gerar access link.
- Provide Context to User: explicar por que aquela storage foi escolhida.
REGRAS: explicitar critérios de decisão, manter fallback options e ser transparente sobre a escolha feita.
SC: usar quando o mesmo objetivo comporta ferramentas distintas dependendo do contexto.
OF: —
CP: tipo de arquivo, tamanho, nível de colaboração, natureza do conteúdo, necessidade de acesso.
OT: um ou mais MCPs conforme a decisão.
SP: —
