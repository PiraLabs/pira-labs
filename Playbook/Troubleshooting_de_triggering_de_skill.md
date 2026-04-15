---
tipo: prompt
tags: [agentes-ia, produtividade, framework]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Troubleshooting de triggering de skill
F: The Complete Guide to Building Skills for Claude.pdf
TP: técnica
FN: Corrige skill que dispara nunca ou dispara onde não devia. Use quando o defeito parece semântico e a causa provável mora na description.
PERSONA: —
ETAPAS:
- Skill doesn't trigger: revisar a description para checar vagueza, ausência de trigger phrases e falta de file types relevantes.
- Debugging approach: perguntar a Claude quando ele usaria a skill e ajustar a descrição a partir do que faltar.
- Skill triggers too often: adicionar negative triggers, especificar melhor o escopo e deixar claro o que a skill não cobre.
REGRAS: a description governa o trigger; vagueza gera subdisparo e amplitude excessiva gera sobredisparo.
SC: a skill deve carregar nos cenários certos e se manter quieta fora deles.
OF: —
CP: exemplos de queries que deveriam e não deveriam disparar, description atual, escopo desejado.
OT: skill já instalada para teste.
SP: —
