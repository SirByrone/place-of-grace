import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const coreValues = [
    {
      title: "Compassion & Love",
      description: "We provide care with genuine love and understanding for every child's unique needs."
    },
    {
      title: "Integrity & Accountability",
      description: "We maintain the highest standards of transparency and ethical practices in all our operations."
    },
    {
      title: "Education & Empowerment",
      description: "We believe education is the key to breaking the cycle of poverty and empowering children."
    },
    {
      title: "Safety & Protection",
      description: "We ensure every child feels safe, protected, and valued in our care."
    }
  ];

  const teamMembers = [
    {
      name: "Peninah Maria Kioko",
      role: "Founder (Late)",
      bio: "Founded Place of Grace Children's Home in 2009, starting with 24 children in a single room in Soweto slum.",
      image: "/assets/maria-kioko.jpg"
    },
    {
      name: "Current Director",
      role: "Executive Director",
      bio: "Leading the organization with dedication to continue Maria's legacy of love and care.",
      image: "/assets/director.jpg"
    },
    {
      name: "Care Staff",
      role: "Childcare Workers",
      bio: "Dedicated professionals providing daily care, education, and emotional support to our children.",
      image: "/assets/care-staff.jpg"
    }
  ];

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="container">
          <h1>About Place of Grace Children's Home</h1>
          <p className="hero-subtitle">Providing love, care, and hope for vulnerable children since 2009</p>
        </div>
      </section>

      <section className="our-story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                The Place of Grace Children's Home was founded in 2009 by the late Peninah Maria Kioko 
                in response to the growing need for a safe refuge for abandoned, neglected, and orphaned children. 
                What started as a small initiative has grown into a fully-fledged home that provides shelter, 
                education, and holistic care for vulnerable children.
              </p>
              <p>
                Maria initially hosted 24 children in a single room in Soweto slum, Nairobi. Later, 
                she moved from Soweto to an unfinished building at Donholm Phase 8, where we continue 
                to serve children today. Currently, we are a family of 25 children aged between 1 and 18 years 
                from diverse backgrounds, providing physical, educational, and spiritual nurturing.
              </p>
            </div>
            <div className="story-image">
              <img src="/assets/founding-story.jpg" alt="Place of Grace founding story" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h2>Our Mission</h2>
              <p>
                To provide a loving, family-like environment where children can heal, grow, and reach 
                their full potential. We rescue, rehabilitate, and empower orphaned and vulnerable children, 
                ensuring they grow up in a safe and nurturing environment.
              </p>
            </div>
            <div className="vision-card">
              <h2>Our Vision</h2>
              <p>
                A world where no child is left behind, and every child has access to education, healthcare, 
                and a nurturing environment. We envision a world where every child thrives, free from abuse, 
                neglect, and poverty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="core-values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-description">
            Dedicated individuals working together to provide love, care, and support to vulnerable children.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partnerships-section">
        <div className="container">
          <h2>Partnerships & Affiliations</h2>
          <p>
            We work closely with government agencies, child protection organizations, schools, 
            healthcare providers, and community leaders to ensure comprehensive care for our children.
          </p>
          <div className="partnership-logos">
            {/* Add partnership logos here */}
            <div className="partnership-item">Government Child Protection</div>
            <div className="partnership-item">Local Schools</div>
            <div className="partnership-item">Healthcare Providers</div>
            <div className="partnership-item">Community Organizations</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 