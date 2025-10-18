import React from 'react';
import Button from '../Button/Button';
import './Hero.css';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link to download your resume
    const link = document.createElement('a');
    link.href = '/BiswobhusanBal_Resume_new.pdf';
    link.download = 'BiswobhusanBal_Resume.pdf';
    link.click();
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Biswobhusan Bal</h1>
            <h2 className="hero-title">Java Full Stack Developer</h2>
            <p className="hero-description">
              Results-driven Java Developer with expertise in backend and full-stack application development. 
              Passionate about building scalable RESTful APIs, integrating cloud solutions, and applying 
              AI-driven techniques to solve real-world problems.
            </p>
            <div className="hero-contact-info">
              <div className="contact-item">
                <span className="icon">📱</span>
                <span>+91-7008539084</span>
              </div>
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>biswobhusanbal@zohomail.in</span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Bangalore, India</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Button text="VIEW PORTFOLIO" onClick={() => document.getElementById('projects').scrollIntoView()} />
              <button className="resume-button" onClick={handleDownloadResume}>
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;