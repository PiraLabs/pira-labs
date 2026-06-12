'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { CTAButton } from '@/components/shared/CTAButton'
import { ORIGINS } from '@/lib/constants'

export function HeroMotionClient() {
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)
  const line4Ref = useRef<HTMLSpanElement>(null)
  const criseRef = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf1: number, raf2: number
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches
        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches

        if (isMobile || prefersReducedMotion) {
          return
        }

        gsap.set(
          [
            line1Ref.current,
            line2Ref.current,
            line3Ref.current,
            line4Ref.current,
          ],
          { opacity: 0, y: 12 }
        )
        gsap.set(subtitleRef.current, { opacity: 0 })
        gsap.set(ctaRef.current, { opacity: 0, y: 8 })

        const tl = gsap.timeline()

        tl.to(line1Ref.current, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
        })
          .to(
            line2Ref.current,
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
            '+=0.05'
          )
          .to(
            line3Ref.current,
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
            '+=0.05'
          )
          .to({}, { duration: 0.6 })
          .to(line4Ref.current, {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
          })
          .to(
            criseRef.current,
            { color: '#eb5c2e', duration: 0.3, ease: 'power1.in' },
            '+=0.05'
          )
          .to(criseRef.current, {
            color: '#05262e',
            duration: 1.4,
            ease: 'power2.out',
          })
          .to(
            subtitleRef.current,
            { opacity: 1, duration: 0.5, ease: 'power1.out' },
            '-=0.3'
          )
          .to(
            ctaRef.current,
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
            '-=0.1'
          )
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      gsap.killTweensOf([
        line1Ref.current,
        line2Ref.current,
        line3Ref.current,
        line4Ref.current,
        criseRef.current,
        subtitleRef.current,
        ctaRef.current,
      ])
    }
  }, [])

  return (
    <>
      <h1
        className="font-display font-bold"
        style={{
          color: '#05262e',
          fontSize: 'clamp(52px, 6.5vw, 96px)',
          lineHeight: 1.0,
          marginBottom: '32px',
          letterSpacing: '-0.02em',
        }}
      >
        <span ref={line1Ref} style={{ display: 'block' }}>
          Existe um momento em que
        </span>
        <span ref={line2Ref} style={{ display: 'block' }}>
          transformar ainda é
        </span>
        <span ref={line3Ref} style={{ display: 'block' }}>
          um processo,
        </span>
        <span ref={line4Ref} style={{ display: 'block' }}>
          não uma{' '}
          <span ref={criseRef} style={{ color: '#05262e' }}>
            crise.
          </span>
        </span>
      </h1>
      <p
        ref={subtitleRef}
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
        ref={ctaRef}
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
        <a
          href="/sobre"
          className="font-body"
          style={{
            color: '#05262e',
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.10em',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.borderBottomColor =
              '#05262e')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.borderBottomColor =
              'transparent')
          }
        >
          Conhecer quem opera →
        </a>
      </div>
    </>
  )
}
