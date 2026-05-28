# Copy da Home: Site PIRA LABS
**Versão:** 2.2 (rebuild v2 · base v14)
**Data:** Maio 2026
**Substitui:** copy-home-pira-labs-v2_1.md e todos os rascunhos anteriores baseados em v13
**Fonte da verdade:** PiraLabs_Documento_Mestre_v14.md
**Wireframe de referência:** wireframe-completo-site-pira-labs-v4.md
**Voz:** institucional PIRA LABS

---

## CHANGELOG

Rebuild completo. Base: v14 + wireframe v4.

| Mudança | Detalhe |
|---|---|
| Frase canônica | "...antes da crise" → "...antes que a janela se feche" |
| HOME-1 hero | 3 elementos apenas: H1, suporte, CTA único "Entender o método" |
| HOME-5 FAÍSCA | 3 grupos do catálogo v14. Remove "Mentorias" (produto descontinuado). Remove "Antes da Crise" como frente (migrou para nav principal como "Antes, Pira") |
| HOME-7 FAQ | Bloco novo: FAQ primeira conversa com preços públicos |
| HOME-8 CTA final | Passa a usar "Respire" como CTA primário com microcopy contextual |
| Preços | Oxigênio Fast R$3.500 / Full R$5.300, Pocket R$3.900, Imersão R$7.100 |
| CTA héro secundário | Removido do hero. Oxigênio aparece em HOME-3 (Método) |

---

## NOTAS DE PRODUÇÃO PARA O IMPLEMENTADOR

**Regras absolutas aplicadas neste documento:**
- Sem travessão em nenhum ponto
- PIRA LABS em caixa alta em títulos, H1, H2. "Pira Labs" em corpo, subtítulos e metadados.
- Frase canônica obrigatória nos primeiros 150 termos (entra em HOME-1)
- Vocabulário proibido respeitado
- Diageo → "multinacional do setor de bebidas". Celso atuou na agência, não na Diageo.
- Samsung → "uma grande marca de tecnologia"
- "Respondemos em até dois dias úteis." presente em HOME-8
- Mentorias: produto descontinuado. Não aparece em nenhum bloco.
- "Antes, Pira" (com vírgula): publicação no Substack. URL: /antes-pira.

**CTA system (wireframe v4 Seção 4.5):**
- HOME-1: "Entender o método" → âncora HOME-3 (CTA de navegação interna, não "Respire")
- HOME-3 Oxigênio: "Conhecer Oxigênio" → /inspira/oxigenio (CTA de navegação, sem microcopy)
- HOME-5 FAÍSCA: "Conhecer FAÍSCA" → /faisca
- HOME-6 Fundadores: "Conhecer Gabriela e Celso" → /sobre
- HOME-8: "Respire" → /contato?origem=home (CTA de página, com microcopy)

**Tipografia (referência para implementador):**
- H1 hero: Cormorant 64 a 80px
- Frase canônica (1 linha de suporte): Grotesk
- Números HOME-4: Cormorant Light 56 a 72px, kerning -0.02em, count-up animation
- Frase de fechamento HOME-8: Cormorant Italic

---

## SEO HEAD

```html
<title>Creative Business Turnaround · PIRA LABS</title>

<meta name="description" content="A Pira Labs é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes que a janela se feche.">

<link rel="canonical" href="https://piralabs.com.br/">

<meta property="og:title" content="PIRA LABS · Creative Business Turnaround">
<meta property="og:description" content="Boutique brasileira de Creative Business Turnaround para empresas de serviços. Entramos antes que o modelo de trabalho vire crise.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://piralabs.com.br/">
```

**Verificação:**
- Title: 40 caracteres. "Creative Business Turnaround" inicia na posição 1. ✓
- Meta description: 142 caracteres. ✓
- Frase canônica nos primeiros 150 termos da página. ✓

---

## HOME-1 · HERO

**Componente:** `<Hero />`
**Nota:** 3 elementos apenas, conforme wireframe v4. Sem segundo CTA no hero.

### H1 (Cormorant 64 a 80px)

> Existe um momento em que transformar ainda é um processo, não uma crise.

### Linha de suporte (Grotesk: frase canônica)

> A Pira Labs é uma boutique brasileira de Creative Business Turnaround para empresas de serviços que precisam agir antes que a janela se feche.

### CTA único

`Entender o método` → âncora `#metodo` (rola até HOME-3)

---

**Verificação da frase canônica:** presente nos primeiros 150 termos, em sentença única. ✓

---

## HOME-2 · SINAIS

**Componente:** `<Signals />`

### Label da seção

> Quando a operação começa a custar mais do que deveria

### Subtítulo

> Em seis meses, **79 pontos percentuais de margem** recuperados sem aumento de receita, em uma evidência de trajetória dos fundadores. O problema estava exatamente onde ninguém estava olhando. Esse tipo de sinal é o que a Pira Labs procura antes de recomendar qualquer solução. Cinco sinais de quando o modelo começa a mostrar o custo:

### Sinais (lista tipográfica, sem cards com ícones genéricos)

**Sinal 1**
> A empresa cresce, mas a margem some. O esforço aumenta, o resultado fica igual.

**Sinal 2**
> Toda decisão importante passa pelo fundador. O time espera.

**Sinal 3**
> A operação só funciona porque algumas pessoas fazem o que não é papel delas.

**Sinal 4**
> A empresa adotou IA. O resultado foi acelerar o ruído que já existia.

**Sinal 5**
> Em buscas feitas por IA, listas geradas automaticamente e recomendações de mercado, a empresa não aparece, ou aparece errado.

### Frase de fechamento

> Se você reconheceu mais de um, continue a leitura.

---

## HOME-3 · MÉTODO

**Componente:** `<Method />`
**Âncora:** `id="metodo"`

### Título da seção

> O método

### Subtítulo

> Três movimentos. Três fases. Não é metáfora. É como o negócio se move.

### Bloco INSPIRA

**Nome:** INSPIRA
**Tagline:** Quando você para de resolver o problema errado.

**Descrição:**
> O diagnóstico. Seis camadas em sequência, convergindo em síntese integrada com aprovação humana em cada etapa. Nenhuma recomendação antes de todas as leituras estarem integradas. Gabriela Aguiar conduz. O resultado é o problema real nomeado, a rota desenhada e o próximo passo definido.

**CTA:** `Ver INSPIRA` → `/inspira`

---

### Bloco TRANSPIRA

**Nome:** TRANSPIRA
**Tagline:** Quando o *trabalho certo* substitui o *trabalho muito*.

**Nota técnica:** aplicar `<em>` em "trabalho certo" e "trabalho muito". Sem aspas.

**Descrição:**
> A execução. Acontece dentro da operação do cliente, com o time que vai operar depois. Redesenha a relação entre trabalho, valor, tecnologia e governança. A Pira Labs não sai quando o prazo acaba. Sai quando os resultados acordados são verificados. Celso Gama conduz.

**CTA:** `Ver TRANSPIRA` → `/transpira`

---

### Linha de fechamento (RESPIRA)

> Quando a clareza chega, o ritmo volta. O negócio decide. A empresa cresce sem improviso constante. Esse é o RESPIRA. Estado, não produto.

---

### Bloco de entrada

> Quer começar com escopo fechado e prazo definido? O Oxigênio IA Search diagnostica como a sua empresa aparece nos motores de IA. Fast R$3.500 · Full R$5.300. Entrega em até 5 dias úteis.

**CTA:** `Conhecer Oxigênio` → `/inspira/oxigenio`

---

## HOME-4 · PROVAS

**Componente:** `<Proofs />`
**Âncora:** `id="provas"`, destino dos redirects de /cases
**Nota técnica:** números em Cormorant Light 56 a 72px, kerning -0.02em. Count-up animation ao entrar no viewport (IntersectionObserver, 1.2s, ease-out).

### Título da seção

> O que a operação real ensinou

### Subtítulo

> Não é teoria de prateleira. É o que aprendemos errando, corrigindo, entregando. Três evidências de trajetória dos fundadores, anteriores à Pira Labs como empresa:

---

### Card 1 · pré-IA

**Número:** R$16M → R$163M

**Contexto:**
> Reestruturação da área de ativação e eventos de uma agência multinacional. Dois anos de operação redesenhada culminaram na coordenação de 600 pessoas e 100 fornecedores para o patrocínio global de uma grande marca de tecnologia nos Jogos Rio 2016.

---

### Card 2 · pré-IA

**Número:** -64% → +15%

**Contexto:**
> Conta publicitária de multinacional do setor de bebidas, atendida pela agência onde Celso liderava a operação. Revisão de processos e métricas recuperou 79 pontos percentuais de margem em 6 meses, sem aumentar receita.

---

### Card 3 · pós-IA

**Número:** 400h → 36h

**Contexto:**
> Operação jurídica de alto volume. IA bem aplicada e supervisionada por humanos liberou capacidade de R$160 mil de faturamento adicional por mês, com a mesma equipe que o cliente já tinha.

---

### Frase de fechamento

> Os dois primeiros vieram de redesenho de processo, antes da onda atual de IA. O terceiro veio depois, com IA aplicada e supervisão humana. Em todos, o resultado veio de olhar para onde ninguém estava olhando.

---

## HOME-5 · FAÍSCA (teaser)

**Componente:** `<FaiscaTeaser />`
**Nota:** não é lista de preços. É convite a conhecer a porta de entrada. O catálogo completo está em /faisca.

### Título da seção

> FAÍSCA · a porta de entrada

### Subtítulo

> Engajamentos de tempo curto que ensinam, despertam ou provocam antes de qualquer compromisso maior. Três grupos, sete produtos.

### Grupos

**Grupo 1 · Entrada rápida: preço fixo, sem atrito**

> Imersão em IA (R$7.100) · Oxigênio IA Search (R$3.500/R$5.300) · Pocket do INSPIRA (R$3.900)

**Grupo 2 · Autoridade e relacionamento**

> Palestras · Workshops

**Grupo 3 · Oferta seletiva**

> C-level as a Service · FAÍSCA Jurídica

### CTA

`Conhecer FAÍSCA` → `/faisca`

---

## HOME-6 · FUNDADORES (teaser)

**Componente:** `<FoundersTeaser />`

### Imagem

`Nós.png` (Gabriela à esquerda, Celso à direita)
`alt="Gabriela Aguiar e Celso Gama, cofundadores da PIRA LABS"`

### Texto principal

> A Pira Labs é boutique por escolha, não por estágio. Cada projeto tem Gabriela e Celso do diagnóstico à entrega. Sem camada intermediária entre quem entende o problema e quem resolve.

### Texto secundário

> Quase uma década conectando organizações globais de tecnologia, inovação e educação executiva. Mais de 25 anos de operação em multinacionais. A combinação não é comum. É o que sustenta cada decisão.

### CTA

`Conhecer Gabriela e Celso` → `/sobre`

---

## HOME-7 · FAQ PRIMEIRA CONVERSA

**Componente:** `<HomeFAQ />`
**Schema:** FAQPage
**Função:** reduzir fricção para quem nunca contratou esse tipo de serviço.

### Título da seção

> Perguntas de quem está chegando agora

---

**Pergunta 1:** Quanto custa trabalhar com a Pira Labs?
**Resposta:** Cada projeto é dimensionado individualmente. Os produtos de entrada têm preço público: Oxigênio IA Search Fast R$3.500 / Full R$5.300. Pocket do INSPIRA R$3.900. Imersão em IA R$7.100. Para INSPIRA e TRANSPIRA, o investimento é definido após a primeira conversa.

---

**Pergunta 2:** Quanto tempo demora?
**Resposta:** Depende do produto. Oxigênio: até 5 dias úteis. Pocket do INSPIRA: sessão única de 1,5h. Imersão em IA: 3 sessões, 5,5h no total. INSPIRA completo: 4 a 6 semanas. TRANSPIRA: entre 2 e 6 meses conforme escopo e configuração.

---

**Pergunta 3:** E se eu não sei exatamente o que preciso?
**Resposta:** A primeira conversa é justamente isso. Sem compromisso. Ajudamos a nomear o problema antes de propor qualquer solução.

---

**Pergunta 4:** Como começa o primeiro contato?
**Resposta:** Você manda mensagem pelo formulário. Em até 2 dias úteis Gabriela e Celso respondem. Conversa inicial de 30 a 45 minutos. Se fizer sentido para os dois lados, proposta em até 5 dias úteis.

---

**Pergunta 5:** Vocês atendem empresas internacionais?
**Resposta:** Sim. Atendemos em português e inglês.

---

## HOME-8 · CTA FINAL

**Componente:** `<FinalCTA />`

### Frase de fechamento (Cormorant Italic)

> Existe um próximo nível para o seu negócio. O que está entre você e ele, descobrimos junto.

### CTA primário

`Respire` → `/contato?origem=home`

### Microcopy (abaixo do botão)

> Conversa inicial sem compromisso. Respondemos em até 2 dias úteis.

### Assinatura

> Inspira. Transpira. Respira.
> **Liberamos o próximo nível.**

---

## CHECKLIST DE VERIFICAÇÃO ANTES DO BUILD

**Conteúdo:**
- [x] Frase canônica com "antes que a janela se feche" nos primeiros 150 termos
- [x] Número concreto (-64% / +15% / 79pp) nos primeiros ~80 palavras (HOME-2)
- [x] Nenhum travessão
- [x] Nenhum termo do vocabulário proibido
- [x] PIRA LABS em caixa alta em títulos. "Pira Labs" em corpo e metadados.
- [x] Diageo → "multinacional do setor de bebidas". Celso na agência, não na Diageo.
- [x] Samsung → "uma grande marca de tecnologia"
- [x] Caso jurídico (400h → 36h) marcado como pós-IA com supervisão humana
- [x] "Respondemos em até dois dias úteis." em HOME-8
- [x] "Mentorias" não aparece em nenhum bloco
- [x] "Antes, Pira" com vírgula. URL /antes-pira.
- [x] Preços: Oxigênio Fast R$3.500 / Full R$5.300 · Pocket R$3.900 · Imersão R$7.100
- [x] Configurações A/B do TRANSPIRA não aparecem na home (ficam em /transpira)

**CTA:**
- [x] HOME-1 hero: 1 CTA único "Entender o método" → HOME-3. Sem segundo CTA no hero.
- [x] HOME-3: "Ver INSPIRA", "Ver TRANSPIRA", "Conhecer Oxigênio": CTAs de navegação
- [x] HOME-5: "Conhecer FAÍSCA" → /faisca
- [x] HOME-8: "Respire" → /contato?origem=home com microcopy abaixo
- [x] Microcopy HOME-8: "Conversa inicial sem compromisso. Respondemos em até 2 dias úteis."

**SEO:**
- [x] Title 40 caracteres. "Creative Business Turnaround" inicia na posição 1. ✓
- [x] Meta description 142 caracteres. ✓
- [x] H1 único na página
- [x] Schema: Organization, WebSite, WebPage, BreadcrumbList (declarar no Code)

**Técnico:**
- [x] Âncora `id="metodo"` em HOME-3 (destino do CTA do hero)
- [x] Âncora `id="provas"` em HOME-4 (destino do redirect /cases)
- [x] Itálico em "trabalho certo" e "trabalho muito" via CSS (`<em>`)
- [x] Cormorant em H1, números HOME-4 e frase fechamento HOME-8
- [x] Count-up animation em HOME-4 (IntersectionObserver, 1.2s, ease-out)

---

*Copy da Home v2.2 · PIRA LABS · Maio 2026*
*Base: PiraLabs_Documento_Mestre_v14.md + wireframe-completo-site-pira-labs-v4.md*
*Status: aguardando revisão do Celso*
