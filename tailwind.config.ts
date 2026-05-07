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
        "deep-teal": "#05262D",
        teal: "#004756",
        orange: "#EA6335",
        peach: "#F2A85E",
        "off-white": "#E8E0D6",
      },
      fontFamily: {
        /* Sistema Caminho C:
           Space Grotesk (font-body) para tudo: body, UI, headers de página, navegação, botões, footer.
           Cormorant Garamond (font-display) APENAS em frases canônicas, citações dos fundadores
           e números de destaque. NÃO usar em headers de seção, body, navegação ou UI. */
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-grotesk)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
