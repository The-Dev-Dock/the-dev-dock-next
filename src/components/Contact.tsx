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
    } catch (error) {
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
        <p>Ready to start your journey? Contact us today!</p>
        
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
      `}</style>
    </section>
  );
};

export default Contact;