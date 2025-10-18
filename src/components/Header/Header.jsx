import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-text" onClick={closeMenu}>
            Biswobhusan
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/skills" 
                className={isActive('/skills') ? 'active' : ''}
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/experience" 
                className={isActive('/experience') ? 'active' : ''}
                onClick={closeMenu}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/projects" 
                className={isActive('/projects') ? 'active' : ''}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/education" 
                className={isActive('/education') ? 'active' : ''}
                onClick={closeMenu}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/skills" onClick={closeMenu}>Skills</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/experience" onClick={closeMenu}>Experience</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/projects" onClick={closeMenu}>Projects</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/education" onClick={closeMenu}>Education</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Overlay for mobile menu */}
        <div 
          className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={closeMenu}
        ></div>
      </div>
    </header>
  );
};

export default Header;