import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import useMenuState from '../../hooks/use-menu-state';

export default function Burger() {
  const { setMenuState } = useMenuState();
  return (
    <Bars3BottomRightIcon
      className="h-9 w-7 text-primary dark:text-white"
      onClick={() => setMenuState(true)}
    />
  );
}
