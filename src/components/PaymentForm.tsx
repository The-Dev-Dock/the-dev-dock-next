'use client';

import React, { useState } from 'react';

interface PaymentFormProps {
  planTitle: string;
  planPrice: string;
  onSubmit: (formData: FormData) => void;
  onCancel: () => void;
}

interface FormData {
  name: string;
  mobile: string;
  age: string;
  collegeName: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ planTitle, planPrice, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    age: '',
    collegeName: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter a valid 10-digit mobile number';
    
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) newErrors.age = 'Enter a valid age';
    
    if (!formData.collegeName.trim()) newErrors.collegeName = 'College name is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="payment-form-overlay">
      <div className="payment-form-container">
        <div className="payment-form-header">
          <h2>Complete Your Details</h2>
          <p>You are about to purchase: <strong>{planTitle}</strong> for <strong>{planPrice}</strong></p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your 10-digit mobile number"
              className={errors.mobile ? 'error' : ''}
            />
            {errors.mobile && <span className="error-message">{errors.mobile}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className={errors.age ? 'error' : ''}
            />
            {errors.age && <span className="error-message">{errors.age}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="collegeName">College Name</label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="Enter your college name"
              className={errors.collegeName ? 'error' : ''}
            />
            {errors.collegeName && <span className="error-message">{errors.collegeName}</span>}
          </div>
          
          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
      
      <style jsx>{`
        .payment-form-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
        }
        
        .payment-form-container {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 100%;
          max-width: 500px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .payment-form-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .payment-form-header h2 {
          color: white;
          margin-bottom: 0.5rem;
          font-size: 1.8rem;
        }
        
        .payment-form-header p {
          color: #ccc;
          font-size: 1rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        label {
          display: block;
          color: white;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        
        input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
        
        input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        input.error {
          border-color: #e53e3e;
        }
        
        .error-message {
          color: #e53e3e;
          font-size: 0.8rem;
          margin-top: 0.3rem;
          display: block;
        }
        
        .form-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
        }
        
        button {
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        
        .cancel-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        .cancel-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .submit-btn {
          background: var(--primary-color);
          color: white;
        }
        
        .submit-btn:hover {
          background: rgba(37, 99, 235, 0.8);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
        }
        
        @media (max-width: 600px) {
          .payment-form-container {
            padding: 1.5rem;
          }
          
          .payment-form-header h2 {
            font-size: 1.5rem;
          }
          
          input {
            padding: 0.7rem 0.9rem;
          }
          
          .form-actions {
            flex-direction: column;
            gap: 1rem;
          }
          
          button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentForm; 