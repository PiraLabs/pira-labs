"use client"

import { useEffect, useRef, useState } from "react"
import type { CSSProperties } from "react"

/* HOME-9 · Antes, Pira · fundo Sand #e8e0d6
   Imagem /H9.png na metade direita com gradiente de transição.
   RSS do Substack com fallback hardcoded (4 posts).
   font-body = alias para var(--font-atyp-text) no tailwind.config. */

interface Post {
  titulo: string
  data: string
  url: string
  imagem: string | null
}

const POSTS_FALLBACK: Post[] = [
  {
    titulo: "O negócio que não consegue parar de apagar incêndio",
    data: "Mai 2026",
    url: "https://piralabs.substack.com",
    imagem: null,
  },
  {
    titulo: "Quando a IA entra pela ferramenta, não pelo fluxo",
    data: "Abr 2026",
    url: "https://piralabs.substack.com",
    imagem: null,
  },
  {
    titulo: "O sinal que o fundador aprende a ignorar",
    data: "Mar 2026",
    url: "https://piralabs.substack.com",
    imagem: null,
  },
  {
    titulo: "Crescimento sem margem não é crescimento",
    data: "Fev 2026",
    url: "https://piralabs.substack.com",
    imagem: null,
  },
]

function parseRSS(xml: string): Post[] {
  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(xml, "text/xml")
    const items = Array.from(doc.querySelectorAll("item")).slice(0, 4)
    return items.map((item) => {
      const titulo = item.querySelector("title")?.textContent?.trim() ?? ""
      const url = item.querySelector("link")?.textContent?.trim() ?? "https://piralabs.substack.com"
      const pubDate = item.querySelector("pubDate")?.textContent?.trim() ?? ""
      const enclosure = item.querySelector("enclosure")
      const mediaThumbnail = item.getElementsByTagNameNS("http://search.yahoo.com/mrss/", "thumbnail")[0]
      const imgMatch = item.querySelector("description")?.textContent?.match(/<img[^>]+src=["']([^"']+)["']/i)
      const imagem =
        enclosure?.getAttribute("url") ??
        mediaThumbnail?.getAttribute("url") ??
        imgMatch?.[1] ??
        null
      const date = pubDate ? new Date(pubDate) : null
      const data = date ? date.toLocaleDateString("pt-BR", { month: "short", year: "numeric" }) : ""
      return { titulo, data, url, imagem }
    })
  } catch {
    return []
  }
}

export function EditorialSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)
  const [posts, setPosts] = useState<Post[]>(POSTS_FALLBACK)

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

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const proxy = "https://api.allorigins.win/get?url="
        const feed = encodeURIComponent("https://piralabs.substack.com/feed")
        const res = await fetch(`${proxy}${feed}`, { signal: AbortSignal.timeout(5000) })
        if (!res.ok) throw new Error("fetch failed")
        const json = await res.json()
        const parsed = parseRSS(json.contents)
        if (parsed.length > 0) setPosts(parsed)
      } catch {
        // silently fall back
      }
    }
    fetchRSS()
  }, [])

  const entry = (delay: string): CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}`,
  })

  return (
    <section
      ref={sectionRef}
      id="antes-pira"
      aria-label="Antes, Pira"
      style={{ position: "relative", backgroundColor: "#e8e0d6", overflow: "hidden" }}
    >
      {/* Imagem de fundo — metade direita */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "46%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <img
          src="/H9.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
          loading="lazy"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #e8e0d6 0%, #e8e0d6 8%, rgba(232,224,214,0.85) 24%, rgba(232,224,214,0) 52%)",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #e8e0d6 0%, rgba(232,224,214,0) 8%, rgba(232,224,214,0) 92%, #e8e0d6 100%)",
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
        {/* Título da publicação */}
        <div style={{ ...entry("0s"), marginBottom: "48px" }}>
          <p
            className="font-display font-bold"
            style={{
              fontSize: "clamp(52px, 7vw, 96px)",
              fontWeight: 700,
              color: "#05262e",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Antes<span style={{ color: "#eb5c2e" }}>,</span> Pira
          </p>
        </div>

        {/* H2 + descrição */}
        <div style={{ ...entry("0.08s"), marginBottom: "72px" }}>
          <h2
            className="font-display font-medium leading-tight"
            style={{
              fontSize: "clamp(44px, 5vw, 68px)",
              color: "#05262e",
              letterSpacing: "-0.02em",
            }}
          >
            Para quem prefere decidir<br />
            <span style={{ color: "#eb5c2e" }}>antes</span>{" "}
            que a crise decida.
          </h2>
          <p
            className="font-body font-light"
            style={{
              fontSize: "19px",
              color: "rgba(5,38,46,0.65)",
              marginTop: "24px",
              maxWidth: "400px",
              lineHeight: 1.8,
            }}
          >
            Gabriela Aguiar e Celso Gama escrevem sobre o intervalo em que mudar ainda é uma
            escolha, e o que fazer com ele.
          </p>
        </div>

        {/* Posts */}
        <div style={{ marginBottom: "72px" }}>
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                textDecoration: "none",
                borderTop: "1px solid rgba(5,38,46,0.15)",
                padding: "24px 0",
                paddingLeft: hoveredPost === i ? "12px" : "0",
                transition: "padding-left 0.35s cubic-bezier(0.16,1,0.3,1)",
                ...entry(`${0.18 + i * 0.07}s`),
              }}
              onMouseEnter={() => setHoveredPost(i)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {post.imagem && (
                <div style={{
                  width: "64px",
                  height: "64px",
                  flexShrink: 0,
                  overflow: "hidden",
                  borderRadius: "2px",
                  opacity: hoveredPost === i ? 1 : 0.7,
                  transition: "opacity 0.25s",
                }}>
                  <img
                    src={post.imagem}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              )}
              <div style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "24px",
              }}>
                <p
                  className="font-display"
                  style={{
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: 400,
                    color: hoveredPost === i ? "#05262e" : "rgba(5,38,46,0.8)",
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                    transition: "color 0.25s",
                  }}
                >
                  {post.titulo}
                  <span style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    opacity: hoveredPost === i ? 1 : 0,
                    transform: hoveredPost === i ? "translateX(0)" : "translateX(-8px)",
                    transition: "opacity 0.25s, transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                  }}>→</span>
                </p>
                <p
                  className="font-body font-light"
                  style={{
                    fontSize: "13px",
                    color: "rgba(5,38,46,0.4)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {post.data}
                </p>
              </div>
            </a>
          ))}
          <div style={{ borderTop: "1px solid rgba(5,38,46,0.15)" }} />
        </div>

        {/* CTAs */}
        <div style={{
          ...entry("0.52s"),
          display: "flex",
          alignItems: "center",
          gap: "32px",
          flexWrap: "wrap",
        }}>
          <a
            href="/antes-pira"
            className="font-body font-semibold uppercase tracking-widest"
            style={{
              fontSize: "13px",
              color: "#e8e0d6",
              textDecoration: "none",
              backgroundColor: "#05262e",
              padding: "14px 28px",
              borderRadius: "2px",
              letterSpacing: "0.08em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            LER: ANTES<span style={{ color: "#eb5c2e" }}>,</span> PIRA
          </a>
          <a
            href="https://piralabs.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-light"
            style={{
              fontSize: "13px",
              color: "rgba(5,38,46,0.45)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#05262e")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(5,38,46,0.45)")}
          >
            Abrir no Substack ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          #antes-pira [aria-hidden="true"] {
            position: relative !important;
            width: 100% !important;
            height: 260px !important;
            top: auto !important;
            right: auto !important;
          }
          #antes-pira > div:last-of-type {
            padding: 56px 24px 80px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          #antes-pira * {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
