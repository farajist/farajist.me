import Logo from '../Logo';
import { Navigation, Menu } from '../Navigation';
import Burger from './Burger';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6 lg:py-10">
          <Logo />
          <div className="flex items-center lg:hidden">
            <DarkModeSwitch />
            <Burger />
          </div>
          <Navigation />
        </div>
      </div>
      <Menu />
    </>
  );
}
