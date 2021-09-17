module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1366px',
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
    },
    extend: {
      colors: {
        secondary: '#0b879d',
        accent: '#edcf00',
      },
      fontSize: {
        h1: ['3.375em', '4.5rem'],
        h2: ['2.75em', '3.625rem'],
        h3: ['2.125em', '2.812rem'],
        h4: ['1.5em', '2rem'],
        h5: ['1em', '1.5rem'],
        h6: ['0.75em', '1.5rem'],
        p: ['1em', '1.5rem'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
