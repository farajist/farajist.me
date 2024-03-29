import { PropsWithChildren } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import Tag from '../Tag';
import { PostPreview } from '../../utils/mdx-utils';

type PostItemProps = PropsWithChildren & PostPreview;

const PostItem = ({ slug, frontMatter }: PostItemProps) => {
  const { duration, publishedDate, tags, title } = frontMatter;
  return (
    <div className="pt-10 pb-8 border-b border-grey-lighter">
      {tags && tags.map((tag) => <Tag label={tag} key={tag} />)}
      <Link
        href={`blog/${slug}`}
        className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
      >
        {title}
      </Link>
      <div className="flex items-center pt-4">
        <p className="pr-2 font-body font-light text-primary dark:text-white">
          {dayjs(publishedDate).format('MMMM D, YYYY')}
        </p>
        <span className="font-body text-grey dark:text-white">{'//'}</span>
        <p className="pl-2 font-body font-light text-primary dark:text-white">
          {duration} min read
        </p>
      </div>
    </div>
  );
};

export default PostItem;
