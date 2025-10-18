import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "DataConsultancyService (TCS)",
      position: "Java Developer",
      period: "Oct 2024 – Present",
      technologies: "Java, Spring Boot, Microservices, MySQL, HTML, CSS, JavaScript, Bootstrap",
      achievements: [
        "Developed and optimized backend services for enterprise applications using Java & Spring Boot",
        "Designed REST APIs; integrated JWT-based authentication for secure user management",
        "Enhanced data workflows; improved response times and user experience",
        "Collaborated with teams on feature development, code reviews, and performance tuning"
      ]
    },
    {
      company: "Chetu Skill Center",
      position: "Software Engineering Intern",
      period: "July 2024 – Sep 2024",
      technologies: "Java, Spring Boot, MySQL, HTML, CSS, JavaScript, Bootstrap",
      achievements: [
        "Completed full-stack training in Spring Boot, MySQL, and React",
        "Developed, deployed, and tested modern web applications in a team environment",
        "Demonstrated end-to-end project delivery and database management skills"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="company">{exp.company}</h3>
                <h4 className="position">{exp.position}</h4>
                <span className="period">{exp.period}</span>
                <div className="technologies">
                  <strong>Technologies:</strong> {exp.technologies}
                </div>
                <ul className="achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;