import React from "react";
import "../styles/skills.css";

const skills = {
  "Programming Languages": ["C", "C++", "Python"],
  "Frontend Development": ["JavaScript", "React"],
  "Backend Development": ["Node.js", "Express"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  "Tools & Platforms": ["Git", "GitHub", "Postman"],
  Deployment: ["Netlify", "Vercel", "Render"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-5" data-aos="zoom-in">
      <div className="container">
        <div className="section-title-wrapper"> 
        <h2 className="section-title">Skills</h2>
<span className="section-subtitle">Technologies & Tools I work with</span>
</div>


        <div className="row g-4">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="skill-card">
                <h5 className="skill-category-title">{category}</h5>
                <div className="skill-list">
                  {items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <small className="text-muted">
            Problem Solving • Data Structures & Algorithms • Full-stack
            Development
          </small>
        </div>
      </div>
    </section>
  );
}
