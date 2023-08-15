import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileMode } from '../../redux/mobileModeSlice';
import './mobileSlider.css'; 

const MobileSlider = () => {
  
  const isMobile = useSelector(state => state.mobileMode);
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleMobileMode());
    document.body.classList.toggle('mobile-mode');
  };

  return (
    <div className={`sliding-toggle-display ${isMobile ? 'mobile' : ''}`} onClick={handleToggleClick}>
      <div className={`slider ${isMobile ? 'mobile' : ''}`}>
        {isMobile ? (
          <svg xmlns="http://www.w3.org/2000/svg"width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"/></svg>
        ) : 
        (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16"> <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/> </svg>
        )}
      </div>
    </div>
  );
};

export default MobileSlider;
