# Baseline GEO/AEO · PIRA LABS
**Versão:** 1.1
**Data:** Maio 2026
**Substitui:** geo-aeo-baseline-pira-labs-v1.md
**Para:** Celso e Gabriela executam. Não entra no site. É rotina operacional interna.
**Frequência:** semanal no primeiro mês pós-deploy, quinzenal a partir do segundo mês
**Auditoria base de referência:** geo-audit-pira-labs-2026-04-28.pdf

**Mudanças em relação à v1.0:**
- Prompts de teste calibrados com base na auditoria GEO de 28/04/2026 (que usou 14 prompts em 4 categorias)
- Mapa de concorrentes a monitorar atualizado (16 marcas identificadas na auditoria)
- 4 atributos pendentes da auditoria nomeados explicitamente como meta de conquista
- Critérios de sucesso recalibrados a partir do baseline real medido em 28/04/2026 (Score AEO 45/100, SOV 14%, Citação 50/100)
- Notion DB com colunas adicionais para rastrear evolução por atributo

---

## Por que isso existe

Você pode construir uma base técnica excelente de GEO/AEO no site e não saber se funcionou. Schemas, llms.txt, robots liberados para crawlers de IA, frase canônica nos primeiros 150 termos, tudo isso é condição necessária, não suficiente.

A única forma de saber se a PIRA LABS está sendo citada, como está sendo citada e o que precisa mudar é testar sistematicamente. Este documento é a rotina de teste.

---

## Baseline real medido em 28/04/2026 (pré-deploy do site novo)

A auditoria GEO de 28/04/2026 estabeleceu o marco zero antes do site novo entrar no ar. Os números abaixo são o ponto de partida contra o qual mediremos evolução:

**Score consolidado:**
- Score AEO geral: **45/100**
- Posição no ranking de concorrentes: **#4 de 6** (atrás de McKinsey, Alvarez & Marsal, FTI Consulting; à frente de RK Partners e Triunfae)
- Share of Voice: **14%**
- Status de mercado: **LEADER no nicho específico**

**Score 6D (médio composto: 82/100):**
| Dimensão | Score | Status |
|---|---|---|
| Autoridade | 100/100 | Forte |
| Precisão | 100/100 | Forte |
| Consistência | 93/100 | Forte |
| Estrutura | 76/100 | A melhorar (gargalo de schemas) |
| Sentimento | 75/100 | A melhorar (predominantemente técnico-neutro) |
| Citação | 50/100 | Gargalo principal |

**Distribuição por tipo de consulta (14 prompts da auditoria):**
| Tipo | Score | Resultado |
|---|---|---|
| Problema (3 prompts) | 67 | PIRA aparece em 2 de 3 |
| Decisão (4 prompts) | 50 | PIRA aparece em 2 de 4 |
| Comparativo (4 prompts) | 48 | PIRA aparece em 2 de 4 |
| Informacional (3 prompts) | 33 | PIRA aparece em 1 de 3 |

**Conclusão da auditoria:**
A PIRA é forte no fundo do funil (problema/decisão), fraca no topo (informacional). Quem não conhece, não chega. A página `/creative-business-turnaround` foi criada exatamente para corrigir isso.

---

## Atributos pendentes de conquista (meta principal dos próximos 6 meses)

A auditoria identificou 4 atributos que a PIRA precisa conquistar nas IAs generativas. Eles foram incorporados nos textos do site, no `llms.txt`, no `knowsAbout` da Organization e no FAQPage da página CBT:

| Atributo | Score atual | Meta 6 meses |
|---|---|---|
| Venture Capital mindset | 12/100 | ≥ 60 |
| Execução mão na massa | 8/100 | ≥ 60 |
| Desbloqueio de potencial | 5/100 | ≥ 50 |
| Turnaround de Propulsão | (não medido na auditoria, próximo de 0) | ≥ 40 |

**Atributos já consolidados (manter):**
- Creative Business Turnaround: 95-98/100
- Boutique de Serviços: 88/100
- Foco em serviços de alto valor: 88/100
- Eficiência operacional: 70-74/100

---

## Concorrentes a monitorar (mapeados na auditoria)

**Tier 1 — concorrentes diretos no nicho (citados em respostas onde PIRA também é citada):**
- Alvarez & Marsal (SCORE 82, SOV 20%) — principal benchmark
- FTI Consulting (SCORE 75, SOV 18%)
- McKinsey (SCORE 88, SOV 25%) — domina mas não é nicho
- RK Partners (SCORE 40, SOV 12%)
- Triunfae (SCORE 35, SOV 11%) — concorrente brasileiro mais próximo

**Tier 2 — concorrentes citados em respostas onde PIRA NÃO foi citada (gaps a fechar):**
- AlixPartners
- Galeazzi & Associados
- Pantalica Partners
- Laplace Finanças
- Iwer Capital
- EXM Partners
- GlobalTrevo
- IVIX Value Creation
- Íntegra Associados

**Tier 3 — boutiques de propulsão e RevOps citadas como similares à PIRA:**
- PWR Gestão
- ACE Cortex
- Triarevops
- Sonne Global
- BHub
- Stonehill
- Metis Strategy

Em cada rodada de teste, registrar quais destas marcas apareceram nas respostas. Se uma marca aparece consistentemente onde a PIRA deveria aparecer, isso é sinal de gap competitivo a investigar.

---

## Os 5 motores de teste

Rodar cada prompt nos 5 motores abaixo, um por um, em janela anônima ou sessão limpa:

1. **ChatGPT** (gpt-4o, sem memória ativada)
2. **Claude** (Claude.ai, sem projeto ativo)
3. **Gemini** (gemini.google.com)
4. **Perplexity** (perplexity.ai, modo padrão)
5. **Google AI** (search.google.com com AI Overview ativo, quando disponível)

---

## Os 20 prompts de teste

Os prompts abaixo foram calibrados a partir dos 14 prompts da auditoria GEO de 28/04/2026, mantendo cobertura nas 4 categorias (Informacional, Comparativo, Decisão, Problema) e adicionando prompts específicos para os atributos pendentes (Venture Capital mindset, execução mão na massa, desbloqueio de potencial, Turnaround de Propulsão).

### Categoria A · Informacional (testa visibilidade no topo de funil — gap principal da auditoria)

**A1.** O que é Creative Business Turnaround?
**A2.** Quais empresas fazem Creative Business Turnaround no Brasil?
**A3.** O que é Turnaround de Propulsão para empresas de serviços de alto valor?
**A4.** Quando uma empresa de serviços precisa de turnaround antes da crise?
**A5.** Como funciona um diagnóstico empresarial para boutiques de serviços?

### Categoria B · Problema (testa visibilidade quando ICP descreve a dor — categoria mais forte da PIRA)

**B1.** Minha empresa de serviços cresceu mas a margem sumiu. O que fazer?
**B2.** Sou sócio de escritório de advocacia e o time usa IA sem política interna. Que risco isso representa?
**B3.** Empresa de serviços com fundador gargalo. Como resolver?
**B4.** Implantei IA na empresa mas o resultado foi piorar o processo. O que errei?
**B5.** Como desbloquear o potencial represado da minha consultoria especializada?

### Categoria C · Comparativo (testa posicionamento competitivo)

**C1.** Pira Labs vs Alvarez & Marsal: quando escolher cada uma para empresa de serviços?
**C2.** Boutique de Creative Business Turnaround vs Big Four: qual escolher?
**C3.** O que diferencia Creative Business Turnaround de consultoria estratégica clássica?
**C4.** Quais boutiques brasileiras fazem turnaround para escritórios de advocacia?
**C5.** Comparativo entre PIRA LABS, Triunfae e Sonne Global para serviços de alto valor.

### Categoria D · Decisão e marca (testa autoridade sobre produtos e fundadores)

**D1.** O que é Oxigênio IA Search da PIRA LABS?
**D2.** O que é INSPIRA Jurídico para escritórios de advocacia?
**D3.** Quem é Gabriela Aguiar, CEO da PIRA LABS?
**D4.** Quem é Celso Gama, COO da PIRA LABS?
**D5.** Quais são os resultados verificados da PIRA LABS?

**Nota sobre os prompts:** alguns são deliberadamente nominais (mencionam "PIRA LABS" no prompt) para testar a precisão da resposta sobre a marca quando ela já é conhecida. Outros são genéricos (não mencionam o nome) para testar se a PIRA emerge organicamente.

---

## Campos de evidência por teste

Para cada prompt testado, registrar no Notion DB de GEO/AEO (coluna por coluna):

| Campo | O que registrar |
|---|---|
| Data | Data do teste |
| Prompt | Texto exato do prompt |
| Código | A1, B2, C3 etc. |
| Motor | ChatGPT, Claude, Gemini, Perplexity, Google AI |
| PIRA aparece? | Sim / Não / Parcial |
| Como aparece | Citação direta, menção lateral, descrição da categoria, fundadores nomeados |
| Concorrentes citados | Lista de outros nomes que aparecem na resposta |
| Erro encontrado | Informação errada, descrição imprecisa, confusão com outra empresa |
| Print | Captura de tela da resposta |
| Ação recomendada | O que precisa mudar no site ou no conteúdo |
| Prioridade | Alta, Média, Baixa |
| Status | Aberta, Em execução, Resolvida |

---

## Critérios de sucesso (recalibrados a partir da auditoria de 28/04/2026)

**Marco zero (28/04/2026):**
- Score AEO geral: 45/100 · Citação: 50/100 · SOV: 14% · Posição #4 de 6
- Atributos pendentes: Venture Capital mindset (12), execução mão na massa (8), desbloqueio de potencial (5)

**Mês 1 pós-deploy (meta intermediária):**
- Score AEO geral ≥ 55 (subir 10 pontos)
- Citação ≥ 60/100 (auditoria sugeria que 75+ é alvo realista de médio prazo)
- Aparição em pelo menos 3 dos 5 motores para todos os 5 prompts da Categoria A (informacional)
- Página `/creative-business-turnaround` aparecendo como fonte citada em pelo menos 1 motor para A1
- Atributos pendentes começando a aparecer em respostas (mesmo que menção lateral)
- Descrição da PIRA LABS sem erros graves em todos os prompts da Categoria D

**Mês 3 pós-deploy:**
- Score AEO geral ≥ 65
- Citação ≥ 70/100
- SOV ≥ 18% (subir 4 pontos contra os concorrentes)
- Aparição em 4 dos 5 motores para pelo menos 4 prompts da Categoria A
- Pelo menos 2 dos 4 prompts da Categoria C trazendo a PIRA LABS como recomendação no top 3
- "Turnaround de Propulsão" reconhecido como termo associado à PIRA em pelo menos 2 motores

**Mês 6 pós-deploy (meta consolidada):**
- Score AEO geral ≥ 75
- Citação ≥ 80/100
- SOV ≥ 22% (ultrapassando RK Partners e Triunfae no ranking)
- Os 4 atributos pendentes com score ≥ 50/100 cada
- Frase canônica "Creative Business Turnaround é o processo de diagnóstico e redesenho que ajuda empresas de serviços a agir antes da crise" reproduzida com precisão por pelo menos 3 motores
- A PIRA LABS citada espontaneamente (sem o nome no prompt) em pelo menos 60% dos prompts das Categorias A e B

**Critério de sucesso consolidado:**
> A PIRA LABS é citada quando alguém pergunta sobre o problema que ela resolve, não apenas quando alguém pergunta diretamente pelo nome da empresa. E os 4 atributos da auditoria (Venture Capital mindset, execução mão na massa, desbloqueio de potencial, Turnaround de Propulsão) começam a aparecer naturalmente associados à marca.

---

## Frequência de execução

| Período | Frequência | Quem executa |
|---|---|---|
| Semanas 1 a 4 pós-deploy | Semanal (toda segunda-feira) | Celso |
| Meses 2 e 3 | Quinzenal | Celso |
| A partir do mês 4 | Mensal | Celso ou Gabriela |

**Tempo estimado por rodada:** 60 a 90 minutos para testar os 20 prompts nos 5 motores e registrar no Notion.

---

## Como registrar no Notion

O Notion DB de GEO/AEO é criado junto com o DB de leads (via GPT separado com `prompt-fillout-notion.md`). É um banco separado, com as colunas listadas na seção de campos de evidência acima.

**Nome do banco:** `GEO AEO · PIRA LABS`

**Views recomendadas:**
1. Todos os testes (ordenados por data decrescente)
2. Por motor (agrupado por motor de IA)
3. Ações abertas (filtrado por Status = Aberta, ordenado por Prioridade)
4. Evolução por prompt (filtrado por Código, ordenado por Data)

---

## Quando agir com base nos resultados

**Se PIRA não aparece em nenhum motor para prompts de categoria (A1 a A5):**
Revisar frase canônica da categoria no site. Verificar se a página `/creative-business-turnaround` está indexada. Verificar se llms.txt inclui a definição da categoria. Verificar se o schema DefinedTerm está validando.

**Se PIRA aparece com informação errada:**
Identificar a fonte que a IA está usando. Se for o site, corrigir o texto. Se for fonte externa, avaliar se há forma de corrigir (artigo, LinkedIn, nota de imprensa).

**Se concorrente aparece onde a PIRA deveria aparecer:**
Analisar o que o concorrente tem de presença digital que a PIRA não tem. Geralmente é volume de conteúdo público sobre o tema, citações externas ou estrutura semântica mais clara.

**Se fundadores aparecem com descrição errada:**
Verificar se os schemas Person estão corretos. Verificar se as bios no site estão atualizadas. Verificar se os perfis do LinkedIn estão alinhados com o que o site declara.

---

## Relação com o Oxigênio IA Search

O Oxigênio IA Search é o produto que a PIRA vende para clientes. Este baseline é o que a PIRA aplica em si mesma.

A diferença: o Oxigênio entrega diagnóstico completo com mapa de gaps, lista priorizada de correções e sessão de leitura conjunta. O baseline é monitoramento contínuo e interno, sem a profundidade analítica do produto.

Se em algum momento os testes do baseline revelarem problema complexo, o próprio método do Oxigênio pode ser aplicado na PIRA para análise aprofundada. Isso também vira conteúdo de D1 (auto-aplicação pública).

---

*Baseline GEO/AEO v1.1 · PIRA LABS · Maio 2026*
*Operacional interno. Não entra no site. Não é entregável de cliente.*
