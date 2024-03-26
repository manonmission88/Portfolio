import React from 'react';
import { BrowserRouter as  Router,Routes, Route } from 'react-router-dom';
import textData from './textData';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Resume from './Components/Navbar/resume/resume';
import Home from './Components/Home/Home';
import Project from './Components/Navbar/projects/Projects';



function App() {
  return (
    <Router>
      <div className="App">
        <div className="heading">
          <h1>{textData.name}</h1>
        </div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/about' element={<Home />} />
          <Route path='/projects' element={<Project />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
