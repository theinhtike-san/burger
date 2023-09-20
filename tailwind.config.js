/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'agdasima': ['Agdasima', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'freehand': ['Freehand', 'cursive'],
    },
    extend: {
      colors: {
        'primary': {
          100: "#ffd2d2",
          200: "#ffa5a5",
          300: "#ff7878",
          400: "#ff4b4b",
          500: "#ff1e1e",
          600: "#cc1818",
          700: "#991212",
          800: "#660c0c",
          900: "#330606"
        },
        'secondary': {
          100: "#fef1d2",
          200: "#fee3a4",
          300: "#fdd677",
          400: "#fdc849",
          500: "#fcba1c",
          600: "#ca9516",
          700: "#977011",
          800: "#654a0b",
          900: "#322506"
        },
        'opacity0':
          "rgba(255, 255, 255, 0.200)",


      },
      keyframes: {
        slideLeft: {
          "0%": {
            transform: "translateX(150%)",
          },

          "10%": {
            transform: "translateX(150%)",
          },
          "20%": {
            transform: "translateX(150%)",
          },
          "30%": {
            transform: "translateX(150%)",
          },
          "40%": {
            transform: "translateX(150%)",
          },
          "50%": {
            transform: "translateX(0%)",
          },
          "60%": {
            transform: "translateX(0%)",

          },
          "70%": {
            transform: "translateX(0%)",
          },
          "80%": {
            transform: "translateX(0%)",
          },
          "90%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        slideRight: {
          "0%": {
            transform: "translateX(-150%)",
          },

          "10%": {
            transform: "translateX(-150%)",
          },
          "20%": {
            transform: "translateX(-150%)",
          },
          "30%": {
            transform: "translateX(-150%)",
          },
          "40%": {
            transform: "translateX(-150%)",
          },
          "50%": {
            transform: "translateX(0%)",
          },
          "60%": {
            transform: "translateX(0%)",

          },
          "70%": {
            transform: "translateX(0%)",
          },
          "80%": {
            transform: "translateX(0%)",
          },
          "90%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        slideLeftBelow: {
          " 0%": {
            transform: "translateX(50%)",
          },

          "10%": {
            transform: "translateX(50%)",
          },
          "20%": {
            transform: "translateX(50%)",
          },
          "30%": {
            transform: "translateX(50%)",
          },
          "40%": {
            transform: "translateX(50%)",
          },
          "50%": {
            transform: "translateX(0%)",
          },
          "60%": {
            transform: "translateX(0%)",

          },
          "70%": {
            transform: "translateX(0%)",
          },
          "80%": {
            transform: "translateX(0%)",
          },
          "90%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        slideRightBelow: {
          " 0%": {
            transform: " translateX(-50%)",
          },

          "10%": {
            transform: " translateX(-50%)",
          },
          "20%": {
            transform: " translateX(-50%)",
          },
          "30%": {
            transform: " translateX(-50%)",
          },
          "40%": {
            transform: " translateX(-50%)",
          },
          "50%": {
            transform: " translateX(0%)",
          },
          "60%": {
            transform: " translateX(0%)",

          },
          "70%": {
            transform: " translateX(0%)",
          },
          "80%": {
            transform: " translateX(0%)",
          },
          "90%": {
            transform: " translateX(0%)",
          },
          "100%": {
            transform: " translateX(0%)",
          },
        },
        zoom: {
          " 0%": {
            transform: "scale(0)",
          },

          "10%": {
            transform: "scale(0)",
          },
          "20%": {
            transform: "scale(0)",
          },
          "30%": {
            transform: "scale(0)",
          },
          "40%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1)",
          },
          "60%": {
            transform: "scale(1)",

          },
          "70%": {
            transform: "scale(1)",
          },
          "80%": {
            transform: "scale(1)",
          },
          "90%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        zoomUp:{
          "0%":{
            transform:"translateY(55%)",
          },
          "10%":{
            transform:"translateY(55%)",
          },
          "20%":{
            transform:"translateY(55%)",
          },
          "30%":{
            transform:"translateY(55%)",
          },
          "40%":{
            transform:"translateY(55%)",
          },
          "50%":{
            transform:"translateY(0%)",
          },
          "60%":{
            transform:"translateY(0%)",
          },
          "70%":{
            transform:"translateY(0%)",

          },
          "80%":{
            transform:"translateY(0%)",
          },
          "90%":{
            transform:"translateY(0%)",
          },
          "100%":{
            transform:"translateY(0%)",
          },
        },
        zoomBelow:{
          "0%":{
            transform:"translateY(-50%)",
          },
          "10%":{
            transform:"translateY(-50%)",
          },
          "20%":{
            transform:"translateY(-50%)",
          },
          "30%":{
            transform:"translateY(-50%)",
          },
          "40%":{
            transform:"translateY(-50%)",
          },
          "50%":{
            transform:"translateY(0%)",
          },
          "60%":{
            transform:"translateY(0%)",
          },
          "70%":{
            transform:"translateY(0%)",

          },
          "80%":{
            transform:"translateY(0%)",
          },
          "90%":{
            transform:"translateY(0%)",
          },
          "100%":{
            transform:"translateY(0%)",
          },
        },
        zoomUpLeft:{
          "0%":{
            transform:"translate(105%,55%)",
          
          },
          "10%":{
            transform:"translate(105%,55%)",
            
          },
          "20%":{
            transform:"translate(105%,55%)",
          },
          "30%":{
            transform:"translate(105%,55%)",
          },
          "40%":{
            transform:"translate(105%,55%)",
          },
          "50%":{
            transform:"translate(0%,0%)",
          },
          "60%":{
            transform:"translate(0%,0%)",
          },
          "70%":{
            transform:"translate(0%,0%)",
          },
          "80%":{
            transform:"translate(0%,0%)",
          },
          "90%":{
            transform:"translate(0%,0%)",
          },
          "100%":{
            transform:"translate(0%,0%)",
          },
        },
        zoomUpRight:{
          "0%":{
            transform:"translate(-105%,55%)",
          
          },
          "10%":{
            transform:"translate(-105%,55%)",
            
          },
          "20%":{
            transform:"translate(-105%,55%)",
          },
          "30%":{
            transform:"translate(-105%,55%)",
          },
          "40%":{
            transform:"translate(-105%,55%)",
          },
          "50%":{
            transform:"translate(0%,0%)",
          },
          "60%":{
            transform:"translate(0%,0%)",
          },
          "70%":{
            transform:"translate(0%,0%)",
          },
          "80%":{
            transform:"translate(0%,0%)",
          },
          "90%":{
            transform:"translate(0%,0%)",
          },
          "100%":{
            transform:"translate(0%,0%)",
          },
        },
        zoomBelowLeft:{
          "0%":{
            transform:"translate(105%,-55%)",
          
          },
          "10%":{
            transform:"translate(105%,-55%)",
            
          },
          "20%":{
            transform:"translate(105%,-55%)",
          },
          "30%":{
            transform:"translate(105%,-55%)",
          },
          "40%":{
            transform:"translate(105%,-55%)",
          },
          "50%":{
            transform:"translate(0%,0%)",
          },
          "60%":{
            transform:"translate(0%,0%)",
          },
          "70%":{
            transform:"translate(0%,0%)",
          },
          "80%":{
            transform:"translate(0%,0%)",
          },
          "90%":{
            transform:"translate(0%,0%)",
          },
          "100%":{
            transform:"translate(0%,0%)",
          },
        },
        zoomBelowRight:{
          "0%":{
            transform:"translate(-105%,-55%)",
          
          },
          "10%":{
            transform:"translate(-105%,-55%)",
            
          },
          "20%":{
            transform:"translate(-105%,-55%)",
          },
          "30%":{
            transform:"translate(-105%,-55%)",
          },
          "40%":{
            transform:"translate(-105%,-55%)",
          },
          "50%":{
            transform:"translate(0%,0%)",
          },
          "60%":{
            transform:"translate(0%,0%)",
          },
          "70%":{
            transform:"translate(0%,0%)",
          },
          "80%":{
            transform:"translate(0%,0%)",
          },
          "90%":{
            transform:"translate(0%,0%)",
          },
          "100%":{
            transform:"translate(0%,0%)",
          },
        },
      },
      animation: {
        slideLeft: 'slideLeft 7s ease 1s infinite both alternate',
        slideRight: 'slideRight 7s ease 1s infinite both alternate',
        slideLeftBelow: 'slideLeftBelow 7s ease 1s infinite both alternate',
        slideRightBelow: 'slideRightBelow 7s ease 1s infinite both alternate',
        zoom: 'zoom 7s ease 1s infinite both alternate',
        zoomUp: 'zoomUp 7s ease 1s infinite both alternate',
        zoomBelow: 'zoomBelow 7s ease 1s infinite both alternate',
        zoomUpRight: 'zoomUpRight 7s ease 1s infinite both alternate',
        zoomUpLeft: 'zoomUpLeft 7s ease 1s infinite both alternate',
        zoomBelowRight: 'zoomBelowRight 7s ease 1s infinite both alternate',
        zoomBelowLeft: 'zoomBelowLeft 7s ease 1s infinite both alternate',

      },
      plugins: [
        require('flowbite/plugin')],
    },

  }
}