import React from "react";
import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";
import dynamic from "next/dynamic";

const _app = ({ Component, pageProps }) => {
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(_app), { ssr: false });
