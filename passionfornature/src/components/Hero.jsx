import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-pattern">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="nature-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="rgba(45, 90, 39, 0.1)"/>
                <path d="M5 15 Q10 10 15 15" stroke="rgba(74, 124, 89, 0.1)" strokeWidth="0.5" fill="none"/>
                <path d="M8 8 Q12 4 16 8" stroke="rgba(127, 176, 105, 0.1)" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#nature-pattern)"/>
          </svg>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title fade-in-up">
              Passion for Nature
              <span className="hero-subtitle">Strolls</span>
            </h1>
            <p className="hero-description fade-in-up">
              Discover the natural wonders of Sammamish, Washington through guided nature walks 
              designed for teens and adults. Experience the beauty of local ecosystems while 
              learning from expert guides.
            </p>
            <div className="hero-cta fade-in-up">
              <button className="btn btn-primary">
                Join Our Next Stroll
              </button>
              <button className="btn btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hero-visual fade-in-up">
            <div className="nature-illustration">
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
                {/* Lake */}
                <ellipse cx="200" cy="220" rx="120" ry="40" fill="rgba(74, 124, 89, 0.2)" stroke="rgba(74, 124, 89, 0.3)" strokeWidth="2"/>
                
                {/* Trees */}
                <g className="tree-group">
                  <circle cx="150" cy="180" r="25" fill="rgba(45, 90, 39, 0.3)"/>
                  <rect x="145" y="180" width="10" height="40" fill="rgba(139, 69, 19, 0.4)"/>
                  
                  <circle cx="250" cy="170" r="30" fill="rgba(45, 90, 39, 0.3)"/>
                  <rect x="245" y="170" width="10" height="50" fill="rgba(139, 69, 19, 0.4)"/>
                  
                  <circle cx="180" cy="160" r="20" fill="rgba(45, 90, 39, 0.3)"/>
                  <rect x="175" y="160" width="10" height="35" fill="rgba(139, 69, 19, 0.4)"/>
                </g>
                
                {/* Birds */}
                <g className="bird-group">
                  <path d="M100 120 Q110 115 120 120 Q110 125 100 120" fill="rgba(45, 90, 39, 0.6)"/>
                  <path d="M280 100 Q290 95 300 100 Q290 105 280 100" fill="rgba(45, 90, 39, 0.6)"/>
                  <path d="M200 80 Q210 75 220 80 Q210 85 200 80" fill="rgba(45, 90, 39, 0.6)"/>
                </g>
                
                {/* Sun */}
                <circle cx="320" cy="60" r="25" fill="rgba(255, 193, 7, 0.3)" stroke="rgba(255, 193, 7, 0.5)" strokeWidth="2"/>
                <g className="sun-rays">
                  <line x1="320" y1="30" x2="320" y2="20" stroke="rgba(255, 193, 7, 0.4)" strokeWidth="2"/>
                  <line x1="320" y1="90" x2="320" y2="100" stroke="rgba(255, 193, 7, 0.4)" strokeWidth="2"/>
                  <line x1="290" y1="60" x2="280" y2="60" stroke="rgba(255, 193, 7, 0.4)" strokeWidth="2"/>
                  <line x1="350" y1="60" x2="360" y2="60" stroke="rgba(255, 193, 7, 0.4)" strokeWidth="2"/>
                </g>
                
                {/* Path */}
                <path d="M50 200 Q200 180 350 200" stroke="rgba(139, 69, 19, 0.3)" strokeWidth="8" fill="none" strokeLinecap="round"/>
                
                {/* People */}
                <g className="people-group">
                  <circle cx="120" cy="195" r="8" fill="rgba(45, 90, 39, 0.7)"/>
                  <rect x="116" y="203" width="8" height="15" fill="rgba(45, 90, 39, 0.7)"/>
                  
                  <circle cx="140" cy="193" r="8" fill="rgba(74, 124, 89, 0.7)"/>
                  <rect x="136" y="201" width="8" height="15" fill="rgba(74, 124, 89, 0.7)"/>
                  
                  <circle cx="160" cy="197" r="8" fill="rgba(127, 176, 105, 0.7)"/>
                  <rect x="156" y="205" width="8" height="15" fill="rgba(127, 176, 105, 0.7)"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 