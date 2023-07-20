/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-cust' : '#c8e7df',
        'primary-color-cust' : '#2e9279',
        'primary-color-hover-cust' : '#0ea882',
        'hvr-col' : '#92d9c7',
      },
      width: {
        '30rem' : '30rem',
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from   180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}