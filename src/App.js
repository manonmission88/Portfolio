import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Resume from './Components/Navbar/resume/resume';
import Home from './Components/Home/Home';
import Project from './Components/Navbar/projects/Projects';
import Experience from './Components/Navbar/experience/Experience';
import ExtraCurricular from './Components/Navbar/extraCurricular/ExtraCurricular';
import ContactSection from './Components/Navbar/contact/ContactSection';
import Gallery from './Components/Navbar/gallery/Gallery';
import ParticleBackground from './Components/ParticleBackground/ParticleBackground';
import BackgroundShapes from './Components/BackgroundShapes/BackgroundShapes';
import AIAgent from './Components/AIAgent/AIAgent';
import FloatingActionButton from './Components/FloatingActionButton/FloatingActionButton';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    localStorage.setItem("mode", mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

  useEffect(() => {
    document.body.className = mode === "light" ? "light-mode" : "dark-mode";
  }, [mode]);

  return (
    <div className="App">
      <BackgroundShapes />
      <ParticleBackground />
      <Navbar mode={mode} toggleMode={toggleMode} />

      <main className="page-sections">
        <section id="home" className="page-section">
          <Home />
        </section>
        <section id="projects" className="page-section">
          <Project />
        </section>
        <section id="experience" className="page-section">
          <Experience />
        </section>
        <section id="extracurricular" className="page-section">
          <ExtraCurricular />
        </section>
        <section id="resume" className="page-section">
          <Resume />
        </section>
        <section id="gallery" className="page-section">
          <Gallery />
        </section>
        <section id="contact" className="page-section">
          <ContactSection />
        </section>
      </main>

      <AIAgent />
      <FloatingActionButton />
    </div>
  );
}

export default App;
