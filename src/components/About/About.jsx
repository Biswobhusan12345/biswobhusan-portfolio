import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="about-content">
          <p className="about-text">
            Results-driven Java Developer with hands-on experience in backend and full-stack application development. 
            Adept at building scalable RESTful APIs, integrating cloud and AI solutions, and deploying secure enterprise 
            platforms with Spring Boot, AWS, and modern web technologies. Strong collaborator, quick learner, and 
            passionate about applying AI and data-driven techniques to solve real-world problems.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">1.5+</span>
              <span className="highlight-text">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-text">Projects Completed</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">3</span>
              <span className="highlight-text">Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;