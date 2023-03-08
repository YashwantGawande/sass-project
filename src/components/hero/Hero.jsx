import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__container--left">
          <h1>They are Here</h1>
          <h2>Be Prepared</h2>
          <p>Sign up now to get join the list.</p>
          <button className="hero__container--btn">
            <a href="#">Sign Up</a>
          </button>
        </div>
        <div className="hero__container--right">
          <img
            src="src/assets/img-2.svg"
            alt="alien"
            className="hero__container--img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
