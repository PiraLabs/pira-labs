'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { MobileMenu } from './MobileMenu'
import type { MobileNavItem } from './MobileMenu'

const NAV_ITEMS = [
  {
    label: 'Venha',
    items: [
      { label: 'Sobre a Pira Labs', href: '/sobre' },
      { label: 'Creative Business Turnaround', href: '/creative-business-turnaround' },
      { label: 'Como pensamos', href: '/como-pensamos' },
    ],
  },
  {
    label: 'Entre',
    items: [
      { label: 'Faísca', href: '/faisca' },
      { label: 'Imersão em IA', href: '/faisca/imersa-em-ia' },
      { label: 'Oxigênio IA Search', href: '/faisca/oxigenio-ia-search' },
      { label: 'pocket do INSPIRA', href: '/faisca/pocket' },
      { label: 'Faísca Jurídica', href: '/faisca/juridica' },
      { label: 'C-level as a Service', href: '/faisca/c-level-as-a-service' },
    ],
  },
  {
    label: 'Avance',
    items: [
      { label: 'INSPIRA', href: '/inspira' },
      { label: 'TRANSPIRA', href: '/transpira' },
      { label: 'INSPIRA Jurídico', href: '/inspira/juridico' },
      { label: 'TRANSPIRA Jurídico', href: '/transpira/juridico' },
    ],
  },
]

// Converte NAV_ITEMS para o formato esperado por MobileMenu
const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  ...NAV_ITEMS.map((item) => ({
    kind: 'dropdown' as const,
    label: item.label,
    children: item.items,
  })),
  { kind: 'link' as const, label: 'Chama', href: '/chama' },
  { kind: 'link' as const, label: 'Antes, Pira', href: '/antes-pira', emberComma: true },
]

const CTA_HREF = '/contato?origem=header_global'

export function Header() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  function handleMouseEnter(label: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(label)
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 80)
  }

  const langToggle = (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-atyp-text)', fontSize: '11px', fontWeight: 600, color: '#F5F5F2', opacity: 1, letterSpacing: '0.06em' }}>PT</button>
      <span style={{ color: '#F5F5F2', opacity: 0.3, fontSize: '11px' }}>/</span>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-atyp-text)', fontSize: '11px', fontWeight: 600, color: '#F5F5F2', opacity: 0.4, letterSpacing: '0.06em' }}>EN</button>
    </div>
  )

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: '#05262e',
          height: '64px',
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
          className="px-6 lg:px-20"
        >
          {/* Logo */}
          <Link href="/" style={{ flexShrink: 0 }}>
            <Image
              src="/brand/COMPLETA_OFFWHITE.svg"
              alt="Pira Labs"
              width={120}
              height={28}
              style={{ height: '28px', width: '249px' }}
            />
          </Link>

          {/* Nav desktop */}
          <nav
            aria-label="Menu principal"
            style={{
              alignItems: 'center',
              gap: 'clamp(10px, 1.2vw, 24px)',
              flex: 1,
              justifyContent: 'center',
            }}
            className="hidden md:flex"
          >
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  aria-expanded={openDropdown === item.label}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontFamily: 'var(--font-atyp-text)',
                    fontWeight: 600,
                    fontSize: 'clamp(11px, 1vw, 14px)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#F5F5F2',
                    color: openDropdown === item.label ? '#F5F5F2' : '#b0a596',
                    whiteSpace: 'nowrap',
                    padding: '4px 0',
                    transition: 'opacity 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F2')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = openDropdown === item.label ? '#F5F5F2' : '#b0a596')}
                >
                  {item.label}
                  <span style={{ fontSize: '10px', opacity: 0.6 }}>▾</span>
                </button>

                {/* Dropdown */}
                {openDropdown === item.label && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      marginTop: '8px',
                      backgroundColor: '#05262e',
                      border: '1px solid rgba(245,245,242,0.1)',
                      borderRadius: 0,
                      padding: '8px 0',
                      minWidth: '220px',
                      zIndex: 100,
                    }}
                  >
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        style={{
                          display: 'block',
                          padding: '10px 20px',
                          fontFamily: 'var(--font-atyp-text)',
                          fontSize: '13px',
                          color: '#F5F5F2',
                          color: '#b0a596',
                          whiteSpace: 'nowrap',
                          transition: 'color 0.15s ease, padding-left 0.15s ease',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#F5F5F2'
                          e.currentTarget.style.paddingLeft = '24px'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#b0a596'
                          e.currentTarget.style.paddingLeft = '20px'
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Chama — link direto */}
            <Link
              href="/chama"
              style={{
                fontFamily: 'var(--font-atyp-text)',
                fontWeight: 600,
                fontSize: 'clamp(11px, 1vw, 14px)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: pathname === '/chama' ? '#F5F5F2' : '#b0a596',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F2')}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === '/chama' ? '#F5F5F2' : '#b0a596')}
            >
              Chama
            </Link>

            {/* Antes, Pira — link direto */}
            <Link
              href="/antes-pira"
              style={{
                fontFamily: 'var(--font-atyp-text)',
                fontWeight: 600,
                fontSize: 'clamp(11px, 1vw, 14px)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                const spans = e.currentTarget.querySelectorAll('span')
                spans[0].style.color = '#F5F5F2'
                spans[2].style.color = '#F5F5F2'
              }}
              onMouseLeave={(e) => {
                const isActive = pathname === '/antes-pira'
                const spans = e.currentTarget.querySelectorAll('span')
                spans[0].style.color = isActive ? '#F5F5F2' : '#b0a596'
                spans[2].style.color = isActive ? '#F5F5F2' : '#b0a596'
              }}
            >
              <span style={{ color: '#F5F5F2' }}>Antes</span>
              <span style={{ color: '#eb5c2e' }}>,</span>
              <span style={{ color: '#F5F5F2' }}> Pira</span>
            </Link>
          </nav>

          {/* Direita: PT/EN + Chama + Hamburguer */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            {/* Toggle PT/EN — só em telas grandes */}
            <div className="hidden xl:flex" style={{ gap: '4px', alignItems: 'center' }}>
              {langToggle}
            </div>

            {/* Botão Chama */}
            <Link
              href={CTA_HREF}
              className="hidden md:inline-flex"
              style={{
                backgroundColor: '#eb5c2e',
                color: '#F5F5F2',
                fontFamily: 'var(--font-atyp-text)',
                fontWeight: 600,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                padding: '8px 18px',
                borderRadius: 0,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'transform 0.15s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Respire
            </Link>

            {/* Hamburguer mobile */}
            <button
              className="flex md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect y="4" width="24" height="2" fill="#F5F5F2" />
                <rect y="11" width="24" height="2" fill="#F5F5F2" />
                <rect y="18" width="24" height="2" fill="#F5F5F2" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <MobileMenu
          items={MOBILE_NAV_ITEMS}
          pathname={pathname}
          onClose={() => setMobileOpen(false)}
          ctaHref={CTA_HREF}
          langToggle={langToggle}
        />
      )}
    </>
  )
}
