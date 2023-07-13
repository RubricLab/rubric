import { Header } from "ui";
import BackgroundGrid from "./components/BackgroundGrid";
import { Metadata } from "next";
import NavBar from "./components/NavBar";
import Counter from "./components/Counter";

export const metadata: Metadata = {
  title: "Rubric",
  description: "Rubric is building the new definition of prod.",
  openGraph: {
    title: "Rubric",
    description: "Rubric is building the new definition of prod.",
  },
  twitter: {
    title: "Rubric",
    description: "Rubric is building the new definition of prod.",
    card: "summary_large_image",
    creator: "@rubriclabs",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen h-full w-full flex bg-off-white flex-col relative">
      <NavBar />
      <BackgroundGrid className="absolute h-full w-full" />

      <div className="justify-between h-full flex flex-col max-w-3xl z-10">
        {/* Section: Hero */}
        <div className="flex min-h-screen p-10 justify-end flex-col gap-3">
          <Header text="Rubric" />
          <p className="text-3xl sm:text-6xl md:text-6xl font-extralight">
            We are a lean team of developers & designers that build software
            end-to-end.
          </p>
        </div>
      </div>
    </div>
  );
}
