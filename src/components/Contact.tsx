'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface StatusState {
  submitted: boolean;
  submitting: boolean;
  info: {
    error: boolean;
    msg: string | null;
  };
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  
  const [status, setStatus] = useState<StatusState>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: data.message }
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          message: ''
        });
      } else {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: true, msg: data.error }
        });
      }
    } catch {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' }
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-description">Ready to start your journey? Contact us today!</p>
        
        {status.info.msg && (
          <div className={`form-message ${status.info.error ? 'error' : 'success'}`}>
            {status.info.msg}
          </div>
        )}
        
        <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Your Phone" 
              required 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <select 
              name="interest" 
              required 
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="">Select Your Interest</option>
              <option value="internship">Internship Program</option>
              <option value="training">Training Program</option>
              <option value="mentorship">1-1 Mentorship</option>
              <option value="mock-interview">Mock Interviews</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              required 
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="submit-button" 
            disabled={status.submitting}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
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
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        
        .contact-container {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .contact-form {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(20px);
          opacity: 0;
          animation: fadeInUp 0.5s ease forwards;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          color: white;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--primary-color);
          outline: none;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
          background: rgba(255, 255, 255, 0.1);
        }
        
        .form-group textarea {
          height: 150px;
          resize: vertical;
        }
        
        .submit-button {
          width: 100%;
          padding: 1rem;
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        
        .submit-button:hover {
          background: rgba(37, 99, 235, 0.8);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
        }
        
        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        
        .form-message {
          padding: 1rem;
          margin-bottom: 1.5rem;
          border-radius: 8px;
          text-align: center;
          animation: fadeIn 0.5s ease;
        }
        
        .form-message.success {
          background: rgba(46, 213, 115, 0.15);
          border: 1px solid rgba(46, 213, 115, 0.3);
          color: #2ed573;
        }
        
        .form-message.error {
          background: rgba(255, 71, 87, 0.15);
          border: 1px solid rgba(255, 71, 87, 0.3);
          color: #ff4757;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
          }
          
          .contact-form {
            padding: 1.5rem;
          }
          
          .form-group {
            margin-bottom: 1.2rem;
          }
          
          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 0.7rem;
            font-size: 0.95rem;
          }
          
          .form-group textarea {
            height: 120px;
          }
          
          .submit-button {
            padding: 0.9rem;
            font-size: 0.95rem;
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
          
          .contact-form {
            padding: 1.2rem;
          }
          
          .form-group {
            margin-bottom: 1rem;
          }
          
          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 0.6rem;
            font-size: 0.9rem;
          }
          
          .form-group textarea {
            height: 100px;
          }
          
          .submit-button {
            padding: 0.8rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;