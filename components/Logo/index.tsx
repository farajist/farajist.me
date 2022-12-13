import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className="mr-2">
        <Image src="/assets/img/logo.svg" alt="logo" height="40" width="40" />
      </span>
      <p className="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
        Hamza Faraji
      </p>
    </Link>
  );
}
