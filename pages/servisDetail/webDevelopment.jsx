import React from "react";
import Link from "next/link";
import Contact from "../contact/contactService";

export default function webDevelopment() {
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
                <span> -</span>Web Development{" "}
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
                      <Link href="/servisDetail/design">
                        Design <i className="icon-02" />
                      </Link>
                    </li>
                    <li className="active">
                      <Link href="/servisDetail/vector">
                        Vector Spesialis <i className="icon-02" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/servisDetail/video">
                        Video Editor <i className="icon-02" />
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
                  Bawa visi online Anda menjadi kenyataan bersama kami, tim
                  pengembang web yang berpengalaman bersama{" "}
                  <span>Quantum.</span>{" "}
                </h2>
                <p>
                  Pengembangan situs web adalah kunci sukses dalam merintis
                  keberadaan digital suatu bisnis atau proyek online. Dalam
                  dunia yang terus berkembang, keberadaan situs web yang baik
                  dan benar menjadi krusial untuk mencapai tujuan bisnis. Proses
                  pengembangan situs web yang efektif melibatkan pemahaman
                  mendalam terhadap kebutuhan pengguna, fokus pada antarmuka
                  pengguna yang responsif, dan penerapan standar-standar terkini
                  dalam pengkodean. Ketika pengembangan situs dilakukan dengan
                  baik, hal ini tidak hanya memastikan tampilan visual yang
                  menarik tetapi juga memastikan fungsionalitas yang optimal,
                  kecepatan akses yang baik, dan keterjangkauan pengguna dari
                  berbagai perangkat. Sebagai inti dari keberhasilan digital,
                  pengembangan situs web yang baik menciptakan panggung yang
                  solid untuk pertumbuhan dan keberlanjutan bisnis.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <Link href="/blog/webDev/htmlDetail">
                        <i className="icon-04" /> HTML (Hypertext Markup
                        Language)
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <Link href="/blog/webDev/cssDetail">
                        <i className="icon-04" /> CSS (Cascanding Style Sheets)
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <Link href="/blog/webDev/jsDetail">
                        <i className="icon-04" /> JavaScript{" "}
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <Link href="/blog/webDev/sscDetail">
                        <i className="icon-04" /> Server - Side Scripting and
                        Database
                      </Link>
                    </li>
                  </div>
                </div>
                <p>
                  Pentingnya pembaruan terus-menerus dalam teknologi web tidak
                  dapat diabaikan. Pengembang situs web yang berkualitas tinggi
                  harus terus memantau tren dan perkembangan baru dalam
                  industri. Dengan memahami konsep-konsep seperti pengoptimalan
                  mesin pencari (SEO), keamanan web, dan integrasi responsif,
                  pengembang dapat memastikan bahwa situs web yang mereka
                  hasilkan tidak hanya memenuhi kebutuhan saat ini tetapi juga
                  siap untuk menghadapi perubahan masa depan. Selain itu, fokus
                  pada pengalaman pengguna yang intuitif dan ramah pengguna
                  membantu membangun hubungan positif antara pengguna dan situs,
                  meningkatkan retensi, dan meningkatkan reputasi merek secara
                  keseluruhan. Dengan begitu, pengembangan situs web yang baik
                  dan benar memegang peran sentral dalam membentuk keberhasilan
                  online suatu entitas.
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
                  <h4>Rp 1.700.000</h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>Domain (.xyz / .my.id / .shop)</li>
                      <li>SSL (HTTPS)</li>
                      <li>Penyimpanan 700MB</li>
                      <li>Unlimited Bandwith</li>
                      <li>Maks Page 5</li>
                      <li>Free Design 1 Banner</li>
                      <li>Belum Termasuk PPN</li>
                      <li>DP 50%</li>
                      <li>.</li>
                      <li>.</li>
                      <li>.</li>
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
                  <h4>Rp 2.100.000</h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>Domain (.com / .id)</li>
                      <li>SSL (HTTPS)</li>
                      <li>Penyimpanan 1GB</li>
                      <li>Unlimited Bandwith</li>
                      <li>Maks Page 10</li>
                      <li>Free Design 3 Banner</li>
                      <li>Maks Revisi 2x</li>
                      <li>Hapus Tag Powered by Quantum</li>
                      <li>Belum Termasuk PPN</li>
                      <li>DP 50%</li>
                      <li>.</li>
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
                  <h5>Profesional</h5>
                  <h4>Rp 5.000.000</h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>Domain (.com / .id / .co.id / .net)</li>
                      <li>SSL (HTTPS)</li>
                      <li>Penyimpanan Unlimited</li>
                      <li>Unlimited Bandwith</li>
                      <li>Unlimited Page</li>
                      <li>Free Design 5 Banner</li>
                      <li>Maks Revisi 4x</li>
                      <li>Fitur Payment Gateway</li>
                      <li>Hapus Tag Powered by Quantum</li>
                      <li>Belum Termasuk PPN</li>
                      <li>DP 50%</li>
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
