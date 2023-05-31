import React from "react";
import "./Home.css";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="profile" className="home_img" />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <TypeAnimation
              sequence={[
                "I'M MD. MAHADI HASAN",
                1000,

                "I'M a MERN DEVELOPER",
                1000,
                "I'M a FULL STACK DEVELOPER",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="home_content">
            <p className="home_description">
              I am a skilled Full Stack Developer specializing in creating
              beautiful and user-friendly websites. I have expertise in both
              front-end and back-end development, and I am eager to apply my
              skills in a professional environment. I am a fast learner, a team
              player, and I am confident that I can bring value to any
              development team.
            </p>
            <Link to="/about" className="button">
              More About Me
              <span className="button_icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="color_block"></div>
    </section>
  );
};

export default Home;
