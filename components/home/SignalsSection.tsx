const INK     = "#05262e"
const SAND    = "#e8e0d6"
const TEALMID = "#1A5568"

const SIGNALS = [
  {
    main:   "A empresa vende, mas a margem não acompanha.",
    detail: "O modelo de trabalho está consumindo o que a receita produz.",
  },
  {
    main:   "A fundadora ou o fundador virou passagem obrigatória para quase tudo.",
    detail: "Quando uma pessoa é o sistema, o sistema tem limite.",
  },
  {
    main:   "A equipe trabalha mais, mas o cliente percebe menos valor.",
    detail: "Esforço e entrega percebida pararam de andar juntos.",
  },
  {
    main:   "A IA entrou pela ferramenta, não pelo fluxo.",
    detail: "Automatizar o processo errado só acelera o problema errado.",
  },
  {
    main:   "O comercial promete uma coisa e a operação entrega outra.",
    detail: "A fratura entre venda e entrega tem custo invisível.",
  },
  {
    main:   "O negócio ainda tem reputação, clientes e caixa, mas perdeu fôlego.",
    detail: "Fôlego não volta sozinho. E a janela não fica aberta para sempre.",
  },
]

export function SignalsSection() {
  return (
    <section id="sinais" style={{ backgroundColor: SAND }}>
      {/* Fronteira de topo — marca ruptura com o Hero (ambos Sand) */}
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20">
        <div style={{ borderTop: "1px solid rgba(5,38,46,0.12)" }} />
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-20 pb-16">

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-atyp-text)",
            fontWeight: 600,
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: TEALMID,
            marginBottom: "24px",
          }}
        >
          QUANDO O MODELO COMEÇA A CUSTAR CARO DEMAIS
        </p>

        {/* H2 */}
        <h2
          className="font-display"
          style={{
            color: INK,
            fontSize: "clamp(30px, 4.4vw, 48px)",
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
            maxWidth: "16ch",
          }}
        >
          O problema não está onde você está olhando.
        </h2>

        {/* Subtítulo */}
        <p
          className="font-body"
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: TEALMID,
            lineHeight: 1.6,
            marginBottom: "40px",
            maxWidth: "640px",
          }}
        >
          E quem está dentro paga caro para tentar enxergar isso sozinho.
        </p>

        {/* Parágrafos */}
        <div style={{ maxWidth: "680px", marginBottom: "56px" }}>
          <p
            className="font-body"
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: INK,
              lineHeight: 1.6,
              marginBottom: "24px",
            }}
          >
            Empresas de serviços não param de crescer por falta de esforço. Param quando o modelo pelo qual o trabalho é feito, cobrado e entregue deixou de sustentar o crescimento. O sinal aparece nos números, mas a causa está na estrutura. E a estrutura não muda enquanto quem precisa mudá-la está operando dentro dela.
          </p>
          <p
            className="font-body"
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: INK,
              lineHeight: 1.6,
              marginBottom: 0,
            }}
          >
            Não é incompetência. É impossibilidade estrutural. Operar exige manter tudo funcionando. Redesenhar exige questionar por que funciona assim. Quando a mesma liderança tenta sustentar as duas coisas ao mesmo tempo, uma cobra da outra: ou a operação perde ritmo, ou o modelo permanece intocado.
          </p>
        </div>

        {/* Lista de sintomas — estática, tudo visível, zero JS */}
        <ul style={{ margin: 0, padding: 0, borderBottom: "1px solid rgba(5,38,46,0.12)", listStyle: "none" }}>
          {SIGNALS.map((s, i) => {
            const num = String(i + 1).padStart(2, "0")
            return (
              <li
                key={i}
                style={{
                  borderTop: "1px solid rgba(5,38,46,0.12)",
                  padding: "20px 0",
                  display: "flex",
                  gap: "16px",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-atyp-text)",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: TEALMID,
                    minWidth: "24px",
                    flexShrink: 0,
                  }}
                >
                  {num}
                </span>
                <div>
                  <p
                    className="font-display"
                    style={{
                      fontWeight: 500,
                      fontSize: "clamp(20px, 2vw, 26px)",
                      color: INK,
                      lineHeight: 1.25,
                      margin: 0,
                    }}
                  >
                    {s.main}
                  </p>
                  <p
                    className="font-body"
                    style={{
                      fontWeight: 400,
                      fontSize: "16px",
                      color: TEALMID,
                      lineHeight: 1.55,
                      marginTop: "8px",
                      marginBottom: 0,
                    }}
                  >
                    {s.detail}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>

        {/* Fecho — dado de mercado (Projeto 1), separado da lista */}
        <div style={{ maxWidth: "680px", marginTop: "56px" }}>
          <p
            className="font-body"
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: INK,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Não é um problema isolado de uma empresa. Uma pesquisa da Fundação Dom Cabral de 2026 identificou que 68,3% das empresas brasileiras não possuem núcleo dedicado à governança de IA. O sintoma é individual. O padrão é estrutural.
          </p>
        </div>

      </div>
    </section>
  )
}
