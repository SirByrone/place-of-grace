import React, { useState } from 'react';
import './NewsPage.css';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);



  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="container">
          <h1>News & Updates</h1>
          <p>Stay informed about our latest programs, activities, and community initiatives at Place of Grace Children's Home</p>
        </div>
      </section>

            <section className="news-content">
        <div className="container">
          {/* Activities for Adolescent Girls & Boys */}
          <div className="activity-section">
            <h2 className="section-title">🌟 Activities for Adolescent Girls & Boys</h2>
            <div className="photo-placeholder">
              <p>📸 Photo space available for adolescent activities</p>
            </div>
            <div className="activity-grid">
              <div className="activity-card life-skills">
                <div className="activity-icon">🎯</div>
                <h4>Life Skills Workshops</h4>
                <p>Self-esteem, assertiveness, decision-making, healthy relationships (using games and role play).</p>
              </div>
              
              <div className="activity-card health">
                <div className="activity-icon">💖</div>
                <h4>Sexual and Reproductive Health (SRH) Sessions</h4>
                <p>Puberty, menstrual health, hygiene, and safe choices.</p>
              </div>
              
              <div className="activity-card arts">
                <div className="activity-icon">🎨</div>
                <h4>Creative Arts & Talent Development</h4>
                <p>Drawing, spoken word, dance, storytelling, ending with a talent showcase.</p>
              </div>
              
              <div className="activity-card sports">
                <div className="activity-icon">⚽</div>
                <h4>Sports and Recreational Activities</h4>
                <p>Football, netball, board games, and mixed-gender fair play tournaments.</p>
              </div>
              
              <div className="activity-card digital">
                <div className="activity-icon">💻</div>
                <h4>Digital Literacy & ICT Skills</h4>
                <p>Basic computer skills, typing, internet safety.</p>
              </div>
              
              <div className="activity-card career">
                <div className="activity-icon">🌟</div>
                <h4>Career Talks and Mentorship</h4>
                <p>Role models from various professions sharing their journeys.</p>
              </div>
              
              <div className="activity-card community">
                <div className="activity-icon">🌱</div>
                <h4>Community Clean-up Projects</h4>
                <p>Mural painting, tree planting, and cleaning public spaces.</p>
              </div>
              
              <div className="activity-card mental">
                <div className="activity-icon">🤝</div>
                <h4>Peer Support and Mental Health Circles</h4>
                <p>Safe spaces to talk about stress, identity, family issues.</p>
              </div>
            </div>
          </div>

          {/* Activities for Parents */}
          <div className="activity-section">
            <h2 className="section-title">👨‍👩‍👧‍👦 Activities for Parents</h2>
            <div className="photo-placeholder">
              <p>📸 Photo space available for parent activities</p>
            </div>
            <div className="parent-activities">
              <div className="parent-card">
                <div className="parent-icon">📚</div>
                <h4>Positive Parenting Sessions</h4>
                <p>Adolescent development, discipline, communication.</p>
              </div>
              
              <div className="parent-card">
                <div className="parent-icon">💰</div>
                <h4>Financial Literacy & Savings Groups</h4>
                <p>Budgeting, savings, and income-generating ideas.</p>
              </div>
              
              <div className="parent-card">
                <div className="parent-icon">📱</div>
                <h4>Adult Literacy or Digital Basics</h4>
                <p>Reading, writing, mobile banking, accessing online content.</p>
              </div>
              
              <div className="parent-card">
                <div className="parent-icon">🧘</div>
                <h4>Well-being and Stress Management</h4>
                <p>Emotional health, gender roles, light exercises.</p>
              </div>
              
              <div className="parent-card">
                <div className="parent-icon">❤️</div>
                <h4>Parent-Adolescent Bonding Sessions</h4>
                <p>Trust games, storytelling, shared discussions.</p>
              </div>
            </div>
          </div>

          {/* Joint Family Activities */}
          <div className="activity-section">
            <h2 className="section-title">👨‍👩‍👧‍👦 Joint Family Activities (Youth + Parents)</h2>
            <div className="photo-placeholder">
              <p>📸 Photo space available for family activities</p>
            </div>
            <div className="family-activities">
              <div className="family-highlight">
                <div className="highlight-icon">🏆</div>
                <h4>Sports day or mini-olympics</h4>
              </div>
              
              <div className="family-highlight">
                <div className="highlight-icon">🎭</div>
                <h4>Family Talent Show</h4>
                <p>Skits, music, dance.</p>
              </div>
              
              <div className="family-highlight">
                <div className="highlight-icon">🍳</div>
                <h4>Family Cooking Competition</h4>
                <p>Nutritious meals using low-cost ingredients.</p>
              </div>
              
              <div className="family-highlight">
                <div className="highlight-icon">📖</div>
                <h4>Intergenerational Storytelling</h4>
                <p>Sharing of past experiences and future dreams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage; 