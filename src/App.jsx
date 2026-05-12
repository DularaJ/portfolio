// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        {/* Sections */}
        <section id="home" style={{ minHeight: '100vh', padding: '4rem 2rem', backgroundColor: '#111827' }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to My Portfolio</h1>
            <p style={{ fontSize: '1.25rem', color: '#9ca3af' }}>Full Stack Developer</p>
          </div>
        </section>

        <section id="about" style={{ minHeight: '100vh', padding: '4rem 2rem', backgroundColor: '#1f2937' }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: '#9ca3af' }}>I'm a passionate developer creating amazing web experiences.</p>
          </div>
        </section>

        <section id="skills" style={{ minHeight: '100vh', padding: '4rem 2rem', backgroundColor: '#111827' }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>My Skills</h2>
            <p style={{ color: '#9ca3af' }}>React, Node.js, MongoDB, and more...</p>
          </div>
        </section>

        <section id="projects" style={{ minHeight: '100vh', padding: '4rem 2rem', backgroundColor: '#1f2937' }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>My Projects</h2>
            <p style={{ color: '#9ca3af' }}>Check out my latest work</p>
          </div>
        </section>

        <section id="contact" style={{ minHeight: '100vh', padding: '4rem 2rem', backgroundColor: '#111827' }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Me</h2>
            <p style={{ color: '#9ca3af' }}>Let's work together</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;