import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../styles/projects.css";

const projects = [
  {
  id: 'p1',
  title: 'FinOS',
  tech: 'MERN Stack, Setu AA APIs, OAuth, Razorpay',
  short: 'Financial management platform with real-time insights and AI-powered tools.',
  details: 'Developed a full-stack financial platform enabling secure bank account integration using Setu AA APIs, real-time transaction tracking, expense analysis, and net worth monitoring. Implemented OAuth authentication, AI financial advisor, budget allocator, tax calculator, portfolio tracking, and Razorpay-based tiered subscriptions (Free, Pro, Premium).',
  github: 'https://github.com/Sourabhgupta-11/FinOS',
  demo: 'https://fin-os-ten.vercel.app'
},
{
    id: 'p2',
    title: 'Decentralized Drive',
    tech: 'Solidity, React.js, Ethereum (Sepolia), IPFS, MetaMask',
short: 'Web3 decentralized file-sharing platform with smart contracts and IPFS storage.',

details: 'Engineered a blockchain-based file-sharing application using Solidity smart contracts on Ethereum Sepolia and IPFS for decentralized storage. Integrated a React.js frontend with MetaMask authentication to enable secure file uploads and controlled access.',
    github: 'https://github.com/Sourabhgupta-11/Decentralized-google-drive',
    demo: 'https://decentralized-google-drive-seven.vercel.app/'
  },
  {
  id: 'p3',
  title: 'Golf Charity Platform',
  tech: 'React.js, Supabase, Razorpay, Bootstrap',
  short: 'Charity event platform with donations and real-time tracking.',
  details: 'Built a web-based platform for organizing and participating in golf charity events with Supabase-based authentication and data management. Features include event browsing, secure Razorpay donations, real-time fundraising tracking, and dashboards for managing events and participants.',
  github: 'https://github.com/Sourabhgupta-11/golf-charity-platform',
  demo: 'https://golf-charity-platform-ltvl.vercel.app'
},
{
    id: 'p4',
    title: 'College Attendance System',
    tech: 'MERN + JWT + Charts',
    short: 'Role-based attendance system with dashboards and analytics.',
    details: 'Role-based college attendance management system with separate dashboards for students, teachers and admins; includes charts and statistics.',
    github: 'https://github.com/RG2445/College-Attendance-Record',
    demo: 'https://college-attendance-record-1.onrender.com/'
  },
  {
    id: 'p5',
    title: 'TenderHub',
    tech: 'MERN + Cloudinary',
    short: 'B2B tender management platform with company profiles & file uploads.',
    details: 'Built a B2B tender management platform enabling companies to publish tenders, manage applications, and search by name, industry, or service. Supports Cloudinary uploads.',
    github: 'https://github.com/Sourabhgupta-11/-B2B-TenderHub',
    demo: 'https://b2b-tender-hub.vercel.app'
  },{
    id: 'p6',
    title: 'TrendWise',
    tech: 'MERN + SEO',
    short: 'SEO-optimized blog platform with AI-generated articles and Google Auth.',
    details: 'SEO-optimized blog platform featuring AI-generated articles, Google authentication, comment system and admin panel for content management.',
    github: 'https://github.com/Sourabhgupta-11/Trendwise',
    demo: 'https://trendwise-swart.vercel.app'
  },
  {
    id: 'p7',
    title: 'Blockchain To-Do Application',
    tech: 'Solidity, Node.js, Express.js, React.js, Ethereum (Sepolia)',
short: 'Decentralized task management app with on-chain storage and REST API integration.',

details: 'Built a blockchain-based To-Do application using Solidity smart contracts on Ethereum Sepolia for on-chain task storage. Integrated a Node.js/Express REST API and React.js frontend to enable efficient task retrieval and full CRUD functionality.',
    github: 'https://github.com/Sourabhgupta-11/Todo_BERN_App',
    demo: 'https://todo-bern-app.vercel.app/'
  },{
    id: 'p8',
    title: 'iNotebook',
    tech: 'MERN Stack',
    short: 'Full-stack notes app with JWT auth and CRUD operations.',
    details: 'Designed and deployed a full-stack note-taking app with JWT authentication and secure CRUD operations. Persistent storage in MongoDB.',
    github: 'https://github.com/Sourabhgupta-11/iNoteBook',
    demo: 'https://i-note-book-lime.vercel.app'
  }
];

export default function Projects() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <section id="projects" className="py-5" data-aos="fade-left">
      <div className="container">
        {/* Section title */}
        <div className="section-title-wrapper">
          <h2 className="section-title">Projects</h2>
          <span className="section-subtitle">Some things I’ve built recently</span>
        </div>

        {/* Project cards */}
        <div className="row">
          {projects.map((proj) => (
            <div key={proj.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm project-card">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="text-muted small">{proj.tech}</p>
                  <p className="card-text">{proj.short}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div>
                      <button
                        className="btn btn-outline-primary btn-sm me-2"
                        onClick={() => setOpenModal(proj.id)}
                      >
                        Details
                      </button>
                      <a
                        className="btn btn-outline-dark btn-sm"
                        href={proj.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo <FaExternalLinkAlt style={{ verticalAlign: 'middle' }} />
                      </a>
                    </div>
                    <a
                      className="btn btn-primary btn-sm"
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />&nbsp;Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Modal */}
              {openModal === proj.id && (
                <div
                  className="modal fade show"
                  style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
                  onClick={() => setOpenModal(null)} // clicking outside closes modal
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{proj.title}</h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setOpenModal(null)}
                        ></button>
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
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setOpenModal(null)}
                        >
                          Close
                        </button>
                        <a
                          className="btn btn-primary"
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
