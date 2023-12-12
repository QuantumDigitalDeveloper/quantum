import React, { useRef } from "react";
import { useRouter } from "next/router";

// export default function contact() {
const Contact = () => {
  const router = useRouter();
  const formRef = useRef(null);

  const handleSubmit = async () => {
    // Ensure formRef.current is an HTMLFormElement
    if (formRef.current instanceof HTMLFormElement) {
      // Extract form data
      const formData = new FormData(formRef.current);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const phone = formData.get("phone");
      const message = formData.get("message");

      // Construct your WhatsApp link with the form data
      const whatsappLink = `https://wa.me/628558833691?text=Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0APhone: ${phone}%0AMessage: ${message}`;

      // Redirect to WhatsApp
      window.location.href = whatsappLink;
    } else {
      console.error("formRef.current is not an HTMLFormElement");
    }
  };

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
                      <a href="tell:08558833691">(+62) 855-8833-691</a>
                    </div>
                  </div>
                  <div className="contact__block">
                    <div className="icon two">
                      <i className="icon-20" />
                    </div>
                    <div className="contact__text">
                      <a href="mailto:quantumdigitaldeveloper@gmail.com">
                        quantumdigitaldeveloper@gmail.com
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
                    ref={formRef}
                    // method="post"
                    // action="http://test.valorwide.com/datamatrix/contact.php"
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
                          type="button"
                          onClick={handleSubmit}
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
      {/* <div className="google__map">
        <figure>
          <img src="/assets/images/resource/map.jpg" alt="" />
        </figure>
      </div> */}
      {/* google-map */}
    </>
  );
};
// }
export default Contact;
