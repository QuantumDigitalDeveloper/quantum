import React from "react";
import Link from "next/link";

export default function header() {
  return (
    <>
      {/* main header */}
      <header className="main-header header__style__one ">
        {/* header-top-one */}
        <div className="header-top-one">
          <div className="auto-container">
            <div className="top__inner">
              <div className="top__hrader__left">
                <ul>
                  <li>
                    <span>Address :</span> 3517 W. Gray St. Utica, Pennsylvania
                    57867
                  </li>
                  <li>/</li>
                  <li>
                    <span>Email :</span>{" "}
                    <a href="mailto:info@company.com">info@company.com</a>
                  </li>
                </ul>
              </div>
              <div className="top__hrader__right">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-10" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-14" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-01" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-11" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* header-lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="index.html">
                    <img src="/assets/images/Quantum.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="menu-area clearfix">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix home-menu">
                      <li>
                        <Link href="/#">Home</Link>
                      </li>
                      <li>
                        <Link href="/about/about">About</Link>
                      </li>
                      <li>
                        <Link href="/servis/service">Service</Link>
                      </li>
                      <li className="dropdown">
                        <a href="#">Layanan </a>
                        <ul>
                          <li className="dropdown">
                            <Link href="/servisDetail/design">Design </Link>
                            <ul>
                              <li>
                                <Link href="/portfolio/design">1 </Link>
                              </li>
                              <li>
                                <Link href="/portfolio/design">2</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <Link href="/servisDetail/webDevelopment">
                              Web Development{" "}
                            </Link>
                            <ul>
                              <li>
                                <Link href="/portfolio/webDev">1 </Link>
                              </li>
                              <li>
                                <Link href="/portfolio/webDev">2</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <Link href="/servisDetail/digitalMarketing">
                              Digital Marketing{" "}
                            </Link>
                            <ul>
                              <li>
                                <Link href="/portfolio/digitalMarket">1 </Link>
                              </li>
                              <li>
                                <Link href="/portfolio/digitalMarket">2</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <Link href="seoMarketing">SEO Marketing </Link>
                            <ul>
                              <li>
                                <Link href="/portfolio/digitalMarket">1 </Link>
                              </li>
                              <li>
                                <Link href="/portfolio/digitalMarket">2</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link href="/portfolio/portfolio">Portfolio </Link>
                        <ul>
                          <li>
                            <Link href="/portfolio/design">Design</Link>
                          </li>
                          <li>
                            <Link href="/portfolio/webDev">
                              Web Development{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio/digitalMarket">
                              Digital Marketing{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">More + </a>
                        <ul>
                          <li>
                            <Link href="/blog/blog">Blog</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="btn-box">
                <Link
                  href="/contact/contact"
                  className="theme-btn theme-btn-one"
                >
                  <i className="icon-02" /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="index.html">
                    <img src="/assets/images/Quantum.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="menu-area clearfix">
                <nav className="main-menu clearfix">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix home-menu">
                      <li>
                        <Link href="/#">Home</Link>
                      </li>
                      <li>
                        <Link href="/about/about">About</Link>
                      </li>
                      <li>
                        <Link href="/servis/service">Service</Link>
                      </li>
                      <li className="dropdown">
                        <a href="#">Layanan </a>
                        <ul>
                          <li className="dropdown">
                            <Link href="/servisDetail/design">Design </Link>
                            <ul>
                              <li>
                                <Link href="/portfolio/design">1 </Link>
                              </li>
                              <li>
                                <Link href="/portfolio/design">2</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <Link href="/servisDetail/webDevelopment">
                              Web Development{" "}
                            </Link>
                            <ul>
                              <li>
                                <Link href="/portfolio/webDev">1 </Link>
                              </li>
                              <li>
                                <Link href="/portfolio/webDev">2</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <Link href="/servisDetail/digitalMarketing">
                              Digital Marketing{" "}
                            </Link>
                            <ul>
                              <li>
                                <Link href="/portfolio/digitalMarket">1 </Link>
                              </li>
                              <li>
                                <Link href="/portfolio/digitalMarket">2</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <Link href="seoMarketing">SEO Marketing </Link>
                            <ul>
                              <li>
                                <Link href="/portfolio/digitalMarket">1 </Link>
                              </li>
                              <li>
                                <Link href="/portfolio/digitalMarket">2</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link href="/portfolio/portfolio">Portfolio </Link>
                        <ul>
                          <li>
                            <Link href="/portfolio/design">Design</Link>
                          </li>
                          <li>
                            <Link href="/portfolio/webDev">
                              Web Development{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio/digitalMarket">
                              Digital Marketing{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">More + </a>
                        <ul>
                          <li>
                            <Link href="/blog/blog">Blog</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="btn-box">
                <Link
                  href="/contact/contact"
                  className="theme-btn theme-btn-one"
                >
                  <i className="icon-02" /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main-header end */}
    </>
  );
}
