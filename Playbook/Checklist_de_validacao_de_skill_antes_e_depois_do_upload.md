---
tipo: prompt
tags: [agentes-ia, framework, prompt-engineering]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Checklist de validação de skill antes e depois do upload
F: The Complete Guide to Building Skills for Claude.pdf
TP: workflow
FN: Consolida a revisão operacional do ciclo inteiro, do desenho ao uso real. Use como gate final, porque boa parte dos erros aqui não é conceitual, é desatenção básica.
PERSONA: —
ETAPAS:
- Before you start: confirmar casos de uso, ferramentas, guia revisto e estrutura planejada.
- During development: validar pasta em kebab-case, presença de SKILL.md, frontmatter correto, description com WHAT e WHEN, ausência de XML tags, clareza das instruções, error handling, exemplos e references.
- Before upload: testar trigger em queries óbvias e paráfrases, checar que não dispara fora de contexto, validar testes funcionais, integração de tools e compactação em ZIP.
- After upload: testar em conversas reais, monitorar undertriggering e overtriggering, coletar feedback, iterar description e instruções e atualizar version em metadata.
REGRAS: usar antes e depois do upload; não tratar check de trigger como detalhe opcional.
SC: a skill só está pronta quando passa por checagem estrutural, funcional e de uso real.
OF: —
CP: estado atual da skill, evidências de teste, metadata de versão, feedback de uso.
OT: ambiente de upload e testes reais.
SP: —
