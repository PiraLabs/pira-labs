import Link from "next/link"

/* HOME-5 · Método · fundo Teal #004757 · id="metodo"
   Geometria canônica Manual v3 — coordenadas fixas, não alterar.
   RESPIRA: AtypDisplay Light 300 obrigatório. Bola +45° Ember = único Ember desta seção. */

const WHITE = "#F5F5F2"
const TEAL  = "#004757"

function InspiraSVG() {
  return (
    <svg viewBox="0 0 100 120" width={180} style={{ height: "auto", display: "block", marginBottom: "16px" }}>
      {/* Nó central com gap */}
      <path d="M50,55 m-20,0 a20,20 0 0,1 40,0" fill="#e8e0d6" stroke="none" />
      <path d="M50,55 m-20,0 a20,20 0 0,0 40,0" fill="#e8e0d6" stroke="none" />
      <rect x="30" y="52" width="40" height="6" fill="#004757" stroke="none" />
      {/* Bola -45° vazia */}
      <circle cx="22" cy="28" r="11" fill="none" stroke="#e8e0d6" strokeWidth="1.5" />
      {/* Bola +45° cheia */}
      <circle cx="78" cy="28" r="11" fill="#e8e0d6" stroke="none" />
      {/* Conectores */}
      <line x1="34" y1="42" x2="29" y2="37" stroke="#e8e0d6" strokeWidth="1" opacity="0.4" />
      <line x1="66" y1="42" x2="71" y2="37" stroke="#e8e0d6" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

function TranspiraSVG() {
  return (
    <svg viewBox="0 0 100 120" width={180} style={{ height: "auto", display: "block", marginBottom: "16px" }}>
      {/* Nó central com gap */}
      <path d="M50,65 m-20,0 a20,20 0 0,1 40,0" fill="#e8e0d6" stroke="none" />
      <path d="M50,65 m-20,0 a20,20 0 0,0 40,0" fill="#e8e0d6" stroke="none" />
      <rect x="30" y="62" width="40" height="6" fill="#004757" stroke="none" />
      {/* Bola -45° cheia */}
      <circle cx="18" cy="38" r="11" fill="#e8e0d6" stroke="none" />
      {/* Bola 0° vazia */}
      <circle cx="50" cy="18" r="11" fill="none" stroke="#e8e0d6" strokeWidth="1.5" />
      {/* Bola +45° cheia */}
      <circle cx="82" cy="38" r="11" fill="#e8e0d6" stroke="none" />
      {/* Conectores */}
      <line x1="34" y1="52" x2="25" y2="45" stroke="#e8e0d6" strokeWidth="1" opacity="0.4" />
      <line x1="50" y1="45" x2="50" y2="27" stroke="#e8e0d6" strokeWidth="1" opacity="0.4" />
      <line x1="66" y1="52" x2="75" y2="45" stroke="#e8e0d6" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

function RespiraSVG() {
  return (
    <svg viewBox="0 0 100 120" width={180} style={{ height: "auto", display: "block", marginBottom: "16px" }}>
      {/* Nó central cheio */}
      <circle cx="50" cy="65" r="20" fill="#e8e0d6" stroke="none" />
      {/* Bola -45° cheia */}
      <circle cx="18" cy="38" r="11" fill="#e8e0d6" stroke="none" />
      {/* Bola 0° cheia */}
      <circle cx="50" cy="18" r="11" fill="#e8e0d6" stroke="none" />
      {/* Bola +45° Ember — único Ember desta seção */}
      <circle cx="82" cy="38" r="11" fill="#eb5c2e" stroke="none" />
      {/* Conectores */}
      <line x1="34" y1="52" x2="25" y2="45" stroke="#e8e0d6" strokeWidth="1" opacity="0.4" />
      <line x1="50" y1="45" x2="50" y2="27" stroke="#e8e0d6" strokeWidth="1" opacity="0.4" />
      <line x1="66" y1="52" x2="75" y2="45" stroke="#e8e0d6" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

export function MethodSection() {
  return (
    <section id="metodo" style={{ backgroundColor: TEAL }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-20 pb-16">

        {/* Eyebrow */}
        <p style={{
          fontFamily: "var(--font-atyp-text)",
          fontWeight: 600,
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: WHITE,
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
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
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
              color: "rgba(245,245,242,0.75)",
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
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
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
              color: "rgba(245,245,242,0.75)",
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
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
            <RespiraSVG />
            <p style={{
              fontFamily: "var(--font-atyp-display), sans-serif",
              fontWeight: 300,
              fontSize: "24px",
              color: WHITE,
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
              color: "rgba(245,245,242,0.75)",
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
