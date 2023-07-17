import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Sanity config file
const config = defineConfig({
  projectId: "98ffjfuo",
  dataset: "production",
  title: "Blog",
  apiVersion: "2023-07-17", // Set to the date the repo was created
  basePath: "/studio", // URL at which Sanity studio will be hosted
  plugins: [deskTool()],
});

export default config;
