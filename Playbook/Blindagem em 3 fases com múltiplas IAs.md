---
tipo: prompt
tags: [análise-competitiva, estratégia, raciocínio, framework]
uso: [operacional-celso]
destino: A
---

T: Blindagem em 3 fases com múltiplas IAs
F: [Arsenal Pira Labs — fonte não recuperada]
TP: workflow
FN: Distribui a coleta, a crítica e a blindagem de um argumento entre diferentes IAs. Use quando uma decisão, argumento, conteúdo ou diagnóstico precisar ser testado antes de ir para o mundo.
PERSONA: —
ETAPAS:
- Fase 1 — Coleta: Rodar no Gemini ou equivalente a instrução "Pesquisa profunda sobre [tema]. Quero dados brutos, fontes reais, sem análise. Só material-prima."
- Fase 2 — Crítica: Rodar no Claude com o relatório da fase 1 a instrução "Analise este relatório. O que está faltando? O que é genérico? Onde há lacunas que um concorrente usaria para me atacar?"
- Fase 3 — Blindagem: Rodar no GPT com o consolidado a instrução "Atue como concorrente agressivo. Identifique as 3 brechas mais fáceis de atacar neste argumento/conteúdo/diagnóstico."
REGRAS: Cada IA tem um papel. Nenhuma tem a palavra final.
SC: —
OF: —
CP: tema, argumento/conteúdo/diagnóstico
OT: Gemini ou equivalente; Claude; GPT
SP: —
