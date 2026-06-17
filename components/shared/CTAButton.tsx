import Link from 'next/link'

type CTAButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary'
  href: string
  origin?: string
  external?: boolean
  withAsterisk?: boolean
  className?: string
  theme?: 'dark' | 'light'
  children: React.ReactNode
}

export function CTAButton({
  variant = 'primary',
  href,
  origin,
  external = false,
  withAsterisk = false,
  className = '',
  theme = 'dark',
  children,
}: CTAButtonProps) {
  const resolvedHref = origin
    ? `${href}${href.includes('?') ? '&' : '?'}origem=${origin}`
    : href

  const getClassName = () => {
    if (variant === 'primary') return `btn-primary ${className}`.trim()
    if (variant === 'secondary') {
      return theme === 'light'
        ? `btn-secondary-light ${className}`.trim()
        : `btn-secondary ${className}`.trim()
    }
    return `btn-tertiary ${className}`.trim()
  }

  const getTertiaryColor = () => {
    if (variant !== 'tertiary') return undefined
    return theme === 'dark' ? '#e8e0d6' : '#1A5568'
  }

  const content = (
    <>
      {children}
      {withAsterisk && (
        <span
          className="ml-0.5 text-sm"
          style={{ opacity: 0.7 }}
          aria-label="mediante consulta e disponibilidade"
        >
          *
        </span>
      )}
    </>
  )

  if (external) {
    return (
      <a
        href={resolvedHref}
        target="_blank"
        rel="noopener noreferrer"
        className={getClassName()}
        style={getTertiaryColor() ? { color: getTertiaryColor() } : undefined}
      >
        {content}
        <span className="sr-only">(abre em nova aba)</span>
      </a>
    )
  }

  return (
    <Link
      href={resolvedHref}
      className={getClassName()}
      style={getTertiaryColor() ? { color: getTertiaryColor() } : undefined}
    >
      {content}
    </Link>
  )
}
