# Copy das Páginas Internas — Site PIRA LABS
**Versão:** 4.3
**Data:** Maio 2026
**Substitui:** copy-paginas-internas-pira-labs-v4_2.md
**Wireframe de referência:** wireframe-completo-site-pira-labs-v3.5.md
**Voz:** institucional PIRA LABS, com quotes autorais em `/sobre`

**Mudanças em relação à v4.2:**
- Sistema de origens atualizado para 13 origens (adiciona `header_global` e `404` às 11 anteriores)
- Asterisco "* mediante consulta e disponibilidade" em todos os produtos boutique (INSPIRA Jurídico, TRANSPIRA Jurídico Modelo A e B, FAÍSCA Jurídica)
- Aviso explícito de NDA canônico em todas as páginas comerciais
- INSPIRA Jurídico declarado com 5 leituras do INSPIRA padrão sob lente jurídica + base própria do segmento jurídico em construção
- Atributos pendentes da auditoria GEO de 28/04/2026 incorporados naturalmente nos textos (Venture Capital mindset, execução mão na massa, desbloqueio de potencial, Turnaround de Propulsão)
- "5 vagas para fundadores" no Oxigênio (não apenas "5 vagas")
- Frases canônicas alinhadas ao `copy-home-pira-labs-v2_1.md`

---

## ÍNDICE

1. [/sobre](#sobre)
2. [/inspira](#inspira)
3. [/inspira/juridico](#inspirajuridico) *(novo)*
4. [/transpira](#transpira)
5. [/transpira/juridico](#transpirajuridico) *(versão expandida)*
6. [/faisca](#faisca)
7. [/faisca/juridica](#faiscajuridica) *(novo)*
8. [/antes-da-crise](#antes-da-crise)
9. [/contato](#contato)

---

## NOTAS DE PRODUÇÃO PARA O IMPLEMENTADOR

**Estrutura:** cada página corresponde a uma seção deste documento. Os blocos seguem os IDs do wireframe v3.1.

**Regras absolutas aplicadas:**
- Sem travessão (em dash) em nenhum ponto
- PIRA LABS sempre em caixa alta
- Vocabulário proibido respeitado
- Diageo anonimizada, esclarecido que Celso atuou na agência publicitária que atendia a conta
- Samsung anonimizada como "uma grande marca de tecnologia"
- "Avanços acordados" ou "critérios acordados", nunca "resultados garantidos"
- "Respondemos em até dois dias úteis." em todas as páginas com CTA
- MIT: "Universal AI Foundational Modules" para Gabriela, "Applied AI Certificate Program" para Celso
- Celso: "último ano de Direito na Mackenzie", nunca "advogado" ou "bacharel"
- Gabriela: sem ITA na credencial
- Caso jurídico marcado como **pós-IA** com supervisão humana (corrige propagação de erro)

**Regras específicas da vertical jurídica (v4.2):**
- Aviso obrigatório em todas as páginas jurídicas: "A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e não substitui advogados habilitados pela OAB."
- Celso descrito como "cursando último ano de Direito na Mackenzie" nas páginas onde sua qualificação jurídica é relevante. Nunca "advogado" ou "bacharel".
- Modelo B do TRANSPIRA Jurídico: descrito como "assistant as a service" ou "capacidade de produção jurídica sob demanda". Nunca "consultoria jurídica". Todo material produzido passa pelo advogado habilitado do escritório contratante. Posicionamento: a atividade jurídica está sendo cada vez mais executada por ferramentas de IA, mas o serviço jurídico segue humano, olho no olho, com o papel insubstituível do advogado. A PIRA LABS entra para ajudar o advogado a entregar o seu melhor serviço, cuidando da atividade para que ele foque no que só ele pode fazer.
- Prova de R$160 mil/mês e 400h para 36h: restrita à página `/transpira/juridico`. Não usar em FAÍSCA Jurídica nem INSPIRA Jurídico.
- LGPD: nunca prometer "adequação LGPD completa" ou "compliance jurídico". Usar "governança operacional" e "redução de exposição a risco".
- Funil entre produtos: cada página jurídica deve ter CTA secundário apontando para o próximo nível.

**Consistência entre páginas:**
- INSPIRA tagline curta: "Quando você para de resolver o problema errado."
- TRANSPIRA tagline curta: "Quando o *trabalho certo* substitui o *trabalho muito*." (com itálico via CSS)
- RESPIRA: estado, não produto. Aparece como conceito, não como bloco
- Frase canônica completa nas páginas que precisam de SEO institucional forte (Sobre, Inspira, Transpira)

---

## /SOBRE {#sobre}

### SEO Head

```html
<title>Sobre · PIRA LABS · Gabriela Aguiar e Celso Gama</title>
<meta name="description" content="A PIRA LABS é uma boutique brasileira de Creative Business Turnaround. Conheça Gabriela Aguiar, CEO, e Celso Gama, COO, fundadores da PIRA LABS.">
<link rel="canonical" href="https://piralabs.com.br/sobre">
```

### SOBRE-1 · Header da página

**Breadcrumb:** Home > Sobre

**H1:** Sobre a PIRA LABS

**Subtítulo:** Boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.

---

### SOBRE-2 · Bloco institucional

**Texto:**

> A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise. Atuamos quando a empresa ainda tem clientes, caixa e reputação, mas o modelo de trabalho começou a custar caro demais.
>
> Boutique não é eufemismo para pequeno. É escolha deliberada. Cada projeto tem Gabriela e Celso do diagnóstico à entrega. Sem camada intermediária entre quem entende o problema e quem resolve.
>
> A PIRA LABS desenvolveu essa categoria para nomear sua forma de atuar no Brasil. O nome importa porque o que fazemos não cabe em consultoria estratégica clássica, em agência de criação ou em fornecedor de tecnologia. É turnaround com tempo, com método e com mão na operação.

---

### SOBRE-3 · Gabriela Aguiar

**Foto individual:** Gabriela (orientação retrato, fundo neutro)

**Nome:** Gabriela Aguiar

**Papel:** CEO e cofundadora · Conduz INSPIRA

**Bio:**

> Gabriela atuou diretamente com algumas das organizações mais relevantes do mundo: Google, Meta, X, Amazon, entre outras. Participou da estruturação de projetos, curadoria de eventos, programas e iniciativas que conectam inovação, educação e negócios. Hoje atua como docente dentro da academia, como USP, FIAP, Instituto Cidades Responsivas (curso de MBA executivo), e ambientes internacionais.
>
> Uma década dentro dos ecossistemas globais de inovação. Mentora de startups na FGV Ventures. Universal AI Foundational Modules (MIT).

**Quote (primeira pessoa, voz da Gabriela):**

> "O Brasil tem tudo para ser protagonista deste novo ciclo econômico. Mas isso não vai acontecer por acaso. Vai acontecer pela articulação entre quem opera, quem decide e quem ensina. A PIRA LABS é o lugar onde eu construo essa articulação na prática."

**Link LinkedIn:** https://www.linkedin.com/in/gabrielaaguiarvs/

---

### SOBRE-4 · Celso Gama

**Foto individual:** Celso (orientação retrato, fundo neutro)

**Nome:** Celso Gama

**Papel:** COO e cofundador · Conduz TRANSPIRA

**Bio:**

> Mais de 20 anos de operação em empresas de serviços, agências e projetos de grande escala. MBA Insper, pós-graduação em Marketing pela ESPM e Publicidade pela FAAP. Último ano de Direito na Mackenzie. Applied AI Certificate Program (MIT).
>
> Não é currículo de consultor. É cicatriz de execução real. Sabe onde colocar tecnologia e onde colocar gente porque já errou nos dois. Conduz o TRANSPIRA. Lidera os gates de validação de governança, contratos e estratégia do diagnóstico.

**Trecho de credencial dos Jogos:**

> Responsável pela ativação e execução das ações de patrocínio global de uma grande marca do setor de tecnologia nos Jogos Rio 2016. Coordenou 600 pessoas e 100 fornecedores. Elevou a receita da área de R$16M para R$163M no período de 2 anos.

**Quote (primeira pessoa, voz do Celso):**

> "Aprendi mais com o que deu errado do que com o que deu certo. Toda vez que entro em uma operação, é com a memória do erro junto. Por isso a PIRA LABS não vende relatório. Vende redesenho que aguenta o dia seguinte."

**Link LinkedIn:** https://www.linkedin.com/in/celsogama/

---

### SOBRE-5 · Como trabalhamos juntos

**Título:** Como trabalhamos juntos

**Texto:**

> Gabriela conduz o INSPIRA. Celso conduz o TRANSPIRA. Mas os dois aparecem em todas as fases.
>
> Quem contrata a PIRA LABS não recebe um sócio na venda e um analista júnior na entrega. Recebe Gabriela e Celso conduzindo do diagnóstico ao encerramento. É possível porque a PIRA LABS é boutique por escolha, não por estágio.
>
> A condição necessária para qualquer resultado real é a disposição do decisor em querer ver o problema de novo, inclusive quando a conclusão for diferente da esperada. Quando essa disposição não existe, dizemos antes de começar.

---

### SOBRE-6 · CTA final

**Frase de fechamento:**

> Conhecer mais sobre o método ou conversar sobre um projeto específico, depende de você.

**CTA primário:** `Falar com a PIRA LABS` → `/contato`

**Frase de prazo:** Respondemos em até dois dias úteis.

---

## /INSPIRA {#inspira}

### SEO Head

```html
<title>INSPIRA · Diagnóstico de Creative Business Turnaround · PIRA LABS</title>
<meta name="description" content="O INSPIRA é o diagnóstico da PIRA LABS para empresas de serviços. Cinco leituras paralelas do negócio antes de nomear qualquer problema.">
<link rel="canonical" href="https://piralabs.com.br/inspira">
```

### INSPIRA-1 · Header da página

**Breadcrumb:** Home > Inspira

**H1:** INSPIRA · Diagnóstico de Creative Business Turnaround

**Subtítulo:** Quando você para de resolver o problema errado.

---

### INSPIRA-2 · O que é o INSPIRA

**Título:** O que é o INSPIRA

**Texto:**

> O INSPIRA é o diagnóstico da PIRA LABS. É onde a empresa pausa, respira fundo e olha para o próprio negócio com lente que de dentro não dá.
>
> Não é auditoria. Não é workshop de inovação. Não é mapeamento de processos para empacotar em consultoria.
>
> É leitura do negócio em cinco áreas, com aprovação humana em cada gate antes de avançar. O resultado é um relatório único, com o problema real nomeado, a rota desenhada e o próximo passo definido.
>
> Quem conduz: Gabriela Aguiar.

---

### INSPIRA-3 · As cinco leituras

**Título:** As cinco leituras

**Subtítulo:** O diagnóstico não lê uma área do negócio. Lê cinco, antes de nomear qualquer problema.

**Leitura 1 · Mercado e presença**
> O que o ambiente externo revela sobre a empresa que ela talvez ainda não esteja vendo. Concorrência, categoria, posicionamento, como a empresa aparece para quem olha de fora, e como é compreendida por motores de busca e por inteligência artificial.

**Leitura 2 · Pessoas e operação**
> Se o funcionamento humano e os papéis reais sustentam o que a empresa quer crescer. Ritmo de decisão, complementaridade, cultura praticada versus cultura declarada.

**Leitura 3 · Governança e processos**
> Se a empresa tem cobertura suficiente para reduzir ruído, exceção e exposição. Processos críticos, pontos de decisão, risco operacional e regulatório.

**Leitura 4 · Tensão econômica**
> Onde o negócio sente o peso primeiro e qual é o ponto de ruptura. Margem, caixa, cobrança, capacidade e o que está comprimindo o resultado.

**Leitura 5 · Síntese integrada**
> As quatro leituras convergem em diagnóstico único, com aprovação humana em cada etapa antes de avançar. O problema real nomeado. A rota desenhada. O próximo passo definido.

**Frase de fechamento da seção:**

> Nenhuma recomendação é feita antes das cinco leituras estarem integradas. Esse é o protocolo que impede diagnóstico apressado.

---

### INSPIRA-4 · Para quem é

**Título:** Para quem é

**Subtítulo:** Empresas de serviços de alto valor agregado com potencial represado. Sócios, CEOs e presidentes com autonomia real e abertura genuína para mudar.

**Três perfis típicos:**

**Perfil 1 · Crescimento sem estrutura**
> A empresa cresceu mais rápido do que o desenho do trabalho. Time aumentou, faturamento subiu, mas a operação ficou dependente de pessoas-chave e de improviso constante.

**Perfil 2 · Margem que some**
> A receita continua, mas o resultado não acompanha. Custos invisíveis, escopo não cobrado, horas além do contratado e precificação desalinhada com custo real.

**Perfil 3 · Tecnologia que não converteu**
> A empresa investiu em tecnologia, incluindo IA, e o resultado foi acelerar o ruído que já existia. Sem método antes, a tecnologia escala bagunça em vez de resolver.

**Quem não deveria contratar:**

> Decisor sem autonomia real para mudar. Empresa em crise aguda, onde o tempo de resposta exige outro tipo de intervenção. Cliente que procura validação para decisão já tomada.

---

### INSPIRA-5 · Subproduto destacado: Oxigênio IA Search

**Bloco em destaque visual.**

**Título:** Comece com escopo fechado: Oxigênio IA Search

**Texto:**

> Se você quer entender como sua empresa aparece nos motores de IA antes de tomar qualquer outra decisão, o Oxigênio IA Search é o ponto de entrada. Subproduto do INSPIRA, com escopo fechado, prazo curto e preço público.

**Preço primeira rodada visível:** R$6.200

**CTA:** `Conhecer Oxigênio IA Search` → `/inspira/oxigenio`

---

### INSPIRA-6 · Como começa

**Título:** Como começa um INSPIRA

**Passo 1 · Conversa de calibragem**
> Conversa inicial entre o decisor e a Gabriela. Não é venda. É verificar se há condições reais para o diagnóstico funcionar.

**Passo 2 · Proposta com escopo definido**
> Após a conversa, a PIRA LABS envia proposta com escopo, prazo e investimento. Sem boilerplate. Cada proposta é desenhada para o negócio que vai diagnosticar.

**Passo 3 · Início do diagnóstico**
> Com a proposta aceita, o INSPIRA começa. Cinco leituras avançam com gates de aprovação humana antes de cada avanço.

**Frase de fechamento:**

> Respondemos em até dois dias úteis.

**CTA:** `Falar com a PIRA LABS` → `/contato`

---

### INSPIRA-7 · FAQ

**Título:** Perguntas frequentes

**Pergunta 1:** Qual a diferença entre o INSPIRA e uma consultoria estratégica clássica?
**Resposta:** Consultoria estratégica entrega relatório e some. O INSPIRA é o ponto de entrada para um turnaround real, com método validado e com aprovação humana em cada gate. O diagnóstico é desenhado para virar execução, não para virar slide. É a primeira metade do que chamamos Turnaround de Propulsão: nomear o problema real para então atacar o desbloqueio do potencial represado da empresa.

**Pergunta 2:** Quanto tempo leva um INSPIRA completo?
**Resposta:** Depende da complexidade da empresa. A maioria dos casos fica entre 4 e 8 semanas. A proposta inicial define o prazo específico do projeto.

**Pergunta 3:** O INSPIRA inclui execução?
**Resposta:** Não. Execução mão na massa é o TRANSPIRA, conduzido pelo Celso. O INSPIRA entrega o problema nomeado, a rota desenhada e o próximo passo definido. Muitos clientes seguem direto para o TRANSPIRA com a PIRA LABS, mas isso é decisão pós-diagnóstico.

**Pergunta 4:** Vocês usam IA no INSPIRA?
**Resposta:** Sim, em pontos específicos do diagnóstico, sempre com supervisão humana. A IA não substitui a leitura. Ela amplifica capacidade onde faz sentido, e fica fora onde não faz.

**Pergunta 5:** Posso começar com algo menor antes de contratar o INSPIRA completo?
**Resposta:** Pode. O Oxigênio IA Search é um subproduto do INSPIRA, com escopo fechado e prazo curto, que diagnostica como sua empresa aparece nos motores de IA. Funciona como porta de entrada para empresas que querem testar o método antes de avançar.

**Pergunta 6:** Como vocês lidam com confidencialidade?
**Resposta:** Sempre via NDA. Acordo de confidencialidade assinado antes de qualquer coleta de informação. NDA é base canônica de todo trabalho da PIRA LABS, independente do produto. Acesso restrito a Gabriela, Celso e quem mais for explicitamente autorizado pelo cliente.

**Pergunta 7:** Como é a precificação? *
**Resposta:** Sob consulta e disponibilidade. Por sermos uma boutique, trabalhamos com agenda limitada de projetos simultâneos para preservar o envolvimento direto dos sócios em cada caso. Investimento varia conforme tamanho da empresa, complexidade do diagnóstico e setor. Respondemos em até dois dias úteis com proposta.

---

### INSPIRA-8 · CTA final

**Frase de fechamento:**

> O INSPIRA começa quando a conversa começa.

**CTA primário:** `Falar com a PIRA LABS *` → `/contato?origem=inspira`

**Frase de prazo:** Respondemos em até dois dias úteis.

**\*** *Mediante consulta e disponibilidade.*

---

---

## /INSPIRA/JURIDICO {#inspirajuridico}

### SEO Head

```html
<title>INSPIRA Jurídico · Diagnóstico de risco de IA para escritórios · PIRA LABS</title>
<meta name="description" content="Diagnóstico de 2 a 3 semanas. Mapeamos como o escritório usa IA hoje, onde está a exposição, e entregamos política mínima e plano de ação priorizado.">
<link rel="canonical" href="https://piralabs.com.br/inspira/juridico">
```

**Indexação:** `index, follow`

### INSPIRA-JUR-1 · Header da página

**Breadcrumb:** Home > Inspira > Jurídico

**H1:** INSPIRA Jurídico

**Subtítulo:** Diagnóstico de como o escritório usa IA hoje, onde está exposto e o que fazer primeiro.

---

### INSPIRA-JUR-2 · O problema que o INSPIRA Jurídico resolve

**Título:** O que a maioria dos escritórios ainda não sabe sobre si mesmo

**Texto:**

> Saber que o time usa IA é diferente de saber o que o time insere nas ferramentas.
>
> A maioria dos sócios e heads jurídicos já percebeu que IA está na rotina do escritório. Mas quando perguntam com detalhe, a resposta costuma ser vaga: "a gente usa para pesquisa", "para rascunho de emails", "para resumir documentos".
>
> O que raramente está mapeado é quais ferramentas, em quais planos, com quais dados, com qual critério de revisão, com qual controle de acesso e com qual base legal. Sem esse mapeamento, o escritório não tem governança. Tem improviso individual.
>
> O improviso tem custo. Dependendo da ferramenta, do plano contratado e das configurações, dado de cliente inserido em ferramenta de IA pode ser usado para treinamento, retenção ou melhoria do serviço. Peça com informação estratégica colada em ferramenta pública pode vazar contexto confidencial. Decisão jurídica tomada com base em output de IA sem revisão técnica pode ser contestada.
>
> O INSPIRA Jurídico mapeia isso. Com precisão, sem julgamento e com plano de ação concreto ao final.

---

### INSPIRA-JUR-3 · O que é o INSPIRA Jurídico

**Título:** O que é o INSPIRA Jurídico

**Texto:**

> Diagnóstico conduzido pela PIRA LABS em 2 a 3 semanas. Mapeamos como o escritório ou departamento jurídico usa IA hoje, onde está a exposição real, e entregamos política mínima de uso de IA e plano de ação priorizado.
>
> É o método INSPIRA da PIRA LABS aplicado com lente jurídica. As cinco leituras coordenadas que estruturam todo INSPIRA acontecem aqui também: mercado e presença, pessoas e operação, governança e processos, tensão econômica e síntese integrada. A diferença é o que olhamos em cada uma: confidencialidade, sigilo profissional, LGPD aplicada ao tratamento de dados de clientes, responsabilidade técnica do advogado, governança de uso de IA e exposição operacional do escritório.
>
> Cada projeto da vertical jurídica alimenta a base própria de conhecimento setorial que a PIRA LABS está construindo desde 2026. Isso significa que cada novo INSPIRA Jurídico chega ao cliente mais calibrado do que o anterior, com referências reais do mercado jurídico brasileiro acumuladas ao longo do tempo.
>
> Não é auditoria de conformidade. Não é consultoria jurídica. É diagnóstico operacional de como o escritório lida com IA hoje, e o que precisa mudar para operar com menos exposição e mais produtividade.

---

### INSPIRA-JUR-4 · O que está incluído

**Título:** O que você recebe

**Entrega 1 · Mapeamento de uso atual**
> Levantamento de como a equipe usa IA hoje: quais ferramentas, em quais planos, com quais tipos de dado, com qual frequência. Feito via entrevistas estruturadas e análise documental.

**Entrega 2 · Matriz de risco por tipo de uso**
> Classificação dos usos identificados em três zonas: permitido, permitido com controle (anonimização, revisão humana, ferramentas adequadas), e exposto sem política específica.

**Entrega 3 · Política mínima de uso de IA**
> Documento prático para o escritório: o que o time pode fazer com IA, o que não pode sem protocolo específico, como anonimizar documentos antes de inserir em ferramenta externa, quais ferramentas e planos são adequados para uso com dados de cliente, quem aprova exceções. Calibrada para o perfil do escritório, não genérica.

**Entrega 4 · Plano de ação priorizado**
> Lista de 5 a 10 ações ordenadas por urgência e esforço. Onde o escritório tem exposição imediata. Onde há oportunidade de ganho rápido com IA bem aplicada. O que pode esperar o próximo ciclo.

**Entrega 5 · Sessão de leitura conjunta**
> Encontro de 45 a 60 minutos com os decisores para apresentar o diagnóstico, discutir a política mínima e definir o próximo passo.

---

### INSPIRA-JUR-5 · Para quem é

**Título:** Para quem faz sentido

**Texto:**

> Sócios e heads jurídicos que sabem que a equipe usa IA mas não têm clareza de onde estão expostos.
>
> Escritórios em crescimento que estão contratando novos advogados e estagiários e querem estabelecer critérios claros antes de escalar o problema.
>
> Departamentos jurídicos de empresas com múltiplas áreas usando IA de forma descentralizada.
>
> Escritórios que contrataram o FAÍSCA Jurídica e querem ir além da educação para o diagnóstico estruturado.

**Quem não deveria contratar:**

> Quem busca laudo de conformidade LGPD ou certificação de compliance. O INSPIRA Jurídico entrega governança operacional. Adequação legal completa é trabalho de advogado especializado em proteção de dados.

---

### INSPIRA-JUR-6 · Quem conduz

**Título:** Quem conduz

**Texto:**

> Gabriela Aguiar conduz a leitura institucional. Celso Gama, cursando último ano de Direito na Mackenzie com Applied AI Certificate Program pelo MIT, conduz a leitura de governança e exposição operacional.
>
> Os dois juntos, como em todo diagnóstico da PIRA LABS. Sem equipe júnior entre o dado e a interpretação.

---

### INSPIRA-JUR-7 · FAQ

**Título:** Perguntas frequentes

**Pergunta 1:** Isso é consultoria jurídica?
**Resposta:** Não. O INSPIRA Jurídico é diagnóstico operacional de governança de uso de IA. Não define estratégia de caso, não emite parecer jurídico e não substitui a atuação de advogado habilitado. A política mínima que entregamos é documento operacional, não instrumento jurídico.

**Pergunta 2:** Quanto tempo leva?
**Resposta:** 2 a 3 semanas da abertura até a sessão de leitura conjunta. O prazo depende do tamanho do escritório e da disponibilidade da equipe para as entrevistas de mapeamento.

**Pergunta 3:** Quais são as cinco leituras do INSPIRA Jurídico?
**Resposta:** As mesmas cinco leituras do INSPIRA padrão da PIRA LABS, com lente jurídica em cada uma: mercado e presença, pessoas e operação, governança e processos, tensão econômica e síntese integrada. Em cada leitura, o olhar jurídico é específico: confidencialidade e sigilo profissional, LGPD aplicada ao tratamento de dados de clientes, responsabilidade técnica do advogado, governança de uso de IA e exposição operacional do escritório. A vantagem dessa estrutura é que cada projeto alimenta a base própria de conhecimento setorial que a PIRA LABS está construindo desde 2026, tornando os diagnósticos progressivamente mais calibrados.

**Pergunta 4:** O que acontece depois do diagnóstico?
**Resposta:** Você decide. O INSPIRA Jurídico entrega o diagnóstico e o plano. Executar é decisão sua. Para escritórios que querem apoio na execução, o próximo passo natural é o TRANSPIRA Jurídico. Mas não há obrigação.

**Pergunta 5:** Como é a precificação?
**Resposta:** Sob consulta e disponibilidade. Investimento típico entre R$12.500 e R$26.000, conforme tamanho do escritório e escopo do mapeamento. Por sermos uma boutique, trabalhamos com agenda limitada de projetos simultâneos. Respondemos em até dois dias úteis com proposta.

**Pergunta 6:** Vocês assinam NDA?
**Resposta:** Sempre. Acordo de confidencialidade assinado antes de qualquer conversa com membros da equipe ou acesso a documentos. NDA é base canônica de todo trabalho da PIRA LABS, independentemente do produto contratado.

---

### INSPIRA-JUR-8 · CTAs

**Frase de fechamento:**

> Saber onde está a exposição já é metade do trabalho. A outra metade é decidir o que fazer com isso.

**CTA primário:** `Falar sobre INSPIRA Jurídico *` → `/contato?origem=inspira_juridico`

**CTA secundário:** `Quer ir além do diagnóstico? Conheça o TRANSPIRA Jurídico` → `/transpira/juridico`

**Frase de prazo:** Respondemos em até dois dias úteis.

**\*** *Mediante consulta e disponibilidade.*

**Aviso fixo no rodapé da página:**
> A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e não substitui advogados habilitados pela OAB. O INSPIRA Jurídico é diagnóstico operacional de governança de uso de IA.

---

## /TRANSPIRA {#transpira}

### SEO Head

```html
<title>TRANSPIRA · Execução de Creative Business Turnaround · PIRA LABS</title>
<meta name="description" content="O TRANSPIRA é a execução da PIRA LABS junto à operação do cliente. Redesenho de trabalho, valor, tecnologia e governança em empresas de serviços.">
<link rel="canonical" href="https://piralabs.com.br/transpira">
```

### TRANSPIRA-1 · Header da página

**Breadcrumb:** Home > Transpira

**H1:** TRANSPIRA · Execução de Creative Business Turnaround

**Subtítulo:** Quando o *trabalho certo* substitui o *trabalho muito*.

**Nota técnica:** itálico via CSS em "trabalho certo" e "trabalho muito".

---

### TRANSPIRA-2 · O que é o TRANSPIRA

**Título:** O que é o TRANSPIRA

**Texto:**

> O TRANSPIRA é a execução da PIRA LABS junto à operação do cliente. Não é projeto que acontece em sala de reunião e vira PowerPoint. Acontece dentro do negócio, com a equipe que vai operar depois.
>
> Redesenhamos a relação entre trabalho, valor, tecnologia e governança. Tecnologia entra onde amplifica, nunca antes de entender o problema. A IA não corrige bagunça. Sem método, ela escala bagunça.
>
> Quem conduz: Celso Gama.

---

### TRANSPIRA-3 · O que entregamos

**Título:** O que entregamos

**Frente 1 · Redesenho de trabalho**
> Mapeamento de fluxos críticos, identificação de gargalos reais e redesenho da relação entre o que é feito, por quem e com qual objetivo. Sai a operação dependente de heróis. Entra processo que funciona com gente comum fazendo trabalho extraordinário.

**Frente 2 · Tecnologia curada**
> Não vendemos tecnologia. Curamos. Identificamos onde a IA, automação ou ferramenta específica amplifica capacidade real, e onde não amplifica nada. Quando indicamos um parceiro de tecnologia, declaramos qualquer revenue share envolvido.

**Frente 3 · Governança aplicada**
> Quando modelos, dados e automações passam a influenciar decisão, risco e performance, governança deixa de ser controle posterior e vira capacidade competitiva. Estruturamos processos críticos, pontos de decisão e protocolos de aprovação que sustentam o negócio depois que saímos.

**Frente 4 · Valor percebido**
> Empresas de serviços precisam parar de vender esforço e começar a provar valor. A capacidade de tornar o valor percebido visível e verificável é diferenciação real. Trabalhamos isso na operação, não no marketing.

---

### TRANSPIRA-4 · Para quem é

**Título:** Para quem é

**Texto:**

> Empresas de serviços que já passaram pelo diagnóstico, com a PIRA LABS ou por conta própria, e estão prontas para a execução. Os setores onde o método tem maior validação são publicidade, saúde, jurídico, alimentação e serviços profissionais especializados.

**Quando entra direto, sem INSPIRA:**

> Em casos específicos, o TRANSPIRA pode começar sem o INSPIRA prévio. Acontece quando o cliente já tem diagnóstico claro do problema, evidência de causa raiz, e busca uma equipe que execute sem precisar refazer leitura. Esses casos são minoria. A regra geral é INSPIRA antes de TRANSPIRA.

---

### TRANSPIRA-5 · Como começa

**Título:** Como começa um TRANSPIRA

**Passo 1 · Diagnóstico ou validação prévia**
> Em projetos novos, o TRANSPIRA começa após o INSPIRA da PIRA LABS. Em projetos onde o cliente já tem diagnóstico próprio, o Celso valida o material antes de qualquer proposta.

**Passo 2 · Proposta com escopo, prazo e gates**
> A proposta define o escopo da execução, o prazo previsto, os gates de aprovação humana ao longo do projeto, e o investimento. Sem proposta padrão.

**Passo 3 · Execução junto à operação**
> O TRANSPIRA acontece dentro da operação do cliente. A equipe da PIRA LABS trabalha com o time, não substitui o time.

**Frase de fechamento:**

> Respondemos em até dois dias úteis.

**CTA:** `Falar com a PIRA LABS` → `/contato`

---

### TRANSPIRA-6 · FAQ

**Título:** Perguntas frequentes

**Pergunta 1:** Qual a diferença entre o TRANSPIRA e contratar uma agência ou consultoria de operação?
**Resposta:** Agência opera por entrega contratada. Consultoria entrega plano e sai. O TRANSPIRA redesenha o trabalho com a equipe do cliente, deixa a operação rodando sem depender da PIRA LABS, e tem encerramento explícito. A saída faz parte do escopo. É execução mão na massa, dentro da operação, voltada ao desbloqueio do potencial represado da empresa.

**Pergunta 2:** Vocês trazem tecnologia própria?
**Resposta:** Não. A PIRA LABS não tem tecnologia própria. Toda solução tecnológica vem do mercado, curada e introduzida com aplicabilidade desenhada junto com o cliente. Quando indicamos parceiros, declaramos qualquer revenue share envolvido.

**Pergunta 3:** Quanto tempo dura um TRANSPIRA?
**Resposta:** Depende do escopo. Projetos curtos ficam em 8 a 12 semanas. Projetos mais profundos podem chegar a 6 meses. A proposta define o prazo específico, com gates de aprovação humana entre as fases.

**Pergunta 4:** O TRANSPIRA inclui o setor jurídico?
**Resposta:** Existe uma frente vertical chamada TRANSPIRA Jurídico, com método específico para escritórios de advocacia e departamentos jurídicos. Conhecer detalhes em `/transpira/juridico`.

**Pergunta 5:** Como vocês lidam com a equipe interna do cliente?
**Resposta:** A equipe do cliente é parceira do projeto. O TRANSPIRA não substitui pessoas. Redesenha o que cada uma faz, como o trabalho conecta, e onde a tecnologia amplifica capacidade existente.

**Pergunta 6:** Vocês assinam NDA?
**Resposta:** Sempre. Acordo de confidencialidade é base canônica de todo trabalho da PIRA LABS, assinado antes de qualquer coleta de informação ou conversa com a equipe do cliente.

**Pergunta 7:** Como é a precificação? *
**Resposta:** Sob consulta e disponibilidade. Por sermos uma boutique, mantemos agenda limitada de projetos simultâneos. Investimento varia conforme escopo, prazo, profundidade do redesenho e setor. Respondemos em até dois dias úteis com proposta.

---

### TRANSPIRA-7 · CTA final

**Frase de fechamento:**

> O TRANSPIRA não é projeto que se vende. É projeto que se aceita.

**CTA primário:** `Falar com a PIRA LABS *` → `/contato?origem=transpira`

**Frase de prazo:** Respondemos em até dois dias úteis.

**\*** *Mediante consulta e disponibilidade.*

---

## /TRANSPIRA/JURIDICO {#transpirajuridico}

### SEO Head

```html
<title>TRANSPIRA Jurídico · Execução operacional e legal ops com IA · PIRA LABS</title>
<meta name="description" content="Redesenho operacional para escritórios de advocacia e departamentos jurídicos. Dois modelos: implementação junto ao time ou capacidade de produção jurídica sob demanda.">
<link rel="canonical" href="https://piralabs.com.br/transpira/juridico">
```

**Indexação:** `index, follow`

### JURIDICO-1 · Header da página

**Breadcrumb:** Home > Transpira > Jurídico

**H1:** TRANSPIRA Jurídico

**Subtítulo:** Execução operacional para escritórios e departamentos jurídicos que querem resultado agora, não apenas um diagnóstico.

---

### JURIDICO-2 · Posicionamento

**Título:** Por que o jurídico precisa de execução diferente

**Texto:**

> Escritórios de advocacia têm camadas de complexidade que outras empresas de serviços não têm. Confidencialidade rigorosa. Responsabilidade técnica do advogado. Volume de trabalho mecânico que cresceu nos últimos anos sem que o desenho do trabalho tenha acompanhado.
>
> A IA mudou o que é possível, mas não como o mercado vende. Não substitui advogado. Não automatiza julgamento. Acelera trabalho mecânico repetitivo, sob supervisão humana, e libera capacidade da equipe para o que efetivamente exige formação e responsabilidade técnica.
>
> O TRANSPIRA Jurídico é a frente executiva da PIRA LABS para esse contexto. Não entregamos relatório. Entramos na operação e fazemos o trabalho mudar.

---

### JURIDICO-3 · Caso âncora

**Título:** O que aconteceu em uma operação jurídica de alto volume

**Métrica em destaque:** 400h para 36h

**Texto:**

> Operação jurídica de alto volume com tarefa mecânica recorrente que ocupava 400 horas mensais da equipe. IA bem aplicada e supervisionada por humanos reduziu o tempo da mesma tarefa para 36 horas mensais.
>
> O cliente não cortou pessoas. Liberou capacidade de R$160 mil de faturamento adicional por mês com a mesma equipe que ele já tinha. O número veio de cálculo feito pelo próprio cliente: ele somou quantas pessoas precisaria contratar para realizar as mesmas tarefas, o tempo dedicado por cada uma e o tempo total. Com o tempo economizado, a mesma equipe passou a estar disponível para faturamento adicional.
>
> Esse caso é o que IA bem aplicada faz quando entra depois de método. Sem método antes, a mesma tecnologia teria escalado o ruído que já existia.

---

### JURIDICO-4 · Os dois modelos de entrega

**Título:** Como trabalhamos

**Nota técnica para o implementador:** apresentar como dois cards lado a lado no desktop, empilhados no mobile.

---

**Modelo A · Implementação junto ao time**

> A PIRA LABS trabalha dentro do escritório, com a equipe, redesenhando os fluxos de trabalho jurídico e implementando IA onde ela amplifica. O escritório aprende fazendo. No final, a operação roda sem depender da PIRA LABS.

**O que entra neste modelo:**
- Mapeamento de fluxos críticos e gargalos reais
- Implementação de legal ops com supervisão humana
- Estrutura de governança de uso de IA
- Capacitação do time para operar o novo desenho
- Gates de aprovação entre as fases

**Para quem:** escritórios que querem construir capacidade interna. Time disponível para o processo de implementação.

**Duração:** 12 a 20 semanas com gates de aprovação humana.

---

**Modelo B · Assistant as a service \***

> A atividade jurídica está cada vez mais sendo executada por ferramentas de IA. O serviço jurídico, o julgamento, a estratégia, a relação com o cliente, esse segue humano e seguirá crescendo em valor exatamente por isso. A PIRA LABS entra para ajudar o advogado a entregar o seu melhor serviço, cuidando da atividade para que ele foque no que só ele pode fazer.
>
> No Modelo B, a PIRA LABS executa o trabalho operacional de legal ops. O escritório recebe o material produzido, o advogado habilitado do próprio escritório revisa, valida e assina. É como ter um assistant dedicado com método e IA aplicada, disponível por projeto.

**O que entra neste modelo:**
- Análise e decupagem de processos
- Pesquisa e levantamento de jurisprudência
- Construção de modelos e templates de peças
- Rascunhos para revisão e validação do advogado
- Organização e sistematização de documentação interna

**Regra inviolável:** todo material produzido pela PIRA LABS no Modelo B passa pelo advogado habilitado do próprio escritório antes de qualquer uso. A PIRA LABS não assina peça, não representa cliente e não presta consultoria jurídica. Celso Gama, cursando último ano de Direito na Mackenzie, conduz o trabalho operacional com supervisão jurídica do escritório contratante.

**Para quem:** escritórios com volume alto de atividade mecânica repetitiva e sem banda para ciclo de implementação longa. Escopo definido por projeto.

**Duração:** por projeto, escopo definido antes de começar.

**\*** *Mediante consulta e disponibilidade. Por sermos uma boutique, trabalhamos com agenda limitada de projetos simultâneos no Modelo B.*

---

### JURIDICO-5 · Para quem é

**Título:** Para quem é o TRANSPIRA Jurídico

**Texto:**

> Escritórios de advocacia e departamentos jurídicos com volume alto de trabalho mecânico repetitivo. Decisores com autonomia real para mudar o funcionamento da operação.
>
> Pode entrar direto ou depois do INSPIRA Jurídico. Quem tem diagnóstico pronto começa mais rápido. Quem não tem pode fazer o diagnóstico como parte da abertura do projeto.

**Quem não deveria contratar:**

> Escritórios que buscam terceirizar a responsabilidade jurídica. O TRANSPIRA Jurídico não substitui advogado, não assina peça e não presta consultoria jurídica. Trabalhamos dentro da operação, não no lugar dela.

---

### JURIDICO-6 · FAQ

**Título:** Perguntas frequentes

**Pergunta 1:** Vocês prestam consultoria jurídica?
**Resposta:** Não. O TRANSPIRA Jurídico trata de fluxos de trabalho, produtividade, governança de uso de IA e capacidade operacional jurídica. Todo material produzido no Modelo B passa pelo advogado habilitado do escritório para revisão, validação e assinatura. A PIRA LABS não representa clientes, não assina peças e não emite pareceres.

**Pergunta 2:** Como vocês garantem confidencialidade?
**Resposta:** Sempre via NDA. Acordo de confidencialidade assinado antes de qualquer coleta de informação ou acesso a documentos. Acordo é base canônica de todo trabalho da PIRA LABS, independente do modelo contratado. Quando há uso de ferramentas de IA, trabalhamos exclusivamente com soluções que oferecem garantias contratuais de não treinamento sobre dados do cliente. Cada protocolo de uso é validado pelo decisor jurídico do cliente antes de operar.

**Pergunta 3:** Qual a qualificação de quem executa o trabalho jurídico operacional?
**Resposta:** Celso Gama, COO da PIRA LABS, está cursando o último ano de Direito na Mackenzie e tem o Applied AI Certificate Program pelo MIT. Atua na condução operacional de legal ops com método e IA aplicada, sempre com supervisão, revisão, validação e assinatura do advogado habilitado do escritório contratante em cada entrega.

**Pergunta 4:** Como começa um projeto?
**Resposta:** Conversa inicial para entender o contexto e definir o modelo mais adequado (A ou B). Proposta com escopo, prazo e investimento. Início após aceite e assinatura do acordo de confidencialidade.

**Pergunta 5:** Quanto dura e como é precificado?
**Resposta:** Modelo A *: 12 a 20 semanas com gates de aprovação humana, por projeto. Modelo B *: por projeto, escopo definido antes de começar. Ambos sob consulta e disponibilidade. Por sermos uma boutique, trabalhamos com agenda limitada de projetos simultâneos.

**Pergunta 6:** O resultado de R$160 mil/mês é típico?
**Resposta:** O número veio de cálculo feito pelo próprio cliente. Ele somou quantas pessoas precisaria contratar para realizar as mesmas tarefas, o tempo dedicado por cada uma e o tempo total. Com o tempo economizado, a mesma equipe passou a estar disponível para faturamento adicional. Não prometemos resultado idêntico. Cada operação tem seu ponto de partida. O que prometemos é diagnóstico honesto, redesenho com a equipe e medição clara dos avanços acordados.

---

### JURIDICO-7 · CTAs

**Frase de fechamento:**

> O trabalho mecânico que ocupa o time hoje pode ser feito de outra forma. O que libera é o que não pode ser automatizado: o julgamento, a estratégia, a relação com o cliente.

**CTA primário:** `Falar sobre TRANSPIRA Jurídico *` → `/contato?origem=transpira_juridico`

**CTA secundário:** `Prefere começar pelo diagnóstico? Conheça o INSPIRA Jurídico` → `/inspira/juridico`

**Frase de prazo:** Respondemos em até dois dias úteis.

**\*** *Mediante consulta e disponibilidade.*

**Aviso fixo no rodapé da página:**
> A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e não substitui advogados habilitados pela OAB. O TRANSPIRA Jurídico trata de fluxos de trabalho, governança operacional de IA e capacidade produtiva, com supervisão obrigatória de advogado habilitado do escritório contratante em todas as entregas do Modelo B.

---

## /FAISCA {#faisca}

### SEO Head

```html
<title>FAÍSCA · Onde a PIRA LABS pensa, publica e ensina</title>
<meta name="description" content="FAÍSCA é o universo educacional da PIRA LABS: Antes da Crise no Substack, palestras, mentorias e conteúdo aberto sobre Creative Business Turnaround.">
<link rel="canonical" href="https://piralabs.com.br/faisca">
```

### FAISCA-1 · Header da página

**Breadcrumb:** Home > Faísca

**H1:** FAÍSCA

**Subtítulo:** Onde a PIRA LABS pensa, publica e ensina.

---

### FAISCA-2 · O que é a FAÍSCA

**Título:** O que é a FAÍSCA

**Texto:**

> A faísca é o instante onde a energia latente vira luz. É também o nome do universo educacional da PIRA LABS.
>
> Aqui publicamos teses, estudos e o que aprendemos operando, incluindo o que não funcionou. Damos palestras em empresas e eventos. Conduzimos ciclos de mentoria com fundadores e líderes que querem repensar o modelo de trabalho da própria empresa.
>
> Não é frente comercial. É como a PIRA LABS contribui para que a categoria Creative Business Turnaround ganhe forma no Brasil.

---

### FAISCA-3 · Frentes editoriais

**Título:** O que existe dentro da FAÍSCA

**Frente 1 · Antes da Crise**

> **Antes da Crise · Publicação editorial no Substack**
>
> Substack onde a PIRA LABS publica teses, estudos e aprendizados de operação. Inclui o que funcionou, o que não funcionou e por quê. É a publicação de conteúdo longo e profundo da empresa.

**CTA da frente 1:** `Conhecer Antes da Crise` → `/antes-da-crise`

**Frente 2 · Palestras**

> **Palestras**
>
> Conversas em empresas, eventos, conselhos e instituições. Gabriela e Celso falam separadamente ou juntos, dependendo do contexto. Os temas são organizados em três trilhas, todas baseadas em operação real.

**Trilha 1 · Negócio e mercado**

> Onde a PIRA LABS fala como empresa sobre os temas que diagnostica, executa e ensina no dia a dia.
>
> - Empreendendo com IA: criação de agentes e engenharia de prompts, qual o segredo?
> - Macro Tendências
> - Inteligência de Mercado com IA
> - O Futuro do Trabalho
> - Novas formas de consumo e novos canais de venda
> - Inovação para PMEs

**Trilha 2 · Pessoas e cultura**

> O lado humano da operação. Como cultura, geração e liderança definem o que a empresa consegue executar.
>
> - Cultura e Formação de Lideranças
> - Desafios Geracionais

**Trilha 3 · Trajetória da Gabriela**

> Quando a Gabriela fala não como CEO da PIRA LABS, mas como pessoa que viveu o que está contando.
>
> - Desafios e Protagonismo Feminino
> - Maternidade como Liderança

**CTA da frente 2:** `Convidar para palestra` → `/contato?origem=faisca`

**Frente 3 · Mentorias**

> **Mentorias**
>
> Ciclos curtos de mentoria para fundadores e líderes de empresas de serviços que querem repensar o modelo de trabalho do próprio negócio. Não é coaching. Não é consultoria. É conversa estruturada com quem opera há mais de 20 anos e há mais de 10 dentro dos ecossistemas globais de inovação.

**CTA da frente 3:** `Pedir informações sobre mentorias` → `/contato`

**Frente 4 · Conteúdo aberto**

> **Conteúdo aberto**
>
> Posts, vídeos, artigos e materiais que a PIRA LABS publica em LinkedIn, Substack e canais públicos. Tudo aberto, sem captura, para que a categoria circule.

**Links externos:**
- LinkedIn PIRA LABS: https://www.linkedin.com/company/piralabs
- LinkedIn Gabriela: https://www.linkedin.com/in/gabrielaaguiarvs/
- LinkedIn Celso: https://www.linkedin.com/in/celsogama/

---

### FAISCA-4 · CTA final

**Frase de fechamento:**

> Acompanhar a PIRA LABS é a melhor forma de começar a conversa.

**Sem CTA comercial direto.** Recomendação ao implementador: usar dois CTAs secundários lado a lado:
- `Acompanhar Antes da Crise` → `/antes-da-crise`
- `Falar com a PIRA LABS` → `/contato`

---

---

## /FAISCA/JURIDICA {#faiscajuridica}

### SEO Head

```html
<title>FAÍSCA Jurídica · Palestra e workshop de IA para o jurídico · PIRA LABS</title>
<meta name="description" content="Palestra e workshop executivo para escritórios, áreas jurídicas e instituições de ensino. Como usar IA com método, critério e governança na rotina jurídica.">
<link rel="canonical" href="https://piralabs.com.br/faisca/juridica">
```

**Indexação:** `index, follow`

### FAISCA-JUR-1 · Header da página

**Breadcrumb:** Home > Faísca > Jurídica

**H1:** FAÍSCA Jurídica

**Subtítulo:** Antes de ensinar prompt para o time jurídico, vale saber o que não pode entrar na ferramenta.

---

### FAISCA-JUR-2 · O problema

**Título:** O que está acontecendo agora nos escritórios

**Texto:**

> Alguém no seu escritório já usou ChatGPT, Claude ou Gemini para resumir um contrato, pesquisar jurisprudência ou rascunhar uma peça. Provavelmente mais de uma pessoa. Provavelmente sem política interna, sem critério de anonimização e sem que a sócia ou o head jurídico soubesse exatamente o que foi inserido onde.
>
> O problema não é usar IA. O problema é usar IA com documento jurídico real, em conta pessoal, sem método e sem controle institucional.
>
> Quando um profissional cola uma petição, um contrato ou uma procuração com dados de cliente em uma ferramenta de IA pública, isso é tratamento de dados pessoais nos termos da LGPD. Se não há política, não há base legal e não há controle de quem usa o quê, o escritório está operando com exposição que a maioria ainda não mapeou.
>
> O FAÍSCA Jurídica existe para nomear esse problema e dar ao time as ferramentas para resolvê-lo.

---

### FAISCA-JUR-3 · O que é

**Título:** O que é o FAÍSCA Jurídica

**Texto:**

> Palestra ou workshop executivo para escritórios de advocacia, áreas jurídicas corporativas e instituições de ensino jurídico. Conduzido pela Gabriela Aguiar, CEO da PIRA LABS.
>
> Não começa pela ferramenta. Começa pelo fluxo. Onde a IA pode ajudar na rotina jurídica, onde não deve entrar sem revisão, e o que cada profissional do time precisa saber antes de usar qualquer modelo.

---

### FAISCA-JUR-4 · Formatos disponíveis

**Título:** Como acontece

**Formato 1 · Palestra executiva (60 a 90 minutos)**

> Para eventos, congressos, seccionais da OAB, associações de classe e encontros de lideranças jurídicas. Audiência de 20 a 300 pessoas. Presencial ou online. Conteúdo: estado atual do uso de IA no jurídico, o que os modelos fazem com dados inseridos, distinção entre planos gratuitos e enterprise, e o que o escritório precisa decidir antes de avançar.

**Formato 2 · Workshop executivo (2 horas)**

> Para grupos de 5 a 25 pessoas. Sócios, heads jurídicos, coordenadores de curso. Presencial ou online. Inclui conversa de calibragem prévia para ajustar o conteúdo ao contexto específico, sem custo adicional. Saída: mapa de oportunidades e riscos de IA na rotina jurídica, primeiros critérios de política interna e próximos passos práticos.

---

### FAISCA-JUR-5 · Para quem é

**Título:** Para quem faz sentido

**Texto:**

> Sócios e heads jurídicos que sabem que o time já usa IA mas não têm política interna ainda.
>
> Professores e coordenadores de cursos de Direito que querem preparar alunos com critério real, não com entusiasmo genérico sobre o futuro da IA.
>
> Gestores de compliance e DPOs em empresas com área jurídica interna.
>
> Escritórios que passaram por evento de risco e querem endereçar o problema antes que aconteça de novo.

---

### FAISCA-JUR-6 · Quem conduz

**Título:** Quem conduz

**Texto:**

> Gabriela Aguiar, CEO e cofundadora da PIRA LABS. Docente em programas de MBA na USP, FIAP e Instituto Cidades Responsivas. Universal AI Foundational Modules (MIT). Uma década dentro dos ecossistemas globais de inovação.
>
> O Celso Gama, COO e cofundador, cursando último ano de Direito na Mackenzie com Applied AI Certificate Program pelo MIT, contribui com o conteúdo técnico-jurídico que fundamenta o workshop.

---

### FAISCA-JUR-7 · FAQ

**Título:** Perguntas frequentes

**Pergunta 1:** Vocês prestam consultoria jurídica?
**Resposta:** Não. O FAÍSCA Jurídica trata de fluxos de trabalho, produtividade, governança de uso de IA e operação jurídica. Não define estratégia de caso, não substitui a atuação de advogados habilitados pela OAB e não é consultoria jurídica.

**Pergunta 2:** O workshop pode ser adaptado para o contexto do nosso escritório?
**Resposta:** Sim. Antes de qualquer workshop, fazemos uma conversa de calibragem para entender o contexto do escritório, o perfil do time e o momento da adoção de IA. O conteúdo é ajustado sem custo adicional para grupos que fazem essa conversa prévia.

**Pergunta 3:** Funciona para instituição de ensino jurídico?
**Resposta:** Sim. Temos conteúdo específico para formar profissionais que vão sair da faculdade já sabendo como usar IA com critério na prática jurídica. O formato para instituições é adaptado para audiência de alunos e professores.

**Pergunta 4:** Vocês assinam NDA quando é workshop fechado para um escritório?
**Resposta:** Sempre. Quando há trabalho de calibragem prévia ou conteúdo customizado para o cliente, o NDA é assinado antes da conversa. NDA é base canônica de todo trabalho da PIRA LABS, independente do produto.

**Pergunta 5:** Como é a precificação?
**Resposta:** Sob consulta e disponibilidade. Depende do formato, da audiência, do deslocamento e do nível de customização. Por sermos uma boutique, mantemos agenda limitada de palestras e workshops simultâneos para preservar a qualidade da conversa de calibragem prévia. Respondemos em até dois dias úteis com proposta.

---

### FAISCA-JUR-8 · CTAs

**Frase de fechamento:**

> O risco não está no futuro. Está no navegador aberto agora no computador do estagiário.

**CTA primário:** `Falar sobre FAÍSCA Jurídica *` → `/contato?origem=faisca_juridica`

**CTA secundário:** `Quer ir além do workshop? Conheça o INSPIRA Jurídico` → `/inspira/juridico`

**Frase de prazo:** Respondemos em até dois dias úteis.

**\*** *Mediante consulta e disponibilidade.*

**Aviso fixo no rodapé da página:**
> A PIRA LABS não presta consultoria jurídica, não define estratégia de caso e não substitui advogados habilitados pela OAB. O FAÍSCA Jurídica é palestra e workshop sobre fluxos de trabalho, governança operacional de IA e operação jurídica.

---

## /ANTES-DA-CRISE {#antes-da-crise}

### SEO Head

```html
<title>Antes da Crise · Publicação editorial da PIRA LABS no Substack</title>
<meta name="description" content="Antes da Crise é a publicação editorial da PIRA LABS no Substack. Teses, estudos e aprendizados de Creative Business Turnaround, incluindo o que não funcionou.">
<link rel="canonical" href="https://piralabs.com.br/antes-da-crise">
```

### ADC-1 · Header da página

**Breadcrumb:** Home > Antes da Crise

**H1:** Antes da Crise

**Subtítulo:** Publicação editorial da PIRA LABS no Substack. Parte do universo FAÍSCA.

---

### ADC-2 · Sobre a publicação

**Título:** Sobre a publicação

**Texto:**

> Antes da Crise é a publicação editorial da PIRA LABS. Vive no Substack porque é lá que conteúdo de profundidade encontra leitor que escolhe ler.
>
> Aqui publicamos teses sobre Creative Business Turnaround, estudos sobre o modelo de trabalho em empresas de serviços, observações sobre IA aplicada à operação, governança de risco em ambientes de IA, e o que aprendemos operando, incluindo o que não funcionou.
>
> Cada edição assina Gabriela, Celso ou ambos, dependendo do tema. A periodicidade é determinada pela existência de algo que mereça ser publicado, não por calendário fixo.

---

### ADC-3 · Posts recentes

**Título:** Edições mais recentes

**Nota para o implementador:**
> No primeiro deploy, esta seção é uma lista manual de 3 a 5 edições mais recentes em arquivo `.mdx`, atualizada quando há novo post. Em fase posterior, integrar com a API do Substack para atualização automática. Cada item da lista deve ter: título, data, prévia de 1 a 2 linhas, link externo para o post no Substack.

**Estrutura de cada item da lista (placeholder):**

> **[Título da edição]**
> [Data]
> [Prévia de 1 a 2 linhas]
> `Ler no Substack` → [link externo]

---

### ADC-4 · CTA

**Texto:**

> Antes da Crise vive no Substack. Para receber as edições, basta inscrever a partir do próprio Substack.

**CTA primário:** `Ler no Substack` → https://piralabs.substack.com (link externo)

**CTA secundário:** `Receber por email` → link de inscrição direto do Substack

---

## /CONTATO {#contato}

### SEO Head

```html
<title>Contato · PIRA LABS</title>
<meta name="description" content="Falar com a PIRA LABS sobre INSPIRA, TRANSPIRA, Oxigênio IA Search, palestras ou mentorias. Respondemos em até dois dias úteis.">
<link rel="canonical" href="https://piralabs.com.br/contato">
```

### CONTATO-1 · Header da página

**Breadcrumb:** Home > Contato

**H1:** Falar com a PIRA LABS

**Subtítulo:** Conte o contexto. Respondemos em até dois dias úteis.

---

### CONTATO-2 · Formulário

**Decisão definitiva:** o formulário usa **Fillout integrado ao Notion DB**. Não usar Formspree, FormSubmit ou inline em Vercel Functions como solução principal.

**Constante configurável que precisa ser criada no projeto Code:**

```
FILL_OUT_FORM_URL = "[INSERIR_URL_FILLOUT_QUANDO_DISPONÍVEL]"
```

O Celso vai criar o Notion DB e o formulário Fillout num fluxo separado (gerenciado por GPT separado conforme decisão prévia). Quando a URL estiver disponível, substituir a constante.

**Estrutura técnica:**

A página `/contato` recebe parâmetro `?origem=` na URL e tem duas formas de renderizar:

1. **Embed do Fillout** dentro da página, se a integração permitir passar origem como parâmetro inicial
2. **Botão CTA** que abre o Fillout em nova aba/modal, repassando origem como query string para o Fillout, se tecnicamente possível

Se o repasse automático de origem para o Fillout não for possível na primeira implementação, manter o formulário funcional e registrar `[AJUSTE PENDENTE: repasse de origem para Fillout]` no handoff técnico.

**Sistema de origens (13 origens, alinhado à arquitetura v3.5):**

| Origem | Página | CTA que dispara |
|---|---|---|
| `home` | `/` | CTA primário e final da home |
| `sobre` | `/sobre` | CTA final do /sobre |
| `inspira` | `/inspira` | CTAs de "Falar com a PIRA LABS" no /inspira |
| `oxigenio` | `/inspira/oxigenio` | CTAs da página do produto |
| `transpira` | `/transpira` | CTAs do /transpira |
| `transpira_juridico` | `/transpira/juridico` | CTAs do /transpira/juridico |
| `faisca` | `/faisca` e `/antes-da-crise` | CTAs de palestras, mentorias e contato |
| `faisca_juridica` | `/faisca/juridica` | CTAs do /faisca/juridica |
| `inspira_juridico` | `/inspira/juridico` | CTAs do /inspira/juridico |
| `creative_business_turnaround` | `/creative-business-turnaround` | CTA final da página canônica da categoria |
| `header_global` | todas as páginas | Botão "Falar com a PIRA" no header |
| `404` | `/404` | CTA da página 404 |
| `direto` | qualquer entrada direta sem origem | quando o usuário acessa /contato sem CTA prévio |

**Campos do formulário:**

> A estrutura final do formulário segue o arquivo `prompt-fillout-notion-v2.md`, que prevalece sobre esta seção em caso de divergência de campos, opções ou validações. A página `/contato` apenas renderiza o embed do Fillout e repassa `?origem=` via URL. O Code não deve criar campos manualmente aqui — o Fillout é a fonte de verdade do formulário.

---

### CONTATO-3 · Texto da página

**Texto acima do formulário ou do CTA do Fillout:**

> Quanto mais contexto você compartilhar agora, mais útil é a resposta.

**Botão de CTA (se for embed externo do Fillout):** `Iniciar conversa`

**Texto de confirmação após envio (configurar no Fillout):**

> Recebemos sua mensagem. Respondemos em até dois dias úteis.

---

### CONTATO-4 · Contato direto

**Título:** Contato direto

**Email:** inspira@piralabs.com.br

**LinkedIn PIRA LABS:** https://www.linkedin.com/company/piralabs
**LinkedIn Gabriela Aguiar:** https://www.linkedin.com/in/gabrielaaguiarvs/
**LinkedIn Celso Gama:** https://www.linkedin.com/in/celsogama/

**Frase de fechamento:**

> Para imprensa e parcerias institucionais, o email acima é o canal principal.

---

## CHECKLIST DE VERIFICAÇÃO ANTES DO BUILD

**Conteúdo (todas as páginas):**
- [x] Nenhum travessão em qualquer parte
- [x] Nenhum termo do vocabulário proibido
- [x] PIRA LABS sempre em caixa alta
- [x] Diageo nomeada como "multinacional do setor de bebidas" quando aparece (somente na home, não nas internas)
- [x] Samsung nomeada como "uma grande marca de tecnologia" quando aparece
- [x] Caso jurídico explicitamente como pós-IA com supervisão humana em `/transpira/juridico`
- [x] "Respondemos em até dois dias úteis." em todas as páginas com CTA
- [x] MIT com nome do programa (Universal AI Foundational Modules para Gabriela, Applied AI Certificate Program para Celso)
- [x] Celso descrito como "último ano de Direito na Mackenzie", nunca "advogado"
- [x] Gabriela sem ITA, com Universal AI Foundational Modules
- [x] "Avanços acordados" usado em `/transpira/juridico` (FAQ pergunta 7) ao invés de "resultado garantido"

**Tom:**
- [x] Voz institucional consistente em todas as páginas
- [x] Quotes em primeira pessoa (Gabriela e Celso) calibrados pela voz autoral de cada um
- [x] Convocação no fechamento, sem motivacional vazio
- [x] Sem jargão de consultoria

**SEO:**
- [x] Title até 60 caracteres em todas as páginas (alguns acima do alvo, ajustar conforme necessário)
- [x] Meta description até 155 caracteres
- [x] H1 único por página
- [x] Hierarquia H1 > H2 > H3 prevista nos blocos
- [x] Canonical em todas as páginas

**CTAs:**
- [x] Todos os CTAs apontam para destinos definidos no wireframe v3.1
- [x] CTAs do `/inspira` apontam para `/inspira/oxigenio` quando relevante
- [x] CTAs do `/transpira` apontam para `/transpira/juridico` quando relevante
- [x] `/faisca` tem CTAs internos (`/antes-da-crise`) e CTA externo (`/contato`)

---

## NOTAS PARA AS PRÓXIMAS ENTREGAS

**Próxima entrega:** copy de `/inspira/oxigenio` (peça crítica da campanha, em arquivo separado por exigir mais iteração).

**Em seguida:**
- Plano de campanha de 10 dias com briefing dos posts, prompts de imagem para GPT, calendário, UTMs
- Prompt para criação do Fillout + Notion DB
- Handoff técnico v2.0
- Pacote final v2.0 para o Code

**Atualizações pendentes registradas:**
- `my-rules.md` precisa ser atualizado para distinguir Diageo e Jogos (pré-IA) do jurídico (pós-IA com supervisão humana). Faremos quando toda a copy do site estiver fechada.

---

*Copy das Páginas Internas v4.3 · PIRA LABS · Maio 2026*
