import React from 'react';
import { Link } from 'react-router-dom';
import ImpactSection from '../components/ImpactSection';
import './HomePage.css';

const HomePage = () => {
  const missionData = {
    title: "Our Mission",
    content: "To rescue, rehabilitate, and empower orphaned and vulnerable children, ensuring they grow up in a safe and nurturing environment."
  };

  const visionData = {
    title: "Our Vision",
    content: "A world where every child thrives, free from abuse, neglect, and poverty."
  };

  const impactStats = [
    { number: "25+", label: "Children rescued and rehabilitated" },
    { number: "15+", label: "Children supported in education" },
    { number: "75+", label: "Meals served daily" },
    { number: "20+", label: "Volunteers making a difference" }
  ];

  const featuredStory = {
    title: "Meet Peter's Story",
    content: "Rescued from the streets, Peter now excels in school and dreams of becoming a doctor. His transformation is a testament to the power of love and care.",
    link: "/impact"
  };

  return (
    <div className="home-page">
      {/* Hero Welcome Message Section - First thing visitors see */}
      <section className="hero-welcome-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-welcome-content">
            <h1 className="hero-welcome-title">
              Welcome to Place of Grace Community Centre
            </h1>
            <p className="hero-welcome-subtitle">
              A safe haven for vulnerable children, providing love, care, and hope for a brighter future.
            </p>
            <div className="hero-welcome-actions">
              <Link to="/get-involved" className="hero-welcome-btn primary">
                Donate Now
              </Link>
              <Link to="/get-involved" className="hero-welcome-btn secondary">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h2>{missionData.title}</h2>
              <p>{missionData.content}</p>
            </div>
            <div className="vision-card">
              <h2>{visionData.title}</h2>
              <p>{visionData.content}</p>
            </div>
          </div>
        </div>
      </section>

      <ImpactSection 
        title="Our Impact"
        stats={impactStats}
        description="Together, we're making a difference in the lives of vulnerable children."
      />

      <section className="featured-story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>{featuredStory.title}</h2>
              <p>{featuredStory.content}</p>
              <Link to={featuredStory.link} className="read-more-btn">
                Read More Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;