// eslint-disable-next-line no-undef
const config = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...config.fontFamily.sans],
      },
      colors: {
        gray: {
          ...config.colors.gray,
          200: '#E4E4E4',
        },
        green: {
          ...config.colors.green,
          400: '#53EF75',
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    }),
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}
