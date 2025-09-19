import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero text-center bg-light py-5" style={{paddingTop: '40px'}} data-aos="fade-up">
      <div className="container">
        <h1 className="display-5 fw-bold">Hi, I'm <span style={{color:'#0d6efd'}}>Sourabh Gupta</span></h1>
        <p className="lead mt-3">Aspiring CSE Engineer • Problem Solver • Web Developer</p>
        <div className="mt-4">
          <a href="#projects" className="btn btn-primary btn-lg me-2">View Projects</a>
          <a href="#contact" className="btn btn-outline-dark btn-lg">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
