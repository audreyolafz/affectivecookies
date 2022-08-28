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
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  mode: "jit",
  content: ["./node_modules/flowbite-react/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        greenery: "url('../public/greenery.jpg')",
        meshRed: "url('../public/meshRed.png')",
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
