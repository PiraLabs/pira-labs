"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/* HOME-2 · Sistema · Ink #05262e
   Path 3 do Artboard_6 usado como elemento único: nó central + dois conectores.
   Refs: leftNodeRef (g), centerRef (path), rightRef (circle).
   prefers-reduced-motion: estado 3 estático. */

const SAND  = "#e8e0d6"
const INK   = "#05262e"
const EMBER = "#eb5c2e"

const LABELS = [
  {
    label: "Sistema disperso",
    desc:  "A janela ainda está aberta, antes de virar urgência. A empresa opera, mas o modelo está custando caro demais.",
  },
  {
    label: "Sistema em operação",
    desc:  "Cada parte do negócio opera sem precisar do centro. Quem lidera para de ser passagem obrigatória para tudo.",
  },
  {
    label: "Sistema pleno",
    desc:  "Clareza chegou. Margem voltou. O negócio respira e pode ir pro próximo nível.",
  },
]

export function SystemSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const leftNodeRef = useRef<SVGGElement>(null)
  const centerRef   = useRef<SVGPathElement>(null)
  const rightRef    = useRef<SVGCircleElement>(null)

  useEffect(() => {
    let raf1: number, raf2: number

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

        if (reduced) {
          gsap.set(leftNodeRef.current, { opacity: 1 })
          gsap.set(centerRef.current,   { opacity: 1 })
          gsap.set(rightRef.current,    { opacity: 1, fill: EMBER })
          return
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: 1,
          },
        })

        // Estado 1 → 2
        tl.to([leftNodeRef.current, centerRef.current, rightRef.current],
          { opacity: 0.7, duration: 1 }, 0)

        // Estado 2 → 3
        tl.to([leftNodeRef.current, centerRef.current],
          { opacity: 1, duration: 1 }, 1)
        tl.to(rightRef.current,
          { opacity: 1, fill: EMBER, duration: 1 }, 1)
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [])

  return (
    <section ref={sectionRef} style={{ backgroundColor: INK }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-20 pb-16">

        {/* Eyebrow */}
        <p className="font-body font-semibold uppercase mb-6"
          style={{ color: SAND, fontSize: "10px", letterSpacing: "0.18em" }}>
          COMO OPERAMOS
        </p>

        {/* H2 */}
        <h2 className="font-display"
          style={{ color: SAND, fontSize: "36px", fontWeight: 500, marginBottom: "24px", fontFamily: "var(--font-atyp-display), sans-serif" }}>
          A Pira Labs opera por sistema.
        </h2>

        {/* Corpo */}
        <p className="font-body font-light max-w-2xl"
          style={{ color: "rgba(232,224,214,0.8)", fontSize: "16px", lineHeight: 1.75, marginBottom: "64px", fontFamily: "var(--font-atyp-text), sans-serif" }}>
          Cada nó representa pessoas, processos, decisões, tecnologias e entregas. Quando não
          operam juntos, a empresa trabalha mais, decide pior e perde margem em silêncio.
        </p>

        {/* SVG — viewBox cortado para eliminar espaço vazio abaixo dos labels */}
        <svg viewBox="0 350 1920 330"
          style={{ width: "100%", height: "auto", display: "block" }}
          aria-hidden="true" focusable="false">

          {/* Nó esquerdo — anel: externo Sand + interno Ink (efeito donut) */}
          <g ref={leftNodeRef} opacity={0.4}>
            <circle cx={448} cy={540} r={49} fill={SAND} />
            <circle cx={448} cy={540} r={32} fill={INK} />
          </g>

          {/* Path 3 do Artboard_6 — nó central + conectores esq↔dir (elemento único) */}
          <path
            ref={centerRef}
            fill={SAND}
            opacity={0.4}
            d="M1008.93,546h-97.86c2.96,24.4,23.73,43.31,48.93,43.31s45.97-18.91,48.93-43.31M911.07,534h97.86c-2.96,-24.4,-23.73,-43.31,-48.93,-43.31s-45.97,18.91,-48.93,43.31M1009.31,540c0,2.03-.14,4.03-.38,6h413.69v-12h-413.69c.24,1.97.38,3.97.38,6M496.37,546h414.7c-.24,-1.97,-.38,-3.97,-.38,-6s.14,-4.03,.38,-6h-414.7v12Z"
          />

          {/* Nó direito — disco cheio · vira Ember no estado 3.
              Tudo via style para GSAP animar sem conflito com atributos SVG. */}
          <circle ref={rightRef} cx={1472} cy={540} r={49} style={{ fill: SAND, opacity: 0.4 }} />

          {/* Labels inline no SVG · Sand 60% */}
          <text x={448}  y={638} textAnchor="middle"
            fontFamily="var(--font-atyp-text),sans-serif" fontWeight={300} fontSize={20}
            fill="rgba(232,224,214,0.6)">Sistema disperso</text>
          <text x={960}  y={638} textAnchor="middle"
            fontFamily="var(--font-atyp-text),sans-serif" fontWeight={300} fontSize={20}
            fill="rgba(232,224,214,0.6)">Sistema em operação</text>
          <text x={1472} y={638} textAnchor="middle"
            fontFamily="var(--font-atyp-text),sans-serif" fontWeight={300} fontSize={20}
            fill="rgba(232,224,214,0.6)">Sistema pleno</text>
        </svg>

        {/* Descrições — grid 3 colunas, alinhadas visualmente aos nós */}
        <div className="grid grid-cols-3 gap-6" style={{ marginTop: "12px" }}>
          {LABELS.map(({ desc }, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p style={{ color: "rgba(232,224,214,0.5)", fontSize: "13px", lineHeight: 1.6, fontFamily: "var(--font-atyp-text), sans-serif", fontWeight: 300 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
