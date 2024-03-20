import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to import your CSS file for styling

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-links">
                <Link to='/resume'>Resume</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/about'>About</Link>
                
            </div>
        </div>
    );
}

export default Navbar;
