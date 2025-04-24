'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Background from '../../components/Background';
import Contact from '../../components/Contact';

const PlansPage = () => {
  // Define the plans data
  const plans = [
    {
      title: "Internship Program",
      price: "$299",
      duration: "3 months",
      features: [
        "Real-world project experience",
        "Industry mentorship",
        "Career guidance sessions",
        "Certificate of completion",
        "Job placement assistance"
      ],
      icon: "fas fa-laptop-code",
      cta: "Apply Now"
    },
    {
      title: "Training Program",
      price: "$499",
      duration: "6 months",
      features: [
        "Comprehensive tech curriculum",
        "Weekly live sessions",
        "Hands-on projects",
        "1-1 feedback sessions",
        "Industry certification",
        "Job placement assistance",
        "Networking opportunities"
      ],
      icon: "fas fa-chalkboard-teacher",
      cta: "Enroll Now",
      featured: true
    },
    {
      title: "1-1 Mentorship",
      price: "$799",
      duration: "6 months",
      features: [
        "Personalized learning path",
        "Dedicated industry mentor",
        "Weekly 1-1 sessions",
        "Custom project portfolio",
        "Mock interviews",
        "Resume and LinkedIn review",
        "Priority job placements"
      ],
      icon: "fas fa-user-graduate",
      cta: "Start Today"
    }
  ];

  return (
    <>
      <Background />
      <Navbar />
      
      <main className="plans-page">
        <section className="plans-hero">
          <h1>Choose Your <span className="gradient-text">Plan</span></h1>
          <p>Find the perfect program to launch your tech career</p>
        </section>
        
        <section className="plans-container">
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`plan-card ${plan.featured ? 'featured-plan' : ''}`}
              >
                <div className="plan-header">
                  <i className={plan.icon}></i>
                  <h2>{plan.title}</h2>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="duration">/{plan.duration}</span>
                  </div>
                </div>
                
                <div className="plan-features">
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="plan-footer">
                  <a href="#contact" className="cta-button plan-cta">
                    <span>{plan.cta}</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
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
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .plans-hero p {
          font-size: 1.2rem;
          color: #ccc;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .plans-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem 6rem;
        }
        
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .plan-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        
        .plan-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(37, 99, 235, 0.3);
        }
        
        .featured-plan {
          transform: scale(1.05);
          border: 1px solid rgba(37, 99, 235, 0.5);
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);
          position: relative;
        }
        
        .featured-plan:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }
        
        .featured-plan::before {
          content: 'MOST POPULAR';
          position: absolute;
          top: 0;
          right: 0;
          background: var(--primary-color);
          color: white;
          font-size: 0.7rem;
          font-weight: bold;
          padding: 0.5rem 1rem;
          border-radius: 0 15px 0 15px;
          letter-spacing: 1px;
        }
        
        .plan-header {
          padding: 2rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .plan-header i {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
        
        .plan-header h2 {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 1rem;
        }
        
        .plan-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          margin-top: 1rem;
        }
        
        .price {
          font-size: 2rem;
          font-weight: 700;
          color: white;
        }
        
        .duration {
          font-size: 0.9rem;
          color: #ccc;
          margin-left: 0.5rem;
        }
        
        .plan-features {
          padding: 2rem;
          flex-grow: 1;
        }
        
        .plan-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .plan-features li {
          color: #ccc;
          padding: 0.8rem 0;
          display: flex;
          align-items: flex-start;
        }
        
        .plan-features li i {
          color: var(--primary-color);
          margin-right: 0.8rem;
          font-size: 0.8rem;
          margin-top: 0.3rem;
        }
        
        .plan-footer {
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .plan-cta {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          background: var(--primary-color);
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .plan-cta:hover {
          background: rgba(37, 99, 235, 0.8);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
        }
        
        .plan-cta i {
          transition: transform 0.3s ease;
        }
        
        .plan-cta:hover i {
          transform: translateX(5px);
        }
        
        @media (max-width: 1024px) {
          .plans-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
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
            font-size: 2.2rem;
          }
          
          .plans-hero p {
            font-size: 1.1rem;
          }
          
          .plans-container {
            padding: 1rem 1rem 4rem;
          }
          
          .plans-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .featured-plan {
            transform: scale(1);
            order: -1;
          }
          
          .featured-plan:hover {
            transform: translateY(-10px) scale(1);
          }
          
          .plan-header {
            padding: 1.5rem;
          }
          
          .plan-features {
            padding: 1.5rem;
          }
          
          .plan-footer {
            padding: 1.5rem;
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
            font-size: 1.8rem;
          }
          
          .plans-hero p {
            font-size: 1rem;
          }
          
          .plan-header i {
            font-size: 2rem;
          }
          
          .plan-header h2 {
            font-size: 1.3rem;
          }
          
          .price {
            font-size: 1.8rem;
          }
          
          .plan-features li {
            font-size: 0.95rem;
            padding: 0.6rem 0;
          }
          
          .plan-cta {
            padding: 0.7rem 1.2rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
};

export default PlansPage; 