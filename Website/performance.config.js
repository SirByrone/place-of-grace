// Performance Configuration for Place of Grace Children's Home
// Runtime optimization settings for optimal performance

const performanceConfig = {
  // Caching strategies
  cache: {
    maxAge: 31536000, // 1 year
    staleWhileRevalidate: 86400, // 1 day
    maxEntries: 100,
    maxAgeSeconds: 31536000
  },

  // Image optimization
  images: {
    formats: ['webp', 'avif', 'jpeg'],
    sizes: [320, 640, 768, 1024, 1280, 1920],
    quality: 85,
    lazyLoading: true,
    preload: true
  },

  // Font optimization
  fonts: {
    display: 'swap',
    preload: true,
    fallback: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
  },

  // JavaScript optimization
  javascript: {
    chunking: true,
    treeShaking: true,
    minification: true,
    sourceMaps: false,
    runtimeChunk: false
  },

  // CSS optimization
  css: {
    minification: true,
    autoprefixer: true,
    purgeUnused: true,
    criticalCSS: true
  },

  // Service Worker
  serviceWorker: {
    enabled: true,
    scope: '/',
    updateViaCache: 'none',
    skipWaiting: true,
    clientsClaim: true
  },

  // PWA features
  pwa: {
    enabled: true,
    installPrompt: true,
    offlineSupport: true,
    backgroundSync: true,
    pushNotifications: true
  },

  // Performance monitoring
  monitoring: {
    webVitals: true,
    errorTracking: true,
    performanceMetrics: true,
    userAnalytics: true
  },

  // Security
  security: {
    csp: true,
    hsts: true,
    xssProtection: true,
    referrerPolicy: 'strict-origin-when-cross-origin'
  },

  // CDN and hosting
  cdn: {
    enabled: true,
    domains: ['cdn.placeofgrace.org'],
    fallback: true
  },

  // Compression
  compression: {
    gzip: true,
    brotli: true,
    minSize: 1024
  },

  // HTTP/2 optimization
  http2: {
    enabled: true,
    serverPush: true,
    headerCompression: true
  }
};

// Runtime performance monitoring
const performanceMonitor = {
  // Core Web Vitals
  measureCoreWebVitals() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.logMetric(entry.name, entry.value);
        }
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation'] });
    }
  },

  // Log performance metrics
  logMetric(name, value) {
    console.log(`Performance Metric - ${name}: ${value}`);
    
    // Send to analytics if enabled
    if (performanceConfig.monitoring.performanceMetrics) {
      this.sendToAnalytics(name, value);
    }
  },

  // Send metrics to analytics
  sendToAnalytics(name, value) {
    // Implementation for sending to Google Analytics or other services
    if (window.gtag) {
      window.gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value
      });
    }
  },

  // Monitor resource loading
  monitorResources() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            this.logResourceTiming(entry);
          }
        }
      });
      
      observer.observe({ entryTypes: ['resource'] });
    }
  },

  // Log resource timing
  logResourceTiming(entry) {
    const timing = {
      name: entry.name,
      duration: entry.duration,
      size: entry.transferSize,
      type: entry.initiatorType
    };
    
    console.log('Resource Timing:', timing);
  },

  // Initialize monitoring
  init() {
    this.measureCoreWebVitals();
    this.monitorResources();
    
    // Monitor page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.measurePageLoadPerformance();
      }, 0);
    });
  },

  // Measure page load performance
  measurePageLoadPerformance() {
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      const metrics = {
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        ttfb: navigation.responseStart - navigation.requestStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart
      };
      
      Object.entries(metrics).forEach(([key, value]) => {
        this.logMetric(key, value);
      });
    }
  }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { performanceConfig, performanceMonitor };
} else {
  window.performanceConfig = performanceConfig;
  window.performanceMonitor = performanceMonitor;
  
  // Auto-initialize in browser
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      performanceMonitor.init();
    });
  } else {
    performanceMonitor.init();
  }
}
