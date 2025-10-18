import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91-7008539084</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>biswobhusanbal@zohomail.in</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Bangalore, India</p>
              </div>
            </div>
          </div>
          <div className="contact-cta">
            <h3>Ready to collaborate?</h3>
            <p>I'm always open to discussing new opportunities and innovative projects.</p>
            <button 
              className="cta-button"
              onClick={() => window.open('mailto:biswobhusanbal@zohomail.in')}
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;