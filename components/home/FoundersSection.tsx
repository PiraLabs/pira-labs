"use client"

import { useEffect, useRef, useState } from "react"
import type { CSSProperties } from "react"
import Image from "next/image"

/* HOME-8 · Fundadores · fundo Teal #004757
   Imagem /nos2.png na metade direita com gradiente de transição.
   Fade-in por IntersectionObserver.
   font-body = alias para var(--font-atyp-text) no tailwind.config. */

export function FoundersSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const entry = (delay: string): CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}`,
  })

  return (
    <section
      ref={sectionRef}
      id="fundadores"
      aria-label="Fundadores"
      style={{ position: "relative", backgroundColor: "#004757", overflow: "hidden" }}
    >
      {/* Imagem de fundo — metade direita */}
      <div
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "52%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Image
          src="/nos2.png"
          alt=""
          fill
          sizes="52vw"
          quality={80}
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #004757 0%, rgba(0,71,87,0.95) 8%, rgba(0,71,87,0.5) 18%, rgba(0,71,87,0) 28%)",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #004757 0%, rgba(0,71,87,0) 8%, rgba(0,71,87,0) 92%, #004757 100%)",
        }} />
      </div>

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
        <div style={{ ...entry("0s"), maxWidth: "580px", marginBottom: "80px" }}>
          <p
            className="font-body font-semibold uppercase tracking-widest"
            style={{ fontSize: "10px", color: "rgba(245,245,242,0.5)", marginBottom: "16px" }}
          >
            QUEM CONDUZ
          </p>
          <h2
            className="font-display font-medium leading-tight"
            style={{ fontSize: "clamp(48px, 5.5vw, 80px)", color: "#F5F5F2" }}
          >
            Consultoria <span style={{ color: "#eb5c2e" }}>boutique</span> por decisão.
          </h2>
          <p
            className="font-body font-light"
            style={{
              fontSize: "17px",
              color: "rgba(245,245,242,0.65)",
              marginTop: "24px",
              maxWidth: "480px",
              lineHeight: 1.75,
            }}
          >
            Cada projeto tem Gabriela e Celso do diagnóstico à entrega. Sem camada intermediária
            entre quem entende o problema e quem resolve.
          </p>
        </div>

        {/* Fundadores — coluna única com separador */}
        <div style={{ maxWidth: "520px" }}>

          {/* Gabriela */}
          <div style={{ ...entry("0.15s"), paddingBottom: "48px", borderBottom: "1px solid rgba(245,245,242,0.1)" }}>
            <p
              className="font-display font-semibold"
              style={{ fontSize: "22px", color: "#F5F5F2", marginBottom: "14px", letterSpacing: "-0.01em" }}
            >
              Gabriela Aguiar
            </p>
            <p
              className="font-body font-light leading-relaxed"
              style={{ fontSize: "17px", color: "rgba(245,245,242,0.72)", marginBottom: "20px" }}
            >
              Lê o que a empresa não está conseguindo nomear. Conduz o INSPIRA: cruza mercado,
              tecnologia, ecossistema e decisão para identificar onde o modelo de trabalho começou
              a custar caro.
            </p>
            <p
              className="font-body font-light"
              style={{ fontSize: "14px", color: "rgba(245,245,242,0.45)", lineHeight: 1.7, marginBottom: "20px" }}
            >
              Docente em educação executiva.{" "}
              Universal AI Foundational Modules (MIT).
            </p>
            <a
              href="/sobre"
              className="font-body font-light"
              style={{
                fontSize: "13px",
                color: "rgba(245,245,242,0.5)",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,242,0.5)")}
            >
              Conhecer Gabriela →
            </a>
          </div>

          {/* Celso */}
          <div style={{ ...entry("0.28s"), paddingTop: "48px" }}>
            <p
              className="font-display font-semibold"
              style={{ fontSize: "22px", color: "#F5F5F2", marginBottom: "14px", letterSpacing: "-0.01em" }}
            >
              Celso Gama
            </p>
            <p
              className="font-body font-light leading-relaxed"
              style={{ fontSize: "17px", color: "rgba(245,245,242,0.72)", marginBottom: "20px" }}
            >
              Entra quando o diagnóstico precisa virar movimento. Conduz o TRANSPIRA: reorganiza
              trabalho, margem, cadência e execução até o resultado ser verificável.
            </p>
            <p
              className="font-body font-light"
              style={{ fontSize: "14px", color: "rgba(245,245,242,0.45)", lineHeight: 1.7, marginBottom: "20px" }}
            >
              Bacharelando em Direito (Mackenzie).{" "}
              Applied AI Certificate Program (MIT).
            </p>
            <a
              href="/sobre"
              className="font-body font-light"
              style={{
                fontSize: "13px",
                color: "rgba(245,245,242,0.5)",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,242,0.5)")}
            >
              Conhecer Celso →
            </a>
          </div>

        </div>
      </div>

      {/* Mobile */}
      <style>{`
        @media (max-width: 767px) {
          #fundadores [aria-hidden="true"] {
            position: relative !important;
            width: 100% !important;
            height: 280px !important;
            top: auto !important;
            right: auto !important;
          }
          #fundadores > div:last-of-type {
            padding: 56px 24px 80px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          #fundadores * {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
