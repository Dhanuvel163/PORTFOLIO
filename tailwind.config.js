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
        }
      },
      animation:{
        animate: 'animate 6s linear infinite'
      }
    },
    colors:{
      primary: '#9004ef',
      secondary: '#1a151ef5',
    },
    screens: {
      '300': '300px',
      '350': '350px',
      '750': '750px',
      '1250': '1250px',
      '1000': '1000px',
    }
  },
  plugins: [],
}
