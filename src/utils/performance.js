/**
 * Optimized Performance Monitoring
 * Lightweight performance tracking and optimization
 */

// Performance metrics storage
const metrics = new Map();
const observers = new Map();

// Core Web Vitals tracking
export const trackCoreWebVitals = () => {
  if (!window.performance || !window.PerformanceObserver) return;

  // LCP (Largest Contentful Paint)
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    metrics.set('lcp', lastEntry.startTime);
  });
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

  // FID (First Input Delay)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach(entry => {
      metrics.set('fid', entry.processingStart - entry.startTime);
    });
  });
  fidObserver.observe({ entryTypes: ['first-input'] });

  // CLS (Cumulative Layout Shift)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach(entry => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        metrics.set('cls', clsValue);
      }
    });
  });
  clsObserver.observe({ entryTypes: ['layout-shift'] });

  // Store observers for cleanup
  observers.set('lcp', lcpObserver);
  observers.set('fid', fidObserver);
  observers.set('cls', clsObserver);
};

// Performance timing
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const duration = performance.now() - start;
  
  metrics.set(name, duration);
  return result;
};

// Async performance measurement
export const measureAsyncPerformance = async (name, fn) => {
  const start = performance.now();
  const result = await fn();
  const duration = performance.now() - start;
  
  metrics.set(name, duration);
  return result;
};

// Resource loading performance
export const trackResourcePerformance = () => {
  if (!window.performance) return;

  const resources = performance.getEntriesByType('resource');
  resources.forEach(resource => {
    const key = `resource_${resource.name.split('/').pop()}`;
    metrics.set(key, {
      duration: resource.duration,
      size: resource.transferSize,
      type: resource.initiatorType
    });
  });
};

// Memory usage tracking
export const trackMemoryUsage = () => {
  if (!performance.memory) return;

  const memory = performance.memory;
  metrics.set('memory', {
    used: memory.usedJSHeapSize,
    total: memory.totalJSHeapSize,
    limit: memory.jsHeapSizeLimit
  });
};

// Component render performance
export const trackComponentRender = (componentName) => {
  const start = performance.now();
  
  return () => {
    const duration = performance.now() - start;
    metrics.set(`render_${componentName}`, duration);
  };
};

// Network performance
export const trackNetworkPerformance = () => {
  if (!navigator.connection) return;

  const connection = navigator.connection;
  metrics.set('network', {
    effectiveType: connection.effectiveType,
    downlink: connection.downlink,
    rtt: connection.rtt
  });
};

// Performance optimization utilities
export const optimizeImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
  observers.set('images', imageObserver);
};

// Debounced function for performance
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

// Throttled function for performance
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy loading utility
export const lazyLoad = (elements, options = {}) => {
  const { threshold = 0.1, rootMargin = '50px' } = options;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        if (element.dataset.src) {
          element.src = element.dataset.src;
          element.removeAttribute('data-src');
        }
        observer.unobserve(element);
      }
    });
  }, { threshold, rootMargin });

  elements.forEach(el => observer.observe(el));
  return observer;
};

// Performance reporting
export const reportPerformance = () => {
  const report = {
    coreWebVitals: {
      lcp: metrics.get('lcp'),
      fid: metrics.get('fid'),
      cls: metrics.get('cls')
    },
    memory: metrics.get('memory'),
    network: metrics.get('network'),
    resources: Array.from(metrics.entries())
      .filter(([key]) => key.startsWith('resource_'))
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {})
  };

  // Send to analytics (if configured)
  if (window.gtag) {
    window.gtag('event', 'performance', report);
  }

  return report;
};

// Cleanup function
export const cleanupPerformance = () => {
  observers.forEach(observer => {
    if (observer.disconnect) {
      observer.disconnect();
    }
  });
  observers.clear();
  metrics.clear();
};

// Initialize performance tracking
export const initPerformanceTracking = () => {
  trackCoreWebVitals();
  trackResourcePerformance();
  trackMemoryUsage();
  trackNetworkPerformance();
  optimizeImages();
  
  // Report performance on page unload
  window.addEventListener('beforeunload', reportPerformance);
  
  // Periodic memory tracking
  setInterval(trackMemoryUsage, 30000);
};

// Performance budget checking
export const checkPerformanceBudget = (budgets) => {
  const violations = [];
  
  Object.entries(budgets).forEach(([metric, budget]) => {
    const value = metrics.get(metric);
    if (value && value > budget) {
      violations.push({ metric, value, budget });
    }
  });
  
  return violations;
};
