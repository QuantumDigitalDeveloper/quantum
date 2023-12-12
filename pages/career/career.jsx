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
            <div className="col-lg-5 col-md-12">
              <div className="about__block p_relative">
                <figure
                  className="wow zoomIn animated"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <img src="/assets/images/resource/video.jpg" alt="" />
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
                  <h4>We Are Hiring </h4>
                </div>
                <div className="title two">
                  <h2>
                    Freelancer <span>Video Editor</span>.
                  </h2>
                </div>
                <div className="texts">
                  {/* <p>
                    <b>JOB DESCRIPTION</b>
                  </p>
                  <p>
                    • Mengedit potongan video sesuai dengan requirement yang
                    diberikan (termasuk memasukkan musik, dialog, graphics dan
                    effects serta stop motion)
                  </p>
                  <p>
                    • Memastikan urutan video secara logika dan memastikan hasil
                    editan video dapat berjalan dengan lancar{" "}
                  </p>
                  <p>
                    • Mendesain, mengkonsepkan dan mengeksekusi brief dari
                    product team atau project manager ke dalam bentuk video{" "}
                  </p>
                  <p>
                    • Membuat final version video kompatibel sesuai dengan
                    platform yang dibutuhkan: youtube, IG, IG Stories dan ads
                  </p>
                  <p>
                    • Mencari, memberikan ide kreatif dan masukkan dalam
                    pengembangan video
                  </p>
                  <p>
                    • Mempersiapkan dan membuat materi konten video untuk
                    saluran media sosial (misalnya Youtube Shorts, Reels,
                    TikTok)
                  </p>
                  <br /> */}
                  <p>
                    <b>REQUIREMENT</b>
                  </p>
                  <p>
                    • Diutamakan kemampuan dalam penggunaan Aplikasi berbasis
                    vidio seperti After Effect, Adobe Premiere, Da Vinci
                  </p>
                  <p>
                    • Proaktif dan berinisiatif tinggi dalam memberikan ide dan
                    mengeksekusi pekerjaan yang diberikan
                  </p>
                  <p>• Haus akan improvement akan kualitas...</p>
                  <br />
                  <p>
                    <b>Kirimkan CV lengkap dan Portofolio anda segera</b>
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
                  Freelancer <span>Vector Art Spesialis</span>.
                </h2>
              </div>
              <div className="texts">
                <p>
                  <b>REQUIREMENT</b>
                </p>
                {/* <p>• Portofolio Berkualitas</p> */}
                <p>
                  • Keahlian dalam Software Desain: Mahir menggunakan perangkat
                  lunak desain vektor seperti Adobe Illustrator, CorelDRAW, atau
                  Inkscape.
                </p>
                <p>
                  • Familiar dengan teknik-teknik desain vektor, termasuk
                  pathfinding, gradient, dan penggunaan alat-alat lainnya.
                </p>
                <p>• Kreativitas dan Inovasi</p>
                <p>• Ketepatan Waktu</p>
                {/* <p>• Pengetahuan tentang Hak Cipta dan Lisensi</p> */}
                {/* <p>• Pemahaman tentang Branding</p>
                <p>• Kemampuan Desain Multiplatform</p> */}
                {/* <p>• Pemahaman tentang Trend Desain Terkini</p> */}
                <p>• Berinisiatif tinggi dalam memberikan ide</p>
                <p>• Haus akan improvement akan kualitas...</p>
                <br />
                <p>
                  <b>Kirimkan CV lengkap dan Portofolio anda segera</b>
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
          <div className="col-lg-5 col-md-12">
            <div className="about__block p_relative">
              <figure
                className="wow zoomIn animated"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <img src="/assets/images/resource/vector.jpg" alt="" />
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
          {/* <div className="col-lg-4 col-md-12 ">
            <div className="banner__right p_relative">
              <div className="image__one">
                <figure
                  className="image-box wow slideInUp animated animated animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  style={{ visibility: "visible" }}
                >
                  <img src="/assets/images/resource/vector.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
