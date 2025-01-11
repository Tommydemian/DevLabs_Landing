import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        "heading-primary": "var(--color-heading-primary)",
        "heading-secondary": "var(--color-heading-secondary)",
        "nav-link": "var(--color-nav-link)",
        "body-primary": "var(--color-text-body-primary)",
        "body-secondary": "var(--color-text-body-secondary)",
        inverse: "var(--color-text-inverse)",
        action: "var(--color-text-action)",
        "surface-primary": "var(--color-surface-primary)",
        "surface-secondary": "var(--color-surface-secondary)",
      },
      backgroundImage: {
        "link-gradient":
          "linear-gradient(191.27deg, #7b46a5 37.14%, #3a265a 180.24%)",
        "action-gradient": "linear-gradient(90deg, #7b46a5 0%, #2f1b3f 100%)",
        "button-gradient":
          "linear-gradient(86.05deg, #2a2559 -12.6%, #4c265a -12.6%, #8b51c0 187.74%)",
        "login-button":
          "linear-gradient(129.34deg,#1aeb90 -8.89%,#1ad19f 81.29%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
