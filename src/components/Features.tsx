import React from 'react';
import Link from 'next/link';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="section-header-wrapper">
        <h2>Not <span className="gradient-text">Another</span> Course</h2>
      </div>
      <div className="features-container">
        <p className="section-subtitle">The Dev Dock is a career gateway — a community of developers mentoring the next generation</p>
        
        <div className="features-layout">
          <div className="features-image">
            <div className="image-container">
              <div className="hexagon-grid">
                <div className="hexagon hex1">
                  <i className="fas fa-code"></i>
                </div>
                <div className="hexagon hex2">
                  <i className="fas fa-brain"></i>
                </div>
                <div className="hexagon hex3">
                  <i className="fas fa-users"></i>
                </div>
                <div className="hexagon hex4">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="hexagon hex5">
                  <i className="fas fa-rocket"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="features-content">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-users"></i></div>
              <div className="feature-details">
                <h3>Real Developers (not trainers)</h3>
                <p>Learn from professionals who are actively building products in the industry, not just teachers. Our mentors bring real-world challenges and practical insights straight from tech companies.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-project-diagram"></i></div>
              <div className="feature-details">
                <h3>Real Projects (not dummy tasks)</h3>
                <p>Work on production-quality projects that solve actual problems. Your portfolio will showcase genuine solutions that demonstrate your ability to handle professional-level work.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-user-tie"></i></div>
              <div className="feature-details">
                <h3>Personalized Mentorship (not generic advice)</h3>
                <p>Receive guidance tailored to your specific skills, goals, and learning style. Our 1:1 mentorship ensures you get exactly the support you need to progress quickly.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-rocket"></i></div>
              <div className="feature-details">
                <h3>Industry Launch Support</h3>
                <p>From resume reviews to mock interviews and job application strategy, we support you until you land your first tech role. Our network of industry connections gives you an advantage in the job market.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="view-courses-container">
          <Link href="/plans" className="view-courses-button">
            <span>Join The LaunchPad</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        .features {
          padding: 8rem 5%;
          position: relative;
          background: transparent;
          overflow: hidden;
        }
        
        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .view-courses-container {
          display: flex;
          justify-content: center;
          margin-top: 4rem;
          margin-bottom: 1rem;
        }
        
        .view-courses-button {
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          border: none;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.05rem;
        }
        
        .view-courses-button span {
          font-weight: 700;
          color: white;
        }
        
        .view-courses-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }
        
        .view-courses-button i {
          transition: transform 0.3s ease;
        }
        
        .view-courses-button:hover i {
          transform: translateX(5px);
        }
        
        .features::before {
          content: '';
          position: absolute;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
          top: -300px;
          left: -300px;
          z-index: 1;
        }
        
        .features::after {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%);
          bottom: -200px;
          right: -200px;
          z-index: 1;
        }
        
        h2 {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 1rem;
          color: white;
          font-weight: 700;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        
        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: var(--light-text);
          max-width: 700px;
          margin: 0 auto 4rem;
        }
        
        .features-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }
        
        .features-image {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hexagon-grid {
          position: relative;
          width: 400px;
          height: 420px;
        }
        
        .hexagon {
          position: absolute;
          width: 90px;
          height: 105px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: all 0.3s ease;
        }
        
        .hexagon i {
          font-size: 2rem;
          color: var(--primary-color);
        }
        
        .hex1 {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          animation: float 6s ease-in-out infinite;
        }
        
        .hex2 {
          top: 40%;
          left: 0;
          animation: float 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .hex3 {
          top: 40%;
          right: 0;
          animation: float 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .hex4 {
          bottom: 0;
          left: 25%;
          animation: float 8s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .hex5 {
          bottom: 0;
          right: 25%;
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .hexagon:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.1);
        }
        
        .hexagon:hover i {
          transform: scale(1.2);
        }
        
        .features-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .feature-card {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        
        .feature-icon {
          width: 60px;
          height: 60px;
          min-width: 60px;
          background: rgba(37, 99, 235, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(37, 99, 235, 0.2);
        }
        
        .feature-icon i {
          font-size: 1.5rem;
          color: var(--primary-color);
        }
        
        .feature-number {
          font-size: 3rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.1);
          line-height: 1;
          min-width: 70px;
        }
        
        .feature-details {
          flex: 1;
        }
        
        .feature-details h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .feature-details p {
          color: var(--light-text);
          font-size: 1rem;
          line-height: 1.6;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        @media (max-width: 1200px) {
          .features-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .features-image {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .features {
            padding: 5rem 5%;
          }
          
          h2 {
            font-size: 2.5rem;
          }
          
          .feature-card {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          
          .feature-icon {
            margin-bottom: 0.5rem;
          }
          
          .feature-details h3 {
            font-size: 1.3rem;
          }
        }
        
        @media (max-width: 480px) {
          .features {
            padding: 4rem 5%;
          }
          
          h2 {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
            margin-bottom: 3rem;
          }
          
          .feature-details h3 {
            font-size: 1.2rem;
          }
          
          .feature-details p {
            font-size: 0.95rem;
          }
          
          .view-courses-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;