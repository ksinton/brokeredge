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
        'brand-primary': "#17843d",
        'forground-light': "#fff",
        'forground-form-field': "#000",
        'logo-text-color': "#027701",
        'header-background': "#003258",
        'top-menu-background': "#003258",
        'mobile-header-background': "#326427",
        'mobile-header-dark-background': "#0c5122",
      },
    },
  },
  plugins: [],
} satisfies Config;