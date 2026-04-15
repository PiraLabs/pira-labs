---
tipo: prompt
tags: [agentes-ia, estrutura-prompt, prompt-engineering]
uso: [produtividade, gestão-conhecimento]
destino: B
---

T: Estrutura recomendada do SKILL.md
F: The Complete Guide to Building Skills for Claude.pdf
TP: configuração
FN: Oferece um molde de organização do arquivo principal da skill em Markdown. Use quando você precisa montar o SKILL.md com uma ordem que facilite execução, exemplos e troubleshooting.
PERSONA: —
ETAPAS:
- Frontmatter: abrir o arquivo com name e description.
- Skill Name: declarar o nome da skill.
- Instructions: descrever as etapas principais do workflow.
- Examples: incluir cenários comuns, fala do usuário, ações e resultado.
- Troubleshooting: registrar erro comum, causa e solução.
REGRAS: adaptar a estrutura ao caso de uso; manter instruções claras; incluir exemplos e troubleshooting sempre que ajudarem a execução.
SC: o arquivo deve orientar a execução do começo ao fim sem deixar a lógica crítica dispersa.
OF:
```text
---
name: your-skill
description: [...]
---
# Your Skill Name
# Instructions
### Step 1: [First Major Step]
Clear explanation of what happens.

Examples
Example 1: [common scenario]
User says: "..."
Actions:
1. ...
Result: ...

Troubleshooting
Error: [Common error message]
Cause: [Why it happens]
Solution: [How to fix]
```
CP: nome da skill, descrição, etapas do workflow, cenários comuns, erros previsíveis.
OT: arquivo SKILL.md em Markdown.
SP: —
