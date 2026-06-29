import "./Header.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            ARCHIVE
          </Link>

          <div className="header__right">
            <span className="header__issue">SPRING / SUMMER 2026</span>

            <button className="header__menu" onClick={() => setMenuOpen(true)}>
              ≡
            </button>
          </div>
        </div>
      </header>

      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <button className="menu__close" onClick={() => setMenuOpen(false)}>
          ×
        </button>

        <nav className="menu__nav">
          <button onClick={() => scrollToSection(".hero")}>HOME</button>

          <button onClick={() => scrollToSection(".issue-section")}>
            ISSUES
          </button>

          <button onClick={() => scrollToSection(".editorial-section")}>
            EDITORIAL
          </button>

          <button onClick={() => scrollToSection(".featured")}>
            FEATURED
          </button>

          <button onClick={() => scrollToSection("footer")}>CONTACT</button>
        </nav>
      </div>
    </>
  );
};

export default Header;
