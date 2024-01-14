module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3490dc",
          600: "#2779bd",
        },
        gray: {
          100: "#f7fafc",
          500: "#718096",
        },
        white: "#ffffff",
        red: { 100: "#ff0000" },
      },
      boxShadow: {
        lg: "0 10px 20px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        default: "0.375rem",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Courier", "monospace"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      margin: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        auto: "auto",
        px: "1px",
      },
      padding: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
      },
      width: {
        card: "18rem",
        "1/2": "50%",
        "3/4": "75%",
      },
      height: {
        card: "20rem",
        "1/4": "25%",
        "1/2": "50%",
        "2/3": "66.666667%",
        "3/4": "75%",
        screen: "100vh",
      },
      aspectRatio: {
        square: [1, 1],
      },
      transitionProperty: {
        transform: "transform",
      },
      scale: {
        105: "1.05",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
