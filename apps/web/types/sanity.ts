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
