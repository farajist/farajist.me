import fs from 'fs';
import path from 'path';
import { ReactElement } from 'react';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';
import { postFilePaths, POSTS_PATH } from '../../utils/mdx-utils';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import Head from 'next/head';
import Tag from '../../components/Tag';

const PostPage = ({
  source,
  frontMatter
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>{frontMatter.title} | farajist.me</title>
      </Head>
      <div className="container mx-auto">
        <div className="pt-16 lg:pt-20">
          <div className="border-b border-grey-lighter pb-8 sm:pb-12">
            {/* <span className="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">
              category
            </span> */}
            {frontMatter.tags.map((tag: string) => (
              <Tag label={tag} key={tag} />
            ))}
            <h2 className="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
              {frontMatter.title}
            </h2>
            <div className="flex items-center pt-5 sm:pt-8">
              <p className="pr-2 font-body font-light text-primary dark:text-white">
                {frontMatter.publishedDate}
              </p>
              <span className="vdark:text-white font-body text-grey">
                {'//'}
              </span>
              <p className="pl-2 font-body font-light text-primary dark:text-white">
                {frontMatter.duration} min read
              </p>
            </div>
          </div>
          <div className="prose prose font-body max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12">
            <MDXRemote {...source} />
          </div>
        </div>
      </div>
    </div>
  );
};

PostPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PostPage;

type IParams = ParsedUrlQuery & {
  slug: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight]
    },
    scope: data
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path: string) => path.replace(/\.mdx?$/, ''))
    .map((slug: string) => ({ params: { slug } }));
  return { paths, fallback: false };
};
