import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import { NextPageWithLayout } from './_app';
import { getLatestPosts, PostPreview } from '../utils/mdx-utils';
import PostItem from '../components/Post';

interface HomePageProps {
  latestPosts: PostPreview[];
  // projects:
}

const HomePage = ({ latestPosts }: HomePageProps) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title key={'title'}>Home | Hamza Faraji</title>
      </Head>
      <div className="border-b border-grey-lighter py-16 lg:py-20">
        <div>
          <Image
            src="/assets/img/author.png"
            className="h-16 w-16"
            alt="author"
            width={64}
            height={64}
          />
        </div>
        <h1 className="pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
          Hi, I&apos;m Hamza.
        </h1>
        <p className="pt-3 font-body text-xl font-light text-primary dark:text-white">
          A software engineer and open-source enthusiast. I like to keep this
          blog updated with what I learn along the journey of life as well as
          things I&apos;m interested in.
        </p>
        <Link
          href="/"
          className="mt-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl"
        >
          Say Hello!
        </Link>
      </div>

      <div className="border-b border-grey-lighter py-16 lg:py-20">
        <div className="flex items-center pb-6">
          <Image
            src="/assets/img/icon-story.png"
            alt="icon story"
            width={21}
            height={29}
          />
          <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            My Story
          </h3>
        </div>
        <div>
          <p className="font-body font-light text-primary dark:text-white">
            Hey there ! I&apos;m Hamza, a software engineer with great passion
            about computers, I have a keen interest in the fields of modern web
            technologies, applied ML as well as OSS. I&apos;m currently pursuing
            a master of science in computer science mainly focused on computer
            vision. I have also made some side projects some of which made it to
            my public GitHub.
            <br />
            <br />
            Most of technologies I work with were self-taught, I try to log some
            of the things I learn in this blog from tech-savvy ideas about a
            certain tool to common useful development patterns. I also try to
            keep the blog updated with various articles about my interests and
            day-to-day learnings.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-20">
        <div className="flex items-center pb-6">
          <Image
            src="/assets/img/icon-post.png"
            alt="icon post"
            width={21}
            height={29}
          />
          <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            My Posts
          </h3>
          <Link
            href="/blog"
            className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
          >
            All posts
            <Image
              src="/assets/img/long-arrow-right.png"
              className="ml-3"
              alt="arrow right"
              width={16}
              height={10}
            />
          </Link>
        </div>

        {latestPosts.map(({ frontMatter, slug }) => (
          <PostItem frontMatter={frontMatter} slug={slug} key={slug} />
        ))}
      </div>

      <div className="pb-16 lg:pb-20">
        <div className="flex items-center pb-6">
          <Image
            src="/assets/img/icon-project.png"
            alt="icon story"
            width={21}
            height={29}
          />
          <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            My Projects
          </h3>
        </div>
        <h5 className="flex items-center pl-8 font-body text-green dark:text-green-light ">
          Coming soon ...
        </h5>
      </div>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const latestPosts = await getLatestPosts();

  return {
    props: {
      latestPosts
    }
  };
}

export default HomePage;
