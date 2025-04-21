import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Why Choose Us?</h2>
      <div className="features-grid">
        <div className="feature">
          <i className="fas fa-rocket"></i>
          <h3>Career Launch</h3>
          <p>Kickstart your career with industry-relevant skills</p>
        </div>
        <div className="feature">
          <i className="fas fa-users"></i>
          <h3>Expert Network</h3>
          <p>Connect with industry professionals</p>
        </div>
        <div className="feature">
          <i className="fas fa-clock"></i>
          <h3>Flexible Learning</h3>
          <p>Learn at your own pace with night classes</p>
        </div>
        <div className="feature">
          <i className="fas fa-certificate"></i>
          <h3>Certified Programs</h3>
          <p>Get recognized certificates for your achievements</p>
        </div>
      </div>
    </section>
  );
};

export default Features;