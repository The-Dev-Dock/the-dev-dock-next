export default function Hero() {
    return (
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-content">
              <div className="hero-badge">
                <span>🚀 Launch Your Career</span>
              </div>
              <h1 className="hero-title">
                <span className="gradient-text">Transform</span> Your Future
                <br />With Tech Excellence
              </h1>
              <p className="hero-description">
                Join our elite program and master the latest tech skills with industry experts. 
                Get hands-on experience and launch your career in tech.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="cta-button primary">
                  <span>Get Started</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
                <a href="#roadmap" className="cta-button secondary">
                  <span>View Roadmap</span>
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Students Placed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Partner Companies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-visual">
              <div className="floating-card card-1">
                <i className="fas fa-code"></i>
                <span>Web Development</span>
              </div>
              <div className="floating-card card-2">
                <i className="fas fa-link"></i>
                <span>Blockchain Development</span>
              </div>
              <div className="floating-card card-3">
                <i className="fas fa-server"></i>
                <span>Dev-Ops</span>
              </div>
              <div className="floating-card card-4">
                <i className="fas fa-robot"></i>
                <span>Artificial Intelligence</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll to Explore</span>
          <div className="scroll-line"></div>
        </div>
        
        <style jsx>{`
          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            padding: 100px 5%;
            overflow: hidden;
          }
          
          .hero-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
          }
          
          .hero-left {
            display: flex;
            align-items: center;
          }
          
          .hero-content {
            max-width: 600px;
          }
          
          .hero-badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: rgba(37, 99, 235, 0.1);
            border: 1px solid rgba(37, 99, 235, 0.2);
            border-radius: 50px;
            margin-bottom: 1.5rem;
            animation: fadeInUp 0.5s ease;
          }
          
          .hero-badge span {
            color: var(--primary-color);
            font-weight: 600;
            font-size: 0.9rem;
          }
          
          .hero-title {
            font-size: 4rem;
            line-height: 1.2;
            margin-bottom: 1.5rem;
            color: white;
            animation: fadeInUp 0.5s ease 0.1s;
            animation-fill-mode: both;
          }
          
          .hero-title .gradient-text {
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
          }
          
          .hero-description {
            font-size: 1.25rem;
            color: var(--light-text);
            margin-bottom: 2rem;
            line-height: 1.6;
            animation: fadeInUp 0.5s ease 0.2s;
            animation-fill-mode: both;
          }
          
          .hero-buttons {
            display: flex;
            gap: 1rem;
            margin-bottom: 3rem;
            animation: fadeInUp 0.5s ease 0.3s;
            animation-fill-mode: both;
          }
          
          .cta-button {
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .cta-button.primary {
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            color: white;
            border: none;
          }
          
          .cta-button.secondary {
            background: transparent;
            color: white;
            border: 2px solid var(--accent-color);
          }
          
          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
          
          .cta-button i {
            transition: transform 0.3s ease;
          }
          
          .cta-button:hover i {
            transform: translateX(5px);
          }
          
          .hero-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            animation: fadeInUp 0.5s ease 0.4s;
            animation-fill-mode: both;
          }
          
          .stat-item {
            text-align: center;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }
          
          .stat-item:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.1);
          }
          
          .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
          }
          
          .stat-label {
            color: var(--light-text);
            font-size: 0.9rem;
          }
          
          .hero-right {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .hero-visual {
            position: relative;
            width: 100%;
            height: 500px;
          }
          
          .floating-card {
            position: absolute;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            gap: 1rem;
            color: white;
            transition: all 0.3s ease;
          }
          
          .floating-card i {
            font-size: 1.5rem;
            color: var(--accent-color);
          }
          
          .card-1 {
            top: 10%;
            left: 10%;
            animation: float 6s ease-in-out infinite;
          }
          
          .card-2 {
            top: 30%;
            right: 10%;
            animation: float 6s ease-in-out infinite;
            animation-delay: 1s;
          }
          
          .card-3 {
            bottom: 30%;
            left: 15%;
            animation: float 6s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .card-4 {
            bottom: 10%;
            right: 15%;
            animation: float 6s ease-in-out infinite;
            animation-delay: 3s;
          }
          
          .hero-scroll {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            color: var(--light-text);
          }
          
          .scroll-line {
            width: 2px;
            height: 60px;
            background: linear-gradient(to bottom, var(--primary-color), transparent);
            animation: scrollLine 2s ease-in-out infinite;
          }
          
          @media (max-width: 1024px) {
            .hero-container {
              grid-template-columns: 1fr;
              gap: 3rem;
              text-align: center;
            }
            
            .hero-left {
              justify-content: center;
            }
            
            .hero-content {
              max-width: 800px;
            }
            
            .hero-buttons {
              justify-content: center;
            }
            
            .hero-stats {
              max-width: 600px;
              margin: 0 auto;
            }
            
            .hero-visual {
              height: 400px;
            }
          }
          
          @media (max-width: 768px) {
            .hero {
              padding: 80px 20px;
            }
            
            .hero-title {
              font-size: 2.5rem;
            }
            
            .hero-description {
              font-size: 1.1rem;
            }
            
            .hero-buttons {
              flex-direction: column;
            }
            
            .hero-stats {
              grid-template-columns: 1fr;
            }
            
            .hero-visual {
              height: 300px;
            }
            
            .floating-card {
              padding: 1rem;
            }
          }
        `}</style>
      </section>
    );
  }