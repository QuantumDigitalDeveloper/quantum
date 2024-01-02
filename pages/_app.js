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
        <meta name="author" content="Quantech" />
        <meta
          name="description"
          content="Quantech.id adalah perusahaan yang begerak di bidang digital kami dapat membantu berbagai jenis kebutuhan desain seperti desain grafis, website, logo dan lain lain."
        />
        <meta
          name="keywords"
          content="Quantum, Digital Agency, Social Media Design, Social Media Desain, Digital Marketing, Web Development, Web Design, Mobile App Development, Mobile App Design, UI/UX Design, Branding, Brand Identity, Social Media Management, Social Media Marketing, SEO, SEM, Jakarta, Indonesia"
        />
        <meta name="og:title" content="Quantech" />
        <meta
          name="og:description"
          content="Quantech.id adalah perusahaan yang begerak di bidang digital kami dapat membantu berbagai jenis kebutuhan desain seperti desain grafis, website, logo dan lain lain."
        />
        <meta name="og:url" content="https://quantech.id" />

        <meta name="og:image" content="/images/quantum.png" />
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
