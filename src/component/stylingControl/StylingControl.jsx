import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import './stylingControl.css';

const StylingControls = () => {
  const [styleOptions, setStyleOptions] = useState({
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    borderRadius: 0,
    hasBorder: false,
    borderColor: 0,
    borderWidth: 1,
    fontSize: 16,
    hasBoxShadow: false,
    shadowX: 1,
    shadowY: 1,
    shadowBlur: 10,
    shadowColor: 0,
  });

  const isDarkMode = useSelector(state => state.darkMode);
  const isMobile = useSelector(state => state.mobileMode);
  const [showCode, setShowCode] = useState(false)
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);
  const [coolEffectIsVisible, setCoolEffectIsVisible] = useState(false)

  const handleCoolEffect = () => {
    setCoolEffectIsVisible(!coolEffectIsVisible)
  }

  const handleShowCode = () => {
    setShowCode(!showCode)
  }

  const handleOptionChange = (option, value) => {
    setStyleOptions(prevOptions => ({ ...prevOptions, [option]: value }));
  };

  const cssCodeRef = useRef(null);

  const handleCopyCode = () => {
    const codeText = cssCodeRef.current.textContent;
    const textArea = document.createElement('textarea');
    textArea.value = codeText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setCopyMessageVisible(true);
    setTimeout(() => {
      setCopyMessageVisible(false);
    }, 1500);
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
    backgroundColor : `hsl(${backgroundColor}, 100%, 50%)`,
    boxShadow: hasBoxShadow ? `${shadowX}px ${shadowY}px ${shadowBlur}px hsl(${shadowColor}, 100%, 50%)` : 'none',
    color: `hsl(${textColor} 100% 50%)`,
    borderRadius: `${borderRadius}px`,
    border: hasBorder ? `${borderWidth}px solid hsl(${borderColor}, 100%, 50%)` : 'none',
    textAlign: textAlignment,
    fontSize: `${fontSize}px`,
  };

  return (
    <div className={`styling-controls ${isDarkMode ? 'dark-mode' : ''} ${isMobile ? 'mobile-mode' : ''}`}>
      <button onClick={handleCoolEffect}> Wanna see something kids? </button>
      {coolEffectIsVisible && (
        <div className="coolEffect">
        <div className="content">
            <p>On peut faire ça</p>
        </div>
      <button className="close" onClick={handleCoolEffect} >Close</button>
      </div>
      )}
      <div className="styled-box" style={divStyle}>
        <p className='editableContent' contentEditable={true} suppressContentEditableWarning={true}>
          <i class="fa-solid fa-pen fa-beat-fade"></i>
          J'ai commencé par apprendre le HTML et le CSS
        </p>
      </div>
      {isMobile 
        ?
        (
          <>
            <div className="selectorInput">
              <>
                <label>Couleur du fond : </label>
                <input
                  type="range"
                  min={'0'}
                  max={'357'}
                  value={backgroundColor}
                  onChange={event => handleOptionChange('backgroundColor', event.target.value)}
                  className="selector"
                />
              </>
              <>
                <label>Couleur du texte : </label>
                <input
                  type="range"
                  min={'0'}
                  max={'357'}
                  value={textColor}
                  onChange={event => handleOptionChange('textColor', event.target.value)}
                  className="selector"
                />
              </>
              </div>
              <label>Angles des bordures : </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={borderRadius}
                  onChange={event => handleOptionChange('borderRadius', event.target.value)}
                />
                <span>{borderRadius}px</span>
          </>
        )
        :
        (
          <>
            <div className="input-section">
                <div className="selectorInput">
                  <div className="splitGrid">
                    <label>Taille de la police : </label>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      value={fontSize}
                      onChange={event => handleOptionChange('fontSize', event.target.value)}
                      className='range'
                    />
                </div>
                <div className="splitGrid">
                  <label>Couleur du fond : </label>
                  <input
                    type="range"
                    min={'0'}
                    max={'359'}
                    value={backgroundColor}
                    onChange={event => handleOptionChange('backgroundColor', event.target.value)}
                    className="range color"
                  />
                </div>
                <div className="splitGrid">
                  <label>Couleur du texte : </label>
                  <input
                    type="range"
                    min={'0'}
                    max={'359'}
                    value={textColor}
                    onChange={event => handleOptionChange('textColor', event.target.value)}
                    className="range color"
                  />
                </div>
              </div>
              <div className="toggleAction">
                <div className="splitGrid">
                  <label>Ajouter une bordure ? </label> 
                  <input
                    className='toggleInput'
                    type="checkbox"
                    checked={hasBorder}
                    onChange={event => handleOptionChange('hasBorder', event.target.checked)}
                  />
                </div>
                  {hasBorder && (
                    <div className="hideGrid">
                      <div className="width splitGrid">
                        <label>Taille de la bordure : </label> 
                        <input
                          className='range'
                          type="range"
                          min="1"
                          max="20"
                          value={borderWidth}
                          onChange={event => handleOptionChange('borderWidth', event.target.value)}
                        />
                      </div>
                      <div className="colorBorder splitGrid">
                        <label>Couleur de la bordure : </label> 
                        <input
                          type="range"
                          min={0}
                          max={359}
                          value={borderColor}
                          onChange={event => handleOptionChange('borderColor', event.target.value)}
                          className="range color"
                        />
                      </div>
                    </div>
                  )}
                <div className="splitGrid">
                  <label>Ajouter une ombre ? </label>
                  <input
                    type="checkbox"
                    checked={hasBoxShadow}
                    onChange={event => handleOptionChange('hasBoxShadow', event.target.checked)}
                    className='toggleInput'
                  />
                </div>
                  {hasBoxShadow && (
                    <div className="hideGrid shadow">
                      <div className="splitGrid">
                        <label>Horizontal : </label>
                        <input
                          className='range' 
                          type="range"
                          min="-30"
                          max="30"
                          value={shadowX}
                          onChange={event => handleOptionChange('shadowX', event.target.value)}
                        />
                      </div>
                      <div className="splitGrid">
                        <label>Vertical : </label>
                        <input
                          className='range'
                          type="range"
                          min="-30"
                          max="30"
                          value={shadowY}
                          onChange={event => handleOptionChange('shadowY', event.target.value)}
                        />
                      </div>
                      <div className="splitGrid">
                        <label>Flou : </label>
                        <input
                          className='range'
                          type="range"
                          min="0"
                          max="30"
                          value={shadowBlur}
                          onChange={event => handleOptionChange('shadowBlur', event.target.value)}
                        />
                      </div>
                      <div className="splitGrid">
                        <label>Couleur de l'ombre : </label>
                        <input
                          type="range"
                          min={0}
                          max={359}
                          value={shadowColor}
                          onChange={event => handleOptionChange('shadowColor', event.target.value)}
                          className="range color"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="borderRadius splitGrid"> 
                <label>Angles des bordures : </label>
                <input
                  className='range'
                  type="range"
                  min="0"
                  max="50"
                  value={borderRadius}
                  onChange={event => handleOptionChange('borderRadius', event.target.value)}
                />
              </div>
            
            <div className="cssCode">
              <button onClick={handleShowCode} className='showCodeButton'>Voir le code css ?</button>
                {showCode && (
                  <>
                    <div className="codeText" ref={cssCodeRef}>
                      <p> background-color : hsl({backgroundColor}, 100%, 50%);</p>
                      {hasBoxShadow ? 
                        (<p>boxShadow: {shadowX}px {shadowY}px {shadowBlur}px hsl({shadowColor}, 100%, 50%);</p>)
                        :
                        ('')
                      }
                      <p>color: hsl({textColor}, 100%, 50%);</p>
                      <p>border-radius: {borderRadius}px;</p>
                      {hasBorder ?
                        (<p>border : {borderWidth}px solid hsl({borderColor}, 100%, 50%);</p>)
                        :
                        ('')  
                      }
                      <p>font-size: {fontSize}px;</p>
                  </div>
                  <button className='copyButton' onClick={handleCopyCode}><i class="fa-solid fa-copy fa-flip"></i></button>
                  {copyMessageVisible && <div className="messageFlotant">Copié</div>}
                </>
                )}
            </div>
          </>
        )
      }
    </div>
  );
};

export default StylingControls;
