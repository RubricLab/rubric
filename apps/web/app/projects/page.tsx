import { Metadata } from "next";
import Constants from "../../utils/constants";
import { getProjects } from "../../sanity/sanity-utils";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

export const metadata: Metadata = {
  title: `Projects | ${Constants.META.title}`,
  description: Constants.META.desc,
  openGraph: {
    title: `Projects | ${Constants.META.title}`,
    description: Constants.META.desc,
  },
  twitter: {
    title: `Projects | ${Constants.META.title}`,
    description: Constants.META.desc,
    card: "summary_large_image",
    creator: Constants.META.twitter,
  },
};

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="gap-10 flex flex-col h-full xl:justify-center mt-20">
      <h1>Projects</h1>
      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:pb-5">
        {projects.map((project) => (
          <Link
            key={project._id}
            className="w-full p-5 rounded-md border border-stone-700 flex group hover:bg-orange-400/20 transition-colors duration-300"
            href={project.url}
            target="_blank"
          >
            {/* Name */}
            <div className="flex justify-between w-full">
              <h3>{project.name}</h3>
              <ArrowUpRightIcon className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Description */}
            {/* <div>
              <PortableText value={project.content} />
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
