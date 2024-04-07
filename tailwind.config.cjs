const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './app/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'my-primary': '#33d2ff',
        'my-secondary': '#9845e8',
        'my-tertiary': '#dd5789',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        text: {
          to: {
            backgroundPosition: '200% center',
          },
        },
        'pulse-fade-in': {
          '0%': {
            transform: 'scale(1)',
          },
          '10%': {
            transform: 'scale(0.8)',
          },
          '20%': {
            transform: 'scale(1.08)',
          },
          '30%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'text-gradient': 'text 1.5s linear infinite',
        'pulse-fade-in': 'pulse-fade-in 2.5s ease-out infinite',
      },

      fontSize: {
        h1: '4.50rem',
        h2: '3.50rem',
        h3: '2.75rem',
        h4: '2.00rem',
        h5: '1.50rem',
        h6: '1.20rem',
        subtitle1: '1.00rem',
        subtitle2: '0.85rem',
        body1: '1.00rem',
        body2: '0.85rem',
        caption: '0.70rem',
        overline: '0.60rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function astroComponentsPlugin({ addComponents }) {
      addComponents({
        '.dark-mode': {
          colorScheme: 'dark light',
        },
        '.h-my-screen': {
          height: ['100vh', '100dvh'],
        },
        '.mask-my-image': {
          WebkitMaskImage: 'linear-gradient(black 80%, transparent 95%)',
          maskImage: 'linear-gradient(black 80%, transparent 95%);',
        },
      })
    }),
  ],
}
