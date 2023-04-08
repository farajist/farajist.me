import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
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
          name="og:description"
          content="farajist.me a modest log of my journey through tech, reading and life learnings"
        />
        <meta property="og:site_name" content="farajist.me" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1558304970-abd589baebe5?w=640"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@farajist" />
        <link rel="icon" type="image/png" href="/assets/img/favicon.ico" />
        <link rel="canonical" href="https://farajist.me/" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        ></link>

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
