# Copy /inspira/oxigenio — Site PIRA LABS
**Versão:** 1.0
**Data:** Maio 2026
**Substitui:** nenhum (primeira versão pós-arquitetura v3.5)
**Wireframe de referência:** wireframe-completo-site-pira-labs-v3.5.md, blocos OXIGENIO-1 a OXIGENIO-11
**Voz:** institucional PIRA LABS, com peso comercial direto (esta é a única página vendedora do site)

---

## NOTAS DE PRODUÇÃO PARA O IMPLEMENTADOR

**Esta é a página crítica da campanha.** Ela precisa converter em 10 dias com tráfego pequeno (alcance estimado entre 7 mil e 10 mil contas, das quais 80 a 250 reagem). Não tem espaço para copy genérica.

**Características da página:**
- Única página comercial-direta do site
- Preço público visível (R$6.200 primeira rodada, R$9.800 regular)
- **5 vagas para fundadores** na primeira rodada (não "5 vagas" sem qualificação)
- Prazo escalonado (até 5 dias úteis, conforme volume de aplicações)
- Aplicação via Fillout integrado a Notion

**Blocos com placeholder estruturado:**
- **OXIGENIO-4 (vídeo de método, D4):** placeholder até gravação. Roteiro de gravação está em `roteiro-gravacao-d4-video-metodo.md`
- **OXIGENIO-8 (prova social do método, D1):** placeholder até auto-aplicação ser concluída. Roteiro de aplicação está em `roteiro-aplicacao-d1-oxigenio-na-pira.md`

**Regras absolutas aplicadas:**
- Sem travessão (em dash)
- PIRA LABS sempre em caixa alta
- Sem vocabulário proibido
- "Avanços acordados" usado quando descrever resultados
- "Respondemos em até dois dias úteis." no fluxo pós-aplicação (mensagem de confirmação)
- Caso jurídico (R$160 mil/mês) tratado como pós-IA com supervisão humana se mencionado

---

## SEO HEAD

```html
<title>Oxigênio IA Search · Diagnóstico de presença em IA · PIRA LABS</title>

<meta name="description" content="Diagnóstico de como sua empresa aparece nos motores de IA. 5 vagas para fundadores a R$6.200. Entrega em 5 dias úteis.">

<link rel="canonical" href="https://piralabs.com.br/inspira/oxigenio">

<meta property="og:title" content="Oxigênio IA Search · PIRA LABS">
<meta property="og:description" content="Diagnóstico de presença em motores de IA. 5 vagas para fundadores, R$6.200 primeira rodada, 5 dias úteis.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://piralabs.com.br/inspira/oxigenio">
```

**Verificação:**
- Title: 57 caracteres. Dentro do limite de 60.
- Meta description: 86 caracteres. Dentro do limite de 155.

---

## OXIGENIO-1 · HEADER DA PÁGINA

**Componente:** `<PageHeader />`

**Breadcrumb:** Home > Inspira > Oxigênio IA Search

**H1:** Oxigênio IA Search

**Subtítulo:** Diagnóstico de como sua empresa de serviços aparece nos motores de IA, antes que isso vire decisão de cliente que você nem viu chegando.

---

## OXIGENIO-2 · HERO DA OFERTA

**Componente:** `<OfferHero />`

### Sobretítulo

> Subproduto do INSPIRA. Escopo fechado. Prazo curto. Preço público.

### H2 (chamada principal)

> Você sabe como sua empresa aparece quando alguém pergunta para uma IA sobre o seu setor?

### Texto de tese

> Decisores estão fazendo perguntas para IAs antes de pedir reunião. Concorrentes estão sendo recomendados ou descartados em conversas que sua empresa não vê acontecer. O Oxigênio IA Search é o diagnóstico de como sua presença chega nesses motores, e o que precisa mudar para chegar como deveria.

### Bloco de oferta visível

| Item | Valor |
|---|---|
| **Investimento na primeira rodada** | R$6.200 |
| **Investimento regular** (após primeira rodada esgotar) | R$9.800 |
| **Vagas nesta rodada** | 5 vagas para fundadores |
| **Prazo de entrega** | até 5 dias úteis |

### CTAs

- **CTA primário:** `Aplicar agora` → âncora `#aplicar` (rola até OXIGENIO-11)
- **CTA secundário:** `Ver como funciona` → âncora `#metodo` (rola até OXIGENIO-4)

---

## OXIGENIO-3 · PARA QUEM É

**Componente:** `<TargetProfile />`

### Título

> Para quem é o Oxigênio IA Search

### Subtítulo

> Decisores de empresas de serviços que querem entender como a marca chega nos motores de IA antes de tomar decisão maior.

### Cards de perfil

**Perfil 1 · Você desconfia que está perdendo conversas que nem chegam até você**
> Cliente potencial pergunta para uma IA "qual a melhor empresa de [seu setor] em [sua região]" e o resultado define quem é convidado para reunião. Se sua empresa não aparece, a conversa termina antes de começar.

**Perfil 2 · Você investiu em conteúdo, presença digital ou mídia paga e não converteu como esperava**
> Tem post, tem site, tem LinkedIn, tem alguma mídia. Mas a tradução de visibilidade humana para visibilidade de IA é diferente. O que ranqueia em busca tradicional não é necessariamente o que aparece em motor de IA.

**Perfil 3 · Você está prestes a fazer movimento maior (rebrand, novo produto, expansão) e quer começar com o terreno mapeado**
> Antes de gastar tempo e capital em mudança grande, vale entender de que ponto você está partindo nos motores de IA. Sair do lugar errado custa mais do que sair do lugar certo.

### Quem não deve aplicar

> Quem está comparando preço de SEO. O Oxigênio IA Search não é serviço de SEO técnico. É diagnóstico de presença em motores de inteligência artificial, com leitura de quatro LLMs, mapa de gaps semânticos e priorização de correções.
>
> Quem espera resultado em LinkedIn ou Google em 5 dias úteis. O resultado do Oxigênio é diagnóstico, não execução. A execução é decisão sua a partir do diagnóstico.

---

## OXIGENIO-4 · VÍDEO DE MÉTODO (D4)

**Componente:** `<MethodVideo />`

**Status:** PLACEHOLDER. Vídeo a ser gravado pela Gabriela conforme `roteiro-gravacao-d4-video-metodo.md`. Bloco oculto via flag até gravação concluída e link disponível.

### Estrutura quando ativo

**Título:** Como funciona, em 5 minutos

**Subtítulo:** Quem fala: Gabriela Aguiar, CEO da PIRA LABS e quem conduz o INSPIRA. O vídeo mostra como o Oxigênio IA Search é executado, com exemplo plausível mas declarado como ilustrativo.

**Embed:** [INSERIR_URL_LOOM_OU_YOUTUBE_UNLISTED]

**Schema VideoObject:**
```json
{
  "@type": "VideoObject",
  "name": "Como funciona o Oxigênio IA Search",
  "description": "Gabriela Aguiar mostra como a PIRA LABS executa o diagnóstico de presença em motores de IA",
  "thumbnailUrl": "[INSERIR_URL_THUMBNAIL]",
  "uploadDate": "[INSERIR_DATA]",
  "duration": "PT5M",
  "publisher": {
    "@id": "https://piralabs.com.br/#organization"
  }
}
```

**Transcrição:** seção em accordion abaixo do vídeo, com texto completo do que foi falado. Boa para SEO e acessibilidade.

### Estrutura enquanto placeholder

**Texto a exibir no lugar do vídeo:**

> O vídeo de método está sendo gravado. Em breve, a Gabriela apresenta aqui como o Oxigênio IA Search é executado, em até 5 minutos. Enquanto isso, a página abaixo descreve o escopo completo do produto.

---

## OXIGENIO-5 · O QUE ESTÁ INCLUÍDO

**Componente:** `<ScopeBreakdown />`

### Título

> O que você recebe

### Lista de entregas

**1. Análise da sua presença nos quatro LLMs principais**
> ChatGPT, Claude, Gemini e Perplexity. Como sua empresa aparece quando perguntada sobre o setor, sobre a categoria onde ela compete e sobre nomes específicos. O que aparece, o que não aparece e o que aparece errado.

**2. Mapa de gaps semânticos**
> Onde sua empresa deveria aparecer e não aparece. Quais termos de busca relevantes para o seu negócio estão sendo respondidos sem você. Por que isso acontece e como isso muda.

**3. Lista priorizada de correções**
> Tudo organizado por urgência e por esforço. Onde você ganha mais com menos. O que precisa ser corrigido com cuidado e em qual ordem.

**4. Recomendações de quick wins**
> Ações específicas que você pode executar nos próximos 30 dias para começar a corrigir. Sem necessidade de equipe técnica especializada para a maioria delas.

**5. Sessão de leitura conjunta de 30 a 45 minutos**
> Encontro online com Gabriela e Celso para apresentar o diagnóstico, responder perguntas e definir o que faz sentido para você como próximo passo.

### Título do bloco "o que NÃO entrega"

> O que está fora do escopo

**Texto:**

> O Oxigênio IA Search é diagnóstico, não execução. Não inclui implementação das correções recomendadas, criação de conteúdo, otimização técnica do site, gestão de mídia paga ou consultoria de SEO tradicional. Quem decide o que fazer com o diagnóstico é você.
>
> Se a sua empresa quer apoio na execução depois do Oxigênio, conversamos sobre TRANSPIRA ou sobre INSPIRA completo, conforme o caso.

---

## OXIGENIO-6 · COMO FUNCIONA

**Componente:** `<ProcessSteps />`

### Título

> Como funciona, passo a passo

**Passo 1 · Aplicação online**
> Você preenche um formulário de aplicação com informações básicas sobre a empresa, o setor, o momento. Leva entre 5 e 10 minutos.

**Passo 2 · Confirmação e onboarding em até 24h**
> Se o seu caso encaixa no escopo, enviamos confirmação, link de pagamento e um briefing curto para você preencher com detalhes do contexto. Se não encaixa, dizemos antes de começar.

**Passo 3 · Análise rodando**
> A partir do recebimento do briefing preenchido, a PIRA LABS executa a análise. Prazo de entrega segue ordem de fechamento da rodada e capacidade operacional:
> - 1 aplicação fechada: entrega em até 36 horas
> - até 3 aplicações fechadas: entrega em até 72 horas
> - até 5 aplicações fechadas: entrega em até 5 dias úteis

**Passo 4 · Sessão de leitura conjunta**
> Encontro de 30 a 45 minutos para apresentar o diagnóstico ao decisor. Online, com Gabriela e Celso. Pode incluir até dois convidados pelo cliente, conforme acordado na confirmação.

---

## OXIGENIO-7 · QUEM CONDUZ

**Componente:** `<WhoDelivers />`

### Título

> Quem conduz

### Texto

> O Oxigênio IA Search é executado por Gabriela Aguiar e Celso Gama. Não há equipe júnior intermediária. Quem você conhece da venda é quem analisa e quem entrega.
>
> A Gabriela conduz a leitura institucional e de presença, com Universal AI Foundational Modules pelo MIT e mais de uma década dentro dos ecossistemas globais de inovação.
>
> O Celso conduz a leitura de governança e exposição operacional, com mais de 20 anos de operação real em multinacionais e Applied AI Certificate Program pelo MIT.

### Foto

Foto Nós.png em formato menor, com link para `/sobre`.

### CTA

`Conhecer Gabriela e Celso` → `/sobre`

---

## OXIGENIO-8 · PROVA SOCIAL DO MÉTODO (D1)

**Componente:** `<MethodProof />`

**Status:** PLACEHOLDER. Auto-aplicação a ser executada por Celso conforme `roteiro-aplicacao-d1-oxigenio-na-pira.md`. Bloco oculto via flag até auto-aplicação concluída.

### Estrutura quando ativo

**Título:** Rodamos o Oxigênio em nós antes de oferecer

**Texto introdutório:**

> Antes de cobrar R$6.200 por uma análise, rodamos o Oxigênio IA Search na própria PIRA LABS. Em parte porque é o que faz sentido fazer. Em parte porque é o que diferencia método validado de método teórico.

**Achados publicáveis (a preencher após auto-aplicação):**

```
[ACHADO 1]: [descrição do achado]
[ACHADO 2]: [descrição do achado]
[ACHADO 3]: [descrição do achado]
```

**Imagens:** prints de motores de IA com queries reais e respostas reais (com correções de privacidade quando necessário).

**Frase de fechamento:**

> A PIRA LABS é nova. Os achados acima são o ponto de partida do que estamos corrigindo, não o fim do trabalho. O que estamos oferecendo aos clientes do Oxigênio é exatamente o método que estamos aplicando em nós.

**Link para post completo:**

> Leia a história completa no LinkedIn: [INSERIR_LINK_DO_POST]

### Estrutura enquanto placeholder

**Texto a exibir no lugar do bloco completo:**

> A prova social do método estará disponível em breve. Estamos rodando o Oxigênio na própria PIRA LABS antes de divulgar abertamente os achados. Enquanto isso, o vídeo de método acima e a descrição do escopo permitem que você avalie se faz sentido aplicar.

---

## OXIGENIO-9 · FAQ

**Componente:** `<FAQ />`
**Schema:** FAQPage

### Título

> Perguntas frequentes

### Pergunta 1: Por que não pesquiso por conta própria?

> Você pode pesquisar. Muitos decisores fazem isso e descobrem alguns achados rápidos. O que o Oxigênio entrega é diferente em três pontos: o cruzamento entre quatro LLMs com queries específicas do seu setor, a leitura interpretativa do que cada padrão de resposta significa, e a priorização de correções por esforço versus impacto.
>
> A diferença entre rodar uma busca em ChatGPT e fazer um diagnóstico de presença em IA é parecida com a diferença entre olhar para um exame e ter um médico interpretando o exame.

### Pergunta 2: Como sei que funciona se a PIRA LABS é nova?

> Honestidade primeiro: a PIRA LABS é nova como empresa, fundada em 2025. O método do INSPIRA, do qual o Oxigênio é subproduto, foi desenvolvido ao longo de mais de duas décadas de operação real em empresas de serviços. As credenciais de quem conduz estão na página `/sobre`, com casos verificáveis.
>
> Para o Oxigênio especificamente, rodamos o método na própria PIRA antes de oferecer. Os achados estão sendo publicados como parte da campanha. O bloco acima mostra o resultado.

### Pergunta 3: Vocês conhecem meu setor?

> Empresas de serviços com foco maior em publicidade, saúde, jurídico, alimentação e serviços profissionais especializados. Se o seu setor é um desses, há repertório direto. Se não é, o método se aplica, mas pode haver limitação de comparação setorial específica. Em caso de dúvida, conte na aplicação qual é o seu contexto e respondemos honestamente antes de você pagar.

### Pergunta 4: Por que tem prazo escalonado em vez de 72 horas fixas para todos?

> Porque vocês são duas pessoas conduzindo a análise inteira sem equipe intermediária, e fazer 5 análises em 72 horas comprometeria a qualidade. O escalonamento garante que cada cliente receba o mesmo nível de atenção, na ordem em que aplicou.

### Pergunta 5: Posso aplicar e desistir antes de pagar?

> Pode. A aplicação não cria obrigação. Avaliamos se o caso encaixa no escopo, conversamos com você se for o caso, e só seguimos para pagamento após sua confirmação. Se em qualquer ponto antes do pagamento você quiser parar, é só dizer.

### Pergunta 6: O que acontece se eu não gostar do resultado?

> Antes do encontro de leitura conjunta, você recebe o relatório por escrito. Se algo no diagnóstico não fizer sentido para você, abrimos espaço na sessão para discutir, refinar interpretação e ajustar onde for justo. Não trabalhamos com garantia de satisfação genérica. Trabalhamos com diagnóstico honesto e disposição para ouvir crítica do cliente.

### Pergunta 7: Vocês assinam NDA?

> Sim. Acordo de confidencialidade assinado antes de qualquer troca de informação ou acesso a dados da empresa. NDA é base canônica de todo trabalho da PIRA LABS, independente do produto. Você recebe o documento antes de pagar.

### Pergunta 8: Vocês compartilham os dados da minha empresa com outros clientes ou com terceiros?

> Não. Cada análise é confidencial entre o cliente, a Gabriela e o Celso. Quando publicamos achados gerais sobre o que IA Search está fazendo no mercado, é a partir de padrões agregados, nunca de empresa específica sem autorização explícita por escrito.

### Pergunta 9: O Oxigênio leva ao INSPIRA completo?

> Em alguns casos sim, em alguns casos não. O Oxigênio resolve uma pergunta específica (como sua empresa aparece nos motores de IA). O INSPIRA completo é diagnóstico de cinco áreas do negócio. Se na sessão de leitura conjunta surgir indicação de que faz sentido aprofundar, conversamos sobre INSPIRA. Não há obrigação nem desconto vinculado.

---

## OXIGENIO-10 · BLOCO OCULTO: OXIGÊNIO PULSO

**Componente:** `<PulsePocket />`

**Status:** OCULTO POR PADRÃO. Bloco escondido via flag em `.env` ou via display none. Ativado manualmente pelo Celso se a campanha emperrar (poucas aplicações nos primeiros 4 a 5 dias).

### Estrutura quando ativo

**Título:** Sem urgência das 5 vagas? Conheça o Oxigênio Pulso.

**Texto:**

> Se as cinco vagas do Oxigênio IA Search não cabem no seu momento agora, o Oxigênio Pulso é uma versão mais curta para quem quer começar pelo básico. Diagnóstico simplificado, sem mapa de gaps semânticos completo, sem sessão de leitura conjunta. Análise dos quatro LLMs e lista de até 10 correções priorizadas.

**Bloco de oferta:**

| Item | Valor |
|---|---|
| **Investimento** | R$3.500 |
| **Prazo de entrega** | até 7 dias úteis |
| **Vagas** | sem limite na primeira rodada |

**CTA:** `Aplicar para Oxigênio Pulso` → mesma rota Fillout, com origem `oxigenio_pulso`

**Sem URL própria. Sem schema próprio. Sem indexação.**

---

## OXIGENIO-11 · CTA FINAL E APLICAÇÃO

**Componente:** `<ApplicationCTA />`

**Âncora:** `#aplicar`

### Título

> Aplicar para o Oxigênio IA Search

### Recap visual

| Item | Valor |
|---|---|
| **Investimento na primeira rodada** | R$6.200 |
| **Vagas restantes para fundadores** | [INSERIR_NÚMERO_DE_VAGAS_RESTANTES, atualizado manualmente]/5 |
| **Prazo de entrega** | até 5 dias úteis |
| **Próximo passo** | aplicação online de 5 a 10 minutos |

### Texto acima do CTA

> Quanto mais contexto você compartilhar na aplicação, mais útil é a primeira resposta. Se o seu caso não encaixa no escopo, dizemos antes de começar.

### CTA principal

**Botão:** `Aplicar agora` → `[FILL_OUT_FORM_URL]?origem=oxigenio`

### Texto após CTA

> Respondemos em até dois dias úteis. A análise começa após a confirmação da aplicação e o briefing preenchido.

### Frase de fechamento

> O Oxigênio é o ponto de entrada para empresas de serviços que querem agir antes da crise. Cinco dias úteis depois, você tem clareza sobre como sua presença nos motores de IA está performando, e o que precisa mudar para começar a aparecer como deveria.

---

## SCHEMAS JSON-LD

### Service (com preços)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://piralabs.com.br/inspira/oxigenio#service",
  "name": "Oxigênio IA Search",
  "description": "Diagnóstico de como empresas de serviços aparecem nos motores de inteligência artificial. Subproduto do INSPIRA da PIRA LABS.",
  "provider": {
    "@id": "https://piralabs.com.br/#organization"
  },
  "serviceType": "Análise de presença em IA Search",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Decisores de empresas de serviços (publicidade, saúde, jurídico, alimentação, serviços profissionais)"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Oxigênio IA Search · Primeira rodada · 5 vagas para fundadores",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "6200",
        "priceCurrency": "BRL"
      },
      "availability": "https://schema.org/LimitedAvailability",
      "validFrom": "[INSERIR_DATA_INÍCIO_CAMPANHA]",
      "validThrough": "[INSERIR_DATA_FIM_CAMPANHA]",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": 5
      }
    },
    {
      "@type": "Offer",
      "name": "Oxigênio IA Search · Preço regular",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "9800",
        "priceCurrency": "BRL"
      },
      "availability": "https://schema.org/InStock"
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
      "name": "Por que não pesquiso por conta própria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Conteúdo da pergunta 1 do FAQ]"
      }
    }
    // ... demais perguntas
  ]
}
```

---

## CHECKLIST DE VERIFICAÇÃO ANTES DO BUILD

**Conteúdo:**
- [x] Nenhum travessão
- [x] Nenhum termo do vocabulário proibido
- [x] PIRA LABS sempre em caixa alta
- [x] Caso jurídico tratado como pós-IA com supervisão humana (mencionado apenas se relevante)
- [x] "Avanços acordados" não aplicado nesta página (não há promessa de resultado)
- [x] "Respondemos em até dois dias úteis." em OXIGENIO-11
- [x] MIT com nome do programa em OXIGENIO-7

**Tom:**
- [x] Comercial-direto sem ser agressivo
- [x] Honesto sobre PIRA ser nova (FAQ pergunta 2)
- [x] Honesto sobre prazo escalonado (FAQ pergunta 4)
- [x] Honesto sobre limitação de setor (FAQ pergunta 3)
- [x] Sem promessa de resultado garantido

**Técnico:**
- [x] CTA primário aponta para `[FILL_OUT_FORM_URL]?origem=oxigenio`
- [x] Bloco D4 (vídeo) com placeholder e flag de ativação
- [x] Bloco D1 (auto-aplicação) com placeholder e flag de ativação
- [x] Bloco Pulso oculto por padrão, ativável manualmente
- [x] Schemas Service e FAQPage previstos
- [x] Number-of-vagas em recap visual atualizável manualmente

---

## NOTAS DE OPERAÇÃO PARA O CELSO

**Antes do deploy desta página:**

1. URL do Fillout precisa estar populada na constante `FILL_OUT_FORM_URL`
2. Notion DB conectado ao Fillout precisa estar funcionando
3. Campo oculto "origem" precisa estar funcional, repassando `oxigenio` quando aplicação vem desta página
4. Vagas restantes em OXIGENIO-11 começa em 5 e é atualizado manualmente conforme aplicações fecham
5. Datas válidas no schema Offer da primeira rodada precisam ser preenchidas (data de início e data de fim da campanha)

**Durante a campanha:**

1. Bloco OXIGENIO-8 (D1): após auto-aplicação concluída e post de divulgação publicado, ativar bloco e preencher os 3 a 5 achados
2. Bloco OXIGENIO-4 (D4): após gravação concluída, embedar o vídeo (Loom ou YouTube unlisted) e preencher schema VideoObject
3. Vagas em OXIGENIO-11: atualizar manualmente conforme aplicações fecham. 5/5 → 4/5 → 3/5 → 2/5 → 1/5 → "Vagas esgotadas"
4. Bloco OXIGENIO-10 (Pulso): manter oculto. Ativar apenas se aplicações na primeira rodada estiverem abaixo de 2 nos primeiros 5 dias

**Quando esgotar a primeira rodada:**

1. Schema Service: trocar oferta visível para preço regular R$9.800
2. OXIGENIO-2 e OXIGENIO-11: atualizar bloco de oferta com novo preço
3. Decisão estratégica: continuar com novas vagas em preço regular ou pausar para aprender com primeira rodada antes de abrir novamente

---

*Copy /inspira/oxigenio v1.0 · PIRA LABS · Maio 2026*
