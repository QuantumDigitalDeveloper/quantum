import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fav Icon */}
        <link
          rel="icon"
          href="/assets/images/Quantumkecil.png"
          type="image/x-icon"
        />
        {/* Stylesheets */}
        <link href="/assets/css/flaticon.css" rel="stylesheet" />
        <link href="/assets/css/owl.css" rel="stylesheet" />
        <link href="/assets/css/bootstrap.css" rel="stylesheet" />
        <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/color.css" rel="stylesheet" />
        <link href="/assets/css/global.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/swiper.min.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
      </Head>
      <body>
        <div className="boxed_wrapper">
          {/* mouse-pointer */}
          {/* <div className="mouse-pointer" id="mouse-pointer">
            <div className="icon">
              <i className="icon-06" />
              <i className="icon-05" />
            </div>
          </div> */}
          {/* mouse-pointer end */}
          {/* preloader */}
          <div className="loader-wrap">
            <div className="hendel__preloder">
              <img src="/assets/images/S.gif" alt="" />
              {/* <div className="preloader">
                <div className="preloader-ring">
                  QuantumQuantum QuantumQuantum
                </div>
                <div className="preloader-ring">
                  QuantumQuantum QuantumQuantum
                </div>
              </div> */}
            </div>
          </div>
          {/* preloader end */}
          <Main />
          <NextScript />
          {/*Scroll to top*/}
          <div className="scroll-to-top">
            <div>
              <div className="scroll-top-inner">
                <div className="scroll-bar">
                  <div className="bar-inner" />
                </div>
                <div className="scroll-bar-text g_color">Go To Top</div>
              </div>
            </div>
          </div>
          {/* Scroll to top end */}
        </div>
        {/* <!-- jequery plugins --> */}
        <Script
          src="/assets/js/jquery.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/bootstrap.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script src="/assets/js/owl.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/js/wow.js" strategy="beforeInteractive"></Script>
        <Script
          src="/assets/js/jquery.fancybox.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/appear.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/scrollbar.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/swiper.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/parallax-scroll.js"
          strategy="beforeInteractive"
        ></Script>

        {/* <!-- main-js --> */}
        <Script
          src="/assets/js/script.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
