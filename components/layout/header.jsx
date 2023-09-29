import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSideBar = () => {
    setIsMenuOpen(false);
  };
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
                  <Link href="/#">
                    <img src="/assets/images/Quantum.png" alt="" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler" onClick={toggleMenu}>
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
                        <Link href="/about/about">About</Link>
                      </li>
                      <li className="dropdown">
                        <Link href="/servis/service">Service </Link>
                        <ul>
                          <li>
                            <Link href="/servisDetail/design">Design </Link>
                          </li>
                          <li>
                            <Link href="/servisDetail/webDevelopment">
                              Web Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/servisDetail/digitalMarketing">
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link href="seoMarketing">SEO Marketing</Link>
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
                      <li>
                        <Link href="/blog/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/career/career">Career</Link>
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
                  <Link href="/#">
                    <img src="/assets/images/Quantum.png" alt="" />
                  </Link>
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
                        <Link href="/about/about">About</Link>
                      </li>
                      <li className="dropdown">
                        <Link href="/servis/service">Service </Link>
                        <ul>
                          <li>
                            <Link href="/servisDetail/design">Design </Link>
                          </li>
                          <li>
                            <Link href="/servisDetail/webDevelopment">
                              Web Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/servisDetail/digitalMarketing">
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link href="seoMarketing">SEO Marketing</Link>
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
                      <li>
                        <Link href="/blog/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/career/career">Career</Link>
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
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {/* <div className="menu-backdrop"></div> */}
        <div className="close-btn" onClick={toggleMenu}>
          <i className="icon-fa-times" />
        </div>
        <nav className="menu-box" onClick={closeSideBar}>
          <div className="nav-logo">
            <Link href="/#">
              <img src="/assets/images/Quantum.png" alt="" title="" />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation home-menu">
              <li>
                <Link href="/about/about">About</Link>
              </li>
              <li className="dropdown">
                <Link href="/servis/service">Service </Link>
                <ul>
                  <li>
                    <Link href="/servisDetail/design">Design </Link>
                  </li>
                  <li>
                    <Link href="/servisDetail/webDevelopment">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/servisDetail/digitalMarketing">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="seoMarketing">SEO Marketing</Link>
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
                    <Link href="/portfolio/webDev">Web Development </Link>
                  </li>
                  <li>
                    <Link href="/portfolio/digitalMarket">
                      Digital Marketing{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/blog/blog">Blog</Link>
              </li>
              <li>
                <Link href="/career/career">Career</Link>
              </li>
            </ul>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li>
                <a href="tel:+8801682648101">+88 01682648101</a>
              </li>
              <li>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </>
  );
}
