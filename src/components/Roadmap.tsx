import React from 'react';

const roadmapSteps = [
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Expert Training Sessions',
    desc: 'Learn from industry experts through interactive sessions',
  },
  {
    icon: 'fas fa-code',
    title: 'Project Building',
    desc: 'Apply your knowledge by building real-world projects',
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Live Project Internship',
    desc: 'Gain hands-on experience working on active industry projects',
  },
  {
    icon: 'fas fa-certificate',
    title: 'Internship Certification',
    desc: 'Receive official certification validating your work experience',
  },
  {
    icon: 'fas fa-file-alt',
    title: 'Resume Building',
    desc: 'Create a professional resume that highlights your new skills',
  },
  {
    icon: 'fas fa-user-tie',
    title: 'Career Mentorship',
    desc: 'Receive guidance from mentors to navigate your career path',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Job Profile Building',
    desc: 'Develop your professional identity for the job market',
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap">
      <div className="section-header-wrapper">
        <h2>Your Success Roadmap</h2>
      </div>
      <div className="roadmap-floating-bg"></div>
      <div className="roadmap-timeline">
        {roadmapSteps.map((step, idx) => (
          <div className={`roadmap-row ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
            {/* Left content */}
            {idx % 2 === 0 ? (
              <div className="roadmap-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ) : (
              <div className="roadmap-spacer"></div>
            )}
            {/* Center icon */}
            <div className="roadmap-center">
              <span className="roadmap-dot"></span>
              <div className="roadmap-icon-floating">
                <i className={step.icon}></i>
              </div>
            </div>
            {/* Right content */}
            {idx % 2 === 1 ? (
              <div className="roadmap-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ) : (
              <div className="roadmap-spacer"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;