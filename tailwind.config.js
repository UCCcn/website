module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'ucc-yellow': '#FABF02',
        'ucc-blue': '#005188',
        'ucc-red': '#E31C17',
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tight: 1.2
      },
      borderWidth: {
        32: '32px'
      },
      boxShadow: {
        'ucc-yellow': 'inset 0 -10px 0 #FABF02'
      }
    }
  }
}
