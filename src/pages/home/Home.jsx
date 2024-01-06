import React, { useState } from "react";
import profile from "../../assets/home1.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import "./home.css";
function Home() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = `I'm a web designer with a strong foundation in frontend development. I excel in working with HTML, CSS,
     and JavaScript to design and implement responsive websites. My proficiency extends to various frontend
      frameworks and libraries, including React and Angular, enabling me to create dynamic and 
      efficient web applications. Furthermore, my commitment to staying abreast of the latest frontend trends
       and best practices ensures that I can contribute to building modern, user-friendly interfaces for the company's projects.`;

  function toggleDescription() {
    setShowFullDescription(!showFullDescription);
  }

  const truncatedDescription = showFullDescription
    ? description
    : `${description.slice(0, 169)}...`;
  return (
    <>
      {/* home in home.css section and grid in app.css style*/}
      <section className="home section homesection grid">
        {/* part2 */}
        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>I'm Marwa Ahmed . </span>Frontend Developer
            </h1>

            <p className="home__description">{truncatedDescription}</p>

            {description.length > 1 && (
              <button onClick={toggleDescription} className="show-more-button">
                {showFullDescription ? "Show Less" : "Show More"}
              </button>
            )}

            {/* part2 */}
            <div className="social-media" style={{ paddingTop: "15px" }}>
              <div className="bg-icon">
                <a href="">
                  <FaLinkedinIn />
                </a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="">
                  <FaGithub />
                </a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="">
                  <FaTwitter />
                </a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="">
                  <FaFacebookF />
                </a>
                <span></span>
              </div>
            </div>

            <Link to="/about" className="button">
              More Aboute Me{" "}
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        {/*part1*/}
        <img src={profile} alt="" className="home__img" />

        {/* part3 */}
        <div className="color__block"></div>
      </section>
    </>
  );
}

export default Home;
