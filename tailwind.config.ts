import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(22,66,74,0.5)",
        background_var_01: "rgba(255,255,255,0.08)",
        foreground: "var(--foreground)",
        border_main: "rgba(140,140,140,0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
