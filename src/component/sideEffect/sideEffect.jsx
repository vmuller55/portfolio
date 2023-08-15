import React, { useEffect, useState } from 'react';
import './sideEffect.css'; // Import the CSS file for styling

const AppearingComponent = ({direction, breakpoint, switchSide = false, content}) => {
  const [isVisible, setIsVisible] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
    
      setIsVisible(scrollPosition >= breakpoint);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [breakpoint]);

  const transformStyle = switchSide
    ? isVisible
      ? direction === 'left'
        ? 'translateX(100px)'
        : 'translateX(-100px)'
      : 'translateX(0)'
    : isVisible
    ? 'translateX(0)'
    : direction === 'left'
    ? 'translateX(-100px)'
    : 'translateX(100px)';

  return (
    <div className={`appearing-component ${isVisible ? 'visible' : ''} ${direction}`} style={{ transform: transformStyle }}>
      {/* Your content goes here */}
      {content}
    </div>
  );
};

export default AppearingComponent;
