"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SOCIAL } from "@/lib/constants";

const footerColumns = [
  {
    heading: "Institucional",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Creative Business Turnaround", href: "/creative-business-turnaround" },
      { label: "Como pensamos", href: "/como-pensamos" },
      { label: "Antes, Pira", href: "/antes-pira" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    heading: "O que fazemos",
    links: [
      { label: "INSPIRA", href: "/inspira", main: true },
      { label: "Oxigênio", href: "/faisca/oxigenio-ia-search", sub: true },
      { label: "pocket do INSPIRA", href: "/faisca/pocket", sub: true },
      { label: "TRANSPIRA", href: "/transpira", main: true },
      { label: "Faísca", href: "/faisca", main: true },
      { label: "Imersão em IA", href: "/faisca/imersao-em-ia", sub: true },
      { label: "Chama", href: "/chama", main: true },
    ],
  },
  {
    heading: "Jurídico",
    links: [
      { label: "INSPIRA Jurídico", href: "/inspira/juridico", main: true },
      { label: "TRANSPIRA Jurídico", href: "/transpira/juridico", main: true },
      { label: "Faísca Jurídica", href: "/faisca/juridica", main: true },
    ],
  },
  {
    heading: "Contato",
    links: [
      {
        label: "inspira@piralabs.com.br",
        href: "mailto:inspira@piralabs.com.br",
        external: false,
        ariaLabel: "Enviar email para a Pira Labs",
      },
      { label: "LinkedIn Pira Labs", href: SOCIAL.PIRA_LINKEDIN, external: true },
      { label: "LinkedIn Gabriela Aguiar", href: SOCIAL.GABRIELA_LINKEDIN, external: true },
      { label: "LinkedIn Celso Gama", href: SOCIAL.CELSO_LINKEDIN, external: true },
    ],
  },
];

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
    ariaLabel?: string;
    main?: boolean;
    sub?: boolean;
  }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <section>
      {/* Desktop: heading estático */}
      <h2
        className="hidden md:block uppercase tracking-widest mb-4"
        style={{
          fontSize: '10px',
          fontWeight: 700,
          color: '#F5F5F2',
          fontFamily: 'inherit',
        }}
      >
        {heading}
      </h2>

      {/* Mobile: heading como botão acordeão */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="md:hidden w-full flex items-center justify-between py-3 uppercase tracking-widest"
        style={{ fontSize: '10px', fontWeight: 700, color: '#F5F5F2' }}
      >
        {heading}
        <span
          className={`text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      <div className="h-px md:hidden" style={{ backgroundColor: 'rgba(245,245,242,0.1)' }} />

      {/* Links */}
      <ul className={`space-y-2 mt-2 md:mt-0 md:block ${open ? "block" : "hidden"}`}>
        {links.map((link) => {
          const baseStyle: React.CSSProperties = {
            fontSize: link.sub ? '12px' : '13px',
            color: link.sub ? '#e8e0d6' : '#e8e0d6',
            textDecoration: 'none',
            paddingLeft: link.sub ? '12px' : '0',
            display: 'block',
            transition: 'color 0.2s',
            fontWeight: 300,
          }

          const hoverColor = '#F5F5F2'

          return (
            <li key={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel || `${link.label} (abre em nova aba)`}
                  style={baseStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={e => (e.currentTarget.style.color = baseStyle.color as string)}
                >
                  {link.label === 'Antes, Pira' ? (
                    <>Antes<span style={{ color: '#eb5c2e' }}>,</span> Pira</>
                  ) : link.label}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              ) : (
                <Link
                  href={link.href}
                  aria-label={link.ariaLabel}
                  style={baseStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={e => (e.currentTarget.style.color = baseStyle.color as string)}
                >
                  {link.label === 'Antes, Pira' ? (
                    <>Antes<span style={{ color: '#eb5c2e' }}>,</span> Pira</>
                  ) : link.label}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  );
}

export function Footer() {
  return (
    <footer role="contentinfo" style={{ backgroundColor: '#05262e' }} className="pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="container-site">
        {/* Logo */}
        <Link
          href="/"
          className="inline-block mb-10 hover:opacity-80 transition-opacity"
          aria-label="Pira Labs — página inicial"
        >
          <Image
            src="/brand/COMPLETA_OFFWHITE.svg"
            alt="Logotipo PiraLabs"
            width={286}
            height={32}
            style={{ height: '32px', width: '286px' }}
          />
        </Link>

        {/* Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {footerColumns.map((col) => (
            <FooterColumn key={col.heading} heading={col.heading} links={col.links} />
          ))}
        </div>

        {/* Slogan — assinatura de marca, acima do separador */}
        <div style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 300,
              color: '#e8e0d6',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Liberamos o{" "}
            <span style={{ color: "#eb5c2e" }}>próximo</span>
            {" "}nível.
          </p>
        </div>

        {/* Separador */}
        <div className="h-px mb-8" style={{ backgroundColor: 'rgba(245,245,242,0.1)' }} />

        {/* Links legais */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-6"
          style={{ fontSize: '12px', color: '#e8e0d6' }}
        >
          <Link
            href="/politica-privacidade"
            style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F2')}
            onMouseLeave={e => (e.currentTarget.style.color = '#e8e0d6')}
          >
            Política de Privacidade
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href="/termos"
            style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F2')}
            onMouseLeave={e => (e.currentTarget.style.color = '#e8e0d6')}
          >
            Termos de Uso
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href="/cookies"
            style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F2')}
            onMouseLeave={e => (e.currentTarget.style.color = '#e8e0d6')}
          >
            Política de Cookies
          </Link>
        </div>

        {/* CNPJ e copyright */}
        <p
          className="text-center mb-1"
          style={{ fontSize: '12px', color: '#b0a596' }}
        >
          Pira Labs Consultoria Ltda. · CNPJ 46.954.891/0001-16 · São Paulo, Brasil
        </p>
        <p
          className="text-center mb-6"
          style={{ fontSize: '12px', color: '#b0a596' }}
          suppressHydrationWarning
        >
          © {new Date().getFullYear()} Pira Labs Consultoria Ltda. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
