"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

// Mapa bidirecional PT ↔ EN para as 4 páginas com versão EN
const LANG_MAP: Record<string, string> = {
  "/": "/en",
  "/sobre": "/en/about",
  "/creative-business-turnaround": "/en/creative-business-turnaround",
  "/contato": "/en/contact",
  "/en": "/",
  "/en/about": "/sobre",
  "/en/creative-business-turnaround": "/creative-business-turnaround",
  "/en/contact": "/contato",
};

type ChildItem = { label: string; href: string };

type MenuItem = {
  label: string;
  href: string;
  children?: ChildItem[];
};

const menuItems: MenuItem[] = [
  {
    label: "Sobre",
    href: "/sobre",
    children: [
      { label: "Sobre a Pira Labs", href: "/sobre" },
      { label: "Creative Business Turnaround", href: "/creative-business-turnaround" },
    ],
  },
  {
    label: "Inspira",
    href: "/inspira",
    children: [
      { label: "Inspira", href: "/inspira" },
      { label: "Inspira Jurídico", href: "/inspira/juridico" },
      { label: "Oxigênio IA Search", href: "/inspira/oxigenio" },
    ],
  },
  {
    label: "Transpira",
    href: "/transpira",
    children: [
      { label: "Transpira", href: "/transpira" },
      { label: "Transpira Jurídico", href: "/transpira/juridico" },
    ],
  },
  {
    label: "Faísca",
    href: "/faisca",
    children: [
      { label: "Faísca", href: "/faisca" },
      { label: "Imersão em IA", href: "/faisca/imersa-em-ia" },
      { label: "Pocket do INSPIRA", href: "/faisca/pocket" },
      { label: "Faísca Jurídica", href: "/faisca/juridica" },
    ],
  },
  { label: "Antes, Pira", href: "/antes-pira" },
];

// Componente separado para item do menu mobile com submenu acordeão.
// Precisa ser componente próprio para poder usar useState sem violar Rules of Hooks.
function MobileMenuItem({
  item,
  pathname,
}: {
  item: MenuItem;
  pathname: string;
}) {
  const [subOpen, setSubOpen] = useState(false);
  const isCurrent = pathname === item.href || pathname.startsWith(item.href + "/");

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          aria-current={isCurrent ? "page" : undefined}
          className={`block py-4 text-lg font-body font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
            isCurrent ? "text-orange" : "text-off-white"
          }`}
        >
          {item.label}
        </Link>
        <div className="h-px bg-off-white/10" />
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setSubOpen((v) => !v)}
        aria-expanded={subOpen}
        className={`w-full flex items-center justify-between py-4 text-lg font-body font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
          isCurrent ? "text-orange" : "text-off-white"
        }`}
      >
        {item.label}
        <span
          className={`text-sm transition-transform duration-200 ${subOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      {subOpen && (
        <ul className="pl-4 pb-2 space-y-0">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block py-3 text-base font-body text-off-white/70 hover:text-off-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="h-px bg-off-white/10" />
    </li>
  );
}

export function Header({ theme = "ink" }: { theme?: "ink" | "sand" }) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isEN = pathname.startsWith("/en");
  const altPath = LANG_MAP[pathname] ?? null;

  function handleLangSwitch(targetLang: "pt" | "en") {
    document.cookie = `pira_lang=${targetLang};path=/;max-age=31536000;SameSite=Lax`;
    if (altPath) router.push(altPath);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha menu mobile ao navegar
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Esc fecha menu mobile
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Trava scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleDropdownEnter(label: string) {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(label), 150);
  }

  function handleDropdownLeave() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 300);
  }

  const ctaHref = "/contato?origem=header_global";

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-sm"
          : "bg-ink"
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            aria-label="Pira Labs — página inicial"
          >
            <Image
              src={theme === "sand" ? "/brand/COMPLETA_INK.svg" : "/brand/COMPLETA_BRANCA.svg"}
              alt="Logotipo PiraLabs"
              width={286}
              height={32}
              className="h-7 md:h-8 w-auto"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Nav desktop */}
          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isCurrent =
                pathname === item.href || pathname.startsWith(item.href + "/");
              const hasChildren = Boolean(item.children?.length);
              const isDropOpen = openDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && handleDropdownEnter(item.label)}
                  onMouseLeave={() => hasChildren && handleDropdownLeave()}
                >
                  <Link
                    href={item.href}
                    aria-haspopup={hasChildren ? "true" : undefined}
                    aria-expanded={hasChildren ? isDropOpen : undefined}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-body font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                      isCurrent
                        ? "text-orange"
                        : "text-off-white/80 hover:text-off-white"
                    }`}
                  >
                    {item.label}
                    {hasChildren && (
                      <span className="text-xs opacity-60" aria-hidden="true">
                        ▾
                      </span>
                    )}
                  </Link>

                  {/* Dropdown desktop */}
                  {hasChildren && isDropOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 min-w-[200px] bg-deep-teal border border-teal/30 rounded shadow-lg py-1"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm font-body text-off-white/80 hover:text-off-white hover:bg-teal/40 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Toggle PT/EN + CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-body font-medium" aria-label="Idioma / Language">
              <button
                type="button"
                onClick={() => handleLangSwitch("pt")}
                className={`px-2 py-1 rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                  !isEN ? "text-orange" : "text-off-white/40 hover:text-off-white/70"
                }`}
                aria-current={!isEN ? "true" : undefined}
              >
                PT
              </button>
              <span className="text-off-white/20" aria-hidden="true">/</span>
              <button
                type="button"
                onClick={() => handleLangSwitch("en")}
                className={`px-2 py-1 rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                  isEN ? "text-orange" : altPath ? "text-off-white/40 hover:text-off-white/70" : "text-off-white/20 cursor-not-allowed"
                }`}
                aria-current={isEN ? "true" : undefined}
                disabled={!isEN && !altPath}
              >
                EN
              </button>
            </div>
            <Link
              href={ctaHref}
              className="min-h-[44px] px-5 py-3 bg-orange text-ink font-body font-medium text-sm rounded transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              Respire
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-11 h-11 text-off-white hover:text-orange transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            aria-label={
              mobileOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="text-2xl leading-none" aria-hidden="true">
              {mobileOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Painel mobile */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-ink z-40 overflow-y-auto">
          <nav
            aria-label="Menu de navegação mobile"
            className="container-site py-6"
          >
            <ul className="space-y-0">
              {menuItems.map((item) => (
                <MobileMenuItem key={item.label} item={item} pathname={pathname} />
              ))}
            </ul>
            {/* Toggle PT/EN mobile */}
            <div className="pt-4 pb-2 flex items-center gap-2" aria-label="Idioma / Language">
              <button
                type="button"
                onClick={() => handleLangSwitch("pt")}
                className={`px-3 py-2 text-sm font-body font-medium rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                  !isEN ? "text-orange" : "text-off-white/50 hover:text-off-white/80"
                }`}
                aria-current={!isEN ? "true" : undefined}
              >
                PT
              </button>
              <span className="text-off-white/20 text-sm" aria-hidden="true">/</span>
              <button
                type="button"
                onClick={() => handleLangSwitch("en")}
                className={`px-3 py-2 text-sm font-body font-medium rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                  isEN ? "text-orange" : altPath ? "text-off-white/50 hover:text-off-white/80" : "text-off-white/20 cursor-not-allowed"
                }`}
                aria-current={isEN ? "true" : undefined}
                disabled={!isEN && !altPath}
              >
                EN
              </button>
            </div>
            {/* CTA dentro do menu mobile */}
            <div className="pt-4">
              <Link
                href={ctaHref}
                className="block w-full text-center min-h-[52px] px-6 py-4 bg-orange text-ink font-body font-medium text-base rounded transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                Respire
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
