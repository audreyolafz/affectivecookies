const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  // mode: "jit",
  // content: [],
  theme: {
    colors: {
      transparent: "transparent",
      sand: "#FEF1E8",
      golden: "#ECB900",
      mint: "#1DD3B0",
      darkBlue: "#243266",
      navy: "#20253A",

      coolGray: "#384C66",
    },
    container: {
      center: true,
    },
    extend: {
      // fontFamily: {
      //   sans: ["Inter", ...defaultTheme.fontFamily.sans],
      //   // body: ["Inter"],
      // },
      backgroundImage: {
        accard: "url('../public/ACCard.png')",
        meshRed: "url('../public/meshRed.png')",
        meshOrange: "url('../public/meshOrange.png')",
        meshYellow: "url('../public/meshYellow.png')",
        meshGreen: "url('../public/meshGreen.png')",
        meshBlue: "url('../public/meshBlue.png')",
        cookie: "url('../public/cookies.png')",
        cookieJar: "url('../public/cookieJar.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [Myclass, require("flowbite/plugin")],
};
