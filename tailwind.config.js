module.exports = {
  purge: {
    enabled: false,
  },
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        heroBlack: {
          light: '#121212',
          DEFAULT: '#121212',
          dark: '#121212',
        },
        heroBlackSecondary: {
          light: '#2A2A2A',
          DEFAULT: '#2A2A2A',
          dark: '#2A2A2A',
        },
        heroBlackPrimary: {
          light: '#2B2B2B',
          DEFAULT: '#2B2B2B',
          dark: '#2B2B2B',
        },
        heroPrimary: {
          dark: '#0078F2',
          DEFAULT: '#0078F2',
          light: '#0078F2',
        },
        heroWhite: {
          DEFAULT: '#F5F5F5'
        }
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active'],
      borderWidth: ['active','hover', 'focus'],
    }
  },
  plugins: [],
}
