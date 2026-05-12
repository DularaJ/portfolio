// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">Welcome to my portfolio</div>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Dulara</span>
        </h1>
        <div className="hero-subtitle">
          Full Stack Developer & UI/UX Enthusiast
        </div>
        <p className="hero-description">
          I build exceptional and accessible digital experiences that help businesses grow.
          Specialized in React, Node.js, and MongoDB.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </button>
          <button 
            className="btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Exp</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">30+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;