import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { SkipLink } from "@/components/shared/SkipLink";
import { CookieBannerLoader } from "@/components/CookieBannerLoader";
import "./globals.css";

/* Sistema Caminho C:
   Space Grotesk → tudo (body, UI, headers de página, navegação, botões, footer).
   Substituta da Groteske até licenciamento final da KZ.
   Manter --font-grotesk para não refatorar quando a fonte definitiva chegar.

   Cormorant Garamond → APENAS frases canônicas, citações dos fundadores e números de destaque.
   NÃO usar em headers de seção, navegação, body, UI ou botões. */

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  display: "swap",
});

const grotesk = Space_Grotesk({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piralabs.com.br"),
  title: {
    default: "PIRA LABS · Creative Business Turnaround para empresas de serviços",
    template: "%s · PIRA LABS",
  },
  description:
    "A PIRA LABS é uma boutique brasileira de Creative Business Turnaround. Atuamos antes da crise, quando ainda dá para mudar com tranquilidade.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.json",
  openGraph: {
    siteName: "PIRA LABS",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${grotesk.variable}`}
    >
      <body className="font-body bg-deep-teal text-off-white antialiased">
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBannerLoader />
      </body>

      {/* Google Analytics G-Q9W3V4GPQ8 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q9W3V4GPQ8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q9W3V4GPQ8');
        `}
      </Script>
    </html>
  );
}
