import Image from "next/image"

/* HOME · Fundadores · fundo Sand #e8e0d6
   Server Component — sem animação, sem 'use client'.
   Imagem /nos2.png na metade direita com gradiente de transição para Sand. */

const INK     = "#05262e"
const SAND    = "#e8e0d6"
const TEALMID = "#1A5568"
const EMBER   = "#eb5c2e"

export function FoundersSection() {
  return (
    <section
      id="fundadores"
      aria-label="Fundadores"
      style={{ position: "relative", backgroundColor: SAND, overflow: "hidden" }}
    >
      {/* Imagem de fundo — metade direita, funde no Sand */}
      <div
        aria-hidden="true"
        className="hidden md:block"
        style={{ position: "absolute", top: 0, right: 0, width: "52%", height: "100%", zIndex: 0 }}
      >
        <Image
          src="/nos-vertical.png"
          alt=""
          fill
          sizes="52vw"
          quality={80}
          style={{ objectFit: "cover", objectPosition: "30% center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #e8e0d6 0%, rgba(232,224,214,0.95) 8%, rgba(232,224,214,0.5) 18%, rgba(232,224,214,0) 28%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, #e8e0d6 0%, rgba(232,224,214,0) 8%, rgba(232,224,214,0) 92%, #e8e0d6 100%)",
          }}
        />
      </div>

      {/* Conteúdo */}
      <div
        style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto" }}
        className="px-6 md:px-20 py-20 md:py-28"
      >
        {/* Header */}
        <div style={{ maxWidth: "480px", marginBottom: "72px" }}>
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
            QUEM CONDUZ
          </p>
          <h2
            className="font-display"
            style={{
              fontWeight: 600,
              fontSize: "clamp(30px, 4.4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: INK,
            }}
          >
            Consultoria <span style={{ color: "#C4421A" }}>boutique</span> por decisão.
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: INK,
              marginTop: "20px",
              maxWidth: "480px",
              lineHeight: 1.6,
            }}
          >
            Cada projeto tem Gabriela e Celso do diagnóstico à entrega. Sem camada intermediária entre quem entende o problema e quem resolve.
          </p>
        </div>

        {/* Gabriela */}
        <div style={{ maxWidth: "480px", paddingBottom: "48px", borderBottom: "1px solid rgba(5,38,46,0.12)" }}>
          <h3
            className="font-display"
            style={{ fontWeight: 600, fontSize: "clamp(23px, 2.9vw, 32px)", color: INK, marginBottom: "16px", letterSpacing: "-0.01em", lineHeight: 1.2 }}
          >
            Gabriela Aguiar
          </h3>
          <p
            className="font-body"
            style={{ fontSize: "18px", fontWeight: 400, color: INK, lineHeight: 1.6, marginBottom: "16px" }}
          >
            Lê o que a empresa não está conseguindo nomear. Conduz o INSPIRA: cruza mercado, tecnologia, ecossistema e decisão para identificar onde o modelo de trabalho começou a custar caro.
          </p>
          <p
            className="font-body"
            style={{ fontSize: "14px", fontWeight: 400, color: TEALMID, lineHeight: 1.55, marginBottom: "20px" }}
          >
            Docente em educação executiva. MIT Universal AI Foundational Modules (em andamento, 2026).
          </p>
          <a
            href="/sobre"
            className="btn-tertiary"
            style={{ color: TEALMID }}
          >
            Conhecer Gabriela
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Celso */}
        <div style={{ maxWidth: "480px", paddingTop: "48px" }}>
          <h3
            className="font-display"
            style={{ fontWeight: 600, fontSize: "clamp(23px, 2.9vw, 32px)", color: INK, marginBottom: "16px", letterSpacing: "-0.01em", lineHeight: 1.2 }}
          >
            Celso Gama
          </h3>
          <p
            className="font-body"
            style={{ fontSize: "18px", fontWeight: 400, color: INK, lineHeight: 1.6, marginBottom: "16px" }}
          >
            Entra quando o diagnóstico precisa virar movimento. Conduz o TRANSPIRA: reorganiza trabalho, margem, cadência e execução até o resultado ser verificável.
          </p>
          <p
            className="font-body"
            style={{ fontSize: "14px", fontWeight: 400, color: TEALMID, lineHeight: 1.55, marginBottom: "20px" }}
          >
            Bacharelando em Direito (Mackenzie). MIT Applied AI Certificate Program (em andamento, 2026).
          </p>
          <a
            href="/sobre"
            className="btn-tertiary"
            style={{ color: TEALMID }}
          >
            Conhecer Celso
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
