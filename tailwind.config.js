/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Light mode only theme
        primary: "#ffffff", // Main background
        secondary: "#f5f5f5", // Secondary background
        accent: "#333333", // Dark accent
        "accent-light": "#e0e0e0", // Light accent
        "text-primary": "#0a0a0a", // Primary text
        "text-secondary": "#4a4a4a", // Secondary text
        "text-muted": "#6e6e6e", // Muted text
        "gray-light": "#e5e5e5", // Light gray
        "gray-medium": "#d4d4d4", // Medium gray
        "gray-dark": "#9e9e9e", // Dark gray
      },
      boxShadow: {
        card: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)",
        button: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to bottom right, rgba(245, 245, 245, 0.8), rgba(230, 230, 230, 0.9))",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.5s ease-in-out forwards",
        "slide-down": "slideDown 0.5s ease-in-out forwards",
        "slide-left": "slideLeft 0.5s ease-in-out forwards",
        "slide-right": "slideRight 0.5s ease-in-out forwards",
        "scale-in": "scaleIn 0.5s ease-in-out forwards",
        "bounce-subtle": "bounceSubtle 2s infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
};
