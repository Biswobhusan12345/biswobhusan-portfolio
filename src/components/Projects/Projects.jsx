import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Car Marketplace Platform",
      description: "A comprehensive full-stack platform for car buying, selling, and renting with AI-driven features",
      features: [
        "Responsive design with React and Bootstrap for enhanced user experience",
        "Robust RESTful APIs using Java and Spring Boot with JWT authentication",
        "Dynamic React UI components with multi-image upload and sophisticated search filters",
        "Stripe Payment Gateway integration for secure transactions",
        "AI-driven recommendation engines and intelligent search filters",
        "Comprehensive testing with JUnit and React Testing Library",
        "Agile methodology implementation with cross-functional teams"
      ],
      technologies: ["Java", "Spring Boot", "React", "MySQL", "JWT", "Stripe API", "AI/ML"]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Project</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-features">
                <h4>Key Features & Achievements:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;