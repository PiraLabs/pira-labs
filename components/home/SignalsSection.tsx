"use client"

import { useState } from "react"

/* HOME-3 · Sinais · fundo Sand #e8e0d6
   Lista tipográfica com 6 sinais. Hover desktop / tap mobile expande detalhe.
   Regra Schindler: única ocorrência Ember é a palavra "antes" no H2. */

const INK   = "#05262e"
const SAND  = "#e8e0d6"
const EMBER = "#eb5c2e"

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

function SignalItem({
  index,
  main,
  detail,
}: {
  index:  number
  main:   string
  detail: string
}) {
  const [expanded, setExpanded] = useState(false)
  const num = String(index + 1).padStart(2, "0")

  return (
    <li
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded((v) => !v)}
      style={{
        borderTop: "1px solid rgba(5,38,46,0.15)",
        padding: "20px 0",
        cursor: "default",
        listStyle: "none",
      }}
    >
      {/* Número + texto principal */}
      <div style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
        <span
          style={{
            fontFamily: "var(--font-atyp-text)",
            fontWeight: 600,
            fontSize: "15px",
            color: "#1A5568",
            minWidth: "24px",
            flexShrink: 0,
          }}
        >
          {num}
        </span>
        <p
          style={{
            fontFamily: "var(--font-atyp-display), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(18px, 1.8vw, 24px)",
            color: INK,
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {main}
        </p>
      </div>

      {/* Detalhe — colapsado por padrão, expande no hover/tap */}
      <div
        style={{
          maxHeight: expanded ? "80px" : "0",
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          paddingLeft: "40px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-atyp-text), sans-serif",
            fontWeight: 300,
            fontSize: "16px",
            color: "rgba(5,38,46,0.6)",
            lineHeight: 1.6,
            marginTop: "8px",
            marginBottom: 0,
          }}
        >
          {detail}
        </p>
      </div>
    </li>
  )
}

export function SignalsSection() {
  return (
    <section id="sinais" style={{ backgroundColor: SAND }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-20 pb-16">

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-atyp-text)",
            fontWeight: 600,
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#05262e",
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
            fontSize: "36px",
            fontWeight: 500,
            lineHeight: 1.25,
            marginBottom: "56px",
            fontFamily: "var(--font-atyp-display), sans-serif",
          }}
        >
          Os sinais aparecem{" "}
          <span style={{ color: EMBER }}>antes</span>{" "}
          da crise. O problema é que quase ninguém sabe lê-los.
        </h2>

        {/* Lista tipográfica */}
        <ul
          style={{
            margin: 0,
            padding: 0,
            borderBottom: "1px solid rgba(5,38,46,0.15)",
          }}
        >
          {SIGNALS.map((s, i) => (
            <SignalItem key={i} index={i} main={s.main} detail={s.detail} />
          ))}
        </ul>

        {/* Fechamento */}
        <p
          style={{
            fontFamily: "var(--font-atyp-text), sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            color: INK,
            marginTop: "40px",
            marginBottom: 0,
          }}
        >
          Se você reconheceu mais de um, continue a leitura.
        </p>

      </div>
    </section>
  )
}
