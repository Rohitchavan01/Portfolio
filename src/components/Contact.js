import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <p>Feel free to reach out!</p>
        <p>Email: rohit.chavan@gmail.com</p>
        <p>LinkedIn: <a href="#">linkedin.com/in/rohit-chavan</a></p>
        <p>GitHub: <a href="#">github.com/rohit-chavan</a></p>
      </div>
    </section>
  );
}

export default Contact;