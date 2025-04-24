'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-symbol">D</div>
          </div>
          <div className="logo-text">
            <span className="logo-brand">The Dev Dock</span>
            <span className="logo-tagline">Code. Connect. Create.</span>
          </div>
        </div>
        
        <div className="nav-links desktop-menu">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#roadmap">Roadmap</a>
          <a href="/plans">Plans</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#features" onClick={toggleMenu}>Features</a>
          <a href="#roadmap" onClick={toggleMenu}>Roadmap</a>
          <a href="/plans" onClick={toggleMenu}>Plans</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
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
            transition: all 0.3s ease;
          }
          
          .navbar.scrolled {
            padding: 0.8rem 5%;
            background: rgba(26, 26, 26, 0.98);
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
          
          .desktop-menu a {
            margin-left: 2rem;
            text-decoration: none;
            color: white;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .desktop-menu a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-color);
            transition: width 0.3s ease;
          }
          
          .desktop-menu a:hover::after {
            width: 100%;
          }
          
          .mobile-menu-button {
            display: none;
            cursor: pointer;
            z-index: 1001;
          }
          
          .hamburger {
            width: 30px;
            height: 24px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          
          .hamburger span {
            display: block;
            width: 100%;
            height: 3px;
            background-color: white;
            border-radius: 3px;
            transition: all 0.3s ease;
          }
          
          .hamburger.active span:nth-child(1) {
            transform: translateY(10px) rotate(45deg);
          }
          
          .hamburger.active span:nth-child(2) {
            opacity: 0;
          }
          
          .hamburger.active span:nth-child(3) {
            transform: translateY(-10px) rotate(-45deg);
          }
          
          .mobile-menu {
            display: none;
          }
          
          @media (max-width: 768px) {
            .navbar {
              padding: 1rem;
            }
            
            .desktop-menu {
              display: none;
            }
            
            .mobile-menu-button {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .mobile-menu {
              display: flex;
              flex-direction: column;
              position: fixed;
              top: 0;
              right: -100%;
              width: 75%;
              height: 100vh;
              background: rgba(26, 26, 26, 0.98);
              backdrop-filter: blur(10px);
              box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
              transition: right 0.3s ease;
              padding: 5rem 2rem 2rem;
              z-index: 1000;
            }
            
            .mobile-menu.open {
              right: 0;
            }
            
            .mobile-menu a {
              color: white;
              text-decoration: none;
              padding: 1rem 0;
              font-size: 1.2rem;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              transition: all 0.3s ease;
            }
            
            .mobile-menu a:last-child {
              border-bottom: none;
            }
            
            .mobile-menu a:hover {
              color: var(--primary-color);
              padding-left: 0.5rem;
            }
          }
          
          @media (max-width: 480px) {
            .logo {
              padding: 0.4rem 0.8rem;
            }
            
            .logo-icon {
              width: 35px;
              height: 35px;
            }
            
            .logo-symbol {
              font-size: 1.5rem;
            }
            
            .logo-brand {
              font-size: 1.3rem;
            }
            
            .logo-tagline {
              font-size: 0.6rem;
            }
            
            .mobile-menu {
              width: 85%;
            }
          }
        `}</style>
      </nav>
    );
  }