import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <div className="menu-container">
          <div className={`kebab-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <ul className={`navbar ${menuOpen ? 'open' : ''}`}>
            <li><a href="#/Home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#/Poetry" onClick={toggleMenu}>Poetry</a></li>
            <li><a href="#/Songs" onClick={toggleMenu}>Songwriting</a></li>
            <li><a href="#/Visual" onClick={toggleMenu}>Visual Art</a></li>
            <li><a href="#/Demos" onClick={toggleMenu}>Demos</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
