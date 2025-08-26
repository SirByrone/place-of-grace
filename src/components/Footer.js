import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { openPhone, openSocialMedia } from '../utils/externalAppIntegration';
import './Footer.css';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneClick = (e) => {
    e.preventDefault();
    openPhone('+254722860321');
  };

  const handleSocialMediaClick = (platform, identifier) => {
    openSocialMedia(platform, identifier);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/impact">Our Impact</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p className="address-info">📍 Donholm Phase Five Policeline Road, Nairobi, Kenya</p>
            <p className="phone-info">📞 <a href="tel:+254722860321" onClick={handlePhoneClick} className="contact-link phone-link">+254 722 860 321</a></p>
            
            <div className="footer-emails">
              <h4>Email Addresses</h4>
              <div className="email-item primary-email">
                <span className="email-label">Main Contact:</span>
                <a href="mailto:pogchome2019@gmail.com" className="contact-link email-link">pogchome2019@gmail.com</a>
              </div>
              <div className="email-item secondary-email">
                <span className="email-label">Outreach:</span>
                <a href="mailto:placeofgraceoutreach@gmail.com" className="contact-link email-link">placeofgraceoutreach@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p className="social-description">Stay connected with us on social media for updates and stories.</p>
            <div className="social-links">
              <a 
                href="https://facebook.com/PlaceofGrace.CommunityCentre" 
                onClick={(e) => { e.preventDefault(); handleSocialMediaClick('facebook', 'PlaceofGrace.CommunityCentre'); }}
                aria-label="Facebook" 
                className="social-link facebook"
              >
                <span className="social-icon">📘</span>
                <span className="social-text">Facebook</span>
              </a>
              <a 
                href="https://instagram.com/placeofgracecommunitycentre" 
                onClick={(e) => { e.preventDefault(); handleSocialMediaClick('instagram', 'placeofgracecommunitycentre'); }}
                aria-label="Instagram" 
                className="social-link instagram"
              >
                <span className="social-icon">📷</span>
                <span className="social-text">Instagram</span>
              </a>
              <a 
                href="https://tiktok.com/@placeofgracectr" 
                onClick={(e) => { e.preventDefault(); handleSocialMediaClick('tiktok', 'placeofgracectr'); }}
                aria-label="TikTok" 
                className="social-link tiktok"
              >
                <span className="social-icon">🎵</span>
                <span className="social-text">TikTok</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">&copy; 2025 Place of Grace Community Centre. All rights reserved.</p>
            <div className="footer-actions">
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <span className="separator">•</span>
              <Link to="/terms" className="footer-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span className="back-to-top-icon">↑</span>
        </button>
      )}
    </footer>
  );
};

export default Footer;