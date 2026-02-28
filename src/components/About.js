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
  I am a <strong>Computer Science and Engineering student</strong> at 
  Guru Gobind Singh Indraprastha University, New Delhi, 
  with a strong foundation in <strong>full-stack development </strong> 
   and <strong>blockchain technologies</strong>.
</p>

<p>
  I specialize in building scalable web applications using the MERN stack 
  and developing decentralized applications with Solidity and Ethereum. 
  I enjoy solving complex problems, optimizing system performance, 
  and creating clean, user-focused digital experiences.
</p>

          {/* Education */}
          <div className="info-card mt-4">
            <h5><FaUserGraduate className="me-2" /> Education</h5>
            <ul className="list-unstyled mt-2">
              <li>
                <strong>B.Tech (CSE)</strong> — Guru Gobind Singh Indraprastha University (2023 - 2027)  
                <span className="text-muted"> • CGPA: 8.75</span>
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

  <p>
    <strong>Frontend Development Virtual Intern | AICTE – EduNet Foundation (IBM)</strong>  
    <br />
    <small>Aug 2025 – Sep 2025</small><br />
    Worked on responsive UI development using HTML, CSS, JavaScript, and React.js. 
    Applied component-based architecture, Git version control, and UI debugging best practices.
  </p>

  <p className="mb-0">
    Participant in <strong>Hackathon CODE4CAUSE 2.0 (NSUT)</strong> — built an AI-powered 
    “Lost & Found” platform integrated with the Aptos blockchain.
  </p>
</div>
        </div>
      </div>
    </section>
  );
}
