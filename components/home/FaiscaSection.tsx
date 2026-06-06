"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CTAButton } from '@/components/ui/CTAButton'

gsap.registerPlugin(ScrollTrigger)

/* HOME-6 · Faísca · fundo Sand #e8e0d6
   Lista vertical com divisores de categoria, numeração e hover por linha.
   GSAP ScrollTrigger: stagger 0.08s por grupo.
   Ember exclusivo: palavra "respirar" no H2. */

const INK      = "#05262e"
const TEAL_MID = "#1A5568"
const EMBER    = "#eb5c2e"

interface Product { num: string; name: string; price: string; href: string }

const GROUPS: { label: string; items: Product[] }[] = [
  {
    label: "ENTRADA RÁPIDA",
    items: [
      { num: "01", name: "Imersão em IA",       price: "R$7.100",              href: "/faisca/imersa-em-ia" },
      { num: "02", name: "Oxigênio",             price: "R$3.500 / R$5.300",   href: "/inspira/oxigenio" },
      { num: "03", name: "pocket do INSPIRA",    price: "R$3.900",             href: "/faisca/pocket" },
    ],
  },
  {
    label: "AUTORIDADE E RELACIONAMENTO",
    items: [
      { num: "04", name: "Palestras",            price: "sob consulta",         href: "/faisca" },
      { num: "05", name: "Workshops",            price: "a partir de R$12.500", href: "/faisca" },
    ],
  },
  {
    label: "OFERTA SELETIVA",
    items: [
      { num: "06", name: "C-level as a Service", price: "sob consulta",         href: "/faisca" },
      { num: "07", name: "Faísca Jurídica",      price: "sob consulta",         href: "/faisca/juridica" },
    ],
  },
]

function CategoryDivider({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "32px 0 16px" }}>
      <div style={{ flex: 1, height: "1.5px", background: TEAL_MID, opacity: 0.5 }} />
      <span style={{
        fontSize: "9px", fontWeight: 600, letterSpacing: "0.18em",
        textTransform: "uppercase", color: TEAL_MID, opacity: 0.8,
        whiteSpace: "nowrap", fontFamily: "var(--font-atyp-text)",
      }}>
        {label}
      </span>
      <div style={{ flex: 1, height: "1.5px", background: TEAL_MID, opacity: 0.5 }} />
    </div>
  )
}

function ProductRow({
  item,
  rowRef,
}: {
  item: Product
  rowRef: (el: HTMLAnchorElement | null) => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={item.href}
      ref={rowRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "36px 1fr auto 20px",
        gap: "20px",
        padding: "22px 0",
        borderBottom: "1px solid rgba(5,38,46,0.1)",
        position: "relative",
        overflow: "hidden",
        textDecoration: "none",
        alignItems: "center",
      }}
    >
      {/* Overlay slide-in da esquerda */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(5,38,46,0.035)",
        transform: hovered ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.35s ease",
        pointerEvents: "none",
      }} />

      {/* Número */}
      <span style={{
        fontFamily: "var(--font-atyp-text)",
        fontWeight: 600,
        fontSize: "10px",
        color: TEAL_MID,
        letterSpacing: "0.08em",
      }}>
        {item.num}
      </span>

      {/* Nome */}
      <span style={{
        fontFamily: "var(--font-atyp-display)",
        fontWeight: 400,
        fontSize: "clamp(28px, 3vw, 48px)",
        color: INK,
        letterSpacing: hovered ? "-0.015em" : "-0.02em",
        transition: "letter-spacing 0.35s",
      }}>
        {item.name}
      </span>

      {/* Preço */}
      <span style={{
        fontFamily: "var(--font-atyp-text)",
        fontWeight: 300,
        fontSize: "13px",
        color: "rgba(5,38,46,0.38)",
        textAlign: "right",
        whiteSpace: "nowrap",
      }}>
        {item.price}
      </span>

      {/* Seta */}
      <span style={{
        fontSize: "16px",
        color: hovered ? TEAL_MID : "rgba(5,38,46,0.2)",
        transform: hovered ? "translateX(5px)" : "translateX(0)",
        transition: "color 0.25s, transform 0.25s",
      }}>
        →
      </span>
    </Link>
  )
}

export function FaiscaSection() {
  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    let raf1: number, raf2: number

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const all = rowRefs.current.filter(Boolean)

        if (reduced) {
          gsap.set(all, { opacity: 1, y: 0 })
          return
        }

        gsap.set(all, { opacity: 0, y: 16 })

        // Stagger por grupo: linhas 0-2 | 3-4 | 5-6
        const groupBounds: [number, number][] = [[0, 3], [3, 5], [5, 7]]

        groupBounds.forEach(([start, end]) => {
          const rows = rowRefs.current.slice(start, end).filter(Boolean)
          if (!rows.length || !rows[0]) return
          gsap.to(rows, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rows[0],
              start: "top 80%",
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

  let globalIdx = 0

  return (
    <section style={{ backgroundColor: "#e8e0d6" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 pt-12 md:pt-20 pb-12 md:pb-20">

        {/* Eyebrow */}
        <p style={{
          fontFamily: "var(--font-atyp-text)",
          fontWeight: 600,
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(5,38,46,0.45)",
          marginBottom: "24px",
        }}>
          PORTAS DE ENTRADA
        </p>

        {/* H2 */}
        <h2 style={{
          fontFamily: "var(--font-atyp-display)",
          fontWeight: 300,
          fontSize: "clamp(44px, 5vw, 68px)",
          lineHeight: 1.1,
          letterSpacing: "-0.015em",
          color: INK,
          marginBottom: "72px",
        }}>
          Entradas diferentes.<br />
          O mesmo destino:{" "}
          <span style={{ color: EMBER, fontWeight: 600 }}>respirar.</span>
        </h2>

        {/* Lista de produtos */}
        {GROUPS.map((group) => (
          <div key={group.label}>
            <CategoryDivider label={group.label} />
            {group.items.map((item) => {
              const idx = globalIdx++
              return (
                <ProductRow
                  key={item.num}
                  item={item}
                  rowRef={(el) => { rowRefs.current[idx] = el }}
                />
              )
            })}
          </div>
        ))}

        {/* CTA */}
        <div style={{ marginTop: "56px", display: "flex", justifyContent: "center" }}>
          <CTAButton href="/faisca" label="VER TODAS AS PORTAS DE ENTRADA" theme="light" />
        </div>

      </div>
    </section>
  )
}
