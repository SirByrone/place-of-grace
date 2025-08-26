import React from 'react';
import { Link } from 'react-router-dom';
import { openPhone, openSocialMedia } from '../utils/externalAppIntegration';
import './Footer.css';

const Footer = () => {
  const handlePhoneClick = (e) => {
    e.preventDefault();
    openPhone('+254722860321');
  };

  const handleSocialMediaClick = (platform, identifier) => {
    openSocialMedia(platform, identifier);
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
            <p>📍 Donholm Phase Five Policeline Road, Nairobi, Kenya</p>
            <p>📞 <a href="tel:+254722860321" onClick={handlePhoneClick} className="contact-link phone-link">+254 722 860 321</a></p>
            <div className="footer-emails">
              <p>📧 <a href="mailto:pogchome2019@gmail.com" className="contact-link email-link">pogchome2019@gmail.com</a></p>
              <p>📧 <a href="mailto:placeofgraceoutreach@gmail.com" className="contact-link email-link">placeofgraceoutreach@gmail.com</a></p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a 
                href="https://facebook.com/PlaceofGrace.CommunityCentre" 
                onClick={(e) => { e.preventDefault(); handleSocialMediaClick('facebook', 'PlaceofGrace.CommunityCentre'); }}
                aria-label="Facebook" 
                className="social-link facebook"
              >
                <span className="social-icon">📘</span>
                <span>Facebook</span>
              </a>
              <a 
                href="https://instagram.com/placeofgracecommunitycentre" 
                onClick={(e) => { e.preventDefault(); handleSocialMediaClick('instagram', 'placeofgracecommunitycentre'); }}
                aria-label="Instagram" 
                className="social-link instagram"
              >
                <span className="social-icon">📷</span>
                <span>Instagram</span>
              </a>
              <a 
                href="https://tiktok.com/@placeofgracectr" 
                onClick={(e) => { e.preventDefault(); handleSocialMediaClick('tiktok', 'placeofgracectr'); }}
                aria-label="TikTok" 
                className="social-link tiktok"
              >
                <span className="social-icon">🎵</span>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Place of Grace Community Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;