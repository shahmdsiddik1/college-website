import React from "react";
import "./About.css";
import logo from "../../../assets/Graduationcap.png";
import image from "../../../assets/book.png";
import award from "../../../assets/award.png";
import group from "../../../assets/group.png";

const About = () => {
  return (
    <section id="about" className="about">
      {/* Section Heading */}
      <h1 className="about-heading">WHY CHOOSE GGI?</h1>

      {/* About Content */}
      <div className="about-container">
        <div className="about-image-logo">
          <img src={logo} alt="Expert Faculty" />
          <h2>Expert Faculty</h2>
          <p>
            Learn from experienced educators dedicated to your success with
            personalized mentorship and guidance.
          </p>
        </div>

        <div className="about-image-logo">
          <img src={image} alt="Comprehensive Curriculum" />
          <h2>Comprehensive Curriculum</h2>
          <p>
            Maharashtra State Board aligned syllabus with integrated JEE/NEET and
            CA Foundation preparation programs.
          </p>
        </div>

        <div className="about-image-logo">
          <img src={award} alt="Modern Infrastructure" />
          <h2>Modern Infrastructure</h2>
          <p>
            State-of-the-art classrooms, labs, and facilities designed to foster
            effective learning and growth.
          </p>
        </div>

        <div className="about-image-logo">
          <img src={group} alt="Holistic Development" />
          <h2>Holistic Development</h2>
          <p>
            Weekly tests, seminars, counseling services, and active campus life
            for complete student development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
