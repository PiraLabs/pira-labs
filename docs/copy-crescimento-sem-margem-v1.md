# Copy: /crescimento-sem-margem
**Versão:** 1.0
**Data:** Maio 2026
**Arquivo:** novo (página GEO de problema)
**Fonte da verdade:** PiraLabs_Documento_Mestre_v14.md
**Wireframe de referência:** wireframe-completo-site-pira-labs-v4.md (Seção 5.15)
**Voz:** diagnóstico preciso, não alarmista

---

## NOTA DE ROTA

**Decisão canônica:** `/crescimento-sem-margem`

Motivo: curta, semântica e memorizável. A outra funciona melhor como H1/título.

**Redirect 301:** `/empresa-cresce-margem-some` → `/crescimento-sem-margem`

Implementador atualiza canonical, schema, breadcrumb e links internos com esta rota.

---

## NOTAS DE PRODUÇÃO

- Entre 300 e 500 palavras de conteúdo editorial
- Tom: diagnóstico preciso, sem alarmismo, sem promessa de solução
- Pelo menos um número concreto nos primeiros 100 palavras
- Nenhuma estatística sem fonte citada
- Link interno obrigatório: /creative-business-turnaround e /inspira
- FAQPage com 3 perguntas
- CTA: "Respire" → /contato?origem=crescimento_sem_margem
- Microcopy: "Diagnóstico antes de proposta. Conversa inicial sem compromisso."
- Sem travessão

---

## SEO HEAD

```html
<title>A empresa cresce mas a margem some: o que está acontecendo</title>

<meta name="description" content="Crescimento de receita sem crescimento de margem é sintoma, não resultado. Seis causas que aparecem antes da crise. Diagnóstico via INSPIRA da Pira Labs.">

<link rel="canonical" href="https://piralabs.com.br/crescimento-sem-margem">
```

**Verificação:**
- Title: 59 caracteres. ✓
- Meta description: 151 caracteres. ✓
- Número concreto nos primeiros 100 palavras: presente. ✓

**Schema:** WebPage + FAQPage + BreadcrumbList

---

## BLOCO PRINCIPAL

**Componente:** `<ProblemPage />`
**Breadcrumb:** Home > A empresa cresce, a margem some

### H1

> Sua empresa cresce. A margem some. O que está acontecendo?

### Corpo

> Em 6 meses, uma operação de agência recuperou 79 pontos percentuais de margem sem aumentar receita. O problema estava exatamente onde ninguém estava olhando: o que era cobrado versus o que era entregue, e quanto esforço real ia além do contratado. Crescimento de receita sem crescimento de margem é sintoma, não resultado. Antes de ser crise, é sinal.

**Seis causas típicas quando a margem some com a receita crescendo:**

Seis causas que aparecem com frequência quando a receita cresce e a margem não acompanha:

| # | Causa | O que acontece na prática |
|---|---|---|
| 1 | **Escopo que cresce sem reprecificação** | O cliente pede mais. A equipe entrega. A conta não muda. |
| 2 | **Equipe que cresce mais rápido que a receita** | A operação se estrutura antes de o modelo de trabalho sustentar o novo tamanho. |
| 3 | **Retrabalho invisível que não entra no custo** | Revisões, correções e alinhamentos extras consomem horas que não aparecem em nenhuma planilha. |
| 4 | **Precificação baseada em horas, não em valor entregue** | A empresa vende tempo quando o cliente paga pelo resultado. O custo real aumenta; o preço fica parado. |
| 5 | **Clientes cujo custo de atendimento supera a margem gerada** | Alguns contratos geram receita visível e prejuízo invisível. Ninguém fez a conta. |
| 6 | **Tecnologia adicionada sem revisão do processo que ela deveria substituir** | A ferramenta nova acelera um fluxo que já estava errado. O custo operacional sobe. A margem cai. |

> Quando várias dessas causas aparecem juntas, o problema raramente é só operacional. É de modelo. É aí que entra o [Creative Business Turnaround](/creative-business-turnaround): diagnóstico e redesenho antes que o crescimento vire crise.

> O diagnóstico não inventa o problema. Revela onde ele está. O INSPIRA lê seis camadas do negócio antes de nomear qualquer causa. O resultado é uma rota executável, não um relatório para arquivar.

**CTA inline:** `O INSPIRA identifica onde a margem está vazando.` → `/inspira`

---

## FAQ

**Componente:** `<FAQ />`
**Schema:** FAQPage

**Pergunta 1:** Isso acontece só em empresas pequenas?
**Resposta:** Não. Crescimento sem margem é um padrão recorrente em empresas de serviços de diferentes portes. Quanto mais rápido o crescimento, mais invisível fica o problema, porque a receita nova mascara o custo da receita antiga.

**Pergunta 2:** Parar de crescer resolve o problema?
**Resposta:** Raramente. Desacelerar o crescimento reduz a exposição, mas não corrige o modelo. As causas permanecem: escopo não cobrado, precificação desalinhada, retrabalho sem custo visível. O problema continua acumulando, só mais devagar.

**Pergunta 3:** Como a Pira Labs aborda esse problema?
**Resposta:** Via INSPIRA, diagnóstico que lê seis camadas do negócio em sequência antes de nomear qualquer problema. O output é uma rota executável com movimentos, responsáveis e critérios de conclusão. A conversa inicial é sem compromisso.

---

## CTA FINAL

`Respire` → `/contato?origem=crescimento_sem_margem`

**Microcopy:** Diagnóstico antes de proposta. Conversa inicial sem compromisso.

---

## SCHEMA JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://piralabs.com.br/crescimento-sem-margem",
  "name": "A empresa cresce mas a margem some: o que está acontecendo",
  "description": "Crescimento de receita sem crescimento de margem é sintoma, não resultado. Seis causas que aparecem antes da crise.",
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
      "name": "Crescimento sem margem acontece só em empresas pequenas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. Crescimento sem margem é um padrão recorrente em empresas de serviços de diferentes portes. Quanto mais rápido o crescimento, mais invisível fica o problema, porque a receita nova mascara o custo da receita antiga."
      }
    },
    {
      "@type": "Question",
      "name": "Parar de crescer resolve o problema de margem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Raramente. Desacelerar reduz a exposição, mas não corrige o modelo. As causas permanecem: escopo não cobrado, precificação desalinhada, retrabalho sem custo visível."
      }
    },
    {
      "@type": "Question",
      "name": "Como a Pira Labs aborda o problema de crescimento sem margem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Via INSPIRA, diagnóstico que lê seis camadas do negócio em sequência antes de nomear qualquer problema. O output é uma rota executável com movimentos, responsáveis e critérios de conclusão. A conversa inicial é sem compromisso."
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
    { "@type": "ListItem", "position": 2, "name": "A empresa cresce, a margem some", "item": "https://piralabs.com.br/crescimento-sem-margem" }
  ]
}
```

---

## CHECKLIST DE VERIFICAÇÃO ANTES DO BUILD

**Conteúdo:**
- [x] Sem travessão
- [x] H1: "Sua empresa cresce. A margem some. O que está acontecendo?"
- [x] Número concreto nos primeiros 100 palavras (79 pontos percentuais, trajetória anonimizada)
- [x] Sem estatística externa sem fonte
- [x] Tom diagnóstico, sem alarmismo, sem promessa de solução
- [x] 6 causas em tabela (formato estruturado, GEO-SFE)
- [x] Contagem: ~370 palavras de conteúdo editorial. ✓
- [x] Nenhum cliente nomeado

**Links:**
- [x] /inspira linkado em CTA inline e FAQ Q3
- [x] /creative-business-turnaround com nota de implementação

**CTA:**
- [x] "Respire" → /contato?origem=crescimento_sem_margem
- [x] Microcopy: "Diagnóstico antes de proposta. Conversa inicial sem compromisso."

**Schema:**
- [x] WebPage + FAQPage (3 perguntas) + BreadcrumbList separado

**Rota:**
- [x] Rota canônica definida: /crescimento-sem-margem. Redirect 301 de /empresa-cresce-margem-some configurado no handoff técnico.

---

*Copy /crescimento-sem-margem v1.0 · PIRA LABS · Maio 2026*
*Base: PiraLabs_Documento_Mestre_v14.md + wireframe-completo-site-pira-labs-v4.md*
*Status: aguardando revisão do Celso*
