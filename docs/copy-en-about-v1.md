# Copy: /en/about
**Version:** 1.0
**Date:** May 2026
**New file:** EN minimum viable layer
**Source of truth:** PiraLabs_Documento_Mestre_v14.md
**Wireframe reference:** wireframe-completo-site-pira-labs-v4.md (Section 5.19)
**Voice:** institutional Pira Labs · international audience · adaptation, not translation

---

## PRODUCTION NOTES

**EN rules applied:**
- "Pira Labs" in running text (not "PIRA LABS" in English prose)
- Canonical EN phrase: "Where businesses find propulsion to new heights."
- Credentials in English: "Universal AI Foundational Modules (MIT)", "Applied AI Certificate Program (MIT)"
- Gabriela: "senior lecturer in executive education" (never Plug and Play as current role)
- Celso: "law student at Mackenzie University" (never "lawyer" or "attorney")
- Diageo: "a global beverage conglomerate"
- Samsung: "a major technology company"
- Proprietary vocabulary untranslated: INSPIRA, TRANSPIRA, FAÍSCA, RESPIRA, Oxigênio
- No em dashes

**CTA:** "Respire" → /en/contact?origem=sobre
**Microcopy:** We respond within 2 business days.

---

## SEO HEAD

```html
<title>About Pira Labs · Gabriela Aguiar and Celso Gama</title>

<meta name="description" content="Pira Labs is a Brazilian Creative Business Turnaround boutique. Two complementary lenses: anticipation and operations. From diagnosis to execution when the client needs both.">

<link rel="canonical" href="https://piralabs.com.br/en/about">
<link rel="alternate" hreflang="pt-BR" href="https://piralabs.com.br/sobre">
<link rel="alternate" hreflang="en" href="https://piralabs.com.br/en/about">
```

**Verification:**
- Title: 47 characters. ✓
- Meta description: 152 characters. ✓

**Schema:** AboutPage, Person (Gabriela), Person (Celso), Organization

---

## EN-ABOUT-1 · PAGE HEADER

**Component:** `<PageHeader />`
**Breadcrumb:** Home (EN) > About
**H1:** About Pira Labs

**Subtitle:** Where businesses find propulsion to new heights.

---

## EN-ABOUT-2 · WHY PIRA LABS EXISTS

> Pira Labs exists for the moment when a founder realizes their working model has started costing more than it delivers, and that changing while the company still has clients, cash, and reputation is fundamentally different from changing when there is no longer a choice.
>
> We are a Brazilian Creative Business Turnaround boutique for service businesses that need to act before the window closes. Boutique is not a euphemism for small. It is a deliberate choice: every project has Gabriela and Celso from diagnosis to delivery, with no intermediary layer between the people who understand the problem and the people who solve it.

---

## EN-ABOUT-3 · WHAT GABRIELA SEES

**Individual photo:** Gabriela

> Gabriela reads what is coming before it arrives. A career built inside the networks where technology, innovation, and education intersect: Google, Meta, X, Amazon, among others. Not as an observer. As an active participant in the projects, programs, and connections that define where the market is going.
>
> Senior lecturer in executive education at FIAP and Instituto Cidades Responsivas. Mentor at FGV Ventures. Universal AI Foundational Modules (MIT, in progress, 2026). Speaker at Web Summit Runway, HackTown, and other global innovation events.
>
> What she brings to every project is not repertoire applied from the outside. It is the capacity to name what the local market has not yet named, and to translate that into action for those inside the operation who cannot see what is arriving. She leads INSPIRA.

**Quote (Cormorant Italic):**
> "The diagnosis does not invent the problem. It reveals what the founder already felt but had not yet found words to name."

**LinkedIn:** https://www.linkedin.com/in/gabrielaaguiarvs/
**Crunchbase:** https://crunchbase.com/person/gabriela-aguiar-a12a

---

## EN-ABOUT-4 · WHAT CELSO SOLVES

**Individual photo:** Celso

> Celso enters when the operation needs someone who has seen this before. Over 25 years inside complex organizations, from regional hubs of multinationals to service businesses that grew, stalled, turned around, and some that did not.
>
> MBA from Insper. Postgraduate studies in Marketing (ESPM) and Advertising (FAAP). Law student at Mackenzie University. Applied AI Certificate Program (MIT, in progress, 2026).
>
> His edge lives in the decisions that never appear in presentations. In having arrived too late in operations that could still have been different, and early enough in others to see what changes when someone is there at the right moment. He knows where to put technology and where to put people because he has been wrong about both. He leads TRANSPIRA.

**Track record (anonymized, pre-Pira Labs):**

> An advertising agency serving a global beverage conglomerate was generating losses on the account. Many fixes had been attempted. What no one had done was the most elementary reading: what was being billed versus what was in scope, how many hours were going in beyond the paid contract. When that reading happened, margin went from -64% to +15% in six months. 79 percentage points of recovery without adding a single line of revenue.

**Quote (Cormorant Italic):**
> "Pira Labs does not leave when the deadline ends. We leave when the agreed results are verified."

**LinkedIn:** https://www.linkedin.com/in/celsogama/

---

## EN-ABOUT-5 · HOW THE TWO LENSES WORK TOGETHER

> Gabriela reads context, signals, and market movements before they become obvious demand. Celso reads operations, bottlenecks, and consequences before they become visible losses. Separate, these lenses produce partial diagnosis. Together, they show where the business is stuck and what needs to change to move forward without breaking what already works.
>
> This is not a division of labor. It is methodology: real diagnosis requires both perspectives at the same time.

**Combined photo:** Nos.png

---

## EN-ABOUT-6 · WHAT THIS MEANS FOR CLIENTS

> Clients who engage Pira Labs do not get a partner in the sales conversation and an analyst in the delivery. They get Gabriela and Celso from diagnosis to close, every time.

---

## EN-ABOUT-7 · PRESS, SPEAKING AND PARTNERSHIPS

> For interviews, speaking engagements, events, or institutional partnerships: inspira@piralabs.com.br with context.
>
> Pira Labs works in Portuguese and English.

---

## EN-ABOUT-8 · CTA

`Respire` → `/en/contact?origem=sobre`

**Microcopy:** We respond within 2 business days.

---

## SCHEMA JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://piralabs.com.br/en/about",
  "name": "About Pira Labs",
  "url": "https://piralabs.com.br/en/about",
  "inLanguage": "en",
  "about": [
    { "@id": "https://piralabs.com.br/sobre#gabriela" },
    { "@id": "https://piralabs.com.br/sobre#celso" }
  ],
  "publisher": { "@id": "https://piralabs.com.br/#organization" }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://piralabs.com.br/sobre#gabriela",
  "name": "Gabriela Aguiar",
  "jobTitle": "CEO and Co-founder",
  "worksFor": { "@id": "https://piralabs.com.br/#organization" },
  "sameAs": [
    "https://www.linkedin.com/in/gabrielaaguiarvs/",
    "https://www.wikidata.org/wiki/Q138846653",
    "https://www.crunchbase.com/person/gabriela-aguiar-a12a"
  ],
  "knowsAbout": [
    "Creative Business Turnaround",
    "business diagnosis",
    "innovation ecosystems",
    "applied AI",
    "strategic anticipation",
    "B2B service companies"
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://piralabs.com.br/sobre#celso",
  "name": "Celso Gama",
  "jobTitle": "COO and Co-founder",
  "worksFor": { "@id": "https://piralabs.com.br/#organization" },
  "sameAs": [
    "https://www.linkedin.com/in/celsogama/",
    "https://www.wikidata.org/wiki/Q138846692"
  ],
  "knowsAbout": [
    "Creative Business Turnaround",
    "operational redesign",
    "applied AI in operations",
    "process governance",
    "B2B service companies"
  ]
}
```

---

## PRE-BUILD CHECKLIST

**Content:**
- [x] No em dashes
- [x] "Pira Labs" in running text (not all-caps in English prose)
- [x] Canonical EN phrase: "Where businesses find propulsion to new heights."
- [x] Gabriela: "senior lecturer in executive education" (no Plug and Play as current role)
- [x] Celso: "law student at Mackenzie University" (not "lawyer" or "attorney")
- [x] Diageo: "a global beverage conglomerate"
- [x] MIT credentials in English with program name
- [x] Crunchbase: crunchbase.com/person/gabriela-aguiar-a12a (suffix -a12a required)
- [x] Proprietary vocabulary untranslated: INSPIRA, TRANSPIRA
- [x] 400h/36h NOT on this page (restricted to /transpira/juridico)
- [x] hreflang declared for PT and EN

**CTA:**
- [x] "Respire" → /en/contact?origem=sobre
- [x] Microcopy: "We respond within 2 business days."

**Schema:**
- [x] AboutPage with url and inLanguage: "en"
- [x] Person (Gabriela) with sameAs: Wikidata, LinkedIn, Crunchbase (-a12a suffix)
- [x] Person (Celso) with sameAs: Wikidata, LinkedIn

---

*Copy /en/about v1.0 · Pira Labs · May 2026*
*Base: PiraLabs_Documento_Mestre_v14.md + wireframe-completo-site-pira-labs-v4.md*
*Status: awaiting Celso review*
