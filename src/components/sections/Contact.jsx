import React from 'react';
import '../../styles/components/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <p>Feel free to reach out!</p>
        <p>Email: john.doe@example.com</p>
        <p>LinkedIn: <a href="#">linkedin.com/in/johndoe</a></p>
        <p>GitHub: <a href="#">github.com/johndoe</a></p>
      </div>
    </section>
  );
}

export default Contact;