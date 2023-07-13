import BackgroundGrid from "../components/BackgroundGrid";
import { Metadata } from "next";
import NavBar from "../components/NavBar";
import { Button, Header } from "ui";

export const metadata: Metadata = {
  title: "Blog | Rubric",
  description: "Rubric is building the new definition of prod.",
  openGraph: {
    title: "Blog | Rubric",
    description: "Rubric is building the new definition of prod.",
  },
  twitter: {
    title: "Blog | Rubric",
    description: "Rubric is building the new definition of prod.",
    card: "summary_large_image",
    creator: "@rubriclabs",
  },
};

export default function Blog() {
  return (
    <div className="min-h-screen h-full w-full flex bg-off-white flex-col relative">
      <NavBar />
      <BackgroundGrid className="absolute h-full w-full" />
      <div className="z-10 center h-full flex flex-col gap-5">
        <Header text="Blog" />
        <Button />
      </div>
    </div>
  );
}
