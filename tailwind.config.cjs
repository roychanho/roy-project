/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'mobile': '576px',
      'sm-mobile': {'max' : '576px'},
      'tablet': '768px',
      'laptop': '1024px',
      'md-screen': '1280px',
      'desktop': '1440px',
      'lg-screen': '1600px',
    },
    extend: {
      keyframes: {
        extendLine: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        extendSearch: {
          "0%": {
            width: "0px",
          },
          "100%": {
            width: "250px",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        scaleUp: {
          "0%": {
            transform: "scale(125%)",
          },
          "100%": {
            transform: "scale(100%)",
          },
        },
      },
      animation: {
        extendLine: "extendLine 0.2s forwards",
        extendSearch: "extendSearch 1s forwards",
        fadeIn: "fadeIn 1s forwards",
        fadeInRight: "fadeInRight 1s forwards",
        fadeInLeft: "fadeInLeft 1s forwards",
        scaleUp: "scaleUp 1s forwards",
      },
    },
  },
  plugins: [],
};
