/* HOME-10 · Manifesto · fundo White #F5F5F2
   Server component estático · único White pleno da home (respiro entre dois Ink)
   Frase única centralizada em escala DISPLAY (Eixo 3 + Eixo 7 manifesto curto)
   Sem Ember (Eixo 4: escala carrega, é momento de respiro)
   Visual: forma curta · schema slogan: forma completa (cinto e suspensório) */

const WHITE = "#F5F5F2"
const INK = "#05262e"

export function ManifestoSection() {
  return (
    <section
      aria-label="Manifesto"
      style={{ backgroundColor: WHITE }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(7rem, 16vw, 14rem) clamp(1.5rem, 4vw, 3rem)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-atyp-display), serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: INK,
            textAlign: "center",
            textWrap: "balance",
            maxWidth: "18ch",
            margin: 0,
          }}
        >
          O trabalho não acabou. O modelo de trabalho é que ficou velho.
        </p>
      </div>
    </section>
  )
}
