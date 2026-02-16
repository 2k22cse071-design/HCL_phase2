import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 892fa2a182576ff8e6fd810cd748cb11f6702245
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
<<<<<<< HEAD
            <div className="navbar-brand"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>GitCollab</Link></div>
=======
            <div className="navbar-brand">GitCollab</div>
>>>>>>> 892fa2a182576ff8e6fd810cd748cb11f6702245

            <div className="menu-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
<<<<<<< HEAD
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                {/* <li><a href="#features">Features</a></li> */}
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
=======
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
>>>>>>> 892fa2a182576ff8e6fd810cd748cb11f6702245
            </ul>
        </nav>
    );
};

export default Navbar;
