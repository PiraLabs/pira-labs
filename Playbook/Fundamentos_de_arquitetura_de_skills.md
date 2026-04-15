---
tipo: prompt
tags: [agentes-ia, framework, prompt-engineering]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Fundamentos de arquitetura de skills
F: The Complete Guide to Building Skills for Claude.pdf
TP: framework
FN: Organiza os princípios centrais que tornam uma skill eficiente, portátil e combinável. Use para desenhar skills desde o início sem desperdiçar contexto nem criar algo rígido demais.
PERSONA: —
ETAPAS:
- Progressive Disclosure: usar um sistema de três níveis em que o YAML frontmatter fica sempre carregado, o corpo do SKILL.md entra quando a skill é relevante, e arquivos ligados só são navegados quando necessário.
- Composability: projetar a skill para funcionar junto com outras skills, sem assumir exclusividade de capacidade.
- Portability: criar a skill para funcionar do mesmo modo em Claude.ai, Claude Code e API, desde que o ambiente suporte as dependências exigidas.
REGRAS: minimizar uso de tokens sem perder especialização; não assumir que a skill será a única capability disponível; considerar dependências do ambiente antes de prometer portabilidade.
SC: manter especialização com baixo custo de contexto e sem conflito com outras skills habilitadas.
OF: —
CP: tarefa ou workflow repetível, necessidade de especialização, dependências de ambiente.
OT: Claude.ai, Claude Code e API; dependências do ambiente quando houver scripts ou requisitos externos.
SP:
- Skills + Connectors: trata MCP como camada de conectividade e skills como camada de conhecimento e workflow.
- Kitchen analogy: usar a lógica de cozinha profissional para separar acesso a ferramentas da receita de uso.
