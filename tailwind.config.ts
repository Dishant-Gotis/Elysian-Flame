import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6CA651',
        accent: '#BBCB2E',
        olive: '#839705',
        sage: '#6B7445',
        charcoal: '#2B2B2B',
        cream: {
          50: '#FAF9F6',
          100: '#F5F3ED',
        },
        background: '#FFFFFF',
        foreground: '#2B2B2B',
        card: '#FFFFFF',
        'card-foreground': '#2B2B2B',
        popover: '#FFFFFF',
        'popover-foreground': '#2B2B2B',
        muted: '#F5F3ED',
        'muted-foreground': '#6B7445',
        border: '#E5E5E5',
        input: '#E5E5E5',
        ring: '#6CA651',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        lora: ['var(--font-lora)', 'serif'],
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(108, 166, 81, 0.1)',
        'glass-lg': '0 12px 48px 0 rgba(108, 166, 81, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
