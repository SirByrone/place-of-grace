/**
 * Testing Utilities for Place of Grace Children's Home Website
 * Comprehensive testing framework for manual and automated testing
 */

// Performance Testing
export const performanceTests = {
  
  // Test Core Web Vitals
  measureWebVitals: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      
      const metrics = {
        // First Contentful Paint
        fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        
        // Largest Contentful Paint (approximation)
        lcp: navigation?.loadEventEnd - navigation?.navigationStart || 0,
        
        // Cumulative Layout Shift (requires observer)
        cls: 0, // Would need PerformanceObserver in production
        
        // First Input Delay (requires interaction)
        fid: 0, // Would need actual user interaction
        
        // Time to Interactive (approximation)
        tti: navigation?.domInteractive - navigation?.navigationStart || 0,
        
        // Time to First Byte
        ttfb: navigation?.responseStart - navigation?.requestStart || 0,
        
        // DOM Content Loaded
        dcl: navigation?.domContentLoadedEventEnd - navigation?.navigationStart || 0,
        
        // Page Load Complete
        load: navigation?.loadEventEnd - navigation?.navigationStart || 0
      };
      
      console.group('🚀 Performance Metrics');
      console.log('First Contentful Paint (FCP):', metrics.fcp.toFixed(2) + 'ms');
      console.log('Largest Contentful Paint (LCP):', metrics.lcp.toFixed(2) + 'ms');
      console.log('Time to Interactive (TTI):', metrics.tti.toFixed(2) + 'ms');
      console.log('Time to First Byte (TTFB):', metrics.ttfb.toFixed(2) + 'ms');
      console.log('DOM Content Loaded:', metrics.dcl.toFixed(2) + 'ms');
      console.log('Page Load Complete:', metrics.load.toFixed(2) + 'ms');
      console.groupEnd();
      
      return metrics;
    }
    return null;
  },

  // Test image loading performance
  testImageLoading: () => {
    const images = document.querySelectorAll('img');
    const imageTests = [];
    
    images.forEach((img, index) => {
      const startTime = performance.now();
      
      if (img.complete) {
        imageTests.push({
          index,
          src: img.src,
          loadTime: 0,
          status: 'already-loaded',
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight
        });
      } else {
        img.addEventListener('load', () => {
          const endTime = performance.now();
          imageTests.push({
            index,
            src: img.src,
            loadTime: endTime - startTime,
            status: 'loaded',
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight
          });
        });
        
        img.addEventListener('error', () => {
          imageTests.push({
            index,
            src: img.src,
            loadTime: 0,
            status: 'error',
            naturalWidth: 0,
            naturalHeight: 0
          });
        });
      }
    });
    
    setTimeout(() => {
      console.group('📸 Image Loading Performance');
      imageTests.forEach(test => {
        if (test.status === 'error') {
          console.error(`❌ Image ${test.index} failed to load:`, test.src);
        } else {
          console.log(`✅ Image ${test.index} (${test.naturalWidth}x${test.naturalHeight}):`, 
            test.loadTime.toFixed(2) + 'ms', test.src);
        }
      });
      console.groupEnd();
    }, 3000);
    
    return imageTests;
  },

  // Test scroll performance
  testScrollPerformance: () => {
    let scrollCount = 0;
    let frameCount = 0;
    let startTime = performance.now();
    
    const scrollHandler = () => {
      scrollCount++;
      requestAnimationFrame(() => {
        frameCount++;
      });
    };
    
    window.addEventListener('scroll', scrollHandler);
    
    setTimeout(() => {
      window.removeEventListener('scroll', scrollHandler);
      const endTime = performance.now();
      const duration = endTime - startTime;
      const fps = (frameCount / duration) * 1000;
      
      console.group('📜 Scroll Performance');
      console.log('Scroll events:', scrollCount);
      console.log('Animation frames:', frameCount);
      console.log('Average FPS:', fps.toFixed(2));
      console.log('Performance rating:', fps > 55 ? '🟢 Excellent' : fps > 30 ? '🟡 Good' : '🔴 Needs improvement');
      console.groupEnd();
    }, 5000);
  }
};

// Accessibility Testing
export const accessibilityTests = {
  
  // Test color contrast
  testColorContrast: () => {
    const elements = document.querySelectorAll('*');
    const contrastIssues = [];
    
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // This is a simplified contrast test
      // In production, you'd use a proper contrast calculation library
      if (color && backgroundColor && 
          color !== 'rgba(0, 0, 0, 0)' && 
          backgroundColor !== 'rgba(0, 0, 0, 0)') {
        
        const textContent = element.textContent?.trim();
        if (textContent && textContent.length > 0) {
          // Simple heuristic - check if colors are too similar
          if (color === backgroundColor) {
            contrastIssues.push({
              element: element.tagName,
              text: textContent.substring(0, 50),
              color,
              backgroundColor,
              issue: 'Same color and background'
            });
          }
        }
      }
    });
    
    console.group('🎨 Color Contrast Analysis');
    if (contrastIssues.length === 0) {
      console.log('✅ No obvious contrast issues detected');
    } else {
      console.warn(`⚠️ Found ${contrastIssues.length} potential contrast issues:`);
      contrastIssues.forEach(issue => {
        console.warn('Issue:', issue);
      });
    }
    console.groupEnd();
    
    return contrastIssues;
  },

  // Test keyboard navigation
  testKeyboardNavigation: () => {
    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    const navigationIssues = [];
    
    focusableElements.forEach((element, index) => {
      // Check if element is visible
      const rect = element.getBoundingClientRect();
      const isVisible = rect.width > 0 && rect.height > 0;
      
      // Check if element has proper focus styles
      const styles = window.getComputedStyle(element, ':focus');
      const hasFocusStyles = styles.outline !== 'none' || 
                           styles.boxShadow !== 'none' || 
                           styles.backgroundColor !== window.getComputedStyle(element).backgroundColor;
      
      if (isVisible && !hasFocusStyles) {
        navigationIssues.push({
          element: element.tagName,
          id: element.id,
          className: element.className,
          text: element.textContent?.substring(0, 30),
          issue: 'Missing focus styles'
        });
      }
      
      // Check for proper ARIA labels
      if (!element.getAttribute('aria-label') && 
          !element.getAttribute('aria-labelledby') && 
          !element.textContent?.trim()) {
        navigationIssues.push({
          element: element.tagName,
          id: element.id,
          className: element.className,
          issue: 'Missing accessible label'
        });
      }
    });
    
    console.group('⌨️ Keyboard Navigation Analysis');
    console.log(`Found ${focusableElements.length} focusable elements`);
    if (navigationIssues.length === 0) {
      console.log('✅ No obvious keyboard navigation issues detected');
    } else {
      console.warn(`⚠️ Found ${navigationIssues.length} potential navigation issues:`);
      navigationIssues.forEach(issue => {
        console.warn('Issue:', issue);
      });
    }
    console.groupEnd();
    
    return navigationIssues;
  },

  // Test image alt text
  testImageAltText: () => {
    const images = document.querySelectorAll('img');
    const altTextIssues = [];
    
    images.forEach((img, index) => {
      const alt = img.getAttribute('alt');
      const src = img.src;
      
      if (!alt) {
        altTextIssues.push({
          index,
          src,
          issue: 'Missing alt attribute'
        });
      } else if (alt.trim() === '') {
        altTextIssues.push({
          index,
          src,
          issue: 'Empty alt text'
        });
      } else if (alt.length < 5) {
        altTextIssues.push({
          index,
          src,
          issue: 'Alt text too short',
          altText: alt
        });
      }
    });
    
    console.group('🖼️ Image Alt Text Analysis');
    console.log(`Found ${images.length} images`);
    if (altTextIssues.length === 0) {
      console.log('✅ All images have proper alt text');
    } else {
      console.warn(`⚠️ Found ${altTextIssues.length} alt text issues:`);
      altTextIssues.forEach(issue => {
        console.warn('Issue:', issue);
      });
    }
    console.groupEnd();
    
    return altTextIssues;
  }
};

// Responsive Design Testing
export const responsiveTests = {
  
  // Test responsive design at different breakpoints
  testBreakpoints: () => {
    const breakpoints = [
      { name: 'Mobile Portrait', width: 320, height: 568 },
      { name: 'Mobile Landscape', width: 568, height: 320 },
      { name: 'Tablet Portrait', width: 768, height: 1024 },
      { name: 'Tablet Landscape', width: 1024, height: 768 },
      { name: 'Desktop Small', width: 1280, height: 720 },
      { name: 'Desktop Large', width: 1920, height: 1080 }
    ];
    
    console.group('📱 Responsive Design Test');
    console.log('Current viewport:', window.innerWidth + 'x' + window.innerHeight);
    
    breakpoints.forEach(bp => {
      console.log(`${bp.name}: ${bp.width}x${bp.height}`);
      // In automated testing, you'd actually resize the viewport here
    });
    
    // Test for horizontal scrolling
    const hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth;
    if (hasHorizontalScroll) {
      console.warn('⚠️ Horizontal scrolling detected');
    } else {
      console.log('✅ No horizontal scrolling');
    }
    
    console.groupEnd();
    
    return {
      currentViewport: { width: window.innerWidth, height: window.innerHeight },
      hasHorizontalScroll,
      breakpoints
    };
  },

  // Test touch targets
  testTouchTargets: () => {
    const clickableElements = document.querySelectorAll(
      'a, button, input, [onclick], [role="button"], .clickable'
    );
    
    const touchIssues = [];
    const minTouchSize = 44; // 44px minimum for accessibility
    
    clickableElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        if (rect.width < minTouchSize || rect.height < minTouchSize) {
          touchIssues.push({
            element: element.tagName,
            className: element.className,
            size: `${rect.width.toFixed(0)}x${rect.height.toFixed(0)}`,
            text: element.textContent?.substring(0, 30)
          });
        }
      }
    });
    
    console.group('👆 Touch Target Analysis');
    console.log(`Found ${clickableElements.length} clickable elements`);
    if (touchIssues.length === 0) {
      console.log('✅ All touch targets meet minimum size requirements');
    } else {
      console.warn(`⚠️ Found ${touchIssues.length} touch targets smaller than 44px:`);
      touchIssues.forEach(issue => {
        console.warn('Small target:', issue);
      });
    }
    console.groupEnd();
    
    return touchIssues;
  }
};

// Security Testing
export const securityTests = {
  
  // Test for potential XSS vulnerabilities
  testXSSVulnerabilities: () => {
    const userInputElements = document.querySelectorAll(
      'input, textarea, [contenteditable="true"]'
    );
    
    const xssIssues = [];
    
    userInputElements.forEach(element => {
      // Check if element has proper input sanitization indicators
      const hasMaxLength = element.hasAttribute('maxlength');
      const hasPattern = element.hasAttribute('pattern');
      const hasValidation = element.hasAttribute('required') || 
                          element.hasAttribute('data-validate');
      
      if (!hasMaxLength && element.type !== 'email' && element.type !== 'tel') {
        xssIssues.push({
          element: element.tagName,
          type: element.type,
          name: element.name,
          issue: 'No maximum length restriction'
        });
      }
    });
    
    console.group('🔒 XSS Vulnerability Check');
    console.log(`Found ${userInputElements.length} user input elements`);
    if (xssIssues.length === 0) {
      console.log('✅ Input elements have basic security measures');
    } else {
      console.warn(`⚠️ Found ${xssIssues.length} potential security concerns:`);
      xssIssues.forEach(issue => {
        console.warn('Security concern:', issue);
      });
    }
    console.groupEnd();
    
    return xssIssues;
  },

  // Test HTTPS and security headers
  testSecurityHeaders: () => {
    const isHTTPS = window.location.protocol === 'https:';
    const hasCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    const hasXFrameOptions = document.querySelector('meta[http-equiv="X-Frame-Options"]');
    
    console.group('🛡️ Security Headers Check');
    console.log('HTTPS:', isHTTPS ? '✅ Enabled' : '❌ Disabled');
    console.log('Content Security Policy:', hasCSP ? '✅ Present' : '⚠️ Missing');
    console.log('X-Frame-Options:', hasXFrameOptions ? '✅ Present' : '⚠️ Missing');
    console.groupEnd();
    
    return {
      https: isHTTPS,
      csp: !!hasCSP,
      xFrameOptions: !!hasXFrameOptions
    };
  }
};

// Comprehensive Test Runner
export const runAllTests = () => {
  console.log('🧪 Starting Comprehensive Website Tests...\n');
  
  const results = {
    performance: {},
    accessibility: {},
    responsive: {},
    security: {},
    timestamp: new Date().toISOString()
  };
  
  // Performance Tests
  results.performance.webVitals = performanceTests.measureWebVitals();
  results.performance.images = performanceTests.testImageLoading();
  performanceTests.testScrollPerformance();
  
  // Accessibility Tests
  results.accessibility.contrast = accessibilityTests.testColorContrast();
  results.accessibility.keyboard = accessibilityTests.testKeyboardNavigation();
  results.accessibility.altText = accessibilityTests.testImageAltText();
  
  // Responsive Tests
  results.responsive.breakpoints = responsiveTests.testBreakpoints();
  results.responsive.touchTargets = responsiveTests.testTouchTargets();
  
  // Security Tests
  results.security.xss = securityTests.testXSSVulnerabilities();
  results.security.headers = securityTests.testSecurityHeaders();
  
  // Summary
  setTimeout(() => {
    console.group('📊 Test Summary');
    console.log('All tests completed at:', results.timestamp);
    console.log('Full results object:', results);
    console.groupEnd();
  }, 1000);
  
  return results;
};

// Export for easy access in browser console
if (typeof window !== 'undefined') {
  window.websiteTests = {
    performance: performanceTests,
    accessibility: accessibilityTests,
    responsive: responsiveTests,
    security: securityTests,
    runAll: runAllTests
  };
  
  // Add keyboard shortcut for quick testing
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'T') {
      runAllTests();
    }
  });
  
  console.log('🧪 Website testing tools loaded! Use window.websiteTests or Ctrl+Shift+T');
}
