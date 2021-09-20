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
        primary: '#0b879d',
        secondary: '#fafafa',
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
      height: {
        76: '19rem',
        120: '30rem',
        145: '36.25rem',
      },
      padding: {
        18: '4.5rem',
        46: '11.5rem',
      },
      backgroundImage: {
        quote: "url('/images/quote.png')",
        'about-intro': "url('/images/aboutIntro.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
