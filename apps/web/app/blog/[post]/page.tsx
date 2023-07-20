import { Metadata } from "next";
import Constants from "../../../lib/constants";
import { getBlogPost } from "../../../sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

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

type PostProps = {
  params: { post: string };
};

// Blog post page
export default async function Post({ params }: PostProps) {
  const slug = params.post;
  const post = await getBlogPost(slug);
  return (
    <div className="gap-10 flex flex-col h-full mt-20">
      {/* Cover image */}
      <div className="relative w-full h-40">
        <Image
          src={post.mainImage}
          alt="Blog cover image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="rounded-md"
        />
      </div>
      <h2>{post.title}</h2>
      {/* <div className="flex flex-col gap-4">
        <PortableText value={post.body} />
      </div> */}
    </div>
  );
}
