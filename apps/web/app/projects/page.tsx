import { Metadata } from "next";
import Constants from "../../utils/constants";
import { getProjects } from "../../sanity/sanity-utils";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { Project } from "../../types/sanity";

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

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-full px-6 py-5 rounded-md border border-stone-700/80 bg-off-white/90 flex group hover:bg-orange-400/80 transition-colors duration-300">
      <div className="flex justify-between w-full items-center">
        {/* Name */}
        <h3>{project.name}</h3>
        <ArrowUpRightIcon className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Description */}
        {/* <div>
          <PortableText value={project.content} />
        </div> */}
      </div>
    </div>
  );
};

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="gap-10 flex flex-col h-full 2xl:justify-center mt-20">
      <h1>Projects</h1>
      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:pb-5">
        {projects.map((project: Project) => (
          <Link key={project._id} href={project.url} target="_blank">
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
}
