import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mediaTypeFilter, setMediaTypeFilter] = useState('all'); // 'all', 'photos', 'videos'
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Media' },
    { id: 'children', name: 'Our Children' },
    { id: 'events', name: 'Special Events' },
    { id: 'facilities', name: 'Our Facilities' },
    { id: 'activities', name: 'Daily Activities' },
    { id: 'team', name: 'Our Team' }
  ];

  const images = useMemo(() => [
    // Children Category
    { 
      id: 1,
      src: "/assets/photos/children/children-learning-2024.jpg", 
      caption: "Children engaged in learning activities",
      category: "children",
      alt: "Three children sitting at a table working on educational activities with books and pencils",
      date: "2024"
    },
    { 
      id: 2,
      src: "/assets/photos/children/children-playing-2024.jpg", 
      caption: "Children enjoying recreational activities",
      category: "children",
      alt: "Children playing together in the playground with smiles on their faces",
      date: "2024"
    },
    { 
      id: 3,
      src: "/assets/photos/children/children-mealtime-2024.jpg", 
      caption: "Nutritious meals for healthy development",
      category: "children",
      alt: "Children sitting together enjoying a healthy meal in the dining area",
      date: "2024"
    },
    { 
      id: 4,
      src: "/assets/photos/events/children-playing-new-2024.jpg", 
      caption: "Children enjoying playtime and recreational activities",
      category: "events",
      alt: "Happy children engaged in various play activities and games together",
      date: "2024"
    },
    { 
      id: 5,
      src: "/assets/photos/children/children-art-2024.jpg", 
      caption: "Children expressing creativity through art",
      category: "children",
      alt: "Children creating beautiful artwork with paint and creative materials",
      date: "2024"
    },
    
    // Events Category
    { 
      id: 6,
      src: "/assets/photos/events/graduation-2024.jpg", 
      caption: "Graduation ceremonies and achievements",
      category: "events",
      alt: "Graduation ceremony with children in caps and gowns celebrating their academic success",
      date: "2024"
    },
    { 
      id: 7,
      src: "/assets/photos/events/christmas-party-2024.jpg", 
      caption: "Christmas celebration with children",
      category: "events",
      alt: "Children celebrating Christmas with decorations, gifts, and festive activities",
      date: "2024"
    },
    { 
      id: 8,
      src: "/assets/photos/events/volunteer-day-2024.jpg", 
      caption: "Volunteer appreciation day",
      category: "events",
      alt: "Volunteers and children together during a special appreciation event",
      date: "2024"
    },
    { 
      id: 9,
      src: "/assets/photos/events/christmas-celebration-new-2024.jpg", 
      caption: "Children celebrating Christmas with joy and excitement",
      category: "events",
      alt: "Children in festive attire celebrating Christmas with decorations and holiday spirit",
      date: "2024"
    },
    { 
      id: 10,
      src: "/assets/photos/events/community-outreach-2024.jpg", 
      caption: "Community outreach and engagement",
      category: "events",
      alt: "Children and staff participating in community outreach activities and programs",
      date: "2024"
    },
    
    // Facilities Category
    { 
      id: 11,
      src: "/assets/photos/facilities/child-rescue.jpg", 
      caption: "Child rescue and emergency response",
      category: "facilities",
      alt: "Emergency response vehicle and equipment for child rescue operations",
      date: "2024"
    },
    { 
      id: 12,
      src: "/assets/photos/facilities/corridors-2024.jpg", 
      caption: "Clean and safe corridors",
      category: "facilities",
      alt: "Well-maintained corridors providing safe passage throughout the facility",
      date: "2024"
    },
    { 
      id: 13,
      src: "/assets/photos/facilities/dormitory-interior-1-2024.jpg", 
      caption: "Comfortable dormitory living spaces",
      category: "facilities",
      alt: "Clean and organized dormitory with comfortable sleeping arrangements",
      date: "2024"
    },
    { 
      id: 14,
      src: "/assets/photos/facilities/dormitory-interior-2-2024.jpg", 
      caption: "Additional dormitory facilities",
      category: "facilities",
      alt: "Another view of the dormitory showing sleeping arrangements and storage",
      date: "2024"
    },
    { 
      id: 15,
      src: "/assets/photos/facilities/dormitory-interior-3-2024.jpg", 
      caption: "Dormitory interior design",
      category: "facilities",
      alt: "Interior view of dormitory showing layout and organization",
      date: "2024"
    },
    { 
      id: 16,
      src: "/assets/photos/facilities/education-support.jpg", 
      caption: "Educational support facilities",
      category: "facilities",
      alt: "Classroom and educational support areas for children's learning",
      date: "2024"
    },
    { 
      id: 17,
      src: "/assets/photos/facilities/founding-story.jpg", 
      caption: "The founding story of our home",
      category: "facilities",
      alt: "Historical photos and documents showing the founding of our children's home",
      date: "2024"
    },
    { 
      id: 18,
      src: "/assets/photos/facilities/main-building-2024.jpg", 
      caption: "Main building exterior",
      category: "facilities",
      alt: "Exterior view of the main building showing the architecture and grounds",
      date: "2024"
    },
    { 
      id: 19,
      src: "/assets/photos/facilities/neat-bed-2024.jpg", 
      caption: "Neat and organized sleeping areas",
      category: "facilities",
      alt: "Well-organized sleeping area with neat bed arrangements",
      date: "2024"
    },
    { 
      id: 20,
      src: "/assets/photos/facilities/nutrition-healthcare.jpg", 
      caption: "Nutrition and healthcare facilities",
      category: "facilities",
      alt: "Kitchen and healthcare areas ensuring proper nutrition and medical care",
      date: "2024"
    },
    { 
      id: 21,
      src: "/assets/photos/facilities/psychosocial-support.jpg", 
      caption: "Psychosocial support areas",
      category: "facilities",
      alt: "Counseling and support areas for children's emotional and mental well-being",
      date: "2024"
    },
    { 
      id: 22,
      src: "/assets/photos/facilities/skills-development.jpg", 
      caption: "Skills development facilities",
      category: "facilities",
      alt: "Workshops and areas for developing practical skills and vocational training",
      date: "2024"
    },
    { 
      id: 23,
      src: "/assets/photos/facilities/where-it-started-2024.jpg", 
      caption: "Where our journey began",
      category: "facilities",
      alt: "Historical photos showing the original location and early days of our home",
      date: "2024"
    },
    
    // Gallery Category
    { 
      id: 24,
      src: "/assets/photos/gallery/collection-1-2024.jpg", 
      caption: "Photo collection showcasing our journey",
      category: "gallery",
      alt: "Collection of photos showing various aspects of our children's home",
      date: "2024"
    },
    { 
      id: 25,
      src: "/assets/photos/gallery/collection-2-2024.jpg", 
      caption: "Memories and moments captured",
      category: "gallery",
      alt: "Another collection of memorable moments and activities",
      date: "2024"
    },
    { 
      id: 26,
      src: "/assets/photos/gallery/collection-3-2024.jpg", 
      caption: "Special moments and celebrations",
      category: "gallery",
      alt: "Collection of special events and celebrations at our home",
      date: "2024"
    },
    { 
      id: 27,
      src: "/assets/photos/gallery/collection-4-2024.jpg", 
      caption: "Daily life and activities",
      category: "gallery",
      alt: "Photos capturing the daily life and activities of our children",
      date: "2024"
    },
    { 
      id: 28,
      src: "/assets/photos/gallery/collection-5-2024.jpg", 
      caption: "Growth and development",
      category: "gallery",
      alt: "Photos showing the growth and development of our children over time",
      date: "2024"
    },
    { 
      id: 29,
      src: "/assets/photos/gallery/collection-6-2024.jpg", 
      caption: "Community and connections",
      category: "gallery",
      alt: "Photos showing community connections and relationships built over time",
      date: "2024"
    },
    
    // Team Category
    { 
      id: 30,
      src: "/assets/photos/team/founder-with-child-2024.jpg", 
      caption: "Our founder with one of our children",
      category: "team",
      alt: "Founder of the children's home spending time with a child, showing care and connection",
      date: "2024"
    },
    { 
      id: 31,
      src: "/assets/photos/team/johnston-kioko.jpg", 
      caption: "Johnston Kioko - Dedicated staff member",
      category: "team",
      alt: "Johnston Kioko, a dedicated staff member, smiling and ready to help children",
      date: "2024"
    },
    { 
      id: 32,
      src: "/assets/photos/team/julius-ndukuthyo.jpg", 
      caption: "Julius Ndukuthyo - Caring team member",
      category: "team",
      alt: "Julius Ndukuthyo, a caring team member, showing dedication to children's welfare",
      date: "2024"
    },
    { 
      id: 33,
      src: "/assets/photos/team/kevin-mutai.jpg", 
      caption: "Kevin Mutai - Supportive staff member",
      category: "team",
      alt: "Kevin Mutai, a supportive staff member, committed to children's development",
      date: "2024"
    },
    { 
      id: 34,
      src: "/assets/photos/team/maria-kioko.jpg", 
      caption: "Maria Kioko - Nurturing caregiver",
      category: "team",
      alt: "Maria Kioko, a nurturing caregiver, providing love and support to children",
      date: "2024"
    },
    { 
      id: 35,
      src: "/assets/photos/team/ruth-munanie.jpg", 
      caption: "Ruth Munanie - Dedicated team member",
      category: "team",
      alt: "Ruth Munanie, a dedicated team member, showing commitment to children's well-being",
      date: "2024"
    }
  ], []);

  const videos = useMemo(() => [
    { 
      id: 1,
      src: "/assets/videos/children-dancing-having-fun.mp4", 
      thumbnail: "/assets/photos/children/children-playing-2024.jpg", 
      caption: "Children Dancing & Having Fun",
      category: "activities",
      alt: "Children joyfully dancing and having fun together",
      duration: "2:15",
      description: "Watch our children express their joy through dance and movement",
      date: "2024"
    },
    { 
      id: 2,
      src: "/assets/videos/performance-practising.mp4", 
      thumbnail: "/assets/photos/events/graduation-2024.jpg", 
      caption: "Performance Practice Session",
      category: "activities",
      alt: "Children practising for upcoming performances",
      duration: "3:42",
      description: "Behind the scenes of our children preparing for special performances",
      date: "2024"
    }
  ], []);

  // Enhanced filtering without search
  const filteredMedia = useMemo(() => {
    let mediaItems = [];
    
    // First apply media type filter
    if (mediaTypeFilter === 'all' || mediaTypeFilter === 'photos') {
      // Add photos based on category filter
      if (selectedCategory === 'all' || selectedCategory === 'photos' || selectedCategory === 'children' || selectedCategory === 'events' || selectedCategory === 'facilities' || selectedCategory === 'activities' || selectedCategory === 'team' || selectedCategory === 'gallery') {
        mediaItems.push(...images.map(img => ({ ...img, type: 'photo' })));
      }
    }
    
    if (mediaTypeFilter === 'all' || mediaTypeFilter === 'videos') {
      // Add videos based on category filter
      if (selectedCategory === 'all' || selectedCategory === 'activities') {
        mediaItems.push(...videos.map(video => ({ ...video, type: 'video' })));
      }
    }
    
    return mediaItems;
  }, [images, videos, selectedCategory, mediaTypeFilter]);

  // Enhanced lightbox functionality with navigation
  const openLightbox = useCallback((media) => {
    setSelectedMedia(media);
    const index = filteredMedia.findIndex(item => item.src === media.src);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, [filteredMedia]);

  const closeLightbox = useCallback(() => {
    setSelectedMedia(null);
    setCurrentImageIndex(0);
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % filteredMedia.length;
    setCurrentImageIndex(nextIndex);
    setSelectedMedia(filteredMedia[nextIndex]);
  }, [currentImageIndex, filteredMedia]);

  const prevImage = useCallback(() => {
    const prevIndex = currentImageIndex === 0 ? filteredMedia.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedMedia(filteredMedia[prevIndex]);
  }, [currentImageIndex, filteredMedia]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedMedia) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedMedia, closeLightbox, prevImage, nextImage]);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1>Photo & Video Gallery</h1>
          <p>Explore our collection of photos and videos showcasing the daily life, activities, and impact at Place of Grace Children's Home</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content">
        <div className="container">
          {/* Gallery Controls */}
          <div className="gallery-controls">
            <div className="filter-controls">
              {/* Media Type Toggle */}
              <div className="media-type-toggle">
                <button 
                  className={`toggle-btn ${mediaTypeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setMediaTypeFilter('all')}
                  title="Show all media types"
                >
                  📸🎬 All Media
                </button>
                <button 
                  className={`toggle-btn ${mediaTypeFilter === 'photos' ? 'active' : ''}`}
                  onClick={() => setMediaTypeFilter('photos')}
                  title="Show photos only"
                >
                  🖼️ Photos Only
                </button>
                <button 
                  className={`toggle-btn ${mediaTypeFilter === 'videos' ? 'active' : ''}`}
                  onClick={() => setMediaTypeFilter('videos')}
                  title="Show videos only"
                >
                  🎬 Videos Only
                </button>
              </div>
              
              {/* View Mode Toggle */}
              <div className="view-mode-toggle">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid layout"
                >
                  ⊞ Grid
                </button>
                <button
                  className={`view-btn ${viewMode === 'masonry' ? 'active' : ''}`}
                  onClick={() => setViewMode('masonry')}
                  title="Masonry layout"
                >
                  ⊡ Masonry
                </button>
              </div>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="category-navigation">
            <div className="category-tabs">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                  aria-label={`Filter by ${category.name}`}
                >
                  {category.name}
                  {category.id === 'activities' && videos.length > 0 && (
                    <span className="video-badge">{videos.length}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="results-summary">
            <div className="results-stats">
              <span className="total-count">{filteredMedia.length} items</span>
              {mediaTypeFilter !== 'all' && (
                <span className="filter-type">• {mediaTypeFilter === 'photos' ? 'Photos' : 'Videos'} only</span>
              )}
              {selectedCategory !== 'all' && (
                <span className="filter-category">• {categories.find(c => c.id === selectedCategory)?.name}</span>
              )}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid-container">
            <div className={`gallery-grid ${viewMode === 'masonry' ? 'masonry-layout' : 'grid-layout'}`}>
              {filteredMedia.length > 0 ? (
                filteredMedia.map((item, index) => (
                  <div 
                    key={`${item.src || item.thumbnail}-${index}`} 
                    className={`gallery-item ${item.type === 'video' ? 'video-item' : 'photo-item'}`}
                    onClick={() => openLightbox(item)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        openLightbox(item);
                      }
                    }}
                    aria-label={`View ${item.caption || item.alt}`}
                  >
                    {/* Media Thumbnail */}
                    <div className="media-thumbnail">
                      {item.type === 'video' ? (
                        <>
                          <img 
                            src={item.thumbnail} 
                            alt={item.alt || item.caption} 
                            loading="lazy"
                            className="thumbnail-image"
                          />
                          <div className="video-overlay">
                            <div className="video-play-button">
                              <span className="play-icon">▶</span>
                            </div>
                            <div className="video-duration">{item.duration}</div>
                          </div>
                          <div className="media-type-indicator">🎬</div>
                        </>
                      ) : (
                        <>
                          <img 
                            src={item.src} 
                            alt={item.alt || item.caption} 
                            loading="lazy"
                            className="thumbnail-image"
                          />
                          <div className="photo-overlay">
                            <span className="zoom-icon">🔍</span>
                          </div>
                          <div className="media-type-indicator">🖼️</div>
                        </>
                      )}
                      
                      {/* Category Badge */}
                      <div className="category-badge">
                        {item.category}
                      </div>
                    </div>
                    
                    {/* Media Info */}
                    <div className="media-info">
                      <h3 className="media-title">{item.caption}</h3>
                      {item.type === 'video' && item.description && (
                        <p className="media-description">{item.description}</p>
                      )}
                      <div className="media-meta">
                        <span className="media-type">{item.type === 'video' ? '🎬 Video' : '🖼️ Photo'}</span>
                        {item.type === 'video' && <span className="video-quality">HD</span>}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <h3>No media found</h3>
                  <p>Try adjusting your filters or category selection</p>
                  <button 
                    onClick={() => {
                      setSelectedCategory('all');
                      setMediaTypeFilter('all');
                    }}
                    className="reset-filters-btn"
                  >
                    🔄 Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Photo viewer">
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <div className="lightbox-header">
              <div className="lightbox-counter">
                {currentImageIndex + 1} of {filteredMedia.length}
              </div>
              <button 
                className="close-lightbox" 
                onClick={closeLightbox}
                aria-label="Close photo viewer"
              >
                ×
              </button>
            </div>

            <div className="lightbox-media-container">
              {/* Navigation Arrows */}
              {filteredMedia.length > 1 && (
                <>
                  <button 
                    className="nav-arrow nav-prev" 
                    onClick={prevImage}
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>
                  <button 
                    className="nav-arrow nav-next" 
                    onClick={nextImage}
                    aria-label="Next photo"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Enhanced Media Content */}
              {selectedMedia.src.includes('.mp4') ? (
                <div className="video-player-container">
                  <video 
                    controls 
                    className="lightbox-media video-player"
                    preload="metadata"
                    poster={selectedMedia.thumbnail}
                    controlsList="nodownload"
                    playsInline
                  >
                    <source src={selectedMedia.src} type="video/mp4" />
                    <source src={selectedMedia.src.replace('.mp4', '.webm')} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Info Overlay */}
                  <div className="video-info-overlay">
                    <div className="video-header">
                      <h3>{selectedMedia.caption}</h3>
                      <p>{selectedMedia.description}</p>
                    </div>
                    <div className="video-stats">
                      <span className="duration">⏱️ {selectedMedia.duration}</span>
                      <span className="quality">🎬 HD Quality</span>
                      <span className="category">📁 {selectedMedia.category}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="image-container">
                  <img 
                    src={selectedMedia.src} 
                    alt={selectedMedia.caption || selectedMedia.alt} 
                    className="lightbox-media"
                  />
                  {/* Image Info Overlay */}
                  <div className="image-info-overlay">
                    <div className="image-number">#{selectedMedia.id}</div>
                    <div className="image-details">
                      <span className="image-category">{selectedMedia.category}</span>
                      <span className="image-date">{selectedMedia.date}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Media Info */}
            <div className="lightbox-info">
              <div className="media-header">
                <h3 className="media-title">{selectedMedia.caption}</h3>
                <div className="media-number">#{selectedMedia.id}</div>
              </div>
              {selectedMedia.description && (
                <p className="media-description">{selectedMedia.description}</p>
              )}
              <div className="lightbox-meta">
                <span className="media-category">📁 {selectedMedia.category}</span>
                <span className="media-date">📅 {selectedMedia.date}</span>
                {filteredMedia.length > 1 && (
                  <span className="navigation-hint">Use arrow keys or click arrows to navigate</span>
                )}
              </div>
            </div>

            {/* Enhanced Thumbnail Navigation */}
            {filteredMedia.length > 1 && (
              <div className="lightbox-thumbnails">
                {filteredMedia.slice(Math.max(0, currentImageIndex - 2), currentImageIndex + 3).map((item, idx) => {
                  const actualIndex = Math.max(0, currentImageIndex - 2) + idx;
                  return (
                    <button
                      key={item.src || item.thumbnail}
                      className={`thumbnail ${actualIndex === currentImageIndex ? 'active' : ''}`}
                      onClick={() => {
                        setCurrentImageIndex(actualIndex);
                        setSelectedMedia(item);
                      }}
                      aria-label={`Go to ${item.caption || 'media item'} ${actualIndex + 1} of ${filteredMedia.length}`}
                    >
                      <div className="thumbnail-number">#{item.id}</div>
                      {item.src.includes('.mp4') ? (
                        <div className="thumbnail-video">
                          <img src={item.thumbnail} alt={item.caption} />
                          <div className="video-play-icon">▶️</div>
                        </div>
                      ) : (
                        <img src={item.src} alt={item.caption} />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
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