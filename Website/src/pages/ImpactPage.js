import React from 'react';
import './ImpactPage.css';

const ImpactPage = () => {
  const impactStats = [
    { number: "25+", label: "Children rescued and rehabilitated" },
    { number: "15+", label: "Children supported in education" },
    { number: "75+", label: "Meals served daily" },
    { number: "10+", label: "Children reunited with families" },
    { number: "20+", label: "Volunteers making a difference" },
    { number: "14+", label: "Years of service to vulnerable children" }
  ];

  const successStories = [
    {
      name: "Peter",
      age: "12",
      story: "Rescued from the streets, Peter now excels in school and dreams of becoming a doctor. His transformation is a testament to the power of love and care.",
      beforeImg: "/assets/peter-before.jpg",
      afterImg: "/assets/peter-after.jpg",
      quote: "I want to be a doctor to help other children like me."
    },
    {
      name: "Grace",
      age: "8",
      story: "Once abandoned, Grace is now thriving in a loving foster family, thanks to our reintegration program. She's doing well in school and has found her voice.",
      beforeImg: "/assets/grace-before.jpg",
      afterImg: "/assets/grace-after.jpg",
      quote: "I feel safe and loved here."
    },
    {
      name: "David",
      age: "15",
      story: "David came to us malnourished and withdrawn. Today, he's a confident teenager excelling in his studies and helping younger children with their homework.",
      beforeImg: "/assets/david-before.jpg",
      afterImg: "/assets/david-after.jpg",
      quote: "Education is my path to a better future."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Muthoni",
      role: "Parent of Reunited Child",
      content: "Place of Grace helped my family get back on our feet. They didn't just care for my child, they helped us heal as a family.",
      image: "/assets/testimonial-1.jpg"
    },
    {
      name: "Dr. James Kamau",
      role: "Local School Principal",
      content: "The children from Place of Grace are some of our most dedicated students. Their transformation is remarkable to witness.",
      image: "/assets/testimonial-2.jpg"
    },
    {
      name: "Mary Wanjiku",
      role: "Volunteer",
      content: "I've been volunteering here for 5 years. Seeing children grow, heal, and thrive is the most rewarding experience.",
      image: "/assets/testimonial-3.jpg"
    }
  ];

  return (
    <div className="impact-page">
      <section className="hero-section">
        <div className="container">
          <h1>Our Impact & Success Stories</h1>
          <p className="hero-subtitle">
            Every child has a story of transformation. Here are some of the lives we've touched and changed.
          </p>
        </div>
      </section>

      <section className="impact-stats-section">
        <div className="container">
          <h2>Our Impact in Numbers</h2>
          <div className="stats-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="success-stories-section">
        <div className="container">
          <h2>Transformation Stories</h2>
          <p className="section-description">
            These are just a few of the many children whose lives have been transformed through love, care, and support.
          </p>
          
          {successStories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-header">
                <h3>Meet {story.name}, Age {story.age}</h3>
                <p className="story-quote">"{story.quote}"</p>
              </div>
              
              <div className="story-content">
                <div className="story-text">
                  <p>{story.story}</p>
                </div>
                
                <div className="before-after">
                  <div className="before-image">
                    <h4>Before</h4>
                    <img src={story.beforeImg} alt={`${story.name} before`} />
                  </div>
                  <div className="after-image">
                    <h4>After</h4>
                    <img src={story.afterImg} alt={`${story.name} after`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>What People Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-report-section">
        <div className="container">
          <div className="report-content">
            <h2>Download Our Latest Impact Report</h2>
            <p>
              Get detailed insights into our programs, outcomes, and the lives we've touched. 
              Our annual impact report provides comprehensive data and stories of transformation.
            </p>
            <a href="/assets/impact-report-2024.pdf" className="download-btn" download>
              Download Impact Report 2024
            </a>
          </div>
        </div>
      </section>

      <section className="get-involved-cta">
        <div className="container">
          <h2>Be Part of the Transformation</h2>
          <p>
            Every child deserves a chance to thrive. Your support helps us continue our mission 
            of rescuing, rehabilitating, and empowering vulnerable children.
          </p>
          <div className="cta-buttons">
            <a href="/get-involved" className="cta-button primary">Donate Now</a>
            <a href="/get-involved" className="cta-button secondary">Volunteer</a>
            <a href="/contact" className="cta-button secondary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;