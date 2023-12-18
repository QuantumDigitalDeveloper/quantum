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
                <span> -</span>Video Editor{" "}
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
                  Tingkatkan kualitas video Anda dengan jasa video editing
                  profesional bersama <span>Quantum.</span>{" "}
                </h2>
                <p>
                  Dalam dunia konten digital yang terus berkembang, video
                  editing telah menjadi seni yang sangat diperlukan untuk
                  menarik perhatian dan memikat audiens. Seorang video editor
                  yang mahir tidak hanya menggabungkan potongan gambar dan klip,
                  tetapi juga mampu menciptakan narasi yang kuat melalui
                  penggunaan efek visual dan suara. Dengan memahami ritme, alur
                  cerita, dan preferensi audiens, seorang video editor dapat
                  menciptakan karya yang tidak hanya menarik tapi juga memiliki
                  daya tarik komersial. Pemilihan musik yang pas, penggunaan
                  transisi yang mulus, dan penyuntingan yang presisi adalah
                  elemen-elemen yang mendefinisikan sebuah video yang mampu
                  menjual ide atau produk dengan keindahan visual yang luar
                  biasa.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="icon-04" /> Footage Selection
                      </a>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="icon-04" /> Cutting And Arranging
                      </a>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="icon-04" /> Sound And Music Editing{" "}
                      </a>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="icon-04" /> Visual Effects And Graphics
                      </a>
                    </li>
                  </div>
                </div>
                <p>
                  Kunci utama dalam menciptakan video yang menjual adalah
                  kreativitas dan inovasi. Seorang video editor yang ingin
                  menonjol harus berani mencoba teknik-teknik baru dan
                  eksperimental dalam penyuntingan mereka. Selain itu, paham
                  akan tren visual dan gaya penyuntingan yang sedang berkembang
                  dapat membantu menciptakan video yang relevan dan mengikuti
                  perkembangan pasar. Keahlian dalam penggunaan software editing
                  terkini juga sangat penting untuk memberikan sentuhan
                  profesional pada setiap proyek. Dengan menggabungkan keahlian
                  teknis dan imajinasi kreatif, seorang video editor dapat
                  menciptakan karya yang tidak hanya memikat hati audiens tetapi
                  juga memenuhi tujuan pemasaran dengan membawa pesan atau
                  produk ke tingkat yang lebih tinggi.
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
            <h2>Daftar Harga Editing Video</h2>
            <h2 style={{ color: "#f6ec4f" }}>Mulai dari Rp 500.000</h2>
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
                  <h4>Rp 500.000</h4>
                </div>
                <div className="price__block">
                  <div className="price__list">
                    <ul><li>1 Opsi</li></ul>
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
