import React from "react";
import "../styles/about.css";
import { FaUserGraduate, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-5" data-aos="fade-right">
      <div className="container">
        <div className="section-title-wrapper">
        <h2 className="section-title">About Me</h2>
        <span className="section-subtitle">Who I am & what I do</span>
        </div>


        <div className="col-md-10 mx-auto">
          <p className="lead">
            I am an <strong>aspiring Computer Science and Engineering student</strong> with a strong passion
            for <strong>problem-solving</strong> and <strong>emerging technologies</strong>.  
            Currently pursuing B.Tech in CSE at Guru Gobind Singh Indraprastha University, New Delhi.
          </p>
          <p>
            I enjoy building <strong>web applications (MERN)</strong>, learning algorithms & data structures,
            and participating in hackathons. I focus on writing clean, maintainable code and building
            user-friendly interfaces.
          </p>

          {/* Education */}
          <div className="info-card mt-4">
            <h5><FaUserGraduate className="me-2" /> Education</h5>
            <ul className="list-unstyled mt-2">
              <li>
                <strong>B.Tech (CSE)</strong> — Guru Gobind Singh Indraprastha University (2023 - 2027)  
                <span className="text-muted"> • CGPA: 8.74</span>
              </li>
              <li>
                <strong>Senior Secondary</strong> — D.A.V Public School  
                <span className="text-muted"> • 94.6%</span>
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="info-card mt-4">
            <h5><FaBriefcase className="me-2" /> Experience</h5>
            <p className="mb-0">
              Participant in <strong>Hackathon CODE4CAUSE 2.0 (NSUT)</strong> — built an AI-powered
              "Lost and Found" platform integrated with blockchain (Aptos).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
