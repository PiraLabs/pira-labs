import { buscarPostsSubstack } from "@/lib/substack-rss"

/* HOME-9 · Antes, Pira · fundo Teal #004757
   Server component async · fetch RSS via lib/substack-rss (revalidate 3600)
   Sem imagem decorativa (Eixo 2) · sem posts hardcoded (v15: não inventar)
   Hover por CSS puro · um Ember: a vírgula de "Antes, Pira" (#eb5c2e sobre Teal)
   Fallback feed vazio: sem cards, só link do Substack */

const TEAL = "#004757"
const WHITE = "#F5F5F2"
const SAND = "#e8e0d6"
const TAUPE = "#b0a596"
const EMBER = "#eb5c2e"

export async function EditorialSection() {
  const posts = await buscarPostsSubstack(4)

  return (
    <section
      id="antes-pira"
      aria-label="Antes, Pira"
      style={{ backgroundColor: TEAL }}
    >
      <div className="container-site" style={{ paddingTop: "clamp(4rem, 8vw, 7rem)", paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
        <div style={{ maxWidth: "720px" }}>
          {/* Wordmark da publicação */}
          <p
            style={{
              fontFamily: "var(--font-atyp-display), serif",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.035em",
              color: WHITE,
              margin: "0 0 2rem 0",
            }}
          >
            Antes<span style={{ color: EMBER }}>,</span> Pira
          </p>

          {/* H2 tagline */}
          <h2
            style={{
              fontFamily: "var(--font-atyp-display), serif",
              fontSize: "clamp(30px, 4.4vw, 48px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: WHITE,
              margin: "0 0 1.5rem 0",
            }}
          >
            Para quem prefere decidir antes que a crise decida.
          </h2>

          {/* Descrição */}
          <p
            style={{
              fontFamily: "var(--font-atyp-text), sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.6,
              color: SAND,
              maxWidth: "560px",
              margin: "0 0 clamp(2.5rem, 5vw, 4rem) 0",
            }}
          >
            Gabriela Aguiar e Celso Gama escrevem sobre o intervalo em que mudar ainda é uma escolha, e o que fazer com ele.
          </p>

          {/* Posts ou fallback */}
          {posts.length > 0 ? (
            <div style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
              {posts.map((post) => (
                <a
                  key={post.href}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-post"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    textDecoration: "none",
                    borderTop: "1px solid rgba(245,245,242,0.12)",
                    padding: "1.5rem 0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-atyp-display), serif",
                      fontSize: "clamp(18px, 2vw, 24px)",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      letterSpacing: "-0.02em",
                      color: WHITE,
                    }}
                  >
                    {post.titulo}
                    <span className="ed-arrow" aria-hidden="true" style={{ display: "inline-block", marginLeft: "0.625rem" }}>→</span>
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-atyp-text), sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      color: TAUPE,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      marginTop: "0.25rem",
                    }}
                  >
                    {post.dataCurta}
                  </span>
                </a>
              ))}
              <div style={{ borderTop: "1px solid rgba(245,245,242,0.12)" }} />
            </div>
          ) : (
            <p
              style={{
                fontFamily: "var(--font-atyp-text), sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.6,
                color: SAND,
                margin: "0 0 clamp(2.5rem, 5vw, 4rem) 0",
              }}
            >
              As edições mais recentes estão no Substack.
            </p>
          )}

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/antes-pira"
              className="ed-btn2"
              style={{
                fontFamily: "var(--font-atyp-text), sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: WHITE,
                textDecoration: "none",
                border: "1px solid " + WHITE,
                padding: "0.875rem 1.75rem",
              }}
            >
              Ler: Antes, Pira
            </a>
            <a
              href="https://piralabs.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ed-btn3"
              style={{
                fontFamily: "var(--font-atyp-text), sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: SAND,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Abrir no Substack
              <span className="ed-btn3-arrow" aria-hidden="true" style={{ display: "inline-block" }}>↗</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .ed-post { transition: padding-left 0.35s cubic-bezier(0.16,1,0.3,1); }
        .ed-post:hover { padding-left: 0.75rem; }
        .ed-arrow { opacity: 0; transform: translateX(-8px); transition: opacity 0.25s, transform 0.35s cubic-bezier(0.16,1,0.3,1); }
        .ed-post:hover .ed-arrow { opacity: 1; transform: translateX(0); }
        .ed-btn2 { transition: background-color 0.2s; }
        .ed-btn2:hover { background-color: rgba(245,245,242,0.1); }
        .ed-btn3 { transition: color 0.2s; }
        .ed-btn3:hover { color: ${WHITE}; }
        .ed-btn3-arrow { transition: transform 0.25s; }
        .ed-btn3:hover .ed-btn3-arrow { transform: translate(2px, -2px); }
        @media (prefers-reduced-motion: reduce) {
          .ed-post, .ed-arrow, .ed-btn2, .ed-btn3, .ed-btn3-arrow { transition: none !important; }
        }
      `}</style>
    </section>
  )
}
