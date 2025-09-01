import React from 'react';

const AboutStrolls = () => {
  return (
    <div className="about-strolls">
      {/* Hero Section */}
      <section className="section hero-mini">
        <div className="container">
          <div className="text-center">
            <h1>About Our Nature Strolls</h1>
            <p className="text-light">Discover the natural wonders of Sammamish through guided walks</p>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Upcoming Event</h2>
              <div className="card event-card">
                <div className="event-header">
                  <h3>Beaver Lake Preserve</h3>
                  <div className="event-date">Saturday, September 13th, 2025</div>
                </div>
                
                <div className="event-details-list">
                  <div className="detail-item">
                    <div className="detail-icon">🕘</div>
                    <div>
                      <strong>Time:</strong> 9:00 AM
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">📍</div>
                    <div>
                      <strong>Location:</strong> Beaver Lake Preserve (meet at Beaver Lake Lodge)<br/>
                      <span className="address">25101 SE 24th Street, Sammamish, WA 98075</span>
                    </div>
                  </div>
                  
                  {/* You can add or update walk details and group size here if you have info */}
                  <div className="detail-item" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="detail-icon">🚶</div>
                    <div>
                      <strong>Walk Details:</strong> This stroll will take around 2 hours
                    </div>
                  </div>
                  <div className="detail-item" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="detail-icon">🗺️</div>
                    <div>
                      <strong>Google Maps:</strong> Beaver Lake Lodge
                    </div>
                  </div>
                </div>
                
                <div className="event-cta">
                  <button className="btn btn-primary">Join This Stroll</button>
                </div>
              </div>
            </div>
            
            <div>
              <h2>What to Expect</h2>
              <div className="card">
                <p>
                  Our nature strolls are designed to be educational, enjoyable, and accessible to everyone. 
                  We walk at a slow pace with multiple stops to interpret the natural wonders we discover 
                  along the way.
                </p>
                
                <h4>Focus Areas:</h4>
                <ul className="focus-list">
                  <li>🐦 Bird watching and identification</li>
                  <li>🦋 Other wildlife observation</li>
                  <li>🍄 Mushroom and plant identification</li>
                  <li>🌸 Wildflower appreciation</li>
                  <li>🌳 Tree and ecosystem education</li>
                </ul>
                
                <p>
                  The walk will take us around the bird loop and finish at a beautiful lookout point where 
                  we can take in the scenic views and reflect on what we've learned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">What to Bring</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">👕</div>
              <h3>Clothing</h3>
              <ul>
                <li>Comfortable, long-sleeve tops and bottoms</li>
                <li>Earth colors preferred (avoid white, cream, yellow, or flashing colors)</li>
                <li>Comfortable closed shoes</li>
                <li>Weather-appropriate layers</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">🔭</div>
              <h3>Equipment</h3>
              <ul>
                <li>Binoculars (any kind works)</li>
                <li>Camera (optional)</li>
                <li>Small notebook (optional)</li>
                <li>Field guide (optional)</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">🍎</div>
              <h3>Refreshments</h3>
              <ul>
                <li>Water bottle</li>
                <li>Small snacks if desired</li>
                <li>Light, portable food items</li>
                <li>No alcoholic beverages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Etiquette & Guidelines */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">Etiquette & Guidelines</h2>
          <div className="card etiquette-card">
            <div className="grid grid-2">
              <div>
                <h3>Respectful Behavior</h3>
                <ul className="guidelines-list">
                  <li>Keep noise levels low - no loud talking or music</li>
                  <li>Stay on marked trails at all times</li>
                  <li>No running or disruptive behavior</li>
                  <li>Respect other participants' experience</li>
                  <li>Listen to your guide's instructions</li>
                </ul>
              </div>
              
              <div>
                <h3>Environmental Stewardship</h3>
                <ul className="guidelines-list">
                  <li>Leave the place exactly as we found it or better</li>
                  <li>No smoking during the walk</li>
                  <li>Drink only water (no other beverages)</li>
                  <li>Don't disturb wildlife or plants</li>
                  <li>Pack out any trash you bring</li>
                </ul>
              </div>
            </div>
            
            <div className="etiquette-note">
              <p>
                <strong>Remember:</strong> Our goal is to have fun, learn interesting facts, and be 
                witness to the beauty of our local natural areas. Let's enjoy respectfully!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Guides */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Expert Guides</h2>
          <div className="grid grid-2">
            <div className="card guide-card">
              <div className="guide-header">
                <div className="guide-avatar">
                  <img src="/rolando.jpeg" alt="Rolando Jordan" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '0.5rem', border: '3px solid var(--primary-green)' }} />
                </div>
                <div className="guide-info">
                  <h3>Rolando Jordan</h3>
                  <div className="guide-credentials">
                    <span className="credential">20+ years birdwatching</span>
                    <span className="credential">10+ years guiding tours</span>
                  </div>
                </div>
              </div>
              <p>
                Rolando brings over two decades of birdwatching experience and more than ten years 
                of experience guiding tours in the jungles of Central America and other countries. 
                As a local enthusiast, he volunteers to help our community appreciate the natural 
                wonders in our surroundings.
              </p>
            </div>
            
            <div className="card guide-card">
              <div className="guide-header">
                <div className="guide-avatar">
                  <img src="/don.png" alt="Don Gerend" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '0.5rem', border: '3px solid var(--secondary-green)' }} />
                </div>
                <div className="guide-info">
                  <h3>Don Gerend</h3>
                  <div className="guide-credentials">
                    <span className="credential">19 years serving Sammamish</span>
                    <span className="credential">9 years as Mayor</span>
                  </div>
                </div>
              </div>
              <p>
                Don served our beautiful city for 19 years, including 9 years as Mayor, starting 
                with the first city council in 1999. He is a fountain of knowledge for all things 
                local, including our natural surroundings and history. Don leads the Sammamish 
                Friends Emerald Necklace program development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutStrolls; 