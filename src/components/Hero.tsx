export default function Hero() {
    return (
      <>
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="hero-left">
              <div className="hero-content">
                <div className="hero-badge">
                  <span>🚀 Not Another Course</span>
                </div>
                <h1 className="hero-title">
                  The Dev Dock <span className="gradient-text">LaunchPad</span>
                  <br />A Career Movement
                </h1>
                <p className="hero-description">
                  Your invitation into a private community of working developers who will train, mentor, and guide you until you land your first tech job. Real projects. Real mentorship. Real results.
                </p>
                <div className="hero-features">
                  <div className="hero-feature">
                    <i className="fas fa-user-friends"></i>
                    <span>1:1 Mentorship</span>
                  </div>
                  <div className="hero-feature">
                    <i className="fas fa-laptop-code"></i>
                    <span>Live Internship Projects</span>
                  </div>
                  <div className="hero-feature">
                    <i className="fas fa-brain"></i>
                    <span>Mock Interviews</span>
                  </div>
                </div>
                <div className="hero-buttons">
                  <a href="/plans" className="cta-button primary">
                    <span>Explore LaunchPad</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                  <a href="#features" className="cta-button secondary">
                    <span>How It Works</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <i className="fas fa-code"></i>
                  <span>Full Stack Development</span>
                </div>
                <div className="floating-card card-2">
                  <i className="fas fa-link"></i>
                  <span>Blockchain Development</span>
                </div>
                <div className="floating-card card-3">
                  <i className="fas fa-server"></i>
                  <span>DevOps & Cloud</span>
                </div>
                <div className="floating-card card-4">
                  <i className="fas fa-robot"></i>
                  <span>AI Development</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scroll">
            <span>Scroll to Explore</span>
            <div className="scroll-line"></div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <h2 className="stats-heading">What Sets Us Apart</h2>
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-value">100%</div>
                <div className="stat-label">Real Projects</div>
              </div>
              <div className="stat">
                <div className="stat-value">1:1</div>
                <div className="stat-label">Developer Mentorship</div>
              </div>
              <div className="stat">
                <div className="stat-value">Small</div>
                <div className="stat-label">Curated Batches</div>
              </div>
              <div className="stat">
                <div className="stat-value">Career</div>
                <div className="stat-label">Focused Approach</div>
              </div>
              <div className="stat">
                <div className="stat-value">Live</div>
                <div className="stat-label">Internship Simulation</div>
              </div>
              <div className="stat">
                <div className="stat-value">Job</div>
                <div className="stat-label">Support Network</div>
              </div>
            </div>
          </div>
        </section>
        
        <style jsx>{`
          /* Stats Section Styles */
          .stats-section {
            padding: 4rem 5%;
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(17, 24, 39, 0.8) 100%);
            position: relative;
          }
          
          .stats-container {
            max-width: 1400px;
            margin: 0 auto;
            text-align: center;
          }
          
          .stats-heading {
            font-size: 2.5rem;
            margin-bottom: 2.5rem;
            color: white;
            font-weight: 600;
          }
          
          .stats-heading::after {
            content: '';
            display: block;
            width: 80px;
            height: 4px;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            margin: 1rem auto 0;
            border-radius: 2px;
          }
          
          .stats-grid {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            gap: 1rem;
            background: rgba(255, 255, 255, 0.01);
            border-radius: 20px;
            padding: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.03);
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            overflow-x: auto;
            backdrop-filter: blur(5px);
          }
          
          .stat {
            text-align: center;
            flex: 1;
            min-width: max-content;
            padding: 0 0.5rem;
          }
          
          .stat-value {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            white-space: nowrap;
          }
          
          .stat-label {
            color: white;
            font-size: 0.9rem;
            white-space: nowrap;
          }
          
          @media (max-width: 1200px) {
            .stat-value {
              font-size: 2.4rem;
            }
            
            .stat-label {
              font-size: 0.85rem;
            }
            
            .stats-grid {
              padding: 1.5rem;
            }
          }
          
          @media (max-width: 992px) {
            .stats-grid {
              padding: 1.5rem 1rem;
            }
            
            .stat {
              padding: 0 0.3rem;
            }
            
            .stat-value {
              font-size: 2rem;
            }
            
            .stat-label {
              font-size: 0.8rem;
            }
          }
          
          @media (max-width: 768px) {
            .stats-section {
              padding: 3rem 5%;
            }
            
            .stats-heading {
              font-size: 2rem;
              margin-bottom: 2rem;
            }
            
            .stats-grid {
              padding: 1.5rem 1rem;
              gap: 0.8rem;
            }
            
            .stat-value {
              font-size: 1.8rem;
              margin-bottom: 0.3rem;
            }
            
            .stat-label {
              font-size: 0.75rem;
            }
          }
          
          @media (max-width: 480px) {
            .stats-section {
              padding: 2.5rem 5% 2rem;
            }
            
            .stats-heading {
              font-size: 1.8rem;
              margin-bottom: 1.5rem;
            }
            
            .stats-grid {
              flex-wrap: wrap;
              justify-content: center;
              gap: 1.2rem;
              padding: 1.2rem 0.8rem;
            }
            
            .stat {
              flex: 0 0 30%;
            }
            
            .stat-value {
              font-size: 1.6rem;
            }
            
            .stat-label {
              font-size: 0.7rem;
            }
          }
        
          /* Hero styles */
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
          
          .hero-features {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
            animation: fadeInUp 0.5s ease 0.25s;
            animation-fill-mode: both;
          }
          
          .hero-feature {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.05);
            padding: 0.6rem 1rem;
            border-radius: 50px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .hero-feature i {
            color: var(--primary-color);
            font-size: 1rem;
          }
          
          .hero-feature span {
            color: white;
            font-size: 0.9rem;
            font-weight: 500;
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
            z-index: 2;
            width: auto;
          }
          
          .floating-card i {
            font-size: 1.5rem;
            color: var(--accent-color);
            flex-shrink: 0;
          }
          
          .floating-card span {
            font-size: 1rem;
            line-height: 1.2;
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
              gap: 2rem;
            }
            
            .hero-title {
              font-size: 3.5rem;
            }
            
            .hero-content {
              text-align: center;
              margin: 0 auto;
            }
            
            .hero-features {
              justify-content: center;
            }
            
            .hero-buttons {
              justify-content: center;
            }
            
            .hero-right {
              display: none;
            }
          }
          
          @media (max-width: 768px) {
            .hero {
              padding: 120px 5% 80px;
            }
            
            .hero-title {
              font-size: 2.8rem;
            }
            
            .hero-description {
              font-size: 1.1rem;
            }
            
            .hero-feature {
              padding: 0.5rem 0.8rem;
            }
            
            .hero-feature span {
              font-size: 0.8rem;
            }
          }
          
          @media (max-width: 480px) {
            .hero-title {
              font-size: 2.2rem;
            }
            
            .hero-description {
              font-size: 1rem;
            }
            
            .hero-feature {
              padding: 0.4rem 0.7rem;
            }
            
            .hero-features {
              gap: 0.5rem;
            }
            
            .hero-buttons {
              flex-direction: column;
              gap: 1rem;
            }
            
            .hero-scroll {
              display: none;
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(2deg);
            }
            100% {
              transform: translateY(0px) rotate(0deg);
            }
          }
          
          @keyframes scrollLine {
            0% {
              height: 0;
              opacity: 0;
              transform: translateY(-10px);
            }
            50% {
              height: 60px;
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              height: 0;
              opacity: 0;
              transform: translateY(10px);
            }
          }
        `}</style>
      </>
    );
  }