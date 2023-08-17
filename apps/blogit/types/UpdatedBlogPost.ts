import SimpleUser from "./SimpleUser";

export default interface UpdatedBlogPost {
  author: SimpleUser;
  title: string;
  summary: string;
  body: string;
  bannerImgDescription: string;
  bannerImgUrl?: string;
  emoji: string;
  changeBannerImg: string;
}
