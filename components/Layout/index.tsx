import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { Poppins } from '@next/font/google';
import Footer from '../Footer';
import Header from '../Header';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin']
});

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://farajist.me/" />
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <meta property="og:site_name" content="Atlas Template" />
        <meta
          property="og:image"
          content="https://atlas.tailwindmade.com/assets/img/social.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@farajist" />
        <link rel="icon" type="image/png" href="/assets/img/favicon.ico" />
        <link rel="canonical" href="https://farajist.com/" />

        <meta property="og:title" content="Hamza Faraji" key="title" />
      </Head>
      <div id="main">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
