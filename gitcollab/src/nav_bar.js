import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>GitCollab</Link></div>

            <div className="menu-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                {/* <li><a href="#features">Features</a></li> */}
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
