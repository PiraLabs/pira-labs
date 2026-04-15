---
tipo: prompt
tags: [diagnóstico-cliente, pesquisa-prospect, estratégia]
uso: [diagnóstico-cliente, pesquisa-prospect]
destino: A
---

T: Diagnóstico Pré-Reunião com Prospect
F: [Arsenal Pira Labs — fonte não recuperada]
TP: workflow
FN: Estrutura a preparação de uma reunião com prospect em três movimentos: pesquisa, diagnóstico e preparação de objeções. Use antes de qualquer reunião com prospect da Pira Labs.
PERSONA: —
ETAPAS:
- Passo 1 — Pesquisa básica (Perplexity):
```text
Pesquise [NOME DA EMPRESA].
Quero saber:
- Setor e porte estimado
- O que fazem e para quem
- Sinais públicos de crescimento, problema ou mudança recente
- Quem é o decisor (CEO, sócio, diretor)
Só dados verificáveis. Sem análise ainda.
```
- Passo 2 — Diagnóstico (Claude, com Documento Mestre no projeto):
```text
Com base nesta pesquisa sobre [EMPRESA]:

[COLE O OUTPUT DO PERPLEXITY]

E com base no Documento Mestre da Pira Labs, me diga:

1. Qual das três portas de entrada provavelmente se aplica?
   - Gargalo de decisão
   - Crescimento sem estrutura
   - Dados que não viram decisão

2. Quais sinais do que foi pesquisado confirmam essa hipótese?

3. Três perguntas de diagnóstico para abrir a reunião que:
   - Revelem onde está o problema real
   - Não soem como questionário
   - Não possam ser respondidas com sim ou não

4. Dois movimentos iniciais que a Pira Labs poderia propor
   já nesta primeira conversa.

Tom: direto. Sem jargão de consultoria.
```
- Passo 3 — Preparação de objeções (Claude):
```text
Quais são as três objeções mais prováveis que [EMPRESA/PERFIL]
levantaria para contratar a Pira Labs?

Para cada objeção:
- O que está por trás dela (medo real, experiência anterior, contexto)
- Como responder sem rebater diretamente
- Uma pergunta que devolve o controle da conversa
```
REGRAS:
- Só dados verificáveis.
- Sem análise ainda na etapa de pesquisa.
- Tom: direto.
- Sem jargão de consultoria.
SC: —
OF: contexto do prospect + porta de entrada provável + 3 perguntas de abertura + 2 movimentos iniciais.
CP: [NOME DA EMPRESA], [EMPRESA], [COLE O OUTPUT DO PERPLEXITY], [EMPRESA/PERFIL]
OT: Perplexity; Claude; Documento Mestre da Pira Labs no projeto.
SP: —
