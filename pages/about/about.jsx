import React from "react";
import Link from "next/link";

export default function about() {
  return (
    <>
      {/* page-title */}
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
                <Link href="/#">Home </Link>
              </li>
              <li>
                {" "}
                <span> -</span>About{" "}
              </li>
            </ul>
            <h1 className="title">About</h1>
          </div>
        </div>
      </section>
      {/* page-title end*/}
      {/* about */}
      <section className="about__section about__page p_relative see__pad">
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
          <h1>DataMatrix</h1>
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="about__block p_relative">
                <figure
                  className="wow zoomIn animated"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <img src="/assets/images/resource/about-us.png" alt="" />
                </figure>
                {/* <div
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
                </div> */}
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-6 col-md-12">
              <div className="about__text__block">
                <div className="sub__title">
                  <h4>About Company</h4>
                </div>
                <div className="title two">
                  <h2>
                    Make your Design, website, and SEO is easy with{" "}
                    <span>Quantum</span>.
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
                  <Link
                    href="/contact/contact"
                    className="theme-btn theme-btn-one"
                  >
                    <i className="icon-02" /> Discusse
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-end */}
      {/* choose */}
      <section className="choose__us p_relative">
        <div className="choose__us__data">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="choose__block">
                  <figure>
                    <img src="/assets/images/resource/choose-01.png" alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="choose__block__right">
                  <div className="title__data">
                    <div className="sub__title">
                      <h4>Why choose us</h4>
                    </div>
                    <div className="title">
                      <h2>We Provide Your Best Work </h2>
                    </div>
                  </div>
                  <div className="team__data">
                    <div className="team__data__left">
                      <img src="/assets/images/resource/choose-02.svg" alt="" />
                    </div>
                    <div className="team__data__right">
                      <h3>
                        Kreativitas Tanpa Batas: Kami Menyampaikan Visi Anda
                      </h3>
                      <p>
                        Kami menekankan kemampuan kami untuk mengubah ide-ide
                        Anda menjadi desain visual yang mengesankan, membantu
                        merek Anda bersinar di pasar yang kompetitif.
                      </p>
                    </div>
                  </div>
                  <div className="team__data">
                    <div className="team__data__left">
                      <img src="/assets/images/resource/choose-02.svg" alt="" />
                    </div>
                    <div className="team__data__right">
                      <h3>
                        Kode Berkualitas Tinggi: Situs Web yang Kuat dan Aman
                      </h3>
                      <p>
                        Kami menjelaskan bahwa pendekatan pengembangan kami
                        didasarkan pada standar tertinggi, yang menghasilkan
                        situs web yang aman, cepat, dan andal.
                      </p>
                    </div>
                  </div>
                  <div className="team__data three">
                    <div className="team__data__left">
                      <img src="/assets/images/resource/choose-02.svg" alt="" />
                    </div>
                    <div className="team__data__right">
                      <h3>Kami adalah Mitra dalam Kesuksesan Bisnis Anda</h3>
                      <p>
                        Kami menggambarkan bahwa kami bukan hanya penyedia
                        layanan, tetapi mitra yang peduli dan berkomitmen untuk
                        membantu Anda mencapai tujuan bisnis Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* choose-end */}
      {/* team-section */}
      <section className="team__section see__pad p_relative">
        <div className="pattern-layer">
          <div
            className="pattern-3 p_absolute"
            data-parallax='{"y": 50}'
            style={{
              backgroundImage: "url(/assets/images/shapes/shape-03.png)",
            }}
          />
        </div>
        <div className="auto-container">
          <div className="title__data">
            <div className="sub__title">
              <h4>Team Members</h4>
            </div>
            <div className="title">
              <h2>We Have Expert Member</h2>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team__block wow fadeInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="team__img">
                  <figure>
                    <img src="/assets/images/resource/bagus.jpeg" alt="" />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Afif F. Rohman</h3>
                </div>
                <div className="team__media">
                  {/* <ul>
                    <li>
                      <a href="#">FB.</a>
                    </li>
                    <li>
                      <a href="#">TW.</a>
                    </li>
                    <li>
                      <a href="#">LI</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team__block wow fadeInUp animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="team__img">
                  <figure>
                    <img src="/assets/images/resource/bagus.jpeg" alt="" />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Nur Ikhwan</h3>
                </div>
                <div className="team__media">
                  {/* <ul>
                    <li>
                      <a href="#">FB.</a>
                    </li>
                    <li>
                      <a href="#">TW.</a>
                    </li>
                    <li>
                      <a href="#">LI</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team__block wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="team__img">
                  <figure>
                    <img src="/assets/images/resource/bagus.jpeg" alt="" />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>Bagus Ikhsani</h3>
                </div>
                <div className="team__media">
                  {/* <ul>
                    <li>
                      <a href="#">FB.</a>
                    </li>
                    <li>
                      <a href="#">TW.</a>
                    </li>
                    <li>
                      <a href="#">LI</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team-section-end */}
      {/* pride-section */}
      <div className="pride__section p_relative see__pad">
        <div
          className="pride__layer"
          style={{ backgroundImage: "url(/assets/images/resource/bg-04.jpg)" }}
        />
        <div className="auto-container">
          <div className="pride__block">
            <figure>
              <img src="/assets/images/Quantumsedang.png" alt="" />
            </figure>
            <h1>We pride ourselves on our excellent support and service</h1>
          </div>
        </div>
      </div>
      {/* pride-section-end */}
      {/* pricing-section */}
      {/* <section className="pricing__section see__pad p_relative">
        <div className="pattern-layer">
          <div
            className="pattern-4 p_absolute"
            data-parallax='{"x": 100}'
            style={{
              backgroundImage: "url(/assets/images/shapes/shape-04.png)",
            }}
          />
        </div>
        <div className="auto-container">
          <div className="title__data">
            <div className="sub__title">
              <h4>Pricing</h4>
            </div>
            <div className="title">
              <h2>Product Price</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="price__content p_relative">
                <div className="price__data">
                  <h5>Basic</h5>
                  <h4>
                    <span>$</span>200 / <span>m</span>
                  </h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>20GB Space</li>
                      <li>10GB Bandwidth</li>
                      <li>2 Databases </li>
                      <li>1 Accounts</li>
                      <li>24th Support</li>
                    </ul>
                  </div>
                </div>
                <div className="price__icon">
                  <i className="icon-16" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="price__content p_relative">
                <div className="price__data">
                  <h5>Personal</h5>
                  <h4>
                    <span>$</span>300 / <span>m</span>
                  </h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>20GB Space</li>
                      <li>10GB Bandwidth</li>
                      <li>2 Databases </li>
                      <li>1 Accounts</li>
                      <li>24th Support</li>
                    </ul>
                  </div>
                </div>
                <div className="price__icon">
                  <i className="icon-16" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="price__content p_relative">
                <div className="price__data">
                  <h5>Business</h5>
                  <h4>
                    <span>$</span>500 / <span>m</span>
                  </h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>20GB Space</li>
                      <li>10GB Bandwidth</li>
                      <li>2 Databases </li>
                      <li>1 Accounts</li>
                      <li>24th Support</li>
                    </ul>
                  </div>
                </div>
                <div className="price__icon">
                  <i className="icon-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* pricing-section-end */}
    </>
  );
}
