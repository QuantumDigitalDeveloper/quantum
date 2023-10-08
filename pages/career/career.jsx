import React from "react";
import Link from "next/link";

export default function career() {
  return (
    <>
      <section className="page__title p_relative">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(/assets/images/resource/page-title-bg.jpg)",
          }}
        />
        <div className="auto-container">
          <div className="content__box p_relative">
            <ul className="bread__crumb">
              <li>
                <a href="index.html">Home </a>
              </li>
              <li>
                {" "}
                <span> -</span>Career{" "}
              </li>
            </ul>
            <h1 className="title">We Are Hiring</h1>
          </div>
        </div>
      </section>
      {/* about */}
      <section className="about__section p_relative see__pad">
        <div className="pattern-layer">
          <div
            className="pattern-2 p_absolute"
            data-parallax='{"x": -50}'
            style={{
              backgroundImage: "url(/assets/images/shapes/shape-02.png)",
            }}
          />
        </div>
        <div className="boild__text">
          <h1>Quantum</h1>
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about__block p_relative">
                <figure
                  className="wow zoomIn animated"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <img src="/assets/images/resource/about-us.png" alt="" />
                </figure>
                <div
                  className="funfact__content about"
                  style={{
                    backgroundImage: "url(/assets/images/shapes/shape-01.png)",
                  }}
                >
                  <div className="count-outer count-box">
                    <h1 className="count-text" data-speed={1500} data-stop={2}>
                      0
                    </h1>
                    <span>K+</span>
                  </div>
                  <p>World wide Client</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-5 col-md-12">
              <div className="about__text__block">
                <div className="sub__title">
                  <h4>We Are Hiring </h4>
                </div>
                <div className="title two">
                  <h2>
                    Freelancer <span>Video Editor</span>.
                  </h2>
                </div>
                <div className="texts">
                  <p>
                    Kami adalah tim ahli yang bersemangat dalam mengubah ide
                    menjadi kenyataan. Dengan kombinasi desain yang memukau,
                    pengembangan web yang canggih, dan strategi pemasaran
                    digital yang unggul, kami membantu bisnis Anda berkembang
                    dan sukses.
                  </p>
                </div>
                <div className="btn-box">
                  <Link href="/about/about" className="theme-btn theme-btn-one">
                    <i className="icon-02" /> About more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-end */}
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about__text__block">
              <div className="sub__title">
                <h4>We Are Hiring</h4>
              </div>
              <div className="title two">
                <h2>
                  Freelancer <span>Vector Spesialis</span>.
                </h2>
              </div>
              <div className="texts">
                <p>
                  Kami adalah tim ahli yang bersemangat dalam mengubah ide
                  menjadi kenyataan. Dengan kombinasi desain yang memukau,
                  pengembangan web yang canggih, dan strategi pemasaran digital
                  yang unggul, kami membantu bisnis Anda berkembang dan sukses.
                </p>
              </div>
              <div className="btn-box">
                <Link href="/about/about" className="theme-btn theme-btn-one">
                  <i className="icon-02" /> About more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2" />
          <div className="col-lg-4 col-md-12 ">
            <div className="banner__right p_relative">
              <div className="image__one">
                <figure
                  className="image-box wow slideInUp animated animated animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  style={{ visibility: "visible" }}
                >
                  <img src="/assets/images/banner/banner-01.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
