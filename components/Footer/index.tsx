import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../Icons/GithubIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import dayjs from 'dayjs';

export default function Footer() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
        <div className="mr-auto flex flex-col items-center sm:flex-row">
          <Link href="/" className="mr-auto sm:mr-6">
            <Image
              src="/assets/img/logo.svg"
              alt="logo"
              height="40"
              width="40"
            />
          </Link>
          <p className="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
            ©{dayjs().year()} Hamza Faraji.
          </p>
        </div>
        <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
          <Link
            href="https://github.com/farajist"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="h-14 w-12 text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors" />
          </Link>

          <Link
            href="https://twitter.com/farajist "
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="h-14 w-12 text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/farajist "
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="h-14 w-12 text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
