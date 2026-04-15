---
tipo: prompt
tags: [agentes-ia, framework, prompt-engineering]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Padrão de iterative refinement
F: The Complete Guide to Building Skills for Claude.pdf
TP: workflow
FN: Gera um primeiro output, valida, corrige e repete até cruzar um limiar de qualidade. Use quando a primeira versão raramente sai aceitável e a qualidade melhora com ciclos explícitos.
PERSONA: —
ETAPAS:
- Initial Draft: buscar dados via MCP, gerar first draft report e salvar em arquivo temporário.
- Quality Check: rodar `scripts/check_report.py` e identificar missing sections, inconsistent formatting e data validation errors.
- Refinement Loop: corrigir cada issue, regenerar seções afetadas, revalidar e repetir até quality threshold.
- Finalization: aplicar formatting final, gerar summary e salvar versão final.
REGRAS: definir quality criteria explícitos, usar validation scripts e saber quando parar de iterar.
SC: usar quando o ganho vem de revisão iterativa e critérios objetivos de qualidade.
OF: —
CP: fonte de dados, critérios de qualidade, script de validação, limiar de parada.
OT: MCP, scripts locais e arquivos temporários.
SP: —
