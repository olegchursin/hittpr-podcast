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
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
