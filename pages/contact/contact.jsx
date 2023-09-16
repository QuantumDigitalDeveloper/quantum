import React from "react";

export default function contact() {
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
                <span> -</span>Contact{" "}
              </li>
            </ul>
            <h1 className="title">Contact</h1>
          </div>
        </div>
      </section>
      {/* page-title end*/}
      {/* contact-page */}
      <section className="contact__page p_relative see__pad">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-ms-12">
              <div className="contact__left">
                <figure>
                  <img src="/assets/images/resource/contact.jpg" alt="" />
                </figure>
                <h4>Contact Information</h4>
                <div className="contact__info">
                  <div className="contact__block">
                    <div className="icon">
                      <i className="icon-19" />
                    </div>
                    <div className="contact__text">
                      <a href="tell:3025550107">(302) 555-0107</a> <br />
                      <a href="tell:3025550107">(207) 555-0119</a>
                    </div>
                  </div>
                  <div className="contact__block">
                    <div className="icon two">
                      <i className="icon-20" />
                    </div>
                    <div className="contact__text">
                      <a href="mailto:willie.jennings@example.com">
                        willie.jennings@example.com
                      </a>{" "}
                      <br />
                      <a href="mailto:tranthuy.nute@gmail.com">
                        tranthuy.nute@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="contact__right">
                <div className="form__title">
                  <div className="title__data">
                    <div className="sub__title">
                      <h4>Contact Us</h4>
                    </div>
                    <div className="title">
                      <h2>Get a Free Quote</h2>
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
          </div>
        </div>
      </section>
      {/* contact-page end*/}
      {/* google-map */}
      <div className="google__map">
        <figure>
          <img src="/assets/images/resource/map.jpg" alt="" />
        </figure>
      </div>
      {/* google-map */}
    </>
  );
}
