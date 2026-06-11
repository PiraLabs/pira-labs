"use client"

import { useEffect, useRef, useState } from "react"

/* HOME-7 · Provas · fundo Ink #05262e
   Imagem de fundo na metade direita com gradiente de transição.
   Mobile: faixa de imagem no topo via CSS override.
   font-body = alias para var(--font-atyp-text) no tailwind.config.
   text-orange = ember (#EB5C2E) no tailwind.config. */

interface ProofBlock {
  from: number
  fromPrefix: string
  fromSuffix: string
  to: number
  toPrefix: string
  toSuffix: string
  label: string
  body: string
  isEmber: boolean
  countDirection: "up" | "down"
}

const proofs: ProofBlock[] = [
  {
    from: 64,
    fromPrefix: "-",
    fromSuffix: "%",
    to: 15,
    toPrefix: "+",
    toSuffix: "%",
    label: "PRÉ-PIRA LABS · PRÉ-IA",
    body: "Conta publicitária de multinacional do setor de bebidas. Revisão de processos e métricas recuperou 79 pontos percentuais de margem em 6 meses, sem aumentar receita.",
    isEmber: true,
    countDirection: "up",
  },
  {
    from: 16,
    fromPrefix: "R$",
    fromSuffix: "M",
    to: 163,
    toPrefix: "R$",
    toSuffix: "M",
    label: "PRÉ-PIRA LABS · PRÉ-IA",
    body: "Reestruturação da área de ativação e eventos de uma agência multinacional. Dois anos culminando na coordenação de 600 pessoas e 100 fornecedores para o patrocínio global de uma grande marca de tecnologia nos Jogos Rio 2016.",
    isEmber: false,
    countDirection: "up",
  },
  {
    from: 400,
    fromPrefix: "",
    fromSuffix: "h",
    to: 36,
    toPrefix: "",
    toSuffix: "h",
    label: "PRÉ-PIRA LABS · PÓS-IA · SUPERVISÃO HUMANA",
    body: "Operação jurídica de alto volume. IA bem aplicada e supervisionada por humanos liberou capacidade estimada pelo cliente em R$160 mil de faturamento adicional por mês, com a mesma equipe.",
    isEmber: false,
    countDirection: "down",
  },
]

function useCountUp(
  target: number,
  duration: number,
  active: boolean,
  direction: "up" | "down",
  prefersReduced: boolean
) {
  const [value, setValue] = useState(direction === "up" ? 0 : target * 2)

  useEffect(() => {
    if (!active) return
    if (prefersReduced) {
      setValue(target)
      return
    }
    const start = direction === "up" ? 0 : target * 2
    const end = target
    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (end - start) * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration, direction, prefersReduced])

  return value
}

function ProofMetric({
  proof,
  active,
  prefersReduced,
}: {
  proof: ProofBlock
  active: boolean
  prefersReduced: boolean
}) {
  const fromVal = useCountUp(proof.from, 1200, active, "up", prefersReduced)
  const toVal   = useCountUp(proof.to,   1200, active, proof.countDirection, prefersReduced)
  const numberClass = proof.isEmber ? "text-orange" : "text-[#F5F5F2]"

  return (
    <div className="py-12 first:pt-0 last:pb-0 border-b border-white/10 last:border-0">
      <div
        role="text"
        className={`font-display font-bold leading-none tracking-tight ${numberClass}`}
        style={{ fontSize: "clamp(36px, 8vw, 104px)" }}
        aria-label={`${proof.fromPrefix}${proof.from}${proof.fromSuffix} para ${proof.toPrefix}${proof.to}${proof.toSuffix}`}
      >
        <span aria-hidden="true">
          {proof.fromPrefix}{fromVal}{proof.fromSuffix}
          <span className="mx-3 opacity-30 font-light">→</span>
          {proof.toPrefix}{toVal}{proof.toSuffix}
        </span>
      </div>
      <p
        className="mt-3 font-body font-light uppercase tracking-widest"
        style={{ fontSize: "11px", color: "#e8e0d6" }}
      >
        {proof.label}
      </p>
      <p
        className="mt-4 font-body font-light leading-relaxed"
        style={{ fontSize: "15px", maxWidth: "52ch", color: "#F5F5F2" }}
      >
        {proof.body}
      </p>
    </div>
  )
}

export function ProofsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReduced(mq.matches)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="provas"
      aria-label="Resultados"
      style={{ position: "relative", backgroundColor: "#05262e", overflow: "hidden" }}
    >
      {/* Conteúdo */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 80px",
        }}
      >
        {/* Header */}
        <div style={{ maxWidth: "640px", marginBottom: "64px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest"
            style={{ fontSize: "10px", marginBottom: "16px", color: "#e8e0d6" }}
          >
            O QUE A OPERAÇÃO REAL ENSINOU
          </p>
          <h2
            className="font-display font-medium text-white leading-tight"
            style={{ fontSize: "clamp(32px, 5.5vw, 88px)" }}
          >
            Não é teoria de prateleira.
          </h2>
          <p
            className="font-body font-light"
            style={{ fontSize: "16px", marginTop: "16px", color: "#e8e0d6" }}
          >
            Trajetória antes da Pira Labs.
          </p>
        </div>

        {/* Blocos de prova */}
        <div style={{ maxWidth: "600px", width: "100%" }}>
          {proofs.map((proof, i) => (
            <ProofMetric
              key={i}
              proof={proof}
              active={active}
              prefersReduced={prefersReduced}
            />
          ))}
        </div>

        {/* Fechamento */}
        <p
          className="font-body font-light leading-relaxed"
          style={{ fontSize: "16px", maxWidth: "52ch", marginTop: "48px", color: "#e8e0d6" }}
        >
          Em todos, o resultado veio de olhar para onde ninguém estava olhando.
        </p>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          #provas > div {
            padding: 48px 24px 80px !important;
          }
        }
      `}</style>
    </section>
  )
}
