const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "../../packages/ui/**/*.{jsx,tsx}",
    "../../apps/web/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#E2DCDB",
        ...colors,
      },
    },
  },
  plugins: [],
};
