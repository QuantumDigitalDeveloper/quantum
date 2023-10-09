import React from "react";
import Link from "next/link";

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
                      <a href="#">
                        <i className="icon-04" /> Human Resources
                      </a>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="icon-04" /> Web Development
                      </a>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="icon-04" /> Content Writing{" "}
                      </a>
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="icon-04" /> IT Support
                      </a>
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
      {/* service-contact */}
      <div className="service__contact see__pad p_relative">
        <div className="auto-container">
          <div className="service__contact__block">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="service__form__data">
                  <div className="form__title">
                    <div className="title__data">
                      <div className="sub__title">
                        <h4>Contact Us</h4>
                      </div>
                      <div className="title">
                        <h2>Send message</h2>
                      </div>
                    </div>
                  </div>
                  <div className="form-inner">
                    <form
                      method="post"
                      action="http://test.valorwide.com/datamatrix/contact.php"
                      className="default-form"
                    >
                      <div className="row clearfix">
                        <div className="col-xl-6 form-group">
                          <input
                            type="name"
                            name="name"
                            placeholder="Your Name *"
                            required=""
                          />
                        </div>
                        <div className="col-xl-6 col-lg-12 form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email *"
                            required=""
                          />
                        </div>
                        <div className="col-xl-6 col-lg-12 form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Your Subject "
                            required=""
                          />
                        </div>
                        <div className="col-xl-6 col-lg-12 form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone "
                            required=""
                          />
                        </div>
                        <div className="ccol-xl-6 col-lg-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-xl-12 form-group message-btn btn-box">
                          <button
                            className="theme-btn theme-btn-one"
                            type="submit"
                            name="submit-form"
                          >
                            Send your Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="service__contact__img">
                  <figure>
                    <img src="/assets/images/resource/man.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service-contact-end */}
    </>
  );
}
