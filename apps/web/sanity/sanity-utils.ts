import { createClient, groq } from "next-sanity";
import { Home, Project } from "../types/sanity";
import Constants from "../utils/constants";

// Sanity client
const sanity = createClient({
  projectId: Constants.SANITY.projectId,
  dataset: Constants.SANITY.dataset,
  apiVersion: Constants.SANITY.apiVersion,
});

// Get projects
export async function getProjects(): Promise<Project[]> {
  // Groq fetch query
  return sanity.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

// Get copy for home page
export async function getHomePageCopy(): Promise<Home[]> {
  // Groq fetch query
  return sanity.fetch(
    groq`*[_type == "home"]{
        _id,
        _createdAt,
        hero,
        desc
    }`
  );
}
