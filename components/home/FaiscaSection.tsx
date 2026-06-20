const INK     = "#05262e"
const SAND    = "#e8e0d6"
const TEALMID = "#1A5568"

interface Produto { nome: string; href: string }
interface Bloco {
  problema: string
  eyebrow?: string
  produtos: Produto[]
  aviso?: string
}

const blocos: Bloco[] = [
  {
    problema: "Precisa entender o que está acontecendo antes de assumir qualquer compromisso maior.",
    produtos: [
      { nome: "Oxigênio", href: "/faisca/oxigenio-ia-search" },
      { nome: "pocket do INSPIRA", href: "/faisca/pocket" },
    ],
  },
  {
    problema: "A IA já entrou na operação, mas ainda não entrou no modelo.",
    produtos: [
      { nome: "Imersão em IA", href: "/faisca/imersa-em-ia" },
    ],
  },
  {
    problema: "Quer levar essa leitura para uma liderança, empresa ou evento.",
    produtos: [
      { nome: "Palestras", href: "/chama" },
      { nome: "Workshops", href: "/chama" },
    ],
  },
  {
    eyebrow: "OFERTAS SELETIVAS",
    problema: "Se nenhum dos grupos acima descreve o seu momento, pode ser um destes.",
    produtos: [
      { nome: "C-level as a Service", href: "/faisca" },
      { nome: "Faísca Jurídica", href: "/faisca/juridica" },
    ],
    aviso: "A Faísca Jurídica não presta consultoria jurídica e não substitui advogada ou advogado habilitados. NDA assinado antes de qualquer conversa com a equipe.",
  },
]

export function FaiscaSection() {
  return (
    <section id="faisca" aria-label="Faísca" style={{ backgroundColor: SAND }}>
      <div className="container-site py-20 md:py-28">

        {/* Header */}
        <p style={{ fontFamily: "var(--font-atyp-text)", fontWeight: 600, fontSize: "12px", letterSpacing: "0.14em", color: TEALMID, marginBottom: "32px" }}>
          Faísca
        </p>
        <h2 className="font-display" style={{ fontWeight: 600, fontSize: "clamp(30px, 4.4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: INK, marginBottom: "24px", maxWidth: "16ch" }}>
          O primeiro passo não precisa ser o maior.
        </h2>
        <p className="font-body" style={{ fontSize: "18px", fontWeight: 400, color: INK, lineHeight: 1.6, maxWidth: "600px", marginBottom: "72px" }}>
          A Faísca é a porta de entrada da Pira Labs: formatos curtos para entender o seu momento antes de decidir o tamanho do passo seguinte. Encontre onde você está.
        </p>

        {/* 4 blocos */}
        <div>
          {blocos.map((b, i) => (
            <div
              key={i}
              style={{
                paddingTop: i === 0 ? 0 : "40px",
                paddingBottom: i === blocos.length - 1 ? 0 : "40px",
                borderTop: i === 0 ? "none" : "1px solid rgba(5,38,46,0.12)",
                maxWidth: "720px",
              }}
            >
              {b.eyebrow && (
                <p style={{ fontFamily: "var(--font-atyp-text)", fontWeight: 600, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: TEALMID, marginBottom: "16px" }}>
                  {b.eyebrow}
                </p>
              )}
              <p className="font-display" style={{ fontWeight: 500, fontSize: "clamp(20px, 2.6vw, 26px)", lineHeight: 1.25, letterSpacing: "-0.01em", color: INK, marginBottom: "20px", maxWidth: "28ch" }}>
                {b.problema}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
                {b.produtos.map((p) => (
                  <a key={p.nome} href={p.href} className="btn-tertiary" style={{ color: TEALMID }}>
                    {p.nome}<span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
              {b.aviso && (
                <p style={{ fontFamily: "var(--font-atyp-text)", fontWeight: 400, fontSize: "13px", lineHeight: 1.5, color: TEALMID, marginTop: "16px", maxWidth: "560px" }}>
                  {b.aviso}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div style={{ marginTop: "72px" }}>
          <a href="/faisca" className="btn-secondary-light">
            Ver todas as portas de entrada<span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
