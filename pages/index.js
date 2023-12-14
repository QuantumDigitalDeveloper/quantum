import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "../components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/*<Header data={porto}/>*/}
      {/* banner-one */}
      <section className="banner__one ">
        <div className="pattern-layer">
          <div
            className="banner__icon pattern-1 p_absolute"
            data-parallax='{"x": 100}'
            style={{
              backgroundImage: "url(assets/images/banner/banner-shap-01.png)",
            }}
          />
        </div>
        <div className="banner__data p_relative">
          <div
            className="banner__bg"
            style={{
              backgroundImage: "url(assets/images/banner/banner-bg.png)",
            }}
          />
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="banner__left">
                  <div className="sub__title">
                    <h4>Better Future</h4>
                  </div>
                  <div className="banner__title">
                    <h1>
                      Growth <span>your bussiness</span>{" "}
                    </h1>
                  </div>
                  <div className="text">
                    <p>
                      Selamat datang di Quantum, tempat di mana desain menemui
                      teknologi untuk menghasilkan pengalaman digital yang luar
                      biasa.{" "}
                    </p>
                  </div>
                  <div className="btn-box">
                    <Link
                      href="/contact/contact"
                      className="theme-btn theme-btn-one"
                    >
                      <i className="icon-02" /> Contact Us
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
                      <img src="assets/images/banner/banner-01.png" alt="" />
                    </figure>
                  </div>
                  {/* <div className="icon__image__banner">
                    <div className="circle-main">
                      <div className="circle">
                        <img src="assets/images/Quantumsedang.png" alt="" />
                        <div className="round-text">
                          <div className="text_1">
                            <p className="text_2">Quantum</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner-one end */}
      {/* service */}
      <section className="service__section p_relative">
        <div className="auto-container">
          <div className="service__data">
            <div className="title__data">
              <div className="sub__title">
                <h4>Better Future</h4>
              </div>
              <div className="title">
                <h2>Explore Our Services</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="service__block">
                  <div className="service__icon">
                    <i className="icon-04" />
                    <div className="service__icon__two" />
                  </div>
                  <div className="service__text">
                    <h4>
                      <Link href="/servisDetail/webDevelopment">
                        Web Development
                      </Link>
                    </h4>
                    <p>
                      Kode adalah bahasa kami, dan situs web adalah kanvas kami.
                      Kami mengembangkan solusi web yang responsif dan
                      fungsional untuk meningkatkan kinerja bisnis Anda.
                    </p>
                  </div>
                  <div className="service__button">
                    <Link href="/servisDetail/webDevelopment">
                      <i className="icon-05" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service__block">
                  <div className="service__icon">
                    <i className="icon-08" />
                    <div className="service__icon__two" />
                  </div>
                  <div className="service__text">
                    <h4>
                      <Link href="/servisDetail/design">Design</Link>
                    </h4>
                    <p>
                      Buat kesan pertama yang tak terlupakan dengan design yang
                      menakjubkan. Tim desain kami akan membantu Anda
                      menciptakan tampilan dan pengalaman yang sesuai dengan
                      merek Anda.
                    </p>
                  </div>
                  <div className="service__button">
                    <Link href="/servisDetail/design">
                      <i className="icon-05" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="service__block">
                  <div className="service__icon">
                    <i className="icon-12" />
                    <div className="service__icon__two" />
                  </div>
                  <div className="service__text">
                    <h4>
                      <Link href="/servisDetail/digitalMarketing">
                        Digital Marketing
                      </Link>
                    </h4>
                    <p>
                      Kami adalah ahli di dunia digital. Dari strategi SEO
                      hingga kampanye iklan yang disesuaikan, kami membantu Anda
                      mencapai target audiens Anda dan meningkatkan konversi.
                    </p>
                  </div>
                  <div className="service__button">
                    <Link href="/servisDetail/digitalMarketing">
                      <i className="icon-05" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-end */}
      {/* about */}
      <section className="about__section p_relative see__pad">
        <div className="pattern-layer">
          <div
            className="pattern-2 p_absolute"
            data-parallax='{"x": -50}'
            style={{
              backgroundImage: "url(assets/images/shapes/shape-02.png)",
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
                  <img src="assets/images/resource/about-us.png" alt="" />
                </figure>
                {/* <div
                  className="funfact__content about"
                  style={{
                    backgroundImage: "url(assets/images/shapes/shape-01.png)",
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
            <div className="col-lg-5 col-md-12">
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
      {/* choose */}
      <section className="choose__us p_relative">
        <div className="choose__us__data">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="choose__block">
                  <figure>
                    <img src="assets/images/resource/choose-01.png" alt="" />
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
                      <img src="assets/images/resource/choose-02.svg" alt="" />
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
                      <img src="assets/images/resource/choose-02.svg" alt="" />
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
                      <img src="assets/images/resource/choose-02.svg" alt="" />
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
              backgroundImage: "url(assets/images/shapes/shape-03.png)",
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
          <div className="row justify-content-between ">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="team__block wow fadeInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="team__img">
                  <figure>
                    <img src="assets/images/resource/afif1.png" alt="" />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>AFIF F. ROHMAN</h3>
                </div>
                <div className="team__media">
                  <ul>
                    <li>
                      <a href="#">FrontEnd Developer</a>
                    </li>
                  </ul>
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
                    <img src="assets/images/resource/dopen1.png" alt="" />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>NUR IKHWAN</h3>
                </div>
                <div className="team__media">
                  <ul>
                    <li>
                      <a href="#">Team Leader</a>
                    </li>
                  </ul>
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
                    <img src="assets/images/resource/bagus2.png" alt="" />
                  </figure>
                </div>
                <div className="team__name">
                  <h3>BAGUS IKHSANI</h3>
                </div>
                <div className="team__media">
                  <ul>
                    <li>
                      <a href="#">BackEnd Developer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="accomplised__section">
          <div className="auto-container">
            <div className="accomplised__data p_relative">
              <div className="pattern-layer">
                <div
                  className="pattern-4 p_absolute"
                  data-parallax='{"x": 100}'
                  style={{
                    backgroundImage: "url(assets/images/shapes/shape-04.png)",
                  }}
                />
              </div>
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="title__data">
                    <div className="sub__title">
                      <h4>What weve accomplised</h4>
                    </div>
                    <div className="title">
                      <h2>
                        We pride ourselves on <br /> our excellent support{" "}
                        <br /> and servic
                      </h2>
                    </div>
                  </div>
                  <div className="btn-box">
                    <a href="contact.html" className="theme-btn theme-btn-one">
                      <i className="icon-02" /> Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-4 col-md-12">
                  <div className="funfact__data">
                    <div className="funfact__content one">
                      <div className="count-outer count-box">
                        <span>+</span>
                        <h1
                          className="count-text"
                          data-speed={1500}
                          data-stop="4.9"
                        >
                          0
                        </h1>
                        <span className="two">*</span>
                      </div>
                      <p> Customer Satisfaction</p>
                    </div>
                    <div className="funfact__content two">
                      <div className="count-outer count-box">
                        <span>+</span>
                        <h1
                          className="count-text"
                          data-speed={1500}
                          data-stop="4.9"
                        >
                          0
                        </h1>
                        <span className="two">k</span>
                      </div>
                      <p>Active our Members</p>
                    </div>
                    <div className="funfact__content three">
                      <div className="count-outer count-box">
                        <span>+</span>
                        <h1
                          className="count-text"
                          data-speed={1500}
                          data-stop={30}
                        >
                          0
                        </h1>
                        <span className="two">%</span>
                      </div>
                      <p>Same day resolution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* team-section-end */}
      {/* testimonial-section */}
      {/* <section className="testimonial__section p_relative">
        <div className="auto-container">
          <div className="testimonial__top">
            <div className="title__data">
              <div className="sub__title">
                <h4>Testimonial </h4>
              </div>
              <div className="title">
                <h2>What Our Client Says</h2>
              </div>
            </div>
            <div className="swiper__button">
              <div className="button_next">
                <i className="icon-06" />
              </div>
              <div className="button_prev">
                <i className="icon-05" />
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-container two-item-carousel">
          <div className="swiper-wrapper">
            <div className="swiper-slide testimonials__block__one">
              <div className="test__bg" />
              <div className="testimonials__info">
                <div className="authore__img">
                  <figure className="image">
                    <img src="assets/images/resource/author-01.png" alt="" />
                  </figure>
                </div>
                <div className="authore__rating">
                  <ul>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                  </ul>
                </div>
                <div className="authore__info">
                  <h5>Wade Warren</h5>
                  <p>Manager</p>
                </div>
                <div className="testimonials__text">
                  <p>
                    Our technologies are designed to seamlessly integrate with
                    your existing systems, minimizing disruption and maximizing
                    productivity.
                  </p>
                </div>
              </div>
              <div className="quote">
                <span className="icon-03" />
              </div>
            </div>
            <div className="swiper-slide testimonials__block__one">
              <div className="test__bg" />
              <div className="testimonials__info">
                <div className="authore__img">
                  <figure className="image">
                    <img src="assets/images/resource/author-02.png" alt="" />
                  </figure>
                </div>
                <div className="authore__rating">
                  <ul>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                  </ul>
                </div>
                <div className="authore__info">
                  <h5>Robert Fox</h5>
                  <p>Technology</p>
                </div>
                <div className="testimonials__text">
                  <p>
                    Our technologies are designed to seamlessly integrate with
                    your existing systems, minimizing disruption and maximizing
                    productivity.
                  </p>
                </div>
              </div>
              <div className="quote">
                <span className="icon-03" />
              </div>
            </div>
            <div className="swiper-slide testimonials__block__one">
              <div className="test__bg" />
              <div className="testimonials__info">
                <div className="authore__img">
                  <figure className="image">
                    <img src="assets/images/resource/author-03.png" alt="" />
                  </figure>
                </div>
                <div className="authore__rating">
                  <ul>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                  </ul>
                </div>
                <div className="authore__info">
                  <h5>Eleanor Pena</h5>
                  <p>CTO</p>
                </div>
                <div className="testimonials__text">
                  <p>
                    Our technologies are designed to seamlessly integrate with
                    your existing systems, minimizing disruption and maximizing
                    productivity.
                  </p>
                </div>
              </div>
              <div className="quote">
                <span className="icon-03" />
              </div>
            </div>
            <div className="swiper-slide testimonials__block__one">
              <div className="test__bg" />
              <div className="testimonials__info">
                <div className="authore__img">
                  <figure className="image">
                    <img src="assets/images/resource/author-04.png" alt="" />
                  </figure>
                </div>
                <div className="authore__rating">
                  <ul>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                    <li>
                      <i className="icon-13" />
                    </li>
                  </ul>
                </div>
                <div className="authore__info">
                  <h5>JGuy Hawkins</h5>
                  <p>Ex CTO</p>
                </div>
                <div className="testimonials__text">
                  <p>
                    Our technologies are designed to seamlessly integrate with
                    your existing systems, minimizing disruption and maximizing
                    productivity.
                  </p>
                </div>
              </div>
              <div className="quote">
                <span className="icon-03" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* testimonial-section-end */}
      {/* brand-section */}
      {/* <div className="brand__section p_relative see__pad">
        <div className="pattern-layer">
          <div
            className="pattern-3 p_absolute"
            data-parallax='{"y": -50}'
            style={{
              backgroundImage: "url(assets/images/shapes/shape-05.png)",
            }}
          />
        </div>
        <div className="brand-carousel owl-carousel owl-theme  nav-style-one owl-loaded owl-drag">
          <div className="brand__content">
            <div className="brand__name">
              <h1>IT Services *</h1>
            </div>
          </div>
          <div className="brand__content">
            <div className="brand__name">
              <h1>Development *</h1>
            </div>
          </div>
          <div className="brand__content">
            <div className="brand__name">
              <h1>Technology *</h1>
            </div>
          </div>
          <div className="brand__content">
            <div className="brand__name">
              <h1>IT Services *</h1>
            </div>
          </div>
        </div>
      </div> */}
      {/* brand-section-end */}
      {/* blog-section */}
      <section className="blog__section see__pad p_relative">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="title__data">
                <div className="sub__title">
                  <h4>Latest News </h4>
                </div>
                <div className="title">
                  <h2>Learn From Blog</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="normaol__text">
                <p>
                  Our dedicated team of technology professionals comprises
                  experienced engineers, developers, and researchers who are
                  passionate about pushing the boundaries of technology.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/design/detail">
                        <img src="/assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          30 October 2023
                        </li>
                        <li className="two" />
                        {/* <li>
                          <i className="icon-09" /> Admin
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="lower___content p_relative">
                    <h4>
                      <Link href="/blog/design/detail">
                        11 Prinsip Desain seorang Designer
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/design/detail"
                        className="theme__btn__two"
                      >
                        <i className="icon-02" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/webDev/htmlDetail">
                        <img src="/assets/images/news/news-2.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          24 Agustus 2023
                        </li>
                        <li className="two" />
                        {/* <li>
                          <i className="icon-09" /> Admin
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="lower___content p_relative">
                    <h4>
                      <Link href="/blog/webDev/htmlDetail">
                        HTML (Hypertext Markup Language)
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/webDev/htmlDetail"
                        className="theme__btn__two"
                      >
                        <i className="icon-02" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/digital/contentDetail">
                        <img src="/assets/images/news/news-3.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          20 Mei 2022
                        </li>
                        <li className="two" />
                        {/* <li>
                          <i className="icon-09" /> Admin
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="lower___content p_relative">
                    <h4>
                      <Link href="/blog/digital/contentDetail">
                        Content Marketing
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/digital/contentDetail"
                        className="theme__btn__two"
                      >
                        <i className="icon-02" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog-section-end */}
    </>
  );
}
