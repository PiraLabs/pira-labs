const INK     = "#05262e"
const WHITE   = "#F5F5F2"
const SAND    = "#e8e0d6"
const TEALMID = "#1A5568"
const TAUPE   = "#b0a596"
const EMBER   = "#eb5c2e"

interface Pilar {
  nome: string
  estado: string
  descricao: string
  condutor?: string
  href?: string
  linkLabel?: string
}

const pilares: Pilar[] = [
  {
    nome: "INSPIRA",
    estado: "Sistema disperso",
    descricao: "Analisa o negócio inteiro e detecta onde o modelo de trabalho começou a custar mais do que entrega. Nomeia o que está disperso e o que precisa entrar em ordem.",
    condutor: "Gabriela Aguiar conduz.",
    href: "/inspira",
    linkLabel: "Conhecer o INSPIRA",
  },
  {
    nome: "TRANSPIRA",
    estado: "Sistema em operação",
    descricao: "Junta as peças, corrige as rotas e organiza a execução. Reorganiza trabalho, margem e cadência até o sistema operar sem depender de quem o lidera.",
    condutor: "Celso Gama conduz.",
    href: "/transpira",
    linkLabel: "Conhecer o TRANSPIRA",
  },
  {
    nome: "RESPIRA",
    estado: "Sistema pleno",
    descricao: "O sistema entrou no eixo e opera. A margem voltou, a decisão se distribuiu, o negócio respira. Não é produto que se contrata. É o que sobra quando os dois primeiros funcionaram.",
  },
]

function LogoKZ() {
  // Paths reais do ICONE_SAND.svg — viewBox "0 0 831.39 293.51".
  // Nó esquerdo (anel duplo) e central (meias-luas) com fill SAND.
  // Nó direito (disco cheio) com fill EMBER — único Ember desta seção.
  return (
    <svg
      viewBox="40.7 42.8 749.9 207.8"
      aria-hidden="true"
      role="presentation"
      style={{ width: "clamp(280px, 70vw, 920px)", height: "auto", display: "block" }}
    >
      {/* nó esquerdo — anel duplo — fill SAND */}
      <path fill={SAND} d="M144.67,242.66c48.42,0,88.43-35.9,94.95-82.53h81.12c-.61-4.38-.95-8.82-.95-13.37s.34-8.99.95-13.37h-81.12c-6.51-46.65-46.53-82.55-94.95-82.55-52.97,0-95.92,42.95-95.92,95.92s42.95,95.9,95.92,95.9ZM144.67,79.43c32.6,0,59.77,23.19,66,53.96.85,4.33,1.31,8.78,1.31,13.37s-.46,9.04-1.31,13.37c-6.22,30.77-33.4,53.96-66,53.96-37.19,0-67.33-30.14-67.33-67.33s30.14-67.33,67.33-67.33Z" />
      {/* nó central — meia-lua inferior — fill SAND */}
      <path fill={SAND} d="M415.7,242.67c48.43,0,88.45-35.9,94.96-82.54h-189.92c6.51,46.64,46.53,82.54,94.96,82.54Z" />
      {/* nó central — meia-lua superior — fill SAND */}
      <path fill={SAND} d="M510.66,133.39h-189.92c6.51-46.65,46.53-82.55,94.97-82.55s88.43,35.9,94.95,82.55Z" />
      {/* nó direito — path inclui linha conectora + disco, fill SAND para a linha */}
      <path fill={SAND} d="M511.6,146.76c0-4.55-.34-8.99-.95-13.37h81.12c6.51-46.65,46.53-82.55,94.97-82.55c52.97,0,95.9,42.95,95.9,95.92s-42.93,95.9-95.9,95.9c-48.45,0-88.46-35.9-94.97-82.53h-81.12c.61-4.38.95-8.82.95-13.37Z" />
      {/* disco direito em Ember — sobrepõe só o círculo, a linha conectora fica Sand */}
      <circle cx="686.74" cy="146.76" r="95.9" fill={EMBER} />
    </svg>
  )
}

export function SystemSection() {
  return (
    <section id="sistema" aria-label="Como opera" style={{ backgroundColor: INK }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }} className="px-6 md:px-20 py-20 md:py-28">

        {/* Logo grande centralizado */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "72px" }}>
          <LogoKZ />
        </div>

        {/* Header */}
        <p style={{ fontFamily: "var(--font-atyp-text)", fontWeight: 600, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: SAND, marginBottom: "32px" }}>
          COMO OPERA
        </p>
        <h2 className="font-display" style={{ fontWeight: 600, fontSize: "clamp(30px, 4.4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: WHITE, marginBottom: "24px", maxWidth: "16ch" }}>
          Dois métodos. Um destino.
        </h2>
        <p className="font-body" style={{ fontSize: "18px", fontWeight: 400, color: WHITE, lineHeight: 1.6, maxWidth: "600px", marginBottom: "72px" }}>
          O logo da Pira Labs é formado por três nós que se conectam num caminho linear. Eles traduzem como um negócio disperso vira pleno: é o método de trabalho que tira a empresa do esforço constante e a deixa respirar.
        </p>

        {/* Três pilares — empilhados, divisores entre eles */}
        <div>
          {pilares.map((p, i) => (
            <div
              key={p.nome}
              style={{
                paddingTop: i === 0 ? 0 : "40px",
                paddingBottom: i === pilares.length - 1 ? 0 : "40px",
                borderTop: i === 0 ? "none" : "1px solid rgba(245,245,242,0.12)",
                maxWidth: "640px",
              }}
            >
              <h3 className="font-display" style={{ fontWeight: 600, fontSize: "clamp(23px, 2.9vw, 32px)", lineHeight: 1.2, letterSpacing: "-0.01em", color: WHITE, marginBottom: "16px" }}>
                {p.nome} <span style={{ color: TAUPE }}>·</span> {p.estado}
              </h3>
              <p className="font-body" style={{ fontSize: "18px", fontWeight: 400, color: WHITE, lineHeight: 1.6, marginBottom: p.condutor ? "16px" : 0 }}>
                {p.descricao}
              </p>
              {p.condutor && (
                <p style={{ fontFamily: "var(--font-atyp-text)", fontWeight: 400, fontSize: "14px", color: TAUPE, lineHeight: 1.55, marginBottom: "20px" }}>
                  {p.condutor}
                </p>
              )}
              {p.href && p.linkLabel && (
                <a href={p.href} className="btn-tertiary" style={{ color: SAND }}>
                  {p.linkLabel}<span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
