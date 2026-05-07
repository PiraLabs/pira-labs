# Copy da Home — Site PIRA LABS
**Versão:** 2.1
**Data:** Maio 2026
**Substitui:** copy-home-pira-labs-v2.md
**Wireframe de referência:** wireframe-completo-site-pira-labs-v3.5.md
**Voz:** institucional PIRA LABS

---

## NOTAS DE PRODUÇÃO PARA O IMPLEMENTADOR

**Estrutura:** cada bloco corresponde a um ID do wireframe v3.1. A copy abaixo é o conteúdo dentro do componente. Não inclui marcações de design (cores, espaçamentos), que ficam no handoff técnico.

**Regras absolutas aplicadas neste documento:**
- Sem travessão (em dash) em nenhum ponto
- PIRA LABS sempre em caixa alta
- Frase canônica obrigatória nos primeiros 150 termos da home (entra literal em HOME-1)
- Vocabulário proibido respeitado
- Diageo anonimizada como "multinacional do setor de bebidas". Esclarecido que Celso atuou na agência publicitária que atendia a conta, não na Diageo.
- Samsung anonimizada como "uma grande marca de tecnologia"
- "Respondemos em até dois dias úteis." no CTA final
- Caso jurídico marcado como **pós-IA** (corrige propagação de erro de versões anteriores que tratavam os três casos como pré-IA)

**O que mudou em relação à v2.0:**
- Subtítulo do hero reescrito (mantendo canônica completa)
- Tagline INSPIRA limpa, "pausa" migrada para descritivo do bloco
- TRANSPIRA com itálico em "trabalho certo" e "trabalho muito"
- Frase sobre IA reformulada: "A IA não corrige bagunça. Sem método, ela escala bagunça."
- RESPIRA agora aparece explicitamente como conceito (estado, não produto)
- Cards de provas reescritos com correções factuais: Celso na agência (não na Diageo), e caso jurídico pós-IA
- Frase de fechamento dos cards corrigida: dois pré-IA, um pós-IA
- Título FAÍSCA reescrito
- Texto secundário dos fundadores ajustado (multinacionais, não chão de fábrica)
- Fechamento institucional com co-autoria explícita ("descobrimos junto")

---

## SEO HEAD

```html
<title>PIRA LABS · Creative Business Turnaround para empresas de serviços</title>

<meta name="description" content="A PIRA LABS é uma boutique brasileira de Creative Business Turnaround. Atuamos antes da crise, quando ainda dá para mudar com tranquilidade.">

<link rel="canonical" href="https://piralabs.com.br/">

<meta property="og:title" content="PIRA LABS · Creative Business Turnaround">
<meta property="og:description" content="Boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://piralabs.com.br/">
```

**Verificação de comprimento:**
- Title: 64 caracteres. Implementador: ajustar para 60 cortando "para empresas de serviços" no `<title>` se necessário, mantendo no H1.
- Meta description: 152 caracteres. OK.

---

## HOME-1 · HERO

**Componente:** `<Hero />`

### Sobretítulo

> Propulsão de negócios

### H1

> Existe um momento em que transformar ainda é um processo, não uma crise.

### Subtítulo

> A PIRA LABS é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes da crise.
>
> Entramos quando ainda há clientes, caixa e reputação, mas o modelo de trabalho começou a custar caro demais. Saímos quando o negócio opera com clareza e capacidade de avançar sem depender de nós.

### CTAs

- **CTA primário:** `Entender o método` → âncora `#metodo` (rola até HOME-3)
- **CTA secundário:** `Aplicar para Oxigênio` → `/inspira/oxigenio`

---

**Verificação da frase canônica:** confirmada nos primeiros 150 termos da home, em uma única sentença sem quebra. ✓

---

## HOME-2 · SINAIS

**Componente:** `<Signals />`

### Label da seção

> Quando a operação começa a custar mais do que deveria

### Subtítulo da seção

> Não é falha de gestão. É um modelo de trabalho que envelheceu enquanto a empresa crescia. Cinco sinais que aparecem antes da crise:

### Cards de sinais

**Sinal 1**
> A empresa cresce, mas a margem some. O esforço aumenta, o resultado fica igual.

**Sinal 2**
> Decisões importantes passam todas pelo fundador. O resto do time espera.

**Sinal 3**
> A operação só funciona porque algumas pessoas fazem o que não é papel delas.

**Sinal 4**
> Você implementou tecnologia, incluindo IA, e o resultado foi acelerar o ruído que já existia.

**Sinal 5**
> Em IA Search e em pitches automatizados, sua empresa não aparece, ou aparece errado.

### Frase de fechamento da seção

> Se você reconheceu mais de um, faz sentido continuar a leitura.

---

## HOME-3 · MÉTODO

**Componente:** `<Method />`

### Título da seção

> O método

### Subtítulo

> Três movimentos do corpo. Três fases do trabalho. Não é metáfora forçada. É como o negócio se move.

### Bloco INSPIRA

**Nome do bloco:** INSPIRA
**Tagline:** Quando você para de resolver o problema errado.

**Descrição:**
> O diagnóstico é onde você pausa, respira fundo e olha para o negócio com lente que de dentro não dá. A PIRA LABS lê cinco áreas antes de nomear qualquer problema. Mercado, pessoas, governança, tensão econômica e síntese integrada. Cada leitura passa por aprovação humana antes de avançar. O resultado é um relatório único, com o problema real nomeado e a rota desenhada.

**Quem conduz:** Gabriela Aguiar.

**CTA:** `Ver INSPIRA` → `/inspira`

### Bloco TRANSPIRA

**Nome do bloco:** TRANSPIRA
**Tagline:** Quando o *trabalho certo* substitui o *trabalho muito*.

**Nota técnica para o implementador:** aplicar `<em>` ou classe CSS `.emphasis-italic` em "trabalho certo" e "trabalho muito". Texto semântico permanece puro. Sem aspas.

**Descrição:**
> A execução acontece junto com a operação do cliente, não em uma sala de reunião. Redesenhamos a relação entre trabalho, valor, tecnologia e governança. Tecnologia entra onde amplifica, nunca antes de entender o problema. A IA não corrige bagunça. Sem método, ela escala bagunça.

**Quem conduz:** Celso Gama.

**CTA:** `Ver TRANSPIRA` → `/transpira`

### Frase de fechamento (RESPIRA explicitado)

> Quando a clareza chega, o ritmo volta. O negócio decide. A empresa cresce sem improviso constante. Esse é o RESPIRA. Estado, não produto.

### Bloco de ponto de entrada

> Se você quer começar com escopo fechado e prazo curto, conheça o Oxigênio IA Search. Diagnóstico de como sua empresa aparece nos motores de IA, em até 5 dias úteis.

**CTA:** `Conhecer Oxigênio` → `/inspira/oxigenio`

---

## HOME-4 · PROVAS

**Componente:** `<Proofs />`

### Título da seção

> O que a operação real ensinou

### Subtítulo

> Não trazemos teoria de prateleira. Trazemos o que aprendemos errando, corrigindo, entregando. Três marcos que sustentam o método:

### Card 1 (pré-IA)

**Métrica:** R$16M para R$163M

**Contexto:**
> Reestruturação da área de ativação e eventos de uma agência multinacional. Crescimento sustentado por dois anos culminou na operação do patrocínio global de uma grande marca de tecnologia nos Jogos Rio 2016. 600 pessoas e 100 fornecedores coordenados.

### Card 2 (pré-IA)

**Métrica:** Margem de -64% para +15%

**Contexto:**
> Conta publicitária de multinacional do setor de bebidas, atendida pela agência onde eu liderava a operação. O problema era simples e ninguém olhava no lugar certo. Revisão de processos e métricas recuperou 79 pontos percentuais de margem em 6 meses, sem aumentar receita nem cortar custo.

### Card 3 (pós-IA)

**Métrica:** 400h para 36h

**Contexto:**
> Operação jurídica de alto volume. IA bem aplicada e supervisionada por humanos liberou o potencial de faturamento de R$160 mil por mês para o cliente, com a mesma equipe que ele já tinha.

### Frase de fechamento da seção

> Cada número tem caso por trás, e o caso tem cliente que viveu por dentro. Os dois primeiros vieram de redesenho de processo, antes da onda atual de IA. O terceiro veio depois, com IA aplicada e supervisão humana. Em todos, o que entregou resultado foi olhar para onde os outros não estavam olhando.

---

## HOME-5 · FAÍSCA (educacional)

**Componente:** `<FaiscaTeaser />`

### Título da seção

> FAÍSCA · onde a PIRA LABS pensa, publica e ensina

### Subtítulo

> A faísca é o instante onde a energia latente vira luz. É também o que publicamos, ensinamos e provocamos para que a categoria ganhe forma no Brasil.

### Frentes editoriais

**Frente 1**
> **Antes da Crise**
> Publicação editorial sobre teses, estudos e o que aprendemos operando. Inclui o que não funcionou.

**Frente 2**
> **Palestras**
> Conversas em empresas e eventos sobre Creative Business Turnaround, governança de IA e o que vem antes da crise.

**Frente 3**
> **Mentorias**
> Ciclos curtos de mentoria para fundadores e líderes de empresas de serviços que querem repensar o modelo de trabalho.

### CTA

`Conhecer FAÍSCA` → `/faisca`

---

## HOME-6 · FUNDADORES (teaser)

**Componente:** `<FoundersTeaser />`

### Imagem

`Nós.png` (Gabriela à esquerda, Celso à direita)

### Texto principal

> A PIRA LABS é boutique por escolha, não por estágio. Cada projeto tem Gabriela e Celso do diagnóstico à entrega. Sem camada intermediária entre quem entende o problema e quem resolve.

### Texto secundário

> Uma década dentro dos ecossistemas globais de inovação. Mais de vinte anos de operação em multinacionais. A combinação não é comum. É o que sustenta cada decisão da PIRA LABS.

### CTA

`Conhecer Gabriela e Celso` → `/sobre`

---

## HOME-7 · CTA FINAL

**Componente:** `<FinalCTA />`

### Frase de fechamento institucional

> Existe um próximo nível para o seu negócio. O que está entre você e ele, descobrimos junto.

### CTA primário

`Falar com a PIRA LABS` → `/contato`

### Frase de prazo

> Respondemos em até dois dias úteis.

### Assinatura final

> Inspira. Transpira. Respira.
> **Liberamos o próximo nível.**

---

## CHECKLIST DE VERIFICAÇÃO ANTES DO BUILD

**Conteúdo:**
- [x] Frase canônica nos primeiros 150 termos, em sentença única sem quebra
- [x] Nenhum travessão em qualquer parte
- [x] Nenhum termo do vocabulário proibido
- [x] PIRA LABS sempre em caixa alta
- [x] Diageo nomeada como "multinacional do setor de bebidas". Posição do Celso descrita como "agência onde eu liderava a operação"
- [x] Samsung nomeada como "uma grande marca de tecnologia"
- [x] Caso jurídico marcado como pós-IA. Frase de fechamento da seção de provas distingue claramente os dois pré-IA do pós-IA
- [x] "Respondemos em até dois dias úteis." presente em HOME-7

**Tom:**
- [x] Convocação com peso, sem motivacional vazio
- [x] Evidência ancorada em número e caso real
- [x] Fechamento abre conversa ("descobrimos junto"), não conclui
- [x] Sem jargão de consultoria
- [x] Sem ironia, sem sarcasmo, sem aula

**SEO:**
- [x] Title 64 caracteres (alerta para implementador ajustar para 60)
- [x] Meta description 152 caracteres
- [x] H1 único na página (opção C aprovada)
- [x] Hierarquia H1 > H2 > H3 prevista nos blocos

**Técnico:**
- [x] Itálico em "trabalho certo" e "trabalho muito" via CSS, sem aspas
- [x] CTAs primário e secundário do hero diferenciados
- [x] CTAs de seção apontando para páginas internas corretas (`/inspira`, `/transpira`, `/inspira/oxigenio`, `/faisca`, `/sobre`, `/contato`)

---

## NOTAS PARA AS PRÓXIMAS ENTREGAS

**Atualização pendente do `my-rules.md`:** o arquivo lista os três casos sob "Todos pré-IA". Precisa ser corrigido para distinguir Diageo e Jogos (pré-IA) de jurídico (pós-IA com supervisão humana). Não fazer agora. Fazer depois que toda a copy do site estiver estabilizada.

**Wireframe v3.1:** atualização do v3.0 está saindo junto com esta entrega. Mudança principal: `/transpira/juridico` passa de `noindex, follow` para `index, follow`, entra no sitemap, ganha link no menu, recebe schema FAQPage.

**Próxima entrega de copy:** páginas internas v4.0 (`/sobre`, `/inspira`, `/transpira`, `/transpira/juridico`, `/faisca`, `/antes-da-crise`, `/contato`). Em seguida, copy de `/inspira/oxigenio`, depois plano de campanha.

---

*Copy da Home v2.1 · PIRA LABS · Maio 2026*
