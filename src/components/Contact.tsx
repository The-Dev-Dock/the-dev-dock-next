'use client';

import React from 'react';

const Contact = () => {
  // Get enrollment form URL from environment variables with fallback
  const enrollmentFormUrl = process.env.NEXT_PUBLIC_ENROLLMENT_FORM_URL || "https://forms.gle/guVi1weoQQ4kJyqr9";
  
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-description">Ready to start your journey? Here&apos;s how to reach us:</p>
        
        <div className="contact-options">
          <div className="contact-option">
            <div className="option-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3>Fill Our Application Form</h3>
            <p>Apply for The Dev Dock LaunchPad by filling out our Google Form</p>
            <a 
              href={enrollmentFormUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="option-button"
            >
              Apply Now
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="contact-option">
            <div className="option-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Us</h3>
            <p>Have questions? Give us a call directly</p>
            <a href="tel:+919243804369" className="option-button">
              +91 9243 804 369
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="contact-option">
            <div className="option-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <h3>WhatsApp Us</h3>
            <p>Message us on WhatsApp for quick responses</p>
            <a 
              href="https://wa.me/919243804369" 
              target="_blank" 
              rel="noopener noreferrer"
              className="option-button whatsapp"
            >
              Message on WhatsApp
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact {
          padding: 5rem 5%;
          background: transparent;
          position: relative;
          text-align: center;
        }
        
        .contact h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: white;
          position: relative;
          display: inline-block;
        }
        
        .contact h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background: var(--primary-color);
          border-radius: 3px;
        }
        
        .contact-description {
          color: #ccc;
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }
        
        .contact-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .contact-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .contact-option {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translateY(20px);
          opacity: 0;
          animation: fadeInUp 0.5s ease forwards;
        }
        
        .contact-option:nth-child(2) {
          animation-delay: 0.1s;
        }
        
        .contact-option:nth-child(3) {
          animation-delay: 0.2s;
        }
        
        .contact-option:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(37, 99, 235, 0.3);
        }
        
        .option-icon {
          width: 70px;
          height: 70px;
          background: rgba(37, 99, 235, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(37, 99, 235, 0.2);
          transition: all 0.3s ease;
        }
        
        .option-icon i {
          font-size: 1.8rem;
          color: var(--primary-color);
        }
        
        .contact-option:hover .option-icon {
          background: rgba(37, 99, 235, 0.2);
          transform: scale(1.1);
        }
        
        .contact-option h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .contact-option p {
          color: #ccc;
          margin-bottom: 1.5rem;
          font-size: 1rem;
          line-height: 1.5;
          flex-grow: 1;
        }
        
        .option-button {
          padding: 0.8rem 1.5rem;
          background: rgba(37, 99, 235, 0.2);
          color: white;
          border: 1px solid rgba(37, 99, 235, 0.3);
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          text-decoration: none;
        }
        
        .option-button:hover {
          background: var(--primary-color);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
        }
        
        .option-button.whatsapp {
          background: rgba(37, 211, 102, 0.2);
          border: 1px solid rgba(37, 211, 102, 0.3);
        }
        
        .option-button.whatsapp:hover {
          background: #25d366;
        }
        
        .option-button i {
          transition: transform 0.3s ease;
        }
        
        .option-button:hover i {
          transform: translateX(5px);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .contact {
            padding: 4rem 5%;
          }
          
          .contact h2 {
            font-size: 2.2rem;
          }
          
          .contact-description {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
          
          .contact-options {
            gap: 1.5rem;
          }
          
          .contact-option {
            padding: 1.5rem;
          }
          
          .option-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 1.2rem;
          }
          
          .option-icon i {
            font-size: 1.5rem;
          }
          
          .contact-option h3 {
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
          }
          
          .contact-option p {
            font-size: 0.95rem;
            margin-bottom: 1.2rem;
          }
          
          .option-button {
            padding: 0.7rem 1.3rem;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 480px) {
          .contact {
            padding: 3rem 1rem;
          }
          
          .contact h2 {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
          }
          
          .contact-description {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
          }
          
          .contact-options {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          
          .contact-option {
            padding: 1.2rem;
          }
          
          .option-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 1rem;
          }
          
          .option-icon i {
            font-size: 1.3rem;
          }
          
          .contact-option h3 {
            font-size: 1.1rem;
            margin-bottom: 0.6rem;
          }
          
          .contact-option p {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
          
          .option-button {
            padding: 0.6rem 1.2rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;