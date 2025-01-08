import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultText: "#fff",
        cardBackgroundColor: "#292929",
        'gray': "#b3b3b3",
        // background: "#202020",
        primary: "#FF06FF",
        // primary: "#8aff80",
        "primary-light": "#7a00be",
        foreground: "var(--foreground)",
      },
      container: {
        screens: {
          DEFAULT: "1290px",
        },
        center: true,
        padding: "1.2rem",
      },
      backgroundImage: {
        "black-gradient":
          "linear-gradient(178deg, rgba(0, 0, 0, 0.00) 44.14%, #000 98.09%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        xs: "540px", // min-width
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        hoverFade: {
          '0%': { opacity: '0.5', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(-10px)' },
        },
        hoverSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(10px)' },
        },
        hoverBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        barExpand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        
      },
      
    },
  },
    darkMode: "class",
    plugins: [nextui()],
};
export default config;
