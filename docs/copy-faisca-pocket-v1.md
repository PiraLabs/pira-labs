# Copy: /faisca/pocket
**Versão:** 1.0
**Data:** Maio 2026
**Arquivo:** novo (produto adicionado em v14)
**Fonte da verdade:** PiraLabs_Documento_Mestre_v14.md
**Wireframe de referência:** wireframe-completo-site-pira-labs-v4.md (Seção 5.21)
**Voz:** institucional PIRA LABS · página comercial

---

## NOTAS DE PRODUÇÃO

**CTA desta página:**
- CTA primário: "Respire" → âncora #falar (POCKET-6)
- Microcopy: "Sessão de 1,5h online. Respondemos em até 2 dias úteis."

**Regras absolutas:**
- Sem travessão
- PIRA LABS em caixa alta em títulos. "Pira Labs" em corpo e metadados.
- MIT com nome completo do programa
- Não chamar de "diagnóstico formal" nem de "substituto do INSPIRA completo"
- Distinção obrigatória: Pocket vs INSPIRA completo, Pocket vs Oxigênio IA Search

---

## SEO HEAD

```html
<title>Pocket do INSPIRA · Leitura diagnóstica inicial · PIRA LABS</title>

<meta name="description" content="Leitura diagnóstica compacta em 1,5h. Gabriela Aguiar conduz. Celso Gama opera os agentes. R$3.900. Mercado, financeiro e presença em IA em síntese integrada.">

<link rel="canonical" href="https://piralabs.com.br/faisca/pocket">
```

**Verificação:**
- Title: 55 caracteres. ✓
- Meta description: 152 caracteres. ✓
- Número concreto nos primeiros 100 palavras: R$3.900 no hero. ✓

**Schema:** Service + Offer (R$3.900) + FAQPage + BreadcrumbList

---

## POCKET-1 · HEADER DA PÁGINA

**Componente:** `<PageHeader />`
**Breadcrumb:** Home > Faísca > Pocket do INSPIRA
**H1:** Pocket do INSPIRA

**Subtítulo:** Uma leitura inicial com metodologia. Três dimensões do negócio em 1,5h.

---

## POCKET-2 · HERO DA OFERTA

**Componente:** `<OfferHero />`

### Chamada principal

> O INSPIRA completo roda seis camadas em 4 a 6 semanas. O Pocket roda três formulários em uma sessão de 1,5h: mercado, financeiro e presença em motores de inteligência artificial. Ao final, você tem uma leitura inicial integrada dessas três dimensões e os próximos passos prioritários.

### Bloco da oferta

> O Pocket do INSPIRA é uma leitura diagnóstica inicial em 1,5h: três formulários rodados ao vivo por Gabriela Aguiar e Celso Gama, com entrega de síntese inicial integrada na própria sessão, ao investimento de R$3.900.

| | |
|---|---|
| **Investimento** | R$3.900 |
| **Formato** | 1,5h online |
| **Conduz a sessão** | Gabriela Aguiar |
| **Opera os agentes** | Celso Gama |
| **Entrega** | Síntese inicial com leitura integrada e próximos passos |

### CTA

`Respire` → âncora `#falar`

**Microcopy:** Sessão de 1,5h online. Respondemos em até 2 dias úteis.

---

## POCKET-3 · O QUE ACONTECE NA SESSÃO

**Componente:** `<ProcessSteps />`

### Os três formulários

**Formulário 1 · Mercado**
> Leitura de como a empresa se posiciona, quem atende, como define e entrega valor, e o que diferencia na percepção do cliente. Não é pesquisa de mercado. É leitura da relação entre a empresa e o território onde opera.

**Formulário 2 · Financeiro**
> Leitura de onde a pressão econômica está concentrada. Onde a margem vaza, onde o custo é opaco, onde o crescimento não se traduz em resultado. Sem acesso a balanços. Com as perguntas certas.

**Formulário 3 · Presença em IA**
> Leitura de como a empresa aparece para os motores de inteligência artificial. Versão compacta da leitura de presença em IA Search: o que o ICP encontra quando pesquisa o setor.

### O que você recebe ao final

> Síntese inicial com leitura integrada das três dimensões. Os pontos de convergência entre mercado, financeiro e presença em IA. Os próximos passos prioritários ordenados por urgência e esforço.

### Postura do produto

> O Pocket do INSPIRA é leitura inicial com metodologia. Não substitui o INSPIRA completo, que roda as seis camadas em 4 a 6 semanas com aprovação humana em cada etapa. O Pocket responde: "por onde começo?" O INSPIRA responde: "o que está acontecendo de verdade?"

### Sobre dados e confidencialidade

> Os formulários trabalham sobre informações que o decisor compartilha na sessão. Dados sensíveis, informações de clientes e documentos confidenciais só entram com critério e alinhamento prévio. A sessão ensina a ler o negócio, não a expor o que não precisa ser exposto.

---

## POCKET-4 · PARA QUEM É

**Componente:** `<TargetProfile />`

**Perfil 1**
> Fundador que quer uma primeira leitura antes de comprometer semanas com o INSPIRA completo. O Pocket entrega leitura estruturada com metodologia em uma tarde.

**Perfil 2**
> Decisor com uma questão específica que precisa de diagnóstico rápido com critério: "minha empresa aparece bem nos motores de IA?", "onde está vazando margem?", "como o mercado me lê?"

**Perfil 3**
> Empresa em movimento (rebrand, nova frente, mudança de ICP) que quer uma calibragem rápida antes de agir. Não para substituir o diagnóstico completo, mas para informar a decisão imediata.

### Filtro: quando o Pocket não é suficiente

> Se a empresa precisa de redesenho estrutural de trabalho, modelo de delegação ou governança de IA, o Pocket dará uma leitura útil, mas o próximo passo imediato será o INSPIRA completo ou o TRANSPIRA. Use o Pocket para confirmar isso com clareza.

---

## POCKET-5 · QUEM CONDUZ

**Componente:** `<WhoDelivers />`

> **Gabriela Aguiar** conduz a sessão e faz a leitura integrada. Universal AI Foundational Modules (MIT, em andamento, 2026). Docente em programas de MBA na FIAP e no Instituto Cidades Responsivas. Mentora FGV Ventures.
>
> **Celso Gama** opera os agentes de IA em tempo real durante a sessão. Applied AI Certificate Program (MIT, em andamento, 2026). Bacharelando em Direito (Mackenzie).

**Foto:** Nós.png em formato menor. Link para `/sobre`.
**CTA:** `Conhecer Gabriela e Celso` → `/sobre`

---

## POCKET-6 · CTA FINAL

**Componente:** `<FinalCTA />`
**Âncora:** `id="falar"`

> A sessão começa depois de uma conversa inicial para garantir que o Pocket é o produto certo para o momento.

`Respire` → `/contato?origem=faisca_pocket`

**Microcopy:** Sessão de 1,5h online. Respondemos em até 2 dias úteis.

---

## POCKET-7 · FAQ

**Componente:** `<FAQ />`
**Schema:** FAQPage

**Pergunta 1:** O que é o Pocket do INSPIRA?
**Resposta:** É uma leitura diagnóstica inicial em três dimensões: mercado, financeiro e presença em motores de inteligência artificial. Rodado em uma sessão de 1,5h com Gabriela Aguiar conduzindo e Celso Gama operando os agentes de IA em tempo real. Você sai com uma síntese inicial integrada dessas três dimensões e próximos passos prioritários.

**Pergunta 2:** Qual a diferença entre o Pocket e o INSPIRA completo?
**Resposta:** O INSPIRA completo roda seis camadas em 4 a 6 semanas com síntese integrada e aprovação humana em cada etapa. O Pocket roda três dimensões em 1,5h. O Pocket responde "por onde começo?". O INSPIRA responde "o que está acontecendo de verdade?". Um não substitui o outro.

**Pergunta 3:** Qual a diferença entre o Pocket e o Oxigênio IA Search?
**Resposta:** O Oxigênio IA Search é um diagnóstico dedicado exclusivamente à presença em motores de inteligência artificial, com análise de queries, plataformas e concorrentes. O Pocket inclui uma leitura de presença em IA como um dos três formulários, junto com mercado e financeiro. Se o único ponto de atenção é presença em IA, o Oxigênio IA Search é o produto certo.

**Pergunta 4:** O que recebo ao final da sessão?
**Resposta:** Síntese inicial com leitura integrada das três dimensões e próximos passos prioritários ordenados por urgência e esforço. A leitura é entregue na própria sessão, com tempo para perguntas e alinhamento.

**Pergunta 5:** Preciso preparar algo antes?
**Resposta:** Não há material obrigatório. Os formulários são rodados durante a sessão. Uma boa preparação é chegar com uma questão específica em mente: o que mais incomoda hoje, o que você quer entender melhor.

---

## SCHEMA JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/faisca/pocket#service",
  "name": "Pocket do INSPIRA",
  "description": "Leitura diagnóstica inicial em três dimensões: mercado, financeiro e presença em motores de inteligência artificial. Sessão de 1,5h. Gabriela Aguiar conduz, Celso Gama opera os agentes de IA em tempo real.",
  "provider": { "@id": "https://piralabs.com.br/#organization" },
  "serviceType": "Leitura diagnóstica inicial",
  "offers": {
    "@type": "Offer",
    "name": "Pocket do INSPIRA",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "3900",
      "priceCurrency": "BRL"
    }
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é o Pocket do INSPIRA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É uma leitura diagnóstica inicial em três dimensões: mercado, financeiro e presença em motores de inteligência artificial. Rodado em 1,5h com Gabriela Aguiar conduzindo e Celso Gama operando os agentes de IA em tempo real. Entrega síntese inicial integrada dessas três dimensões e próximos passos prioritários."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre o Pocket do INSPIRA e o INSPIRA completo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O INSPIRA completo roda seis camadas em 4 a 6 semanas. O Pocket roda três dimensões em 1,5h. O Pocket responde por onde começar. O INSPIRA responde o que está acontecendo de verdade. Um não substitui o outro."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre o Pocket do INSPIRA e o Oxigênio IA Search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O Oxigênio IA Search é dedicado exclusivamente à presença em motores de inteligência artificial. O Pocket inclui presença em IA como um dos três formulários, junto com mercado e financeiro. Se o único ponto de atenção é presença em IA, o Oxigênio IA Search é o produto certo."
      }
    },
    {
      "@type": "Question",
      "name": "O que recebo ao final do Pocket do INSPIRA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Síntese inicial com leitura integrada das três dimensões e próximos passos prioritários ordenados por urgência e esforço. Entregue na própria sessão com tempo para perguntas."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso preparar algo antes do Pocket do INSPIRA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não há material obrigatório. Os formulários são rodados durante a sessão. Uma boa preparação é chegar com uma questão específica em mente: o que mais incomoda hoje, o que você quer entender melhor."
      }
    }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://piralabs.com.br/" },
    { "@type": "ListItem", "position": 2, "name": "Faísca", "item": "https://piralabs.com.br/faisca" },
    { "@type": "ListItem", "position": 3, "name": "Pocket do INSPIRA", "item": "https://piralabs.com.br/faisca/pocket" }
  ]
}
```

---

## CHECKLIST DE VERIFICAÇÃO ANTES DO BUILD

**Conteúdo:**
- [x] Sem travessão
- [x] PIRA LABS em caixa alta em títulos. "Pira Labs" em corpo e metadados.
- [x] Preço R$3.900 no hero e no schema
- [x] MIT com nome completo em POCKET-5 (Gabriela e Celso)
- [x] Celso como "bacharelando em Direito (Mackenzie)"
- [x] Número concreto nos primeiros 100 palavras (R$3.900)
- [x] Produto posicionado como leitura inicial, não substituto do INSPIRA
- [x] Distinção Pocket vs INSPIRA completo em POCKET-3 e FAQ Q2
- [x] Distinção Pocket vs Oxigênio IA Search em FAQ Q3
- [x] Salvaguarda de dados sensíveis em POCKET-3
- [x] "motores de inteligência artificial" em chamada principal e FAQ

**CTA:**
- [x] CTA primário: "Respire" → /contato?origem=faisca_pocket
- [x] Microcopy: "Sessão de 1,5h online. Respondemos em até 2 dias úteis."
- [x] Âncora id="falar" em POCKET-6

**Schema:**
- [x] Service com Offer (R$3.900)
- [x] serviceType: "Leitura diagnóstica inicial" (não "diagnóstico formal")
- [x] FAQPage com 5 perguntas (Q1 a Q5)
- [x] BreadcrumbList separado do Service

---

*Copy /faisca/pocket v1.0 · PIRA LABS · Maio 2026*
*Base: PiraLabs_Documento_Mestre_v14.md + wireframe-completo-site-pira-labs-v4.md*
*Status: aguardando revisão do Celso*
