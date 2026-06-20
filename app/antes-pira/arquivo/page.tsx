import type { Metadata } from 'next'
import { buscarPostsSubstack } from '@/lib/substack-rss'

export const metadata: Metadata = {
  title: 'Arquivo · Antes, Pira · Pira Labs',
  description: 'Todas as edições da publicação editorial Antes, Pira da Pira Labs.',
  alternates: {
    canonical: 'https://piralabs.com.br/antes-pira/arquivo',
  },
}

const PAD = 'clamp(5rem, 10vw, 7.5rem) clamp(1.5rem, 4vw, 5rem)'
const PAD_BREAD = '12px clamp(1.5rem, 4vw, 5rem)'

export default async function AntesPiraArquivoPage() {
  const posts = await buscarPostsSubstack(50)

  return (
    <>
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" style={{ backgroundColor: '#e8e0d6', padding: PAD_BREAD }}>
        <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0, fontSize: '0.75rem', color: '#05262e' }}>
          <li><a href="/" style={{ color: '#05262e', textDecoration: 'none' }}>Home</a></li>
          <li style={{ color: '#1A5568' }}>/</li>
          <li><a href="/antes-pira" style={{ color: '#05262e', textDecoration: 'none' }}>Antes, Pira</a></li>
          <li style={{ color: '#1A5568' }}>/</li>
          <li style={{ color: '#1A5568' }}>Arquivo</li>
        </ol>
      </nav>

      {/* HERO | Sand */}
      <section style={{ backgroundColor: '#e8e0d6', padding: PAD }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#05262e',
            marginBottom: '24px',
          }}>
            Antes, Pira
          </p>
          <h1 style={{
            fontFamily: 'AtypDisplay, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(2.375rem, 6.5vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: '#05262e',
            marginBottom: '32px',
            maxWidth: '800px',
          }}>
            Todas as <span style={{ color: '#C4421A' }}>edições</span>.
          </h1>
          <p style={{
            fontFamily: 'AtypText, sans-serif',
            fontWeight: 400,
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#05262e',
            maxWidth: '560px',
          }}>
            O arquivo completo da publicação editorial da Pira Labs.
          </p>
        </div>
      </section>

      {/* LISTA COMPLETA | Ink */}
      <section style={{ backgroundColor: '#05262e', padding: PAD }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {posts.length > 0 ? (
            <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column' }}>
              {posts.map((post) => (
                <div
                  key={post.href}
                  style={{
                    borderTop: '1px solid rgba(232,224,214,0.12)',
                    paddingTop: '32px',
                    paddingBottom: '32px',
                  }}
                >
                  <p style={{
                    fontFamily: 'AtypText, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.75rem',
                    color: '#b0a596',
                    marginBottom: '8px',
                    letterSpacing: '0.05em',
                  }}>
                    {post.data}
                  </p>
                  <h3 style={{ margin: 0, marginBottom: '12px' }}>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'AtypDisplay, sans-serif',
                        fontWeight: 500,
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                        lineHeight: 1.25,
                        letterSpacing: '-0.01em',
                        color: '#F5F5F2',
                        textDecoration: 'none',
                        display: 'block',
                      }}
                    >
                      {post.titulo}
                    </a>
                  </h3>
                  {post.previa && (
                    <p style={{
                      fontFamily: 'AtypText, sans-serif',
                      fontWeight: 400,
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      color: '#e8e0d6',
                      marginBottom: '16px',
                      maxWidth: '640px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {post.previa}
                    </p>
                  )}
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'AtypText, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#e8e0d6',
                      textDecoration: 'none',
                    }}
                  >
                    Ler edição →
                  </a>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(232,224,214,0.12)' }} />
            </div>
          ) : (
            <p style={{
              fontFamily: 'AtypText, sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              color: '#e8e0d6',
            }}>
              As edições estão disponíveis diretamente no Substack.
            </p>
          )}

          <div style={{ marginTop: '48px' }}>
            <a
              href="https://piralabs.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'AtypText, sans-serif',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#e8e0d6',
                textDecoration: 'none',
              }}
            >
              Ver no Substack →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
