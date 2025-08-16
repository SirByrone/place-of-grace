/**
 * Optimized External App Integration Utilities
 * Secure integration with external applications and services
 */

// Security: URL validation regex
const URL_REGEX = /^https?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

// Security: Input sanitization
const sanitizeUrl = (url) => {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  return URL_REGEX.test(trimmed) ? trimmed : null;
};

// Security: Email validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sanitizeEmail = (email) => {
  if (!email || typeof email !== 'string') return null;
  const trimmed = email.trim().toLowerCase();
  return EMAIL_REGEX.test(trimmed) ? trimmed : null;
};

// Security: Phone validation
const PHONE_REGEX = /^[+]?[1-9][\d]{0,15}$/;
const sanitizePhone = (phone) => {
  if (!phone || typeof phone !== 'string') return null;
  const cleaned = phone.replace(/[\s\-()]/g, '');
  return PHONE_REGEX.test(cleaned) ? cleaned : null;
};



// Security: Safe window.open with CSP compliance
const safeOpen = (url, target = '_blank') => {
  const sanitized = sanitizeUrl(url);
  if (!sanitized) {
    console.warn('Invalid URL provided:', url);
    return false;
  }
  
  try {
    const windowRef = window.open(sanitized, target, 'noopener,noreferrer');
    if (windowRef) {
      windowRef.opener = null;
      return true;
    }
  } catch (error) {
    console.error('Failed to open URL:', error);
  }
  return false;
};

// Optimized email handling
export const handleEmailClick = (email, subject = '', body = '') => {
  const sanitizedEmail = sanitizeEmail(email);
  if (!sanitizedEmail) {
    console.warn('Invalid email address:', email);
    return false;
  }

  const params = new URLSearchParams();
  params.append('to', sanitizedEmail);
  if (subject) params.append('subject', subject.substring(0, 100)); // Limit length
  if (body) params.append('body', body.substring(0, 1000)); // Limit length

  const mailtoUrl = `mailto:${sanitizedEmail}?${params.toString()}`;
  return safeOpen(mailtoUrl);
};

// Optimized phone handling
export const openPhone = (phone) => {
  const sanitizedPhone = sanitizePhone(phone);
  if (!sanitizedPhone) {
    console.warn('Invalid phone number:', phone);
    return false;
  }

  const telUrl = `tel:${sanitizedPhone}`;
  return safeOpen(telUrl);
};

// Optimized social media handling
export const openSocialMedia = (platform, identifier) => {
  if (!identifier || typeof identifier !== 'string') {
    console.warn('Invalid social media identifier:', identifier);
    return false;
  }

  const sanitizedId = identifier.trim();
  const urls = {
    facebook: `https://facebook.com/${sanitizedId}`,
    instagram: `https://instagram.com/${sanitizedId}`,
    twitter: `https://twitter.com/${sanitizedId}`,
    linkedin: `https://linkedin.com/in/${sanitizedId}`,
    youtube: `https://youtube.com/${sanitizedId}`,
    whatsapp: `https://wa.me/${sanitizedId.replace(/\D/g, '')}`,
    telegram: `https://t.me/${sanitizedId}`,
    tiktok: `https://tiktok.com/@${sanitizedId}`
  };

  const url = urls[platform.toLowerCase()];
  if (!url) {
    console.warn('Unsupported social media platform:', platform);
    return false;
  }

  return safeOpen(url);
};

// Optimized external link handling
export const openSecureExternalLink = (url) => {
  return safeOpen(url);
};

// Performance: Batch operations
export const batchOpenLinks = (links) => {
  if (!Array.isArray(links)) return false;
  
  return links.every(link => {
    if (link.type === 'email') return handleEmailClick(link.email, link.subject, link.body);
    if (link.type === 'phone') return openPhone(link.phone);
    if (link.type === 'social') return openSocialMedia(link.platform, link.identifier);
    if (link.type === 'url') return openSecureExternalLink(link.url);
    return false;
  });
};

// Security: CSP-compliant image loading
export const loadSecureImage = (src, fallback = '') => {
  const sanitized = sanitizeUrl(src);
  if (!sanitized) return fallback;
  
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(sanitized);
    img.onerror = () => resolve(fallback);
    img.src = sanitized;
  });
};

// Performance: Debounced function for rapid calls
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Security: Rate limiting for API calls
const rateLimit = new Map();
export const rateLimitedCall = (key, func, limit = 1000) => {
  const now = Date.now();
  const lastCall = rateLimit.get(key) || 0;
  
  if (now - lastCall < limit) {
    return false;
  }
  
  rateLimit.set(key, now);
  return func();
};
