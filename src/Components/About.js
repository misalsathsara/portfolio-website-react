// About.js
import React from 'react';
import './style.css';
import profilePic from '../assets/profile-pic.png'; 
import experienceIcon from '../assets/experience.png'; 
import educationIcon from '../assets/education.png'; 
import arrowIcon from '../assets/arrow.png'; 

const About = () => {
  return (
    <section id="about">
      <p className="section_text_p1">Get To Know More</p>
      <h1 style={{ marginBottom: '50px' }} className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={profilePic}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-container">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>1 year <br />Software development</p>
            </div>
            <div className="details-container">
              <img
                src={educationIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                1 year Software Developer Course / NVTI Baddegama
                <br />Advanced Level combined mathematics Stream – 2020 / St.
                Aloysius’ College - Galle
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              👋 I’m Misal Sathsara, a passionate software developer with expertise in backend and frontend technologies.

              💡 I build robust systems using server-side languages and databases, and I create efficient APIs.

              🎨 On the frontend, I bring designs to life with HTML, CSS, Java, PHP, and JavaScript, focusing on user experience.

              🚀 I thrive on innovation, exploring new frameworks and best practices to deliver high-quality solutions.

              🌐 Whether optimizing databases or crafting seamless layouts, I’m dedicated to user-friendly experiences.

              🌟 I’m a problem solver, learner, and collaborator, always ready to tackle new challenges and make an impact.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.hash = '#experience'}
      />
    </section>
  );
};

export default About;
