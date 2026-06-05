"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"

/* Artboard 1 — geometria canônica KZ sobre Sand #e8e0d6.
   Os 2 pontos originalmente Ember (#ec6336) recoloridos para TealMid #1A5568.
   Anel fino (cls-1, era Ember stroke) → Ink 25% para respeitar Schindler: único Ember da seção é "Creative".
   Conectores estáticos, nós animados via GSAP usando className="hero-node" + querySelectorAll.
   prefers-reduced-motion: desabilita todo motion. */

export function HeroSection() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    console.log("prefersReducedMotion:", prefersReducedMotion)
    console.log("svgRef.current:", !!svgRef.current)
    // TEMP TEST: if (prefersReducedMotion || !svgRef.current) return

    const nodes = svgRef.current.querySelectorAll<SVGGElement>(".hero-node")
    console.log("nodes found:", nodes.length)
    const tweens: gsap.core.Tween[] = []
    console.log("gsap running")

    nodes.forEach((node) => {
      const dur = parseFloat(node.dataset.dur ?? "10")
      const dist = 6 + Math.random() * 2 // 6–8px

      tweens.push(
        gsap.to(node, {
          y: dist,
          duration: dur / 2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })
      )
    })

    return () => {
      tweens.forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      id="hero"
      aria-label="Pira Labs · Creative Business Turnaround"
      style={{ backgroundColor: "#e8e0d6", position: "relative", overflow: "visible" }}
    >
      {/* SVG camada de fundo — absoluto, lado direito, fora do fluxo do grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-8%",
          width: "65%",
          height: "120%",
          overflow: "visible",
          zIndex: 0,
        }}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: "100%", height: "100%" }}
          focusable="false"
        >
          {/* Conectores — estáticos, Ink 20% */}
          <g
            stroke="#05262e"
            strokeOpacity={0.2}
            strokeWidth={2}
            fill="none"
            strokeMiterlimit={10}
          >
            <line x1="266.12" y1="718.79" x2="1637.18" y2="357.56" />
            <line x1="271.34" y1="712.44" x2="943" y2="213.96" />
            <line x1="264.87" y1="720.88" x2="405.61" y2="301.43" />
            <line x1="417.91" y1="282.64" x2="696" y2="708.96" />
            <line x1="831" y1="741.96" x2="1624.87" y2="363.39" />
            <line x1="1319.78" y1="832.58" x2="976" y2="224.96" />
            <line x1="995" y1="206.96" x2="1625.8" y2="355.48" />
            <line x1="1321.66" y1="844.02" x2="1637.73" y2="363.39" />
          </g>

          {/* Nó 0 — disco Ink grande · cx≈250, cy≈727, r≈54 */}
          <g className="hero-node" data-dur="10">
            <path
              fill="#05262e"
              d="M304.75,727.04c0-30.03-24.34-54.37-54.37-54.37s-54.37,24.34-54.37,54.37,24.34,54.37,54.37,54.37,54.37-24.34,54.37-54.37"
            />
          </g>

          {/* Nó 1 — ponto Ink pequeno · cx≈1323, cy≈843, r≈16 */}
          <g className="hero-node" data-dur="8">
            <path
              fill="#05262e"
              d="M1339.05,843.11c0-8.92-7.23-16.15-16.15-16.15s-16.15,7.23-16.15,16.15,7.23,16.15,16.15,16.15,16.15-7.23,16.15-16.15"
            />
          </g>

          {/* Nó 2 — disco TealMid grande · cx≈1647, cy≈356, r≈58 · era Ember */}
          <g className="hero-node" data-dur="9">
            <path
              fill="#1A5568"
              d="M1705.23,356.45c0-32.33-26.21-58.54-58.54-58.54s-58.54,26.21-58.54,58.54,26.21,58.54,58.54,58.54,58.54-26.21,58.54-58.54"
            />
          </g>

          {/* Nó 3 — ponto TealMid pequeno · cx≈413, cy≈279, r≈22 · era Ember */}
          <g className="hero-node" data-dur="11">
            <path
              fill="#1A5568"
              d="M435.93,278.69c0-12.38-10.04-22.42-22.42-22.42s-22.42,10.04-22.42,22.42,10.04,22.42,22.42,22.42,22.42-10.04,22.42-22.42"
            />
          </g>

          {/* Nó 4 — anel fino · cx=749.77, cy=781.41, r=89.98 · Ink 25% */}
          <g className="hero-node" data-dur="12">
            <circle
              cx={749.77}
              cy={781.41}
              r={89.98}
              fill="none"
              stroke="#05262e"
              strokeOpacity={0.25}
              strokeWidth={2}
              strokeMiterlimit={10}
            />
          </g>

          {/* Nó 5 — anel grosso Ink · cx≈967, cy≈196, r≈30 · strokeWidth 9 */}
          <g className="hero-node" data-dur="8.5">
            <path
              fill="none"
              stroke="#05262e"
              strokeWidth={9}
              strokeMiterlimit={10}
              d="M997.75,195.82c0-16.74-13.57-30.3-30.3-30.3s-30.3,13.57-30.3,30.3,13.57,30.3,30.3,30.3,30.3-13.57,30.3-30.3Z"
            />
          </g>
        </svg>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12">

          {/* Texto — cols 1–7 · z-index 10 para ficar sempre acima do SVG */}
          <div className="col-span-full md:col-span-7" style={{ position: "relative", zIndex: 10 }}>

            {/* CBT headline — elemento próprio, acima do H1. Não é eyebrow. */}
            <p
              className="font-display font-bold mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
            >
              <span style={{ color: "#eb5c2e" }}>Creative</span>{" "}
              <span style={{ color: "#05262e" }}>Business Turnaround</span>
            </p>

            {/* H1 — AtypDisplay Bold 700 · Ink · line-height 1.1 */}
            <h1
              className="font-display font-bold"
              style={{
                color: "#05262e",
                fontSize: "clamp(42px, 5.5vw, 72px)",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Existe um momento em que transformar ainda é um processo, não uma crise.
            </h1>

            {/* Frase canônica — obrigatória nos primeiros 150 termos da home.
                AtypDisplay Light 300 · Ink 60% · 20px desktop / 17px mobile */}
            <p
              className="font-display font-light mb-10"
              style={{
                color: "rgba(5,38,46,0.6)",
                fontSize: "clamp(17px, 1.5vw, 20px)",
                lineHeight: 1.6,
              }}
            >
              A Pira Labs é uma consultoria boutique brasileira de Creative Business Turnaround para
              empresas de serviços que precisam transformar sinais fracos em decisão, proteger
              reputação e voltar a crescer com margem, antes que a janela se feche.
            </p>

            {/* CTA único — VER OS SINAIS → #sinais. Outline Ink 2px. */}
            <Link
              href="#sinais"
              className="inline-flex items-center justify-center min-h-[44px] font-body font-semibold uppercase transition-transform duration-150 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                border: "2px solid #05262e",
                color: "#05262e",
                backgroundColor: "transparent",
                fontSize: "13px",
                letterSpacing: "0.10em",
                padding: "16px 32px",
                borderRadius: "2px",
                boxShadow: "0 2px 8px rgba(5,38,46,0.15)",
              }}
            >
              VER OS SINAIS
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
