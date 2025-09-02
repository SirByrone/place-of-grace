import React, { useState } from 'react';
import LoadingScreen from './LoadingScreen';
import './LoadingScreenDemo.css';

const LoadingScreenDemo = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [loadingType, setLoadingType] = useState('normal');

  const handleShowLoading = (type) => {
    setLoadingType(type);
    setShowLoading(true);
  };

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  const loadingScenarios = [
    {
      id: 'normal',
      title: 'Normal Loading',
      description: 'Standard loading experience with smooth animations',
      color: '#3b82f6'
    },
    {
      id: 'fast',
      title: 'Fast Loading',
      description: 'Quick loading for fast connections',
      color: '#10b981'
    },
    {
      id: 'slow',
      title: 'Slow Loading',
      description: 'Extended loading for slower connections',
      color: '#f59e0b'
    }
  ];

  return (
    <div className="loading-demo">
      <div className="demo-header">
        <h1>Loading Screen Demo</h1>
        <p>Experience the sophisticated and smart loading animations</p>
      </div>

      <div className="demo-content">
        <div className="scenario-grid">
          {loadingScenarios.map((scenario) => (
            <div 
              key={scenario.id}
              className="scenario-card"
              style={{ '--accent-color': scenario.color }}
            >
              <div className="scenario-icon">🚀</div>
              <h3>{scenario.title}</h3>
              <p>{scenario.description}</p>
              <button 
                className="demo-button"
                onClick={() => handleShowLoading(scenario.id)}
              >
                Try {scenario.title}
              </button>
            </div>
          ))}
        </div>

        <div className="demo-features">
          <h2>Smart Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h4>Interactive Pause/Resume</h4>
              <p>Click to pause or resume loading</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h4>Staggered Animations</h4>
              <p>Elements appear in sequence for visual flow</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌟</div>
              <h4>Particle Effects</h4>
              <p>Dynamic floating particles in background</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h4>Progress Tracking</h4>
              <p>Real-time progress with visual indicators</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎉</div>
              <h4>Completion Celebration</h4>
              <p>Special animation when loading completes</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h4>Responsive Design</h4>
              <p>Optimized for all device sizes</p>
            </div>
          </div>
        </div>

        <div className="demo-instructions">
          <h2>How to Use</h2>
          <ol>
            <li>Choose a loading scenario above</li>
            <li>Watch the sophisticated animations unfold</li>
            <li>Click the loading card to pause/resume</li>
            <li>Observe the progress indicators and particles</li>
            <li>Experience the completion celebration</li>
          </ol>
        </div>
      </div>

      {showLoading && (
        <LoadingScreen 
          onLoadingComplete={handleLoadingComplete}
          loadingType={loadingType}
        />
      )}
    </div>
  );
};

export default LoadingScreenDemo;
