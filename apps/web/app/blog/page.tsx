import BackgroundGrid from "../components/BackgroundGrid";
import { Metadata } from "next";
import NavBar from "../components/NavBar";
import { ComingSoonButton, Header } from "ui";
import Constants from "../../utils/constants";

export const metadata: Metadata = {
  title: `Blog | ${Constants.META.title}`,
  description: Constants.META.desc,
  openGraph: {
    title: `Blog | ${Constants.META.title}`,
    description: Constants.META.desc,
  },
  twitter: {
    title: `Blog | ${Constants.META.title}`,
    description: Constants.META.desc,
    card: "summary_large_image",
    creator: Constants.META.twitter,
  },
};

export default function Blog() {
  return (
    <div className="center h-full flex flex-col gap-5">
      <Header text="Blog" />
      <ComingSoonButton />
    </div>
  );
}
