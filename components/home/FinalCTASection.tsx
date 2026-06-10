import { useEffect, useRef, useState } from 'react'

export function FinalCTASection() {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const entry = (delay: string): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}`,
  })

  return (
    <section
      ref={sectionRef}
      id="cta-final"
      aria-label="Contato"
      style={{ backgroundColor: '#05262e' }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '160px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Frase central */}
        <div style={{ ...entry('0s'), marginBottom: '56px' }}>
          <p
            className="font-display font-light leading-tight"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              color: '#F5F5F2',
              letterSpacing: '-0.03em',
              maxWidth: '760px',
            }}
          >
            O negócio ainda pode escolher. Essa é a{' '}
            <span>janela</span>.
          </p>
        </div>

        {/* CTA */}
        <div style={{ ...entry('0.15s'), marginBottom: '24px' }}>
          <a
            href="/contato?origem=home"
            className="font-body font-semibold uppercase tracking-widest"
            style={{
              fontSize: '13px',
              color: '#F5F5F2',
              textDecoration: 'none',
              backgroundColor: '#eb5c2e',
              border: 'none',
              padding: '18px 56px',
              borderRadius: '2px',
              letterSpacing: '0.12em',
              display: 'inline-block',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.9'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            RESPIRE
          </a>
        </div>

        {/* Microcopy */}
        <div style={entry('0.25s')}>
          <p
            className="font-body font-light"
            style={{
              fontSize: '13px',
              color: '#e8e0d6',
              marginBottom: '64px',
            }}
          >
            Conte onde a operação começou a pesar. Respondemos em até dois dias úteis.
          </p>
        </div>

        {/* Fechamento */}
        <div style={entry('0.4s')}>
          <p
            className="font-display font-light"
            style={{
              fontSize: '20px',
              color: '#e8e0d6',
              letterSpacing: '0.05em',
            }}
          >
            Inspira. Transpira. Respira.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          #cta-final > div {
            padding: 100px 24px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          #cta-final * {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
