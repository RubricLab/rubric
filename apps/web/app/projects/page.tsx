import BackgroundGrid from "../components/BackgroundGrid";
import { Metadata } from "next";
import NavBar from "../components/NavBar";
import { ComingSoonButton, Header } from "ui";
import Constants from "../../utils/constants";

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

export default function Projects() {
  return (
    <div className="min-h-screen h-full w-full flex bg-off-white flex-col relative">
      <NavBar />
      <BackgroundGrid className="absolute h-full w-full" />
      <div className="z-10 center h-full flex flex-col gap-5">
        <Header text="Projects" />
        <ComingSoonButton />
      </div>
    </div>
  );
}
