/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#7C5DFA",
          hover: "#9277FF",
        },

        paid: { bg: "#F3FDF9", text: "#33D69F" },
        pending: { bg: "#FFF8F0", text: "#FF8F00" },
        draft: { bg: "#F4F4F5", text: "#373B53" },

        "paid-dark": { bg: "rgba(51,214,159,0.06)", text: "#33D69F" },
        "pending-dark": { bg: "rgba(255,143,0,0.06)", text: "#FF8F00" },
        "draft-dark": { bg: "rgba(223,227,250,0.06)", text: "#DFE3FA" },

        "col-white": "#FFFFFF",
        "col-bg": "#F8F8FB",
        "col-card": "#FFFFFF",
        "col-border": "#DFE3FA",
        "col-text": "#0C0E16",
        "col-muted": "#888EB0",
        "col-label": "#7E88C3",

        "col-dark-bg": "#141625",
        "col-dark-card": "#1E2139",
        "col-dark-ele": "#252945",
        "col-dark-border": "#252945",
        "col-dark-text": "#FFFFFF",
        "col-dark-muted": "#DFE3FA",
        "col-dark-label": "#888EB0",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      fontSize: {
        "heading-l": [
          "2rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.063rem",
            fontWeight: "700",
          },
        ],
        "heading-m": [
          "1.5rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "-0.047rem",
            fontWeight: "700",
          },
        ],
        "heading-s": [
          "0.938rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "-0.016rem",
            fontWeight: "700",
          },
        ],
        body: [
          "0.813rem",
          {
            lineHeight: "1.375rem",
            letterSpacing: "0.006rem",
            fontWeight: "500",
          },
        ],
        "body-bold": [
          "0.813rem",
          {
            lineHeight: "1.375rem",
            letterSpacing: "-0.01rem",
            fontWeight: "700",
          },
        ],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        full: "9999px",
      },
      boxShadow: {
        card: "0px 10px 10px -10px rgba(72,84,159,0.10)",
        "card-dark": "0px 10px 10px -10px rgba(0,0,0,0.25)",
        dropdown: "0px 10px 20px rgba(72,84,159,0.25)",
        "dropdown-dark": "0px 10px 20px rgba(0,0,0,0.40)",
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.35s cubic-bezier(0.4,0,0.2,1)",
        "fade-in": "fade-in 0.2s ease",
        "scale-in": "scale-in 0.2s cubic-bezier(0.4,0,0.2,1)",
      },
    },
  },
  plugins: [],
};
