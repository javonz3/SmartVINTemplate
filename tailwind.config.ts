import type { Config } from "tailwindcss";
// @ts-ignore
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // iOS-specific breakpoints
      screens: {
        'xs': '375px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1440px',
        'xl': '1920px',
      },
      
      // iOS Color System
      colors: {
        ios: {
          blue: '#007AFF',
          'blue-light': '#409CFF',
          'blue-dark': '#0056CC',
          teal: '#30B0C7',
          orange: '#FF9500',
          purple: '#5856D6',
          'background-light': '#F5F5F7',
          'background-dark': '#000000',
          'surface-light': 'rgba(255, 255, 255, 0.8)',
          'surface-dark': 'rgba(30, 30, 30, 0.8)',
          'text-light': '#1D1D1F',
          'text-dark': '#F5F5F7',
          'text-secondary': '#8E8E93',
          'border-light': 'rgba(255, 255, 255, 0.18)',
          'border-dark': 'rgba(255, 255, 255, 0.12)',
        },
        primary: "#007AFF",
        muted: "#8E8E93",
        "muted-dark": "#636366",
      },
      
      // iOS Typography Scale
      fontSize: {
        'ios-h1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'ios-h2': ['40px', { lineHeight: '48px', fontWeight: '600' }],
        'ios-h3': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'ios-body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'ios-caption': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'ios-large': ['20px', { lineHeight: '28px', fontWeight: '500' }],
      },
      
      // iOS Font Family
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'sf-pro-text': ['SF Pro Text', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      
      // iOS Shadows
      boxShadow: {
        'ios-card': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'ios-button': '0 4px 16px rgba(0, 122, 255, 0.3)',
        'ios-navbar': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'ios-hero': '0 20px 40px rgba(0, 0, 0, 0.1)',
        derek: `0px 0px 0px 1px rgb(0 0 0 / 0.06),
        0px 1px 1px -0.5px rgb(0 0 0 / 0.06),
        0px 3px 3px -1.5px rgb(0 0 0 / 0.06), 
        0px 6px 6px -3px rgb(0 0 0 / 0.06),
        0px 12px 12px -6px rgb(0 0 0 / 0.06),
        0px 24px 24px -12px rgb(0 0 0 / 0.06)`,
        aceternity: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      
      // iOS Border Radius
      borderRadius: {
        'ios-card': '16px',
        'ios-modal': '24px',
        'ios-button': '12px',
        'ios-input': '10px',
      },
      
      // iOS Backdrop Blur
      backdropBlur: {
        'ios': '10px',
        'ios-nav': '8px',
      },
      
      // iOS Animations
      animation: {
        'ios-float': 'ios-float 6s ease-in-out infinite',
        'ios-pulse': 'ios-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ios-scale': 'ios-scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        marquee: "marquee var(--marquee-duration) linear infinite",
        "fade-in": "fade-in 0.5s linear forwards",
      },
      
      // iOS Keyframes
      keyframes: {
        'ios-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'ios-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'ios-scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      
      // iOS Transitions
      transitionTimingFunction: {
        'ios': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'ios-gradient': 'linear-gradient(135deg, #007AFF 0%, #30B0C7 100%)',
      },
    },
  },
  // @ts-ignore
  plugins: [addVariablesForColors, require("@tailwindcss/typography")],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
