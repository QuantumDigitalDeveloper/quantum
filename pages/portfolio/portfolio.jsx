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

      <div className="row justify-content-center">
        <div className="menu-area clearfix">
          <nav className="main-menu navbar-expand-md navbar-light">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix home-menu">
                <li>
                  <Link href="/portfolio/design">Design</Link>
                </li>
                <li>
                  <Link href="/portfolio/webDev">Web Development</Link>
                </li>
                <li>
                  <Link href="/portfolio/digitalMarket">Digital Marketing</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* project-page */}
      <div className="project__page p_relative see__pad">
        <div className="row">
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/portfolio-01.jpg" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text">
                  <div className="text__block">
                    <h4>Sustainability</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button">
                  <a
                    href="projects-details.html"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/portfolio-02.jpg" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text">
                  <div className="text__block">
                    <h4>Sustainability</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button">
                  <a
                    href="projects-details.html"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/portfolio-03.jpg" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text">
                  <div className="text__block">
                    <h4>Sustainability</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button">
                  <a
                    href="projects-details.html"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/portfolio-04.jpg" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text">
                  <div className="text__block">
                    <h4>Sustainability</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button">
                  <a
                    href="projects-details.html"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/portfolio-05.jpg" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text">
                  <div className="text__block">
                    <h4>Sustainability</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button">
                  <a
                    href="projects-details.html"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/portfolio-06.jpg" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text">
                  <div className="text__block">
                    <h4>Sustainability</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button">
                  <a
                    href="projects-details.html"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/portfolio-07.jpg" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text">
                  <div className="text__block">
                    <h4>Sustainability</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button">
                  <a
                    href="projects-details.html"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 colsm-12">
            <div className="portfolio__block p_relative">
              <div className="portfolio__image">
                <figure>
                  <img src="/assets/images/resource/portfolio-08.jpg" alt="" />
                </figure>
              </div>
              <div className="lower__content p_absolute">
                <div className="protfolio__text">
                  <div className="text__block">
                    <h4>Sustainability</h4>
                    <p>Design</p>
                  </div>
                  <div className="text__block_two">
                    <h5>2019</h5>
                  </div>
                </div>
                <div className="protfolio__button">
                  <a
                    href="projects-details.html"
                    className="theme-btn theme-btn-one"
                  >
                    {" "}
                    Read More
                    <i className="icon-02" />
                  </a>
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
