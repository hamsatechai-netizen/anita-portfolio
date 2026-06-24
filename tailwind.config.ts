import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        teal: "#14B8A6",
        mist: "#F8FAFC",
        ink: "#111827"
      },
      fontFamily: {
        heading: ["Poppins", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        executive: "0 24px 80px rgba(15, 23, 42, 0.14)"
      }
    }
  },
  plugins: [forms, typography]
};

export default config;
