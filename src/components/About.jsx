// src/components/About.jsx
import React from 'react';

const About = () => {
  const experiences = [
    { year: '2022-Present', role: 'Senior Full Stack Developer', company: 'Tech Corp', description: 'Leading development of enterprise web applications and mentoring junior developers.' },
    { year: '2020-2022', role: 'React Developer', company: 'Web Solutions', description: 'Built responsive web applications and optimized performance for client projects.' },
    { year: '2018-2020', role: 'Frontend Developer', company: 'StartUp Inc', description: 'Developed user interfaces and collaborated with design team on UI/UX improvements.' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">Who Am I?</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Passionate Developer Creating Amazing Web Experiences</h3>
            <p>
              I'm a Full Stack Developer with over 5 years of experience in building
              web applications. I love creating solutions that are not only functional
              but also visually appealing and user-friendly.
            </p>
            <p>
              My journey in web development started during my college years, and since
              then, I've worked with various technologies and frameworks to deliver
              high-quality projects for clients worldwide.
            </p>
            <p>
              I believe in continuous learning and staying up-to-date with the latest 
              technologies. When I'm not coding, you can find me contributing to open 
              source projects or mentoring aspiring developers.
            </p>
            
            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Dulara</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">dulara@example.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Sri Lanka</span>
              </div>
              <div className="info-item">
                <span className="info-label">Freelance:</span>
                <span className="info-value">Available</span>
              </div>
            </div>
          </div>

          <div className="experience-timeline">
            <h3>Work Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{exp.year}</div>
                <div className="timeline-content">
                  <h4>{exp.role}</h4>
                  <p className="company">{exp.company}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;