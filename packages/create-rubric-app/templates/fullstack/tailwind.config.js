const sharedConfig = require("tailwind-config/tailwind.config");

module.exports = {
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        ...sharedConfig.theme.extend.colors,
      },
      fontFamily: {
        "cal-sans": ["var(--font-cal-sans)"],
      },
    },
  },
};
