import React from "react";
import Link from "next/link";

export default function blog() {
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
                <Link href="/#">Home </Link>
              </li>
              <li>
                {" "}
                <span> -</span>Blogs{" "}
              </li>
            </ul>
            <h1 className="title">Blogs</h1>
          </div>
        </div>
      </section>
      {/* page-title end*/}
      {/* blog-page */}
      <div className="blog__page p_relative see__pad">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/blogDetail">
                        <img src="/assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
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
                  <div className="lower___content p_relative">
                    <h4>
                      <Link href="/blog/blogDetail">
                        4 Cybersecurity Takeaways from China’s Largest Data
                        Breach
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link href="/blog/blogDetail" className="theme__btn__two">
                        <i className="icon-02" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/blogDetail">
                        <img src="/assets/images/news/news-2.jpg" alt="" />
                      </Link>
                    </figure>
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
                  <div className="lower___content p_relative">
                    <h4>
                      <Link href="/blog/blogDetail">
                        4 Cybersecurity Takeaways from China’s Largest Data
                        Breach
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link href="/blog/blogDetail" className="theme__btn__two">
                        <i className="icon-02" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/blogDetail">
                        <img src="/assets/images/news/news-3.jpg" alt="" />
                      </Link>
                    </figure>
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
                  <div className="lower___content p_relative">
                    <h4>
                      <Link href="/blog/blogDetail">
                        4 Cybersecurity Takeaways from China’s Largest Data
                        Breach
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link href="/blog/blogDetail" className="theme__btn__two">
                        <i className="icon-02" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/blogDetail">
                        <img src="/assets/images/news/news-4.jpg" alt="" />
                      </Link>
                    </figure>
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
                  <div className="lower___content p_relative">
                    <h4>
                      <Link href="/blog/blogDetail">
                        4 Cybersecurity Takeaways from China’s Largest Data
                        Breach
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link href="/blog/blogDetail" className="theme__btn__two">
                        <i className="icon-02" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/blogDetail">
                        <img src="/assets/images/news/news-5.jpg" alt="" />
                      </Link>
                    </figure>
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
                  <div className="lower___content p_relative">
                    <h4>
                      <Link href="/blog/blogDetail">
                        4 Cybersecurity Takeaways from China’s Largest Data
                        Breach
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link href="/blog/blogDetail" className="theme__btn__two">
                        <i className="icon-02" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news__block">
              <div
                className="news___block wow slideInUp animated animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/blogDetail">
                        <img src="/assets/images/news/news-6.jpg" alt="" />
                      </Link>
                    </figure>
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
                  <div className="lower___content p_relative">
                    <h4>
                      <Link href="/blog/blogDetail">
                        4 Cybersecurity Takeaways from China’s Largest Data
                        Breach
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link href="/blog/blogDetail" className="theme__btn__two">
                        <i className="icon-02" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog-page end*/}
    </>
  );
}
