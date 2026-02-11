import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#6CA651',
          DEFAULT: '#6CA651',
        },
        accent: {
          lime: '#BBCB2E',
          olive: '#839705',
          sage: '#6B7445',
        },
        cream: '#FAF8F5',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-raleway)', 'Raleway', 'sans-serif'],
      },
      boxShadow: {
        'botanical': '0 4px 12px rgba(108, 166, 81, 0.1)',
        'botanical-lg': '0 8px 24px rgba(108, 166, 81, 0.15)',
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
      },
    },
  },
  plugins: [],
};
export default config;
