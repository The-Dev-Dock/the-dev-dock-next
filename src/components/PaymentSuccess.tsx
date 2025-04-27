'use client';

import React from 'react';
import Link from 'next/link';

interface PaymentSuccessProps {
  paymentId: string;
  planTitle: string;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ paymentId, planTitle }) => {
  return (
    <div className="payment-success-overlay">
      <div className="payment-success-container">
        <div className="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        
        <h2>Payment Successful!</h2>
        <p>Thank you for purchasing <strong>{planTitle}</strong></p>
        <p className="payment-id">Payment ID: <span>{paymentId}</span></p>
        
        <p>We&apos;ve sent a confirmation email with all the details.</p>
        
        <div className="success-actions">
          <Link href="/" className="home-btn">
            Return to Home
          </Link>
          <Link href="/plans" className="plans-btn">
            Explore More Plans
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        .payment-success-overlay {
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
        
        .payment-success-container {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 100%;
          max-width: 500px;
          padding: 2.5rem 2rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          text-align: center;
        }
        
        .success-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: #4ade80; /* Green color */
        }
        
        h2 {
          color: white;
          font-size: 1.8rem;
          margin-bottom: 0.8rem;
        }
        
        p {
          color: #ccc;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        
        .payment-id {
          margin: 1.5rem 0;
          font-size: 0.9rem;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: inline-block;
        }
        
        .payment-id span {
          font-family: monospace;
          color: white;
          font-weight: 600;
        }
        
        .success-message {
          margin-bottom: 2rem;
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .success-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        
        .home-btn, .plans-btn {
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .home-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        .home-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .plans-btn {
          background: var(--primary-color);
          color: white;
        }
        
        .plans-btn:hover {
          background: rgba(37, 99, 235, 0.8);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
        }
        
        @media (max-width: 600px) {
          .payment-success-container {
            padding: 2rem 1.5rem;
          }
          
          h2 {
            font-size: 1.5rem;
          }
          
          p {
            font-size: 1rem;
          }
          
          .success-actions {
            flex-direction: column;
          }
          
          .home-btn, .plans-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccess;