---
tipo: prompt
tags: [agentes-ia, framework, raciocínio]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Critérios de sucesso para skills
F: The Complete Guide to Building Skills for Claude.pdf
TP: framework
FN: Define como medir se uma skill realmente funciona, sem confundir impressão subjetiva com performance mínima aceitável. Use depois de definir o caso de uso e antes de declarar a skill pronta.
PERSONA: —
ETAPAS:
- Quantitative metrics: medir trigger em consultas relevantes, número de tool calls e taxa de falha de API por workflow.
- How to measure: rodar consultas que deveriam acionar a skill, comparar com baseline sem skill e monitorar logs do MCP.
- Qualitative metrics: verificar se o usuário não precisa conduzir próximos passos, se o workflow fecha sem correção e se o resultado se mantém entre sessões.
- How to assess: repetir o mesmo pedido, comparar consistência estrutural e coletar feedback de usuários beta.
REGRAS: tratar métricas como benchmarks aspiracionais, não como corte matemático rígido; sempre comparar com baseline.
SC: a skill precisa acionar nos cenários certos, completar o fluxo com menos atrito e manter consistência entre execuções.
OF: —
CP: conjunto de tarefas de teste, baseline sem skill, acesso a logs ou observação de execução, critérios de qualidade esperados.
OT: pode exigir logs de MCP e ambiente de teste comparativo.
SP: —
