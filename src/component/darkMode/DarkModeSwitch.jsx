import React from 'react';
import './darkModeSwitch.css';
import SlidingToggle from './SlidingToggle'; // Adjust the path accordingly


const DarkModeSwitch = () => {

  return (
    <div className="dark-mode-switch">
        <label>
          <SlidingToggle/>
        </label>
    </div>
  );
};

export default DarkModeSwitch;
