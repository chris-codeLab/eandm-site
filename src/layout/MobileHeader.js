import Link from "next/link";
import { useState } from "react";

const MobileHeader = ({ toggle, close }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) => (value == activeMenu ? "active" : "");
  return (
    <div
      className={`mobile-nav ${toggle ? "open" : "hmburger-menu"}`}
      id="mobile-nav"
      style={{ display: "block" }}
    >
      <div className="res-log">
        <a href="index.html">
          <img src="assets/img/logo.png" alt="EandM-mobile-logo" />
        </a>
      </div>
      <ul>
        <li className={`menu-item-has-children ${activeSubMenu("home")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("home")}>
            Products
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="https://www.eandm.com/Products/AllProducts.aspx">
                All Products
              </Link>
            </li>
          </ul>
        </li>
        <li className={`menu-item-has-children ${activeSubMenu("Pages")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("Pages")}>
            Stay Current
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="contacts">
                Join Mailing List
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="team">
                Current Articles
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-grid">
                Blog
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="pricing">
                YouTube
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="404error">
                LinkedIn
              </Link>
            </li>
          </ul>
        </li>
        <li className={`menu-item-has-children ${activeSubMenu("Portfolio")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("Portfolio")}>
            Get Educated
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="portfolio-grid">
                view all
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="portfolio-grid">
                roadshows
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="portfolio-grid">
                training
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="portfolio-grid">
                workshops
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="portfolio-grid">
              webinars
              </Link>
            </li>
          </ul>
        </li>
        <li className={`menu-item-has-children ${activeSubMenu("Blog")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("Blog")}>
            Blog
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="blog-grid">
                View All Posts
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link legacyBehavior href="contacts">
            contact us
          </Link>
        </li>
      </ul>
      <a href="JavaScript:void(0)" id="res-cross" onClick={() => close()} />
    </div>
  );
};
export default MobileHeader;
