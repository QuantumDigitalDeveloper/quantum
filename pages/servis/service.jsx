import React from "react";
import Link from "next/link";
import Contact from "../contact/contactService";

export default function service() {
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
                <span> -</span>Services{" "}
              </li>
            </ul>
            <h1 className="title">Services</h1>
          </div>
        </div>
      </section>
      {/* page-title end*/}
      {/* service-page end*/}
      <div className="service__page p_relative see__pad">
        <div className="auto-container">
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
                    <Link href="/about/about">Berkualitas</Link>
                  </h4>
                  <p>
                    Dapatkan berbagai opsi desain yang baik dan berkualitas
                    untuk Bisnis Anda
                  </p>
                </div>
                <div className="service__button">
                  <Link href="/about/about">
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
                    <Link href="/about/about">Profesional</Link>
                  </h4>
                  <p>
                    Project anda ditangani oleh Tim Desainer , Programmer dan
                    Digital Marketing Profesional
                  </p>
                </div>
                <div className="service__button">
                  <Link href="/about/about">
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
                    <Link href="/about/about">Kreatif</Link>
                  </h4>
                  <p>
                    Kami selalu update dengan desain teknologi terkini untuk
                    tetap selalu Kreatif
                  </p>
                </div>
                <div className="service__button">
                  <Link href="/about/about">
                    <i className="icon-05" />
                  </Link>
                </div>
              </div>
            </div>
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
                    <Link href="/about/about">Totalitas</Link>
                  </h4>
                  <p>
                    Kami mengerjakan project anda dengan Hati dan Totalitas ide
                    Kreatif yang kami punya
                  </p>
                </div>
                <div className="service__button">
                  <Link href="/about/about">
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
                    <Link href="/about/about">On Time</Link>
                  </h4>
                  <p>
                    Kami membatasi hanya 10 project perminggu sehingga dedline
                    project selalu On Schedule
                  </p>
                </div>
                <div className="service__button">
                  <Link href="/about/about">
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
                    <Link href="/about/about">Fast Response</Link>
                  </h4>
                  <p>
                    Demi Kenyamanan anda , kami siap melayani anda 24/7 Jam
                    setiap harinya
                  </p>
                </div>
                <div className="service__button">
                  <Link href="/about/about">
                    <i className="icon-05" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page-title end*/}
      {/* service-two-section */}
      <section className="service__two p_relative">
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="service__block__two p_relative">
              <div
                className="service__image"
                style={{
                  backgroundImage: "url(/assets/images/shapes/shape-10.png)",
                }}
              ></div>
              <div className="service__icon">
                <div className="service__number">
                  <h1>01</h1>
                </div>
                <i className="icon-04" />
              </div>
              <div className="service__text">
                <h4>
                  <Link href="/servisDetail/video">Video Editor</Link>
                </h4>
                <p>
                  Kami mengoptimalkan situs web Anda untuk peringkat teratas di
                  mesin pencari. Posisi terbaik di hasil pencarian akan membantu
                  Anda mencapai lebih banyak pelanggan potensial.
                </p>
              </div>
              <div className="service__button__two">
                <Link href="/servisDetail/video">Read More</Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp animated"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="service__block__two p_relative">
              <div
                className="service__image"
                style={{
                  backgroundImage: "url(/assets/images/shapes/shape-10.png)",
                }}
              ></div>
              <div className="service__icon">
                <div className="service__number">
                  <h1>02</h1>
                </div>
                <i className="icon-08" />
              </div>
              <div className="service__text">
                <h4>
                  <Link href="/servisDetail/design">Design</Link>
                </h4>
                <p>
                  Buat kesan pertama yang tak terlupakan dengan design yang
                  menakjubkan. Tim desain kami akan membantu Anda menciptakan
                  tampilan dan pengalaman yang sesuai dengan merek Anda.
                </p>
              </div>
              <div className="service__button__two">
                <Link href="/servisDetail/design">Read More</Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp animated"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="service__block__two p_relative">
              <div
                className="service__image"
                style={{
                  backgroundImage: "url(/assets/images/shapes/shape-10.png)",
                }}
              ></div>
              <div className="service__icon">
                <div className="service__number">
                  <h1>03</h1>
                </div>
                <i className="icon-12" />
              </div>
              <div className="service__text">
                <h4>
                  <Link href="/servisDetail/digitalMarketing">
                    Digital Marketing{" "}
                  </Link>
                </h4>
                <p>
                  Kami adalah ahli di dunia digital. Dari strategi SEO hingga
                  kampanye iklan yang disesuaikan, kami membantu Anda mencapai
                  target audiens Anda dan meningkatkan konversi.
                </p>
              </div>
              <div className="service__button__two">
                <Link href="/servisDetail/digitalMarketing">Read More</Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-12  wow fadeInUp animated"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="service__block__two p_relative">
              <div
                className="service__image"
                style={{
                  backgroundImage: "url(/assets/images/shapes/shape-10.png)",
                }}
              ></div>
              <div className="service__icon">
                <div className="service__number">
                  <h1>04</h1>
                </div>
                <i className="icon-04" />
              </div>
              <div className="service__text">
                <h4>
                  <Link href="/servisDetail/webDevelopment">
                    Web Development
                  </Link>
                </h4>
                <p>
                  Kode adalah bahasa kami, dan situs web adalah kanvas kami.
                  Kami mengembangkan solusi web yang responsif dan fungsional
                  untuk meningkatkan kinerja bisnis Anda.
                </p>
              </div>
              <div className="service__button__two">
                <Link href="/servisDetail/webDevelopment">Read More</Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="service__block__two p_relative">
              <div
                className="service__image"
                style={{
                  backgroundImage: "url(/assets/images/shapes/shape-10.png)",
                }}
              ></div>
              <div className="service__icon">
                <div className="service__number">
                  <h1>05</h1>
                </div>
                <i className="icon-04" />
              </div>
              <div className="service__text">
                <h4>
                  <Link href="/servisDetail/vector">Spesialis Vector</Link>
                </h4>
                <p>
                  Kami mengoptimalkan situs web Anda untuk peringkat teratas di
                  mesin pencari. Posisi terbaik di hasil pencarian akan membantu
                  Anda mencapai lebih banyak pelanggan potensial.
                </p>
              </div>
              <div className="service__button__two">
                <Link href="/servisDetail/vector">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-two-section-end */}
      {/* service-contact */}
      <Contact />
      {/* service-contact-end */}
    </>
  );
}
