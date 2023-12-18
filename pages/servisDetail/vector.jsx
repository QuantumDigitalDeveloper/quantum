import React from "react";
import Link from "next/link";
import Contact from "../contact/contactService";

export default function seoMarketing() {
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
                <span> -</span>Vector Spesialis{" "}
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
                      <Link href="/servisDetail/video">
                        Video Editor <i className="icon-02" />
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
                  Kami adalah ahli dalam vektorisasi - memberikan gambar Anda
                  sentuhan profesional dan tampilan yang tajam bersama{" "}
                  <span>Quantum.</span>{" "}
                </h2>
                <p>
                  Seorang spesialis vector memegang peran penting dalam dunia
                  desain, membawa elemen-elemen visual menjadi hidup dengan
                  kejelasan dan presisi. Dalam dunia yang dipenuhi dengan
                  keberagaman desain grafis, vektor menjadi fondasi yang
                  memungkinkan pembuatan gambar dan ilustrasi yang dapat
                  disesuaikan tanpa kehilangan kualitas. Spesialis vector tidak
                  hanya memahami teknik penggunaan perangkat lunak desain vektor
                  seperti Adobe Illustrator, CorelDRAW, atau Inkscape, tetapi
                  juga memiliki mata yang tajam untuk proporsi, warna, dan
                  detail. Kemampuan untuk mengubah konsep abstrak menjadi bentuk
                  visual yang tajam dan fleksibel adalah keahlian kunci yang
                  dimiliki oleh seorang spesialis vector, yang mendefinisikan
                  keunggulan desain yang terlihat di berbagai media, dari logo
                  hingga ilustrasi kompleks.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="icon-04" /> Proficiency in Vector
                      </a>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="icon-04" /> Understanding of Illustration
                      </a>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="icon-04" /> Creativity and Imagination{" "}
                      </a>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="icon-04" /> Understanding of The Target
                        Audience
                      </a>
                    </li>
                  </div>
                </div>
                <p>
                  Keberhasilan seorang spesialis vector terletak pada
                  kemampuannya untuk menciptakan keseimbangan antara estetika
                  dan fungsionalitas. Dengan menggunakan vektor, mereka dapat
                  menghasilkan gambar yang dapat disesuaikan tanpa kehilangan
                  kualitas, memungkinkan adaptasi untuk berbagai ukuran dan
                  platform. Kemampuan untuk mengoptimalkan grafis agar dapat
                  digunakan pada berbagai media, dari cetak hingga web,
                  menjadikan seorang spesialis vector sebagai elemen tak
                  tergantikan dalam industri desain. Dari perusahaan hingga
                  seniman independen, kehadiran spesialis vector tidak hanya
                  menjamin visual yang menawan tetapi juga memberikan solusi
                  desain yang efisien dan serbaguna, memainkan peran utama dalam
                  menciptakan kesan yang tak terlupakan di mata dan pikiran
                  audiens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page-title end*/}
      {/* pride-section */}
      <div className="pride__section p_relative see__pad">
        <div
          className="pride__layer"
          style={{ backgroundImage: "url(/assets/images/resource/bg-04.jpg)" }}
        />
        <div className="auto-container">
          <div className="pride__block">
            <figure style={{ padding: "20px 0" }}>
              <img src="/assets/images/Quantumsedang.png" alt="" />
            </figure>
            <h2>Daftar Harga Design Vector</h2>
            <h2 style={{ color: "#f6ec4f" }}>Mulai dari Rp 350.000</h2>
          </div>
          <div
            className="col-xl-12 form-group message-btn btn-box justify-content-center"
            style={{ padding: "20px 0" }}
          >
            <a
              href="https://wa.me/628558833691"
              className="theme-btn theme-btn-one"
              type="button"
              name="submit-form"
            >
              WhatsApp
            </a>
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
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="price__content p_relative">
                <div className="price__data">
                  <h5>Basic</h5>
                  <h4>Rp 350.000</h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul>
                      <li>1 Opsi</li>
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
      {/* service-contact */}
      <Contact />
      {/* service-contact-end */}
    </>
  );
}
