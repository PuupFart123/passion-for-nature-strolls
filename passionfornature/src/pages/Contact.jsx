import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'general'
    });
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="section hero-mini">
        <div className="container">
          <div className="text-center">
            <h1>Contact Us</h1>
            <p className="text-light">Get in touch to learn more about our nature strolls</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Send Us a Message</h2>
              <p>
                Have questions about our nature strolls? Want to join an upcoming event? 
                We'd love to hear from you! Fill out the form and we'll get back to you soon.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="interest">I'm interested in:</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="general">General Information</option>
                    <option value="next-stroll">Joining the Next Stroll</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="group-event">Group Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Tell us more about your interest..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h2>Contact Information</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h3>Email</h3>
                    <p>rolando_jordan@hotmail.com</p>
                    <p className="text-light">For general inquiries about our programs</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <div>
                    <h3>Website</h3>
                    <p>
                      <a href="https://sammamishfriends.org" target="_blank" rel="noopener noreferrer" className="contact-link">
                        sammamishfriends.org
                      </a>
                    </p>
                    <p className="text-light">Visit our main website for more information</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h3>Location</h3>
                    <p>Sammamish, Washington</p>
                    <p className="text-light">Serving the greater Sammamish area</p>
                  </div>
                </div>
              </div>
              
              <div className="card quick-info">
                <h3>Quick Information</h3>
                <ul className="quick-info-list">
                  <li>✅ All ages welcome (12+ for strolls)</li>
                  <li>✅ No experience required</li>
                  <li>✅ Free to participate</li>
                  <li>✅ Small group sizes</li>
                  <li>✅ Expert guides</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="grid grid-2">
            <div className="faq-item">
              <h3>Do I need to register in advance?</h3>
              <p>
                While registration isn't required, it's helpful to let us know you're coming 
                so we can plan group sizes appropriately. You can register through our contact form 
                or just show up at the meeting point.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>What if the weather is bad?</h3>
              <p>
                We monitor weather conditions closely. If there's severe weather, we'll post 
                updates on our website and social media. Light rain usually doesn't cancel events, 
                but we'll reschedule if conditions are unsafe.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Can I bring my children?</h3>
              <p>
                Our nature strolls are designed for teens and adults (12+), but we do offer 
                family-friendly events throughout the year. Check our main website for family 
                programming options.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Do I need my own binoculars?</h3>
              <p>
                While binoculars are helpful, they're not required. Any type of binoculars will work - even inexpensive ones 
                can enhance your experience, however.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 