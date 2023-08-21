import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './animation.css'; // Import the CSS file for styling

const TextAnimationControl = () => {
  const [animationStyle, setAnimationStyle] = useState('');

  const isDarkMode = useSelector(state => state.darkMode);
  const isMobile = useSelector(state => state.mobileMode)

  const handleAnimationClick = selectedAnimation => {
    setAnimationStyle(selectedAnimation);
    setTimeout(() => {
        setAnimationStyle(''); // Clear the animation after a timeout
      }, 1000);
  };

  return (
    
    <div className={`animationContainer ${isDarkMode ? 'dark-mode' : ''} ${isMobile ? 'mobile-mode' : ''}`}>
        <div className="text-animation-control">
        <p className={`animated-text ${animationStyle}`}>Puis j'ai appris à faire des animations</p>
        <div className="animation-buttons">
            <button onClick={() => handleAnimationClick('fade-in')}>
                <i className="fa-solid fa-font fa-fade"></i>
            </button>
            <button onClick={() => handleAnimationClick('slide-in-left')}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={() => handleAnimationClick('slide-in-right')}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button onClick={() => handleAnimationClick('bounce')}>
                <i className="fa-solid fa-droplet fa-bounce"></i>
            </button>
            <button onClick={() => handleAnimationClick('zoom-in')}>
                <i className="fa-solid fa-magnifying-glass fa-beat"></i>
            </button>
            <button onClick={() => handleAnimationClick('rotate')}>
                <i className="fa-solid fa-arrows-rotate fa-spin"></i>
            </button>
            <button onClick={() => handleAnimationClick('wiggle')}>
                <i className="fa-solid fa-burst fa-shake"></i>
            </button>
            <button onClick={() => handleAnimationClick('flip')}>
                <i className="fa-solid fa-arrows-up-down fa-flip"></i>
            </button>
        </div>
        </div>
    </div>
  );
};

export default TextAnimationControl;
