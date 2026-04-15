---
tipo: prompt
tags: [agentes-ia, estrutura-prompt, prompt-engineering]
uso: [produtividade, gestão-conhecimento]
destino: B
---

T: Especificação técnica mínima de skill
F: The Complete Guide to Building Skills for Claude.pdf
TP: configuração
FN: Consolida a estrutura obrigatória e as regras mínimas de empacotamento de uma skill. Use quando for montar, validar ou revisar a pasta técnica antes de upload ou distribuição.
PERSONA: —
ETAPAS:
- File structure: organizar a pasta com SKILL.md obrigatório e, se necessário, scripts, references e assets.
- SKILL.md naming: usar exatamente SKILL.md, com case-sensitive correto.
- Skill folder naming: usar kebab-case, sem espaços, underscores ou capitais.
- No README.md: manter a documentação da skill em SKILL.md ou references, deixando README apenas no nível do repositório.
REGRAS: SKILL.md deve existir com esse nome exato; o nome da pasta deve ser kebab-case; não incluir README.md dentro da pasta da skill.
SC: a skill precisa obedecer a nomenclatura e a estrutura mínima para ser aceita e compreensível.
OF:
```text
your-skill-name/
├── SKILL.md
├── scripts/
├── references/
└── assets/
```
CP: nome da skill, necessidade de scripts, necessidade de documentação adicional, necessidade de assets.
OT: filesystem local, empacotamento em pasta ou ZIP.
SP:
- scripts/: código executável opcional.
- references/: documentação carregada sob demanda.
- assets/: templates, fontes, ícones e outros insumos de output.
