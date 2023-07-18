import BackgroundGrid from "../components/BackgroundGrid";
import { Metadata } from "next";
import NavBar from "../components/NavBar";
import { Header } from "ui";
import Constants from "../../utils/constants";
import { getProjects } from "../../sanity/sanity-utils";
import Link from "next/link";

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
    <div className="min-h-screen h-full w-full flex bg-off-white flex-col relative center">
      <NavBar />
      <BackgroundGrid className="absolute h-full w-full" />
      <div className="z-10 center h-full flex flex-col gap-5 max-w-2xl w-full">
        <Header text="Projects" />
        {projects.map((project) => (
          <Link
            key={project._id}
            className="w-full p-5 rounded-md border border-stone-700"
            href={project.url}
            target="_blank"
          >
            <h3>{project.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
