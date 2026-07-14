/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream:  '#F5F0E8',
        ink:    '#0A0A0A',
        violet: {
          DEFAULT: '#7C3AED',
          light:   '#A78BFA',
          dark:    '#5B21B6',
          soft:    '#EDE9FE',
        },
        lime:   '#B5FF4D',
        coral:  '#FF6B5B',
        sky:    '#38BDF8',
      },
      backgroundImage: {
        'blob-1': 'radial-gradient(ellipse 120% 80% at 10% 20%, rgba(124,58,237,0.18) 0%, transparent 55%)',
        'blob-2': 'radial-gradient(ellipse 90% 70% at 90% 80%, rgba(56,189,248,0.14) 0%, transparent 55%)',
        'blob-3': 'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(181,255,77,0.10) 0%, transparent 60%)',
        'noise':  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        'hero-gradient': 'linear-gradient(135deg, #F5F0E8 0%, #EDE9FE 40%, #F5F0E8 100%)',
        'dark-base':     'linear-gradient(135deg, #0A0A0A 0%, #120F1F 40%, #0A0A0A 100%)',
      },
      fontSize: {
        'fluid-xl':  'clamp(2.5rem, 6vw, 5rem)',
        'fluid-2xl': 'clamp(3.5rem, 9vw, 8rem)',
        'fluid-3xl': 'clamp(4rem, 12vw, 11rem)',
      },
      animation: {
        'spin-slow':   'spin 18s linear infinite',
        'float':       'float 6s ease-in-out infinite',
        'blob-drift':  'blobDrift 12s ease-in-out infinite',
        'marquee':     'marquee 22s linear infinite',
        'fade-up':     'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'scale-in':    'scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'slide-right': 'slideRight 0.7s cubic-bezier(0.22,1,0.36,1) both',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':     { transform: 'translateY(-20px) rotate(3deg)' },
        },
        blobDrift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%':     { transform: 'translate(-20px,15px) scale(0.97)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
    },
  },
  plugins: [],
};
