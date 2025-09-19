import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">Sourabh Gupta</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-3">
              <button className="btn btn-outline-light btn-sm" onClick={toggleTheme} title="Toggle dark mode">
                {theme === 'dark' ? <><FaSun />&nbsp;Light</> : <><FaMoon />&nbsp;Dark</>}
              </button>
            </li>
            <li className="nav-item ms-2">
              <a className="btn btn-primary btn-sm" href="resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
