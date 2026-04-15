---
tipo: prompt
tags: [agentes-ia, framework, estratégia]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Padrão de domain-specific intelligence
F: The Complete Guide to Building Skills for Claude.pdf
TP: workflow
FN: Embute lógica de domínio antes da ação operacional, para que a skill não execute algo tecnicamente válido e contextualmente errado. Use quando o risco regulatório, financeiro ou de compliance é alto.
PERSONA: —
ETAPAS:
- Before Processing (Compliance Check): buscar transaction details via MCP, aplicar regras de compliance e documentar a decisão.
- Processing: se compliance passed, processar pagamento com fraud checks; se não passou, flag for review e create compliance case.
- Audit Trail: registrar compliance checks, processing decisions e gerar audit report.
REGRAS: aplicar expertise de domínio antes da ação; documentar governança e decisão.
SC: usar quando o problema exige conhecimento especializado além do simples acesso às ferramentas.
OF: —
CP: regras de domínio, critérios de risco, dados da transação ou objeto analisado, exigência de trilha de auditoria.
OT: MCP do domínio, regras de compliance, logging.
SP: —
