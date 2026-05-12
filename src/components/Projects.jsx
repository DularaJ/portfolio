// src/components/Projects.jsx
import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600',
      demo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'frontend',
      description: 'Productivity app with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['React', 'Firebase', 'Tailwind', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600',
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Social Media API',
      category: 'backend',
      description: 'RESTful API for social media platform with JWT authentication, real-time chat, and file uploads.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600',
      demo: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'frontend',
      description: 'Real-time weather application with interactive maps, 7-day forecast, and weather alerts.',
      tech: ['React', 'API', 'Chart.js', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600',
      demo: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'frontend',
      description: 'Modern portfolio website with smooth animations and responsive design.',
      tech: ['React', 'CSS3', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
      demo: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Blog Platform',
      category: 'fullstack',
      description: 'Full-stack blog platform with markdown support, comments, and user profiles.',
      tech: ['React', 'Node.js', 'MongoDB', 'Markdown'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600',
      demo: '#',
      github: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">My Recent Work</h2>
          <div className="section-divider"></div>
          <p className="section-description">Here are some of my favorite projects I've worked on</p>
        </div>

        <div className="project-filters">
          {['all', 'frontend', 'backend', 'fullstack'].map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;