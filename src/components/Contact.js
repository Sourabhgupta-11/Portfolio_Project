import React from 'react';
import "../styles/contact.css";

import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-5" data-aos="fade-up">
      <div className="container text-center">
        <h2 className="mb-4">Contact Me</h2>
        <p className="mb-1"><FaEnvelope />&nbsp;
          <a href="mailto:sourabhgupta.1331@gmail.com">sourabhgupta.1331@gmail.com</a>
        </p>
        <p className="mb-3"><FaPhone />&nbsp;+91 8383890370</p>

        <div className="mb-3">
          <a className="btn btn-outline-primary me-2" href="https://www.linkedin.com/in/sourabhgupta22/" target="_blank" rel="noreferrer"><FaLinkedin />&nbsp;LinkedIn</a>
          <a className="btn btn-outline-dark me-2" href="https://github.com/Sourabhgupta-11" target="_blank" rel="noreferrer"><FaGithub />&nbsp;GitHub</a>
          <a className="btn btn-outline-success" href="https://leetcode.com/Sourabh2211" target="_blank" rel="noreferrer">LeetCode</a>
        </div>

        <p className="text-muted small">Prefer email? Send a message and I’ll get back to you ASAP.</p>
      </div>
    </section>
  );
}
