import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="section-header-wrapper">
        <h2>Why The <span className="gradient-text">LaunchPad</span> Works</h2>
      </div>
      <p className="section-subtitle">Our approach goes beyond standard education to create future tech leaders</p>
      <div className="services-grid">
        <div className="service-card">
          <i className="fas fa-users"></i>
          <h3>Community First</h3>
          <p>Join a private network of working developers who are invested in your success</p>
        </div>
        <div className="service-card">
          <i className="fas fa-project-diagram"></i>
          <h3>Real Projects</h3>
          <p>Build actual solutions to real-world problems, not dummy classroom exercises</p>
        </div>
        <div className="service-card">
          <i className="fas fa-user-tie"></i>
          <h3>1:1 Mentorship</h3>
          <p>Learn directly from senior developers who guide you through industry challenges</p>
        </div>

        <div className="service-card">
          <i className="fas fa-laptop-code"></i>
          <h3>Internship Simulation</h3>
          <p>Experience what it&apos;s like to work in a real tech team with agile practices</p>
        </div>
        <div className="service-card">
          <i className="fas fa-comments"></i>
          <h3>Mock Interviews</h3>
          <p>Practice with real tech interviewers who know what companies are looking for</p>
        </div>
        <div className="service-card">
          <i className="fas fa-rocket"></i>
          <h3>Career Launch Support</h3>
          <p>Get help with resume building, job applications, and interview preparation until you land your first tech job</p>
        </div>
      </div>
      
      <style jsx>{`
        .services {
          padding: 5rem 5%;
          background: transparent;
          position: relative;
        }
        
        .services h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: white;
          position: relative;
          display: inline-block;
        }
        
        .services h2::after {
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
        
        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: var(--light-text);
          max-width: 700px;
          margin: 0 auto 3rem;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .section-header-wrapper {
          text-align: center;
          margin-bottom: 0.5rem;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .service-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: translateX(-100%);
          transition: 0.5s;
        }
        
        .service-card:hover::before {
          transform: translateX(100%);
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          background: rgba(255, 255, 255, 0.1);
        }
        
        .service-card i {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }
        
        .service-card:hover i {
          transform: scale(1.2);
        }
        
        .service-card h3 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .service-card p {
          color: #ccc;
          font-size: 1rem;
          line-height: 1.5;
        }
        
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .services {
            padding: 4rem 5%;
          }
          
          .services h2 {
            font-size: 2.2rem;
            margin-bottom: 2.5rem;
          }
          
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.5rem;
          }
          
          .service-card {
            padding: 1.8rem;
          }
          
          .service-card i {
            font-size: 2.2rem;
            margin-bottom: 1.2rem;
          }
          
          .service-card h3 {
            font-size: 1.3rem;
          }
        }
        
        @media (max-width: 480px) {
          .services {
            padding: 3rem 1rem;
          }
          
          .services h2 {
            font-size: 1.8rem;
            margin-bottom: 2rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .service-card {
            padding: 1.5rem;
          }
          
          .service-card i {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .service-card h3 {
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
          }
          
          .service-card p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;