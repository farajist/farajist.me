import { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { getAllPostsWithFrontMatter, PostPreview } from '../../utils/mdx-utils';
import PostItem from '../../components/Post';

interface BlogPageProps {
  posts: PostPreview[];
}

const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Blog | Hamza Faraji</title>
      </Head>
      <div className="py-16 lg:py-20">
        <div>
          <Image
            src="/assets/img/icon-blog.png"
            alt="icon envelope"
            width="54"
            height="46"
          />
        </div>

        <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
          Blog
        </h1>

        <div className="pt-3 sm:w-3/4">
          <p className="font-body text-xl font-light text-primary dark:text-white">
            Articles, tutorials, snippets, rants, reviews and everything else.
          </p>
        </div>

        <div className="pt-8 lg:pt-12">
          {posts.map(({ frontMatter, slug }) => (
            <PostItem frontMatter={frontMatter} slug={slug} key={slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BlogPage;

export async function getStaticProps() {
  const posts = await getAllPostsWithFrontMatter();

  return {
    props: {
      posts
    }
  };
}
