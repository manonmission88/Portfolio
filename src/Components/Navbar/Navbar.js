import React from 'react';
import { Icon } from "@iconify/react";
import './Navbar.css';

function Navbar({ mode, toggleMode }) {
    const moon = <Icon icon="bytesize:moon" color="gray" />;
    const sun = <Icon icon="akar-icons:sun" color="orange" />;

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#home">
                    <span className="logo-text">Portfolio</span>
                </a>
            </div>
            <div className="navlinks">
                <ul>
                    <li>
                        <Icon icon="fa6-solid:house" color="#0078FF" /> <a href="#home">Home</a>
                    </li>
        
                    <li>
                        <Icon icon="fa6-solid:folder" color="#FFC107" /> <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <Icon icon="fa6-solid:briefcase" color="#FF5722" /> <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <Icon icon="fa6-solid:graduation-cap" color="#6A1B9A" /> <a href="#extracurricular">ExtraCurricular</a>
                    </li>
                    <li>
                        <Icon icon="fa6-solid:file-lines" color="#00C853" /> <a href="#resume">Resume</a>
                    </li>
                    <li>
                        <Icon icon="mdi:camera-image" color="#D500F9" /> <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <Icon icon="mdi:email" color="#FF1744" /> <a href="#contact">Contact</a>
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
