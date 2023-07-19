import { createClient, groq } from "next-sanity";
import { Home, Post, Project } from "../types/sanity";
import Constants from "../lib/constants";

// Sanity client
const sanity = createClient({
  projectId: Constants.SANITY.projectId,
  dataset: Constants.SANITY.dataset,
  apiVersion: Constants.SANITY.apiVersion,
});

// Get copy for home page
export async function getHomePageCopy(): Promise<Home> {
  // Groq fetch query
  return sanity.fetch(
    // Returns an array, so default to first value
    groq`*[_type == "home"][0]{
        _id,
        _createdAt,
        hero,
        desc,
        "team": team[] | order(name asc){
          "_key": _key,
          "name": name,
          "title": title,
          "slug": slug.current,
          "image": image.asset->url
        }
    }`
  );
}

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

// Get list of blog posts
export async function getBlogPosts(): Promise<Post[]> {
  // Groq fetch query
  return sanity.fetch(
    groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc){
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        publishedAt
    }`
  );
}

// Get post
export async function getBlogPost(slug: string): Promise<Post> {
  // Groq fetch query
  const result = await sanity.fetch(
    // Returns an array, so default to first value
    groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        body,
        publishedAt
    }`,
    { slug }
  );
  return result;
}
