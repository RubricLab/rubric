import { Metadata } from "next";
import { DEFAULT_META, META } from "../../../lib/constants";
import { getPost } from "../../../sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export const metadata: Metadata = {
  ...DEFAULT_META,
  title: `Blog | ${META.title}`,
  openGraph: {
    ...DEFAULT_META.openGraph,
    title: `Blog | ${META.title}`,
  },
  twitter: {
    ...DEFAULT_META.twitter,
    title: `Blog | ${META.title}`,
  },
};

type PostProps = {
  params: { post: string };
};

export const revalidate = 60; // revalidate this page every 60 seconds

// Blog post page
export default async function Post({ params }: PostProps) {
  const slug = params.post;
  const post = await getPost(slug);
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
      <div className="flex flex-col gap-4">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
