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
    <section ref={sectionRef} style={{ backgroundColor: INK, position: "relative", overflow: "hidden" }}>
      {/* Artboard KZ — nós sobre Ink, layer de fundo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <img
          src="/brand/Artboard_2.svg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.18,
          }}
        />
      </div>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-20 pb-16" style={{ position: "relative", zIndex: 1 }}>

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
          style={{ color: "#e8e0d6", fontSize: "16px", lineHeight: 1.75, marginBottom: "64px", fontFamily: "var(--font-atyp-text), sans-serif" }}>
          Cada nó representa pessoas, processos, decisões, tecnologias e entregas. Quando não
          operam juntos, a empresa trabalha mais, decide pior e perde margem em silêncio.
        </p>

          {/* Desktop */}
          <div className="hidden md:block" style={{ marginTop: "56px" }}>

            {/* SVG — apenas as formas, sem texto */}
            <svg viewBox="280 468 1380 148"
              style={{ width: "100%", height: "auto", display: "block" }}
              aria-hidden="true" focusable="false"
              xmlns="http://www.w3.org/2000/svg">
              <g ref={leftNodeRef} opacity={0.35}>
                <path fill={SAND} d="M480.14,540c0,17.71-14.36,32.07-32.07,32.07s-32.07-14.36-32.07-32.07,14.36-32.07,32.07-32.07,32.07,14.36,32.07,32.07M497.38,540c0-27.23-22.08-49.31-49.31-49.31s-49.31,22.08-49.31,49.31,22.07,49.31,49.31,49.31,49.31-22.07,49.31-49.31"/>
              </g>
              <g ref={centerRef} opacity={0.35}>
                <path fill={SAND} d="M1008.93,546h-97.86c2.96,24.4,23.73,43.31,48.93,43.31s45.97-18.91,48.93-43.31M911.07,534h97.86c-2.96-24.4-23.73-43.31-48.93-43.31s-45.97,18.91-48.93,43.31M1009.31,540c0,2.03-.14,4.03-.38,6h413.69v-12h-413.69c.24,1.97.38,3.97.38,6M496.37,546h414.7c-.24-1.97-.38-3.97-.38-6s.14-4.03.38-6h-414.7v12Z"/>
              </g>
              <path fill={EMBER} opacity={0.9} d="M1471.93,490.69c-27.23,0-49.31,22.08-49.31,49.31s22.08,49.31,49.31,49.31,49.31-22.07,49.31-49.31-22.08-49.31-49.31-49.31"/>
            </svg>

            {/* Labels e descrições em HTML — alinhamento CSS preciso */}
            <div className="grid grid-cols-3" style={{ marginTop: "16px" }}>
              {LABELS.map(({ label, desc }, i) => (
                <div key={i} style={{ textAlign: "center", padding: "0 12px" }}>
                  <p style={{
                    color: "#e8e0d6",
                    fontSize: "13px",
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                    marginBottom: "8px",
                    fontFamily: "var(--font-atyp-text), sans-serif",
                  }}>
                    {label}
                  </p>
                  <p style={{
                    color: "#e8e0d6",
                    fontSize: "12px",
                    lineHeight: 1.65,
                    fontFamily: "var(--font-atyp-text), sans-serif",
                    fontWeight: 300,
                  }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: três estados empilhados verticalmente — símbolos canônicos KZ */}
          {(() => {
            const MOBILE_SYMBOLS = [
              "/brand/INSPIRA_Ink_Sand.svg",
              "/brand/TRANSPIRA_Ink_Sand.svg",
              "/brand/RESPIRA_Ink_Sand.svg",
            ]
            return (
              <div className="flex flex-col gap-10 md:hidden" style={{ marginTop: "48px" }}>
                {LABELS.map(({ label, desc }, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div style={{ flexShrink: 0 }}>
                      <img
                        src={MOBILE_SYMBOLS[i]}
                        alt=""
                        aria-hidden="true"
                        width={64}
                        height={i === 0 ? 78 : 83}
                        style={{ display: "block" }}
                      />
                    </div>
                    <div style={{ paddingTop: "8px" }}>
                      <p style={{ color: SAND, fontSize: "13px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px", fontFamily: "var(--font-atyp-text), sans-serif" }}>
                        {label}
                      </p>
                      <p style={{ color: "#e8e0d6", fontSize: "15px", lineHeight: 1.7, fontFamily: "var(--font-atyp-text), sans-serif", fontWeight: 300 }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )
          })()}

      </div>
    </section>
  )
}
