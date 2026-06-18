/* HOME-10 · FAQ · fundo Ink #05262e
   details/summary nativo · zero JS · server component
   Perguntas como H3 (GEO) · Schema FAQPage inline
   Sem Ember (Eixo 4: sem fato único a destacar nesta seção;
   marcador gira +→× por movimento, nunca por cor — Eixo 5)
   Lista em coluna de leitura 720px à esquerda (Eixo 7) */

import { faqHome } from "@/lib/faq-home"

const INK = "#05262e"
const SAND = "#e8e0d6"
const WHITE = "#F5F5F2"

const faqs = faqHome

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-label="Perguntas frequentes"
      style={{ backgroundColor: INK }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3rem)",
        }}
      >
        <div style={{ maxWidth: "720px" }}>
          <p
            style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: SAND,
              margin: "0 0 1.25rem 0",
            }}
          >
            PERGUNTAS DE QUEM ESTÁ CHEGANDO AGORA
          </p>

          <h2
            style={{
              fontFamily: "var(--font-atyp-display), serif",
              fontSize: "clamp(30px, 4.4vw, 48px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: WHITE,
              margin: "0 0 clamp(3rem, 6vw, 5rem) 0",
            }}
          >
            Sem rodeios.
          </h2>

          <div>
            {faqs.map((faq, i) => (
              <details
                key={i}
                style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }}
              >
                <summary
                  style={{
                    listStyle: "none",
                    cursor: "pointer",
                    padding: "1.5rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-atyp-display), serif",
                      fontSize: "clamp(18px, 1.8vw, 24px)",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                      color: WHITE,
                      margin: 0,
                    }}
                  >
                    {faq.pergunta}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-marker"
                    style={{
                      flexShrink: 0,
                      fontSize: "1.375rem",
                      fontWeight: 400,
                      lineHeight: 1,
                      marginTop: "2px",
                      color: SAND,
                      display: "inline-block",
                      fontFamily: "var(--font-atyp-text), sans-serif",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    fontFamily: "var(--font-atyp-text), sans-serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: SAND,
                    maxWidth: "680px",
                    padding: "0 0 1.5rem 0",
                    margin: 0,
                  }}
                >
                  {faq.resposta}
                </p>
              </details>
            ))}
            <div style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }} />
          </div>
        </div>
      </div>

      <style>{`
        #faq details > summary::-webkit-details-marker { display: none; }
        #faq details > summary::marker { display: none; }
        #faq details[open] > summary .faq-marker { transform: rotate(45deg); }
        @media (max-width: 767px) {
          #faq h3 { font-size: 17px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          #faq .faq-marker { transition: none !important; }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.pergunta,
              acceptedAnswer: { "@type": "Answer", text: faq.resposta },
            })),
          }),
        }}
      />
    </section>
  )
}
