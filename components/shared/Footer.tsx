"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SOCIAL } from "@/lib/constants";
import { LegalNotice } from "./LegalNotice";

const footerColumns = [
  {
    heading: "Institucional",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Creative Business Turnaround", href: "/creative-business-turnaround" },
      { label: "Antes, Pira", href: "/antes-pira" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    heading: "O que fazemos",
    links: [
      { label: "Inspira", href: "/inspira" },
      { label: "Oxigênio IA Search", href: "/inspira/oxigenio" },
      { label: "Transpira", href: "/transpira" },
      { label: "Faísca", href: "/faisca" },
    ],
  },
  {
    heading: "Vertical Jurídica",
    links: [
      { label: "Inspira Jurídico", href: "/inspira/juridico" },
      { label: "Transpira Jurídico", href: "/transpira/juridico" },
      { label: "Faísca Jurídica", href: "/faisca/juridica" },
    ],
  },
  {
    heading: "Contato",
    links: [
      {
        label: "inspira@piralabs.com.br",
        href: "mailto:inspira@piralabs.com.br",
        external: false,
        ariaLabel: "Enviar email para Pira Labs",
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
  links: { label: string; href: string; external?: boolean; ariaLabel?: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <section>
      {/* Desktop: heading estático */}
      <h2 className="hidden md:block text-xs font-semibold uppercase tracking-widest text-off-white/50 mb-4 font-body">
        {heading}
      </h2>

      {/* Mobile: heading como botão acordeão */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="md:hidden w-full flex items-center justify-between py-3 text-sm font-semibold uppercase tracking-widest text-off-white/50 font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
      >
        {heading}
        <span className={`text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true">▾</span>
      </button>
      <div className="h-px bg-off-white/10 md:hidden" />

      {/* Links */}
      <ul className={`space-y-2 mt-2 md:mt-0 md:block ${open ? "block" : "hidden"}`}>
        {links.map((link) =>
          link.external ? (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel || `${link.label} (abre em nova aba)`}
                className="text-sm font-body text-off-white/60 hover:text-off-white transition-colors"
              >
                {link.label}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          ) : (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-label={link.ariaLabel}
                className="text-sm font-body text-off-white/60 hover:text-off-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-ink pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="container-site">
        {/* Logo */}
        <Link
          href="/"
          className="inline-block mb-10 hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          aria-label="Pira Labs — página inicial"
        >
          <Image
            src="/brand/logo-completo-offwhite.svg"
            alt="Pira Labs"
            width={286}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {footerColumns.map((col) => (
            <FooterColumn key={col.heading} heading={col.heading} links={col.links} />
          ))}
        </div>

        {/* Separador */}
        <div className="h-px bg-off-white/10 mb-8" />

        {/* Assinatura Cormorant */}
        <p className="font-display text-2xl italic text-orange text-center mb-8">
          Liberamos o próximo nível.
        </p>

        {/* Links legais */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs font-body text-off-white/40">
          <Link href="/politica-privacidade" className="hover:text-off-white/70 transition-colors">
            Política de Privacidade
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/termos" className="hover:text-off-white/70 transition-colors">
            Termos de Uso
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/cookies" className="hover:text-off-white/70 transition-colors">
            Aviso de Cookies
          </Link>
        </div>

        {/* CNPJ e copyright */}
        <p className="text-xs font-body text-off-white/30 text-center mb-1">
          Pira Labs · CNPJ 46.954.891/0001-16 · São Paulo, Brasil
        </p>
        {/* suppressHydrationWarning evita mismatch SSR/cliente no getFullYear() */}
        <p className="text-xs font-body text-off-white/30 text-center mb-6" suppressHydrationWarning>
          © {new Date().getFullYear()} Pira Labs. Todos os direitos reservados.
        </p>

        {/* Aviso jurídico */}
        <LegalNotice variant="short" />
      </div>
    </footer>
  );
}
