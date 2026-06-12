'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function HeroMotionClient() {
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)
  const line4Ref = useRef<HTMLSpanElement>(null)
  const criseRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let raf1: number, raf2: number
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches

        if (prefersReducedMotion) {
          ;[line1Ref, line2Ref, line3Ref, line4Ref].forEach((ref) => {
            if (ref.current) ref.current.style.opacity = '1'
          })
          return
        }

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
      ])
    }
  }, [])

  return (
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
      <span
        ref={line1Ref}
        style={{ display: 'block', opacity: 0, transform: 'translateY(12px)' }}
      >
        Existe um momento em que
      </span>
      <span
        ref={line2Ref}
        style={{ display: 'block', opacity: 0, transform: 'translateY(12px)' }}
      >
        transformar ainda é
      </span>
      <span
        ref={line3Ref}
        style={{ display: 'block', opacity: 0, transform: 'translateY(12px)' }}
      >
        um processo,
      </span>
      <span
        ref={line4Ref}
        style={{ display: 'block', opacity: 0, transform: 'translateY(12px)' }}
      >
        não uma{' '}
        <span ref={criseRef} style={{ color: '#05262e' }}>
          crise.
        </span>
      </span>
    </h1>
  )
}
