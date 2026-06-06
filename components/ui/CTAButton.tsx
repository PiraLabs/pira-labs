'use client'

import { useState } from 'react'

interface CTAButtonProps {
  href: string
  label: string
  theme?: 'light' | 'dark'
  external?: boolean
  origin?: string
}

export function CTAButton({ href, label, theme = 'dark', external = false }: CTAButtonProps) {
  const [hovered, setHovered] = useState(false)

  const color = theme === 'dark' ? '#F5F5F2' : '#05262e'
  const finalHref = href

  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: '0.10em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color,
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    opacity: hovered ? 0.7 : 1,
  }

  const arrowStyle: React.CSSProperties = {
    display: 'inline-block',
    transform: hovered ? 'translateX(6px)' : 'translateX(0)',
    transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
    fontWeight: 300,
    letterSpacing: 0,
    textTransform: 'none',
  }

  const content = (
    <>
      {label}
      <span style={arrowStyle} aria-hidden="true">→</span>
    </>
  )

  if (external) {
    return (
      <a
        href={finalHref}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {content}
      </a>
    )
  }

  return (
    <a
      href={finalHref}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {content}
    </a>
  )
}
