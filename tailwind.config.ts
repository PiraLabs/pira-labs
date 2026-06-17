import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:        '#05262e',
        'deep-teal':'#05262e',
        teal:       '#004757',
        tealMid:    '#1A5568',
        sand:       '#e8e0d6',
        'off-white':'#e8e0d6',
        white:      '#F5F5F2',
        taupe:      '#b0a596',
        ember:      '#eb5c2e',
        orange:     '#eb5c2e',
        emberDeep:  '#C4421A',
        black:      '#000000',
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
