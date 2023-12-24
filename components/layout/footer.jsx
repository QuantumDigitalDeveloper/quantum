import React from "react";
import Link from "next/link";

export default function footer() {
  return (
    <>
      {/* footer-one */}
      <footer className="main__footer">
        <div className="footer-top">
          <div className="auto-container">
            <div className="top-inner">
              <div className="left__top">
                <h3>Looking For best It business solution</h3>
              </div>
              <div className="right__top">
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
        <div className="footer__one">
          <div className="footer-widget-section">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div
                    className="footer-widget footer-logo-widget wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <figure className="footer-logo">
                      <a href="index.html">
                        <img src="/assets/images/new.png" alt="" />
                      </a>
                    </figure>
                    <div className="text">
                      <p>
                        Dengan kombinasi desain yang memukau, pengembangan web
                        yang canggih, dan strategi pemasaran digital yang
                        unggul, kami membantu bisnis Anda berkembang dan sukses.
                      </p>
                    </div>
                    <div className="btn-box">
                      <Link
                        href="/about"
                        className="theme-btn theme-btn-one"
                      >
                        <i className="icon-02" /> About Us
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div
                    className="footer-widget news-letter-widget ml_80 wow fadeInUp animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="widget-title">
                      <h4>Newletter</h4>
                    </div>
                    <div className="text">
                      <p>
                        Integrate with your existing systems, minimizing
                        disruption and maximizing productivity.
                      </p>
                    </div>
                    <div className="subscribe-inner">
                      <form
                        action="http://test.valorwide.com/datamatrix/contact.html"
                        method="post"
                        className="subscribe-form"
                      >
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your mail address *"
                            required=""
                          />
                          <div className="btn-box">
                            <button
                              className="theme-btn theme-btn-one"
                              type="submit"
                            >
                              <i className="icon-02" /> GO
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div
                    className="footer-widget office-widget wow fadeInUp animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="widget-title">
                      <h4>Official info:</h4>
                    </div>
                    <div className="widget-content">
                      <div className="text">
                        <p>
                          Jl. Kapuk Kebon Jahe Blok A No. 30 DKI Jakarta, 11720
                        </p>
                      </div>
                      <a href="tel:08558833691">(+62) 855-8833-691 </a>
                      <br />
                      <a href="mailto:customer.service@quantech.id">
                        customer.service@quantech.id
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column pr-0">
                  <div
                    className="footer-widget gallery-widget wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="widget-title">
                      <h4>Gallery</h4>
                    </div>
                    <div className="widget_content">
                      <ul className="instagram_list clearfix">
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/assets/images/resource/gallery-01.png"
                              >
                                <img
                                  src="/assets/images/resource/gallery-01.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/assets/images/resource/gallery-02.png"
                              >
                                <img
                                  src="/assets/images/resource/gallery-02.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/assets/images/resource/gallery-03.png"
                              >
                                <img
                                  src="/assets/images/resource/gallery-03.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/assets/images/resource/gallery-04.png"
                              >
                                <img
                                  src="/assets/images/resource/gallery-04.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/assets/images/resource/gallery-05.png"
                              >
                                <img
                                  src="/assets/images/resource/gallery-05.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/assets/images/resource/gallery-05.png"
                              >
                                <img
                                  src="/assets/images/resource/gallery-05.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/assets/images/resource/gallery-05.png"
                              >
                                <img
                                  src="/assets/images/resource/gallery-05.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner__box">
                            <div className="image__box">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/assets/images/resource/gallery-06.png"
                              >
                                <img
                                  src="/assets/images/resource/gallery-06.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="bottom-inner">
                <div className="copyright">
                  <p>
                    © 2023 <a href="index.html">Quantum.</a> All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer-one end */}
    </>
  );
}
