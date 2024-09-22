import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import textData from './textData';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Resume from './Components/Navbar/resume/resume';
import Home from './Components/Home/Home';
import Project from './Components/Navbar/projects/Projects';
import Experience from './Components/Navbar/experience/Experience';

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
        <div className="heading">
          <h1>{textData.name}</h1>
        </div>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/about' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/experience' element={<Experience />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
