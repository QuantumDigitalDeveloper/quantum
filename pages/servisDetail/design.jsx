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
                <span> -</span>Design{" "}
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
                  Tingkatkan merek Anda dengan desain yang menginspirasi bersama{" "}
                  <span>Quantum.</span>{" "}
                </h2>
                <p>
                  The applications of AR are vast and diverse. From
                  entertainment and gaming, where users can see virtual
                  characters in their surroundings, to education, where complex
                  subjects can be visualized and explained in an immersive way,.
                  We understand that every business has unique needs. Our
                  technology solutions are tailored to match your specific
                  requirements, ensuring optimal performance and efficiency. Our
                  dedicated team of technology professionals comprises
                  experienced engineers, developers, and researchers who are
                  passionate about pushing the boundaries of technology. We
                  understand that every business has unique needs. Our
                  technology solutions are tailored to match your specific
                  requirements, ensuring optimal performance and efficiency.
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
                  The applications of AR are vast and diverse. From
                  entertainment and gaming, where users can see virtual
                  characters in their surroundings, to education, where complex
                  subjects can be visualized and explained in an immersive way,.
                  We understand that every business has unique needs. Our
                  technology solutions are tailored to match your specific
                  requirements, ensuring optimal performance and efficiency.
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
                  <h4>
                    <span>Rp </span>0<span>,-</span>
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
                    <span>Rp </span>0<span>,-</span>
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
                    <span>Rp </span>0<span>,-</span>
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
      </section>
      {/* pricing-section-end */}
      {/* service-contact */}
      <Contact />
      {/* service-contact-end */}
    </>
  );
}
