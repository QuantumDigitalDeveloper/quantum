import React from "react";
import Layout from "../components/layout/layout";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
const _app = ({ Component, pageProps, porto }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Quantum</title>
      </Head>
        <Header data={porto} />
        <Component {...pageProps} />
        <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(_app), { ssr: false });
