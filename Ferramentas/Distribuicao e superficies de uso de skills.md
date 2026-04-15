---
tipo: prompt
tags: [agentes-ia, gestão-conhecimento, produtividade]
uso: [produtividade, gestão-conhecimento]
destino: B
---

T: Distribuição e superfícies de uso de skills
F: The Complete Guide to Building Skills for Claude.pdf
TP: configuração
FN: Resume como skills são distribuídas e qual superfície usar em cada cenário. Use quando a dúvida não é construir a skill, mas decidir onde ela será instalada ou executada.
PERSONA: —
ETAPAS:
- Current distribution model: baixar a pasta, zipar se necessário, subir em Claude.ai ou colocar no diretório de skills do Claude Code.
- Organization-level skills: considerar deploy workspace-wide com atualização automática e gestão centralizada.
- An open standard: tratar skills como padrão portátil entre plataformas, registrando limitações no campo compatibility.
- Using skills via API: usar `/v1/skills`, `container.skills`, Claude Console e Agent SDK para aplicações, pipelines e agentes.
- When to use skills via the API vs. Claude.ai: escolher a superfície pela natureza do caso de uso.
REGRAS: separar uso interativo de uso programático; registrar exigências específicas de plataforma em compatibility.
SC: a superfície escolhida precisa corresponder ao modo de uso real da skill.
OF: —
CP: tipo de uso, escala do deployment, necessidade de gestão centralizada, necessidade de execução via API.
OT: Claude.ai, Claude Code, API, Code Execution Tool beta para skills via API.
SP:
- Claude.ai / Claude Code: melhor para uso direto, teste manual e workflows ad hoc.
- API: melhor para aplicações, produção em escala e pipelines automatizados.
