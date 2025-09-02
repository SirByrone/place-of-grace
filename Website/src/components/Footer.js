import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // For Footer specific styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-us">
          <h3>Place of Grace Children's Home</h3>
          <p>A safe haven for vulnerable children, providing love, care, and hope for a brighter future.</p>
          <p>Founded in 2009 by the late Peninah Maria Kioko.</p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/impact">Impact</Link></li>
            <li><Link to="/get-involved">How to Help</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/transparency">Transparency</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>Donholm Phase 8, Nairobi, Kenya</p>
          <p>Email: <a href="mailto:placeofgraceoutreach@gmail.com">placeofgraceoutreach@gmail.com</a></p>
          <p>Phone: <a href="tel:+254XXX XXX XXX">+254 XXX XXX XXX</a></p>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* Replace with actual social media links and icons */}
            <a href="#" aria-label="Facebook"><img src="/assets/icon-facebook.png" alt="Facebook" /></a>
            <a href="#" aria-label="Twitter"><img src="/assets/icon-twitter.png" alt="Twitter" /></a>
            <a href="#" aria-label="Instagram"><img src="/assets/icon-instagram.png" alt="Instagram" /></a>
            <a href="#" aria-label="WhatsApp"><img src="/assets/icon-whatsapp.png" alt="WhatsApp" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Place of Grace Children's Home. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;