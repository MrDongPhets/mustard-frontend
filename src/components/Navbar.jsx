import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/nav.css';
import logo from '../assets/mustard.png'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [theme,     setTheme]     = useState(() => localStorage.getItem('md-theme') || 'dark');

  // Apply theme to <body>
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('md-theme', theme);
  }, [theme]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <header>
      <div className={`nav${scrolled ? ' scrolled' : ''}`}>
        {/* Brand */}
        <div className="brand">
          <Link to="/">
            <div className="logo-img">
              <img src={logo} alt="Mustard Digitals" />
            </div>
          </Link>
        </div>

        {/* Main nav */}
        <nav className={`main-nav${menuOpen ? ' active' : ''}`} id="mainNav">
          <NavLink to="/"          className="nav-link" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about"     className="nav-link" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services"  className="nav-link" onClick={closeMenu}>Services</NavLink>
         {/* <NavLink to="/portfolio" className="nav-link" onClick={closeMenu}>Portfolio</NavLink>
          <NavLink to="/contact"   className="nav-link" onClick={closeMenu}>Contact</NavLink> */}
          <NavLink to="/free-trial" className="nav-cta-btn" onClick={closeMenu}>Free Trial</NavLink>
        </nav>

        {/* Controls */}
        <div className="controls">
          <div className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </div>
          <div
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </div>
        </div>
      </div>
    </header>
  );
}
