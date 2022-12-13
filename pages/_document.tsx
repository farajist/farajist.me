import { Html, Head, Main, NextScript } from 'next/document';
import useMenuState from '../hooks/use-menu-state';

export default function Document() {
  const { isMenuOpen } = useMenuState();
  return (
    <Html>
      <Head />
      <body
        className={
          'dark:bg-primary' +
          (isMenuOpen ? 'max-h-screen overflow-hidden relative' : '')
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
