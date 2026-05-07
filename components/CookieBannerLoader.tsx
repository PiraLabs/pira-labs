"use client";

import dynamic from "next/dynamic";

const CookieBanner = dynamic(
  () => import("@/components/shared/CookieBanner").then((m) => m.CookieBanner),
  { ssr: false, loading: () => null }
);

export function CookieBannerLoader() {
  return <CookieBanner />;
}
