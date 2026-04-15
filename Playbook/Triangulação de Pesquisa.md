---
tipo: prompt
tags: [framework, raciocínio, estratégia]
uso: [proposta, conteúdo-linkedin]
destino: A
---

T: Triangulação de Pesquisa
F: [Arsenal Pira Labs — fonte não recuperada]
TP: workflow
FN: Triangula coleta, crítica, blindagem e consolidação para fortalecer um argumento. Use antes de publicar argumento importante, criar conteúdo de autoridade ou apresentar diagnóstico para cliente.
PERSONA: —
ETAPAS:
- Fase 1 — Coleta (Perplexity):
```text
Pesquisa profunda sobre: [TEMA]

Quero dados brutos, fontes reais, referências verificáveis.
Sem análise. Só material-prima.
Inclua dados quantitativos, fontes primárias, casos reais.
```
- Fase 2 — Crítica (Claude):
```text
Analise esta pesquisa:

[COLE O OUTPUT DO PERPLEXITY]

Quero saber:
1. O que está faltando que deveria estar aqui?
2. O que é genérico e poderia ser dito sobre qualquer coisa?
3. Onde há lacunas que um concorrente ou crítico usaria para atacar?
4. Qual afirmação parece sólida mas não tem evidência suficiente?

Não valide. Encontre os pontos fracos.
```
- Fase 3 — Blindagem (segundo modelo — Perplexity ou outro):
```text
Atue como concorrente agressivo que quer destruir este argumento:

[COLE O ARGUMENTO CONSOLIDADO]

Identifique:
1. As 3 brechas mais fáceis de atacar
2. Como eu atacaria cada uma publicamente
3. Como o argumento deveria ser ajustado para resistir

Seja implacável.
```
- Fase 4 — Consolidação (Claude):
```text
Com base na crítica e na blindagem recebidas, reescreva
o argumento original incorporando os ajustes necessários.

Preserve o que estava sólido.
Corrija cirurgicamente o que estava fraco.
Mantenha o tom: [DESCREVA — direto, técnico, etc.]
```
REGRAS:
- Sem análise na coleta.
- Só material-prima na coleta.
- Não valide na crítica.
- Encontre os pontos fracos.
- Seja implacável na blindagem.
- Preserve o que estava sólido.
- Corrija cirurgicamente o que estava fraco.
SC: —
OF: argumento ou conteúdo blindado contra as críticas mais óbvias.
CP: [TEMA], [COLE O OUTPUT DO PERPLEXITY], [COLE O ARGUMENTO CONSOLIDADO], [DESCREVA — direto, técnico, etc.]
OT: Perplexity; Claude; segundo modelo para blindagem.
SP: —
