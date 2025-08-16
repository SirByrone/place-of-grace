import React, { useState, useEffect, useRef } from 'react';
import './PhotoGallery.css';

const PhotoGallery = ({ 
  photos, 
  title = "Photo Gallery", 
  description = "Click on any photo to view in full size",
  showThumbnails = true,
  autoPlay = false,
  autoPlayInterval = 5000
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  const modalRef = useRef(null);
  const imageRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && isModalOpen && photos.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % photos.length);
      }, autoPlayInterval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isModalOpen, photos.length, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigatePhoto(-1);
          break;
        case 'ArrowRight':
          navigatePhoto(1);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case '+':
        case '=':
          zoomIn();
          break;
        case '-':
          zoomOut();
          break;
        case '0':
          resetZoom();
          break;
        case ' ':
          e.preventDefault();
          toggleAutoPlay();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex]);

  // Fullscreen change detection
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const openModal = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
    setIsModalOpen(true);
    setZoomLevel(1);
    setDragOffset({ x: 0, y: 0 });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
    setZoomLevel(1);
    setDragOffset({ x: 0, y: 0 });
    document.body.style.overflow = '';
  };

  const navigatePhoto = (direction) => {
    const newIndex = (currentIndex + direction + photos.length) % photos.length;
    setCurrentIndex(newIndex);
    setZoomLevel(1);
    setDragOffset({ x: 0, y: 0 });
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await modalRef.current.requestFullscreen();
      } catch (err) {
        // Remove console.log for production security
      }
    } else {
      try {
        await document.exitFullscreen();
      } catch (err) {
        // Remove console.log for production security
      }
    }
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev * 1.2, 5));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev / 1.2, 0.1));
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setDragOffset({ x: 0, y: 0 });
  };

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      const newOffset = {
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      };
      setDragOffset(newOffset);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch functionality for mobile
  const handleTouchStart = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({ x: touch.clientX - dragOffset.x, y: touch.clientY - dragOffset.y });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      const touch = e.touches[0];
      const newOffset = {
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      };
      setDragOffset(newOffset);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  if (!photos || photos.length === 0) {
    return (
      <div className="photo-gallery-empty">
        <div className="empty-icon">📷</div>
        <p>No photos available</p>
      </div>
    );
  }

  return (
    <div className="photo-gallery">
      {/* Gallery Header */}
      <div className="gallery-header">
        <h3 className="gallery-title">{title}</h3>
        {description && <p className="gallery-description">{description}</p>}
      </div>

      {/* Photo Grid */}
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="photo-item"
            onClick={() => openModal(photo, index)}
          >
            <div className="photo-wrapper">
              <img 
                src={photo.src || photo.image || photo} 
                alt={photo.alt || photo.title || `Photo ${index + 1}`}
                className="photo-thumbnail"
                loading="lazy"
              />
              <div className="photo-overlay">
                <div className="photo-overlay-content">
                  <span className="view-icon">👁️</span>
                  <span className="view-text">View</span>
                </div>
              </div>
            </div>
            {photo.title && (
              <div className="photo-caption">
                <h4>{photo.title}</h4>
                {photo.description && <p>{photo.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="photo-modal-overlay" onClick={closeModal}>
          <div 
            className="photo-modal"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-info">
                <h3 className="modal-title">
                  {photos[currentIndex].title || `Photo ${currentIndex + 1}`}
                </h3>
                {photos[currentIndex].description && (
                  <p className="modal-description">{photos[currentIndex].description}</p>
                )}
              </div>
              <button className="modal-close" onClick={closeModal}>
                <span>✕</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="modal-content">
              <div className="modal-image-container">
                <img
                  src={photos[currentIndex].src || photos[currentIndex].image || photos[currentIndex]}
                  alt={photos[currentIndex].alt || photos[currentIndex].title || `Photo ${currentIndex + 1}`}
                  className="modal-image"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${dragOffset.x}px, ${dragOffset.y}px)`,
                    cursor: zoomLevel > 1 ? 'grab' : 'default'
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <div className="modal-controls">
                <button 
                  className="modal-btn prev-btn"
                  onClick={() => navigatePhoto(-1)}
                  disabled={currentIndex === 0}
                >
                  ← Previous
                </button>
                
                <div className="zoom-controls">
                  <button 
                    className="zoom-btn"
                    onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.5))}
                    disabled={zoomLevel <= 1}
                  >
                    🔍-
                  </button>
                  <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
                  <button 
                    className="zoom-btn"
                    onClick={() => setZoomLevel(Math.min(5, zoomLevel + 0.5))}
                    disabled={zoomLevel >= 5}
                  >
                    🔍+
                  </button>
                  {zoomLevel > 1 && (
                    <button 
                      className="reset-zoom-btn"
                      onClick={() => {
                        setZoomLevel(1);
                        setDragOffset({ x: 0, y: 0 });
                      }}
                    >
                      Reset
                    </button>
                  )}
                </div>
                
                <button 
                  className="modal-btn next-btn"
                  onClick={() => navigatePhoto(1)}
                  disabled={currentIndex === photos.length - 1}
                >
                  Next →
                </button>
              </div>
              
              <div className="modal-counter">
                {currentIndex + 1} of {photos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;