module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('google-fonts-webpack-plugin')({
        fonts: [
          { family: 'Playfair Display' },
          // Add more fonts as needed
        ],
        display: 'swap', // Ensure proper font rendering
      }),
    ],
  };
  