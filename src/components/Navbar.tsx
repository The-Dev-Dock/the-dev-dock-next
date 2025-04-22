export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-symbol">D</div>
          </div>
          <div className="logo-text">
            <span className="logo-brand">The Dev Dock</span>
            <span className="logo-tagline">Code. Connect. Create.</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </div>
        
        <style jsx>{`
          .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1rem 5%;
            background: rgba(26, 26, 26, 0.95);
            backdrop-filter: blur(10px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            animation: slideDown 0.5s ease forwards;
          }
          
          .logo {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.5rem 1rem;
            background: rgba(37, 99, 235, 0.1);
            border-radius: 50px;
            border: 1px solid rgba(37, 99, 235, 0.2);
            transition: all 0.3s ease;
          }
          
          .logo-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            border-radius: 12px;
            position: relative;
            overflow: hidden;
          }
          
          .logo-symbol {
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
            position: relative;
            z-index: 1;
          }
          
          .logo-icon::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transform: translateX(-100%);
            transition: 0.5s;
          }
          
          .logo:hover .logo-icon::before {
            transform: translateX(100%);
          }
          
          .logo-text {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          
          .logo-brand {
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1;
          }
          
          .logo-tagline {
            font-size: 0.7rem;
            color: var(--accent-color);
            opacity: 0.8;
            letter-spacing: 1px;
          }
          
          .logo:hover {
            background: rgba(37, 99, 235, 0.15);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(37, 99, 235, 0.2);
          }
          
          .logo:hover .logo-tagline {
            opacity: 1;
          }
          
          .nav-links a {
            margin-left: 2rem;
            text-decoration: none;
            color: white;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-color);
            transition: width 0.3s ease;
          }
          
          .nav-links a:hover::after {
            width: 100%;
          }
          
          @media (max-width: 768px) {
            .navbar {
              padding: 1rem;
            }
            
            .nav-links {
              display: none;
            }
          }
        `}</style>
      </nav>
    );
  }