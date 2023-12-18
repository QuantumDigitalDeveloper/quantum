import React from "react";
import Link from "next/link";
import Contact from "../contact/contactService";

export default function logo() {
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
                <a href="index.html">Home </a>
              </li>
              <li>
                {" "}
                <span> -</span>Logo{" "}
              </li>
            </ul>
            <h1 className="title">Services Details</h1>
          </div>
        </div>
      </section>
      {/* page-title end*/}
      {/* service-page end*/}
      <div className="service__details p_relative ">
        <div className="auto-container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="service__details__left">
                <div className="sidebar__widget">
                  <div className="all__service">
                    <h4>All Services</h4>
                  </div>
                  <ul className="service__details__1__cat">
                    <li>
                      <Link href="/servisDetail/design">
                        Social Media Design <i className="icon-02" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/servisDetail/video">
                        Video Editor <i className="icon-02" />
                      </Link>
                    </li>
                    <li className="active">
                      <Link href="/servisDetail/vector">
                        Vector Spesialis <i className="icon-02" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/servisDetail/webDevelopment">
                        Web Development <i className="icon-02" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className=" sidebar__widget_network"
                  style={{
                    backgroundImage: "url(/assets/images/resource/base.png)",
                  }}
                >
                  <h3>Contact Us For Any Require</h3>
                  <div className="services__icon">
                    <i className="icon-19" />
                  </div>
                  <p>Need help? Call us:</p>
                  <h4>(+62) 855-8833-691</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 col-md-12">
              <div className="service__right">
                <figure>
                  <img
                    src="/assets/images/resource/service-details.jpg"
                    alt=""
                  />
                </figure>
                <h2>
                  Tingkatkan merek Anda dengan logo yang menginspirasi bersama{" "}
                  <span>Quantum.</span>{" "}
                </h2>
                <p>
                  Logo merupakan elemen kunci dalam strategi branding suatu
                  perusahaan. Dengan desain logo yang tepat, perusahaan dapat
                  membangun citra yang kuat dan membedakan diri dari pesaing,
                  menciptakan ikatan emosional dengan pelanggan, dan
                  meningkatkan kepercayaanperti warna, bentuk, dan tipografi
                  yang dapat menciptakan kesan yang mendalam pada audiens.
                  Sebuah logo yang berhasil tidak hanya memikat mata, tetapi
                  juga dapat menyampaikan pesan dan cerita perusahaan dengan
                  jelas. Dengan desain logo yang tepat, perusahaan dapat
                  membangun citra yang kuat dan membedakan diri dari pesaing,
                  menciptakan ikatan emosional dengan pelanggan, dan
                  meningkatkan kepercayaan merek.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <Link href="/blog/design/detail">
                        <i className="icon-04" /> Unity
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <Link href="/blog/design/detail">
                        <i className="icon-04" /> Balance
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <Link href="/blog/design/detail">
                        <i className="icon-04" /> Contrast{" "}
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <Link href="/blog/design/detail">
                        <i className="icon-04" /> Repetition
                      </Link>
                    </li>
                  </div>
                </div>
                <p>
                  Selain itu, konsistensi penggunaan logo juga menjadi faktor
                  kunci dalam membangun brand yang kokoh. Oleh karena itu,
                  sebuah logo yang efektif bukan hanya sekadar tanda pengenal
                  visual, tetapi juga merupakan investasi jangka panjang yang
                  dapat membantu meningkatkan nilai merek dan menciptakan
                  hubungan yang kokoh dengan pelanggango yang mudah diingat dan
                  mudah dikenali dapat membantu perusahaan menonjol di tengah
                  kebisingan informasi. Oleh karena itu, sebuah logo yang
                  efektif bukan hanya sekadar tanda pengenal visual, tetapi juga
                  merupakan investasi jangka panjang yang dapat membantu
                  meningkatkan nilai merek dan menciptakan hubungan yang kokoh
                  dengan pelanggan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page-title end*/}
      {/* pricing-section */}
      <section className="pricing__section see__pad p_relative">
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
                  <h4>Rp 1.500.000</h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>Logo 1 Pilihan</li>
                      <li>Revisi 2x Minor</li>
                      <li>2 - 4 Hari</li>
                      <li>File Master CDR / AI / EPS / PSD</li>
                      <li>Export JPG / PNG / PDF</li>
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
                  <h5>Plus</h5>
                  <h4>Rp 2.800.000</h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>Logo 2 Pilihan</li>
                      <li>Revisi 3x Minor</li>
                      <li>1 - 3 Hari</li>
                      <li>File Master CDR / AI / EPS/ PSD</li>
                      <li>Color Guide</li>
                      <li>Kartu Nama</li>
                      <li>Export JPG / PNG / PDF</li>
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
                  <h5>Premium</h5>
                  <h4>Rp 4.500.000</h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>Logo 4 Pilihan</li>
                      <li>Revisi 5x</li>
                      <li>1 - 7 Hari</li>
                      <li>File Master CDR / AI / EPS / PSD</li>
                      <li>Color Guide</li>
                      <li>Branding Guideline</li>
                      <li>Filosofi Logo</li>
                      <li>Kartu Nama</li>
                      <li>Amplop & Kop</li>
                      <li>Export JPG / PNG / PDF</li>
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
      </section>
      {/* pricing-section-end */}
      {/* service-contact */}
      <Contact />
      {/* service-contact-end */}
    </>
  );
}
