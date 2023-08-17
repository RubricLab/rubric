import SimpleUser from "./SimpleUser";

export default interface BlogPost {
  author: SimpleUser;
  title: string;
  summary: string;
  body: string;
  bannerImgDescription: string;
  bannerImgUrl?: string;
  emoji: string;
}
