import Link from 'next/link'
import { dict } from '@/lib/i18n'

interface FooterProps {
  locale: 'pt' | 'en'
}

export default function Footer({ locale }: FooterProps) {
  const t = dict[locale].footer

  return (
    <footer className="bg-navy text-off-white/70">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Identidade */}
          <div>
            <p className="font-display text-2xl text-off-white mb-3">
              <span className="text-amber">PIRA</span> LABS
            </p>
            <p className="font-body text-sm leading-relaxed">
              {t.tagline}
              <br />
              {t.category}
            </p>
            <p className="font-body text-xs mt-4 text-amber italic">{t.slogan}</p>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-off-white/40 mb-4">
              {t.nav}
            </p>
            <nav className="flex flex-col gap-2">
              {t.links.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="font-body text-sm hover:text-amber transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-off-white/40 mb-4">
              {t.contact}
            </p>
            <p className="font-body text-sm mb-2">inspira@piralabs.com.br</p>
            <p className="font-body text-sm mb-6">{t.location}</p>
            <a
              href="https://linkedin.com/company/piralabs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm hover:text-amber transition-colors duration-200"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        <div className="border-t border-off-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="font-body text-xs text-off-white/30">
            © {new Date().getFullYear()} Pira Labs. {t.rights}
          </p>
          <p className="font-body text-xs text-off-white/30">{t.closing}</p>
        </div>
      </div>
    </footer>
  )
}
