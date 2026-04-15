---
tipo: prompt
tags: [agentes-ia, framework, prompt-engineering]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Iteração de skill baseada em feedback
F: The Complete Guide to Building Skills for Claude.pdf
TP: técnica
FN: Traduz sinais de falha em ajustes objetivos na descrição ou nas instruções. Use quando a skill existe, mas o padrão de erro mostra que o problema está no trigger ou na execução.
PERSONA: —
ETAPAS:
- Undertriggering signals: observar quando a skill não carrega, precisa ser ativada manualmente ou gera perguntas sobre quando usar.
- Solution for undertriggering: adicionar mais detalhe e nuance na description, inclusive keywords técnicas.
- Overtriggering signals: observar quando a skill carrega em queries irrelevantes, é desabilitada ou confunde o usuário.
- Solution for overtriggering: adicionar negative triggers e tornar o escopo mais específico.
- Execution issues: observar inconsistência, falha de API e correções frequentes do usuário.
- Solution for execution issues: melhorar instruções e handling de erro.
REGRAS: ajustar a parte que falha; não reescrever tudo só porque a skill incomodou uma vez.
SC: cada tipo de falha deve apontar para um tipo específico de correção, sem chute genérico.
OF: —
CP: logs de uso, padrões de falha, exemplos de queries, correções pedidas pelo usuário.
OT: ambiente real de uso ou teste.
SP: —
