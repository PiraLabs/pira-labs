/* HOME-11 · CTA Final · fundo Ink #05262e
   Server component estático · frase de fecho White (sem Ember span, proibido)
   Botão RESPIRE = BTN-1 Ember sólido, hover por movimento (Eixo 6)
   Único Ember da seção = o botão (Schindler) */

const INK = "#05262e"
const WHITE = "#F5F5F2"
const SAND = "#e8e0d6"
const EMBER = "#eb5c2e"

export function FinalCTASection() {
  return (
    <section
      id="cta-final"
      aria-label="Contato"
      style={{ backgroundColor: INK }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(6rem, 14vw, 11rem) clamp(1.5rem, 4vw, 3rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Frase de fecho */}
        <p
          style={{
            fontFamily: "var(--font-atyp-display), serif",
            fontSize: "clamp(38px, 6.5vw, 72px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: WHITE,
            maxWidth: "16ch",
            textWrap: "balance",
            margin: "0 0 clamp(2.5rem, 5vw, 3.5rem) 0",
          }}
        >
          O negócio ainda pode escolher. Essa é a janela.
        </p>

        {/* CTA RESPIRE — BTN-1 */}
        <a
          href="/contato?origem=home"
          className="cta-respire"
          style={{
            fontFamily: "var(--font-atyp-text), sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: WHITE,
            textDecoration: "none",
            backgroundColor: EMBER,
            padding: "1.125rem 3rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
          }}
        >
          Respire
          <span className="cta-arrow" aria-hidden="true" style={{ display: "inline-block" }}>→</span>
        </a>

        {/* Microcopy */}
        <p
          style={{
            fontFamily: "var(--font-atyp-text), sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.55,
            color: SAND,
            maxWidth: "420px",
            margin: "0 0 clamp(3rem, 6vw, 4rem) 0",
          }}
        >
          Conte onde a operação começou a pesar. Respondemos em até dois dias úteis.
        </p>

        {/* Fechamento */}
        <p
          style={{
            fontFamily: "var(--font-atyp-display), serif",
            fontSize: "20px",
            fontWeight: 400,
            letterSpacing: "0.05em",
            color: SAND,
            margin: 0,
          }}
        >
          Inspira. Transpira. Respira.
        </p>
      </div>

      <style>{`
        .cta-respire { transition: transform 0.2s ease; }
        .cta-respire:hover { transform: translateY(-2px); }
        .cta-arrow { transition: transform 0.25s ease; }
        .cta-respire:hover .cta-arrow { transform: translateX(4px); }
        @media (prefers-reduced-motion: reduce) {
          .cta-respire, .cta-arrow { transition: none !important; }
        }
      `}</style>
    </section>
  )
}
