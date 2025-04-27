'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Background from '../../components/Background';
import Contact from '../../components/Contact';
import PaymentForm from '../../components/PaymentForm';
import PaymentSuccess from '../../components/PaymentSuccess';
import { initiatePayment, PaymentDetails } from '../../utils/razorpay';

const PlansPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<{
    title: string;
    price: string;
  } | null>(null);
  
  const [paymentSuccess, setPaymentSuccess] = useState<{
    paymentId: string;
    planTitle: string;
  } | null>(null);
  
  const [paymentError, setPaymentError] = useState<string | null>(null);
  
  // Define the plans data
  const plans = [
    {
      title: "Web Development",
      price: "2 INR",
      duration: "2 months",
      features: [
        "Full-stack web development curriculum",
        "HTML, CSS, JavaScript fundamentals",
        "React.js and Node.js",
        "Database integration (MongoDB)",
        "Free mock interview session",
        "Profile building workshop",
        "Industry mentorship",
        "Certificate of completion"
      ],
      icon: "fas fa-code",
      cta: "Enroll Now"
    },
    {
      title: "Blockchain Development",
      price: "3 INR",
      duration: "2 months",
      features: [
        "Blockchain fundamentals",
        "Smart contract development",
        "Solidity programming",
        "DApp development",
        "Web3.js integration",
        "Free mock interview session",
        "Profile building workshop",
        "Industry mentorship",
        "Certificate of completion"
      ],
      icon: "fas fa-link",
      cta: "Enroll Now",
      featured: true
    },
    {
      title: "AI Development",
      price: "Coming Soon",
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
      price: "Coming Soon",
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

  const handlePlanSelect = (plan: { title: string; price: string }) => {
    setSelectedPlan(plan);
  };

  const handlePaymentFormClose = () => {
    setSelectedPlan(null);
  };

  const handlePaymentFormSubmit = async (formData: any) => {
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
          setPaymentError(error.message || 'Payment failed. Please try again.');
        }
      );
    } catch (error: any) {
      console.error('Payment process error:', error);
      setPaymentError(error.message || 'Payment process failed. Please try again.');
    }
  };

  const handleSuccessClose = () => {
    setPaymentSuccess(null);
  };

  return (
    <>
      <Background />
      <Navbar />
      
      <main className="plans-page">
        <section className="plans-hero">
          <h1>Our <span className="gradient-text">Courses</span></h1>
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
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    {!plan.comingSoon && <span className="duration">/{plan.duration}</span>}
                  </div>
                  
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
        
        {/* Payment error notification */}
        {paymentError && (
          <div className="payment-error">
            <div className="payment-error-content">
              <p>{paymentError}</p>
              <button onClick={() => setPaymentError(null)}>Dismiss</button>
            </div>
          </div>
        )}
        
        {/* Payment form modal */}
        {selectedPlan && (
          <PaymentForm
            planTitle={selectedPlan.title}
            planPrice={selectedPlan.price}
            onSubmit={handlePaymentFormSubmit}
            onCancel={handlePaymentFormClose}
          />
        )}
        
        {/* Payment success modal */}
        {paymentSuccess && (
          <PaymentSuccess
            paymentId={paymentSuccess.paymentId}
            planTitle={paymentSuccess.planTitle}
          />
        )}
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .plans-page {
          padding-top: 100px;
          min-height: 100vh;
        }
        
        .plans-hero {
          text-align: center;
          padding: 3rem 1rem;
        }
        
        .plans-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: white;
          position: relative;
          display: inline-block;
        }
        
        .plans-hero h1::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          border-radius: 10px;
        }
        
        .plans-hero p {
          font-size: 1.3rem;
          color: #ccc;
          max-width: 700px;
          margin: 2rem auto 0;
        }
        
        .plans-container {
          max-width: 1400px;
          margin: 2rem auto;
          padding: 0 2rem 6rem;
        }
        
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-top: 1.5rem;
        }
        
        .plan-card {
          background: rgba(20, 25, 35, 0.5);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          position: relative;
          height: 100%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          z-index: 1;
        }
        
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(40, 50, 80, 0.1), rgba(20, 25, 35, 0));
          z-index: -1;
        }
        
        .plan-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          border-color: rgba(var(--primary-color-rgb), 0.3);
        }
        
        .plan-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .plan-content h2 {
          font-size: 1.8rem;
          color: white;
          margin-bottom: 0.5rem;
          text-align: center;
          font-weight: 600;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .plan-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          margin: 0.5rem 0 1.5rem;
        }
        
        .price {
          font-size: 2.2rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .duration {
          font-size: 1rem;
          color: #ccc;
          margin-left: 0.5rem;
        }
        
        .plan-features {
          padding: 1rem 0;
          flex-grow: 1;
        }
        
        .plan-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .plan-features li {
          color: #eee;
          padding: 0.7rem 0;
          display: flex;
          align-items: flex-start;
          font-size: 1rem;
        }
        
        .plan-features li i {
          color: var(--primary-color);
          margin-right: 0.8rem;
          font-size: 1rem;
          flex-shrink: 0;
        }
        
        .plan-features li span {
          flex: 1;
        }
        
        .plan-footer {
          padding: 1.5rem 0 0;
          text-align: center;
        }
        
        .plan-cta {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          padding: 0.9rem 1.8rem;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1.05rem;
          letter-spacing: 0.5px;
        }
        
        .plan-cta:hover {
          background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(var(--primary-color-rgb), 0.4);
        }
        
        .plan-cta i {
          transition: transform 0.3s ease;
        }
        
        .plan-cta:hover i {
          transform: translateX(5px);
        }
        
        /* Featured plan styling */
        .featured-plan {
          transform: scale(1.05);
          border: 1px solid rgba(var(--primary-color-rgb), 0.3);
          box-shadow: 0 10px 30px rgba(var(--primary-color-rgb), 0.15);
          z-index: 2;
          background: rgba(30, 35, 45, 0.8);
        }
        
        .featured-plan::before {
          content: 'MOST POPULAR';
          position: absolute;
          top: 15px;
          right: 0;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          color: white;
          font-size: 0.75rem;
          font-weight: bold;
          padding: 0.5rem 1.5rem;
          border-radius: 50px 0 0 50px;
          letter-spacing: 1px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          z-index: 3;
        }
        
        .featured-plan:hover {
          transform: translateY(-15px) scale(1.05);
        }
        
        /* Coming soon plan styling */
        .coming-soon-plan {
          opacity: 0.8;
          background: rgba(20, 25, 35, 0.3);
        }
        
        .coming-soon-plan::after {
          content: 'Coming Soon';
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #888, #444);
          padding: 0.4rem 1rem;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          z-index: 3;
        }
        
        .coming-soon-plan .plan-cta {
          background: linear-gradient(135deg, #888, #444);
          cursor: not-allowed;
        }
        
        .coming-soon-plan .plan-cta:hover {
          transform: none;
          box-shadow: none;
          background: linear-gradient(135deg, #888, #444);
        }
        
        .payment-error {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: 90%;
          max-width: 500px;
        }
        
        .payment-error-content {
          background: rgba(229, 62, 62, 0.9);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .payment-error-content p {
          margin: 0;
          font-size: 1rem;
        }
        
        .payment-error-content button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          margin-left: 1rem;
          transition: all 0.2s ease;
        }
        
        .payment-error-content button:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        @media (max-width: 1200px) {
          .plans-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .plans-page {
            padding-top: 80px;
          }
          
          .plans-hero {
            padding: 2rem 1rem;
          }
          
          .plans-hero h1 {
            font-size: 2.5rem;
          }
          
          .plans-hero p {
            font-size: 1.1rem;
            margin-top: 1.5rem;
          }
          
          .plans-container {
            padding: 0 1.5rem 4rem;
            margin-top: 1rem;
          }
          
          .plans-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
            margin-top: 2.5rem;
          }
          
          .featured-plan {
            transform: scale(1);
            order: -1;
          }
          
          .featured-plan:hover {
            transform: translateY(-15px) scale(1);
          }
          
          .plan-content {
            padding: 25px;
          }
        }
        
        @media (max-width: 480px) {
          .plans-page {
            padding-top: 70px;
          }
          
          .plans-hero {
            padding: 1.5rem 1rem;
          }
          
          .plans-hero h1 {
            font-size: 2.2rem;
          }
          
          .plans-hero h1::after {
            width: 60px;
          }
          
          .plans-hero p {
            font-size: 1rem;
          }
          
          .plan-content h2 {
            font-size: 1.5rem;
          }
          
          .price {
            font-size: 2rem;
          }
          
          .plan-features li {
            font-size: 0.95rem;
            padding: 0.6rem 0;
          }
          
          .plan-cta {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
          
          .payment-error-content {
            padding: 0.8rem 1rem;
            flex-direction: column;
            text-align: center;
          }
          
          .payment-error-content button {
            margin-left: 0;
            margin-top: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default PlansPage; 