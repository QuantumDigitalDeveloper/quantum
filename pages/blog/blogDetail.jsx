import React from "react";

export default function blogDetail() {
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
                <span> -</span>Blogs Details{" "}
              </li>
            </ul>
            <h1 className="title">Blogs Details</h1>
          </div>
        </div>
      </section>
      {/* page-title end*/}
      {/* page-title end*/}
      <div className="blog__details see__pad">
        <div className="auto-container">
          <div className="row">
            <div className="col-xl-8 col-lg-12 col-md-12">
              <div className="blog__details__content ">
                <div className="blog__image p_relative">
                  <img src="/assets/images/news/blog-details.jpg" alt="" />
                  <div className="post__date">
                    <ul>
                      <li>
                        {" "}
                        <i className="icon-15" />
                        26 July 2023
                      </li>
                      <li className="two" />
                      <li>
                        <i className="icon-09" /> Admin
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog__inner__box">
                  <h3 className="blog__title ">
                    4 Cybersecurity Takeaways from China’s Largest Data Breach
                  </h3>
                  <div className="blog__details__text ">
                    <p>
                      The applications of AR are vast and diverse. From
                      entertainment and gaming, where users can see virtual
                      characters in their surroundings, to education, where
                      complex subjects can be visualized and explained in an
                      immersive way,. Sed lobortis suscipit nibh, vulputate
                      euismod sapien sollicitudin eget. Donec vehicula facilisis
                      libero sit amet accumsan. Sed sed ante commodo, maximus mi
                      consectetur, suscipit mauris. Mauris vulputate viverra
                      risus facilisis consequat. Curabitur et lacinia leo.
                      Pellentesque fermentum ex quis maximus congue. Donec
                      vestibulum laoreet fermentum. Sed tincidunt augue et
                      mauris aliquam, faucibus tincidunt magna aliquet.
                      Vestibulum semper dapibus interdum. Nunc diam odio,
                      hendrerit quis dignissim vitae, bibendum vel dolor.
                      Phasellus nisl nunc, sollicitudin vulputate congue sed,
                      pulvinar at nunc. Maecenas ligula turpis, ultricies sit
                      amet fermentum et, sagittis sit amet nunc.
                    </p>
                    <p>
                      Sed nec tincidunt mi. Pellentesque finibus dui vel dolor
                      consectetur, ac luctus mi pulvinar. Donec odio nulla,
                      molestie vel cursus in, malesuada ac est. Aenean ut justo
                      vitae est tempus mollis. Fusce a odio nisi. Suspendisse ac
                      lacinia velit.
                    </p>
                    <ul>
                      <li>
                        {" "}
                        Rollout and expansion of 5G networks, enabling faster
                        data transfer, lower latency, and improved connectivity
                        for IoT devices.
                      </li>
                      <li>
                        Enhanced capabilities for real-time communication,
                        streaming, and remote operations.
                      </li>
                      <li>
                        Growth in IoT devices and applications across various
                        industries, from smart homes to industrial automation.
                      </li>
                      <li>
                        {" "}
                        Integration of IoT with AI, allowing devices to collect
                        and analyze data for better decision-making and
                        automation.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog__tags__box">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                      <div className="tags__left">
                        <h3>Tags:</h3>
                        <ul className="tags-list-1">
                          <li>
                            <a href="#">#ArtificialIntelligence,</a>
                          </li>
                          <li>
                            <a href="#">#MachineLearning,</a>
                          </li>
                          <li>
                            <a href="#">#DeepLearning,</a>
                          </li>
                          <li>
                            <a href="#">#NeuralNetworks</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog__comments__area">
                  <h3 className="comments__title">2 Comments</h3>
                  {/* box-area */}
                  <div className="comments__box">
                    <div className="image__box">
                      <img src="/assets/images/news/comments-1.png" alt="" />
                    </div>
                    <div className="comments__content">
                      <div className="upper">
                        <h4>Kristin Watson</h4>
                        <a href="#" className="reply-btn">
                          Reply
                        </a>
                      </div>
                      <div className="lower">
                        <p>
                          Mauris non dignissim purus, ac commodo diam. Donec sit
                          amet lacinia nulla. Aliquam quis purus in justo
                          pulvinar tempor. Aliquam tellus nulla,
                          sollicitudinsollicitudin.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* box-area */}
                  <div className="comments__box">
                    <div className="image__box">
                      <img src="/assets/images/news/comments-2.png" alt="" />
                    </div>
                    <div className="comments__content">
                      <div className="upper">
                        <h4>Courtney Henry</h4>
                        <a href="#" className="reply-btn">
                          Reply
                        </a>
                      </div>
                      <div className="lower">
                        <p>
                          Mauris non dignissim purus, ac commodo diam. Donec sit
                          amet lacinia nulla. Aliquam quis purus in justo
                          pulvinar tempor. Aliquam tellus nulla,
                          sollicitudinsollicitudin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments__form contact__section">
                  <h3 className="comments__title">Leave a Comment</h3>
                  <div className="form__inner">
                    <form className="default__form">
                      <div className="row">
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
                        <div className="ccol-xl-6 col-lg-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Message here ..."
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-xl-12 form-group message-btn btn-box">
                          <button
                            className="theme-btn theme-btn-one"
                            type="submit"
                            name="submit-form"
                          >
                            Submit Comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="sidebar__content__box">
                {/*Start Single Sidebar Box*/}
                <div className="single__sidebar__box">
                  <div className="single__sidebar__search__box">
                    <div className="sidebar__search__box p_relative">
                      <form className="search__form">
                        <input placeholder="Keyword Search" type="text" />
                        <button type="submit">
                          <i className="icon-18" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/*Start Single Sidebar Box*/}
                <div className="single__sidebar__box">
                  <div className="title">
                    <h3>Latest posts</h3>
                  </div>
                  <div className="sidebar__blog__post">
                    <ul className="blog__post">
                      <li>
                        <div className="inner">
                          <div className="img__box">
                            <img
                              src="/assets/images/news/sidebar-1.jpg"
                              alt="Awesome Image"
                            />
                          </div>
                          <div className="title__box">
                            <div className="date">
                              <i className="icon-15" />
                              26 July 2023
                            </div>
                            <h4>
                              <a href="#">
                                4 Cybersecurity Takeaways from China’s
                              </a>
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="img__box">
                            <img
                              src="/assets/images/news/sidebar-2.jpg"
                              alt="Awesome Image"
                            />
                          </div>
                          <div className="title__box">
                            <div className="date">
                              <i className="icon-15" />
                              26 July 2023
                            </div>
                            <h4>
                              <a href="#">
                                4 Cybersecurity Takeaways from China’s
                              </a>
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="img__box">
                            <img
                              src="/assets/images/news/sidebar-3.jpg"
                              alt="Awesome Image"
                            />
                          </div>
                          <div className="title__box">
                            <div className="date">
                              <i className="icon-15" />
                              26 July 2023
                            </div>
                            <h4>
                              <a href="#">
                                4 Cybersecurity Takeaways from China’s
                              </a>
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single__sidebar__box">
                  <div className="title">
                    <h3>Categories</h3>
                  </div>
                  <div className="sidebar-categories">
                    <ul className="sidebar-categories-box">
                      <li>
                        <a href="#">
                          <i className="icon-17" /> Internet Of Things
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-17" /> Artificial Intelligence
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-17" />
                          Machine Learning
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-17" />
                          Deep Learning
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-17" />
                          Neural Networks
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page-title end*/}
    </>
  );
}
