module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fathur: "fathur",
        rubik: "Rubik",
      },
      backgroundPosition: {
        fix: "0 0",
      },
      backgroundImage: {
        forcefields: "url(/svg/forcefields.svg)",
        "forcefields-alt": "url(/svg/forcefields-alt.svg)",
        pink: "url(/svg/pink.svg)",
        blob: "url(/svg/blob.svg)",
        meteor: "url(/svg/meteor.svg)",
        test: "url(/svg/test.svg)",
      },
      colors: {
        primary: {
          50: "#FF68DD",
          100: "#FF4FC4",
          200: "#FF35AA",
          300: "#F11C91",
          400: "#ED017A",
          500: "#BE005E",
          600: "#A40044",
          700: "#8B002B",
          800: "#710011",
          900: "#580000",
        },
        secondary: {
          50: "#D666FF",
          100: "#BD4DF0",
          200: "#A333D6",
          300: "#8A1ABD",
          400: "#7000A3",
          500: "#57008A",
          600: "#3D0070",
          700: "#240057",
          800: "#0A003D",
          900: "#000024",
        },
        tertiary: {
          50: "#BBFFFF",
          100: "#A2FFFF",
          200: "#88FFFF",
          300: "#6FFFFF",
          400: "#55FFFF",
          500: "#3CE6E6",
          600: "#22CCCC",
          700: "#09B3B3",
          800: "#009999",
          900: "#008080",
        },
        background: "#00001E",
        purpleop: "rgba(36, 0, 87, 0.6)",
        pinkop: "rgba(237, 1, 122, .6)",
      },
    },
  },
  plugins: [],
};
