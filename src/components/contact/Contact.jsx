/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contato</h2>
      <span className="section__subtitle">Entre em contato comigo</span>

      <div className="contact__container container grid">
        <div className="contact__content">

          <div className="contact__info">
            <div className="contact__card">
              <a href="https://wa.me/5581986103538" className="contact__button">
                <i className="bx bxl-whatsapp contact__card-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <a
                href="mailto:viniciussmirandacontato@gmail.com"
                className="contact__button"
              >
                <i className="bx bxl-gmail contact__card-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <a
                href="https://www.linkedin.com/in/viniciussmiranda/"
                className="contact__button"
              >
                <i className="bx bxl-linkedin contact__card-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
