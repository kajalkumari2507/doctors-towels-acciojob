import React from "react";
import IconCollections from "./Footer-icons";

const Footer = () => {
  return (
    <div id="pagefooter">
      <div className="shopify-section section-footer">
        <div className="container container--no-max section-footer__row-container">
          <div className="section-footer__row section-footer__row--blocks">
            <div className="section-footer__row__col section-footer__text-block section-footer__text-block--with-text">
              <div className="section-footer__title heading-font h6-style no-wrap">
                Post-shower Experience Redefined
              </div>

              <div className="section-footer__text">
                <p>Experience luxurious, safer towels with us.</p>
              </div>

              <div className="section-footer__text-block__social">
                <div className="social-links social-links--large">
                  <IconCollections />
                </div>
              </div>
            </div>

            <div className="section-footer__row__col section-footer__menu-block">
              <div className="section-footer__title heading-font h6-style no-wrap">
                Quick links
              </div>

              <ul className="section-footer__menu-block__menu">
                <li>About Us</li>

                <li>Contact Us</li>

                <li>Terms &amp; Conditions</li>

                <li>Returns &amp; Exchanges</li>

                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="section-footer__row__col section-footer__newsletter-block">
              <div className="section-footer__title heading-font h6-style">
                VIP Doctor Towels Newsletter
              </div>

              <div className="section-footer__text">
                <p>Get special access to weekly exclusive discounts.</p>
              </div>

              <div className="signup-form">
                <form
                  method="post"
                  id="footer_newsletter_signup"
                  className="contact-form"
                >
                  <p>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="signup-form__email"
                    />
                  </p>
                  <button className="btn btn--secondary signup-form__button">
                    Sign up
                  </button>
                </form>
              </div>

              <div className="section-footer__newsletter-block__social">
                <div className="social-links social-links--large">
                  <IconCollections />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container container--no-max section-footer__row-container ">
          <div className="section-footer__row section-footer__row-lower">
            <div className="copyright">
              <span className="copy">© 2024 Doctor Towels.</span>
              Powered by Shopify
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
