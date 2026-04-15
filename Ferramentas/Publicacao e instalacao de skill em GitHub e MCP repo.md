---
tipo: prompt
tags: [agentes-ia, gestão-conhecimento, produtividade]
uso: [produtividade, gestão-conhecimento]
destino: B
---

T: Publicação e instalação de skill em GitHub e MCP repo
F: The Complete Guide to Building Skills for Claude.pdf
TP: workflow
FN: Organiza a publicação pública da skill e a instalação pelo usuário final. Use quando a skill já existe e a questão passa a ser distribuição com onboarding minimamente decente.
PERSONA: —
ETAPAS:
- Host on GitHub: manter repositório público, README claro, instruções de instalação e exemplos de uso.
- Document in Your MCP Repo: linkar a skill na documentação do MCP e explicar o valor da combinação.
- Create an Installation Guide: explicar download, instalação no Claude, habilitação da skill e teste básico.
REGRAS: README do repositório é para humanos; README dentro da pasta da skill continua sendo erro; a instalação precisa incluir teste explícito.
SC: o usuário precisa conseguir instalar e testar sem pedir socorro para entender o básico.
OF:
```text
# Installing the [Your Service] skill
1. Download the skill
2. Install in Claude
3. Enable the skill
4. Test
```
CP: nome do serviço, link do repositório, caminho de instalação, frase de teste, dependência de MCP.
OT: GitHub, Claude.ai ou Claude Code, documentação do MCP.
SP: —
