---
tipo: prompt
tags: [agentes-ia, produtividade, raciocínio]
uso: [produtividade, gestão-conhecimento]
destino: B
---

T: Code Reviewer
F: @okaashish
TP: configuração
FN: Ativa uma skill de review estruturado para classificar código como broken, risky, messy ou correct. Use antes de abrir PR para uma revisão padronizada.
PERSONA: —
ETAPAS: —
REGRAS: Review estruturado: broken, risky, messy, correct.
SC: —
OF: —
CP: —
OT: Path `/skills/quality/code-reviewer/`.
SP: Quando ativar: antes de abrir PR. Nota do material: distinta do agente manual em `.claude/agents/code-reviewer.md`; a skill é mais portável e o agente manual é mais customizável.
