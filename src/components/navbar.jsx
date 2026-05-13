// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Map display names to section IDs
  const getSectionId = (itemName) => {
    const mapping = {
      'Home': 'home',
      'About': 'about',
      'Skills': 'skills',
      'Projects': 'projects',
      'Blog': 'posts',      // Blog maps to 'posts' ID
      'Contact': 'contact'
    };
    return mapping[itemName];
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll
      const sections = ['home', 'about', 'skills', 'projects', 'posts', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          Dulara.dev
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item}
              className={`nav-link ${activeSection === getSectionId(item) ? 'active' : ''}`}
              onClick={() => scrollToSection(getSectionId(item))}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;