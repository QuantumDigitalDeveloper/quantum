import Link from "next/link";
import React from "react";

export default function detail() {
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
            <h1 className="title">Prinsip Desain</h1>
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
                    11 Prinsip Desain dan Cara Penggunaannya
                  </h3>
                  <div className="blog__details__text ">
                    <p>
                      <ul>
                        <li>Hierarchy</li>
                        <li>Balance</li>
                        <li>Alignment</li>
                        <li>Emphasis</li>
                        <li>Proportion</li>
                        <li>Movement</li>
                        <li>Negative Space</li>
                        <li>Contrast</li>
                        <li>Repetition</li>
                        <li>Variety</li>
                        <li>Unity</li>
                      </ul>
                    </p>
                    <p>
                      <b>Hierarchy</b>
                    </p>
                    <p>
                      Hierarchy visual adalah bagian penting dari desain yang
                      baik. Jika semua objek yang ada di lembar kerja memiliki
                      kepentingan yang sama, maka tidak ada yang menonjol. Perlu
                      menggunakan bahasa visual untuk memberi tahu orang apa
                      yang menjadi pusat perhatian pertama, kedua, ketiga, dll.
                      Dalam membuat hierarki visual dapat melalui skala (ukuran
                      relatif dari suatu elemen) dan warna. Hierarchy tipografi
                      dapat dibuat dengan menggunakan tipografi, ukuran, dan
                      bobot font yang berbeda. Pada intinya adalah untuk
                      memastikan elemen terpenting menonjol pada halaman
                      dibandingkan dengan elemen yang lain.
                    </p>
                    <p>
                      <b>Balance</b>
                    </p>
                    <p>
                      Keseimbangan dalam komposisi dapat tercapai dengan
                      beberapa cara berbeda. Keseimbangan simetris adalah yang
                      paling mudah. Hal ini tercapai ketika elemen di kedua sisi
                      sumbu vertikal pada dasarnya sama. Misalnya, dua blok teks
                      di kedua sisi halaman akan menciptakan keseimbangan
                      simetris, meskipun konten blok tersebut tidak identik.
                      Keseimbangan asimetris tercapai ketika elemen di kedua
                      sisi sumbu pusat tidak sama. Misalnya, ketika memiliki
                      gambar besar di satu sisi yang diimbangi dengan teks yang
                      menonjol di sisi lain. Hal ini juga dapat tercapai ketika
                      sumbu vertikal yang membagi dua elemen tidak ditempatkan
                      langsung di tengah halaman. Dalam hal ini, elemen yang
                      lebih sempit harus memiliki bobot visual yang “lebih
                      berat” daripada elemen yang lebih lebar untuk mendapatkan
                      tampilan yang seimbang. Apapun jenis teknik keseimbangan
                      yang digunakan, hasilnya akan terasa sesuai. Hal ini
                      seharusnya membuat yang melihatnya terasa selaras dan
                      justru tidak membuat merasa tidak nyaman.
                    </p>
                    <p>
                      <b>Alignment</b>
                    </p>
                    <p>
                      Alignment mengacu pada bagaimana suatu teks atau elemen
                      grafis sejajar pada halaman. Mengacu pada keselarasan
                      dalam kaitannya dengan seluruh komposisi (rata kiri,
                      tengah, atau kanan) serta penyelarasan satu dengan yang
                      lain. Ketika elemen tidak selaras, terutama dalam
                      kaitannya satu sama lain akan menambah kesan kekacauan
                      pada komposisi. Akan terlihat acak-acakan dan berantakan.
                      Ketika sampai pada prinsip dasar desain ini, pastikan
                      untuk menyelaraskan elemen dengan benar dalam hubungannya
                      satu dengan yang lain, dan konsisten dengan penyelarasan
                      dari berbagai elemen, selalu menjadikan headlines sebagai
                      pusatnya.
                    </p>
                    <p>
                      <b>Emphasis</b>
                    </p>
                    <p>
                      Penekanan adalah bagian dari desain yang menarik perhatian
                      pengguna—dengan kata lain, poin utama. Idealnya, hal ini
                      harus menjadi bagian terpenting dari desain, apakah itu
                      judul, gambar, atau CTA (Call to Action). Tapi hal itu
                      terkadang tidak menjadi kenyataan. Seorang desainer yang
                      tidak berpengalaman mungkin secara tidak sengaja memberi
                      penekanan pada bagian halaman yang salah, yang justru akan
                      membuat kebingungan di pihak pengguna. Sebaiknya
                      memastikan pada bagian yang ingin ditonjolkan atau
                      ditekankan pada kesan pertama pengguna. Dengan
                      melakukannya melalui proporsi elemen, white space, warna,
                      bayangan, pola, atau teknik lainnya.
                    </p>
                    <p>
                      <b>Proportion</b>
                    </p>
                    <p>
                      Proporsi, disebut juga sebagai skala, adalah ukuran
                      relatif objek dalam sebuah desain. Elemen yang lebih besar
                      dalam kaitannya dengan yang lain akan lebih menonjol dan
                      tampak lebih penting bagi pengguna. Elemen yang lebih
                      kecil tampak kurang penting. Sebaiknya menggunakan
                      proporsi untuk menciptakan minat visual dengan menarik
                      perhatian pemirsa ke elemen visual tertentu dalam desain.
                      Selalu diingat bahwa terlalu banyak perbedaan skala dari
                      elemen dapat membuat elemen terkecil hilang, atau membuat
                      elemen terbesar tampak besar dan terkesan main main.
                    </p>
                    <p>
                      <b>Movement</b>
                    </p>
                    <p>
                      Gerakan mengacu pada cara mata pengguna bergerak dalam
                      melihat komposisi desain. Desain yang dinamis mendorong
                      banyak gerakan mata, sementara desain statis lebih
                      sedikit. Seorang desainer yang baik dapat melakukan
                      batasan, membuat kontrol dari elemen mana saja yang
                      menjadi fokus pengguna dengan menempatkannya di sepanjang
                      jalur dari pola gerakan mata. Penting untuk membiasakan
                      diri dengan pola gerakan mata yang paling umum, pola F dan
                      Z, dan pola kue lapis. Pola F- dan Z lebih umum pada
                      halaman dengan banyak gambar, sedangkan pola kue lapis
                      difasilitasi oleh banyak teks dengan judul dan subjudul.
                    </p>
                    <p>
                      <b>Negative Space</b>
                    </p>
                    <p>
                      Ruang negatif dalam sebuah desain, disebut juga sebagai
                      ruang kosong, adalah ruang yang tidak memiliki elemen
                      desain (selain karena warna latar belakang atau pola atau
                      tekstur halus). Sebagai prinsip desain, ruang negatif
                      sangat penting karena memberikan elemen-elemen dalam ruang
                      komposisi untuk bernafas. Jika tanpa spasi, halaman
                      terlihat berantakan dan sulit dinavigasi. Selalu pastikan
                      untuk memberikan ruang di sekitar elemen di halaman,
                      terutama yang paling penting. Ruang kosong ini akan
                      membuat lebih menonjol dan memfasilitasi pengalaman
                      pengguna yang lebih baik.
                    </p>
                    <p>
                      <b>Contrast</b>
                    </p>
                    <p>
                      Kontras dapat dicapai melalui penggunaan warna, bentuk,
                      ukuran, atau sifat elemen yang serupa, dan mengacu pada
                      perbedaan di antara mereka. Warna yang kontras sering kali
                      menjadi hal pertama yang dipikirkan orang, tetapi
                      perbedaan ukuran elemen, bentuk, atau properti lainnya
                      juga dapat menciptakan kontras. Kontras memiliki dua
                      kegunaan yang sangat penting. Pertama, memungkinkan dalam
                      membuat elemen menjadi menonjol satu dengan yang lain.
                      Kurangnya kontras akan menghasilkan desain yang hanya
                      memiliki satu warna latar belakang tanpa elemen lain yang
                      terlihat — bukan desain fungsional. Sebuah desain di mana
                      dapat terlihat elemen yang berbeda secara otomatis
                      memiliki beberapa tingkat kontras. Kegunaan penting dari
                      kontras yang kedua adalah aksesibilitas. Kontras yang
                      memadai antara elemen, terutama teks dan latar
                      belakangnya, sangat penting untuk menciptakan desain yang
                      dapat diakses. Orang dengan gangguan penglihatan dapat
                      mengalami kesulitan membaca teks pada layar yang terlalu
                      kecil atau tidak memiliki kontras warna yang memadai.
                    </p>
                    <p>
                      <b>Repetition</b>
                    </p>
                    <p>
                      Pengulangan mengacu pada penggunaan elemen yang sama atau
                      serupa di seluruh desain, baik dalam pola teratur atau
                      tidak beraturan. Hal ini digunakan untuk memperkuat elemen
                      tertentu sambil juga memberikan rasa kesatuan dan
                      kontinuitas pada desain. Pengulangan dapat digunakan untuk
                      menciptakan ritme, yang membantu menggerakkan pengguna
                      melalui desain. Gunakan pengulangan dengan cara yang
                      sederhana—seperti menggunakan ikon yang sama, dalam sebuah
                      pola latar belakang, atau melalui hal-hal seperti mengatur
                      semua foto dengan cara yang sama. Bereksperimenlah dengan
                      pengulangan, khususnya pengulangan tidak beraturan, untuk
                      menciptakan suatu gerakan, tetapi berhati-hatilah karena
                      terlalu banyak pengulangan secara reguler justru memiliki
                      efek sebaliknya dan membuat desain terasa statis.
                    </p>
                    <p>
                      <b>Variety</b>
                    </p>
                    <p>
                      Variasi adalah suatu bumbu kehidupan, bukankah begitu? Hal
                      yang sama juga berlaku dalam desain. Jika pengulangan
                      menambah rasa harmoni pada desain, variasi membuatnya
                      tetap menarik dan mencegah pengguna merasa bosan. Ciptakan
                      variasi dengan menambahkan elemen unik atau tak terduga ke
                      desain. Variasi dapat digunakan untuk menarik perhatian
                      pengguna ke elemen atau area tertentu dari desain, dan
                      membuatnya menonjol.
                    </p>
                    <p>
                      <b>Unity</b>
                    </p>
                    <p>
                      Kesatuan dalam desain mengacu pada keselarasan dan kohesi
                      elemen-elemen desain. Elemen-elemen yang berbeda dalam
                      desain harus saling melengkapi dan bekerja bersama untuk
                      menciptakan gambaran yang utuh dan seimbang.
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
                            <a href="#">#desain</a>
                          </li>
                          <li>
                            <a href="#">#desaingrafis</a>
                          </li>
                          <li>
                            <a href="#">#desainwebsite</a>
                          </li>
                          <li>
                            <a href="#">#desainproduk</a>
                          </li>
                          <li>
                            <a href="#">#desaininterior</a>
                          </li>
                          <li>
                            <a href="#">#desainfashion</a>
                          </li>
                          <li>
                            <a href="#">#desainvideo</a>
                          </li>
                          <li>
                            <a href="#">#desainfoto</a>
                          </li>
                          <li>
                            <a href="#">#desaintips</a>
                          </li>
                          <li>
                            <a href="#">#desaininspirasi</a>
                          </li>
                          <li>
                            <a href="#">#jasadesain</a>
                          </li>
                          <li>
                            <a href="#">#jasadesign</a>
                          </li>
                          <li>
                            <a href="#">#desiggrafis</a>
                          </li>
                          <li>
                            <a href="#">#graphicdesigner</a>
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
                              <Link href="/blog/digital/socialDetail">
                                Social Media Marketing
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
