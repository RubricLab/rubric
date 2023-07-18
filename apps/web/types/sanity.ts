import { PortableTextBlock } from "sanity";

// Project
export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};

// Home page
export type Home = {
  _id: string;
  _createdAt: Date;
  hero: { title: string; subtitle: string; _type: string };
  desc: PortableTextBlock[];
};
