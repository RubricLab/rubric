import config from "@rubriclab/tailwind-config";

export default {
  presets: [config],
  theme: {
    extend: {
      colors: {
        ...config.theme.extend.colors,
      },
    },
  },
};
