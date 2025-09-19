import React from 'react';
import "../styles/hero.css";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero text-center py-5"
      style={{ paddingTop: '40px', background: "var(--bg)", color: "var(--text)" }}
      data-aos="fade-up"
    >
      <div className="container">
        <h1 className="display-5 fw-bold">
          Hi, I'm <span style={{ color: "var(--accent)" }}>Sourabh Gupta</span>
        </h1>
        <p className="lead mt-3" style={{ color: "var(--muted)" }}>
          Aspiring CSE Engineer • Problem Solver • Web Developer
        </p>
        <div className="mt-4">
          <a href="#projects" className="btn btn-primary btn-lg me-2">View Projects</a>
          <a href="#contact" className="btn btn-get-in-touch btn-lg">Get in touch</a>

        </div>
      </div>
    </section>
  );
}
