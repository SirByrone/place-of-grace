/**
 * Comprehensive SEO Optimization for Place of Grace Community Centre
 * Maximum search engine visibility and performance optimization
 */

// Core Web Vitals Monitoring
export const monitorCoreWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Import web-vitals dynamically
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    // Cumulative Layout Shift (CLS)
    getCLS((metric) => {
      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'core_web_vital', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000) / 1000
        });
      }
    });

    // First Input Delay (FID)
    getFID((metric) => {
      if (window.gtag) {
        window.gtag('event', 'core_web_vital', {
          event_category: 'Web Vitals',
          event_label: 'FID',
          value: Math.round(metric.value)
        });
      }
    });

    // First Contentful Paint (FCP)
    getFCP((metric) => {
      if (window.gtag) {
        window.gtag('event', 'core_web_vital', {
          event_category: 'Web Vitals',
          event_label: 'FCP',
          value: Math.round(metric.value)
        });
      }
    });

    // Largest Contentful Paint (LCP)
    getLCP((metric) => {
      if (window.gtag) {
        window.gtag('event', 'core_web_vital', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(metric.value)
        });
      }
    });

    // Time to First Byte (TTFB)
    getTTFB((metric) => {
      if (window.gtag) {
        window.gtag('event', 'core_web_vital', {
          event_category: 'Web Vitals',
          event_label: 'TTFB',
          value: Math.round(metric.value)
        });
      }
    });
  });
};

// Schema.org Structured Data
export const generateStructuredData = (type, data) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseSchema,
        name: 'Place of Grace Community Centre',
        alternateName: 'Place of Grace Children\'s Home',
        url: 'https://www.placeofgracecommunitycentre.org',
        logo: 'https://www.placeofgracecommunitycentre.org/assets/logo.jpg',
        description: 'A non-profit organization dedicated to providing education, healthcare, and support to vulnerable children and communities in Kenya.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Donholm Phase Five Policeline Road',
          addressLocality: 'Nairobi',
          addressCountry: 'KE',
          postalCode: '00100'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+254722860321',
          email: 'pogchome2019@gmail.com',
          contactType: 'customer service'
        },
        sameAs: [
          'https://www.facebook.com/PlaceofGrace.CommunityCentre',
          'https://www.instagram.com/placeofgrace_childrenshome',
          'https://www.youtube.com/PlaceofGraceChildrensHome'
        ],
        foundingDate: '2009',
        areaServed: 'Kenya',
        serviceType: 'Children\'s Home, Education, Healthcare, Community Development'
      };

    case 'LocalBusiness':
      return {
        ...baseSchema,
        name: 'Place of Grace Community Centre',
        description: 'Providing care and support for vulnerable children in Kenya',
        url: 'https://www.placeofgracecommunitycentre.org',
        telephone: '+254722860321',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Donholm Phase Five Policeline Road',
          addressLocality: 'Nairobi',
          addressCountry: 'KE',
          postalCode: '00100'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -1.2921,
          longitude: 36.8219
        },
        openingHours: 'Mo-Su 24/7',
        priceRange: 'Free',
        category: 'Non-Profit Organization'
      };

    case 'WebSite':
      return {
        ...baseSchema,
        name: 'Place of Grace Community Centre',
        url: 'https://www.placeofgracecommunitycentre.org',
        description: 'Official website of Place of Grace Community Centre - Empowering children and communities in Kenya',
        publisher: {
          '@type': 'Organization',
          name: 'Place of Grace Community Centre'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.placeofgracecommunitycentre.org/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      };

    case 'BreadcrumbList':
      return {
        ...baseSchema,
        itemListElement: data.breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      };

    default:
      return baseSchema;
  }
};

// Meta Tags Generator
export const generateMetaTags = (pageData) => {
  const {
    title,
    description,
    keywords = [],
    image,
    url,
    type = 'website',
    author = 'Place of Grace Community Centre'
  } = pageData;

  const baseUrl = 'https://www.placeofgracecommunitycentre.org';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image ? `${baseUrl}${image}` : `${baseUrl}/assets/logo.jpg`;

  const defaultKeywords = [
    'Place of Grace',
    'Community Centre',
    'Kenya',
    'children\'s home',
    'education',
    'healthcare',
    'non-profit',
    'charity',
    'orphanage',
    'community development',
    'social work',
    'Kenya charity',
    'children\'s education',
    'community support',
    'vulnerable children',
    'Nairobi',
    'Donholm'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return {
    // Basic Meta Tags
    title: title || 'Place of Grace Community Centre - Empowering Children & Communities in Kenya',
    description: description || 'Place of Grace Community Centre is a non-profit organization dedicated to providing education, healthcare, and support to vulnerable children and communities in Kenya. Join us in making a difference.',
    keywords: allKeywords.join(', '),
    author,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    canonical: fullUrl,

    // Open Graph / Facebook
    'og:type': type,
    'og:url': fullUrl,
    'og:title': title || 'Place of Grace Community Centre - Empowering Children & Communities in Kenya',
    'og:description': description || 'Place of Grace Community Centre is a non-profit organization dedicated to providing education, healthcare, and support to vulnerable children and communities in Kenya.',
    'og:image': fullImage,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:site_name': 'Place of Grace Community Centre',
    'og:locale': 'en_US',

    // Twitter Card
    'twitter:card': 'summary_large_image',
    'twitter:site': '@PlaceofGrace',
    'twitter:title': title || 'Place of Grace Community Centre - Empowering Children & Communities in Kenya',
    'twitter:description': description || 'Place of Grace Community Centre is a non-profit organization dedicated to providing education, healthcare, and support to vulnerable children and communities in Kenya.',
    'twitter:image': fullImage,

    // Additional SEO
    'article:author': author,
    'article:publisher': 'Place of Grace Community Centre',
    'article:published_time': new Date().toISOString(),
    'article:modified_time': new Date().toISOString(),
    'article:section': 'Non-Profit',
    'article:tag': allKeywords.slice(0, 10)
  };
};

// Performance Monitoring
export const monitorPerformance = () => {
  if (typeof window === 'undefined') return;

  // Page Load Performance
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    const navigation = performance.getEntriesByType('navigation')[0];
    
    const metrics = {
      pageLoadTime: loadTime,
      timeToFirstByte: navigation.responseStart - navigation.requestStart,
      firstContentfulPaint: 0,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart
    };

    // Get First Contentful Paint
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      metrics.firstContentfulPaint = fcpEntry.startTime;
    }

    // Send to analytics
    if (window.gtag) {
      window.gtag('event', 'page_performance', {
        event_category: 'Performance',
        event_label: 'Page Load',
        value: Math.round(metrics.pageLoadTime),
        custom_parameters: {
          ttfb: Math.round(metrics.timeToFirstByte),
          fcp: Math.round(metrics.firstContentfulPaint),
          dcl: Math.round(metrics.domContentLoaded),
          load: Math.round(metrics.loadComplete)
        }
      });
    }
  });
};

// SEO-friendly URL generation
export const generateSEOFriendlyURL = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};

// Image optimization for SEO
export const optimizeImageForSEO = (imagePath, altText, width = 1200, height = 630) => {
  return {
    src: imagePath,
    alt: altText,
    width,
    height,
    loading: 'lazy',
    decoding: 'async'
  };
};

// Internal linking optimization
export const generateInternalLinks = () => {
  return [
    { url: '/about', text: 'About Us', title: 'Learn about our mission and history' },
    { url: '/programs', text: 'Our Programs', title: 'Discover our educational and healthcare programs' },
    { url: '/get-involved', text: 'Get Involved', title: 'Find ways to support our mission' },
    { url: '/contact', text: 'Contact Us', title: 'Get in touch with our team' },
    { url: '/gallery', text: 'Photo Gallery', title: 'View photos of our children and facilities' },
    { url: '/news', text: 'News & Events', title: 'Stay updated with our latest news' }
  ];
};

// Sitemap generation helper
export const generateSitemapData = () => {
  const baseUrl = 'https://www.placeofgracecommunitycentre.org';
  const currentDate = new Date().toISOString();

  return [
    { url: '/', lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { url: '/about', lastmod: currentDate, changefreq: 'monthly', priority: '0.8' },
    { url: '/programs', lastmod: currentDate, changefreq: 'monthly', priority: '0.8' },
    { url: '/get-involved', lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { url: '/contact', lastmod: currentDate, changefreq: 'monthly', priority: '0.7' },
    { url: '/gallery', lastmod: currentDate, changefreq: 'weekly', priority: '0.6' },
    { url: '/news', lastmod: currentDate, changefreq: 'weekly', priority: '0.7' },
    { url: '/faq', lastmod: currentDate, changefreq: 'monthly', priority: '0.6' },
    { url: '/transparency', lastmod: currentDate, changefreq: 'monthly', priority: '0.5' },
    { url: '/impact', lastmod: currentDate, changefreq: 'monthly', priority: '0.7' }
  ];
};

// Social media optimization
export const generateSocialMeta = (pageData) => {
  const { title, description, image, url } = pageData;
  const baseUrl = 'https://www.placeofgracecommunitycentre.org';
  
  return {
    facebook: {
      title: title || 'Place of Grace Community Centre',
      description: description || 'Empowering children and communities in Kenya',
      image: image ? `${baseUrl}${image}` : `${baseUrl}/assets/logo.jpg`,
      url: url ? `${baseUrl}${url}` : baseUrl
    },
    twitter: {
      title: title || 'Place of Grace Community Centre',
      description: description || 'Empowering children and communities in Kenya',
      image: image ? `${baseUrl}${image}` : `${baseUrl}/assets/logo.jpg`,
      url: url ? `${baseUrl}${url}` : baseUrl
    },
    linkedin: {
      title: title || 'Place of Grace Community Centre',
      description: description || 'Empowering children and communities in Kenya',
      image: image ? `${baseUrl}${image}` : `${baseUrl}/assets/logo.jpg`,
      url: url ? `${baseUrl}${url}` : baseUrl
    }
  };
};

// Initialize all SEO optimizations
export const initializeSEO = () => {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals
  monitorCoreWebVitals();
  
  // Monitor Performance
  monitorPerformance();
  
  // Add structured data to page
  const organizationSchema = generateStructuredData('Organization');
  const websiteSchema = generateStructuredData('WebSite');
  
  // Inject structured data
  const script1 = document.createElement('script');
  script1.type = 'application/ld+json';
  script1.textContent = JSON.stringify(organizationSchema);
  document.head.appendChild(script1);
  
  const script2 = document.createElement('script');
  script2.type = 'application/ld+json';
  script2.textContent = JSON.stringify(websiteSchema);
  document.head.appendChild(script2);
};

// Export all SEO functions
export {
  monitorCoreWebVitals,
  generateStructuredData,
  generateMetaTags,
  monitorPerformance,
  generateSEOFriendlyURL,
  optimizeImageForSEO,
  generateInternalLinks,
  generateSitemapData,
  generateSocialMeta,
  initializeSEO
};
