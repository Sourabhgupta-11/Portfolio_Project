import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import "../styles/projects.css";

/* Replace links to demos/GitHub as needed. */
const projects = [
  {
    id: 'p1',
    title: 'Amazon Clone',
    tech: 'HTML, CSS, JavaScript',
    short: 'Responsive e-commerce UI replicating Amazon homepage with product grid and interactions.',
    details: 'Built a fully responsive e-commerce homepage replicating Amazon’s UI. Implemented interactive features like navigation, product listings, and hover effects for enhanced user experience across devices.',
    github: 'https://github.com/Sourabhgupta-11',
    demo: '#'
  },
  {
    id: 'p2',
    title: 'News App',
    tech: 'React, News API',
    short: 'Real-time news dashboard with filters, infinite scroll and loading states.',
    details: 'Created a dynamic news dashboard in React that fetches real-time news articles. Integrated category-based filtering, infinite scroll/pagination, and loading spinners.',
    github: 'https://github.com/Sourabhgupta-11',
    demo: '#'
  },
  {
    id: 'p3',
    title: 'iNotebook',
    tech: 'MERN Stack',
    short: 'Full-stack notes app with JWT auth and CRUD operations.',
    details: 'Designed and deployed a full-stack note-taking app with JWT authentication and secure CRUD operations. Persistent storage in MongoDB.',
    github: 'https://github.com/Sourabhgupta-11',
    demo: '#'
  },
  {
    id: 'p4',
    title: 'TrendWise',
    tech: 'MERN + SEO',
    short: 'SEO-optimized blog platform with AI-generated articles and Google Auth.',
    details: 'SEO-optimized blog platform featuring AI-generated articles, Google authentication, comment system and admin panel for content management.',
    github: 'https://github.com/Sourabhgupta-11',
    demo: '#'
  },
  {
    id: 'p5',
    title: 'TenderHub',
    tech: 'MERN + Cloudinary',
    short: 'B2B tender management platform with company profiles & file uploads.',
    details: 'Built a B2B tender management platform enabling companies to publish tenders, manage applications, and search by name, industry, or service. Supports Cloudinary uploads.',
    github: 'https://github.com/Sourabhgupta-11',
    demo: '#'
  },
  {
    id: 'p6',
    title: 'College Attendance System',
    tech: 'MERN + JWT + Charts',
    short: 'Role-based attendance system with dashboards and analytics.',
    details: 'Role-based college attendance management system with separate dashboards for students, teachers and admins; includes charts and statistics.',
    github: 'https://github.com/Sourabhgupta-11',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5" data-aos="fade-left">
      <div className="container">
       <div className="section-title-wrapper">
        <h2 className="section-title">Projects</h2>
<span className="section-subtitle">Some things I’ve built recently</span>
</div>

        <div className="row">
          {projects.map(proj => (
            <div key={proj.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm project-card">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="text-muted small">{proj.tech}</p>
                  <p className="card-text">{proj.short}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div>
                      <button className="btn btn-outline-primary btn-sm me-2" data-bs-toggle="modal" data-bs-target={`#modal-${proj.id}`}>
                        Details
                      </button>
                      <a className="btn btn-outline-dark btn-sm" href={proj.demo} target="_blank" rel="noreferrer">
                        Demo <FaExternalLinkAlt style={{verticalAlign:'middle'}}/>
                      </a>
                    </div>
                    <a className="btn btn-primary btn-sm" href={proj.github} target="_blank" rel="noreferrer">
                      <FaGithub />&nbsp;Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Modal */}
              <div className="modal fade" id={`modal-${proj.id}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{proj.title}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Tech:</strong> {proj.tech}</p>
                      <p>{proj.details}</p>
                      <p><strong>Links:</strong></p>
                      <ul>
                        <li><a href={proj.github} target="_blank" rel="noreferrer">GitHub Repository</a></li>
                        <li><a href={proj.demo} target="_blank" rel="noreferrer">Live Demo</a></li>
                      </ul>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <a className="btn btn-primary" href={proj.github} target="_blank" rel="noreferrer">View Code</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
