import React from 'react';
import './style.css';
import arrowIcon from '../assets/arrow.png';

const projects = [
  {
    title: 'E-Commerce Website',
    imgSrc: require('../assets/project01.png'), 
    githubLink: 'https://github.com/misalsathara/ecommerce-website.git',
  },
  {
    title: 'Weather Forecast App',
    imgSrc: require('../assets/project02.png'),
    githubLink: 'https://github.com/misalsathara/weatherforcast.git',
  },
  {
    title: 'AI Image Generator',
    imgSrc: require('../assets/project03.png'),
    githubLink: 'https://github.com/misalsathara/AI-Image-Generator.git',
  },
  {
    title: 'Portfolio Website',
    imgSrc: require('../assets/project04.png'),
    liveLink: 'https://parsalee.com/',
  },
  {
    title: 'Review Website',
    imgSrc: require('../assets/project05.png'),
    liveLink: 'https://trustmerchant.lk/',
  },
  {
    title: 'Digital CV Website',
    imgSrc: require('../assets/project06.png'), 
    liveLink: 'https://digitalcv.lk/',
  },
];

const Project = () => {
  return (
    <section id="projects">
      <p className="section_text_p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imgSrc} alt={project.title} className="project-img" />
            <h2 className="project-title">{project.title}</h2>
            <div className="btn-container">
              {project.githubLink ? (
                <button className="btn btn-color-2 project-btn" onClick={() => window.open(project.githubLink)}>
                  GitHub
                </button>
              ) : (
                <button className="btn btn-color-2 project-btn" onClick={() => window.open(project.liveLink)}>
                  Live
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.hash = '#Contact'}
      />
    </section>
  );
};

export default Project;
