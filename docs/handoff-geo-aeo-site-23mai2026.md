HANDOFF — GEO/AEO para o Projeto Site
Origem: Projeto GEO/AEO/SEO — Pira Labs
Data: 23/05/2026
Destino: Projeto Site Refação
Propósito: transferir decisões e especificações de citabilidade que o site precisa incorporar

CONTEXTO EM UMA FRASE
O diagnóstico D1 (12/05/2026) confirmou que o site da Pira Labs tem a melhor infraestrutura técnica GEO dos três concorrentes analisados. O problema não é técnico — é editorial e de autoridade externa. O site está sendo lido pelas IAs mas não está sendo citado como solução. Isso se resolve com páginas de conteúdo editorial, não com mudanças na arquitetura técnica.

SEÇÃO 1 — O QUE NÃO MUDAR
O Fator 3 (AI-ready Structure) está classificado como Forte no D1. Qualquer refação precisa preservar:
Next.js com renderização estática. Headings semânticos com hierarquia clara. Seções auto-contidas. FAQs estruturadas existentes. BreadcrumbList. Lighthouse 96 mobile. IndexNow ativo para Bing.
Regra: se uma mudança de refação quebrar qualquer um desses elementos, ela degrada o único fator que a Pira tem Forte comparado aos concorrentes.

SEÇÃO 2 — O QUE CRIAR: TRÊS PÁGINAS EDITORIAIS
Essas páginas são a principal ação de citabilidade do projeto. Vão para piralabs.com.br, não para o Substack. Autoridade de domínio precisa ficar no domínio próprio.
Especificações estruturais obrigatórias para todas as três páginas
Baseadas em GEO-SFE (arXiv:2603.29979, 6 plataformas, 200 artigos, +17,3% citabilidade com CI p<0,001):
Profundidade de headings: H1 + H2s. Alvo: 3-5 níveis. Mais que 5 dilui atenção dos modelos. Menos que 3 não gera hierarquia suficiente para retrieval.
Comprimento de parágrafo: 150-300 palavras por bloco. Blocos acima de 300 palavras têm -31% de atenção no trecho do meio. Blocos abaixo de 150 palavras reduzem citabilidade em -23%.
Proporção de elementos estruturados: 25-35% do conteúdo em tabelas ou listas. Formatos estruturados têm 43% mais precisão de extração pelos modelos do que prosa equivalente. Acima de 35% compromete leitura humana.
Ênfase visual: aplicar bold em 5-10% do conteúdo. Prioridade por posição: início de frase (peso 2,0×) > fronteira de seção (peso 1,5×) > posição padrão (peso 1,0×).
Dado verificável: ao menos um número concreto nos primeiros 100 palavras de cada página. Os dados aprovados pelo v13: −64% → +15% em 6 meses, R$16M → R$163M em 24 meses, 400h → 36h. Nunca nomear Diageo — sempre "multinacional do setor de bebidas".
Links internos: cada página editorial deve linkar para ao menos duas páginas de produto (/inspira, /transpira, /inspira/oxigenio) e para as outras páginas editoriais entre si. Alvo de densidade: 0,15-0,20 links internos por conceito.

Página 1 — "Empresa de serviços crescendo mas perdendo margem: diagnóstico das 6 causas"
URL sugerida: /crescimento-sem-margem ou /margem-empresa-servicos
H1: responde diretamente a query do ICP. Não menciona produto, não menciona Pira Labs.
Abertura (150-200 palavras): abre com o caso −64% → +15% em 6 meses. Liga o dado ao padrão que o ICP reconhece: faturamento sobe, margem some, problema não está onde se imagina.
H2s (6 blocos de 150-250 palavras cada):

Causa 1: modelo de precificação que nunca foi revisado
Causa 2: escopo que cresce sem contrato que acompanha
Causa 3: entrega que depende de pessoas específicas (gargalo humano)
Causa 4: custo de aquisição de cliente subindo sem perceber
Causa 5: tecnologia acelerou o trabalho mas não o resultado entregue
Causa 6: cultura de esforço sendo confundida com cultura de resultado

Tabela (25-35% do conteúdo): Causa × Sinal observável × O que piora se não agir.
Definição explícita: Creative Business Turnaround — o que é, por que "antes" é a palavra que define o método.
Fechamento: "Se você reconhece esses sinais, você ainda está dentro da janela." CTA para Oxigênio.

Página 2 — "Creative Business Turnaround: o que é e quando faz sentido contratar"
URL sugerida: /creative-business-turnaround (verificar se já existe variação desta URL — se sim, avaliar se expande ou cria nova)
H1: define a categoria sem ambiguidade nos primeiros 100 palavras. "O nome veio de fora. A alma, o método e o recorte são da Pira."
Tabela obrigatória: Business Turnaround tradicional vs Creative Business Turnaround. Colunas: quando entra / o que diagnostica / o que preserva / resultado típico. Esta tabela tem uplift de absorção +55,3% (Zhang Kai) por ser formato comparativo.
H2s:

O que "Creative" significa — o problema de serviços não é só financeiro ou operacional
O que "Turnaround" exige — virada real com resultado verificável, não relatório
O que "Antes" muda — a mesma ação antes produz resultado que depois não consegue mais

Definição explícita do INSPIRA e TRANSPIRA: vocabulário proprietário tem uplift de absorção +57,3% quando explicitamente definido (Zhang Kai).
Fechamento: três caminhos a partir do Oxigênio (do v13, Seção 8).

Página 3 — "Como saber se sua empresa de serviços precisa de reestruturação"
URL sugerida: /diagnostico-empresa-servicos
Formato: diagnóstico em perguntas. Cada H2 é uma pergunta que o ICP faz quando algo está errado, com resposta objetiva em 150-250 palavras.
Perguntas (H2s):

Sua empresa cresce em receita mas a margem não acompanha?
Toda decisão importante passa por você?
Você sabe exatamente qual cliente ou projeto é mais lucrativo?
Seu time trabalha mais do que antes mas entrega o mesmo?
Você sentiria confiança em contratar mais 3 pessoas hoje?
O que diferencia sua empresa está documentado em algum lugar?

Fechamento: "Se você respondeu sim em mais de duas perguntas, o problema está no modelo, não na equipe. E você ainda está dentro da janela." CTA para INSPIRA ou Oxigênio conforme o grau de consciência declarado.

SEÇÃO 3 — O QUE DEFER: SCHEMA.ORG
Schema.org fica para depois da estabilização dessas três páginas. Razão técnica e metodológica: LLMs leem Schema como texto comum, não como estrutura (apenas 22,2% dos 54 estudos mostram correlação). O ganho de Schema não justifica implementar antes de ter o conteúdo editorial que é o fator de maior retorno.
Quando implementar: após as três páginas publicadas e indexadas, e após o copy do site estar estabilizado. Coordenar com projeto GEO/AEO antes de implementar.
Tipos prioritários quando chegar a hora: Organization (entidade principal), Person (Gabriela e Celso), FAQPage (para blocos de FAQ existentes), Article (para páginas editoriais).

SEÇÃO 4 — PENDÊNCIAS TÉCNICAS A EXECUTAR NO SITE
CNPJ: quando a transferência for confirmada na Receita Federal, atualizar em 5 arquivos:

public/.well-known/ai-agents.json
app/politica-privacidade/page.tsx
app/termos/page.tsx
docs/politica-privacidade-pira-labs-v1.md
docs/termos-de-uso-pira-labs-v1.md

Flag D1: ativar a variável NEXT_PUBLIC_D1_ACTIVE (ou equivalente) no .env quando o bloco OXIGÊNIO-8 estiver construído com os achados reais do diagnóstico. Esse bloco é pré-requisito para publicação do Post D1 no Substack.
llms.txt: verificar se existe. Se não existe, criar. Conteúdo mínimo: nome canônico da empresa, fundadores, produto Oxigênio, links para as páginas editoriais quando criadas. Correlação com citabilidade é baixa (1,9% dos estudos) mas o custo de criação é de minutos e não há razão para não ter.
robots.txt: verificar se facebookexternalhit ainda está allowlisted (fix confirmado em sessão anterior). Verificar se crawlers de IA como GPTBot, Googlebot-Extended, Anthropic-AI estão na política correta (permitidos, não bloqueados).

SEÇÃO 5 — O QUE ESTE HANDOFF NÃO COBRE
O redesign visual e a refação de copy dos produtos existentes (/inspira, /transpira, /inspira/oxigenio) têm projeto próprio. Este handoff trata exclusivamente de:

Novas páginas editoriais e suas especificações de citabilidade
Manutenção da infraestrutura técnica GEO existente
Pendências técnicas mapeadas no D1

Qualquer mudança de copy nas páginas de produto precisa ser avaliada com o critério de citabilidade antes de implementar: o conteúdo novo responde diretamente a uma query do ICP? Se não, não melhora citabilidade.

Origem: Projeto GEO/AEO/SEO — Pira Labs · 23/05/2026
Coordenar com projeto GEO/AEO antes de implementar Schema.org ou alterar estrutura de headings existentes.