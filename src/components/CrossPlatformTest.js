import React, { useState, useEffect } from 'react';

const CrossPlatformTest = () => {
  const [deviceInfo, setDeviceInfo] = useState({});
  const [viewportInfo, setViewportInfo] = useState({});
  const [featureSupport, setFeatureSupport] = useState({});

  useEffect(() => {
    // Get device information
    const getDeviceInfo = () => {
      const userAgent = navigator.userAgent;
      const platform = navigator.platform;
      const language = navigator.language;
      const cookieEnabled = navigator.cookieEnabled;
      const onLine = navigator.onLine;
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

      setDeviceInfo({
        userAgent,
        platform,
        language,
        cookieEnabled,
        onLine,
        connectionType: connection ? connection.effectiveType : 'unknown',
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        colorDepth: window.screen.colorDepth,
        pixelRatio: window.devicePixelRatio || 1
      });
    };

    // Get viewport information
    const getViewportInfo = () => {
      setViewportInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        scrollX: window.scrollX,
        scrollY: window.scrollY
      });
    };

    // Check feature support
    const checkFeatureSupport = () => {
      setFeatureSupport({
        cssGrid: CSS.supports('display', 'grid'),
        cssFlexbox: CSS.supports('display', 'flex'),
        cssCustomProperties: CSS.supports('--custom-property', 'value'),
        cssClamp: CSS.supports('width', 'clamp(100px, 50%, 200px)'),
        touchEvents: 'ontouchstart' in window,
        serviceWorker: 'serviceWorker' in navigator,
        webGL: !!window.WebGLRenderingContext,
        webP: (() => {
          const canvas = document.createElement('canvas');
          return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        })(),
        webM: !!document.createElement('video').canPlayType('video/webm'),
        webp: (() => {
          const canvas = document.createElement('canvas');
          return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        })()
      });
    };

    getDeviceInfo();
    getViewportInfo();
    checkFeatureSupport();

    // Update viewport info on resize
    const handleResize = () => {
      getViewportInfo();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const getResponsiveClass = () => {
    const width = viewportInfo.width;
    if (width < 576) return 'xs';
    if (width < 768) return 'sm';
    if (width < 992) return 'md';
    if (width < 1200) return 'lg';
    if (width < 1400) return 'xl';
    return 'xxl';
  };

  const getOrientation = () => {
    return viewportInfo.width > viewportInfo.height ? 'landscape' : 'portrait';
  };

  return (
    <div className="cross-platform-test" style={{
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      margin: '2rem 0',
      fontFamily: 'var(--font-primary)'
    }}>
      <h2 style={{ color: '#001f4c', marginBottom: '1.5rem' }}>
        🌍 Cross-Platform Compatibility Test
      </h2>
      
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        
        {/* Device Information */}
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#001f4c', marginBottom: '1rem' }}>📱 Device Information</h3>
          <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            <p><strong>Platform:</strong> {deviceInfo.platform}</p>
            <p><strong>Language:</strong> {deviceInfo.language}</p>
            <p><strong>Screen:</strong> {deviceInfo.screenWidth} × {deviceInfo.screenHeight}</p>
            <p><strong>Pixel Ratio:</strong> {deviceInfo.pixelRatio}x</p>
            <p><strong>Color Depth:</strong> {deviceInfo.colorDepth} bit</p>
            <p><strong>Online:</strong> {deviceInfo.onLine ? '✅ Yes' : '❌ No'}</p>
            <p><strong>Connection:</strong> {deviceInfo.connectionType}</p>
          </div>
        </div>

        {/* Viewport Information */}
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#001f4c', marginBottom: '1rem' }}>📐 Viewport Information</h3>
          <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            <p><strong>Size:</strong> {viewportInfo.width} × {viewportInfo.height}</p>
            <p><strong>Breakpoint:</strong> <span style={{ 
              backgroundColor: '#001f4c', 
              color: 'white', 
              padding: '0.2rem 0.5rem', 
              borderRadius: '4px',
              fontSize: '0.8rem'
            }}>{getResponsiveClass().toUpperCase()}</span></p>
            <p><strong>Orientation:</strong> {getOrientation()}</p>
            <p><strong>Scroll Position:</strong> X: {viewportInfo.scrollX}, Y: {viewportInfo.scrollY}</p>
            <p><strong>CSS Grid:</strong> {featureSupport.cssGrid ? '✅ Supported' : '❌ Not Supported'}</p>
            <p><strong>CSS Flexbox:</strong> {featureSupport.cssFlexbox ? '✅ Supported' : '❌ Not Supported'}</p>
            <p><strong>Touch Events:</strong> {featureSupport.touchEvents ? '✅ Supported' : '❌ Not Supported'}</p>
          </div>
        </div>

        {/* Feature Support */}
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#001f4c', marginBottom: '1rem' }}>🔧 Feature Support</h3>
          <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            <p><strong>CSS Custom Properties:</strong> {featureSupport.cssCustomProperties ? '✅ Supported' : '❌ Not Supported'}</p>
            <p><strong>CSS Clamp():</strong> {featureSupport.cssClamp ? '✅ Supported' : '❌ Not Supported'}</p>
            <p><strong>Service Worker:</strong> {featureSupport.serviceWorker ? '✅ Supported' : '❌ Not Supported'}</p>
            <p><strong>WebGL:</strong> {featureSupport.webGL ? '✅ Supported' : '❌ Not Supported'}</p>
            <p><strong>WebP Images:</strong> {featureSupport.webP ? '✅ Supported' : '❌ Not Supported'}</p>
            <p><strong>WebM Video:</strong> {featureSupport.webM ? '✅ Supported' : '❌ Not Supported'}</p>
          </div>
        </div>

        {/* Responsive Test */}
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#001f4c', marginBottom: '1rem' }}>🎯 Responsive Test</h3>
          <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            <div style={{ 
              backgroundColor: '#001f4c', 
              color: 'white', 
              padding: '1rem', 
              borderRadius: '8px',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 'clamp(1rem, 4vw, 2rem)', fontWeight: 'bold' }}>
                Responsive Text
              </div>
              <div style={{ fontSize: 'clamp(0.8rem, 2vw, 1.2rem)', marginTop: '0.5rem' }}>
                This text scales with viewport
              </div>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gap: '0.5rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))'
            }}>
              <div style={{ 
                backgroundColor: '#FFD700', 
                padding: '0.5rem', 
                borderRadius: '4px',
                textAlign: 'center',
                fontSize: '0.8rem'
              }}>
                Grid Item 1
              </div>
              <div style={{ 
                backgroundColor: '#FFD700', 
                padding: '0.5rem', 
                borderRadius: '4px',
                textAlign: 'center',
                fontSize: '0.8rem'
              }}>
                Grid Item 2
              </div>
              <div style={{ 
                backgroundColor: '#FFD700', 
                padding: '0.5rem', 
                borderRadius: '4px',
                textAlign: 'center',
                fontSize: '0.8rem'
              }}>
                Grid Item 3
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* User Agent */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginTop: '2rem'
      }}>
        <h3 style={{ color: '#001f4c', marginBottom: '1rem' }}>🌐 User Agent</h3>
        <div style={{ 
          fontSize: '0.8rem', 
          backgroundColor: '#f8f9fa', 
          padding: '1rem', 
          borderRadius: '4px',
          wordBreak: 'break-all',
          fontFamily: 'var(--font-mono)'
        }}>
          {deviceInfo.userAgent}
        </div>
      </div>

      {/* Instructions */}
      <div style={{ 
        backgroundColor: '#e3f2fd', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        marginTop: '2rem',
        border: '1px solid #2196f3'
      }}>
        <h4 style={{ color: '#1976d2', marginBottom: '1rem' }}>🧪 Testing Instructions</h4>
        <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0, paddingLeft: '1.5rem' }}>
          <li>Resize your browser window to test responsive breakpoints</li>
          <li>Rotate your device to test orientation changes</li>
          <li>Test on different devices and browsers</li>
          <li>Check accessibility with screen readers</li>
          <li>Test with JavaScript disabled</li>
          <li>Test on slow network connections</li>
        </ul>
      </div>

    </div>
  );
};

export default CrossPlatformTest;
