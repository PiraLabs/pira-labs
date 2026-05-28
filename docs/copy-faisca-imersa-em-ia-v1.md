# Copy: /faisca/imersa-em-ia
**Versão:** 1.0
**Data:** Maio 2026
**Arquivo:** novo (produto adicionado em v14)
**Fonte da verdade:** PiraLabs_Documento_Mestre_v14.md
**Wireframe de referência:** wireframe-completo-site-pira-labs-v4.md (Seção 5.20)
**Voz:** institucional PIRA LABS · página comercial

---

## NOTAS DE PRODUÇÃO

**CTA desta página:**
- CTA primário: "Respire" → âncora #falar (IMERSA-7)
- Microcopy: "Conversa inicial para confirmar encaixe. Respondemos em até 2 dias úteis."

**Regras absolutas:**
- Sem travessão
- PIRA LABS em caixa alta em títulos. "Pira Labs" em corpo e metadados.
- MIT com nome completo do programa
- Celso: "bacharelando em Direito (Mackenzie)"
- Produto não é curso, não é treinamento, não é onboarding genérico de ferramenta

---

## SEO HEAD

```html
<title>Imersão em IA · Sessão prática com IA · PIRA LABS</title>

<meta name="description" content="Não é curso. É sessão de trabalho com os casos reais da sua empresa. Celso Gama conduz. R$7.100. Três sessões, 5,5 horas no total.">

<link rel="canonical" href="https://piralabs.com.br/faisca/imersa-em-ia">
```

**Verificação:**
- Title: 49 caracteres. ✓
- Meta description: 130 caracteres. ✓
- Número concreto nos primeiros 100 palavras: R$7.100 no hero. ✓

**Schema:** Service + Offer (R$7.100) + FAQPage + BreadcrumbList

---

## IMERSA-1 · HEADER DA PÁGINA

**Componente:** `<PageHeader />`
**Breadcrumb:** Home > Faísca > Imersão em IA
**H1:** Imersão em IA

**Subtítulo:** Não é curso. É sessão de trabalho com IA dentro da operação real da sua empresa.

---

## IMERSA-2 · HERO DA OFERTA

**Componente:** `<OfferHero />`

### Chamada principal

> Saber o que é IA é diferente de saber o que ela faz na sua operação específica. A Imersão em IA não usa exemplos genéricos. Trabalha sobre os processos, os documentos e os casos reais da empresa, nas três sessões.

### Bloco da oferta

> A Imersão em IA é executada em três sessões de trabalho totalizando 5,5 horas, conduzida por Celso Gama sobre os processos reais da empresa, ao investimento de R$7.100.

| | |
|---|---|
| **Investimento** | R$7.100 |
| **Formato** | 3 sessões online ou presenciais |
| **Duração total** | 5,5 horas |
| **Conduz** | Celso Gama |
| **Quando começa** | Após confirmação de encaixe |

### CTA

`Respire` → âncora `#falar`

**Microcopy:** Conversa inicial para confirmar encaixe. Respondemos em até 2 dias úteis.

---

## IMERSA-3 · O QUE ACONTECE NAS TRÊS SESSÕES

**Componente:** `<ProcessSteps />`

### Sessão 1 · Cultura e adaptação (2 horas)

> O que está funcionando no setor, o que não funciona, exemplos reais de uso correto e de mau uso. Exploração direta de ChatGPT, Claude, Gemini e Perplexity com foco nos processos do cliente.
>
> O cliente sai da Sessão 1 com leitura clara de onde está em relação ao setor e com os primeiros casos mapeados para a Sessão 2.

### Sessão 2 · Execução de processos (2 horas)

> Trabalho com os casos reais enviados pelo cliente com pelo menos três dias de antecedência. Prompts de base para as rotinas do dia a dia, checklists, automações de comunicação e aplicações específicas para o contexto da empresa.
>
> O cliente sai da Sessão 2 com primeiras aplicações testadas sobre os próprios processos, não sobre exemplos fabricados.

### Sessão 3 · Ajustes e próximos passos (1,5 hora)

> Dúvidas abertas da Sessão 2, refinamento do que ficou para trás, e definição dos próximos passos de implementação. O que o time vai testar, o que depende de decisão interna, o que pode escalar.
>
> O cliente sai da Sessão 3 com plano de implementação prioritizado.

### O que não é

> A Imersão em IA não substitui o TRANSPIRA. Saber usar IA não resolve gargalo de delegação, não documenta processos e não instala critério de decisão. Quando o que falta é execução profunda e redesenho de operação, o próximo passo é o TRANSPIRA.

### Sobre dados e confidencialidade

> Materiais sensíveis, dados pessoais, informações de clientes e documentos confidenciais só entram nas sessões com anonimização, critério de uso e alinhamento prévio. A Imersão em IA ensina a usar IA sem terceirizar julgamento para a ferramenta.

---

## IMERSA-4 · PARA QUEM É

**Componente:** `<TargetProfile />`

**Perfil 1**
> Empresa que já usa IA de forma informal, sem método, e quer estruturar o uso antes de escalar. O risco sem método é escalar o erro junto com a ferramenta.

**Perfil 2**
> Fundador ou gestor que quer entender de verdade o que é possível fazer com IA nos processos da empresa antes de tomar decisão de investimento maior.

**Perfil 3**
> Time que recebeu instrução para adotar IA mas não recebeu critério: onde usar, onde não usar, o que revisar antes de enviar, o que nunca colocar na ferramenta.

### Quem não deveria contratar

> Quem busca curso genérico de ferramentas. Quem quer onboarding de plataforma. Quem precisa de redesenho profundo de operação: para esse caso, o caminho é o TRANSPIRA ou o INSPIRA primeiro.

---

## IMERSA-5 · QUEM CONDUZ

**Componente:** `<WhoDelivers />`

> Celso Gama conduz as três sessões. Applied AI Certificate Program pelo MIT (em andamento, 2026). Bacharelando em Direito (Mackenzie). MBA pelo Insper.
>
> Não há equipe intermediária. Quem confirma o encaixe é quem executa as sessões.

**Foto:** Celso individual. Link para `/sobre`.

**CTA:** `Conhecer Celso` → `/sobre`

---

## IMERSA-6 · FAQ

**Componente:** `<FAQ />`
**Schema:** FAQPage

**Pergunta 1:** Isso é um curso de IA?
**Resposta:** Não. É sessão de trabalho sobre os processos reais da sua empresa. A diferença é que você sai com primeiras aplicações testadas no seu contexto, prompts de base documentados e plano de próximos passos, não com conhecimento geral sobre ferramentas.

**Pergunta 2:** Preciso já ter IA implementada?
**Resposta:** Não necessariamente. A Sessão 1 serve exatamente para mapear onde a empresa está hoje. O ponto de entrada pode ser zero uso formal ou uso informal já em curso.

**Pergunta 3:** Qual a diferença para o Oxigênio IA Search?
**Resposta:** O Oxigênio IA Search diagnostica como a empresa aparece para os motores de inteligência artificial: buscas externas, como o ICP encontra a empresa, presença de marca em IA. A Imersão em IA trabalha o uso interno: como a operação da empresa usa IA, onde está exposta, o que melhorar. São leituras complementares. Uma olha para fora. A outra olha para dentro.

**Pergunta 4:** O que recebo ao final?
**Resposta:** Ao final das três sessões: casos prioritários testados com IA, prompts de base documentados para o dia a dia, checklists de uso e plano de próximos passos priorizado por esforço e impacto.

**Pergunta 5:** A Imersão em IA substitui o TRANSPIRA ou o INSPIRA?
**Resposta:** Não. A Imersão em IA trabalha IA aplicada à operação existente. O TRANSPIRA redesenha a operação. O INSPIRA diagnostica o negócio como sistema. Cada um responde a uma pergunta diferente.

**Pergunta 6:** Preciso preparar algo antes?
**Resposta:** Sim. Para a Sessão 2, o cliente envia pelo menos três casos reais com pelo menos três dias de antecedência. Quanto mais específico o material, mais útil a sessão.

---

## IMERSA-7 · CTA FINAL

**Componente:** `<FinalCTA />`
**Âncora:** `id="falar"`

> Antes de confirmar, fazemos uma conversa inicial para garantir que a Imersão em IA é o produto certo para o momento da empresa.

`Respire` → `/contato?origem=faisca_imersa`

**Microcopy:** Conversa inicial para confirmar encaixe. Respondemos em até 2 dias úteis.

---

## SCHEMA JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/faisca/imersa-em-ia#service",
  "name": "Imersão em IA",
  "description": "Sessão de trabalho com IA sobre os processos reais da empresa. Três sessões, 5,5 horas total. Conduzido por Celso Gama.",
  "provider": { "@id": "https://piralabs.com.br/#organization" },
  "serviceType": "Sessão prática de IA aplicada à operação",
  "offers": {
    "@type": "Offer",
    "name": "Imersão em IA",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "7100",
      "priceCurrency": "BRL"
    }
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://piralabs.com.br/" },
    { "@type": "ListItem", "position": 2, "name": "Faísca", "item": "https://piralabs.com.br/faisca" },
    { "@type": "ListItem", "position": 3, "name": "Imersão em IA", "item": "https://piralabs.com.br/faisca/imersa-em-ia" }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "A Imersão em IA é um curso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. É sessão de trabalho sobre os processos reais da empresa. Você sai com primeiras aplicações testadas no seu contexto, prompts de base documentados e plano de próximos passos."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre Imersão em IA e Oxigênio IA Search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O Oxigênio IA Search diagnostica como a empresa aparece para os motores de inteligência artificial: presença externa, como o ICP encontra a empresa. A Imersão em IA trabalha o uso interno: como a operação usa IA, onde está exposta, o que melhorar. Uma olha para fora. A outra olha para dentro."
      }
    },
    {
      "@type": "Question",
      "name": "O que recebo ao final da Imersão em IA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Casos e processos prioritários testados com IA sobre situações reais, prompts de base documentados para o dia a dia, checklists de uso e plano de próximos passos priorizado por esforço e impacto."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso já ter IA implementada para contratar a Imersão em IA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não necessariamente. A primeira sessão serve para mapear onde a empresa está hoje. O ponto de entrada pode ser zero uso formal ou uso informal já em curso."
      }
    },
    {
      "@type": "Question",
      "name": "A Imersão em IA substitui o TRANSPIRA ou o INSPIRA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. A Imersão em IA trabalha IA aplicada à operação existente. O TRANSPIRA redesenha a operação. O INSPIRA diagnostica o negócio como sistema. Cada um responde a uma pergunta diferente."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso preparar algo antes da Imersão em IA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Para a Sessão 2, o cliente envia pelo menos três casos reais com pelo menos três dias de antecedência. Quanto mais específico o material, mais útil a sessão."
      }
    }
  ]
}
```

**Conteúdo:**
- [x] Sem travessão
- [x] PIRA LABS em caixa alta em títulos. "Pira Labs" em corpo e metadados.
- [x] Preço R$7.100 no hero e no schema
- [x] MIT com nome completo: "Applied AI Certificate Program pelo MIT"
- [x] Celso como "bacharelando em Direito (Mackenzie)"
- [x] "Não é curso" explicitado no subtítulo, IMERSA-3 e FAQ
- [x] Número concreto nos primeiros 100 palavras (R$7.100)
- [x] Casos reais do cliente: "enviados com pelo menos três dias de antecedência"
- [x] Distinção Imersão vs Oxigênio IA Search no FAQ
- [x] "Não substitui TRANSPIRA" explícito em IMERSA-3 e FAQ

**CTA:**
- [x] CTA primário: "Respire" → /contato?origem=faisca_imersa
- [x] Microcopy: "Conversa inicial para confirmar encaixe. Respondemos em até 2 dias úteis."
- [x] Âncora id="falar" em IMERSA-7

**Schema:**
- [x] Service com Offer (R$7.100)
- [x] FAQPage com 6 perguntas (Q1 a Q6)
- [x] BreadcrumbList completo

---

*Copy /faisca/imersa-em-ia v1.0 · PIRA LABS · Maio 2026*
*Base: PiraLabs_Documento_Mestre_v14.md + wireframe-completo-site-pira-labs-v4.md*
*Status: aguardando revisão do Celso*
