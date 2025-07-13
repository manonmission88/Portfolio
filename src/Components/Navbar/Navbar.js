import React from 'react';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ mode, toggleMode }) {
    const moon = <Icon icon="bytesize:moon" color="gray" />;
    const sun = <Icon icon="akar-icons:sun" color="orange" />;

    return (
        <nav className="navbar">
            <div className="logo"></div>
            <div className="navlinks">
                <ul>
                    <li>
                        <Icon icon="fa6-solid:house" color="#0078FF" /> <Link to="/">Home</Link>
                    </li>
        
                    <li>
                        <Icon icon="fa6-solid:folder" color="#FFC107" /> <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Icon icon="fa6-solid:briefcase" color="#FF5722" /> <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Icon icon="fa6-solid:graduation-cap" color="#6A1B9A" /> <Link to="/extracurricular">ExtraCurricular</Link>
                    </li>
                    <li>
                        <Icon icon="fa6-solid:file-lines" color="#00C853" /> <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Icon icon="mdi:camera-image" color="#D500F9" /> <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Icon icon="mdi:email" color="#FF1744" /> <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="btn">
                <button type="button" className="btn1" onClick={toggleMode}>
                    {mode === "light" ? moon : sun}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
