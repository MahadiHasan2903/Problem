import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import "./Contact.css";

const phoneNumber = "+8801704672028";

const handlePhoneClick = () => {
  window.location.href = `tel:${phoneNumber}`;
};

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:hasan.mahadi2903@gmail.com`;
  };

  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact_title">Don't be Shy!</h3>
          <p className="contact_description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen
                className="info_icon"
                onClick={handleEmailClick}
                style={{ cursor: "pointer" }}
              />
              <div>
                <span className="info_title">Mail me</span>
                <h4 className="info_desc">hasan.mahadi2903@gmail.com</h4>
              </div>
            </div>

            <div className="info_item">
              <FaPhoneSquareAlt
                className="info_icon"
                onClick={handlePhoneClick}
                style={{ cursor: "pointer" }}
              />
              <div>
                <span className="info_title">Call me</span>
                <h4 className="info_desc">{phoneNumber}</h4>
              </div>
            </div>
          </div>

          <div className="contact_socials">
            <a
              href="https://www.facebook.com/profile.php?id=100064028100652&mibextid=ZbWKwL"
              className="contact_social-link"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/mahadi_hasan2903?igshid=NGExMmI2YTkyZg=="
              className="contact_social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/md-mahadi-hasan-425660258"
              className="contact_social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MahadiHasan2903"
              className="contact_social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form className="contact_form">
          <div className="form_input-group">
            <div className="form_input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form_control"
              />
            </div>
            <div className="form_input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form_control"
              />
            </div>
            <div className="form_input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form_control"
              />
            </div>
          </div>
          <div className="form_input-div">
            <textarea
              placeholder="Your Message"
              className="form_control"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button_icon contact_button_icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
