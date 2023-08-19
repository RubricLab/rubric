import { ContactButton, Header } from "@rubriclab/ui";
import { Metadata } from "next";
import { DEFAULT_META } from "../constants/metadata";

export const metadata: Metadata = {
  ...DEFAULT_META,
};

export default async function Home() {
  return (
    <div className="flex flex-col">
      {/* Section: Hero */}
      <div className="flex min-h-screen justify-end flex-col gap-3 pb-5 max-w-3xl">
        <Header text={"Welcome to my new Rubric app"} />
        <p className="text-3xl sm:text-6xl md:text-6xl font-extralight">
          {"This project was bootstrapped with create-rubric-app"}
        </p>
      </div>

      {/* Section */}
      <div className="flex min-h-screen items-end justify-end pb-5 flex-col gap-3">
        <div className="flex flex-col max-w-xl gap-10">
          <div className="flex justify-end">
            <ContactButton body="hello@rubriclab.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
