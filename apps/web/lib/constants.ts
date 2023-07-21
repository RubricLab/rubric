import { Metadata } from "next";

export const META = {
  title: "Rubric",
  desc: "We are a lean team of developers & designers that build software end-to-end.",
  twitter: "@rubriclabs",
  siteURL: "https://rubriclab.com",
};

export const DEFAULT_META: Metadata = {
  title: META.title,
  description: META.desc,
  openGraph: {
    title: META.title,
    description: META.desc,
  },
  twitter: {
    title: META.title,
    description: META.desc,
    card: "summary_large_image",
    creator: META.twitter,
  },
};

export const MISC = {
  FONTS: {
    calSansURL: "https://rubriclab.com/fonts/CalSans-SemiBold.ttf",
  },
};
