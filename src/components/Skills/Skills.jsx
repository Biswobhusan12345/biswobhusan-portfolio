import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    'JAVA', 'Spring Boot', 'Hibernate', 'Microservices', 'RESTful APIs',
    'SQL', 'MySQL', 'Database Management', 'Data Structures & Algorithms',
    'React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap',
    'Docker', 'Jenkins', 'CI/CD', 'OOP', 'CRUD',
    'AI Fundamentals', 'Cloud Computing'
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;