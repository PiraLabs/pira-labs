const INK     = "#05262e"
const WHITE   = "#F5F5F2"
const SAND    = "#e8e0d6"
const TEALMID = "#1A5568"
const TAUPE   = "#b0a596"
const EMBER   = "#eb5c2e"

interface ProofBlock {
  metric: string
  label: string
  body: string
  isEmber: boolean
}

const proofs: ProofBlock[] = [
  {
    metric: "−64% → +15%",
    label: "PRÉ-PIRA LABS · PRÉ-IA",
    body: "Conta publicitária de multinacional do setor de bebidas. Revisão de processos e métricas recuperou 79 pontos percentuais de margem em 6 meses, sem aumentar receita.",
    isEmber: true,
  },
  {
    metric: "R$16M → R$163M",
    label: "PRÉ-PIRA LABS · PRÉ-IA",
    body: "Reestruturação da área de ativação e eventos de uma agência multinacional. Dois anos culminando na coordenação de 622 profissionais e 100+ fornecedores para o patrocínio global de uma grande marca de tecnologia nos Jogos Rio 2016.",
    isEmber: false,
  },
  {
    metric: "400h → 36h",
    label: "PRÉ-PIRA LABS · PÓS-IA · SUPERVISÃO HUMANA",
    body: "Operação jurídica de alto volume. IA bem aplicada e supervisionada por humanos liberou capacidade estimada pelo cliente em R$160 mil de faturamento adicional por mês, com a mesma equipe.",
    isEmber: false,
  },
]

export function ProofsSection() {
  return (
    <section style={{ backgroundColor: INK }}>
      {/* Fronteira de topo — marca ruptura com o CBT (ambos Ink) */}
      <div className="container-site">
        <div style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }} />
      </div>

      <div className="container-site py-20 md:py-28">
        {/* Header */}
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
          O QUE A OPERAÇÃO REAL ENSINOU
        </p>

        <h2
          className="font-display"
          style={{
            fontWeight: 600,
            fontSize: "clamp(30px, 4.4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: WHITE,
            marginBottom: "16px",
          }}
        >
          Não é teoria de prateleira.
        </h2>

        <p
          className="font-body"
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: SAND,
            lineHeight: 1.6,
            marginBottom: "80px",
          }}
        >
          Trajetória antes da Pira Labs.
        </p>

        {/* Provas */}
        <div style={{ display: "flex", flexDirection: "column", gap: "72px" }}>
          {proofs.map((proof, i) => (
            <div key={i}>
              {/* Número monumental — escala DISPLAY */}
              <p
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(52px, 10.2vw, 112px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.035em",
                  color: proof.isEmber ? EMBER : WHITE,
                  marginBottom: "20px",
                  overflowWrap: "break-word",
                }}
              >
                {proof.metric}
              </p>

              {/* Label */}
              <p
                style={{
                  fontFamily: "var(--font-atyp-text)",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: TAUPE,
                  marginBottom: "16px",
                }}
              >
                {proof.label}
              </p>

              {/* Body */}
              <p
                className="font-body"
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  color: WHITE,
                  lineHeight: 1.6,
                  maxWidth: "640px",
                  margin: 0,
                }}
              >
                {proof.body}
              </p>
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <p
          className="font-body"
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: SAND,
            lineHeight: 1.6,
            maxWidth: "640px",
            marginTop: "72px",
            marginBottom: 0,
          }}
        >
          Em todos, o resultado veio de olhar para onde ninguém estava olhando.
        </p>

      </div>
    </section>
  )
}
