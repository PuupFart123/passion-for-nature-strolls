import React from 'react';
import MyAnimatedGradient from '../components/MyAnimatedGradient';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      {/* Features Section with animated gradient background */}
      <section className="section features-section" style={{ position: 'relative', zIndex: 1, overflow: 'hidden', padding: '5rem 0 5rem 0', margin: 0 }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <MyAnimatedGradient />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, color: 'white', padding: '2rem 0' }}>
          <div className="text-center mb-4">
            <h2 style={{ color: 'white', textShadow: '0 2px 16px rgba(0,0,0,0.25)' }}>Why Join Our Nature Strolls?</h2>
            <p className="text-light" style={{ color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>Experience the natural beauty of Sammamish with expert guidance</p>
          </div>
          <div className="grid grid-3">
            <div className="card feature-card" style={{ background: 'rgba(0,0,0,0.65)', color: 'white', border: 'none', borderRadius: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', padding: '2.5rem 2rem' }}>
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" fill="rgba(255,255,255,0.08)" stroke="var(--primary-green)" strokeWidth="2"/>
                  <path d="M12 24 L20 32 L36 16" stroke="var(--primary-green)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ color: 'white' }}>Expert Guides</h3>
              <p style={{ color: 'white' }}>Learn from experienced naturalists and local experts with decades of knowledge about the area's ecosystems.</p>
            </div>
            <div className="card feature-card" style={{ background: 'rgba(0,0,0,0.65)', color: 'white', border: 'none', borderRadius: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', padding: '2.5rem 2rem' }}>
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" fill="rgba(255,255,255,0.08)" stroke="var(--primary-green)" strokeWidth="2"/>
                  <path d="M24 8 L28 20 L40 20 L30 28 L34 40 L24 32 L14 40 L18 28 L8 20 L20 20 Z" fill="var(--primary-green)"/>
                </svg>
              </div>
              <h3 style={{ color: 'white' }}>Local Beauty</h3>
              <p style={{ color: 'white' }}>Discover hidden gems and natural wonders right in your own community of Sammamish, Washington.</p>
            </div>
            <div className="card feature-card" style={{ background: 'rgba(0,0,0,0.65)', color: 'white', border: 'none', borderRadius: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', padding: '2.5rem 2rem' }}>
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" fill="rgba(255,255,255,0.08)" stroke="var(--primary-green)" strokeWidth="2"/>
                  <path d="M16 16 L32 16 L32 32 L16 32 Z" fill="none" stroke="var(--primary-green)" strokeWidth="2"/>
                  <circle cx="24" cy="24" r="4" fill="var(--primary-green)"/>
                </svg>
              </div>
              <h3 style={{ color: 'white' }}>Small Groups</h3>
              <p style={{ color: 'white' }}>Enjoy intimate experiences with small group sizes, perfect for learning and connecting with nature.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next Event Section */}
      <section className="section event-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="event-info">
              <h2>Next Nature Stroll</h2>
              <div className="event-details">
                <div className="event-detail">
                  <strong>Date:</strong> Saturday, July 12th, 2024
                </div>
                <div className="event-detail">
                  <strong>Time:</strong> 9:00 AM
                </div>
                <div className="event-detail">
                  <strong>Location:</strong> Yellow Lake Park
                </div>
                <div className="event-detail">
                  <strong>Address:</strong> 4210 244th PL SE, Issaquah, WA, 98029
                </div>
                <div className="event-detail">
                  <strong>Duration:</strong> ~1 hour (1.6 miles)
                </div>
              </div>
              <div className="hero-cta event-cta">
                <button className="btn btn-primary">Join This Stroll</button>
                <button className="btn btn-secondary">View Details</button>
              </div>
            </div>
            
            <div className="event-visual">
              <div className="location-map">
                <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
                  {/* Map background */}
                  <rect width="400" height="300" fill="rgba(248, 249, 250, 0.8)" rx="12"/>
                  
                  {/* Lake */}
                  <ellipse cx="200" cy="180" rx="80" ry="30" fill="rgba(74, 124, 89, 0.3)" stroke="rgba(74, 124, 89, 0.5)" strokeWidth="2"/>
                  
                  {/* Path */}
                  <path d="M50 200 Q200 180 350 200" stroke="rgba(139, 69, 19, 0.4)" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  
                  {/* Start point */}
                  <circle cx="80" cy="195" r="8" fill="var(--primary-green)"/>
                  <text x="80" y="225" textAnchor="middle" fill="var(--text-dark)" fontSize="18" fontWeight="500">Start</text>
                  
                  {/* End point */}
                  <circle cx="320" cy="195" r="8" fill="var(--secondary-green)"/>
                  <text x="320" y="225" textAnchor="middle" fill="var(--text-dark)" fontSize="18" fontWeight="500">End</text>
                  
                  {/* Trees */}
                  <circle cx="150" cy="150" r="15" fill="rgba(45, 90, 39, 0.4)"/>
                  <circle cx="250" cy="140" r="18" fill="rgba(45, 90, 39, 0.4)"/>
                  <circle cx="180" cy="120" r="12" fill="rgba(45, 90, 39, 0.4)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 