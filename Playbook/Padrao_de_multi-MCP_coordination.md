---
tipo: prompt
tags: [agentes-ia, framework, raciocínio]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Padrão de multi-MCP coordination
F: The Complete Guide to Building Skills for Claude.pdf
TP: workflow
FN: Coordena um workflow único que atravessa múltiplos serviços e precisa passar contexto entre eles. Use quando um MCP sozinho não fecha o trabalho.
PERSONA: —
ETAPAS:
- Phase 1: Design Export (Figma MCP): exportar assets, gerar design specifications e criar asset manifest.
- Phase 2: Asset Storage (Drive MCP): criar pasta de projeto, subir assets e gerar shareable links.
- Phase 3: Task Creation (Linear MCP): criar tarefas de desenvolvimento, anexar links e atribuir ao time.
- Phase 4: Notification (Slack MCP): postar handoff summary em canal e incluir links e referências de tarefas.
REGRAS: separar fases com clareza, passar dados entre MCPs, validar antes de avançar e centralizar handling de erro.
SC: usar quando o workflow depende de múltiplos serviços encadeados.
OF: —
CP: serviços envolvidos, dados que transitam entre fases, critérios de validação, destino final do handoff.
OT: múltiplos MCP servers.
SP: —
