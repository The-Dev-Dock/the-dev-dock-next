import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>The Dev Dock</h3>
          <p>Launching careers through expert guidance</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Dev Dock. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;