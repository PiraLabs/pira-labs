import Link from "next/link"

/* HOME-4 · Creative Business Turnaround · fundo Teal #004757
   Conteúdo estático — sem animação, sem Ember. Server Component. */

const WHITE = "#F5F5F2"
const TEAL  = "#004757"

export function CBTSection() {
  return (
    <section style={{ backgroundColor: TEAL }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-20 pb-16">

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-atyp-text)",
            fontWeight: 600,
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: WHITE,
            marginBottom: "24px",
          }}
        >
          CREATIVE BUSINESS TURNAROUND
        </p>

        {/* H2 */}
        <h2
          style={{
            fontFamily: "var(--font-atyp-display), sans-serif",
            fontWeight: 500,
            fontSize: "36px",
            lineHeight: 1.2,
            color: WHITE,
            marginBottom: "32px",
          }}
        >
          Business Turnaround aplicado antes da emergência.
        </h2>

        {/* Corpo — 3 parágrafos */}
        <div
          style={{
            maxWidth: "720px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: 1.75,
              color: "rgba(245,245,242,0.8)",
              margin: 0,
            }}
          >
            Turnaround tradicional chega quando a crise já tomou conta. Processos paralisados,
            caixa pressionado, moral baixa. A margem de manobra é mínima e o custo de cada
            decisão é alto.
          </p>

          <p
            style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: 1.75,
              color: "rgba(245,245,242,0.8)",
              margin: 0,
            }}
          >
            Creative Business Turnaround é outra coisa. Chega quando a empresa ainda tem clientes,
            caixa e reputação, mas o modelo de trabalho começou a custar caro demais. A janela
            está aberta. O problema é que ela não fica aberta para sempre.
          </p>

          <p
            style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: 1.75,
              color: "rgba(245,245,242,0.8)",
              margin: 0,
            }}
          >
            O "Creative" não é estético. É estrutural. Significa que o diagnóstico vai além do
            óbvio e a solução não repete o que qualquer consultoria entregaria. Cada empresa de
            serviços tem uma combinação única de pessoas, processos e tecnologia. A rota de saída
            também precisa ser.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/creative-business-turnaround"
          className="inline-flex items-center justify-center min-h-[44px] transition-transform duration-150 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            border: `2px solid ${WHITE}`,
            color: WHITE,
            backgroundColor: "transparent",
            fontFamily: "var(--font-atyp-text), sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            padding: "16px 32px",
            borderRadius: "2px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          LER A CATEGORIA
        </Link>

      </div>
    </section>
  )
}
