'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background from '../components/Background';

export default function Home() {
  // Initialize all animations and effects
  useEffect(() => {
    // Custom cursor effect
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const cursorFollower = document.querySelector('.cursor-follower') as HTMLElement;
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    let lastScrollY = window.scrollY;
    
    if (cursor && cursorFollower) {
      // Update cursor position
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Add particle effect on mouse move
        createParticle(e.clientX, e.clientY);
      });
      
      // Smooth cursor animation
      function animateCursor() {
        // Main cursor
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
    
        // Follower cursor
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = `${followerX}px`;
        cursorFollower.style.top = `${followerY}px`;
    
        requestAnimationFrame(animateCursor);
      }
      
      // Start cursor animation
      animateCursor();
      
      // Add hover effect to interactive elements
      document.querySelectorAll('a, button, .service-card, .feature').forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.classList.add('hover');
          cursorFollower.classList.add('hover');
          createParticleBurst(element as HTMLElement);
        });
        
        element.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
          cursorFollower.classList.remove('hover');
        });
      });
    }
    
    // Scroll-based particle effect and UI updates
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      const scrollSpeed = Math.abs(scrollY - lastScrollY);
      
      // Create particles based on scroll speed
      if (scrollSpeed > 5) {
        const particleCount = Math.min(Math.floor(scrollSpeed / 5), 10);
        for (let i = 0; i < particleCount; i++) {
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          createScrollParticle(x, y, scrollDirection);
        }
      }

      // Hide "Scroll to Explore" when user has scrolled down
      const heroScroll = document.querySelector('.hero-scroll') as HTMLElement;
      if (heroScroll) {
        if (scrollY > 100) {
          heroScroll.style.opacity = '0';
          heroScroll.style.visibility = 'hidden';
        } else {
          heroScroll.style.opacity = '1';
          heroScroll.style.visibility = 'visible';
        }
      }
      
      lastScrollY = scrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Particle effects
    function createParticle(x: number, y: number) {
      const particlesContainer = document.querySelector('.particles');
      if (!particlesContainer) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.animation = 'none';
      particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`;
      
      particlesContainer.appendChild(particle);
      
      // Trigger reflow
      void particle.offsetHeight;
      particle.style.animation = 'float 2s ease-out forwards';
      
      // Remove particle after animation
      setTimeout(() => particle.remove(), 2000);
    }
    
    function createScrollParticle(x: number, y: number, direction: string) {
      const particlesContainer = document.querySelector('.particles');
      if (!particlesContainer) return;
      
      const particle = document.createElement('div');
      particle.className = 'scroll-particle';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.animation = 'none';
      particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
      
      particlesContainer.appendChild(particle);
      
      // Trigger reflow
      void particle.offsetHeight;
      particle.style.animation = `scrollFloat ${1 + Math.random()}s ease-out forwards`;
      particle.style.setProperty('--direction', direction === 'down' ? '1' : '-1');
      
      // Remove particle after animation
      setTimeout(() => particle.remove(), 2000);
    }
    
    function createParticleBurst(element: HTMLElement) {
      const particlesContainer = document.querySelector('.particles');
      if (!particlesContainer) return;
      
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const xOffset = Math.cos(angle) * 100;
        const yOffset = Math.sin(angle) * 100;
        
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.animation = 'none';
        particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`;
        
        // Set x and y position variables for the CSS animation
        particle.style.setProperty('--x-position', `${xOffset}px`);
        particle.style.setProperty('--y-position', `${yOffset}px`);
        
        particlesContainer.appendChild(particle);
        
        // Trigger reflow
        void particle.offsetHeight;
        particle.style.animation = `float 1s ease-out forwards, particleBurst ${1 + Math.random()}s ease-out forwards`;
        
        // Remove particle after animation
        setTimeout(() => particle.remove(), 2000);
      }
    }
    
    // Add dynamic styles for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleBurst {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(var(--x-position), var(--y-position));
        }
      }

      @keyframes scrollFloat {
        0% {
          transform: translate(0, 0) scale(1);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translate(
            calc(var(--direction) * 100px),
            calc(var(--direction) * -50px)
          ) scale(0);
          opacity: 0;
        }
      }

      .scroll-particle {
        position: absolute;
        width: 3px;
        height: 3px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
      }

      .service-card, .feature, .contact-form {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
      }

      .service-card.animate, .feature.animate, .contact-form.animate {
        opacity: 1;
        transform: translateY(0);
      }

      .service-card {
        transition: all 0.3s ease;
      }

      .service-card:hover {
        transform: translateY(-10px) scale(1.02);
      }

      .feature {
        transition: all 0.3s ease;
      }

      .feature:hover {
        transform: translateY(-5px);
      }

      .social-links a {
        transition: all 0.3s ease;
      }

      .social-links a:hover {
        transform: translateY(-3px) scale(1.1);
      }
    `;
    document.head.appendChild(style);
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.style.background = 'rgba(26, 26, 26, 0.98)';
          navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
          navbar.style.background = 'rgba(26, 26, 26, 0.95)';
          navbar.style.boxShadow = 'none';
        }
      });
    }
    
    // Animate elements on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.service-card, .feature, .contact-form');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('animate');
        }
      });
    };
    
    // Initialize scroll animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on mount
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const element = e.currentTarget as HTMLAnchorElement;
        const href = element.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      
      {/* Background */}
      <Background />
      
      {/* Main Content */}
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}