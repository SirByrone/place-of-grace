import React from 'react';
import { handleEmailClick, openPhone } from '../utils/externalAppIntegration';
import './PhotoModal.css';

const PhotoModal = ({ isOpen, onClose, member }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContactClick = (type, value) => {
    if (type === 'phone') {
      openPhone(value);
    } else if (type === 'email') {
      handleEmailClick(value, `Contact Request - ${member.name}`, `Hello, I would like to get in touch regarding ${member.name} from your team.`);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  return (
    <div className="photo-modal-overlay" onClick={handleBackdropClick}>
      <div className="photo-modal">
        <button className="photo-modal-close" onClick={onClose}>
          <span>×</span>
        </button>
        
        <div className="photo-modal-content">
          <div className="photo-modal-image-container">
            <img 
              src={member.image} 
              alt={member.name}
              className="photo-modal-image"
            />
          </div>
          
          <div className="photo-modal-details">
            <h2 className="photo-modal-name">{member.name}</h2>
            <p className="photo-modal-role">{member.role}</p>
            <p className="photo-modal-bio">{member.bio}</p>
            {member.phone && (
              <div className="photo-modal-contact">
                <a 
                  href={`tel:${member.phone}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleContactClick('phone', member.phone);
                  }} 
                  className="photo-modal-phone"
                >
                  📞 {member.phone}
                </a>
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleContactClick('email', member.email);
                    }} 
                    className="photo-modal-email"
                  >
                    📧 {member.email}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal; 