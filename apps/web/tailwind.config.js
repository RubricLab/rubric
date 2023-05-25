const sharedConfig = require("tailwind-config/tailwind.config");

module.exports = {
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        "off-white": "#E2DCDB",
      },
    },
  },
};
