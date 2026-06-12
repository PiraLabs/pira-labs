'use client'

export function HeroSecondaryLink() {
  return (
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
  )
}
