module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_600: "#6c6c6c",
        gray_700: "#595959",
        gray_400: "#b6b6b6",
        deep_orange_A100: "#f5ab67",
        gray_401: "#b1b1b1",
        gray_800: "#3c3c3c",
        blue_A700: "#2364ff",
        red_401: "#e05d5d",
        red_400: "#e05c5c",
        gray_200: "#eaeaea",
        green_600: "#27a953",
        blue_50: "#e5eeff",
        gray_100: "#f6f6f6",
        black_900: "#000000",
        black_900_14: "#00000014",
        white_A700: "#ffffff",
        pink_400: "#c63973",
        green_600_63: "#27a95363",
      },
      borderRadius: {
        radius5: "5px",
        radius20: "20px",
        radius25: "25px",
        radius50: "50%",
        radius90: "90px",
      },
      boxShadow: {
        bs: "10px 20px  50px 0px #27a95363",
        bs1: "0px 40px  200px 0px #00000014",
      },
      fontFamily: { sourcesanspro: "Source Sans Pro", inter: "Inter" },
      letterSpacing: {
        ls1: "1px",
        ls2: "2px",
        ls4: "4px",
        ls08999999761581421: "0.8999999761581421px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
