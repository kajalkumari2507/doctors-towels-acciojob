import React from "react";
import src1 from "../assets/1.webp";
import src2 from "../assets/2.webp";
import src3 from "../assets/3.webp";
import src4 from "../assets/4.webp";

const BodySection2 = () => {
  return (
    <>
      <div className="article fully-spaced-row--small ">
        <div className="align-center spaced-column">
          <h1 className="majortitle in-content">Shop By Product</h1>
          <div className="rte lightly-spaced-row large-text">
            <p>
              <strong>
                Redefining the skincare game for over 10 lakh + Customers &amp;
                Counting
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="flexible-layout flexible-layout--align-center valign-middle padding-container">
        <div className="column column--quarter ">
          <div className="height--adapt image-overlay image-overlay--bg-shadow overlay-text-parent--mobile-stack">
            <div className="rimage-background-wrapper ">
              <div className="rimage-wrapper">
                <img src={src1} className="rimage__image" />
              </div>
            </div>
            <div className="overlay-text overlay--v-bottom overlay--h-center image-overlay__over">
              <div className="overlay-text__inner">
                <div className="overlay-text__text">
                  <div className="overlay-text__button-row overlay-text__button-row--secondary">
                    <span className="overlay-text__button btn btn--secondary">
                      Hair
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="column column--quarter ">
          <div className="height--adapt image-overlay image-overlay--bg-shadow overlay-text-parent--mobile-stack">
            <div className="rimage-background-wrapper ">
              <div className="rimage-wrapper">
                <img src={src2} className="rimage__image" />
              </div>
            </div>
            <div className="overlay-text overlay--v-bottom overlay--h-center image-overlay__over">
              <div className="overlay-text__inner">
                <div className="overlay-text__text">
                  <div className="overlay-text__button-row overlay-text__button-row--secondary">
                    <span className="overlay-text__button btn btn--secondary">
                      Bath
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="column column--quarter">
          <div className="height--adapt image-overlay image-overlay--bg-shadow overlay-text-parent--mobile-stack">
            <div className="rimage-background-wrapper ">
              <div className="rimage-wrapper">
                <img src={src3} className="rimage__image" />
              </div>
            </div>
            <div className="overlay-text overlay--v-bottom overlay--h-center image-overlay__over">
              <div className="overlay-text__inner">
                <div className="overlay-text__text">
                  <div className="overlay-text__button-row overlay-text__button-row--secondary">
                    <span className="overlay-text__button btn btn--secondary">
                      Face
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="column column--quarter ">
          <div className="height--adapt image-overlay image-overlay--bg-shadow overlay-text-parent--mobile-stack">
            <a className="image-overlay__image-link" href="/" />
            <div className="rimage-background-wrapper ">
              <div className="rimage-wrapper">
                <img src={src4} className="rimage__image" />
              </div>
            </div>
            <div className="overlay-text overlay--v-bottom overlay--h-center image-overlay__over">
              <div className="overlay-text__inner">
                <div className="overlay-text__text">
                  <div className="overlay-text__button-row overlay-text__button-row--secondary">
                    <span className="overlay-text__button btn btn--secondary">
                      Gym
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodySection2;
