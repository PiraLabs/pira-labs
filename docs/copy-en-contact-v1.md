# Copy: /en/contact
**Version:** 1.0
**Date:** May 2026
**New file:** EN minimum viable layer
**Source of truth:** PiraLabs_Documento_Mestre_v14.md
**Wireframe reference:** wireframe-completo-site-pira-labs-v4.md (Section 5.19)
**Voice:** institutional Pira Labs · minimal · international audience

---

## PRODUCTION NOTES

**Minimal page by design.** Form + instruction + contact. No sales content.

**EN rules:**
- "Pira Labs" in running text
- No em dashes
- "Respire" CTA untranslated (consistent with /en/about)
- hreflang PT/EN declared

**CTA:** "Respire" → /en/contact (form submission)
**Microcopy:** We respond within 2 business days.

---

## SEO HEAD

```html
<title>Contact Pira Labs</title>

<meta name="description" content="Get in touch with Pira Labs. We respond within 2 business days.">

<link rel="canonical" href="https://piralabs.com.br/en/contact">
<link rel="alternate" hreflang="pt-BR" href="https://piralabs.com.br/contato">
<link rel="alternate" hreflang="en" href="https://piralabs.com.br/en/contact">
```

**Verification:**
- Title: 19 characters. ✓
- Meta description: 64 characters. ✓

**Schema:** ContactPage (Organization declarado globalmente no layout, não repetido aqui)

---

## EN-CONTACT-1 · PAGE HEADER

**Component:** `<PageHeader />`
**Breadcrumb:** Home (EN) > Contact
**H1:** Contact Pira Labs

**Subtitle:** The more context you share now, the more useful our first response.

---

## EN-CONTACT-2 · FORM

**Component:** Fillout embed
**Constant:** `FILL_OUT_FORM_URL`
**Parameter:** `?origem=` captured on all CTAs per origin system (wireframe v4 Section 3.4)

**Instruction above the form:**
> Tell us about your company, the challenge you are facing, and what you are looking for. If you already know which product you want, mention it. If you do not know yet, that is fine: the first conversation is exactly for that.

**Confirmation message (configure in Fillout):**
> We received your message. We respond within 2 business days.

---

## EN-CONTACT-3 · DIRECT CONTACT

**Email:** inspira@piralabs.com.br

**LinkedIn:**
- Pira Labs: https://www.linkedin.com/company/piralabs
- Gabriela Aguiar: https://www.linkedin.com/in/gabrielaaguiarvs/
- Celso Gama: https://www.linkedin.com/in/celsogama/

> Pira Labs works in Portuguese and English.

---

## SCHEMA JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://piralabs.com.br/en/contact",
  "name": "Contact Pira Labs",
  "url": "https://piralabs.com.br/en/contact",
  "inLanguage": "en",
  "publisher": { "@id": "https://piralabs.com.br/#organization" }
}
```

---

## PRE-BUILD CHECKLIST

**Content:**
- [x] No em dashes
- [x] "Pira Labs" in running text
- [x] "We respond within 2 business days." present
- [x] hreflang PT/EN declared
- [x] Schema inLanguage: "en"
- [x] FILL_OUT_FORM_URL constant documented
- [x] origem parameter referenced

---

*Copy /en/contact v1.0 · Pira Labs · May 2026*
*Base: PiraLabs_Documento_Mestre_v14.md + wireframe-completo-site-pira-labs-v4.md*
*Status: awaiting Celso review*
