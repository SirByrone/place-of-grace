import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CallToActionSection from '../components/CallToActionSection';
import ImpactSection from '../components/ImpactSection';
import './HomePage.css';

const HomePage = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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
    image: "/assets/peter-story.jpg",
    link: "/impact"
  };

  // Enhanced animation phases for the hero section
  useEffect(() => {
    setIsVisible(true);
    
    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % 5);
    }, 8000); // Change phase every 8 seconds

    return () => clearInterval(phaseInterval);
  }, []);

  // Generate random particle positions
  const generateParticleStyle = (index) => {
    const delay = index * 0.1;
    const left = Math.random() * 100;
    const size = Math.random() * 3 + 2;
    return {
      '--delay': `${delay}s`,
      '--left': `${left}%`,
      '--size': `${size}px`
    };
  };

  return (
    <div className="home-page">
      {/* Enhanced Hero Welcome Section with Loading Screen Design */}
      <section className={`hero-welcome-section ${isVisible ? 'visible' : ''} phase-${currentPhase}`}>
        {/* White Screen Transitions */}
        <div className="hero-white-transitions">
          <div className={`hero-white-screen hero-white-1 ${currentPhase === 1 ? 'active' : ''}`}></div>
          <div className={`hero-white-screen hero-white-2 ${currentPhase === 2 ? 'active' : ''}`}></div>
          <div className={`hero-white-screen hero-white-3 ${currentPhase === 3 ? 'active' : ''}`}></div>
          <div className={`hero-white-screen hero-white-4 ${currentPhase === 4 ? 'active' : ''}`}></div>
        </div>

        {/* Enhanced Animated Background */}
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
          <div className="light-source"></div>
          <div className="background-pattern"></div>
          <div className="hero-overlay"></div>
        </div>

        {/* Enhanced Particle Effects */}
        <div className="hero-particles">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={generateParticleStyle(i)}
            ></div>
          ))}
        </div>

        <div className="container">
          <div className="hero-welcome-content">
            {/* Enhanced Logo Section */}
            <div className="hero-logo-container">
              <div className="hero-logo-image">
                <div className="hero-logo-hexagon">
                  <div className="hero-logo-figures">
                    <div className="figure figure-1"></div>
                    <div className="figure figure-2"></div>
                    <div className="figure figure-3"></div>
                  </div>
                  <div className="hero-logo-hands">
                    <div className="hand hand-left"></div>
                    <div className="hand hand-right"></div>
                    <div className="heart"></div>
                  </div>
                </div>
              </div>
              <div className="hero-logo-text">
                <div className="hero-logo-title">Place of Grace Children's Home</div>
                <div className="hero-logo-slogan">We are the future!</div>
              </div>
            </div>

            {/* Enhanced Main Title with Staggered Animation */}
            <h1 className="hero-welcome-title">
              <span className="title-word title-word-1">Welcome</span>
              <span className="title-word title-word-2">to</span>
              <span className="title-word title-word-3">Place</span>
              <span className="title-word title-word-4">of</span>
              <span className="title-word title-word-5">Grace</span>
            </h1>

            {/* Enhanced Slogan */}
            <p className="hero-welcome-subtitle">
              A safe haven for vulnerable children, providing love, care, and hope for a brighter future.
            </p>

            {/* Enhanced Call to Action Buttons */}
            <div className="hero-welcome-actions">
              <Link to="/get-involved" className="hero-welcome-btn primary">
                <span className="btn-text">Donate Now</span>
                <div className="btn-glow"></div>
              </Link>
              <Link to="/get-involved" className="hero-welcome-btn secondary">
                <span className="btn-text">Become a Volunteer</span>
                <div className="btn-glow"></div>
              </Link>
            </div>

            {/* Enhanced Progress Indicators */}
            <div className="hero-progress-indicators">
              <div className="progress-dots">
                {[...Array(5)].map((_, index) => (
                  <div 
                    key={index} 
                    className={`progress-dot ${index === currentPhase ? 'active' : ''} ${index < currentPhase ? 'completed' : ''}`}
                  >
                    {index < currentPhase && <span className="checkmark">✓</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Corner Progress Ring */}
        <div className="hero-corner-progress">
          <div className="progress-ring">
            <svg className="progress-ring-svg" width="60" height="60">
              <circle
                className="progress-ring-circle-bg"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="4"
                fill="transparent"
                r="26"
                cx="30"
                cy="30"
              />
              <circle
                className="progress-ring-circle"
                stroke="#fbbf24"
                strokeWidth="4"
                fill="transparent"
                r="26"
                cx="30"
                cy="30"
                style={{
                  strokeDasharray: `${2 * Math.PI * 26}`,
                  strokeDashoffset: `${2 * Math.PI * 26 * (1 - (currentPhase + 1) / 5)}`
                }}
              />
            </svg>
            <div className="progress-text">{Math.round(((currentPhase + 1) / 5) * 100)}%</div>
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

      <CallToActionSection 
        title="Join Us in Making a Difference"
        description="Your support helps provide food, shelter, education, and healthcare to vulnerable children. Every contribution matters."
        buttons={[
          { text: "Donate Now", link: "/get-involved", primary: true },
          { text: "Learn More", link: "/about", primary: false }
        ]}
      />

      {/* Featured Story Section - Moved to bottom of homescreen */}
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
            <div className="story-image">
              <img src={featuredStory.image} alt="Peter's transformation story" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;