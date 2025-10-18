import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Biju Patnaik University of Technology",
      period: "June 2022 – June 2024",
      score: "8.5 CGPA"
    }
  ];

  const certifications = [
    "NPTEL Certification – Cloud Computing",
    "NPTEL Certification – Data Mining", 
    "NPTEL Certification – Internet of Things"
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="education-content">
          <div className="education-item">
            <h3 className="degree">{education[0].degree}</h3>
            <h4 className="institution">{education[0].institution}</h4>
            <span className="period">{education[0].period}</span>
            <span className="score">{education[0].score}</span>
          </div>
          
          <div className="certifications">
            <h3>Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;