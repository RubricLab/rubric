import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "../../packages/cms/schemas";
import Constants from "./lib/constants";

// Sanity config file
const config = defineConfig({
  projectId: Constants.SANITY.projectId,
  dataset: Constants.SANITY.dataset,
  title: "Blog",
  apiVersion: Constants.SANITY.apiVersion,
  basePath: "/studio", // URL at which Sanity studio will be hosted
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
