import Link from "next/link";
import React from "react";

export default function seoDetail() {
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
            <h1 className="title">SEO (Search Engine Optimization)</h1>
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
                        30 October 2023
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
                    SEO (Search Engine Optimization)
                  </h3>
                  <div className="blog__details__text ">
                    <p>
                      Optimisasi mesin pencari atau search engine optimization,
                      biasa disingkat SEO adalah serangkaian proses yang
                      dilakukan secara sistematis yang bertujuan untuk
                      meningkatkan volume dan kualitas trafik kunjungan melalui
                      mesin pencari menuju situs web tertentu dengan
                      memanfaatkan mekanisme kerja atau algoritma mesin pencari
                      tersebut. Mekanisme mesin pencari yang dimaksud adalah
                      crawling, indexing, dan ranking. Tujuan dari SEO adalah
                      menempatkan sebuah situs web pada posisi teratas, atau
                      setidaknya halaman pertama hasil pencarian berdasarkan
                      kata kunci tertentu yang ditargetkan. Secara logis, situs
                      web yang menempati posisi teratas pada hasil pencarian
                      memiliki peluang lebih besar untuk mendapatkan pengunjung.
                    </p>
                    <p>
                      Sejalan dengan makin berkembangnya pemanfaatan jaringan
                      internet sebagai media bisnis, kebutuhan atas SEO juga
                      semakin meningkat. Berada pada posisi teratas hasil
                      pencarian akan meningkatkan peluang sebuah perusahaan
                      pemasaran berbasis web untuk mendapatkan pelanggan baru.
                      Peluang ini dimanfaatkan sejumlah pihak untuk menawarkan
                      jasa optimisasi mesin pencari bagi perusahaan-perusahaan
                      yang memiliki basis usaha di internet.
                    </p>
                  </div>
                </div>
                <div className="blog__tags__box">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                      <div className="tags__left">
                        <h3>Tags:</h3>
                        <ul className="tags-list-1">
                          <li>
                            <a href="#">#seo</a>
                          </li>
                          <li>
                            <a href="#">#seotools</a>
                          </li>
                          <li>
                            <a href="#">#digitalmarketing</a>
                          </li>
                          <li>
                            <a href="#">#contentmarketing</a>
                          </li>
                          <li>
                            <a href="#">#onpageseo</a>
                          </li>
                          <li>
                            <a href="#">#offpageseo</a>
                          </li>
                          <li>
                            <a href="#">#technicalseo</a>
                          </li>
                          <li>
                            <a href="#">#localseo</a>
                          </li>
                          <li>
                            <a href="#">#seotips</a>
                          </li>
                          <li>
                            <a href="#">#searchengineoptimization</a>
                          </li>

                          <li>
                            <a href="#">#keywordresearch</a>
                          </li>
                          <li>
                            <a href="#">#linkbuilding</a>
                          </li>
                          <li>
                            <a href="#">#sitemap</a>
                          </li>
                          <li>
                            <a href="#">#crawlability</a>
                          </li>
                          <li>
                            <a href="#">#pagespeed</a>
                          </li>
                          <li>
                            <a href="#">#mobileseo</a>
                          </li>
                          <li>
                            <a href="#">#voicesearchvoicesearch</a>
                          </li>
                          <li>
                            <a href="#">#semanticseo</a>
                          </li>
                          <li>
                            <a href="#">#seoaudit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="blog__comments__area">
                  <h3 className="comments__title">2 Comments</h3>
                  
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
                </div> */}
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
                              30 October 2023
                            </div>
                            <h4>
                              <Link href="/blog/digital/semDetail">
                                SEM (Search Engine Marketing)
                              </Link>
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
                              30 October 2023
                            </div>
                            <h4>
                              <Link href="/blog/digital/socialDetail">
                                Social Media Marketing
                              </Link>
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
                              30 October 2023
                            </div>
                            <h4>
                              <Link href="/blog/digital/contentDetail">
                                Content Marketing
                              </Link>
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
                        <Link href="/servisDetail/webDevelopment">
                          <i className="icon-17" /> Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/servisDetail/design">
                          <i className="icon-17" /> Design
                        </Link>
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
