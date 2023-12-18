import React from "react";
import Link from "next/link";
import Contact from "../contact/contactService";

export default function design() {
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
                <span> -</span>Social Media Design{" "}
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
                      <Link href="/servisDetail/digitalMarketing">
                        Digital Marketing <i className="icon-02" />
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
                  Membangun Citra Profesional melalui Design Media Sosial yang{" "}
                  <span>Efektif.</span>{" "}
                </h2>
                <p>
                  Penggunaan grafis, foto, dan video yang menarik dapat
                  memberikan nilai tambah pada konten, menciptakan dampak yang
                  lebih besar, dan membantu konten tersebar lebihuh dedikasifis,
                  foto, dan video yang menarik dapat memberikan nilai tambah
                  pada konten, menciptakan dampak yang lebih besar, dan membantu
                  konten tersebar lebihuh dedikasienarik dapat memberikan nilai
                  tambah pada konten, menciptakan dampak yang lebih besar, dan
                  membantu konten tersebar lebihuh dedikasiosial dapat menyentuh
                  hati mereka secara efektif. Penggunaan grafis, foto, dan video
                  yang menarik dapat memberikan nilai tambah pada konten,
                  menciptakan dampak yang lebih besar, dan membantu konten
                  tersebar lebihuh dedikasi dan profesionalisme.
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
                  Selain itu, desain media sosial yang profesional juga mencakup
                  strategi konten yang matang. Penggunmemperhatikan aspek-aspek
                  ini, desain media sosial tidak hanya menjadi alat visual,
                  tetapi juga sarana komunikasi yang kuat untuk membentuk citra
                  yang benar-benar profesional dan meyakinkanaspek ini, desain
                  media sosial tidak hanya menjadi alat visual, tetapi juga
                  sarana komunikasi yang kuat untuk membentuk citra yang
                  benar-benar profesional dan meyakinkan sarana komunikasi yang
                  kuat untuk membentuk citra yang benar-benar profesional dan
                  meyakinkanaspek ini, desain media sosial tidak hanya menjadi
                  alat visual, tetapi juga sarana komunikasi yang kuat untuk
                  membentuk citra yang benar-benar profesional dan meyakinkan.
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
                  <h4>Rp 850.000</h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>Jumlah Design 12</li>
                      <li>Material dari Client</li>
                      <li>9 Design Feed/Post</li>
                      <li>3 IG Stories</li>
                      <li>Revisi Design 1x Minor</li>
                      <li>File diterima PNG/JPG</li>
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
                  <h4>Rp 1.700.000</h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>Jumlah Design 23</li>
                      <li>Designer Middle</li>
                      <li>Material dari Client</li>
                      <li>15 Design Feed/Post</li>
                      <li>8 IG Stories</li>
                      <li>Revisi Design 3x Minor</li>
                      <li>File diterima PNG/JPG</li>
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
                  <h4>Rp 2.600.000</h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>Jumlah Design 30</li>
                      <li>Designer Middle</li>
                      <li>Material dari Client</li>
                      <li>15 Design Feed/Post</li>
                      <li>5/5 Post Caraousel</li>
                      <li>5 IG Stories</li>
                      <li>Revisi Design 5x Minor</li>
                      <li>File diterima PNG/JPG</li>
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
