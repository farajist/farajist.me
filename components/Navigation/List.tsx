import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import useMenuState from '../../hooks/use-menu-state';

type ItemProps = PropsWithChildren & {
  to: string;
};

interface ListNamespace {
  Item: typeof Item;
}

const Item = ({ children, to }: ItemProps) => {
  return (
    <li className="">
      <Link
        href={to}
        className="mb-3 block px-2 font-body text-lg font-medium text-white"
      >
        {children}
      </Link>
    </li>
  );
};

const List: React.FC<PropsWithChildren> & ListNamespace = ({
  children
}: PropsWithChildren) => {
  const { isMenuOpen, setMenuState } = useMenuState();
  return (
    <div
      className={
        'pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden ' +
        (isMenuOpen ? 'opacity-100 pointer-events-auto' : '')
      }
    >
      <div className="ml-auto w-2/3 bg-green p-4 md:w-1/3">
        <XMarkIcon
          className="absolute top-0 right-0 mt-4 mr-4 text-4xl h-9 w-7 text-primary dark:text-white"
          onClick={() => setMenuState(false)}
        />
        <ul className="mt-8 flex flex-col">{children}</ul>
      </div>
    </div>
  );
};

List.Item = Item;

export default List;
