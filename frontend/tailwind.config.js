module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        screens: {
            // 'xs': {'max': '768px'}    
        },
        backgroundImage: theme => ({
            // 'body-pattern' : "url('/img/pattern.png')",
        }),
        backgroundPosition: {
            // 'banner-position': "-200px -200px"
        },
        colors: {
            // 'azul-claro': '#37bcf9',
        },
        animation: {
            // 'spin-low': 'spin 2s linear infinite',
            // 'from-bellow': 'fromBellow 500ms linear'
        },
        keyframes: {
            // fromBellow: {
            //     '0%': { transform: 'translateY(0%)' },
            //     '50%': { transform: 'translateY(200%)' },
            //     '100%': { transform: 'translateY(0%)' }
            // },
        }
    }
},
  variants: {
      animation: ['responsive', 'hover', 'group-hover'],
      animate: ['responsive', 'hover', 'group-hover'],
      fontSize: ['responsive', 'hover', 'group-hover'],
      transform: ['responsive', 'hover', 'group-hover'],
      scale: ['responsive', 'hover', 'group-hover'],
      padding: ['responsive', 'hover', 'group-hover']
      
  }
}