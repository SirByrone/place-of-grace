import React, { useState, useEffect, useCallback } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [whiteScreenPhase, setWhiteScreenPhase] = useState(0);

  const loadingSteps = [
    { text: "Initializing...", duration: 800, icon: "🚀", targetProgress: 20 },
    { text: "Loading resources...", duration: 1200, icon: "📚", targetProgress: 45 },
    { text: "Preparing content...", duration: 1000, icon: "🎨", targetProgress: 70 },
    { text: "Almost ready...", duration: 600, icon: "✨", targetProgress: 90 },
    { text: "Welcome!", duration: 400, icon: "🎉", targetProgress: 100 }
  ];

  // Systematic progress calculation with white screen transitions
  const calculateProgress = useCallback(() => {
    return new Promise((resolve) => {
      let currentProgress = 0;
      const totalSteps = loadingSteps.length;
      
      const progressInterval = setInterval(() => {
        if (isPaused) return;
        
        if (currentProgress < 100) {
          // Systematic progress with smooth increments
          let increment;
          if (currentProgress < 20) {
            increment = 1.5; // Slow, steady start
          } else if (currentProgress < 45) {
            increment = 2.2; // Steady acceleration
          } else if (currentProgress < 70) {
            increment = 2.8; // Peak speed
          } else if (currentProgress < 90) {
            increment = 2.0; // Gradual slowdown
          } else {
            increment = 1.0; // Final stretch
          }
          
          currentProgress += increment;
          if (currentProgress > 100) currentProgress = 100;
          
          setLoadingProgress(currentProgress);
          
          // Update current step based on systematic progress
          const stepIndex = Math.floor((currentProgress / 100) * totalSteps);
          if (stepIndex < totalSteps && stepIndex !== currentStep) {
            setCurrentStep(stepIndex);
          }
          
          // White screen transition phases
          if (currentProgress >= 25 && currentProgress < 30) {
            setWhiteScreenPhase(1); // First white screen
          } else if (currentProgress >= 50 && currentProgress < 55) {
            setWhiteScreenPhase(2); // Second white screen
          } else if (currentProgress >= 75 && currentProgress < 80) {
            setWhiteScreenPhase(3); // Third white screen
          } else if (currentProgress >= 95 && currentProgress < 100) {
            setWhiteScreenPhase(4); // Final white screen
          } else {
            setWhiteScreenPhase(0); // Blue sections
          }
          
          if (currentProgress >= 100) {
            clearInterval(progressInterval);
            resolve();
          }
        }
      }, 100); // Faster updates for smoother progress

      return () => clearInterval(progressInterval);
    });
  }, [isPaused, currentStep]);

  useEffect(() => {
    calculateProgress().then(() => {
      // Show completion animation
      setShowCompletion(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 800);
      }, 2000);
    });
  }, [calculateProgress, onLoadingComplete]);

  // Pause/resume on click for user interaction
  const handleCardClick = () => {
    if (loadingProgress < 100) {
      setIsPaused(!isPaused);
    }
  };

  // Generate random particle positions
  const generateParticleStyle = (index) => {
    const delay = index * 0.1;
    const left = Math.random() * 100;
    const size = Math.random() * 3 + 2;
    return {
      '--delay': `${delay}s`,
      '--left': `${left}%`,
      '--size': `${size}px`
    };
  };

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${showCompletion ? 'completing' : ''} phase-${whiteScreenPhase}`}>
      {/* White Screen Transitions */}
      <div className="white-screen-transitions">
        <div className={`white-screen white-screen-1 ${whiteScreenPhase === 1 ? 'active' : ''}`}></div>
        <div className={`white-screen white-screen-2 ${whiteScreenPhase === 2 ? 'active' : ''}`}></div>
        <div className={`white-screen white-screen-3 ${whiteScreenPhase === 3 ? 'active' : ''}`}></div>
        <div className={`white-screen white-screen-4 ${whiteScreenPhase === 4 ? 'active' : ''}`}></div>
      </div>

      {/* Animated background with enhanced effects */}
      <div className="loading-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="light-source"></div>
        <div className="background-pattern"></div>
      </div>

      {/* Main loading card with enhanced interactivity */}
      <div 
        className={`loading-card ${isPaused ? 'paused' : ''}`}
        onClick={handleCardClick}
      >
        {/* Logo with enhanced animation */}
        <div className="logo-container">
          <div className="logo-image">
            <div className="logo-hexagon">
              <div className="logo-figures">
                <div className="figure figure-1"></div>
                <div className="figure figure-2"></div>
                <div className="figure figure-3"></div>
              </div>
              <div className="logo-hands">
                <div className="hand hand-left"></div>
                <div className="hand hand-right"></div>
                <div className="heart"></div>
              </div>
            </div>
          </div>
          <div className="logo-text">
            <div className="logo-title">Place of Grace Children's Home</div>
            <div className="logo-slogan">We are the future!</div>
          </div>
        </div>

        {/* Main title with enhanced staggered animation */}
        <h1 className="main-title">
          <span className="title-word title-word-1">Place</span>
          <span className="title-word title-word-2">of</span>
          <span className="title-word title-word-3">Grace</span>
          <span className="title-word title-word-4">Community</span>
          <span className="title-word title-word-5">Centre</span>
        </h1>

        {/* Slogan with enhanced animation */}
        <p className="slogan">Empowering Lives, Building Communities</p>

        {/* Enhanced loading bar with systematic progress */}
        <div className="loading-bar-container">
          <div className="loading-bar">
            <div 
              className="loading-bar-fill"
              style={{ width: `${loadingProgress}%` }}
            ></div>
            <div className="loading-bar-glow"></div>
            <div className="loading-bar-particles">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="bar-particle"
                  style={{ '--particle-delay': `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="loading-status">
            <span className="loading-text">
              {loadingSteps[currentStep]?.icon} {loadingSteps[currentStep]?.text || "Loading..."}
            </span>
            <span className="loading-percentage">{Math.round(loadingProgress)}%</span>
          </div>
        </div>

        {/* Enhanced pagination dots with systematic progress indicators */}
        <div className="pagination-dots">
          {loadingSteps.map((step, index) => (
            <div 
              key={index} 
              className={`dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
              title={step.text}
            >
              {index < currentStep && <span className="checkmark">✓</span>}
            </div>
          ))}
        </div>

        {/* Interactive hint */}
        {loadingProgress < 100 && (
          <div className="interaction-hint">
            <span className="hint-text">
              {isPaused ? 'Click to resume' : 'Click to pause'}
            </span>
          </div>
        )}

        {/* Completion celebration */}
        {showCompletion && (
          <div className="completion-celebration">
            <div className="celebration-text">🎉 Welcome to Place of Grace! 🎉</div>
            <div className="celebration-sparkles">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="sparkle"
                  style={{ '--sparkle-delay': `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced particle effects */}
      <div className="particles">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={generateParticleStyle(i)}
          ></div>
        ))}
      </div>

      {/* Loading progress indicator in corner */}
      <div className="corner-progress">
        <div className="progress-ring">
          <svg className="progress-ring-svg" width="60" height="60">
            <circle
              className="progress-ring-circle-bg"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="4"
              fill="transparent"
              r="26"
              cx="30"
              cy="30"
            />
            <circle
              className="progress-ring-circle"
              stroke="#fbbf24"
              strokeWidth="4"
              fill="transparent"
              r="26"
              cx="30"
              cy="30"
              style={{
                strokeDasharray: `${2 * Math.PI * 26}`,
                strokeDashoffset: `${2 * Math.PI * 26 * (1 - loadingProgress / 100)}`
              }}
            />
          </svg>
          <div className="progress-text">{Math.round(loadingProgress)}%</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
