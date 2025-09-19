import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import AOS from 'aos';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

