import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        flowers: ['"Send Flowers"', 'cursive'],
        SansNarrow: ['"PT Sans Narrow"'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '0.6', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 1.2s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
