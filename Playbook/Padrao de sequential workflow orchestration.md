---
tipo: prompt
tags: [agentes-ia, framework, raciocínio]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Padrão de sequential workflow orchestration
F: The Complete Guide to Building Skills for Claude.pdf
TP: workflow
FN: Estrutura workflows em sequência rígida com dependências entre etapas. Use quando pular ordem quebra o resultado ou cria efeito cascata de erro.
PERSONA: —
ETAPAS:
- Step 1: Create Account: chamar `create_customer` com name, email e company.
- Step 2: Setup Payment: chamar `setup_payment_method` e aguardar payment method verification.
- Step 3: Create Subscription: chamar `create_subscription` com plan_id e customer_id vindo da etapa 1.
- Step 4: Send Welcome Email: chamar `send_email` usando welcome_email_template.
REGRAS: explicitar ordem das etapas, dependências entre passos, validação em cada estágio e rollback instructions para falhas.
SC: usar quando o processo exige ordem específica e o output de uma etapa alimenta a próxima.
OF: —
CP: etapas obrigatórias, dependências entre dados, ferramentas envolvidas, pontos de validação.
OT: MCP tools em sequência.
SP: —
