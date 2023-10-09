/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        accent: {
          50: "rgba(230, 238, 246, 1)",
          100: "rgba(176, 202, 227, 1)",
          500: "rgba(0, 76, 149, 1)",
          600: "rgba(0, 84, 166, 1)",
          700: "rgba(0, 76, 149, 1)",
          800: "rgba(0, 67, 133, 1)",
          900: "rgba(0, 50, 100, 1)",
        },
        primary: {
          1: "rgba(5, 54, 85, 1)",
          2: "rgba(4, 41, 64, 1)",
        },
        secondary: {
          1: "rgba(225, 229, 239, 1)",
          2: "rgba(242, 245, 250, 1)",
        },
        day: {
          heading: "rgba(0, 18, 26, 1)",
          white: {
            8: "rgba(255, 255, 255, 0.08)",
          },
        },
        disable: "rgba(0, 0, 0, 0.30)",
        disabled: "rgba(219, 219, 219, 1)",
        content: {
          heading: "rgba(0, 0, 0, 1)",
          subtitle: "rgba(0, 0, 0, 0.84)",
          body: "rgba(0, 0, 0, 0.74)",
          placeholder: "rgba(0, 0, 0, 0.54)",
          disable: "rgba(0, 0, 0, 0.30)",
        },
        success: {
          light: "rgba(228, 245, 230, 1)",
          base: "rgba(49, 166, 143, 1)",
          dark: "rgba(0, 85, 10, 1)",
        },
        error: {
          light: "rgba(255, 231, 231, 1)",
          base: "rgba(231, 76, 76, 1)",
          dark: "rgba(140, 5, 5, 1)",
        },
        info: {
          light: "rgba(231, 252, 255, 1)",
          base: "rgba(0, 184, 209, 1)",
          dark: "rgba(0, 76, 87, 1)",
        },
        warning: {
          light: "rgba(255, 249, 238, 1)",
          base: "rgba(254, 215, 130, 1)",
          dark: "rgba(83, 60, 9, 1)",
        },
        state: {
          sucess: {
            light: "rgba(228, 245, 230, 1)",
            base: "rgba(49, 166, 143, 1)",
            dark: "rgba(0, 85, 10, 1)",
          },
          error: {
            light: "rgba(255, 231, 231, 1)",
            base: "rgba(231, 76, 76, 1)",
            dark: "rgba(140, 5, 5, 1)",
          },
          info: {
            light: "rgba(231, 252, 255, 1)",
            base: "rgba(0, 184, 209, 1)",
            dark: "rgba(0, 76, 87, 1)",
          },
          warning: {
            light: "rgba(255, 249, 238, 1)",
            base: "rgba(254, 215, 130, 1)",
            dark: "rgba(83, 60, 9, 1)",
          },
        },
        line: {
          stroke: {
            default: "rgba(203, 213, 225, 1)",
            focus: "rgba(39, 39, 39, 1)",
          },
          divider: "rgba(223, 227, 229, 0.8)",
        },
        icon: {
          default: "rgba(62, 61, 75, 1)",
          disable: "rgba(163, 163, 169, 1)",
        },
        scrim: {
          overlay: "rgba(39, 39, 39, 0.24)",
        },
        button: {
          normal: {
            700: "rgba(13, 109, 145, 1)",
            800: "rgba(3, 82, 111, 1)",
          },
          stroke: "rgba(226, 232, 240, 1)",
        },
      },
      boxShadow: {
        dropdown: " 0px 4px 6px 0px rgba(0, 0, 0, 0.09)",
      },
      fontFamily: {
        heading: ["orpheuspro", "sans-serif"],
        content: ["neue-haas-grotesk-text", "sans-serif"],
      },
      fontSize: {
        h1: [
          "2.625rem",
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        h2: [
          "2.1875rem",
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        h3: [
          "1.8125rem",
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        h6: [
          "1rem",
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        s1: [
          "1.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "400",
          },
        ],
        s2: [
          "1.25rem",
          {
            lineHeight: "1.3",
            fontWeight: "400",
          },
        ],
        s3: [
          "1rem",
          {
            lineHeight: "1.4",
            fontWeight: "400",
          },
        ],
        b1: [
          "1rem",
          {
            lineHeight: "1.4",
            fontWeight: "400",
          },
        ],
        "b1-b": [
          "1rem",
          {
            lineHeight: "1.4",
            fontWeight: "500",
          },
        ],
        b2: [
          "0.875rem",
          {
            lineHeight: "1.4",
            fontWeight: "400",
          },
        ],
        "b2-b": [
          "0.875rem",
          {
            lineHeight: "1.4",
            fontWeight: "500",
          },
        ],

        c1: [
          "0.8125rem",
          {
            lineHeight: "1.3",
            fontWeight: "400",
          },
        ],
        "c1-b": [
          "0.8125rem",
          {
            lineHeight: "1.3",
            fontWeight: "500",
          },
        ],
        c2: [
          "0.6875rem",
          {
            lineHeight: "1.3",
            fontWeight: "400",
          },
        ],
        "c2-b": [
          "0.6875rem",
          {
            lineHeight: "1.3",
            fontWeight: "500",
          },
        ],
      },
      backgroundImage: {
        "auth-background": "url('/assets/bg-auth.png)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
