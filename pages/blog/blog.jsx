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
                      <Link href="/blog/design/detail">
                        <img src="/assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          30 October 2023
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
                      <Link href="/blog/design/detail">
                        11 Prinsip Desain seorang Designer
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/design/detail"
                        className="theme__btn__two"
                      >
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
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/webDev/htmlDetail">
                        <img src="/assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          30 October 2023
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
                      <Link href="/blog/webDev/htmlDetail">
                        HTML (Hypertext Markup Language)
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/webDev/htmlDetail"
                        className="theme__btn__two"
                      >
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
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/webDev/cssDetail">
                        <img src="/assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          30 October 2023
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
                      <Link href="/blog/webDev/cssDetail">
                        CSS (Cascanding Style Sheets)
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/webDev/cssDetail"
                        className="theme__btn__two"
                      >
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
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/webDev/jsDetail">
                        <img src="/assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          30 October 2023
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
                      <Link href="/blog/webDev/jsDetail">JavaScript</Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/webDev/jsDetail"
                        className="theme__btn__two"
                      >
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
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/webDev/sscDetail">
                        <img src="/assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          30 October 2023
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
                      <Link href="/blog/webDev/sscDetail">
                        Server - Side Scripting and Database
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/webDev/sscDetail"
                        className="theme__btn__two"
                      >
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
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/digital/seoDetail">
                        <img src="/assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          30 October 2023
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
                      <Link href="/blog/digital/seoDetail">
                        SEO (Search Engine Optimization)
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/digital/seoDetail"
                        className="theme__btn__two"
                      >
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
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/digital/semDetail">
                        <img src="/assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          30 October 2023
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
                      <Link href="/blog/digital/semDetail">
                        SEM (Search Engine Marketing)
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/digital/semDetail"
                        className="theme__btn__two"
                      >
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
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/digital/socialDetail">
                        <img src="/assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          30 October 2023
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
                      <Link href="/blog/digital/socialDetail">
                        Social Media Marketing
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/digital/socialDetail"
                        className="theme__btn__two"
                      >
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
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ visibility: "visible" }}
              >
                <div className="inner-box p_relative">
                  <div className="image-box p_relative d_block">
                    <figure className="image p_relative d_block">
                      <Link href="/blog/digital/contentDetail">
                        <img src="/assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="post__date">
                      <ul>
                        <li>
                          {" "}
                          <i className="icon-15" />
                          30 October 2023
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
                      <Link href="/blog/digital/contentDetail">
                        Content Marketing
                      </Link>
                    </h4>
                    <div className="btn__box__two">
                      <Link
                        href="/blog/digital/contentDetail"
                        className="theme__btn__two"
                      >
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
