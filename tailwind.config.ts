import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0C0F16",
        "deep-teal": "#05262E",
        teal: "#004757",
        orange: "#EB5C2E",
        "off-white": "#E8E0D6",
      },
      fontFamily: {
        /* Sistema tipográfico KZ (decisão D10):
           atypDisplay / display → H1–H4, CTAs, wordmark.
           atypText / body       → body, nav, UI, forms, FAQs.
           display e body mantidos como aliases para não refatorar o codebase. */
        atypDisplay: ["var(--font-atyp-display)", "'Plus Jakarta Sans'", "sans-serif"],
        atypText:    ["var(--font-atyp-text)",    "'Plus Jakarta Sans'", "sans-serif"],
        display:     ["var(--font-atyp-display)", "'Plus Jakarta Sans'", "sans-serif"],
        body:        ["var(--font-atyp-text)",    "'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
