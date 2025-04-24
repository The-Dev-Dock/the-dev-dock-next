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
          <a href="/plans">Plans</a>
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
      
      <style jsx>{`
        .footer {
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 3rem 5% 1rem;
          position: relative;
          backdrop-filter: blur(10px);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
          max-width: 1200px;
          margin: 0 auto 2rem;
        }
        
        .footer-section h3 {
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
          font-size: 1.5rem;
          color: white;
        }
        
        .footer-section h3::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--primary-color);
        }
        
        .footer-section p {
          color: #ccc;
          margin-bottom: 1rem;
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .footer-section a {
          color: #ccc;
          text-decoration: none;
          display: block;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 0;
          font-size: 1rem;
        }
        
        .footer-section a:hover {
          color: white;
          padding-left: 10px;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-links a {
          margin-right: 0.5rem;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .social-links a:hover {
          color: var(--primary-color);
          transform: translateY(-3px);
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-bottom p {
          color: #ccc;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 2.5rem 5% 1rem;
          }
          
          .footer-content {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
          }
          
          .footer-section h3 {
            font-size: 1.3rem;
          }
          
          .footer-section a, .footer-section p {
            font-size: 0.95rem;
          }
          
          .social-links a {
            font-size: 1.3rem;
          }
        }
        
        @media (max-width: 480px) {
          .footer {
            padding: 2rem 1rem 1rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .footer-section h3 {
            margin: 0 auto 1rem;
          }
          
          .footer-section h3::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .social-links {
            justify-content: center;
          }
          
          .footer-bottom p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;