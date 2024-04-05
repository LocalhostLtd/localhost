import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        'primary-content': '#FFFFFF',
        secondary: '#044C4C',
        accent: '#3EFBCB',
        customGreen: '#044C4C',
        'base-100': '#000000',
        textPrimary: '#FFFFFF',
        textSecondary: '#3EFBCB',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['monospace', 'sans-serif']
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ffffff",
          "secondary": "#ff00ff",
          "accent": "#00ffff",
          "neutral": "#ff00ff",
          "base-100": "#000000",
          "info": "#0000ff",
          "success": "#00ff00",
          "warning": "#00ff00",
          "error": "#ff0000",
        },
      },
      "dark", "bumblebee",
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
