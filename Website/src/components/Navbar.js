import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = () => {
    closeMenu();
    scrollToTop();
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/" onClick={scrollToTop}>
            <img src="/assets/logo.jpg" alt="Place of Grace Children's Home Logo" />
            <span className="logo-text">Place of Grace</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="navbar-links-desktop">
          <Link to="/" onClick={handleNavClick} className="nav-link">
            <span>Home</span>
          </Link>
          <Link to="/about" onClick={handleNavClick} className="nav-link">
            <span>About Us</span>
          </Link>
          <Link to="/programs" onClick={handleNavClick} className="nav-link">
            <span>Programs</span>
          </Link>
          <Link to="/impact" onClick={handleNavClick} className="nav-link">
            <span>Impact</span>
          </Link>
          <Link to="/get-involved" onClick={handleNavClick} className="nav-link">
            <span>How to Help</span>
          </Link>
          <Link to="/gallery" onClick={handleNavClick} className="nav-link">
            <span>Gallery</span>
          </Link>
          <Link to="/news" onClick={handleNavClick} className="nav-link">
            <span>News</span>
          </Link>
          <Link to="/contact" onClick={handleNavClick} className="nav-link">
            <span>Contact</span>
          </Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="navbar-actions-desktop">
          <div className="language-switcher">
            <button className="lang-button active">EN</button>
            <span className="separator">|</span>
            <button className="lang-button">SW</button>
          </div>
          <Link to="/get-involved" className="donate-button-desktop" onClick={handleNavClick}>
            <span>Donate Now</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <img src="/assets/logo.jpg" alt="Place of Grace Children's Home Logo" />
              <span>Place of Grace</span>
            </div>
            <button className="close-menu" onClick={closeMenu} aria-label="Close menu">
              <span>×</span>
            </button>
          </div>
          
          <div className="mobile-menu-links">
            <Link to="/" onClick={handleNavClick} className="mobile-nav-link">
              <span>🏠 Home</span>
            </Link>
            <Link to="/about" onClick={handleNavClick} className="mobile-nav-link">
              <span>ℹ️ About Us</span>
            </Link>
            <Link to="/programs" onClick={handleNavClick} className="mobile-nav-link">
              <span>🎯 Programs</span>
            </Link>
            <Link to="/impact" onClick={handleNavClick} className="mobile-nav-link">
              <span>📊 Impact</span>
            </Link>
            <Link to="/get-involved" onClick={handleNavClick} className="mobile-nav-link">
              <span>🤝 How to Help</span>
            </Link>
            <Link to="/gallery" onClick={handleNavClick} className="mobile-nav-link">
              <span>📸 Gallery</span>
            </Link>
            <Link to="/news" onClick={handleNavClick} className="mobile-nav-link">
              <span>📰 News</span>
            </Link>
            <Link to="/contact" onClick={handleNavClick} className="mobile-nav-link">
              <span>📞 Contact</span>
            </Link>
          </div>

          <div className="mobile-menu-actions">
            <div className="mobile-language-switcher">
              <button className="mobile-lang-button active">English</button>
              <button className="mobile-lang-button">Swahili</button>
            </div>
            <Link to="/get-involved" className="mobile-donate-button" onClick={handleNavClick}>
              <span>💝 Donate Now</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      </div>
    </nav>
  );
};

export default Navbar;