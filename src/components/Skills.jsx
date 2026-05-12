// src/components/Skills.jsx
import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90, color: '#61DAFB' },
        { name: 'JavaScript', level: 88, color: '#F7DF1E' },
        { name: 'HTML5/CSS3', level: 85, color: '#E34F26' },
        { name: 'Tailwind CSS', level: 87, color: '#06B6D4' },
        { name: 'Bootstrap', level: 82, color: '#7952B3' },
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Express.js', level: 83, color: '#FFFFFF' },
        { name: 'Python', level: 80, color: '#3776AB' },
        { name: 'MongoDB', level: 82, color: '#47A248' },
        { name: 'PostgreSQL', level: 78, color: '#4169E1' },
      ]
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 85, color: '#F05032' },
        { name: 'Docker', level: 75, color: '#2496ED' },
        { name: 'AWS', level: 70, color: '#FF9900' },
        { name: 'Figma', level: 80, color: '#F24E1E' },
        { name: 'RESTful APIs', level: 88, color: '#FF6C37' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">My Skills</span>
          <h2 className="section-title">What I'm Good At</h2>
          <div className="section-divider"></div>
        </div>

        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category.name}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: animated ? `${skill.level}%` : '0%',
                        backgroundColor: skill.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;