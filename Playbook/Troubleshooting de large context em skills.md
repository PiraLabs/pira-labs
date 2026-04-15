---
tipo: prompt
tags: [agentes-ia, produtividade, prompt-engineering]
uso: [produtividade, gestão-conhecimento]
destino: A
---

T: Troubleshooting de large context em skills
F: The Complete Guide to Building Skills for Claude.pdf
TP: técnica
FN: Reduz lentidão e degradação de resposta causadas por skill grande demais ou por excesso de skills ativas. Use quando a sensação é de que a skill ficou pesada e menos precisa.
PERSONA: —
ETAPAS:
- Diagnose causes: verificar se o conteúdo da skill está grande demais, se há muitas skills habilitadas ou se tudo está sendo carregado sem progressive disclosure.
- Optimize SKILL.md size: mover detalhe para references, linkar em vez de embutir e manter o SKILL.md abaixo de 5.000 palavras.
- Reduce enabled skills: avaliar se há 20–50 skills simultâneas e considerar enablement seletivo ou packs.
REGRAS: contexto demais cobra preço; o núcleo da skill precisa continuar curto e acionável.
SC: a resposta deve recuperar velocidade e qualidade sem amputar instrução crítica.
OF: —
CP: tamanho do SKILL.md, número de skills habilitadas, sinais de lentidão, arquitetura de references.
OT: conjunto de skills habilitadas no ambiente.
SP: —
