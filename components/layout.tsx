import Footer from './footer';
import Head from 'next/head';
import Navbar from './navbar';
import React from 'react';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Head>
        <title>HITTPR - Podcast</title>
        <meta name="description" content="Davai otpiaryu. HITTPR - Podcast." />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="dark:bg-gray-900">
        <Navbar />
        <main>{children}</main>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
