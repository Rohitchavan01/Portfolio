import React from 'react';
import '../../styles/components/Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web app built with React.',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'A Node.js backend service.',
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'A Python data analysis tool.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;