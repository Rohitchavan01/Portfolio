import React from 'react';
import '../../styles/components/Skills.css';

function Skills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'HTML/CSS', 'Git'];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;