import Link from "next/link";
import React from "react";

export default function jsDetail() {
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
            <h1 className="title">JavaScript</h1>
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
                  <h3 className="blog__title ">JavaScript</h3>
                  <div className="blog__details__text ">
                    <p>
                      JavaScript (/ˈdʒɑːvəˌskrɪpt/) (disingkat JS) adalah suatu
                      bahasa pemrograman tingkat tinggi dan dinamis. JavaScript
                      populer di internet dan dapat bekerja di sebagian besar
                      penjelajah web populer seperti Google Chrome, Internet
                      Explorer (IE), Mozilla Firefox, Netscape dan Opera. Kode
                      JavaScript dapat disisipkan dalam halaman web menggunakan
                      tag script.JavaScript merupakan salah satu teknologi inti
                      World Wide Web selain HTML dan CSS. JavaScript membantu
                      membuat halaman web interaktif dan merupakan bagian
                      aplikasi web yang esensial.
                    </p>
                    <p>
                      Awalnya hanya diimplementasi sebagai client-side dalam
                      penjelajah web, kini engine JavaScript disisipkan ke dalam
                      perangkat lunak lain seperti dalam server-side dalam
                      server web dan basis data, dalam program non web seperti
                      perangkat lunak pengolah kata dan pembaca PDF, dan sebagai
                      runtime environment yang memungkinkan penggunaan
                      JavaScript untuk membuat aplikasi desktop maupun mobile.
                      JavaScript adalah merek dagang yang dikeluarkan dari
                      Oracle Corporation di Amerika Serikat.
                    </p>
                    <p>
                      Penggunaan JavaScript telah berkembang melampaui akar
                      peramban webnya. Mesin JavaScript sekarang telah tertanam
                      dalam berbagai dari perangkat lunak lainnya, baik untuk
                      penerapan situs web sisi server dan aplikasi non-browser.
                    </p>
                    <p>
                      Percobaan awal pada dalam mempromosikan penggunaan
                      JavaScript sisi server adalah Netscape Enterprise Server
                      dan Internet Information Services Microsoft, tapi itu
                      ceruk kecil.Penggunaan sisi server akhirnya mulai tumbuh
                      di akhir tahun 2000-an, dengan kreasi dari Node.js dan
                      pendekatan lainnya.JavaScript baru-baru ini mulai muncul
                      di beberapa sistem tertanam, biasanya dengan
                      memanfaatkanNode.js.
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
                            <a href="#">#HTML,</a>
                          </li>
                          <li>
                            <a href="#">#CSS,</a>
                          </li>
                          <li>
                            <a href="#">#JavaScript,</a>
                          </li>
                          <li>
                            <a href="#">#ServerSideScripting</a>
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
                              <Link href="/blog/webDev/htmlDetail">
                                HTML (Hypertext Markup Language)
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
                              <Link href="/blog/webDev/cssDetail">
                                CSS (Cascanding Style Sheets)
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
                              <Link href="/blog/webDev/sscDetail">
                                Server - Side Scripting and Database
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
                        <Link href="/servisDetail/design">
                          <i className="icon-17" /> Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/servisDetail/digitalMarketing">
                          <i className="icon-17" /> Digital Marketing
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
