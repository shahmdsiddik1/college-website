import React from "react";
import "./Hero.css";
import dark_arrow from "../../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>WE ENSURE BETTER EDUCATION FOR A BETTER WORLD</h1>

        <p>
          At our college, we ensure holistic development through a perfect blend
          of knowledge, skills, and hands-on experience. Along with academic
          excellence, we provide well-equipped laboratories, a vibrant
          playground, and co-curricular opportunities that help students grow
          intellectually, physically, and socially for a successful future.
        </p>

        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-120}
          className="btn"
        >
          Explore More <img src={dark_arrow} alt="Arrow icon" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
