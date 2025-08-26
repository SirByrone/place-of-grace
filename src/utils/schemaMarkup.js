/**
 * Schema Markup Generator for Place of Grace Children's Home
 * Creates structured data for enhanced SEO and rich snippets
 */

export const SCHEMA_BASE_URL = 'https://www.placeofgracecommunitycentre.org';

// Organization Schema (Main)
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${SCHEMA_BASE_URL}/#organization`,
  "name": "Place of Grace Community Centre",
  "alternateName": "Place of Grace Children's Home",
  "url": SCHEMA_BASE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SCHEMA_BASE_URL}/assets/logo.jpg`,
    "width": 200,
    "height": 200
  },
  "image": {
    "@type": "ImageObject",
    "url": `${SCHEMA_BASE_URL}/assets/logo.jpg`,
    "width": 1200,
    "height": 630
  },
  "description": "Place of Grace Children's Home is a nonprofit organization providing comprehensive care, education, healthcare, and psychosocial support to vulnerable children in Nairobi, Kenya since 2009.",
  "foundingDate": "2009",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Donholm Phase Five Policeline Road",
      "addressLocality": "Nairobi",
      "addressCountry": "KE",
      "postalCode": "00100"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Donholm Phase Five Policeline Road",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi County",
    "postalCode": "00100",
    "addressCountry": "KE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.2921,
    "longitude": 36.8219
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+254722860321",
      "contactType": "customer service",
      "availableLanguage": ["English", "Swahili"],
      "areaServed": "KE"
    },
    {
      "@type": "ContactPoint",
      "email": "placeofgraceoutreach@gmail.com",
      "contactType": "customer service",
      "availableLanguage": ["English", "Swahili"],
      "areaServed": "KE"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Kenya"
  },
  "knowsAbout": [
    "Child Care",
    "Child Protection",
    "Education Support",
    "Healthcare Services",
    "Psychosocial Support",
    "Community Development",
    "Vulnerable Children",
    "Orphan Care",
    "Child Rehabilitation",
    "Skills Development"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Kenya Association of Children's Homes"
  },
  "nonprofitStatus": "NonprofitANBI",
  "missionCoveragePrioritiesPolicy": "Supporting vulnerable children through comprehensive care, education, healthcare, and psychosocial support programs.",
  "serviceArea": {
    "@type": "AdministrativeArea",
    "name": "Nairobi County"
  },
  "potentialAction": [
    {
      "@type": "DonateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SCHEMA_BASE_URL}/get-involved#donate`
      },
      "recipient": {
        "@type": "NGO",
        "@id": `${SCHEMA_BASE_URL}/#organization`
      }
    },
    {
      "@type": "VolunteerAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SCHEMA_BASE_URL}/get-involved#volunteer`
      }
    },
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SCHEMA_BASE_URL}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/PlaceOfGraceKE",
    "https://www.instagram.com/placeofgraceke",
    "https://twitter.com/PlaceOfGraceKE",
    "https://www.linkedin.com/company/place-of-grace-ke"
  ]
});

// Local Business Schema
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SCHEMA_BASE_URL}/#localbusiness`,
  "name": "Place of Grace Children's Home",
  "image": `${SCHEMA_BASE_URL}/assets/logo.jpg`,
  "telephone": "+254722860321",
  "email": "placeofgraceoutreach@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Donholm Phase Five Policeline Road",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi County",
    "postalCode": "00100",
    "addressCountry": "KE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.2921,
    "longitude": 36.8219
  },
  "url": SCHEMA_BASE_URL,
  "openingHours": [
    "Mo-Fr 08:00-17:00",
    "Sa 09:00-14:00"
  ],
  "priceRange": "Free",
  "currenciesAccepted": "KES, USD, EUR",
  "paymentAccepted": "Cash, Bank Transfer, Mobile Money, Online Payment"
});

// Website Schema
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SCHEMA_BASE_URL}/#website`,
  "url": SCHEMA_BASE_URL,
  "name": "Place of Grace Children's Home",
  "description": "Official website of Place of Grace Children's Home in Nairobi, Kenya",
  "publisher": {
    "@id": `${SCHEMA_BASE_URL}/#organization`
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SCHEMA_BASE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": ["en-KE", "sw-KE"]
});

// FAQ Schema
export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Article Schema for News/Blog posts
export const generateArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description || article.excerpt,
  "image": article.image ? `${SCHEMA_BASE_URL}${article.image}` : `${SCHEMA_BASE_URL}/assets/logo.jpg`,
  "author": {
    "@type": "Organization",
    "name": "Place of Grace Children's Home",
    "url": SCHEMA_BASE_URL
  },
  "publisher": {
    "@type": "Organization",
    "name": "Place of Grace Children's Home",
    "logo": {
      "@type": "ImageObject",
      "url": `${SCHEMA_BASE_URL}/assets/logo.jpg`
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${SCHEMA_BASE_URL}${article.url}`
  },
  "articleSection": article.category || "News",
  "wordCount": article.wordCount || 500,
  "inLanguage": "en-KE",
  "about": {
    "@type": "Thing",
    "name": "Children's Home",
    "description": "Nonprofit organization supporting vulnerable children"
  }
});

// Event Schema
export const generateEventSchema = (event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.name,
  "description": event.description,
  "startDate": event.startDate,
  "endDate": event.endDate,
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": event.attendanceMode || "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Place of Grace Children's Home",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Donholm Phase Five Policeline Road",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    }
  },
  "image": event.image ? `${SCHEMA_BASE_URL}${event.image}` : `${SCHEMA_BASE_URL}/assets/logo.jpg`,
  "organizer": {
    "@type": "Organization",
    "name": "Place of Grace Children's Home",
    "url": SCHEMA_BASE_URL
  },
  "offers": event.isFree ? {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KES",
    "availability": "https://schema.org/InStock"
  } : undefined
});

// Service Schema for Programs
export const generateServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@id": `${SCHEMA_BASE_URL}/#organization`
  },
  "areaServed": {
    "@type": "Country",
    "name": "Kenya"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Vulnerable Children"
  },
  "category": service.category || "Child Care Services",
  "serviceType": service.serviceType || "Nonprofit Service",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KES",
    "description": "Free service for vulnerable children"
  }
});

// Breadcrumb Schema
export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `${SCHEMA_BASE_URL}${crumb.url}`
  }))
});

// Contact Page Schema
export const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Place of Grace Children's Home",
  "description": "Get in touch with Place of Grace Children's Home in Nairobi, Kenya",
  "mainEntity": {
    "@id": `${SCHEMA_BASE_URL}/#organization`
  },
  "significantLink": [
    `${SCHEMA_BASE_URL}/contact`,
    "tel:+254722860321",
    "mailto:placeofgraceoutreach@gmail.com"
  ]
});

// ImageObject Schema for Gallery
export const generateImageSchema = (image) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": `${SCHEMA_BASE_URL}${image.url}`,
  "url": `${SCHEMA_BASE_URL}${image.url}`,
  "name": image.title || image.alt,
  "description": image.description || image.caption,
  "caption": image.caption,
  "creator": {
    "@type": "Organization",
    "name": "Place of Grace Children's Home"
  },
  "creditText": "Place of Grace Children's Home",
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Place of Grace Children's Home"
  },
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "acquireLicensePage": `${SCHEMA_BASE_URL}/contact`
});

// VideoObject Schema
export const generateVideoSchema = (video) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.title,
  "description": video.description,
  "thumbnailUrl": `${SCHEMA_BASE_URL}${video.thumbnail}`,
  "uploadDate": video.uploadDate,
  "duration": video.duration,
  "contentUrl": `${SCHEMA_BASE_URL}${video.url}`,
  "embedUrl": video.embedUrl,
  "creator": {
    "@type": "Organization",
    "name": "Place of Grace Children's Home"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Place of Grace Children's Home",
    "logo": {
      "@type": "ImageObject",
      "url": `${SCHEMA_BASE_URL}/assets/logo.jpg`
    }
  }
});

// Donation Schema
export const generateDonationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "recipient": {
    "@id": `${SCHEMA_BASE_URL}/#organization`
  },
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": `${SCHEMA_BASE_URL}/get-involved#donate`,
    "actionPlatform": [
      "http://schema.org/DesktopWebPlatform",
      "http://schema.org/MobileWebPlatform"
    ]
  },
  "result": {
    "@type": "MonetaryGrant",
    "description": "Support vulnerable children through donations to Place of Grace Children's Home"
  }
});

// Helper function to inject structured data
export const injectStructuredData = (schema, id) => {
  if (typeof document === 'undefined') return;
  
  // Remove existing schema with same ID
  const existing = document.querySelector(`script[data-schema-id="${id}"]`);
  if (existing) {
    existing.remove();
  }
  
  // Create and inject new schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema-id', id);
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

// Export all schemas for easy use
export default {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateFAQSchema,
  generateArticleSchema,
  generateEventSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateContactPageSchema,
  generateImageSchema,
  generateVideoSchema,
  generateDonationSchema,
  injectStructuredData
};
