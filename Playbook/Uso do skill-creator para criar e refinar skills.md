---
tipo: prompt
tags: [agentes-ia, framework, prompt-engineering]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Uso do skill-creator para criar e refinar skills
F: The Complete Guide to Building Skills for Claude.pdf
TP: workflow
FN: Usa o skill-creator como acelerador para rascunhar, revisar e iterar skills. Use quando você já conhece os workflows principais, mas quer reduzir erro estrutural e ganhar velocidade.
PERSONA: —
ETAPAS:
- Creating skills: gerar skills a partir de descrições em linguagem natural, com SKILL.md, frontmatter e sugestões de trigger phrases.
- Reviewing skills: pedir revisão de descrições vagas, triggers faltantes e problemas estruturais.
- Iterative improvement: levar edge cases e falhas reais de volta ao skill-creator para melhorar handling.
- To use: pedir explicitamente ajuda para construir uma skill para o caso de uso desejado.
REGRAS: usar o skill-creator para design e refinamento, não para fingir que testes quantitativos já foram feitos.
SC: o uso faz sentido quando já existe caso de uso claro e exemplos de sucesso ou falha para retroalimentar.
OF:
```text
Use the skill-creator skill to help me build a skill for [your use case]
```
CP: caso de uso, top 2–3 workflows, exemplos de falha ou edge case, objetivo da skill.
OT: skill-creator disponível em Claude.ai ou Claude Code.
SP:
- Creating skills: geração inicial.
- Reviewing skills: auditoria de problemas estruturais.
- Iterative improvement: refinamento com base em falhas observadas.
