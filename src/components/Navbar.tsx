import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav>
        <Link to="/" className="logo-wrap">
          <img src={logo} alt="Reshma Qureshi Artificial Jewellery Manufacturer Logo" className="brand-logo" width="200" height="60" fetchPriority="high" decoding="async" />
        </Link>

        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
        </ul>

        <a href="https://wa.me/918310696529" target="_blank" rel="noopener noreferrer" className="btn-nav">
          Get In Touch
        </a>

        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={toggleMenu}>✕</button>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/products" onClick={toggleMenu}>Products</Link>
        <Link to="/about" onClick={toggleMenu}>About Us</Link>
        <a href="https://wa.me/918310696529" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Get In Touch</a>
      </div>
    </>
  );
}
