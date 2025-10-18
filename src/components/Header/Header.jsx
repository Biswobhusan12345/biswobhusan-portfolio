import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Biswobhusan</span>
        </div>
        

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="home" onClick={closeMenu}>Home</a></li>
            <li className="nav-item"><a href="about" onClick={closeMenu}>About</a></li>
            <li className="nav-item"><a href="skills" onClick={closeMenu}>Skills</a></li>
            <li className="nav-item"><a href="experience" onClick={closeMenu}>Experience</a></li>
            <li className="nav-item"><a href="projects" onClick={closeMenu}>Projects</a></li>
            <li className="nav-item"><a href="education" onClick={closeMenu}>Education</a></li>
            <li className="nav-item"><a href="contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>

        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <a href="home" onClick={closeMenu}>Home</a>
            </li>
            <li className="mobile-nav-item">
              <a href="about" onClick={closeMenu}>About</a>
            </li>
            <li className="mobile-nav-item">
              <a href="skills" onClick={closeMenu}>Skills</a>
            </li>
            <li className="mobile-nav-item">
              <a href="experience" onClick={closeMenu}>Experience</a>
            </li>
            <li className="mobile-nav-item">
              <a href="projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="mobile-nav-item">
              <a href="education" onClick={closeMenu}>Education</a>
            </li>
            <li className="mobile-nav-item">
              <a href="contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>

        <div 
          className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={closeMenu}
        ></div>
      </div>
    </header>
  );
};

export default Header;