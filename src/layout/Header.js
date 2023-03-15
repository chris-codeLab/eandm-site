import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={headerExtraClass ? headerExtraClass : ""}
      style={
        !noHeaderBg
          ? { backgroundImage: `url(assets/img/header.jpg)` }
          : { background: "rgb(255 255 255 / 52%)" }
      }
    >
      <div className="container">
        <div className="nav">
          <div className="d-flex align-items-center">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  {blackLogo ? (
                    <img alt="logo" src="assets/img/logo.png" />
                  ) : (
                    <img alt="logo" src="assets/img/logo.png" />
                  )}
                </a>
              </Link>
            </div>
            <ul className="menu">
            <li>
                <Link legacyBehavior href="about">
                  About Us
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/">
                  Products
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="https://www.eandm.com/Products/AllProducts.aspx">
                      All Products
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="about">
                  Stay Current
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="contacts">
                      Join Mailing List
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="https://blog.eandm.com/">
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="https://blog.eandm.com/">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="https://www.youtube.com/@eandmonline">
                      YouTube
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="https://www.linkedin.com/company/eandm/">
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="portfolio-grid">
                  Get Educated
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="portfolio-grid">
                      View All
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-grid">
                      Roadshows
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-grid">
                       Training
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-grid">
                      Workshops
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-grid">
                      Webinars
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="contacts">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <form id="content">
              <input
                type="text"
                name="input"
                className={`input ${searchToggle ? "square" : ""}`}
                id="search-input"
              />
              <button
                type="reset"
                style={{color: "#222222"}}
                className={`search ${searchToggle ? "close" : ""}`}
                id="search-btn"
                onClick={() => setSearchToggle(!searchToggle)}
              />
            </form>
            <Link legacyBehavior href="https://www.eandm.com/Store/Default.aspx">
              <a className="themebtu">Shop Now</a>
            </Link>
          </div>
          <div className="bar-menu" onClick={() => setToggle(true)}>
            <i className="fa-solid fa-bars" style={{color: "#22222"}}/>
          </div>
        </div>
      </div>
      <MobileHeader toggle={toggle} close={() => setToggle(false)} />
    </header>
  );
};
export default Header;
