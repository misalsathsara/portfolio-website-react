// Experience.js
import React from 'react';
import './style.css';
import checkmarkIcon from '../assets/checkmark.png'; 
import arrowIcon from '../assets/arrow.png'; 

const Experience = () => {
  return (
    <section id="experience">
      <p className="section_text_p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-container">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {[
                { skill: 'HTML', level: 'Experienced' },
                { skill: 'CSS', level: 'Experienced' },
                { skill: 'JavaScript', level: 'Intermediate' },
                { skill: 'React', level: 'Intermediate' },
                { skill: 'Bootstrap', level: 'Intermediate' },
                { skill: 'Java', level: 'Intermediate' },
                { skill: 'Python', level: 'Intermediate' },
              ].map(({ skill, level }) => (
                <article key={skill}>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>{skill}</h3>
                    <p>{level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {[
                { skill: 'MySQL', level: 'Intermediate' },
                { skill: 'PHP', level: 'Intermediate' },
              ].map(({ skill, level }) => (
                <article key={skill}>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>{skill}</h3>
                    <p>{level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.hash = '#projects'}
      />
    </section>
  );
};

export default Experience;
