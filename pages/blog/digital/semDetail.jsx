import Link from "next/link";
import React from "react";

export default function semDetail() {
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
            <h1 className="title">SEM (Search Engine Marketing)</h1>
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
                    SEM (Search Engine Marketing)
                  </h3>
                  <div className="blog__details__text ">
                    <p>
                      Pemasaran mesin pencari (Inggris: Search Engine Marketing
                      disingkat SEM) adalah praktik pemasaran bisnis menggunakan
                      iklan berbayar yang muncul di halaman hasil mesin pencari
                      (atau SERP/Search Engine Result Page). Pengiklan menawar
                      kata kunci yang mungkin dimasukkan oleh pengguna layanan
                      seperti Google dan Bing saat mencari produk atau layanan
                      tertentu, yang memberi pengiklan peluang agar iklan mereka
                      muncul di samping hasil untuk kueri penelusuran tersebut.
                      Pemasaran mesin pencari dapat digunakan bersamaan dengan
                      optimisasi mesin pencari (SEO), yang menyesuaikan atau
                      menulis ulang konten situs web dan arsitektur situs untuk
                      mencapai peringkat yang lebih tinggi di halaman hasil
                      mesin pencari untuk meningkatkan daftar bayar per klik
                      (PPC) dan meningkatkan Call to action (CTA) di situs web.
                    </p>
                    <p>
                      Mesin pencari menggunakan algoritma yang rumit untuk
                      memastikan hasil yang paling relevan. Dalam hasil
                      pencarian, iklan bersponsor akan muncul di bagian atas dan
                      di samping halaman hasil mesin pencari untuk mendapatkan
                      lebih banyak visibilitas dan keunggulan daripada hasil
                      organik.
                    </p>
                    <p>
                      Katakanlah pelanggan mencari produk atau layanan
                      menggunakan mesin pencari dengan memasukkan kata kunci. Di
                      laman hasil pencarian, berbagai iklan yang kata kuncinya
                      cocok dengan kata kunci akan muncul di lokasi yang
                      menonjol pada halaman bersama dengan daftar pencarian lain
                      yang cocok dengan kata kunci. Iklan biasanya akan sangat
                      relevan dengan pencarian spesifik sehingga kemungkinan
                      akan mendapatkan klik.
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
                            <a href="#">#sem</a>
                          </li>
                          <li>
                            <a href="#">#semtips</a>
                          </li>

                          <li>
                            <a href="#">#digitalmarketing</a>
                          </li>
                          <li>
                            <a href="#">#paidsearch</a>
                          </li>
                          <li>
                            <a href="#">#ppc</a>
                          </li>
                          <li>
                            <a href="#">#keywordresearch</a>
                          </li>
                          <li>
                            <a href="#">#adcopy</a>
                          </li>
                          <li>
                            <a href="#">#bidstrategy</a>
                          </li>
                          <li>
                            <a href="#">#accountmanagement</a>
                          </li>
                          <li>
                            <a href="#">#searchenginemarketing</a>
                          </li>
                          <li>
                            <a href="#">#googleads</a>
                          </li>
                          <li>
                            <a href="#">#bingads</a>
                          </li>
                          <li>
                            <a href="#">#facebookads</a>
                          </li>
                          <li>
                            <a href="#">#linkedinads</a>
                          </li>
                          <li>
                            <a href="#">#youtubeads</a>
                          </li>
                          <li>
                            <a href="#">#programmaticadvertising</a>
                          </li>
                          <li>
                            <a href="#">#remarketing</a>
                          </li>
                          <li>
                            <a href="#">#conversionrateoptimization</a>
                          </li>
                          <li>
                            <a href="#">#semaudit</a>
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
                              <Link href="/blog/digital/seoDetail">
                                SEO (Search Engine Optimization)
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
