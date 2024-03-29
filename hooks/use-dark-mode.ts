import { useEffect } from 'react';
import useLocalStorage from './use-local-storage';
import useMedia from './use-media';

function useDarkMode() {
  // usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    'dark-mode-enabled',
    false
  );

  // See if user has set a browser or OS preference for dark mode.
  // The usePrefersDarkMode hook composes a useMedia hook (see code below).
  const prefersDarkMode = usePrefersDarkMode();

  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled = enabledState ?? prefersDarkMode;

  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      const className = 'dark';
      const element = window.document.documentElement;
      if (enabled) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabled] // Only re-call effect when value changes
  );

  // Return enabled state and setter
  return [enabled, setEnabledState] as const;
}

export default useDarkMode;

// usehooks.com/useMedia
function usePrefersDarkMode() {
  return useMedia<boolean>(['(prefers-color-scheme: dark)'], [true], false);
}
