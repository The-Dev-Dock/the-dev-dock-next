import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
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
        {/* <div className="service-card">
          <i className="fas fa-clock"></i>
          <h3>Night Live Classes</h3>
          <p>Flexible learning schedule with live interactive sessions</p>
        </div> */}
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
      </div>
    </section>
  );
};

export default Services;