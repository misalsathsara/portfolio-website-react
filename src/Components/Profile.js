// Profile.js
import React from 'react';
import './style.css';
import profilePic from '../assets/profile-pic.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import facebookIcon from '../assets/facebook.png';
import youtubeIcon from '../assets/youtube.png';
import cvFile from '../assets/IGMCSathsara-cv.pdf';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section_pic_container">
        <img
          src={profilePic}
          alt="Misal Sathsara Profile Picture"
        />
      </div>
      <div className="section_text">
        <p className="section_text_p1">Hello, I'm</p>
        <h1 className="title">Misal Sathsara</h1>
        <p className="section_text_p2">Software Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(cvFile)}
          >
            Download CV
          </button>

          <button className="btn btn-color-1" onClick={() => window.location.hash = '#Contact'}>
            Contact Info
          </button>
        </div>
        <div id="social-container">
          <img
            src={linkedinIcon}
            alt="My LinkedIn Profile"
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/in/misal-sathsara-8b96a820a/')}
          />
          <img
            src={githubIcon}
            alt="My GitHub Profile"
            className="icon"
            onClick={() => window.open('https://github.com/misalsathara')}
          />
          <img
            src={facebookIcon}
            alt="My Facebook Profile"
            className="icon"
            onClick={() => window.open('https://web.facebook.com/misal.chamathka')}
          />
          <img
            src={youtubeIcon}
            alt="My YouTube Profile"
            className="icon"
            onClick={() => window.open('https://www.youtube.com/channel/UCH5hJEPXmfVVz3fDL7gJzBg')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
