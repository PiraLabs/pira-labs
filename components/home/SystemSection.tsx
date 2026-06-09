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
  const centerRef   = useRef<SVGGElement>(null)
  const rightRef    = useRef<SVGCircleElement>(null)

  useEffect(() => {
    let raf1: number, raf2: number

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

        if (reduced) {
          gsap.set(leftNodeRef.current,  { opacity: 1 })
          gsap.set(centerRef.current,    { opacity: 1 })
          gsap.set(rightRef.current,     { opacity: 1, fill: EMBER })
          return
        }

        // Fase 1 — seção entra na viewport: acende nós esquerdo e centro
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
          onEnter: () => {
            gsap.to([leftNodeRef.current, centerRef.current], {
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            })
          },
        })

        // Fase 2 — seção mais visível: acende RESPIRA em Ember e trava
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 35%",
          once: true,
          onEnter: () => {
            gsap.to(rightRef.current, {
              opacity: 1,
              fill: EMBER,
              duration: 1.2,
              ease: "power3.out",
            })
          },
        })
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      ScrollTrigger.getAll().forEach(t => t.kill())
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
          style={{ color: SAND, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, marginBottom: "24px", fontFamily: "var(--font-atyp-display), sans-serif" }}>
          A Pira Labs opera por sistema.
        </h2>

        {/* Corpo */}
        <p className="font-body font-light max-w-2xl"
          style={{ color: "rgba(232,224,214,0.8)", fontSize: "16px", lineHeight: 1.75, marginBottom: "64px", fontFamily: "var(--font-atyp-text), sans-serif" }}>
          Cada nó representa pessoas, processos, decisões, tecnologias e entregas. Quando não
          operam juntos, a empresa trabalha mais, decide pior e perde margem em silêncio.
        </p>

          {/* Desktop: SVG com geometria exata do Artboard_6 reescalonado */}
          <div className="hidden md:block" style={{ marginTop: "56px" }}>
            <svg viewBox="300 455 1320 250"
              style={{ width: "100%", height: "auto", display: "block" }}
              aria-hidden="true" focusable="false">

                {/* Conectores — rects simples, renderizados antes dos nós para ficarem por baixo */}
                <g opacity={0.2}>
                  <rect x={510} y={534} width={388} height={12} fill={SAND} rx={6} />
                  <rect x={1022} y={534} width={388} height={12} fill={SAND} rx={6} />
                </g>

                {/* Nó esquerdo — anel donut r=62 */}
                <g ref={leftNodeRef} opacity={0.35}>
                  <circle cx={448} cy={540} r={62} fill={SAND} />
                  <circle cx={448} cy={540} r={42} fill={INK} />
                </g>

                {/* Nó centro — duas meias-luas r=62 desenhadas do zero, centradas em 960,540 */}
                <g ref={centerRef} opacity={0.35}>
                  {/* Meia-lua superior: arco de 180° abrindo para cima */}
                  <path fill={SAND}
                    d="M898,540 A62,62 0 0,1 1022,540 L1010,540 A50,50 0 0,0 910,540 Z"
                  />
                  {/* Meia-lua inferior: arco de 180° abrindo para baixo */}
                  <path fill={SAND}
                    d="M898,540 A62,62 0 0,0 1022,540 L1010,540 A50,50 0 0,1 910,540 Z"
                  />
                </g>

                {/* Nó direito — disco sólido r=62, vira Ember */}
                <circle ref={rightRef} cx={1472} cy={540} r={62}
                  style={{ fill: SAND, opacity: 0.35 }} />

                {/* Labels centralizados em cada nó */}
                <text x={448}  y={650} textAnchor="middle"
                  fontFamily="var(--font-atyp-text),sans-serif" fontWeight={300} fontSize={24}
                  fill="rgba(232,224,214,0.55)">Sistema disperso</text>
                <text x={960}  y={650} textAnchor="middle"
                  fontFamily="var(--font-atyp-text),sans-serif" fontWeight={300} fontSize={24}
                  fill="rgba(232,224,214,0.55)">Sistema em operação</text>
                <text x={1472} y={650} textAnchor="middle"
                  fontFamily="var(--font-atyp-text),sans-serif" fontWeight={300} fontSize={24}
                  fill="rgba(232,224,214,0.55)">Sistema pleno</text>
              </svg>

            <div className="grid grid-cols-3 gap-8" style={{ marginTop: "16px" }}>
              {LABELS.map(({ desc }, i) => (
                <div key={i} style={{ textAlign: "center", padding: "0 16px" }}>
                  <p style={{ color: "rgba(232,224,214,0.45)", fontSize: "13px", lineHeight: 1.7,
                    fontFamily: "var(--font-atyp-text), sans-serif", fontWeight: 300 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: três estados empilhados verticalmente */}
          <div className="flex flex-col gap-10 md:hidden" style={{ marginTop: "48px" }}>
            {LABELS.map(({ label, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div style={{ flexShrink: 0, marginTop: "4px" }}>
                  {i === 2 ? (
                    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                      <circle cx={16} cy={16} r={16} fill={EMBER} />
                    </svg>
                  ) : i === 0 ? (
                    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                      <circle cx={16} cy={16} r={16} fill={SAND} opacity={0.4} />
                      <circle cx={16} cy={16} r={10} fill={INK} />
                    </svg>
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                      <circle cx={16} cy={16} r={16} fill={SAND} opacity={0.7} />
                    </svg>
                  )}
                </div>
                <div>
                  <p style={{ color: SAND, fontSize: "13px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px", fontFamily: "var(--font-atyp-text), sans-serif" }}>
                    {label}
                  </p>
                  <p style={{ color: "rgba(232,224,214,0.6)", fontSize: "15px", lineHeight: 1.7, fontFamily: "var(--font-atyp-text), sans-serif", fontWeight: 300 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

      </div>
    </section>
  )
}
