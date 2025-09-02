import React, { useState } from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'children', name: 'Our Children' },
    { id: 'activities', name: 'Daily Activities' },
    { id: 'events', name: 'Special Events' },
    { id: 'volunteers', name: 'Volunteers' },
    { id: 'facilities', name: 'Our Facilities' }
  ];

  const images = [
    { src: "/assets/gallery/children-learning.jpg", caption: "Children engaged in learning activities" },
    { src: "/assets/gallery/group-shot-school.jpg", caption: "Group shots at schools" },
    { src: "/assets/gallery/before-after-student.jpg", caption: "Transformation stories: From struggle to success" },
    { src: "/assets/gallery/healthcare-checkup.jpg", caption: "Regular health check-ups for our children" },
    { src: "/assets/gallery/smiling-faces.jpg", caption: "Smiling faces & community involvement" },
    { src: "/assets/gallery/children-playing.jpg", caption: "Children enjoying recreational activities" },
    { src: "/assets/gallery/volunteer-teaching.jpg", caption: "Volunteers teaching and mentoring children" },
    { src: "/assets/gallery/mealtime.jpg", caption: "Nutritious meals for healthy development" },
    { src: "/assets/gallery/art-therapy.jpg", caption: "Art therapy and creative expression" },
    { src: "/assets/gallery/computer-class.jpg", caption: "Computer literacy and skills development" },
    { src: "/assets/gallery/outdoor-activities.jpg", caption: "Outdoor activities and sports" },
    { src: "/assets/gallery/graduation-ceremony.jpg", caption: "Graduation ceremonies and achievements" },
    { src: "/assets/gallery/family-reunion.jpg", caption: "Family reunification success stories" },
    { src: "/assets/gallery/community-outreach.jpg", caption: "Community outreach and awareness programs" },
    { src: "/assets/gallery/medical-care.jpg", caption: "Medical care and health services" },
    { src: "/assets/gallery/educational-support.jpg", caption: "Educational support and tutoring" }
  ];

  const videos = [
    { src: "YOUR_VIDEO_URL_1.mp4", thumbnail: "/assets/video-thumb1.jpg", caption: "A Day in the Life at Place of Grace" },
    { src: "YOUR_VIDEO_URL_2.mp4", thumbnail: "/assets/video-thumb2.jpg", caption: "Educational Program Highlights" },
    { src: "YOUR_VIDEO_URL_3.mp4", thumbnail: "/assets/video-thumb3.jpg", caption: "Volunteer Stories and Impact" },
    { src: "YOUR_VIDEO_URL_4.mp4", thumbnail: "/assets/video-thumb4.jpg", caption: "Children's Success Stories" }
  ];

  const openLightbox = (media) => {
    setSelectedMedia(media);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <h1>Photo & Video Gallery</h1>
          <p>Explore our collection of photos and videos showcasing the daily life, activities, and impact at Place of Grace Children's Home</p>
        </div>
      </section>

      <section className="gallery-content">
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

          {/* Photo Gallery */}
          <div className="photo-gallery">
            <h2>Photo Gallery</h2>
            <div className="gallery-grid">
              {filteredImages.map((image, index) => (
                <div key={index} className="gallery-item" onClick={() => openLightbox(image)}>
                  <img src={image.src} alt={image.caption} />
                  <p>{image.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Gallery */}
          <div className="video-gallery">
            <h2>Video Gallery</h2>
            <div className="video-grid">
              {videos.map((video, index) => (
                <div key={index} className="gallery-item video-item" onClick={() => openLightbox(video)}>
                  <img src={video.thumbnail} alt={video.caption} className="video-thumbnail" />
                  <div className="video-overlay">
                    <span className="play-icon">▶</span>
                  </div>
                  <p>{video.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-lightbox" onClick={closeLightbox}>×</button>
            {selectedMedia.src.includes('.mp4') ? (
              <video controls>
                <source src={selectedMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={selectedMedia.src} alt={selectedMedia.caption} />
            )}
            <p className="lightbox-caption">{selectedMedia.caption}</p>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="gallery-cta">
        <div className="container">
          <h2>Support Our Mission</h2>
          <p>Every photo and video represents real children whose lives have been transformed through love, care, and support.</p>
          <div className="cta-buttons">
            <a href="/get-involved" className="cta-button primary">Donate Now</a>
            <a href="/contact" className="cta-button secondary">Get Involved</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;