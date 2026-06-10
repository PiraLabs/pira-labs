import Link from 'next/link'

/* HOME-4 · Creative Business Turnaround · fundo Teal #004757
   Server Component puro — sem animação, sem 'use client'. */

const TEAL  = "#004757"
const WHITE = "#F5F5F2"
const EMBER = "#eb5c2e"

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-atyp-display), sans-serif",
  fontWeight: 300,
  fontSize: "16px",
  lineHeight: 1.75,
  color: "#F5F5F2",
  margin: 0,
}

export function CBTSection() {
  return (
    <section style={{ backgroundColor: TEAL }}>
      <div
        className="cbt-container"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 80px",
        }}
      >

        {/* BLOCO 1 — Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-atyp-text)",
            fontWeight: 600,
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#e8e0d6",
            marginBottom: "40px",
          }}
        >
          CREATIVE BUSINESS TURNAROUND
        </p>

        {/* BLOCO 2 — H2 largura total */}
        <h2
          style={{
            fontFamily: "var(--font-atyp-display), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 4.5vw, 80px)",
            lineHeight: 1.05,
            color: WHITE,
            maxWidth: "100%",
            marginBottom: "48px",
          }}
        >
          Business Turnaround<br />
          aplicado <span style={{ color: EMBER }}>antes</span> da janela<br />
          de oportunidade fechar.
        </h2>

        {/* BLOCO 3 — Separador */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(245,245,242,0.25)",
            width: "100%",
            marginBottom: "48px",
          }}
        />

        {/* BLOCO 4 — Grid 12 colunas
            Desktop: §1 col 1–5 row 1 | §2+§3 col 7–12 row 1–2 | CTA col 1–5 row 2
            Mobile (flex column): §1 → §2+§3 → CTA  */}
        <div
          className="cbt-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "32px",
          }}
        >

          {/* §1 — coluna 1–5, linha 1 */}
          <p
            style={{
              ...bodyStyle,
              gridColumn: "1 / 6",
              gridRow: "1",
            }}
          >
            Turnaround tradicional chega quando a crise já tomou conta. Processos paralisados,
            caixa pressionado, moral baixa. A margem de manobra é mínima e o custo de cada
            decisão é alto.
          </p>

          {/* §2 + §3 — coluna 7–12, linhas 1–2 */}
          <div
            className="cbt-col-right"
            style={{
              gridColumn: "7 / 13",
              gridRow: "1 / 3",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <p style={bodyStyle}>
              Creative Business Turnaround é outra coisa. Chega quando a empresa ainda tem clientes,
              caixa e reputação, mas o modelo de trabalho começou a custar caro demais. A janela
              está aberta. O problema é que ela não fica aberta para sempre.
            </p>

            <p style={bodyStyle}>
              O "Creative" não é estético. É estrutural. Significa que o diagnóstico vai além do
              óbvio e a solução não repete o que qualquer consultoria entregaria. Cada empresa de
              serviços tem uma combinação única de pessoas, processos e tecnologia. A rota de saída
              também precisa ser.
            </p>
          </div>

          {/* CTA — coluna 1–5, linha 2 */}
          <div
            style={{
              gridColumn: "1 / 6",
              gridRow: "2",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Link
              href="/creative-business-turnaround"
              className="cbt-cta"
              style={{
                fontFamily: "var(--font-atyp-text)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: WHITE,
                opacity: 0.7,
                textDecoration: "none",
                transition: "opacity 0.15s ease",
              }}
            >
              LER A CATEGORIA →
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        .cbt-cta:hover { opacity: 1 !important; }

        @media (max-width: 767px) {
          .cbt-container {
            padding: 80px 24px !important;
          }
          .cbt-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
