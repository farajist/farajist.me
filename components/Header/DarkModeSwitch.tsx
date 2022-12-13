import { MoonIcon } from '@heroicons/react/24/solid';
import { SunIcon } from '@heroicons/react/24/outline';
import useDarkMode from '../../hooks/use-dark-mode';

const DarkModeSwitch = () => {
  const [enabled, setEnabledState] = useDarkMode();
  return enabled ? (
    <SunIcon
      height={36}
      width={30}
      className="cursor-pointer text-3xl h-9 w-7 text-primary dark:text-white xs:mr-8"
      onClick={() => setEnabledState(false)}
    />
  ) : (
    <MoonIcon
      height={36}
      width={30}
      className="cursor-pointer h-9 w-7 text-3xl text-primary dark:text-white xs:mr-8"
      onClick={() => setEnabledState(true)}
    />
  );
};

export default DarkModeSwitch;
