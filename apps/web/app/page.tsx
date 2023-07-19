import { ContactButton, Header } from "ui";
import { Metadata } from "next";
import Image from "next/image";
import Constants from "../lib/constants";
import { getHomePageCopy } from "../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { Author } from "../types/sanity";

export const metadata: Metadata = {
  title: Constants.META.title,
  description: Constants.META.desc,
  openGraph: {
    title: Constants.META.title,
    description: Constants.META.desc,
  },
  twitter: {
    title: Constants.META.title,
    description: Constants.META.desc,
    card: "summary_large_image",
    creator: Constants.META.twitter,
  },
};

type TeamMemberCardProps = {
  member: Author;
};

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div
      key={member.name}
      className="w-20 h-20 sm:w-40 sm:h-40 relative group cursor-pointer"
    >
      <div className="relative w-full h-full">
        <Image
          src={member.image}
          alt={`${member.name}'s picture`}
          fill
          className="rounded-full grayscale group-hover:blur-sm"
        />
      </div>
      <p className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
        <span className="text-sm text-gray-100">{member.name}</span>{" "}
        <span className="text-xs text-gray-300">{member.title}</span>
      </p>
    </div>
  );
};

export default async function Home() {
  const result = await getHomePageCopy();
  return (
    <div className="flex flex-col">
      {/* Section: Hero */}
      <div className="flex min-h-screen justify-end flex-col gap-3 pb-5 max-w-3xl">
        <Header text={result.hero.title} />
        <p className="text-3xl sm:text-6xl md:text-6xl font-extralight">
          {result.hero.subtitle}
        </p>
      </div>

      {/* Section */}
      <div className="flex min-h-screen items-end justify-end pb-5 flex-col gap-3">
        <div className="flex flex-col max-w-xl gap-10">
          {/* Team */}
          <div className="flex justify-between">
            {result.team.map((member) => (
              <TeamMemberCard key={member._key} member={member} />
            ))}
          </div>

          {/* What we do */}
          <div className="flex flex-col gap-3 font-light text-xl">
            <PortableText value={result.desc} />
          </div>

          <div className="flex justify-end">
            <ContactButton body="hello@rubriclab.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
