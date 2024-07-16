import React from 'react';
import './style.css';
import emailIcon from '../assets/email.png'; 
import linkedinIcon from '../assets/linkedin.png'; 
import facebookIcon from '../assets/facebook.png'; 
import whatsappIcon from '../assets/whatsapp.png'; 
const Contact = () => {
  return (
    <section id="Contact">
      <p className="section_text_p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="Contact-info-upper-container">
        <div className="Contact-info-container">
          <img
            src={emailIcon}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:info.misalsathsara@gmail.com">info.misalsathsara@gmail.com</a>
          </p>
        </div>
        <div className="Contact-info-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/misal-sathsara-8b96a820a/">LinkedIn</a>
          </p>
        </div>
        <div className="Contact-info-container">
          <img
            src={facebookIcon}
            alt="Facebook icon"
            className="icon contact-icon"
          />
          <p><a href="https://web.facebook.com/misal.chamathka">Facebook</a></p>
        </div>
        <div className="Contact-info-container">
          <img
            src={whatsappIcon}
            alt="WhatsApp icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://api.whatsapp.com/send/?phone=94775285042&text&type=phone_number&app_absent=0">WhatsApp</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
