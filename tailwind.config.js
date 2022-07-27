module.exports = {
  content: ['./*.html'],
  darkmode: 'class',
  theme: {
    screens: {
      'lg': {
        max: '992px'
      },
      'md': {
        max: '768px'
      },
      'sm': {
        max: '480px'
      },
    },
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        cherryred: '#DC1A21',
        darkblue: '#0A0A0A',
        lightblack: '#353535',
      }
    },
  },
  plugins: [],
}