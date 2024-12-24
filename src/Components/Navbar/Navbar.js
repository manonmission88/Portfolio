import React from 'react';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ mode, toggleMode }) {
    const changeColor = mode === "light" ? "black" : "white";
    const moon = <Icon icon="bytesize:moon" color={changeColor} />;
    const sun = <Icon icon="akar-icons:sun" color={changeColor} />;

    return (
        <nav className="navbar">
            <div className="logo"></div>
            <div className="navlinks">
                <ul>
                    <li>🏠 <Link to="/">Home</Link></li>
                    <li>📄 <Link to="/resume">Resume</Link></li>
                    <li>💾 <Link to="/projects">Projects</Link></li>
                    <li>💼 <Link to="/experience">Experience</Link></li>
                    <li>🎓 <Link to="/extracurricular">ExtraCurricular</Link></li>
                    <li>👤 <Link to="/about">About</Link></li>
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