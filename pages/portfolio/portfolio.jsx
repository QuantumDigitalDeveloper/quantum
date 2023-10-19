import React from "react";
import Link from "next/link";

export default function portfolio() {
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
            <h1 className="title">Projects</h1>
          </div>
        </div>
      </section>
      {/* page-title end*/}
      <div class="portfolio__menu">
        <button class="active" data-filter="*">
          SEE ALL
        </button>
        <button data-filter=".cat1" class="">
          DESIGN
        </button>
        <button data-filter=".cat2">WEB DEVELOPMENT</button>
        <button data-filter=".cat3">DIGITAL MARKETING</button>
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
                    <h4>Logo</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/filter/design"
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
                    <h4>Technology</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2023</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/filter/design"
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
                    <h4>Fashion</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/filter/design"
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
                    <h4>F&B</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/filter/design"
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
                    <h4>Otomotif</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/filter/design"
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
                    <h4>Sport</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/filter/design"
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
                    <h4>Furniture</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button ">
                  <Link
                    href="/portfolio/filter/design"
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
