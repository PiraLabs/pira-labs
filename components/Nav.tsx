'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { getAlternatePath } from '@/lib/i18n'

interface NavProps {
  locale: 'pt' | 'en'
}

export default function Nav({ locale }: NavProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const alternatePath = getAlternatePath(pathname)

  const links =
    locale === 'pt'
      ? [
          { href: '/servicos', label: 'Serviços' },
          { href: '/cases', label: 'Cases' },
          { href: '/sobre', label: 'Sobre' },
          { href: '/contato', label: 'Contato' },
        ]
      : [
          { href: '/en/services', label: 'Services' },
          { href: '/en/cases', label: 'Cases' },
          { href: '/en/about', label: 'About' },
          { href: '/en/contact', label: 'Contact' },
        ]

  const ctaHref = locale === 'pt' ? '/contato' : '/en/contact'
  const ctaLabel = locale === 'pt' ? 'Solicitar diagnóstico' : 'Request diagnosis'
  const logoHref = locale === 'pt' ? '/' : '/en'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-amber/20">
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={logoHref} className="flex items-center gap-2">
          <span className="font-display text-xl tracking-wide">
            <span className="text-amber font-semibold">PIRA</span>
            <span className="text-navy"> LABS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm text-navy/70 hover:text-amber transition-colors duration-200 tracking-wide uppercase"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="ml-2 px-5 py-2 bg-navy text-off-white font-body text-sm tracking-wide uppercase hover:bg-amber transition-colors duration-200"
          >
            {ctaLabel}
          </Link>
          {/* Seletor de idioma */}
          <Link
            href={alternatePath}
            className="ml-1 px-3 py-1 border border-navy/30 text-navy/60 font-body text-xs tracking-widest uppercase hover:border-amber hover:text-amber transition-colors duration-200"
            aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            {locale === 'pt' ? 'EN' : 'PT'}
          </Link>
        </nav>

        {/* Mobile: idioma + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href={alternatePath}
            className="px-2 py-1 border border-navy/30 text-navy/60 font-body text-xs tracking-widest uppercase"
            aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            {locale === 'pt' ? 'EN' : 'PT'}
          </Link>
          <button
            className="text-navy"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-navy transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-px bg-navy transition-all duration-200 ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-px bg-navy transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-amber/20 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-navy text-lg"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="mt-2 px-5 py-3 bg-navy text-off-white font-body text-sm tracking-wide uppercase text-center"
            onClick={() => setOpen(false)}
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </header>
  )
}
