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
            <svg viewBox="0 430 1920 280"
              style={{ width: "100%", height: "auto", display: "block" }}
              aria-hidden="true" focusable="false">

              {/* Nó esquerdo — anel donut */}
              <g ref={leftNodeRef} opacity={0.35}>
                <circle cx={448} cy={540} r={49} fill={SAND} />
                <circle cx={448} cy={540} r={32} fill={INK} />
              </g>

              {/* Nó centro + conectores — path exato do Artboard_6 */}
              <g ref={centerRef} opacity={0.35}>
                <path fill={SAND}
                  d="M1008.93,546h-97.86c2.96,24.4,23.73,43.31,48.93,43.31s45.97-18.91,48.93-43.31M911.07,534h97.86c-2.96-24.4-23.73-43.31-48.93-43.31s-45.97,18.91-48.93,43.31M1009.31,540c0,2.03-.14,4.03-.38,6h413.69v-12h-413.69c.24,1.97.38,3.97.38,6M496.37,546h414.7c-.24-1.97-.38-3.97-.38-6s.14-4.03.38-6h-414.7v12Z"
                />
              </g>

              {/* Nó direito — disco sólido, vira Ember */}
              <circle ref={rightRef} cx={1472} cy={540} r={49}
                style={{ fill: SAND, opacity: 0.35 }} />

              {/* Labels */}
              <text x={448}  y={638} textAnchor="middle"
                fontFamily="var(--font-atyp-text),sans-serif" fontWeight={300} fontSize={22}
                fill="rgba(232,224,214,0.55)">Sistema disperso</text>
              <text x={960}  y={638} textAnchor="middle"
                fontFamily="var(--font-atyp-text),sans-serif" fontWeight={300} fontSize={22}
                fill="rgba(232,224,214,0.55)">Sistema em operação</text>
              <text x={1472} y={638} textAnchor="middle"
                fontFamily="var(--font-atyp-text),sans-serif" fontWeight={300} fontSize={22}
                fill="rgba(232,224,214,0.55)">Sistema pleno</text>
            </svg>

            <div className="grid grid-cols-3 gap-8" style={{ marginTop: "8px" }}>
              {LABELS.map(({ desc }, i) => (
                <div key={i} style={{ textAlign: "center", padding: "0 8px" }}>
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
