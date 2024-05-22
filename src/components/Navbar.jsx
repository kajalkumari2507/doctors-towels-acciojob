import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="cc-animate-init -in cc-animate-complete">
      <div className="logo-area container container--no-max logo-max-container">
        <div className="logo-area__middle logo-area__middle--logo-image">
          <img
            className="logo__image"
            src={logo}
            alt="logo"
            width="1500"
            height="600"
          />
        </div>
      </div>

      <div className="navigation navigation--main">
        <ul className="navigation__tier-1">
          <li className="navigation__item   navigation__item--active navigation__link">
            <a href="/" className="navigation__link">
              Home
            </a>
          </li>

          <li className="navigation__item   navigation__item--with-children navigation__item--with-small-menu">
            <a href="/" className="navigation__link">
              Towels
            </a>
          </li>

          <li className="navigation__item   navigation__item--with-children navigation__item--with-mega-menu">
            <a href="/" className="navigation__link">
              Shop By Material
            </a>
          </li>

          <li className="navigation__item  ">
            <a href="/" className="navigation__link">
              Thirsty Towel
            </a>
          </li>

          <li className="navigation__item  ">
            <a href="/" className="navigation__link">
              Combo
            </a>
          </li>

          <li className="navigation__item  ">
            <a href="/" className="navigation__link">
              Gifting
            </a>
          </li>

          <li className="navigation__item   featured-link">
            <a href="/" className="navigation__link">
              Summer Store
            </a>
          </li>

          <li className="navigation__item  ">
            <a href="/" className="navigation__link">
              Blogs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
