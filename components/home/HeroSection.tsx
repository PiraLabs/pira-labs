import { HeroMotionClient } from './HeroMotionClient'

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
        </div>
      </div>
    </section>
  )
}
