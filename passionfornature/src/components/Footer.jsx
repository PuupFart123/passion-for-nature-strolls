import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" 
                        fill="url(#footer-gradient)" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" 
                        fill="currentColor"/>
                  <path d="M8 20c0-4.42 3.58-8 8-8s8 3.58 8 8" 
                        stroke="currentColor" strokeWidth="2" fill="none"/>
                  <defs>
                    <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary-green)" />
                      <stop offset="100%" stopColor="var(--secondary-green)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <h3>Passion for Nature Strolls</h3>
                <p>A Sammamish Friends Program</p>
              </div>
            </div>
            <p className="footer-description">
              Connecting our community with the natural beauty of Sammamish through 
              guided nature walks and environmental education.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about-strolls">About Strolls</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Programs</h4>
            <ul className="footer-links">
              <li><a href="#nature-strolls">Nature Strolls</a></li>
              <li><a href="#emerald-necklace">Emerald Necklace</a></li>
              <li><a href="#community-events">Community Events</a></li>
              <li><a href="#volunteer">Volunteer</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-contact">
              <p>
                <a href="https://sammamishfriends.org" target="_blank" rel="noopener noreferrer">
                  sammamishfriends.org
                </a>
              </p>
              <p>rolando_jordan@hotmail.com</p>
              <p>Sammamish, Washington</p>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.927-.175-1.297-.49-.37-.315-.49-.807-.49-1.297s.12-.982.49-1.297c.37-.315.807-.49 1.297-.49s.927.175 1.297.49c.37.315.49.807.49 1.297s-.12.982-.49 1.297c-.37.315-.807.49-1.297.49z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Sammamish Friends. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 