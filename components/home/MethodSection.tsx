import Link from "next/link"

/* HOME-5 · Método · fundo Ink #05262e · id="metodo"
   Geometria canônica Manual v3 — coordenadas fixas, não alterar.
   RESPIRA: AtypDisplay Light 300 obrigatório. Bola +45° Ember = único Ember desta seção. */

const WHITE = "#F5F5F2"
const INK   = "#05262e"

function InspiraSVG() {
  return (
    <svg viewBox="0 0 120 130" width={216} style={{ height: "auto", display: "block", marginBottom: "16px" }}>
      <defs>
        <clipPath id="clip-inspira-method">
          <circle cx="60" cy="80" r="18" />
        </clipPath>
      </defs>
      <line x1="46" y1="67" x2="33" y2="47" stroke="#e8e0d6" strokeWidth="1" strokeLinecap="round" />
      <line x1="74" y1="67" x2="87" y2="47" stroke="#e8e0d6" strokeWidth="1" strokeLinecap="round" />
      <circle cx="25" cy="38" r="11" fill="none" stroke="#F5F5F2" strokeWidth="1.5" />
      <circle cx="95" cy="38" r="11" fill="#F5F5F2" />
      <circle cx="60" cy="80" r="18" fill="#F5F5F2" />
      <rect x="42" y="77" width="36" height="6" fill="#004757" clipPath="url(#clip-inspira-method)" />
    </svg>
  )
}

function TranspiraSVG() {
  return (
    <svg viewBox="0 0 120 130" width={216} style={{ height: "auto", display: "block", marginBottom: "16px" }}>
      <defs>
        <clipPath id="clip-transpira-method">
          <circle cx="60" cy="85" r="18" />
        </clipPath>
      </defs>
      <line x1="45" y1="72" x2="28" y2="53" stroke="#e8e0d6" strokeWidth="1" strokeLinecap="round" />
      <line x1="60" y1="67" x2="60" y2="33" stroke="#e8e0d6" strokeWidth="1" strokeLinecap="round" />
      <line x1="75" y1="72" x2="92" y2="53" stroke="#e8e0d6" strokeWidth="1" strokeLinecap="round" />
      <circle cx="20" cy="45" r="11" fill="#F5F5F2" />
      <circle cx="60" cy="22" r="11" fill="none" stroke="#F5F5F2" strokeWidth="1.5" />
      <circle cx="100" cy="45" r="11" fill="#F5F5F2" />
      <circle cx="60" cy="85" r="18" fill="#F5F5F2" />
      <rect x="42" y="82" width="36" height="6" fill="#004757" clipPath="url(#clip-transpira-method)" />
    </svg>
  )
}

function RespiraSVG() {
  return (
    <svg viewBox="0 0 120 130" width={216} style={{ height: "auto", display: "block", marginBottom: "16px" }}>
      <line x1="45" y1="72" x2="28" y2="53" stroke="#e8e0d6" strokeWidth="1" strokeLinecap="round" />
      <line x1="60" y1="67" x2="60" y2="33" stroke="#e8e0d6" strokeWidth="1" strokeLinecap="round" />
      <line x1="75" y1="72" x2="92" y2="53" stroke="#e8e0d6" strokeWidth="1" strokeLinecap="round" />
      <circle cx="20" cy="45" r="11" fill="#F5F5F2" />
      <circle cx="60" cy="22" r="11" fill="#F5F5F2" />
      <circle cx="100" cy="45" r="11" fill="#eb5c2e" />
      <circle cx="60" cy="85" r="18" fill="#F5F5F2" />
    </svg>
  )
}

export function MethodSection() {
  return (
    <section id="metodo" style={{ backgroundColor: "#004757" }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-20 pb-16">

        {/* Eyebrow */}
        <p style={{
          fontFamily: "var(--font-atyp-text)",
          fontWeight: 600,
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#e8e0d6",
          marginBottom: "24px",
        }}>
          O MÉTODO
        </p>

        {/* H2 */}
        <h2 style={{
          fontFamily: "var(--font-atyp-display), sans-serif",
          fontWeight: 500,
          fontSize: "36px",
          lineHeight: 1.2,
          color: WHITE,
          marginBottom: "32px",
        }}>
          Dois métodos que operam juntos. Um destino: o negócio que cresce sem depender do esforço de quem o lidera.
        </h2>

        {/* Grid 3 colunas */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}>

          {/* INSPIRA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", textAlign: "center" }}>
            <InspiraSVG />
            <p style={{
              fontFamily: "var(--font-atyp-display), sans-serif",
              fontWeight: 600,
              fontSize: "24px",
              color: WHITE,
              margin: 0,
            }}>
              INSPIRA
            </p>
            <p style={{
              fontFamily: "var(--font-atyp-display), sans-serif",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: 1.4,
              color: WHITE,
              margin: 0,
            }}>
              Quando você para de resolver o problema errado.
            </p>
            <p style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#F5F5F2",
              margin: 0,
            }}>
              Gabriela Aguiar conduz.
            </p>
            <Link href="/inspira" style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              color: WHITE,
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}>
              Ver INSPIRA →
            </Link>
          </div>

          {/* TRANSPIRA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", textAlign: "center" }}>
            <TranspiraSVG />
            <p style={{
              fontFamily: "var(--font-atyp-display), sans-serif",
              fontWeight: 600,
              fontSize: "24px",
              color: WHITE,
              margin: 0,
            }}>
              TRANSPIRA
            </p>
            <p style={{
              fontFamily: "var(--font-atyp-display), sans-serif",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: 1.4,
              color: WHITE,
              margin: 0,
            }}>
              Quando o trabalho certo substitui o trabalho muito.
            </p>
            <p style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#F5F5F2",
              margin: 0,
            }}>
              Celso Gama conduz.
            </p>
            <Link href="/transpira" style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              color: WHITE,
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}>
              Ver TRANSPIRA →
            </Link>
          </div>

          {/* RESPIRA — Light 300 obrigatório, sem link */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", textAlign: "center" }}>
            <RespiraSVG />
            <p style={{
              fontFamily: "var(--font-atyp-display)",
              fontWeight: 600,
              fontSize: "24px",
              letterSpacing: "inherit",
              textTransform: "uppercase",
              color: "#e8e0d6",
              margin: 0,
            }}>
              RESPIRA
            </p>
            <p style={{
              fontFamily: "var(--font-atyp-display), sans-serif",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: 1.4,
              color: WHITE,
              margin: 0,
            }}>
              Quando a clareza chegou<br />e o negócio decide.
            </p>
            <p style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#F5F5F2",
              margin: 0,
            }}>
              O destino. Quando o negócio<br />pode focar no que importa.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
