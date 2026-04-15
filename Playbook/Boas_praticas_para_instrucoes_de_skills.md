---
tipo: prompt
tags: [agentes-ia, prompt-engineering, estrutura-prompt]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Boas práticas para instruções de skills
F: The Complete Guide to Building Skills for Claude.pdf
TP: técnica
FN: Refina instruções para que a skill seja executável, verificável e enxuta. Use quando a skill carrega, mas o comportamento sai inconsistente, genérico ou preguiçoso.
PERSONA: —
ETAPAS:
- Be Specific and Actionable: trocar instruções genéricas por ações concretas, comandos e critérios verificáveis.
- Include error handling: antecipar erros comuns e indicar como detectar e corrigir.
- Reference bundled resources clearly: apontar arquivos de references com função explícita antes do uso.
- Use progressive disclosure: manter o SKILL.md focado no núcleo e mover detalhe para references.
REGRAS: instrução vaga é defeito; erro comum precisa aparecer com causa ou resposta; referência só ajuda se disser para que serve.
SC: Claude deve conseguir executar, validar e recuperar o fluxo sem depender de interpretação frouxa.
OF: —
CP: etapa a ser executada, critérios de validação, erros mais comuns, recursos auxiliares disponíveis.
OT: pode envolver scripts, references e arquivos internos da skill.
SP:
- Good example: Run `python scripts/validate.py --input {filename}` com critérios de falha explícitos.
- Bad example: Validate the data before proceeding.
