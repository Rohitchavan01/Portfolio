import React from 'react';
import '../../styles/components/About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="https://tse2.mm.bing.net/th/id/OIP.GQZAm9Jw9O0w8_K1Dehw8gHaHa?pid=Api&P=0&h=180" alt="Profile" className="profile-pic" />
        <div className="about-text">
          <p>Hello! I'm Rohit Chavan, a passionate full-stack developer with experience in React, Node.js, and more. I love creating web applications that solve real-world problems.</p>
          <p>When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.</p>
        </div>
      </div>
    </section>
  );
}

export default About;