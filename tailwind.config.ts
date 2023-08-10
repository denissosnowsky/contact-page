import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        introBG: "#292929",
        secondBG: "#1A1A1A",
        thirdBG: "#484848",
        fourthBG: "#131313",
        fifthBG: "#1E1E1E",
        secondFontColor: "#1F1F1F",
        thirdFontColor: "#717171",
        fourthColor: "#C9C9C9",
        fifthColor: "#8D8D8D",
        sixColor: "#616161",
      },
      rotate: {
        "-30": "-30deg",
      },
    },
    screens: {
      "mob": { max: "360px" },
    },
  },
  plugins: [],
};
export default config;
