import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSideBar = () => {
    setIsMenuOpen(false);
  };
  return (
    // main header
    <header className="main-header header__style__one ">
      {/* header-top-one */}
      <div className="header-top-one">
        <div className="auto-container">
          <div className="top__inner">
            <div className="top__hrader__left">
              <ul>
                <li>
                  <span>Address :</span> Jl. Kapuk Kebon Jahe Blok A No. 30 DKI
                  Jakarta, 11720
                </li>
                <li>/</li>
                <li>
                  <span>Email :</span>{" "}
                  <a href="mailto:quantumdigitaldeveloper@gmail.com">
                    quantumdigitaldeveloper@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="top__hrader__right">
              <ul>
                <li>
                  <a href="https://www.instagram.com/quantechnology?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://shp.ee/yjz62zf">
                    <FontAwesomeIcon icon={faBagShopping} />
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
                  <img src="/assets/images/new.png" alt="" />
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
                        {/* <li>
                            <Link href="/servisDetail/digitalMarketing">
                              Digital Marketing
                            </Link>
                          </li> */}
                        <li>
                          <Link href="/servisDetail/video">Video Editor</Link>
                        </li>
                        <li>
                          <Link href="/servisDetail/vector">
                            Vector Spesialis
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link href="/portfolio/portfolio">Portofolio </Link>
                      <ul>
                        <li>
                          <Link
                            href="/portfolio/filter/[porto_id]"
                            as="/portfolio/filter/1"
                          >
                            Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/portfolio/filter/[porto_id]"
                            as="/portfolio/filter/2"
                          >
                            Web Development{" "}
                          </Link>
                        </li>
                        {/* <li>
                            <Link href="/portfolio/filter/[porto_id]" as="/portfolio/filter/3">
                              Digital Marketing{" "}
                            </Link>
                          </li> */}
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
              <Link href="/contact/contact" className="theme-btn theme-btn-one">
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
                  <img src="/assets/images/new.png" alt="" />
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
                        {/* <li>
                            <Link href="/servisDetail/digitalMarketing">
                              Digital Marketing
                            </Link>
                          </li> */}
                        <li>
                          <Link href="/servisDetail/video">Video Editor</Link>
                        </li>
                        <li>
                          <Link href="/servisDetail/vector">
                            Vector Spesialis
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link href="/portfolio/portfolio">Portofolio </Link>
                      <ul>
                        <li>
                          <Link
                            href="/portfolio/filter/[porto_id]"
                            as="/portfolio/filter/1"
                          >
                            Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/portfolio/filter/[porto_id]"
                            as="/portfolio/filter/2"
                          >
                            Web Development{" "}
                          </Link>
                        </li>
                        {/* <li>
                            <Link href="/portfolio/filter/[porto_id]" as="/portfolio/filter/3">
                              Digital Marketing{" "}
                            </Link>
                          </li> */}
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
              <Link href="/contact/contact" className="theme-btn theme-btn-one">
                <i className="icon-02" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {/* <div className="menu-backdrop"></div> */}
        <div className="close-btn" onClick={toggleMenu}>
          <i className="icon-fa-times" />
        </div>
        <nav className="menu-box" onClick={closeSideBar}>
          <div className="nav-logo">
            <Link href="/#">
              <img src="/assets/images/new.png" alt="" title="" />
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
                  {/* <li>
                    <Link href="/servisDetail/digitalMarketing">
                      Digital Marketing
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/servisDetail/video">Video Editor</Link>
                  </li>
                  <li>
                    <Link href="/servisDetail/vector">Vector Spesialis</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="/portfolio/portfolio">Portofolio </Link>
                <ul>
                  <li>
                    <Link
                      href="/portfolio/filter/[porto_id]"
                      as="/portfolio/filter/1"
                    >
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio/filter/[porto_id]"
                      as="/portfolio/filter/2"
                    >
                      Web Development{" "}
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/portfolio/filter/[porto_id]" as="/portfolio/filter/3">
                      Digital Marketing{" "}
                    </Link>
                  </li> */}
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
    </header>
  );
};
export default Header;
