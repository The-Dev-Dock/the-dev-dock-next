import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="section-header-wrapper">
        <h2>Our Services</h2>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <i className="fas fa-laptop-code"></i>
          <h3>Internship Programs</h3>
          <p>Gain hands-on experience with our industry-focused internship opportunities</p>
        </div>
        <div className="service-card">
          <i className="fas fa-chalkboard-teacher"></i>
          <h3>Expert Training</h3>
          <p>Learn from industry experts through our comprehensive training programs</p>
        </div>
        <div className="service-card">
          <i className="fas fa-user-graduate"></i>
          <h3>1-1 Mentorship</h3>
          <p>Get personalized guidance from experienced professionals</p>
        </div>

        <div className="service-card">
          <i className="fas fa-comments"></i>
          <h3>Mock Interviews</h3>
          <p>Prepare for your dream job with our mock interview sessions</p>
        </div>
        <div className="service-card">
          <i className="fas fa-certificate"></i>
          <h3>Certification</h3>
          <p>Earn recognized certificates upon program completion</p>
        </div>
        <div className="service-card">
          <i className="fas fa-file-alt"></i>
          <h3>Resume Building</h3>
          <p>Create an industry-standard resume that highlights your skills and stands out to recruiters</p>
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
          margin-bottom: 3rem;
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