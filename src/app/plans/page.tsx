'use client';

import React from 'react';
// import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Background from '../../components/Background';
import Contact from '../../components/Contact';
// Payment components preserved but commented out for future use
// import PaymentForm from '../../components/PaymentForm';
// import PaymentSuccess from '../../components/PaymentSuccess';
// import { initiatePayment, PaymentDetails } from '../../utils/razorpay';

const PlansPage = () => {
  // Get enrollment form URL from environment variables with fallback
  const enrollmentFormUrl = process.env.NEXT_PUBLIC_ENROLLMENT_FORM_URL || "https://forms.gle/guVi1weoQQ4kJyqr9";
  
  // Commented out for future use but preserved
  /*
  const [selectedPlan, setSelectedPlan] = useState<{
    title: string;
    price: string;
  } | null>(null);
  
  type FormData = {
    name: string;
    mobile: string;
    age: string;
    collegeName: string;
  };

  const [paymentSuccess, setPaymentSuccess] = useState<{
    paymentId: string;
    planTitle: string;
  } | null>(null);
  
  const [paymentError, setPaymentError] = useState<string | null>(null);
  */
  
  // Define the career program features
  const programFeatures = [
    "1:1 Mentorship from working developers",
    "Real-world project portfolio building",
    "Personalized skill growth plan",
    "Live internship simulation",
    "Mock interviews with industry experts",
    "Resume and LinkedIn optimization",
    "Interview preparation sessions",
    "Job application strategy",
    "Career support until placement"
  ];

  // Redirect to Google Form
  const handleProgramSelect = () => {
    // Simple direct URL construction with proper encoding
    const formUrl = enrollmentFormUrl.trim();
    const planParam = encodeURIComponent("Career Development Program");
    const separator = formUrl.includes('?') ? '&' : '?';
    const fullUrl = `${formUrl}${separator}plan=${planParam}`;
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  // Commented out for future use but preserved
  /*
  const handlePaymentFormClose = () => {
    setSelectedPlan(null);
  };

  const handlePaymentFormSubmit = async (formData: FormData) => {
    if (!selectedPlan) return;
    
    setPaymentError(null);
    
    const paymentDetails: PaymentDetails = {
      planTitle: selectedPlan.title,
      planPrice: selectedPlan.price,
      userDetails: formData,
    };
    
    try {
      await initiatePayment(
        paymentDetails,
        (response) => {
          // Handle successful payment
          setSelectedPlan(null);
          setPaymentSuccess({
            paymentId: response.paymentId,
            planTitle: selectedPlan.title,
          });
        },
        (error) => {
          // Handle payment error
          console.error('Payment failed:', error);

          if (error instanceof Error) {
            setPaymentError(error.message || 'Payment failed. Please try again.');
          } else {
            setPaymentError('Payment failed. Please try again.');
          }
        }
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error('Payment process error:', error);
        setPaymentError(error.message || 'Payment process failed. Please try again.');
      } else {
        console.error('Unknown payment process error:', error);
        setPaymentError('Payment process failed. Please try again.');
      }
    }
  };

  // const handleSuccessClose = () => {
  //   setPaymentSuccess(null);
  // };
  */

  return (
    <>
      <Background />
      <Navbar />
      
      <main className="plans-page">
        <section className="plans-hero">
          <h1>The Dev Dock <span className="gradient-text">LaunchPad</span></h1>
          <p>Not another course. A career movement.</p>
          <div className="hero-description">
            <p>Your invitation into a private community of working developers who will train, mentor, and guide you until you land your first tech job.</p>
          </div>
          <div className="value-props">
            <div className="value-prop">
              <i className="fas fa-user-friends"></i>
              <span>1:1 Mentorship</span>
            </div>
            <div className="value-prop">
              <i className="fas fa-laptop-code"></i>
              <span>Live Internship Projects</span>
            </div>
            <div className="value-prop">
              <i className="fas fa-brain"></i>
              <span>Mock Interviews</span>
            </div>
            <div className="value-prop">
              <i className="fas fa-tools"></i>
              <span>Skill Growth Plan</span>
            </div>
            <div className="value-prop">
              <i className="fas fa-gift"></i>
              <span>Career Support</span>
            </div>
          </div>
        </section>
        
        <section className="how-it-works">
          <h2>One Program. Multiple <span className="gradient-text">Outcomes</span>.</h2>
          <p>After a short interview, you&apos;ll be placed in one of our curated career tracks, each led by industry experts.</p>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>Build real project portfolio</h3>
              <p>Work on actual projects that simulate real-world development environments</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Learn from working devs</h3>
              <p>Get mentored by developers who are actively working in the industry</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Land your first tech job</h3>
              <p>Graduate with the skills, portfolio, and confidence to pass interviews</p>
            </div>
          </div>
        </section>
        
        <section className="plans-container">
          <h2>Career <span className="gradient-text">Development Program</span></h2>
          <p>Get selected through a short interview, and join our upcoming batch.</p>
          
          <div className="single-plan-card">
            <div className="card-overlay"></div>
            <div className="plan-content">
              {/* <h2>Career Development Program</h2> */}
              <p className="program-description">A comprehensive program designed to transform you from a student to a job-ready developer through real-world experience, expert mentorship, and personalized career guidance.</p>
              
              <div className="plan-features">
                <ul>
                  {programFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="fas fa-check-circle"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="specializations">
                <h3>Available Specializations</h3>
                <div className="specialization-badges">
                  <div className="specialization-badge">
                    <i className="fas fa-code"></i>
                    <span>Full Stack</span>
                  </div>
                  <div className="specialization-badge">
                    <i className="fas fa-link"></i>
                    <span>Blockchain</span>
                  </div>
                  <div className="specialization-badge">
                    <i className="fas fa-robot"></i>
                    <span>AI</span>
                  </div>
                  <div className="specialization-badge">
                    <i className="fas fa-server"></i>
                    <span>DevOps</span>
                  </div>
                </div>
              </div>
              
              <div className="plan-footer">
                <button 
                  className="cta-button plan-cta"
                  onClick={handleProgramSelect}
                >
                  <span>Apply Now</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="plans-note">
            <p>🚫 No mass lectures. ✅ Real community. Real support. Real results.</p>
          </div>
        </section>
        
        {/* Payment components commented out for future use but preserved */}
        {/*
        {paymentError && (
          <div className="payment-error">
            <div className="payment-error-content">
              <p>{paymentError}</p>
              <button onClick={() => setPaymentError(null)}>Dismiss</button>
            </div>
          </div>
        )}
        
        {selectedPlan && (
          <PaymentForm
            planTitle={selectedPlan.title}
            planPrice={selectedPlan.price}
            onSubmit={handlePaymentFormSubmit}
            onCancel={handlePaymentFormClose}
          />
        )}
        
        {paymentSuccess && (
          <PaymentSuccess
            paymentId={paymentSuccess.paymentId}
            planTitle={paymentSuccess.planTitle}
          />
        )}
        */}
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .plans-page {
          padding-top: 120px;
          color: white;
        }
        
        .plans-hero {
          text-align: center;
          padding: 2rem 5%;
          margin-bottom: 3rem;
        }
        
        .plans-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .plans-hero p {
          font-size: 1.2rem;
          color: var(--light-text);
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-description {
          margin: 1.5rem auto;
          max-width: 800px;
        }
        
        .value-props {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin: 2rem auto;
          max-width: 900px;
        }
        
        .value-prop {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.8rem 1.2rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .value-prop i {
          color: var(--primary-color);
          margin-right: 0.5rem;
        }
        
        .how-it-works {
          text-align: center;
          padding: 3rem 5%;
          background: rgba(0, 0, 0, 0.2);
          margin-bottom: 3rem;
        }
        
        .how-it-works h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .how-it-works p {
          font-size: 1.2rem;
          color: var(--light-text);
          max-width: 700px;
          margin: 0 auto 2rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .feature {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .feature:hover {
          transform: translateY(-10px);
          border-color: rgba(37, 99, 235, 0.3);
        }
        
        .feature-icon {
          width: 60px;
          height: 60px;
          background: rgba(37, 99, 235, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        
        .feature-icon i {
          font-size: 1.5rem;
          color: var(--primary-color);
        }
        
        .feature h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .feature p {
          color: var(--light-text);
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .plans-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5% 5rem;
          text-align: center;
        }
        
        .plans-container h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .plans-container > p {
          margin-bottom: 2.5rem;
          color: var(--light-text);
          font-size: 1.2rem;
        }
        
        .single-plan-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          backdrop-filter: blur(10px);
          border: 2px solid var(--primary-color);
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .program-description {
          color: #ccc;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .specializations {
          margin: 2rem 0;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .specializations h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .specialization-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        
        .specialization-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(37, 99, 235, 0.1);
          padding: 0.7rem 1.2rem;
          border-radius: 50px;
          border: 1px solid rgba(37, 99, 235, 0.2);
          transition: all 0.3s ease;
        }
        
        .specialization-badge:hover {
          transform: translateY(-5px);
          background: rgba(37, 99, 235, 0.2);
        }
        
        .specialization-badge i {
          color: var(--primary-color);
          font-size: 1.1rem;
        }
        
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .single-plan-card:hover {
          transform: translateY(-10px);
        }
        
        .plan-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }
        
        .plan-content h2 {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          color: white;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .plan-features {
          flex: 1;
        }
        
        .plan-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .plan-features li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          color: var(--light-text);
        }
        
        .plan-features i {
          color: var(--primary-color);
          margin-right: 0.5rem;
          margin-top: 0.3rem;
        }
        
        .plan-footer {
          margin-top: 2rem;
        }
        
        .plan-cta {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .plan-cta:hover:not(:disabled) {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .plan-cta i {
          transition: transform 0.3s ease;
        }
        
        .plan-cta:hover:not(:disabled) i {
          transform: translateX(5px);
        }
        
        .plans-note {
          margin-top: 2.5rem;
          padding: 1rem;
          border-radius: 8px;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.2);
        }
        
        .plans-note p {
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .payment-error {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: rgba(220, 38, 38, 0.9);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          z-index: 1000;
          animation: slideIn 0.3s ease forwards;
        }
        
        .payment-error-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .payment-error button {
          background: white;
          color: rgb(220, 38, 38);
          border: none;
          border-radius: 4px;
          padding: 0.3rem 0.8rem;
          cursor: pointer;
          font-weight: 600;
        }
        
        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .plans-hero h1 {
            font-size: 2.5rem;
          }
          
          .value-props {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          
          .how-it-works h2,
          .plans-container h2 {
            font-size: 2rem;
          }
          
          .plan-content {
            padding: 1.5rem;
          }
          
          .program-description {
            font-size: 1rem;
          }
          
          .specialization-badges {
            gap: 0.8rem;
          }
          
          .specialization-badge {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default PlansPage; 