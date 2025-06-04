import post1 from "../notion-data/2084cc43-62cb-804a-81f5-c976a31aafa6.json";

const posts = [
  {
    title: "테스트용 첫 게시물",
    slug: "first",
    content: post1,
    date: "2025-06-04",
    description: "블로그를 시작하며...",
    image: post1.cover.external.url,
  },
] as Post[];

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
};
