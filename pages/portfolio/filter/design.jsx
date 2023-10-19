import React from "react";
import Link from "next/link";

export default function design() {
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
                <span> -</span>Projects{" "}
              </li>
            </ul>
            <h1 className="title">Design</h1>
          </div>
        </div>
      </section>
      {/* page-title end*/}
      <div class="portfolio__menu">
        <button class="active" data-filter="*">
          SEE ALL
        </button>
        <button data-filter=".cat1" class="">
          TECHNOLOGY
        </button>
        <button data-filter=".cat2">FASHION</button>
        <button data-filter=".cat3">F&B</button>
        <button data-filter=".cat4">OTOMOTIF</button>
        <button data-filter=".cat5">SPORT</button>
        <button data-filter=".cat6">FURNITURE</button>
      </div>
      {/* project-page */}
      <div className="project__page p_relative see__pad">
        <div className="row">
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/1.png" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text ">
                  <div className="text__block">
                    <h4>Jaringan</h4>
                    <p>Technology</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/project/project"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/1.png" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text">
                  <div className="text__block">
                    <h4>AI</h4>
                    <p>Technology</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2023</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/project/project"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/1.png" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text ">
                  <div className="text__block">
                    <h4>Baju</h4>
                    <p>Fashion</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/project/project"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/1.png" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text ">
                  <div className="text__block">
                    <h4>Celana</h4>
                    <p>Fashion</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/project/project"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/1.png" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text ">
                  <div className="text__block">
                    <h4>Makanan</h4>
                    <p>F&B</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/project/project"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/1.png" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text ">
                  <div className="text__block">
                    <h4>Minuman</h4>
                    <p>F&B</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/project/project"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/1.png" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text ">
                  <div className="text__block">
                    <h4>Mobil</h4>
                    <p>Otomotif</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/project/project"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/1.png" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text ">
                  <div className="text__block">
                    <h4>Motor</h4>
                    <p>Otomotif</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/project/project"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/1.png" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text ">
                  <div className="text__block">
                    <h4>Football</h4>
                    <p>Sport</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/project/project"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/1.png" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text ">
                  <div className="text__block">
                    <h4>Basketball</h4>
                    <p>Sport</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/project/project"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pricing-page end*/}
      <div className="row justify-content-center">
        <div className="swiper__button">
          <div className="button_next">
            <i className="icon-06" />
          </div>
          <div className="button_prev">
            <i className="icon-05" />
          </div>
        </div>
      </div>
    </>
  );
}
