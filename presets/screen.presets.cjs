/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        mobileS: { max: "375px" },
        mobileM: { min: "376px" },
        mobileL: { min: "425px" },
        tablet: { min: "768px" },
        laptop: { min: "1024px" },
        laptopL: { min: "1440px" },
        desktop: { min: "2560px" },
        onlyMobile: { max: "768px" },
        LtTablet: { max: "1024px" },
        LtLaptop: { max: "1440px" },
        "max-sm": { max: "640px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" },
        "max-2xl": { max: "1536px" },
      },
    },
  },
};
