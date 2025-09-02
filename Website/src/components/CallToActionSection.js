import React from 'react';
import { Link } from 'react-router-dom';
import './CallToActionSection.css';

const CallToActionSection = ({ headline, description, buttonText, buttonLink }) => {
  return (
    <section className="cta-section">
      <h2>{headline}</h2>
      <p>{description}</p>
      <Link to={buttonLink} className="cta-button">{buttonText}</Link>
    </section>
  );
};

export default CallToActionSection;