import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2>What Makes Us <span className="gradient-text">Unique</span></h2>
        <p className="section-subtitle">Our approach goes beyond standard education to create future tech leaders</p>
        
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
              <div className="feature-number">01</div>
              <div className="feature-details">
                <h3>Industry-Driven Curriculum</h3>
                <p>Our curriculum is co-designed with tech industry leaders to focus on the skills companies actually need, not just theoretical knowledge. We continuously update our materials based on industry feedback.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-number">02</div>
              <div className="feature-details">
                <h3>Project-Based Learning Model</h3>
                <p>You&apos;ll build real-world projects that tackle genuine business challenges. Our students graduate with portfolios featuring actual solutions to industry problems, not just classroom exercises.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-number">03</div>
              <div className="feature-details">
                <h3>Elite Mentor Network</h3>
                <p>Learn directly from senior developers and tech leaders currently working at top tech companies. Our mentors don&apos;t just teach; they guide you through the same challenges they face daily.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-number">04</div>
              <div className="feature-details">
                <h3>Guaranteed Placement Support</h3>
                <p>Our dedicated career team works with you until you&apos;re hired. We maintain exclusive relationships with hiring partners who prioritize our graduates, giving you a clear advantage in the job market.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="key-stats">
          <div className="stat">
            <div className="stat-value">100%</div>
            <div className="stat-label">Job Placement Support</div>
          </div>
          <div className="stat">
            <div className="stat-value">45+</div>
            <div className="stat-label">Industry Partners</div>
          </div>
          <div className="stat">
            <div className="stat-value">3x</div>
            <div className="stat-label">Faster Career Growth</div>
          </div>
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
          margin-bottom: 5rem;
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
          bottom: 5%;
          left: 20%;
          animation: float 6s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .hex5 {
          bottom: 5%;
          right: 20%;
          animation: float 7s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .hexagon:hover {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary-color);
          z-index: 10;
        }
        
        .features-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .feature-card {
          display: flex;
          gap: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateX(10px);
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .feature-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: rgba(37, 99, 235, 0.2);
          line-height: 1;
          min-width: 60px;
        }
        
        .feature-details h3 {
          color: white;
          margin-bottom: 0.8rem;
          font-size: 1.3rem;
        }
        
        .feature-details p {
          color: var(--light-text);
          font-size: 1rem;
          line-height: 1.6;
        }
        
        .key-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          padding: 3rem 2rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-value {
          font-size: 3rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .stat-label {
          color: white;
          font-size: 1rem;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        @media (max-width: 1200px) {
          .features {
            padding: 6rem 5%;
          }
          
          .features-layout {
            gap: 3rem;
          }
          
          .hexagon-grid {
            width: 350px;
            height: 380px;
          }
          
          .hexagon {
            width: 80px;
            height: 90px;
          }
          
          .hex2 {
            top: 40%;
            left: 0;
          }
          
          .hex3 {
            top: 40%;
            right: 0;
          }
          
          .hex4 {
            bottom: 5%;
            left: 20%;
          }
          
          .hex5 {
            bottom: 5%;
            right: 20%;
          }
        }
        
        @media (max-width: 992px) {
          .features-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .features-image {
            order: 2;
          }
          
          .features-content {
            order: 1;
          }
          
          .hexagon-grid {
            width: 450px;
            height: 420px;
          }
          
          .hexagon {
            width: 90px;
            height: 100px;
          }
          
          .hex1 {
            top: 0;
          }
          
          .hex2 {
            top: 40%;
            left: 5%;
          }
          
          .hex3 {
            top: 40%;
            right: 5%;
          }
          
          .hex4 {
            bottom: 5%;
            left: 25%;
          }
          
          .hex5 {
            bottom: 5%;
            right: 25%;
          }
        }
        
        @media (max-width: 768px) {
          .features {
            padding: 5rem 5% 4rem;
          }
          
          h2 {
            font-size: 2.2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
            margin-bottom: 3rem;
          }
          
          .feature-card {
            padding: 1.2rem;
          }
          
          .feature-number {
            font-size: 2rem;
            min-width: 50px;
          }
          
          .feature-details h3 {
            font-size: 1.2rem;
          }
          
          .key-stats {
            padding: 2rem 1.5rem;
            gap: 1.5rem;
          }
          
          .stat-value {
            font-size: 2.5rem;
          }
          
          .stat-label {
            font-size: 0.9rem;
          }
          
          .hexagon-grid {
            width: 380px;
            height: 370px;
          }
          
          .hexagon {
            width: 75px;
            height: 85px;
          }
          
          .hex1 {
            top: 5%;
          }
          
          .hex2 {
            top: 45%;
            left: 5%;
          }
          
          .hex3 {
            top: 45%;
            right: 5%;
          }
          
          .hex4 {
            bottom: 5%;
            left: 25%;
          }
          
          .hex5 {
            bottom: 5%;
            right: 25%;
          }
          
          .hexagon i {
            font-size: 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .features {
            padding: 4rem 5% 3rem;
          }
          
          h2 {
            font-size: 1.8rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
            margin-bottom: 2.5rem;
          }
          
          .hexagon-grid {
            width: 280px;
            height: 320px;
          }
          
          .hexagon {
            width: 65px;
            height: 75px;
          }
          
          .hex2 {
            top: 40%;
            left: 0;
          }
          
          .hex3 {
            top: 40%;
            right: 0;
          }
          
          .hex4 {
            bottom: 0;
            left: 25%;
          }
          
          .hex5 {
            bottom: 0;
            right: 25%;
          }
          
          .hexagon i {
            font-size: 1.3rem;
          }
          
          .feature-card {
            flex-direction: column;
            gap: 0.8rem;
            padding: 1.2rem;
          }
          
          .feature-number {
            font-size: 1.8rem;
          }
          
          .key-stats {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem;
          }
          
          .stat-value {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;