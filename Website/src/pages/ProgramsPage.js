import React from 'react';
import './ProgramsPage.css';

const ProgramsPage = () => {
  const programs = [
    {
      title: "Child Rescue, Rehabilitation & Reintegration",
      description: "We work closely with local authorities and child protection agencies to rescue children from unsafe situations, rehabilitate them, and where possible, reunite them with loving families.",
      features: [
        "Emergency rescue operations",
        "Safe shelter provision",
        "Family tracing and reunification",
        "Legal support and advocacy"
      ],
      image: "/assets/child-rescue.jpg"
    },
    {
      title: "Education Support",
      description: "We believe education is key to breaking the cycle of poverty. We provide comprehensive educational support to ensure every child has access to quality learning.",
      features: [
        "School sponsorships for children in need",
        "Learning materials and tuition support",
        "Extra tutoring and mentorship",
        "Computer literacy programs"
      ],
      image: "/assets/education-support.jpg"
    },
    {
      title: "Nutrition & Healthcare",
      description: "We provide children with nutritious meals and access to medical care, ensuring their physical health and well-being.",
      features: [
        "Three balanced meals daily",
        "Regular health check-ups",
        "Immunization programs",
        "Emergency medical care"
      ],
      image: "/assets/nutrition-healthcare.jpg"
    },
    {
      title: "Psychosocial Support & Counseling",
      description: "Many of our children have experienced trauma. We offer professional counseling and mentorship to help them heal emotionally and mentally.",
      features: [
        "Individual and group counseling",
        "Trauma-informed care",
        "Art and play therapy",
        "Life skills development"
      ],
      image: "/assets/psychosocial-support.jpg"
    },
    {
      title: "Skills Development & Vocational Training",
      description: "For older children, we provide life skills training, vocational courses, and job placement support to help them transition into adulthood.",
      features: [
        "Life skills workshops",
        "Vocational training programs",
        "Job placement assistance",
        "Entrepreneurship training"
      ],
      image: "/assets/skills-development.jpg"
    }
  ];

  return (
    <div className="programs-page">
      <section className="hero-section">
        <div className="container">
          <h1>Our Programs & Services</h1>
          <p className="hero-subtitle">
            Comprehensive care and support for vulnerable children, from rescue to reintegration
          </p>
        </div>
      </section>

      <section className="programs-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Holistic Care Approach</h2>
            <p>
              At Place of Grace Children's Home, we believe in providing comprehensive care that addresses 
              every aspect of a child's development. Our programs are designed to rescue children from 
              difficult situations, provide them with the care they need, and prepare them for a bright future.
            </p>
          </div>
        </div>
      </section>

      <section className="programs-list">
        <div className="container">
          {programs.map((program, index) => (
            <div key={index} className={`program-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="program-content">
                <div className="program-text">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <ul className="program-features">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="program-image">
                  <img src={program.image} alt={program.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-stats">
        <div className="container">
          <h2>Program Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>25+</h3>
              <p>Children currently in our care</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Children enrolled in school</p>
            </div>
            <div className="stat-item">
              <h3>75+</h3>
              <p>Meals served daily</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Children reunited with families</p>
            </div>
          </div>
        </div>
      </section>

      <section className="get-involved-cta">
        <div className="container">
          <h2>Support Our Programs</h2>
          <p>
            Your support helps us provide these essential services to vulnerable children. 
            Whether through donations, volunteering, or partnerships, you can make a difference.
          </p>
          <div className="cta-buttons">
            <a href="/get-involved" className="cta-button primary">Donate Now</a>
            <a href="/get-involved" className="cta-button secondary">Volunteer</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage; 