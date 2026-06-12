import { HeroMotionClient } from './HeroMotionClient'
import { HeroSecondaryLink } from './HeroSecondaryLink'
import { CTAButton } from '@/components/shared/CTAButton'
import { ORIGINS } from '@/lib/constants'

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Pira Labs · Creative Business Turnaround"
      style={{
        backgroundColor: '#e8e0d6',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'clamp(480px, 60vw, 680px)',
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-20 pb-16">
        <div style={{ maxWidth: 'min(90vw, 1100px)' }}>
          <p
            className="font-display font-semibold mb-6"
            style={{
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#1A5568',
            }}
          >
            Creative Business Turnaround
          </p>
          <HeroMotionClient />
          <p
            className="font-display font-light"
            style={{
              color: '#05262e',
              fontSize: 'clamp(17px, 1.5vw, 20px)',
              lineHeight: 1.6,
              marginBottom: '40px',
            }}
          >
            A Pira Labs é uma consultoria boutique brasileira de Creative Business
            Turnaround para empresas de serviços que precisam transformar sinais
            fracos em decisão, proteger reputação e voltar a crescer com margem,
            antes que a janela se feche.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              width: 'fit-content',
            }}
          >
            <CTAButton href="/contato" variant="primary" theme="light" origin={ORIGINS.HOME}>
              RESPIRE
            </CTAButton>
            <HeroSecondaryLink />
          </div>
        </div>
      </div>
    </section>
  )
}
