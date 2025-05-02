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
  const enrollmentFormUrl = process.env.NEXT_PUBLIC_ENROLLMENT_FORM_URL || "https://forms.google.com/your-form-url";
  
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
  
  // Get prices from environment variables with fallbacks
  const webDevPrice = process.env.NEXT_PUBLIC_WEB_DEV_PRICE || "2999 INR";
  const blockchainPrice = process.env.NEXT_PUBLIC_BLOCKCHAIN_PRICE || "2999 INR";
  const aiDevComingStatus = process.env.NEXT_PUBLIC_AI_DEV_STATUS || "Coming Soon";
  const devOpsComingStatus = process.env.NEXT_PUBLIC_DEVOPS_STATUS || "Coming Soon";
  
  // Define the plans data
  const plans = [
    {
      title: "Web Development",
      price: webDevPrice,
      duration: "2 months",
      features: [
        "Full-stack web development curriculum",
        "HTML, CSS, JavaScript fundamentals",
        "Frontend Frameworks",
        "Deployment and hosting",
        "Live project development",
        "Free mock interview session",
        "Profile building workshop",
        "Industry mentorship",
        "Certificate of completion"
      ],
      icon: "fas fa-code",
      cta: "Apply Now"
    },
    {
      title: "Blockchain Development",
      price: blockchainPrice,
      duration: "2 months",
      features: [
        "Blockchain concepts",
        "Smart contract development",
        "Solidity programming",
        "DApp development",
        "Web3.js integration",
        "Live project development",
        "Free mock interview session",
        "Profile building workshop",
        "Industry mentorship",
        "Certificate of completion"
      ],
      icon: "fas fa-link",
      cta: "Apply Now",
      featured: true
    },
    {
      title: "AI Development",
      price: aiDevComingStatus,
      duration: "2 months",
      features: [
        "Machine Learning fundamentals",
        "Neural Networks",
        "Computer Vision",
        "Natural Language Processing",
        "Python for AI",
        "Free mock interview session",
        "Profile building workshop",
        "Industry mentorship",
        "Certificate of completion"
      ],
      icon: "fas fa-robot",
      cta: "Join Waitlist",
      comingSoon: true
    },
    {
      title: "DevOps & Cloud",
      price: devOpsComingStatus,
      duration: "2 months",
      features: [
        "CI/CD pipeline setup",
        "Docker and Kubernetes",
        "Cloud platforms (AWS/Azure)",
        "Infrastructure as Code",
        "Monitoring and logging",
        "Free mock interview session",
        "Profile building workshop",
        "Industry mentorship",
        "Certificate of completion"
      ],
      icon: "fas fa-server",
      cta: "Join Waitlist",
      comingSoon: true
    }
  ];

  // Redirect to Google Form with plan name
  const handlePlanSelect = (plan: { title: string; price: string }) => {
    // Simple direct URL construction with proper encoding
    const formUrl = enrollmentFormUrl.trim();
    const planParam = encodeURIComponent(plan.title);
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
          <h1>Our <span className="gradient-text">Internship Programs</span></h1>
          <p>Accelerate your tech career with our specialized 2-month programs</p>
        </section>
        
        <section className="plans-container">
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`plan-card ${plan.featured ? 'featured-plan' : ''} ${plan.comingSoon ? 'coming-soon-plan' : ''}`}
              >
                <div className="card-overlay"></div>
                <div className="plan-content">
                  <h2>{plan.title}</h2>
                  
                  {/* Price details commented out for future use */}
                  {/*
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    {!plan.comingSoon && <span className="duration">/{plan.duration}</span>}
                  </div>
                  */}
                  
                  <div className="plan-features">
                    <ul>
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <i className="fas fa-check-circle"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="plan-footer">
                    <button 
                      className="cta-button plan-cta"
                      onClick={() => plan.comingSoon ? null : handlePlanSelect({ title: plan.title, price: plan.price })}
                      disabled={plan.comingSoon}
                    >
                      <span>{plan.cta}</span>
                      <i className={plan.comingSoon ? "fas fa-bell" : "fas fa-arrow-right"}></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
          max-width: 600px;
          margin: 0 auto;
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
        }
        
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .plan-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
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
        
        .plan-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(37, 99, 235, 0.3);
        }
        
        .plan-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          z-index: 1;
        }
        
        .plan-card h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .plan-price {
          margin-bottom: 2rem;
          display: flex;
          align-items: baseline;
        }
        
        .price {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-color);
        }
        
        .duration {
          font-size: 1rem;
          color: var(--light-text);
          margin-left: 0.3rem;
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
        
        .featured-plan {
          border: 2px solid var(--primary-color);
          transform: scale(1.03);
          z-index: 2;
        }
        
        .featured-plan::before {
          content: 'Most Popular';
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--primary-color);
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          z-index: 3;
        }
        
        .featured-plan:hover {
          transform: translateY(-10px) scale(1.03);
        }
        
        .coming-soon-plan {
          opacity: 0.75;
        }
        
        .coming-soon-plan::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.1);
          pointer-events: none;
          z-index: 1;
        }
        
        .coming-soon-plan .plan-cta {
          background: rgba(37, 99, 235, 0.3);
          cursor: not-allowed;
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
          
          .plans-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
          
          .featured-plan {
            transform: scale(1);
          }
          
          .featured-plan:hover {
            transform: translateY(-10px) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default PlansPage; 