import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './stylingControl.css';

const StylingControls = () => {
  const [styleOptions, setStyleOptions] = useState({
    backgroundColor: '',
    textColor: '',
    borderRadius: 0,
    hasBorder: false,
    borderColor: '',
    borderWidth: 1,
    textAlignment: 'center',
    fontSize: 16,
    hasBoxShadow: false,
    shadowX: 1,
    shadowY: 1,
    shadowBlur: 10,
    shadowColor: '',
  });

  const isDarkMode = useSelector(state => state.darkMode);

  const handleOptionChange = (option, value) => {
    setStyleOptions(prevOptions => ({ ...prevOptions, [option]: value }));
  };

  const handleReset = () => {
    setStyleOptions({
      backgroundColor: '',
      textColor: '',
      borderRadius: 0,
      hasBorder: false,
      borderColor: '',
      borderWidth: 1,
      textAlignment: 'center',
      fontSize: 16,
      hasBoxShadow: false,
      shadowX: 1,
      shadowY: 1,
      shadowBlur: 10,
      shadowColor: '',
    });
  };

  const {
    backgroundColor,
    textColor,
    borderRadius,
    hasBorder,
    borderColor,
    borderWidth,
    textAlignment,
    fontSize,
    hasBoxShadow,
    shadowX,
    shadowY,
    shadowBlur,
    shadowColor,
  } = styleOptions;

  const divStyle = {
    backgroundColor,
    boxShadow: hasBoxShadow ? `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor}` : 'none',
    color: textColor,
    borderRadius: `${borderRadius}px`,
    border: hasBorder ? `${borderWidth}px solid ${borderColor}` : 'none',
    textAlign: textAlignment,
    fontSize: `${fontSize}px`,
  };

  return (
    <div className={`styling-controls ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="styled-box" style={divStyle}>
        <p>J'ai commencé par apprendre le HTML et le CSS</p>
      </div>
      <div className="fontSize">
        <div>
          <label>Font Size:</label> <br />
          <input
            type="range"
            min="10"
            max="50"
            value={fontSize}
            onChange={event => handleOptionChange('fontSize', event.target.value)}
          />
          <span>{fontSize}px</span>
        </div>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="input-section">
        <div className="selectorInput">
          <label>Background Color:</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={event => handleOptionChange('backgroundColor', event.target.value)}
            className="selector"
          />
          <label>Text Color:</label>
          <input
            type="color"
            value={textColor}
            onChange={event => handleOptionChange('textColor', event.target.value)}
            className="selector"
          />
        </div>
        <div className="textInput">
          <label>Box Shadow:</label>
          <input
            type="checkbox"
            checked={hasBoxShadow}
            onChange={event => handleOptionChange('hasBoxShadow', event.target.checked)}
          />
          {hasBoxShadow && (
            <div className="shadowSettings">
              <div className="shadowSettings">
                <label>Offset-x</label><br />
                <input
                  type="range"
                  min="-30"
                  max="30"
                  value={shadowX}
                  onChange={event => handleOptionChange('shadowX', event.target.value)}
                /><br />
                <label>Offset-y</label><br />
                <input
                  type="range"
                  min="-30"
                  max="30"
                  value={shadowY}
                  onChange={event => handleOptionChange('shadowY', event.target.value)}
                /><br />
                <label>Blur</label><br />
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={shadowBlur}
                  onChange={event => handleOptionChange('shadowBlur', event.target.value)}
                /><br />
                <label>Shadow Color:</label><br />
                <input
                  type="color"
                  value={shadowColor}
                  onChange={event => handleOptionChange('shadowColor', event.target.value)}
                  className="selector"
                /><br />
              </div>
            </div>
          )}
          <label>Border Radius :</label>
          <input
            type="range"
            min="0"
            max="50"
            value={borderRadius}
            onChange={event => handleOptionChange('borderRadius', event.target.value)}
          />
          <span>{borderRadius}px</span>
        </div>
        <div className="toggleAction">
          <label>Set Border:</label> <br />
          <input
            type="checkbox"
            checked={hasBorder}
            onChange={event => handleOptionChange('hasBorder', event.target.checked)}
          />
          {hasBorder && (
            <div className="setBorderWidth">
              <input
                type="range"
                min="1"
                max="20"
                value={borderWidth}
                onChange={event => handleOptionChange('borderWidth', event.target.value)}
              />
              <span>{borderWidth}px</span> <br />
              <label>Border Color :</label> <br />
              <input
                type="color"
                value={borderColor}
                onChange={event => handleOptionChange('borderColor', event.target.value)}
                className="selector"
              />
            </div>
          )}
          <div className="textDirection">
            <label>Text Alignment:</label>
            <label>
              <input
                type="radio"
                value="left"
                checked={textAlignment === 'left'}
                onChange={() => handleOptionChange('textAlignment', 'left')}
              />
              Left
            </label>
            <label>
              <input
                type="radio"
                value="center"
                checked={textAlignment === 'center'}
                onChange={() => handleOptionChange('textAlignment', 'center')}
              />
              Center
            </label>
            <label>
              <input
                type="radio"
                value="right"
                checked={textAlignment === 'right'}
                onChange={() => handleOptionChange('textAlignment', 'right')}
              />
                Right
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylingControls;
