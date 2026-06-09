"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function HeroSVGClient() {
  const svgRef = useRef<SVGSVGElement>(null)
  const tweensRef = useRef<gsap.core.Tween[]>([])

  useEffect(() => {
    let raf1: number, raf2: number

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (prefersReducedMotion || !svgRef.current) return

        const nodes = svgRef.current.querySelectorAll<SVGGElement>(".hero-node")

        nodes.forEach((node) => {
          const dur = parseFloat(node.dataset.dur ?? "10")
          const distY = 14 + Math.random() * 4
          const distX = 4 + Math.random() * 2

          tweensRef.current.push(
            gsap.to(node, {
              y: distY,
              x: distX,
              duration: dur / 2,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
            })
          )
        })
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      tweensRef.current.forEach((t) => t.kill())
      tweensRef.current = []
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        right: "-8%",
        width: "65%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
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
        <g stroke="#05262e" strokeOpacity={0.2} strokeWidth={2} fill="none" strokeMiterlimit={10}>
          <line x1="266.12" y1="718.79" x2="1637.18" y2="357.56" />
          <line x1="271.34" y1="712.44" x2="943" y2="213.96" />
          <line x1="264.87" y1="720.88" x2="405.61" y2="301.43" />
          <line x1="417.91" y1="282.64" x2="696" y2="708.96" />
          <line x1="831" y1="741.96" x2="1624.87" y2="363.39" />
          <line x1="1319.78" y1="832.58" x2="976" y2="224.96" />
          <line x1="995" y1="206.96" x2="1625.8" y2="355.48" />
          <line x1="1321.66" y1="844.02" x2="1637.73" y2="363.39" />
        </g>

        <g className="hero-node" data-dur="10">
          <path fill="#05262e" d="M304.75,727.04c0-30.03-24.34-54.37-54.37-54.37s-54.37,24.34-54.37,54.37,24.34,54.37,54.37,54.37,54.37-24.34,54.37-54.37" />
        </g>

        <g className="hero-node" data-dur="8">
          <path fill="#05262e" d="M1339.05,843.11c0-8.92-7.23-16.15-16.15-16.15s-16.15,7.23-16.15,16.15,7.23,16.15,16.15,16.15,16.15-7.23,16.15-16.15" />
        </g>

        <g className="hero-node" data-dur="9">
          <path fill="#eb5c2e" d="M1705.23,356.45c0-32.33-26.21-58.54-58.54-58.54s-58.54,26.21-58.54,58.54,26.21,58.54,58.54,58.54,58.54-26.21,58.54-58.54" />
        </g>

        <g className="hero-node" data-dur="11">
          <path fill="#1A5568" d="M435.93,278.69c0-12.38-10.04-22.42-22.42-22.42s-22.42,10.04-22.42,22.42,10.04,22.42,22.42,22.42,22.42-10.04,22.42-22.42" />
        </g>

        <g className="hero-node" data-dur="12">
          <circle cx={749.77} cy={781.41} r={89.98} fill="none" stroke="#05262e" strokeOpacity={0.25} strokeWidth={2} strokeMiterlimit={10} />
        </g>

        <g className="hero-node" data-dur="8.5">
          <path fill="none" stroke="#05262e" strokeWidth={9} strokeMiterlimit={10} d="M997.75,195.82c0-16.74-13.57-30.3-30.3-30.3s-30.3,13.57-30.3,30.3,13.57,30.3,30.3,30.3,30.3-13.57,30.3-30.3Z" />
        </g>
      </svg>
    </div>
  )
}
