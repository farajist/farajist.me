import { join } from 'path';
import fs, { readFileSync } from 'fs';
import matter from 'gray-matter';

export type PostFrontMatter = {
  title: string;
  description: string;
  publishedDate: string;
  duration: number /* in minutes */;
  tags?: string[];
};

export interface PostPreview {
  slug: string;
  frontMatter: PostFrontMatter;
}

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = join(process.cwd(), 'posts');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export async function getAllPostsWithFrontMatter() {
  return postFilePaths.reduce<PostPreview[]>((allPosts, postRelPath) => {
    const source = readFileSync(join(POSTS_PATH, postRelPath));
    const { data } = matter(source);
    return [
      {
        frontMatter: data as PostFrontMatter,
        slug: postRelPath.replace(/\.mdx?$/, '')
      },
      ...allPosts
    ];
  }, []);
}

function comparePublishDates(a: PostPreview, b: PostPreview) {
  return (
    new Date(a.frontMatter.publishedDate).getTime() -
    new Date(b.frontMatter.publishedDate).getTime()
  );
}

export async function getLatestPosts() {
  const allPosts = await getAllPostsWithFrontMatter();
  return allPosts.sort(comparePublishDates).slice(0, 3);
}
