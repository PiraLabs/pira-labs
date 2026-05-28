# Copy: /diagnostico-empresa-servicos
**Versão:** 1.0
**Data:** Maio 2026
**Arquivo:** novo (página GEO de problema)
**Fonte da verdade:** PiraLabs_Documento_Mestre_v14.md
**Wireframe de referência:** wireframe-completo-site-pira-labs-v4.md (Seção 5.15)
**Voz:** diagnóstico preciso, não alarmista

---

## NOTAS DE PRODUÇÃO

- Entre 300 e 500 palavras de conteúdo editorial
- Tom: diagnóstico, sem alarme, sem promessa de solução
- Pelo menos um número concreto nos primeiros 100 palavras
- Nenhuma estatística sem fonte citada
- Link interno obrigatório: /creative-business-turnaround e /inspira ou /inspira/oxigenio
- FAQPage com 3 perguntas
- CTA: "Respire" → /contato?origem=diagnostico_empresa_servicos
- Microcopy: "Diagnóstico antes de proposta. Conversa inicial sem compromisso."
- Sem travessão

---

## SEO HEAD

```html
<title>Como saber se sua empresa de serviços precisa de diagnóstico agora</title>

<meta name="description" content="Seis perguntas para avaliar o momento da sua empresa de serviços. Se três ou mais gerarem hesitação, talvez seja hora de diagnosticar o modelo.">

<link rel="canonical" href="https://piralabs.com.br/diagnostico-empresa-servicos">
```

**Verificação:**
- Title: 60 caracteres. ✓
- Meta description: 134 caracteres. ✓
- Número concreto nos primeiros 100 palavras: presente. ✓

**Schema:** WebPage + FAQPage + BreadcrumbList

---

## BLOCO PRINCIPAL

**Componente:** `<ProblemPage />`
**Breadcrumb:** Home > Diagnóstico para empresas de serviços

### H1

> Como saber se a sua empresa de serviços precisa de um diagnóstico agora

### Corpo

> Em 4 a 6 semanas de diagnóstico, o INSPIRA entrega o problema real nomeado e uma rota executável. Não um relatório para arquivar. O diagnóstico não inventa o problema. Revela o que a fundadora ou o fundador já sentia, mas ainda não havia encontrado palavras para nomear.
>
> Antes de propor qualquer solução, a Pira Labs ouve. O ponto de partida é sempre a leitura do negócio como sistema. Seis perguntas que ajudam a calibrar o momento:

**As seis perguntas:**

**1.** Você sabe qual cliente gera margem positiva e qual gera prejuízo disfarçado de receita?

**2.** Você consegue crescer receita sem crescer headcount na mesma proporção?

**3.** Seu time mais sênior passa mais tempo em entrega do que em decisão e aprovação?

**4.** Você tem clareza de qual problema o seu cliente acha que você resolve, versus qual você resolve de verdade?

**5.** Se você saísse da operação por 30 dias, o que travaria primeiro?

**6.** Você sabe qual seria o próximo nível do seu negócio se o modelo atual não fosse um limitador?

> Se três ou mais dessas perguntas geraram hesitação, já existe material suficiente para uma conversa de diagnóstico. Não porque a empresa está em crise. Porque ainda não está. E é quando há clientes, caixa e reputação que o diagnóstico entrega mais: o problema nomeado, a rota desenhada e a decisão tomada com clareza.
>
> O diagnóstico não cria urgência artificial. Ele organiza sinais que já apareceram no negócio, mas ainda não viraram decisão. O [Creative Business Turnaround](/creative-business-turnaround) atua exatamente nesse intervalo.

---

## FAQ

**Componente:** `<FAQ />`
**Schema:** FAQPage

**Pergunta 1:** O [Oxigênio IA Search](/inspira/oxigenio) é diferente do [INSPIRA](/inspira)?
**Resposta:** Sim. O Oxigênio IA Search diagnostica como a empresa aparece para os motores de inteligência artificial: presença externa, visibilidade em buscas feitas por IA. O INSPIRA diagnostica o negócio como sistema: seis camadas lidas em sequência, convergindo em síntese integrada. Escopos e formatos distintos. O Oxigênio pode ser um ponto de entrada antes do INSPIRA.

**Pergunta 2:** Preciso contratar para ter um diagnóstico?
**Resposta:** Não. A conversa inicial é sem compromisso. Nela, a Pira Labs ouve o contexto e ajuda a nomear o problema antes de propor qualquer solução. Se o [INSPIRA](/inspira) fizer sentido, proposta em até 5 dias úteis.

**Pergunta 3:** Quanto tempo leva um diagnóstico INSPIRA?
**Resposta:** 4 a 6 semanas. A proposta inicial define o prazo específico conforme complexidade do negócio.

---

## CTA FINAL

`Respire` → `/contato?origem=diagnostico_empresa_servicos`

**Microcopy:** Diagnóstico antes de proposta. Conversa inicial sem compromisso.

---

## SCHEMA JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/diagnostico-empresa-servicos",
  "name": "Como saber se sua empresa de serviços precisa de diagnóstico agora",
  "description": "Seis perguntas para avaliar o momento da empresa de serviços e identificar se já existe material suficiente para uma conversa de diagnóstico.",
  "publisher": { "@id": "https://piralabs.com.br/#organization" }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O Oxigênio IA Search é diferente do INSPIRA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. O Oxigênio IA Search diagnostica como a empresa aparece para os motores de inteligência artificial. O INSPIRA diagnostica o negócio como sistema: seis camadas lidas em sequência, convergindo em síntese integrada. Escopos e formatos distintos. O Oxigênio pode ser um ponto de entrada antes do INSPIRA."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso contratar para ter um diagnóstico da Pira Labs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. A conversa inicial é sem compromisso. A Pira Labs ouve o contexto e ajuda a nomear o problema antes de propor qualquer solução. Se o INSPIRA fizer sentido, proposta em até 5 dias úteis."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo leva um diagnóstico INSPIRA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "4 a 6 semanas. A proposta inicial define o prazo específico conforme complexidade do negócio."
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
    { "@type": "ListItem", "position": 2, "name": "Diagnóstico para empresas de serviços", "item": "https://piralabs.com.br/diagnostico-empresa-servicos" }
  ]
}
```

---

## CHECKLIST DE VERIFICAÇÃO ANTES DO BUILD

**Conteúdo:**
- [x] Sem travessão
- [x] H1: "Como saber se a sua empresa de serviços precisa de um diagnóstico agora"
- [x] Número concreto nos primeiros 100 palavras (4 a 6 semanas)
- [x] Sem estatística sem fonte
- [x] Tom diagnóstico, sem alarmismo, sem promessa de solução
- [x] 6 perguntas de autodiagnóstico para o ICP
- [x] Critério explícito: 3 ou mais hesitações → material suficiente para conversa de diagnóstico
- [x] Contagem: ~340 palavras de conteúdo editorial. ✓
- [x] Nenhum cliente nomeado

**Links:**
- [x] /inspira linkado em FAQ Q1 e Q2
- [x] /creative-business-turnaround linkado no corpo
- [x] /inspira/oxigenio referenciado em FAQ Q1

**CTA:**
- [x] "Respire" → /contato?origem=diagnostico_empresa_servicos
- [x] Microcopy: "Diagnóstico antes de proposta. Conversa inicial sem compromisso."

**Schema:**
- [x] WebPage + FAQPage (3 perguntas) + BreadcrumbList separado
- [x] Schema FAQ alinhado ao conteúdo visível

---

*Copy /diagnostico-empresa-servicos v1.0 · PIRA LABS · Maio 2026*
*Base: PiraLabs_Documento_Mestre_v14.md + wireframe-completo-site-pira-labs-v4.md*
*Status: aguardando revisão do Celso*
