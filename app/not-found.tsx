import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORIGINS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

const links = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Creative Business Turnaround", href: "/creative-business-turnaround" },
  { label: "Inspira (e Inspira Jurídico, Oxigênio IA Search)", href: "/inspira" },
  { label: "Transpira (e Transpira Jurídico)", href: "/transpira" },
  { label: "Faísca (e Faísca Jurídica)", href: "/faisca" },
  { label: "Antes, Pira", href: "/antes-pira" },
];

export default function NotFound() {
  return (
    <main id="main-content" className="section-padding">
      <div className="container-site max-w-2xl">
        {/* Breadcrumb simples */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1 text-sm text-off-white/50 font-body">
            <li>
              <Link href="/" className="hover:text-orange transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="mx-1">·</li>
            <li aria-current="page">404</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-5xl font-semibold text-off-white mb-6 leading-tight">
          Essa página não existe na PIRA LABS
        </h1>

        <p className="text-off-white/75 font-body leading-relaxed mb-10">
          Talvez o link tenha mudado, ou talvez você esteja procurando algo que ainda não publicamos. Aqui estão os caminhos principais:
        </p>

        <ul className="space-y-3 mb-12" aria-label="Páginas disponíveis">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-2 text-off-white/80 hover:text-orange font-body transition-colors group"
              >
                <span className="text-orange group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <CTAButton variant="primary" href="/contato" origin={ORIGINS.NOT_FOUND}>
          Falar com a PIRA LABS →
        </CTAButton>
      </div>
    </main>
  );
}
