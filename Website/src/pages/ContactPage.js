import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      title: "Phone",
      value: "+254 722 556 382",
      icon: "📞",
      link: "tel:+254722556382"
    },
    {
      title: "Email",
      value: "placeofgraceoutreach@gmail.com",
      icon: "📧",
      link: "mailto:placeofgraceoutreach@gmail.com"
    },
    {
      title: "WhatsApp",
      value: "+254 722 556 382",
      icon: "💬",
      link: "https://wa.me/254722556382"
    },
    {
      title: "Location",
      value: "Joska, Kenya",
      icon: "📍",
      link: null
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you! Whether you have questions about our programs, 
            want to volunteer, or are interested in partnering with us, we're here to help.
          </p>
        </section>

        {/* Contact Methods Grid */}
        <section className="contact-methods">
          <h2>Contact Information</h2>
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <div className="contact-method-card" key={index}>
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                {method.link ? (
                  <a href={method.link} className="method-link">
                    {method.value}
                  </a>
                ) : (
                  <p>{method.value}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="contact-main">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="donation">Donation Information</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="contact-info-sidebar">
              <div className="office-hours">
                <h3>Office Hours</h3>
                <div className="hours-list">
                  {officeHours.map((schedule, index) => (
                    <div className="hours-item" key={index}>
                      <span className="day">{schedule.day}</span>
                      <span className="hours">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="location-info">
                <h3>Our Location</h3>
                <p>
                  <strong>Place of Grace Community</strong><br />
                  Joska, Kenya<br />
                  Eastern Province
                </p>
                <div className="map-placeholder">
                  <div className="map-content">
                    <span className="map-icon">🗺️</span>
                    <p>Interactive map coming soon</p>
                  </div>
                </div>
              </div>

              <div className="emergency-contact">
                <h3>Emergency Contact</h3>
                <p>
                  For urgent matters outside office hours, please call or WhatsApp:
                </p>
                <a href="tel:+254722556382" className="emergency-phone">
                  +254 722 556 382
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I donate to your organization?</h3>
              <p>
                You can donate through bank transfer, MPESA, or PayPal. Visit our 
                <a href="/get-involved"> How to Help</a> page for detailed instructions.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I volunteer with your organization?</h3>
              <p>
                Yes! We welcome volunteers for various activities including tutoring, 
                healthcare support, activity coordination, and community outreach. Contact us for more information.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do you select beneficiaries?</h3>
              <p>
                We work with local schools and communities to identify children who walk the 
                longest distances to school, with priority given to girls, orphans, and children with disabilities.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you provide adaptive solutions for children with disabilities?</h3>
              <p>
                Yes, we provide specialized education, adaptive learning materials, and supportive environments. 
                Visit our <a href="/programs">Programs</a> page to learn more.
              </p>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="social-media-section">
          <h2>Follow Our Journey</h2>
          <p>Stay updated with our latest activities and impact stories</p>
          <div className="social-links">
            <a href="#" className="social-link facebook">
              <span className="social-icon">📘</span>
              <span>Facebook</span>
            </a>
            <a href="#" className="social-link twitter">
              <span className="social-icon">🐦</span>
              <span>Twitter</span>
            </a>
            <a href="#" className="social-link instagram">
              <span className="social-icon">📷</span>
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link whatsapp">
              <span className="social-icon">💬</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage; 