import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { SkipLink } from "@/components/shared/SkipLink";
import { CookieBannerLoader } from "@/components/CookieBannerLoader";
import "./globals.css";

/* Sistema tipográfico definitivo (kit KZ — decisão D10):
   AtypDisplay → headings H1–H4, CTAs, wordmark.
   AtypText    → body, nav, UI, forms, FAQs.
   Fallback para ambos: 'Plus Jakarta Sans', sans-serif.
   AtypText-Regular ainda não disponível — Medium (500) serve como 400 até chegar. */

const atypDisplay = localFont({
  src: [
    { path: "../public/fonts/AtypDisplay-Light.ttf",    weight: "300", style: "normal" },
    { path: "../public/fonts/AtypDisplay-Regular.ttf",  weight: "400", style: "normal" },
    { path: "../public/fonts/AtypDisplay-Medium.ttf",   weight: "500", style: "normal" },
    { path: "../public/fonts/AtypDisplay-Semibold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/AtypDisplay-Bold.ttf",     weight: "700", style: "normal" },
  ],
  variable: "--font-atyp-display",
  display: "swap",
  fallback: ["Plus Jakarta Sans", "sans-serif"],
});

const atypText = localFont({
  src: [
    { path: "../public/fonts/AtypText-Light.ttf",    weight: "300", style: "normal" },
    { path: "../public/fonts/AtypText-Medium.ttf",   weight: "400", style: "normal" },
    { path: "../public/fonts/AtypText-Medium.ttf",   weight: "500", style: "normal" },
    { path: "../public/fonts/AtypText-Semibold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-atyp-text",
  display: "swap",
  fallback: ["Plus Jakarta Sans", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piralabs.com.br"),
  title: {
    default: "Pira Labs · Creative Business Turnaround para empresas de serviços",
    template: "%s · Pira Labs",
  },
  description:
    "A Pira Labs é uma boutique brasileira de Creative Business Turnaround. Atuamos antes da crise, quando ainda dá para mudar com tranquilidade.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.json",
  openGraph: {
    siteName: "Pira Labs",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://piralabs.com.br/piralabs-og-image.png",
        width: 1200,
        height: 630,
        alt: "Pira Labs · Creative Business Turnaround",
      },
    ],
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
      className={`${atypDisplay.variable} ${atypText.variable}`}
      suppressHydrationWarning
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
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
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
