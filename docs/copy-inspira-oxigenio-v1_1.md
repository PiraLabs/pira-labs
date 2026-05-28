# Copy: /inspira/oxigenio
**Versão:** 1.1 (rebuild v2 · base v14)
**Data:** Maio 2026
**Substitui:** copy-inspira-oxigenio-v1.md e rascunhos anteriores
**Fonte da verdade:** PiraLabs_Documento_Mestre_v14.md
**Wireframe de referência:** wireframe-completo-site-pira-labs-v4.md
**Voz:** institucional PIRA LABS · página comercial com preço público

---

## CHANGELOG v1.0 → v1.1

| Mudança | Detalhe |
|---|---|
| Preços | Preços antigos removidos. Fast R$3.500 / Full R$5.300 são os únicos valores válidos. |
| Estrutura de oferta | "Primeira rodada" e "preço regular" removidos. Fast e Full são os dois produtos permanentes. |
| CTA | "Aplicar agora" mantido (único CTA de página que não é "Respire") |
| Microcopy | "5 dias úteis para o relatório. Respondemos em até 24h." |
| Vagas | NEXT_PUBLIC_VAGAS_OXIGENIO como variável de ambiente, nunca hardcoded no copy |
| Três caminhos | Adicionados com base em v14 Seção 8 |

---

## NOTAS DE PRODUÇÃO

**CTA desta página (exceção ao sistema "Respire"):**
O Oxigênio é a única página do site com CTA específico: "Aplicar agora". O microcopy é: "5 dias úteis para o relatório. Respondemos em até 24h."

**Vagas:**
O número de vagas disponíveis vem da variável de ambiente `NEXT_PUBLIC_VAGAS_OXIGENIO`. O copy nunca hardcoda um número. O componente `<OfferHero />` exibe o valor dinâmico. Quando vagas esgotadas: implementador define estado de lista de espera conforme handoff técnico.

**Placeholders ativos:**
- **Vídeo de método (D4):** flag `NEXT_PUBLIC_D4_ACTIVE`. Oculto até gravação da Gabriela.
- **Prova de auto-aplicação (D1):** flag `NEXT_PUBLIC_D1_ACTIVE`. Oculto até auto-aplicação concluída.

**Regras absolutas:**
- Sem travessão
- PIRA LABS em caixa alta em títulos. "Pira Labs" em corpo e metadados.
- Oxigênio não é SEO técnico, não é mídia paga, não é gestão de redes sociais.
- Diageo e Samsung não nomeadas.
- MIT com nome completo do programa.

---

## SEO HEAD

```html
<title>Oxigênio IA Search · Diagnóstico de presença em IA · PIRA LABS</title>

<meta name="description" content="Diagnóstico de como sua empresa aparece nos motores de IA. Fast R$3.500, Full R$5.300. Relatório em até 5 dias úteis.">

<link rel="canonical" href="https://piralabs.com.br/inspira/oxigenio">

<meta property="og:title" content="Oxigênio IA Search · PIRA LABS">
<meta property="og:description" content="Fast R$3.500 · Full R$5.300. Diagnóstico de presença em motores de IA. Relatório em até 5 dias úteis.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://piralabs.com.br/inspira/oxigenio">
```

**Verificação:**
- Title: 62 caracteres. ✓
- Meta description: 117 caracteres. ✓
- Número concreto nos primeiros 100 palavras: R$3.500 no hero. ✓

---

## OXIGENIO-1 · HEADER DA PÁGINA

**Componente:** `<PageHeader />`
**Breadcrumb:** Home > Inspira > Oxigênio IA Search
**H1:** Oxigênio IA Search
**Subtítulo:** Diagnóstico de como sua empresa aparece quando alguém pergunta para uma IA sobre o seu setor.

---

## OXIGENIO-2 · HERO DA OFERTA

**Componente:** `<OfferHero />`

### Sobretítulo

> Subproduto do INSPIRA. Escopo fechado. Preço público.

### Chamada principal

> Parte das decisões de consideração já acontece antes do formulário, antes da reunião, antes do contato direto. Em muitos casos, essa busca passa por motores de inteligência artificial. O Oxigênio IA Search diagnostica como sua empresa aparece nessa etapa, e o que mudar para que sua presença seja lida com mais clareza pelos motores de inteligência artificial.

### Tabela de oferta

| | **Fast** | **Full** |
|---|---|---|
| **Preço** | R$3.500 | R$5.300 |
| **Queries** | 5 queries em 4 plataformas | 5 queries + frente do concorrente |
| **Respostas** | 60 respostas coletadas e classificadas | 60 + 200 respostas adicionais |
| **Entrega** | Relatório de 2 páginas com evidência literal | Tudo do Fast + Gap nomeado com causa específica + 3 ações customizadas + âncora financeira |
| **Sessão** | Leitura conjunta 45 minutos | Leitura conjunta 60 minutos |
| **Ciclo** | Entrega única | Reexecução metodológica em 60 dias |
| **Prazo** | Até 5 dias úteis | Até 5 dias úteis |

### Vagas disponíveis

> **[NEXT_PUBLIC_VAGAS_OXIGENIO]** vagas disponíveis.

**Nota para implementador:** exibir o valor da variável de ambiente. Quando o valor for zero, exibir componente de lista de espera conforme handoff técnico.

### CTA

`Aplicar agora` → âncora `#aplicar` (rola até OXIGENIO-9)

**Microcopy:** 5 dias úteis para o relatório. Respondemos em até 24h.

---

## OXIGENIO-3 · O QUE É E O QUE NÃO É

**Componente:** texto corrido com destaque negativo

### O que é

> O Oxigênio IA Search é um diagnóstico de presença em motores de IA. Rodamos queries específicas do seu setor em ChatGPT, Claude, Gemini e Perplexity, coletamos as respostas, classificamos o que aparece sobre você, sobre seus concorrentes e sobre o seu setor, e entregamos evidência literal com próximos passos priorizados.
>
> **O que o cliente recebe ao final:** sabe como aparece hoje, quem está no mesmo espaço semântico, onde está o gap específico, e o que fazer primeiro.

### O que não é

> Oxigênio IA Search não é SEO técnico, não é gestão de mídia paga, não é criação de conteúdo e não é gestão de redes sociais. É diagnóstico. O que o cliente faz com o diagnóstico é decisão dele.

---

## OXIGENIO-4 · FAST vs FULL: QUANDO CADA UM FAZ SENTIDO

> O Fast responde como a empresa aparece hoje. O Full responde por que aparece pior, aparece errado ou não aparece diante de um concorrente identificado, e o que mudar primeiro.

| Pergunta | Fast | Full |
|---|---|---|
| Você quer saber como aparece hoje? | ✓ | ✓ |
| Há um concorrente específico para comparar? | Não inclui | ✓ |
| Quer causa nomeada do gap, não só o gap? | Não inclui | ✓ |
| Quer reexecução metodológica em 60 dias? | Não inclui | ✓ |
| Quer âncora financeira do impacto? | Não inclui | ✓ |
| Budget disponível? | R$3.500 | R$5.300 |

> **Dúvida entre Fast e Full?** Diga no formulário. Na confirmação, indicamos qual faz mais sentido para o seu contexto.

---

## OXIGENIO-5 · PARA QUEM É

**Componente:** `<TargetProfile />`

### Perfis de quem faz sentido aplicar

**Perfil 1**
> Decisor que desconfia que sua empresa não aparece onde o cliente pesquisa antes de pedir reunião, mas não tem evidência concreta disso.

**Perfil 2**
> Empresa que investiu em conteúdo, site ou presença digital e não converteu como esperava. Antes de gastar mais, quer entender o que os motores de IA leem do que já existe.

**Perfil 3**
> Empresa em movimento (rebrand, novo produto, expansão de setor) que quer saber de qual ponto está partindo nos motores de IA antes de agir.

### Quem não deveria aplicar

> Empresas sem ICP minimamente definido. Negócios sem presença pública mínima. Quem busca SEO técnico, mídia paga ou gestão de redes sociais. Quem não pretende executar nenhuma ação depois do diagnóstico.

---

## OXIGENIO-6 · VÍDEO DE MÉTODO (D4)

**Componente:** condicional via flag `NEXT_PUBLIC_D4_ACTIVE`

### Quando ativo

**Título:** Como funciona, em 5 minutos.

**Subtítulo:** Gabriela Aguiar, CEO da Pira Labs, mostra como o Oxigênio IA Search é executado, com exemplo ilustrativo.

**Embed:** [INSERIR URL QUANDO DISPONÍVEL]

**Schema VideoObject:**
```json
{
  "@type": "VideoObject",
  "name": "Como funciona o Oxigênio IA Search",
  "description": "Gabriela Aguiar demonstra o diagnóstico de presença em motores de IA.",
  "thumbnailUrl": "[INSERIR URL THUMBNAIL]",
  "uploadDate": "[INSERIR DATA]",
  "duration": "PT5M",
  "publisher": { "@id": "https://piralabs.com.br/#organization" }
}
```

### Quando inativo (placeholder)

> O vídeo de método está sendo gravado. Abaixo, a descrição completa do escopo e do processo.

---

## OXIGENIO-7 · COMO FUNCIONA

**Componente:** `<ProcessSteps />`

**Passo 1 · Aplicação**
> Você preenche o formulário com informações básicas sobre a empresa, setor e contexto. Leva 5 a 10 minutos.

**Passo 2 · Confirmação em até 24h**
> Se o seu caso encaixa no escopo, enviamos confirmação e briefing curto. Se não encaixa, dizemos antes de começar. Sem cobrança.

**Passo 3 · Execução do diagnóstico**
> A partir do briefing preenchido, executamos o Oxigênio. Prazo: até 5 dias úteis a partir do recebimento do briefing.

**Passo 4 · Sessão de leitura conjunta**
> Encontro online com Gabriela e Celso para apresentar o diagnóstico. Fast: 45 minutos. Full: 60 minutos. Pode incluir até dois convidados do cliente.

---

## OXIGENIO-8 · QUEM CONDUZ

**Componente:** `<WhoDelivers />`

> O Oxigênio IA Search é executado por Gabriela Aguiar e Celso Gama. Não há equipe intermediária. Quem apresenta na confirmação é quem analisa e quem entrega.
>
> Gabriela conduz a leitura institucional e de presença, com Universal AI Foundational Modules pelo MIT (em andamento, 2026). Celso conduz a leitura de governança e exposição operacional, com Applied AI Certificate Program pelo MIT (em andamento, 2026).

**Foto:** Nós.png em formato menor. Link para `/sobre`.
**CTA:** `Conhecer Gabriela e Celso` → `/sobre`

---

## OXIGENIO-8b · PROVA DA AUTO-APLICAÇÃO (D1)

**Componente:** condicional via flag `NEXT_PUBLIC_D1_ACTIVE`

### Quando ativo

**Título:** Rodamos o Oxigênio em nós antes de oferecer.

**Texto:**
> Antes de cobrar R$3.500 por um Fast, rodamos o método na própria Pira Labs. Em parte porque é o que faz sentido. Em parte porque é o que separa método validado de método teórico.

**Achados:** [PREENCHER APÓS AUTO-APLICAÇÃO CONCLUÍDA]

**Link:** Post completo no LinkedIn: [INSERIR LINK]

### Quando inativo (placeholder)

> Os resultados da auto-aplicação estarão disponíveis em breve. Estamos rodando o Oxigênio na própria Pira Labs antes de divulgar os achados.

---

## OXIGENIO-9 · CTA DE APLICAÇÃO

**Componente:** `<ApplicationCTA />`
**Âncora:** `id="aplicar"`

### Tabela de resumo (exibida acima do CTA)

| | **Fast** | **Full** |
|---|---|---|
| Preço | R$3.500 | R$5.300 |
| Vagas disponíveis | [NEXT_PUBLIC_VAGAS_OXIGENIO] | [NEXT_PUBLIC_VAGAS_OXIGENIO] |
| Prazo | até 5 dias úteis | até 5 dias úteis |

### Texto

> Quanto mais contexto você compartilhar na aplicação, mais útil é a primeira resposta. Se o seu caso não encaixa no escopo, dizemos antes de qualquer cobrança.

### CTA

`Aplicar agora` → `[FILL_OUT_FORM_URL]?origem=oxigenio`

### Microcopy

> 5 dias úteis para o relatório. Respondemos em até 24h.

### Após a sessão: os três caminhos

> O diagnóstico revela onde a empresa está. O próximo passo depende do que revelar:
>
> **Problema de execução específica:** o gap está identificado e o que falta é ajuste de posicionamento e conteúdo. O próximo passo é o TRANSPIRA com foco em GEO/AEO.
>
> **Empresa invisível e sem clareza de por onde começar:** o gap de IA Search é sinal de problema mais amplo de modelo, posicionamento ou operação. O próximo passo é o INSPIRA completo.
>
> **Boa presença e clareza de ação:** o diagnóstico confirmou o que o cliente já sentia. O próximo passo é FAÍSCA ou conexão com a rede de referência da Pira Labs.

---

## OXIGENIO-10 · FAQ

**Componente:** `<FAQ />`
**Schema:** FAQPage

**Pergunta 1:** Por que não faço a pesquisa por conta própria?
**Resposta:** Você pode. A diferença está em três pontos: cruzamento de quatro plataformas com queries específicas do seu setor, leitura interpretativa do que cada padrão de resposta revela, e priorização de ações por esforço versus impacto. A diferença entre rodar uma busca no ChatGPT e ter um diagnóstico estruturado é parecida com a diferença entre olhar um exame e ter alguém interpretando o que ele revela.

**Pergunta 2:** O Oxigênio é a mesma coisa que SEO?
**Resposta:** Não. SEO trata de como seu site aparece em buscadores como Google. O Oxigênio diagnostica como sua empresa aparece em respostas de modelos de IA como ChatGPT, Claude, Gemini e Perplexity. São sistemas e lógicas diferentes. O que funciona em SEO tradicional não garante visibilidade em IA Search.

**Pergunta 3:** Quanto tempo demora?
**Resposta:** Até 5 dias úteis a partir do recebimento do briefing preenchido.

**Pergunta 4:** O Oxigênio inclui execução das ações?
**Resposta:** Não. O Oxigênio entrega o diagnóstico e os próximos passos priorizados. Execução é decisão do cliente. Para quem quer apoio na execução, o próximo passo depende do que o diagnóstico revela.

**Pergunta 5:** Qual a diferença entre Fast e Full?
**Resposta:** O Fast responde "como apareço hoje". O Full responde isso e também "por que apareço pior, apareço errado ou não apareço diante de um concorrente específico", com causa nomeada, três ações customizadas, âncora financeira e reexecução em 60 dias para medir variação.

**Pergunta 6:** Vocês assinam NDA?
**Resposta:** Sim. Quando o diagnóstico exigir informação sensível ou briefing detalhado, assinamos NDA antes do acesso. O formulário inicial coleta apenas dados básicos para avaliar encaixe.

**Pergunta 7:** O que acontece se meu caso não encaixar no escopo?
**Resposta:** Dizemos antes de qualquer cobrança. A confirmação de aplicação não cria obrigação financeira. Se o caso não encaixa, indicamos o que faria mais sentido.

---

## SCHEMAS JSON-LD

### Service

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/inspira/oxigenio#service",
  "name": "Oxigênio IA Search",
  "description": "Diagnóstico de como empresas de serviços aparecem nos motores de inteligência artificial. Subproduto do INSPIRA da Pira Labs.",
  "provider": { "@id": "https://piralabs.com.br/#organization" },
  "serviceType": "Diagnóstico de presença em IA Search",
  "offers": [
    {
      "@type": "Offer",
      "name": "Oxigênio IA Search Fast",
      "priceSpecification": { "@type": "PriceSpecification", "price": "3500", "priceCurrency": "BRL" }
    },
    {
      "@type": "Offer",
      "name": "Oxigênio IA Search Full",
      "priceSpecification": { "@type": "PriceSpecification", "price": "5300", "priceCurrency": "BRL" }
    }
  ]
}
```

### FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Por que não faço a pesquisa por conta própria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A diferença está em três pontos: cruzamento de quatro plataformas com queries específicas do setor, leitura interpretativa do que cada padrão de resposta revela, e priorização de ações por esforço versus impacto."
      }
    },
    {
      "@type": "Question",
      "name": "O Oxigênio IA Search é a mesma coisa que SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. SEO trata de como o site aparece em buscadores como Google. O Oxigênio IA Search diagnostica como a empresa aparece em respostas de modelos de IA como ChatGPT, Claude, Gemini e Perplexity. São sistemas e lógicas diferentes."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo demora o Oxigênio IA Search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Até 5 dias úteis a partir do recebimento do briefing preenchido."
      }
    },
    {
      "@type": "Question",
      "name": "O Oxigênio IA Search inclui execução das ações?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. O Oxigênio IA Search entrega o diagnóstico e os próximos passos priorizados. Execução é decisão do cliente. Para quem quer apoio na execução, o próximo passo depende do que o diagnóstico revela."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre Fast e Full?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O Fast responde como você aparece hoje. O Full responde isso e também por que você aparece pior, aparece errado ou não aparece diante de um concorrente específico, com causa nomeada, três ações customizadas, âncora financeira e reexecução em 60 dias."
      }
    },
    {
      "@type": "Question",
      "name": "Vocês assinam NDA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Quando o diagnóstico exigir informação sensível ou briefing detalhado, assinamos NDA antes do acesso. O formulário inicial coleta apenas dados básicos para avaliar encaixe."
      }
    },
    {
      "@type": "Question",
      "name": "O que acontece se meu caso não encaixar no escopo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dizemos antes de qualquer cobrança. A confirmação de aplicação não cria obrigação financeira. Se o caso não encaixa, indicamos o que faria mais sentido."
      }
    }
  ]
}
```

---

## CHECKLIST DE VERIFICAÇÃO ANTES DO BUILD

**Conteúdo:**
- [x] Sem travessão
- [x] PIRA LABS em caixa alta em títulos. "Pira Labs" em corpo e metadados.
- [x] Preços: Fast R$3.500 / Full R$5.300 em todos os blocos e schemas
- [x] CTA: "Aplicar agora" (não "Respire": exceção de página)
- [x] Microcopy: "5 dias úteis para o relatório. Respondemos em até 24h."
- [x] Número concreto nos primeiros 100 palavras (R$3.500 no hero)
- [x] MIT com nome completo do programa em OXIGENIO-8
- [x] Diageo e Samsung não nomeadas
- [x] Oxigênio não posicionado como SEO, mídia paga ou gestão de redes

**Técnico:**
- [x] NEXT_PUBLIC_VAGAS_OXIGENIO declarada como variável de ambiente (não hardcoded)
- [x] NEXT_PUBLIC_D4_ACTIVE: flag para ativar bloco de vídeo. Schema VideoObject só entra em produção quando flag estiver ativa e todos os campos ([INSERIR URL], [INSERIR DATA], thumbnail) estiverem preenchidos. Enquanto inativo, schema de vídeo não vai para o HTML.
- [x] NEXT_PUBLIC_D1_ACTIVE: flag para ativar bloco de auto-aplicação
- [x] FILL_OUT_FORM_URL: constante para URL do formulário
- [x] Âncora id="aplicar" em OXIGENIO-9
- [x] Schemas Service (Fast e Full) e FAQPage declarados

**CTAs:**
- [x] OXIGENIO-2 hero: "Aplicar agora" → âncora #aplicar
- [x] OXIGENIO-9: "Aplicar agora" → [FILL_OUT_FORM_URL]?origem=oxigenio
- [x] OXIGENIO-8: "Conhecer Gabriela e Celso" → /sobre (CTA de navegação)
- [x] Três caminhos pós-diagnóstico declarados em OXIGENIO-9

---

*Copy /inspira/oxigenio v1.1 · PIRA LABS · Maio 2026*
*Base: PiraLabs_Documento_Mestre_v14.md + wireframe-completo-site-pira-labs-v4.md*
*Status: aguardando revisão do Celso*
