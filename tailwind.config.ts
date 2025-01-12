import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      micro: ["var(--fs-micro)", { lineHeight: "1.2" }],
      xs: ["var(--fs-xs)", { lineHeight: "1.063rem" }],
      "s-15": ["var(--fs-s-15)]", { lineHeight: "2rem" }],
      "m-20": ["var(--fs-m-20)]", { lineHeight: "2rem" }],
      "m-22": ["var(--fs-m-22)]", { lineHeight: "1.625rem" }],

      // Semantic
      "btn-desktop": ["var(--fs-m-20)", { lineHeight: "1.513rem" }],
      "btn-mobile": ["var(--fs-m-18)", { lineHeight: "1.375rem" }],

      "h1-desktop": ["var(--fs-xl)", { lineHeight: "4.375rem" }],
      "h1-mobile": ["var(--fs-lg-32)", { lineHeight: "1" }],

      "body-lg-desktop": ["var(--fs-m-22)", { lineHeight: "1.625rem" }],
      "body-lg-mobile": ["var(--fs-s-15)", { lineHeight: "1.438rem" }],

      "nav-action-desktop": ["var(--fs-xs)", { lineHeight: "1.063rem" }],

      "feature-heading-desktop": ["var(--fs-lg-40)", { lineHeight: "2rem" }],
      "feature-heading-mobile": ["var(--fs-lg-32)", { lineHeight: "1" }],
      "feature-description-desktop": [
        "var(--fs-m-20)",
        { lineHeight: "1.563rem" },
      ],
      "feature-description-mobile": [
        "var(--fs-s-15)",
        { lineHeight: "1.563rem" },
      ],
    },
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
      padding: {
        "nav-wrapper": "var(--nav-wrapper-padding)",
        "section-block": "var(--section-padding-block)",
        xl: "var(--size-64)",
      },
      margin: {},
      space: {},
      borderRadius: {
        button: "var(--br-button)",
        "nav-wrapper": "var(--br-nav-wrapper)",
      },
    },
  },
  plugins: [],
} satisfies Config;
