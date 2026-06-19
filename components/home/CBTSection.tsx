import { CTAButton as TertiaryLink } from '@/components/ui/CTAButton'

/* HOME · Creative Business Turnaround · fundo Ink #05262e
   Server Component puro — sem animação, sem 'use client'. */

const INK   = "#05262e"
const WHITE = "#F5F5F2"
const SAND  = "#e8e0d6"
const EMBER = "#eb5c2e"

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-atyp-text), sans-serif",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: 1.6,
  color: WHITE,
  margin: 0,
}

export function CBTSection() {
  return (
    <section style={{ backgroundColor: INK }}>
      <div
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        className="px-6 md:px-20 py-20 md:py-28"
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-atyp-text)",
            fontWeight: 600,
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: SAND,
            marginBottom: "32px",
          }}
        >
          CREATIVE BUSINESS TURNAROUND
        </p>

        {/* H2 — Ember em "antes" (tese da Pira: turnaround antes da crise) */}
        <h2
          className="font-display"
          style={{
            fontWeight: 600,
            fontSize: "clamp(30px, 4.4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: WHITE,
            maxWidth: "18ch",
            marginBottom: "48px",
          }}
        >
          Business Turnaround aplicado <span style={{ color: EMBER }}>antes</span> da janela de oportunidade fechar.
        </h2>

        {/* Separador */}
        <hr style={{ border: "none", borderTop: "1px solid rgba(245,245,242,0.12)", width: "100%", marginBottom: "48px" }} />

        {/* Coluna de leitura — texto corrido à esquerda */}
        <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <p style={bodyStyle}>
            Turnaround tradicional chega quando a crise já tomou conta. Processos paralisados, caixa pressionado, moral baixa. A margem de manobra é mínima e o custo de cada decisão é alto.
          </p>
          <p style={bodyStyle}>
            Creative Business Turnaround é outra coisa. Chega quando a empresa ainda tem clientes, caixa e reputação, mas o modelo de trabalho começou a custar caro demais. A janela está aberta. O problema é que ela não fica aberta para sempre.
          </p>
          <p style={bodyStyle}>
            O "Creative" não é estético. É estrutural. O problema em empresas de serviços raramente é só financeiro ou só operacional: é como o valor é criado, entregue e percebido. A rota de saída também precisa ser.
          </p>

          {/* Fecho — frase de reforço marca-categoria (Projeto 1), sem Ember (Schindler) */}
          <p
            style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: 1.6,
              color: SAND,
              margin: 0,
              marginTop: "8px",
            }}
          >
            A Pira Labs reivindica e opera o Creative Business Turnaround no Brasil como categoria própria: a consultoria boutique que entra antes da crise, quando ainda há clientes, caixa e reputação para agir com opções.
          </p>
        </div>

        {/* CTA — BTN-3 terciário */}
        <div style={{ marginTop: "40px" }}>
          <TertiaryLink href="/creative-business-turnaround" label="Ler a categoria" theme="dark" />
        </div>
      </div>
    </section>
  )
}
