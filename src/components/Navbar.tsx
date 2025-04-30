'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    
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

    // Function to handle navigation
    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      if (!isHomePage && sectionId.startsWith('#')) {
        e.preventDefault();
        window.location.href = `/${sectionId}`;
      } else if (isHomePage && sectionId.startsWith('#')) {
        // Allow smooth scrolling on home page
        e.preventDefault();
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // For non-anchor links or non-homepage, let normal navigation happen
      
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    return (
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="logo">
          <Image 
            src="/assets/devdocklight.png" 
            alt="The Dev Dock" 
            width={150} 
            height={40} 
            className="logo-image"
          />
        </Link>
        
        <div className="nav-links desktop-menu">
          <a 
            href={isHomePage ? "#services" : "/#services"} 
            onClick={(e) => handleNavigation(e, "#services")}
          >
            Services
          </a>
          <a 
            href={isHomePage ? "#roadmap" : "/#roadmap"} 
            onClick={(e) => handleNavigation(e, "#roadmap")}
          >
            Roadmap
          </a>
          <a 
            href={isHomePage ? "#features" : "/#features"} 
            onClick={(e) => handleNavigation(e, "#features")}
          >
            Features
          </a>
          <a 
            href="/plans"
          >
            Internship Programs
          </a>
          <a 
            href={isHomePage ? "#contact" : "/#contact"} 
            onClick={(e) => handleNavigation(e, "#contact")}
            className="contact-button"
          >
            Contact Us
          </a>
        </div>
        
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a 
            href={isHomePage ? "#services" : "/#services"} 
            onClick={(e) => handleNavigation(e, "#services")}
          >
            Services
          </a>
          <a 
            href={isHomePage ? "#roadmap" : "/#roadmap"} 
            onClick={(e) => handleNavigation(e, "#roadmap")}
          >
            Roadmap
          </a>
          <a 
            href={isHomePage ? "#features" : "/#features"} 
            onClick={(e) => handleNavigation(e, "#features")}
          >
            Features
          </a>
          <a 
            href="/plans"
            onClick={() => setIsMenuOpen(false)}
          >
            Internship Programs
          </a>
          <a 
            href={isHomePage ? "#contact" : "/#contact"} 
            onClick={(e) => handleNavigation(e, "#contact")}
            className="contact-button"
          >
            Contact Us
          </a>
        </div>
        
        <style jsx>{`
          .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1rem 5%;
            background: transparent;
            backdrop-filter: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            box-shadow: none;
            animation: slideDown 0.5s ease forwards;
            transition: all 0.3s ease;
          }
          
          .navbar.scrolled {
            padding: 0.8rem 5%;
            background-color: #0B1215 !important;
            background-color: rgba(11, 18, 21, 0.75) !important;
            backdrop-filter: blur(1px) !important;
            -webkit-backdrop-filter: blur(1px) !important;
            box-shadow: none !important;
          }
          
          .logo {
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
            text-decoration: none;
            cursor: pointer;
          }
          
          .logo:hover {
            transform: translateY(-2px);
          }
          
          .logo-image {
            object-fit: contain;
          }
          
          .desktop-menu a {
            margin-left: 2rem;
            text-decoration: none;
            color: white;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .desktop-menu a:not(.contact-button)::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-color);
            transition: width 0.3s ease;
          }
          
          .desktop-menu a:not(.contact-button):hover::after {
            width: 100%;
          }
          
          .contact-button {
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            padding: 0.6rem 1.2rem;
            border-radius: 50px;
            margin-left: 2rem;
            font-weight: 600;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            border: none;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          
          .contact-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
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
            
            .mobile-menu a.contact-button {
              background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
              padding: 0.8rem 1.5rem;
              border-radius: 50px;
              margin-top: 1.5rem;
              text-align: center;
              font-weight: 600;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
              border: none;
              border-bottom: none;
            }
            
            .mobile-menu a.contact-button:hover {
              transform: translateY(-3px);
              padding-left: 1.5rem;
              color: white;
              box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
            }
            
            .mobile-menu a:last-child {
              border-bottom: none;
            }
            
            .mobile-menu a:not(.contact-button):hover {
              color: var(--primary-color);
              padding-left: 0.5rem;
            }

            .logo-image {
              width: 120px;
              height: 32px;
            }
          }
          
          @media (max-width: 480px) {
            .logo {
              padding: 0;
            }
            
            .logo-image {
              width: 100px;
              height: 26px;
            }
            
            .mobile-menu {
              width: 85%;
            }
          }
        `}</style>
      </nav>
    );
}