import Link from 'next/link'

interface CTAButtonProps {
  href: string
  label: string
  theme?: 'light' | 'dark'
  external?: boolean
}

export function CTAButton({ href, label, theme = 'dark', external = false }: CTAButtonProps) {
  const color = theme === 'dark' ? '#e8e0d6' : '#1A5568'

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-tertiary"
        style={{ color }}
        aria-label={`${label} (abre em nova aba)`}
      >
        {label}
        <span aria-hidden="true">→</span>
        <span className="sr-only">(abre em nova aba)</span>
      </a>
    )
  }

  return (
    <Link href={href} className="btn-tertiary" style={{ color }}>
      {label}
      <span aria-hidden="true">→</span>
    </Link>
  )
}
