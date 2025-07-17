import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about-strolls', label: 'About Strolls' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => handleNavClick('home')}>
          <div className="brand-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" 
                    fill="url(#gradient)" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" 
                    fill="currentColor"/>
              <path d="M8 20c0-4.42 3.58-8 8-8s8 3.58 8 8" 
                    stroke="currentColor" strokeWidth="2" fill="none"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary-green)" />
                  <stop offset="100%" stopColor="var(--secondary-green)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="brand-text">Passion for Nature</span>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 