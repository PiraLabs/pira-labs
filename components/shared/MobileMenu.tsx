'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export type ChildItem = { label: string; href: string }
export type MobileNavItem =
  | { kind: 'link'; label: string; href: string; emberComma?: boolean }
  | { kind: 'dropdown'; label: string; children: ChildItem[] }

function MobileAccordionItem({
  item,
  pathname,
  onClose,
}: {
  item: MobileNavItem
  pathname: string
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)

  if (item.kind === 'link') {
    const isCurrent = pathname === item.href
    return (
      <li style={{ borderBottom: '1px solid rgba(245,245,242,0.1)' }}>
        <Link
          href={item.href}
          aria-current={isCurrent ? 'page' : undefined}
          onClick={onClose}
          className="flex items-center py-4 font-body font-semibold uppercase tracking-[0.08em] transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{
            fontSize: '16px',
            minHeight: '56px',
            color: isCurrent ? '#eb5c2e' : '#F5F5F2',
            outlineColor: '#eb5c2e',
          }}
        >
          {item.emberComma ? (
            <>
              <span>Antes</span>
              <span style={{ color: '#eb5c2e' }}>,</span>
              <span>&nbsp;Pira</span>
            </>
          ) : (
            item.label
          )}
        </Link>
      </li>
    )
  }

  const anyActive = item.children.some((c) => {
    const base = c.href.split('#')[0]
    return pathname === base || pathname.startsWith(base + '/')
  })

  return (
    <li style={{ borderBottom: '1px solid rgba(245,245,242,0.1)' }}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 font-body font-semibold uppercase tracking-[0.08em] transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          fontSize: '16px',
          minHeight: '56px',
          color: anyActive ? '#eb5c2e' : '#F5F5F2',
          outlineColor: '#eb5c2e',
        }}
      >
        <span>{item.label}</span>
        <span
          aria-hidden="true"
          style={{
            fontSize: '12px',
            opacity: 0.5,
            display: 'inline-block',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          ▾
        </span>
      </button>

      {open && (
        <ul className="pb-3">
          {item.children.map((child) => {
            const base = child.href.split('#')[0]
            const childActive = pathname === base || pathname.startsWith(base + '/')
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onClose}
                  className="flex items-center py-2 font-body transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2"
                  style={{
                    fontSize: '15px',
                    minHeight: '44px',
                    paddingLeft: '20px',
                    color: childActive ? '#F5F5F2' : '#e8e0d6',
                    outlineColor: '#eb5c2e',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F2')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = childActive
                      ? '#F5F5F2'
                      : '#e8e0d6')
                  }
                >
                  {child.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

interface MobileMenuProps {
  items: MobileNavItem[]
  pathname: string
  onClose: () => void
  ctaHref: string
  langToggle: React.ReactNode
}

export function MobileMenu({
  items,
  pathname,
  onClose,
  ctaHref,
  langToggle,
}: MobileMenuProps) {
  const [visible, setVisible] = useState(false)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  const panelStyle: React.CSSProperties = reducedMotion.current
    ? { opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }
    : {
        transform: visible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }

  return (
    <div className="md:hidden fixed inset-0 z-[60]" aria-hidden="false">
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(5,38,46,0.6)' }}
      />

      {/* Full-screen panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className="absolute inset-0 flex flex-col overflow-hidden"
        style={{ backgroundColor: '#05262e', ...panelStyle }}
      >
        {/* Topo: logo + fechar */}
        <div
          className="flex items-center justify-between flex-shrink-0 px-5"
          style={{
            height: '56px',
            borderBottom: '1px solid rgba(245,245,242,0.1)',
          }}
        >
          <Link
            href="/"
            onClick={onClose}
            aria-label="Pira Labs — página inicial"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ outlineColor: '#eb5c2e' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/COMPLETA_OFFWHITE.svg"
              alt="PiraLabs"
              style={{ height: '24px', width: '214px' }}
            />
          </Link>

          <button
            type="button"
            aria-label="Fechar menu"
            onClick={onClose}
            className="flex items-center justify-center transition-opacity duration-150 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              width: '44px',
              height: '44px',
              color: '#F5F5F2',
              outlineColor: '#eb5c2e',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <line
                x1="3"
                y1="3"
                x2="17"
                y2="17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="17"
                y1="3"
                x2="3"
                y2="17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Itens de navegação */}
        <nav aria-label="Menu principal" className="flex-1 overflow-y-auto px-5">
          <ul>
            {items.map((item) => (
              <MobileAccordionItem
                key={item.kind === 'link' ? item.href : item.label}
                item={item}
                pathname={pathname}
                onClose={onClose}
              />
            ))}
          </ul>

          <div className="pt-6 pb-4">{langToggle}</div>
        </nav>

        {/* CTA fixo na base */}
        <div
          className="flex-shrink-0 p-5"
          style={{ borderTop: '1px solid rgba(245,245,242,0.1)' }}
        >
          <Link
            href={ctaHref}
            onClick={onClose}
            className="flex items-center justify-center w-full font-body font-semibold uppercase tracking-[0.10em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              fontSize: '13px',
              minHeight: '52px',
              backgroundColor: '#eb5c2e',
              color: '#F5F5F2',
              borderRadius: '2px',
              outlineColor: '#eb5c2e',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#C4421A')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = '#eb5c2e')
            }
          >
            Chama
          </Link>
        </div>
      </div>
    </div>
  )
}
