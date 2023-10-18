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
            <h1 className="title">Server - Side Scripting and Database</h1>
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
                    Server - Side Scripting and Database
                  </h3>
                  <div className="blog__details__text ">
                    <p>
                      Server - Side Scripting adalah teknik yang digunakan dalam
                      pengembangan web yang melibatkan penggunaan skrip pada
                      server web yang menghasilkan respons yang disesuaikan
                      untuk setiap permintaan pengguna (klien) ke situs web.
                      Skrip dapat ditulis dalam salah satu dari sejumlah bahasa
                      skrip sisi server yang tersedia (lihat di bawah). Skrip
                      sisi server dibedakan dari skrip sisi klien di mana skrip
                      yang tertanam, seperti JavaScript , dijalankan di sisi
                      klien dalam browser web , namun kedua teknik tersebut
                      sering digunakan bersamaan. Alternatif untuk salah satu
                      atau kedua jenis scripting adalah agar server web itu
                      sendiri mengirimkan halaman web statis .
                    </p>
                    <p>
                      Server - Side Scripting sering digunakan untuk menyediakan
                      antarmuka yang disesuaikan bagi pengguna. Skrip ini dapat
                      menyusun karakteristik klien untuk digunakan dalam
                      menyesuaikan respons berdasarkan karakteristik tersebut,
                      kebutuhan pengguna, hak akses, dll. Skrip sisi server juga
                      memungkinkan pemilik situs web menyembunyikan kode sumber
                      yang menghasilkan antarmuka, sedangkan dengan klien- skrip
                      samping, pengguna memiliki akses ke semua kode yang
                      diterima oleh klien. Kelemahan penggunaan skrip sisi
                      server adalah klien perlu membuat permintaan lebih lanjut
                      melalui jaringan ke server untuk menampilkan informasi
                      baru kepada pengguna melalui browser web. Permintaan ini
                      dapat memperlambat pengalaman pengguna, menambah beban
                      pada server, dan mencegah penggunaan aplikasi saat
                      pengguna terputus dari server.
                    </p>
                    <p>
                      Ketika server menyajikan data dengan cara yang umum
                      digunakan, misalnya, menurut protokol HTTP atau FTP ,
                      pengguna dapat memilih sejumlah program klien (sebagian
                      besar browser web modern dapat meminta dan menerima data
                      menggunakan kedua protokol tersebut). Dalam kasus aplikasi
                      yang lebih terspesialisasi, pemrogram dapat menulis
                      server, klien, dan protokol komunikasi mereka sendiri,
                      yang hanya dapat digunakan satu sama lain.
                    </p>
                    <p>
                      Program yang dijalankan pada komputer lokal pengguna tanpa
                      pernah mengirim atau menerima data melalui jaringan tidak
                      dianggap sebagai klien, sehingga pengoperasian program
                      tersebut tidak akan dianggap sebagai operasi sisi klien.
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
                              <Link href="/blog/webDev/jsDetail">
                                JavaScript
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
