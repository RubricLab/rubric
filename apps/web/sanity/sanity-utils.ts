import { createClient, groq } from "next-sanity";
import { Project } from "../types/sanity";
import Constants from "../utils/constants";

export async function getProjects(): Promise<Project[]> {
  // Creating a client
  const client = createClient({
    projectId: Constants.SANITY.projectId,
    dataset: Constants.SANITY.dataset,
    apiVersion: Constants.SANITY.apiVersion,
  });

  // Groq fetch query
  return client.fetch(
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
