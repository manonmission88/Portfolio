import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Resume from './Components/Navbar/resume/resume';
import Home from './Components/Home/Home';
import Project from './Components/Navbar/projects/Projects';
import Experience from './Components/Navbar/experience/Experience';
import ExtraCurricular from './Components/Navbar/extraCurricular/ExtraCurricular';
import ContactSection from './Components/Navbar/contact/ContactSection';
import Gallery from './Components/Navbar/gallery/Gallery';


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
    <Router>
      <div className="App">
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/extracurricular' element={<ExtraCurricular />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<ContactSection />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
