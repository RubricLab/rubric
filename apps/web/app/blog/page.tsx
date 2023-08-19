import { Metadata } from "next";
import { ComingSoonButton, Header } from "@rubriclab/ui";
import { DEFAULT_META, META } from "../../lib/constants";
import { getPosts } from "../../sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import { Post } from "../../types/sanity";
import { ArrowUpRightIcon } from "lucide-react";
import { parseDate } from "../../lib/utils";

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

type PostCardProps = {
  post: Post;
};

export const revalidate = 60; // revalidate this page every 60 seconds

// Blog post card
const PostCard = ({ post }: PostCardProps) => {
  const date = parseDate(post.publishedAt);
  return (
    <Link
      key={post._id}
      href={`/blog/${post.slug}`}
      className="flex flex-col border border-stone-700/80 bg-off-white/90 hover:bg-orange-400/80 transition-colors duration-400 rounded-md group relative text-black"
    >
      <ArrowUpRightIcon className="absolute top-2 right-2 w-14 h-14 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      {/* Cover image */}
      <div className="relative w-full h-40">
        <Image
          src={post.mainImage}
          alt="Blog cover image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="rounded-t-md group-hover:opacity-0 transition-opacity duration-400"
        />
      </div>
      {/* Post details */}
      <div className="flex flex-col p-5">
        <p className="text-base text-stone-700">{date}</p>
        <h3>{post.title}</h3>
      </div>
    </Link>
  );
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="gap-10 flex flex-col h-full 2xl:justify-center mt-20">
      <Header text="Blog" />
      {/* "Coming soon" if there are no posts */}
      {posts.length === 0 && (
        <div>
          <ComingSoonButton />
        </div>
      )}
      {/* Posts */}
      {posts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
