module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greyscale: '#181818',
        navbar: '#1B1B1B',
        navBarUnFocusBlue: '#00D1FF',
        inputFcous: '#FF9B33',
        slider_bar_l: '#FF5C01',
        slider_bar_r: '#FFD25F',
      },
      spacing: {
        navbar_desktop_w: '5rem',
        m_navbar_desktop_h: '8vh',
      },
      maxWidth: {
        navbar_desktop_w: '5rem',
      },
      screens: {
        follower: '1440px',
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        sm: '280px',
      },
      keyframes: {
        fade_in:{
            from:{ opacity:0},
            to :{opacity:100}
        },
        menu_collpase_on: {
          '0%': { height: '0vh', opacity: 0 },
          '100%': { height: '50vh' },
        //   '100%': { height: '50vh', opacity: 100 },
        },
        menu_collpase_off: {
          '0%': { height: '50vh', opacity: 100 },
          '100%': { height: '0vh', opacity: 0 },
        //   '100%': { height: '0vh', opacity: 0, display: 'none' },
        },
      },
      animation: {
        menu_collpase_on: 'menu_collpase_on 1s ease-in ',
        menu_collpase_off: 'menu_collpase_off 1s ease-in ',
        fade_in:'fade_in 1s ease-in'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
