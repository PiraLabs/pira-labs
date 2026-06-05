"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/* HOME-6 · Faísca teaser · fundo Sand #e8e0d6
   3 colunas tipográficas sem símbolos.
   GSAP ScrollTrigger: cada coluna entra com opacity 0→1, y 24→0, escalonado.
   Sem Ember. Sem SVG. */

const INK      = "#05262e"
const SAND     = "#e8e0d6"
const TEAL_MID = "#1A5568"

const GROUPS = [
  {
    label: "ENTRADA RÁPIDA",
    items: [
      { name: "Imersão em IA",      detail: "R$7.100" },
      { name: "Oxigênio",           detail: "R$3.500 / R$5.300" },
      { name: "pocket do INSPIRA",  detail: "R$3.900" },
    ],
  },
  {
    label: "AUTORIDADE E RELACIONAMENTO",
    items: [
      { name: "Palestras",   detail: "sob consulta" },
      { name: "Workshops",   detail: "a partir de R$12.500" },
    ],
  },
  {
    label: "OFERTA SELETIVA",
    items: [
      { name: "C-level as a Service", detail: "sob consulta" },
      { name: "Faísca Jurídica",      detail: "sob consulta" },
    ],
  },
]

export function FaiscaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const col0 = useRef<HTMLDivElement>(null)
  const col1 = useRef<HTMLDivElement>(null)
  const col2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf1: number, raf2: number

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const cols = [col0.current, col1.current, col2.current]

        if (reduced) {
          gsap.set(cols, { opacity: 1, y: 0 })
          return
        }

        gsap.set(cols, { opacity: 0, y: 24 })

        cols.forEach((col, i) => {
          gsap.to(col, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          })
        })
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [])

  return (
    <section ref={sectionRef} style={{ backgroundColor: SAND }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-20 pb-16">

        {/* Eyebrow */}
        <p style={{
          fontFamily: "var(--font-atyp-text)",
          fontWeight: 600,
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: INK,
          marginBottom: "24px",
        }}>
          PORTAS DE ENTRADA
        </p>

        {/* H2 */}
        <h2 style={{
          fontFamily: "var(--font-atyp-display), sans-serif",
          fontWeight: 500,
          fontSize: "36px",
          lineHeight: 1.2,
          color: INK,
          marginBottom: "56px",
        }}>
          Nem todo problema pede o mesmo começo.
        </h2>

        {/* Três colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

          {/* Coluna 1 */}
          <div ref={col0} style={{ paddingRight: "48px", paddingBottom: "40px" }}>
            <div style={{ borderTop: "1px solid rgba(5,38,46,0.15)", paddingTop: "24px" }}>
              <p style={{
                fontFamily: "var(--font-atyp-text), sans-serif",
                fontWeight: 600,
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: TEAL_MID,
                marginBottom: "24px",
              }}>
                {GROUPS[0].label}
              </p>
              {GROUPS[0].items.map((item) => (
                <div key={item.name}>
                  <p style={{
                    fontFamily: "var(--font-atyp-display), sans-serif",
                    fontWeight: 400,
                    fontSize: "22px",
                    color: INK,
                    marginBottom: "4px",
                  }}>
                    {item.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-atyp-text), sans-serif",
                    fontWeight: 300,
                    fontSize: "13px",
                    color: "rgba(5,38,46,0.45)",
                    marginBottom: "20px",
                  }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 2 */}
          <div ref={col1} style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "40px" }}>
            <div style={{ borderTop: "1px solid rgba(5,38,46,0.15)", paddingTop: "24px" }}>
              <p style={{
                fontFamily: "var(--font-atyp-text), sans-serif",
                fontWeight: 600,
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: TEAL_MID,
                marginBottom: "24px",
              }}>
                {GROUPS[1].label}
              </p>
              {GROUPS[1].items.map((item) => (
                <div key={item.name}>
                  <p style={{
                    fontFamily: "var(--font-atyp-display), sans-serif",
                    fontWeight: 400,
                    fontSize: "22px",
                    color: INK,
                    marginBottom: "4px",
                  }}>
                    {item.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-atyp-text), sans-serif",
                    fontWeight: 300,
                    fontSize: "13px",
                    color: "rgba(5,38,46,0.45)",
                    marginBottom: "20px",
                  }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 3 */}
          <div ref={col2} style={{ paddingLeft: "48px", paddingBottom: "40px" }}>
            <div style={{ borderTop: "1px solid rgba(5,38,46,0.15)", paddingTop: "24px" }}>
              <p style={{
                fontFamily: "var(--font-atyp-text), sans-serif",
                fontWeight: 600,
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: TEAL_MID,
                marginBottom: "24px",
              }}>
                {GROUPS[2].label}
              </p>
              {GROUPS[2].items.map((item) => (
                <div key={item.name}>
                  <p style={{
                    fontFamily: "var(--font-atyp-display), sans-serif",
                    fontWeight: 400,
                    fontSize: "22px",
                    color: INK,
                    marginBottom: "4px",
                  }}>
                    {item.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-atyp-text), sans-serif",
                    fontWeight: 300,
                    fontSize: "13px",
                    color: "rgba(5,38,46,0.45)",
                    marginBottom: "20px",
                  }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div style={{ marginTop: "48px", display: "flex", justifyContent: "center" }}>
          <Link
            href="/faisca"
            className="inline-flex items-center justify-center min-h-[44px] transition-transform duration-150 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              border: `2px solid ${INK}`,
              color: INK,
              backgroundColor: "transparent",
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              padding: "16px 32px",
              borderRadius: "2px",
              boxShadow: "0 2px 8px rgba(5,38,46,0.15)",
              textDecoration: "none",
            }}
          >
            VER TODAS AS PORTAS DE ENTRADA
          </Link>
        </div>

      </div>
    </section>
  )
}
