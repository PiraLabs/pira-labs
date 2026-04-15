---
tipo: prompt
tags: [agentes-ia, framework, prompt-engineering]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Estratégia de testes de skills
F: The Complete Guide to Building Skills for Claude.pdf
TP: framework
FN: Organiza o teste de skills em camadas de trigger, função e comparação contra baseline. Use quando você quer validar se a skill melhora o trabalho, não só se ela executa alguma coisa.
PERSONA: —
ETAPAS:
- Manual testing in Claude.ai: testar queries diretamente para iteração rápida.
- Scripted testing in Claude Code: automatizar casos repetíveis para validar mudanças.
- Programmatic testing via skills API: rodar avaliações sistemáticas em conjuntos definidos.
- Triggering tests: verificar se a skill dispara em pedidos óbvios, paráfrases e não dispara em tópicos irrelevantes.
- Functional tests: verificar output válido, sucesso de API, handling de erro e edge cases.
- Performance comparison: comparar mensagens, falhas, tool calls e tokens com e sem skill.
REGRAS: escolher o nível de rigor pelo risco e pela exposição da skill; iterar primeiro em uma tarefa desafiadora antes de ampliar cobertura.
SC: a skill precisa disparar no momento certo, produzir o output correto e melhorar o baseline.
OF: —
CP: casos de teste, baseline, ambiente de execução, critérios de sucesso, edge cases.
OT: Claude.ai, Claude Code ou skills API.
SP:
- Pro Tip: iterar em uma única tarefa difícil até funcionar e só depois expandir o conjunto de testes.
