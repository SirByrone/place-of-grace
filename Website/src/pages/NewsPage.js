import React, { useState } from 'react';
import './NewsPage.css';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'impact', name: 'Impact Stories' },
    { id: 'donors', name: 'Donor Updates' },
    { id: 'volunteers', name: 'Volunteer Stories' },
    { id: 'events', name: 'Events' },
    { id: 'programs', name: 'Program Updates' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Major Educational Support Program Launch in Nairobi",
      excerpt: "We successfully launched our comprehensive educational support program, reaching 50 children in Nairobi and impacting over 200 family members.",
      content: "Our team, led by our dedicated staff, launched our largest educational support program yet in Nairobi. This initiative provides school fees, uniforms, books, and mentorship to children who would otherwise be unable to attend school. The program has already shown remarkable results, with improved attendance and academic performance.",
      category: 'impact',
      date: '2024-01-15',
      author: 'Grace Muthoni',
      image: '/assets/news/education-launch.jpg',
      featured: true,
      readTime: '5 min read'
    },
    {
      id: 2,
      title: "Sarah's Journey: From Street Child to Top Student",
      excerpt: "Sarah's transformation from a vulnerable street child to becoming a top student with our educational support.",
      content: "Sarah, a 14-year-old girl from Kitui County, was rescued from the streets and brought to Place of Grace Children's Home. She often struggled with basic education and had no hope for the future. Since joining our program, Sarah's academic performance has improved dramatically, and she's now one of the top students in her class with dreams of becoming a doctor.",
      category: 'impact',
      date: '2024-01-10',
      author: 'David Kamau',
      image: '/assets/news/sarah-story.jpg',
      featured: false,
      readTime: '4 min read'
    },
    {
      id: 3,
      title: "KCB Foundation Partners with Place of Grace",
      excerpt: "KCB Foundation joins our mission with a generous donation to support children's education and healthcare.",
      content: "We're excited to announce a new partnership with Kenya Commercial Bank Foundation. Their generous donation will help us provide better educational facilities, healthcare services, and nutritional support to our children. This partnership demonstrates the power of corporate social responsibility in creating lasting change for vulnerable children.",
      category: 'donors',
      date: '2024-01-08',
      author: 'Johnston Kioko',
      image: '/assets/news/kcb-partnership.jpg',
      featured: false,
      readTime: '3 min read'
    },
    {
      id: 4,
      title: "Meet Our Dedicated Healthcare Volunteers",
      excerpt: "Meet the dedicated volunteers who provide essential healthcare services to our children.",
      content: "Our healthcare team, consisting of local medical professionals and volunteers, works tirelessly to ensure all children receive proper medical care. They conduct regular health check-ups, provide immunizations, and offer emergency medical support when needed. Their dedication ensures our children grow up healthy and strong.",
      category: 'volunteers',
      date: '2024-01-05',
      author: 'Dr. Mary Wanjiku',
      image: '/assets/news/healthcare-volunteers.jpg',
      featured: false,
      readTime: '4 min read'
    },
    {
      id: 5,
      title: "Inclusive Education Program for Children with Disabilities",
      excerpt: "Our commitment to inclusion extends to providing specialized education and support for children with disabilities.",
      content: "We believe every child deserves access to quality education, regardless of their abilities. Our inclusive education program provides specialized teachers, adaptive learning materials, and supportive environments for children with disabilities. This ensures that every child can learn, grow, and reach their full potential.",
      category: 'impact',
      date: '2024-01-03',
      author: 'Jane Akinyi',
      image: '/assets/news/inclusive-education.jpg',
      featured: false,
      readTime: '5 min read'
    },
    {
      id: 6,
      title: "Community Workshop: Child Protection Training",
      excerpt: "Teaching community members about child protection, safety, and rights.",
      content: "We recently conducted a comprehensive child protection training workshop for 50 community members and parents. The workshop covered child rights, protection measures, reporting procedures, and creating safe environments for children. Safety and protection are our top priorities.",
      category: 'events',
      date: '2023-12-28',
      author: 'Grace Muthoni',
      image: '/assets/news/child-protection-workshop.jpg',
      featured: false,
      readTime: '3 min read'
    },
    {
      id: 7,
      title: "New Skills Development Program Launched",
      excerpt: "Introducing vocational training and life skills programs for older children.",
      content: "We've launched a new skills development program for our older children, offering vocational training in various fields including carpentry, tailoring, computer skills, and entrepreneurship. This program prepares children for independent living and successful careers.",
      category: 'programs',
      date: '2023-12-25',
      author: 'Peter Njoroge',
      image: '/assets/news/skills-development.jpg',
      featured: false,
      readTime: '4 min read'
    },
    {
      id: 8,
      title: "Annual Fundraising Gala Success",
      excerpt: "Our annual fundraising gala raised significant funds to support our programs and children.",
      content: "Our annual fundraising gala was a tremendous success, bringing together donors, volunteers, and supporters from across Kenya. The event raised substantial funds that will directly support our children's education, healthcare, and daily needs. We're grateful for the overwhelming support from our community.",
      category: 'events',
      date: '2023-12-20',
      author: 'Sarah Kimani',
      image: '/assets/news/fundraising-gala.jpg',
      featured: false,
      readTime: '3 min read'
    }
  ];

  const socialMediaUpdates = [
    {
      id: 1,
      platform: 'Facebook',
      content: "Just completed another successful educational support program! Seeing the smiles on these children's faces makes every effort worthwhile.",
      date: '2 hours ago'
    },
    {
      id: 2,
      platform: 'Instagram',
      content: "Our healthcare team is working hard to ensure all children receive proper medical care. Regular check-ups save lives!",
      date: '3 days ago'
    },
    {
      id: 3,
      platform: 'Twitter',
      content: "Thank you to all our volunteers who dedicate their time to mentoring and supporting our children. You're making a real difference!",
      date: '1 week ago'
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const openArticle = (article) => {
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="container">
          <h1>News & Updates</h1>
          <p>Stay updated with our latest activities, impact stories, and community events</p>
        </div>
      </section>

      <section className="news-content">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {filteredArticles.filter(article => article.featured).length > 0 && (
            <div className="featured-article">
              {filteredArticles.filter(article => article.featured).map(article => (
                <div key={article.id} className="featured-content" onClick={() => openArticle(article)}>
                  <div className="featured-image">
                    <img src={article.image} alt={article.title} />
                    <div className="featured-badge">Featured</div>
                  </div>
                  <div className="featured-text">
                    <div className="article-meta">
                      <span className="category">{article.category}</span>
                      <span className="date">{article.date}</span>
                      <span className="read-time">{article.readTime}</span>
                    </div>
                    <h2>{article.title}</h2>
                    <p>{article.excerpt}</p>
                    <div className="author">By {article.author}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* News Grid */}
          <div className="news-grid">
            {filteredArticles.filter(article => !article.featured).map(article => (
              <div key={article.id} className="news-card" onClick={() => openArticle(article)}>
                <div className="news-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="news-content">
                  <div className="article-meta">
                    <span className="category">{article.category}</span>
                    <span className="date">{article.date}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-footer">
                    <span className="author">By {article.author}</span>
                    <span className="read-time">{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Updates */}
      <section className="social-updates">
        <div className="container">
          <h2>Social Media Updates</h2>
          <div className="social-grid">
            {socialMediaUpdates.map(update => (
              <div key={update.id} className="social-card">
                <div className="social-header">
                  <span className="platform">{update.platform}</span>
                  <span className="social-date">{update.date}</span>
                </div>
                <p>{update.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-signup">
        <div className="container">
          <h2>Stay Connected</h2>
          <p>Subscribe to our newsletter for regular updates on our programs and impact stories</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="article-modal" onClick={closeArticle}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeArticle}>×</button>
            <div className="modal-image">
              <img src={selectedArticle.image} alt={selectedArticle.title} />
            </div>
            <div className="modal-text">
              <div className="article-meta">
                <span className="category">{selectedArticle.category}</span>
                <span className="date">{selectedArticle.date}</span>
                <span className="read-time">{selectedArticle.readTime}</span>
              </div>
              <h2>{selectedArticle.title}</h2>
              <div className="author">By {selectedArticle.author}</div>
              <p>{selectedArticle.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage; 