import React, { useRef } from "react";
import { useRouter } from "next/router";

// export default function career() {
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
                      ref={formRef}
                      //   method="post"
                      //   action="http://test.valorwide.com/datamatrix/contact.php"
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
    </>
  );
};
export default Contact;
