import React from 'react';

const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap">
      <h2>Your Success Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-line"></div>
        <div className="roadmap-steps">
          <div className="roadmap-step">
            <div className="roadmap-connector"></div>
            <div className="roadmap-icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <div className="roadmap-content">
              <h3>Expert Training Sessions</h3>
              <p>Learn from industry experts through interactive sessions</p>
            </div>
          </div>
          
          <div className="roadmap-step">
            <div className="roadmap-connector"></div>
            <div className="roadmap-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="roadmap-content">
              <h3>Project Building</h3>
              <p>Apply your knowledge by building real-world projects</p>
            </div>
          </div>
          
          <div className="roadmap-step">
            <div className="roadmap-connector"></div>
            <div className="roadmap-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="roadmap-content">
              <h3>Live Project Internship</h3>
              <p>Gain hands-on experience working on active industry projects</p>
            </div>
          </div>
          
          <div className="roadmap-step">
            <div className="roadmap-connector"></div>
            <div className="roadmap-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <div className="roadmap-content">
              <h3>Internship Certification</h3>
              <p>Receive official certification validating your work experience</p>
            </div>
          </div>
          
          <div className="roadmap-step">
            <div className="roadmap-connector"></div>
            <div className="roadmap-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="roadmap-content">
              <h3>Resume Building</h3>
              <p>Create a professional resume that highlights your new skills</p>
            </div>
          </div>
          
          <div className="roadmap-step">
            <div className="roadmap-connector"></div>
            <div className="roadmap-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <div className="roadmap-content">
              <h3>Career Mentorship</h3>
              <p>Receive guidance from mentors to navigate your career path</p>
            </div>
          </div>
          
          <div className="roadmap-step">
            <div className="roadmap-connector"></div>
            <div className="roadmap-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="roadmap-content">
              <h3>Job Profile Building</h3>
              <p>Develop your professional identity for the job market</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;