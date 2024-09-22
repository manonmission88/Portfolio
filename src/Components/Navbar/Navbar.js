import React from 'react';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ mode, toggleMode }) {
    const changeColor = mode === "light" ? "black" : "white";
    const moon = <Icon icon="bytesize:moon" color={changeColor} />;
    const sun = <Icon icon="akar-icons:sun" color={changeColor} />;

    return (
        <div className="navbar">
            <div className="nav-links">
                <Link to='/resume'>Resume</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="btn">
                <button type="button" className="btn1" onClick={toggleMode}>
                    {mode === "light" ? moon : sun}
                </button>
            </div>
        </div>
    );
}

export default Navbar;
