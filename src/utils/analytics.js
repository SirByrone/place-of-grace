/**
 * Google Analytics and Search Console Integration
 * Enhanced tracking for Place of Grace Children's Home
 */

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  GA_MEASUREMENT_ID: 'G-XXXXXXXXXX', // Replace with actual Google Analytics ID
  GTM_ID: 'GTM-XXXXXXX', // Replace with actual Google Tag Manager ID
  SEARCH_CONSOLE_VERIFICATION: 'your-search-console-verification-code',
  FACEBOOK_PIXEL_ID: 'your-facebook-pixel-id',
  siteName: 'Place of Grace Children\'s Home',
  currency: 'KES' // Kenyan Shilling for donation tracking
};

// Initialize Google Analytics
export const initializeGA = () => {
  if (typeof window === 'undefined') return;

  // Load Google Analytics
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  window.gtag('js', new Date());
  window.gtag('config', ANALYTICS_CONFIG.GA_MEASUREMENT_ID, {
    // Enhanced measurement
    send_page_view: true,
    anonymize_ip: true,
    allow_google_signals: false,
    cookie_flags: 'SameSite=None;Secure',
    
    // Custom parameters for children's home
    custom_map: {
      'custom_parameter_1': 'donation_amount',
      'custom_parameter_2': 'volunteer_interest',
      'custom_parameter_3': 'program_interest'
    }
  });

  // Google Analytics initialized for Place of Grace
};

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  window.gtag('event', 'page_view', {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: pagePath,
    site_name: ANALYTICS_CONFIG.siteName
  });
};

// Track user interactions
export const trackEvent = (eventName, eventCategory, eventLabel, value = null) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  const eventData = {
    event_category: eventCategory,
    event_label: eventLabel,
    site_name: ANALYTICS_CONFIG.siteName
  };

  if (value !== null) {
    eventData.value = value;
  }

  window.gtag('event', eventName, eventData);
};

// Track donations (enhanced for nonprofit)
export const trackDonation = (amount, currency = 'KES', method = 'online') => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  // Enhanced Ecommerce for donations
  window.gtag('event', 'purchase', {
    transaction_id: `donation_${Date.now()}`,
    value: amount,
    currency: currency,
    items: [{
      item_id: 'donation',
      item_name: 'Donation to Place of Grace Children\'s Home',
      item_category: 'donation',
      quantity: 1,
      price: amount
    }]
  });

  // Custom donation event
  window.gtag('event', 'donate', {
    event_category: 'donation',
    event_label: method,
    value: amount,
    currency: currency,
    donation_method: method
  });

  // Donation tracked: ${currency} ${amount} via ${method}
};

// Track volunteer interest
export const trackVolunteerInterest = (volunteerType, contactMethod = 'form') => {
  trackEvent('volunteer_interest', 'engagement', volunteerType);
  
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'generate_lead', {
      event_category: 'volunteer',
      event_label: volunteerType,
      method: contactMethod
    });
  }
};

// Track program interest
export const trackProgramInterest = (programName, action = 'view') => {
  trackEvent('program_interest', 'programs', programName);
  
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'view_item', {
      event_category: 'programs',
      event_label: programName,
      item_name: programName,
      item_category: 'program'
    });
  }
};

// Track contact form submissions
export const trackContactForm = (formType, source = 'website') => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'generate_lead', {
      event_category: 'contact',
      event_label: formType,
      method: 'form',
      source: source
    });
  }

  trackEvent('form_submit', 'contact', formType);
};

// Track gallery interactions
export const trackGalleryInteraction = (action, imageName = null) => {
  const eventData = {
    event_category: 'gallery',
    event_label: action
  };

  if (imageName) {
    eventData.image_name = imageName;
  }

  trackEvent('gallery_interaction', 'engagement', action);
};

// Track search usage
export const trackSearch = (searchTerm, resultsCount) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'search', {
      search_term: searchTerm,
      event_category: 'search',
      event_label: searchTerm,
      results_count: resultsCount
    });
  }
};

// Track file downloads
export const trackDownload = (fileName, fileType) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'file_download', {
      event_category: 'downloads',
      event_label: fileName,
      file_name: fileName,
      file_type: fileType
    });
  }
};

// Track external link clicks
export const trackExternalLink = (url, linkText) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click', {
      event_category: 'external_links',
      event_label: url,
      link_text: linkText,
      link_url: url
    });
  }
};

// Track video interactions
export const trackVideoInteraction = (action, videoName, currentTime = 0) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: 'video',
      event_label: videoName,
      video_name: videoName,
      video_current_time: currentTime
    });
  }
};

// Enhanced user engagement tracking
export const trackUserEngagement = () => {
  let startTime = Date.now();
  let isActive = true;
  let maxScroll = 0;

  // Track scroll depth
  const trackScrollDepth = () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercentage > maxScroll && scrollPercentage % 25 === 0) {
      maxScroll = scrollPercentage;
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'scroll', {
          event_category: 'engagement',
          event_label: `${scrollPercentage}%`,
          value: scrollPercentage
        });
      }
    }
  };

  // Track time on page
  const trackTimeOnPage = () => {
    if (isActive) {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      
      // Track milestone engagement times
      if (timeSpent === 30 || timeSpent === 60 || timeSpent === 180 || timeSpent === 300) {
        if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
          window.gtag('event', 'timing_complete', {
            name: 'time_on_page',
            value: timeSpent,
            event_category: 'engagement'
          });
        }
      }
    }
  };

  // Set up event listeners
  window.addEventListener('scroll', trackScrollDepth);
  window.addEventListener('beforeunload', () => {
    const totalTime = Math.round((Date.now() - startTime) / 1000);
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'timing_complete', {
        name: 'session_duration',
        value: totalTime,
        event_category: 'engagement'
      });
    }
  });

  // Track active/inactive state
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isActive = false;
    } else {
      isActive = true;
      startTime = Date.now(); // Reset timer when returning to page
    }
  });

  // Set up periodic time tracking
  setInterval(trackTimeOnPage, 30000); // Every 30 seconds
};

// Initialize Facebook Pixel (if needed)
export const initializeFacebookPixel = () => {
  if (typeof window === 'undefined' || !ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID) return;

  /* eslint-disable */
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  if (typeof window.fbq !== 'undefined') {
    window.fbq('init', ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
};

// Performance monitoring for SEO
export const trackPerformanceMetrics = () => {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    // Use the Performance Observer API if available
    if ('PerformanceObserver' in window) {
      // Track Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'timing_complete', {
            name: 'largest_contentful_paint',
            value: Math.round(lastEntry.startTime),
            event_category: 'performance'
          });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Track First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'timing_complete', {
              name: 'first_input_delay',
              value: Math.round(entry.processingStart - entry.startTime),
              event_category: 'performance'
            });
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Track Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });

        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'timing_complete', {
            name: 'cumulative_layout_shift',
            value: Math.round(clsValue * 1000),
            event_category: 'performance'
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  });
};

// Initialize all analytics
export const initializeAnalytics = () => {
  initializeGA();
  initializeFacebookPixel();
  trackUserEngagement();
  trackPerformanceMetrics();
  
  // All analytics initialized for Place of Grace Children's Home
};

// Export tracking functions for easy access
export default {
  trackPageView,
  trackEvent,
  trackDonation,
  trackVolunteerInterest,
  trackProgramInterest,
  trackContactForm,
  trackGalleryInteraction,
  trackSearch,
  trackDownload,
  trackExternalLink,
  trackVideoInteraction
};
