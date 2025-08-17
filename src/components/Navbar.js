import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img 
            src={logoImage} 
            alt="Place of Grace Community Centre Logo" 
            className="logo-image"
          />
          <div className="logo-text-container">
            <span className="logo-text-main">Place of Grace</span>
            <span className="logo-text-sub">Community Centre</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links-desktop">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link 
            to="/programs" 
            className={`nav-link ${isActive('/programs') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Programs
          </Link>
          <Link 
            to="/impact" 
            className={`nav-link ${isActive('/impact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Impact
          </Link>
          <Link 
            to="/get-involved" 
            className={`nav-link ${isActive('/get-involved') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            How to Help
          </Link>
          <Link 
            to="/gallery" 
            className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link 
            to="/news" 
            className={`nav-link ${isActive('/news') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            News
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        {/* Donate Button - Desktop */}
        <Link to="/get-involved" className="donate-button-desktop">
          Donate Now
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <img 
              src={logoImage} 
              alt="Place of Grace Logo" 
              className="mobile-logo-image"
            />
            <span className="mobile-logo-text">Place of Grace</span>
          </div>
          <button 
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>
        
        <div className="mobile-menu-links">
          <Link 
            to="/" 
            className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="mobile-nav-icon">🏠</span>
            Home
          </Link>
          <Link 
            to="/about" 
            className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="mobile-nav-icon">ℹ️</span>
            About Us
          </Link>
          <Link 
            to="/programs" 
            className={`mobile-nav-link ${isActive('/programs') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="mobile-nav-icon">📚</span>
            Programs
          </Link>
          <Link 
            to="/impact" 
            className={`mobile-nav-link ${isActive('/impact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="mobile-nav-icon">📊</span>
            Impact
          </Link>
          <Link 
            to="/get-involved" 
            className={`mobile-nav-link ${isActive('/get-involved') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="mobile-nav-icon">💪</span>
            How to Help
          </Link>
          <Link 
            to="/gallery" 
            className={`mobile-nav-link ${isActive('/gallery') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="mobile-nav-icon">🖼️</span>
            Gallery
          </Link>
          <Link 
            to="/news" 
            className={`mobile-nav-link ${isActive('/news') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="mobile-nav-icon">📰</span>
            News
          </Link>
          <Link 
            to="/contact" 
            className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span className="mobile-nav-icon">📞</span>
            Contact
          </Link>
        </div>

        {/* Mobile Donate Button */}
        <div className="mobile-menu-footer">
          <Link to="/get-involved" className="mobile-donate-button" onClick={closeMenu}>
            💝 Donate Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;