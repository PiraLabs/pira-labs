import { CTAButton } from '@/components/ui/CTAButton'
import { HeroSVGClient } from './HeroSVGClient'

/* Artboard 1 — geometria canônica KZ sobre Sand #e8e0d6.
   Texto renderiza no servidor (sem 'use client') para LCP imediato.
   SVG com GSAP isolado em HeroSVGClient para não bloquear hidratação. */

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Pira Labs · Creative Business Turnaround"
      style={{ backgroundColor: "#e8e0d6", position: "relative", overflow: "hidden", minHeight: "clamp(480px, 60vw, 680px)" }}
    >
      <HeroSVGClient />

      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12">

          <div
            className="col-span-full"
            style={{ position: "relative", zIndex: 10, maxWidth: "52%" }}
          >
            <p
              className="font-display font-bold mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
            >
              <span style={{ color: "#C4421A" }}>Creative</span>{" "}
              <span style={{ color: "#05262e" }}>Business Turnaround</span>
            </p>

            <h1
              className="font-display font-bold"
              style={{
                color: "#05262e",
                fontSize: "clamp(42px, 5.5vw, 72px)",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Existe um momento em que transformar ainda é um processo, não uma crise.
            </h1>

            <p
              className="font-display font-light mb-10"
              style={{
                color: "rgba(5,38,46,0.6)",
                fontSize: "clamp(17px, 1.5vw, 20px)",
                lineHeight: 1.6,
              }}
            >
              A Pira Labs é uma consultoria boutique brasileira de Creative Business Turnaround para
              empresas de serviços que precisam transformar sinais fracos em decisão, proteger
              reputação e voltar a crescer com margem, antes que a janela se feche.
            </p>

            <CTAButton href="#sinais" label="VER OS SINAIS" theme="light" />
          </div>

        </div>
      </div>
    </section>
  )
}
