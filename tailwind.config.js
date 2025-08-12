/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:{
        animate: {
          '0%,10%,100%':{
            width: '0%'
          },
          '70%,80%,90%':{
            width: '100%'
          }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' }
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(90deg)' }
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(270deg)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' }
        },
        'pulse-slower': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.5' }
        },
        'grid-pulse': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' }
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation:{
        animate: 'animate 6s linear infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'pulse-slower': 'pulse-slower 6s ease-in-out infinite',
        'grid-pulse': 'grid-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite'
      }
    },
    colors:{
      primary: '#9004ef',
      secondary: '#f9f9f9',
      darkprimary: '#000000',
      darksecondary: '#1A1A1E',
    },
    screens: {
      '200': '200px',
      '280': '280px',
      '300': '300px',
      '330': '330px',
      '350': '350px',
      '500': '500px',
      '600': '600px',
      '750': '750px',
      '1250': '1250px',
      '1000': '1000px',
      '1100': '1100px',
    }
  },
  plugins: [],
  darkMode: 'class'
}
