import { CTAButton } from '@/components/shared/CTAButton'
import { CTAButton as TertiaryLink } from '@/components/ui/CTAButton'
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
      <div className="container-site pt-20 pb-16">
        <div style={{ maxWidth: 'min(92vw, 1100px)' }}>
          <p
            className="font-body"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#1A5568',
              marginBottom: '24px',
            }}
          >
            Creative Business Turnaround
          </p>

          <h1
            className="font-display"
            style={{
              color: '#05262e',
              fontSize: 'clamp(54px, 10.9vw, 120px)',
              lineHeight: 1.0,
              letterSpacing: '-0.035em',
              fontWeight: 700,
              marginBottom: '32px',
              maxWidth: '14ch',
              textWrap: 'balance',
            }}
          >
            Existe um momento em que transformar ainda é um processo, não uma crise.
          </h1>

          <p
            className="font-body"
            style={{
              color: '#05262e',
              fontSize: '18px',
              lineHeight: 1.6,
              marginBottom: '20px',
              fontWeight: 400,
              maxWidth: '680px',
            }}
          >
            A Pira Labs é uma consultoria boutique brasileira de Creative Business
            Turnaround para empresas de serviços que precisam transformar sinais
            fracos em decisão, proteger reputação e voltar a crescer com margem,
            antes que a janela se feche.
          </p>

          <p
            className="font-body"
            style={{
              color: '#1A5568',
              fontSize: '18px',
              lineHeight: 1.6,
              marginBottom: '40px',
              fontWeight: 400,
              maxWidth: '680px',
            }}
          >
            Conduzida por Gabriela Aguiar e Celso Gama, do diagnóstico à entrega.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '20px',
              width: 'fit-content',
            }}
          >
            <CTAButton href="/contato" variant="primary" theme="light" origin={ORIGINS.HOME}>
              RESPIRE
            </CTAButton>
            <TertiaryLink href="/sobre" label="Conhecer quem opera" theme="light" />
          </div>
        </div>
      </div>
    </section>
  )
}
