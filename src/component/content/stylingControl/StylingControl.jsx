import React, { useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleAnimationModal } from '../../../redux/animationModalSlice';
import { updateStyleOption } from '../../../redux/styleOptionsSlice';
import AnimationModal from './animationModal/AnimationInteraction';
import ShowCode from './showCode/ShowCode';
import './stylingControl.css';

const StylingControls = () => {

  const styleOptions = useSelector(state => state.stylingOptions);
  const isDarkMode = useSelector(state => state.darkMode);
  const modalIsVisible = useSelector(state => state.animationModal);

  const [showCode, setShowCode] = useState(false)

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(toggleAnimationModal())
  }

  const handleShowCode = () => {
    setShowCode(!showCode)
  }

  const handleOptionChange = (option, value) => {
    dispatch(updateStyleOption({ option, value }));
  };

  const divStyle = {
    backgroundColor : `hsl(${styleOptions.backgroundColor}, 100%, 50%)`,
    boxShadow: styleOptions.hasBoxShadow ? `${styleOptions.shadowX}px ${styleOptions.shadowY}px ${styleOptions.shadowBlur}px hsl(${styleOptions.shadowColor}, 100%, 50%)` : 'none',
    color: `hsl(${styleOptions.textColor} 100% 50%)`,
    borderRadius: `${styleOptions.borderRadius}px`,
    border: styleOptions.hasBorder ? `${styleOptions.borderWidth}px solid hsl(${styleOptions.borderColor}, 100%, 50%)` : 'none',
    textAlign: styleOptions.textAlignment,
    fontSize: `${styleOptions.fontSize}px`,
  };

  return (
    <div className={`styling-controls ${isDarkMode ? 'dark-mode' : ''}`}>
      {modalIsVisible ? 
        (
          <>
            <AnimationModal divStyle={divStyle} editableContent={styleOptions.editableContent} />
          </> 
        )
      :
        (
          <button onClick={handleOpenModal} className='buttonStyle coolEffectButton bounce offMobile'>
            <i className="fa-solid fa-fire fa-beat"></i>
          </button>
        )
      }
      <div className={`styled-box ${modalIsVisible ? "fadeOutAndSlide" : "fadeIn"}`} style={divStyle}>
        <p className='editableContent' contentEditable={true} suppressContentEditableWarning={true} onBlur={event => handleOptionChange('editableContent', event.target.textContent)}>
          <i className="fa-solid fa-pen fa-beat-fade" contentEditable={false}></i>
          {styleOptions.editableContent}
        </p>
      </div>
      <div className="input-section">
        <div className="selectorInput">
          <div className="splitGrid offMobile">
            <label className='offMobile'>Taille de la police : </label>
            <input type="range" min="10" max="50" value={styleOptions.fontSize} onChange={event => handleOptionChange('fontSize', event.target.value)} className='range offMobile'/>
          </div>
          <div className="splitGrid">
            <label>Couleur du fond : </label>
            <input type="range" min={'0'} max={'359'} value={styleOptions.backgroundColor} onChange={event => handleOptionChange('backgroundColor', event.target.value)} className="range color"/>
          </div>
          <div className="splitGrid">
            <label>Couleur du texte : </label>
            <input type="range" min={'0'} max={'359'} value={styleOptions.textColor} onChange={event => handleOptionChange('textColor', event.target.value)} className="range color"/>
          </div>
        </div>
        <div className="toggleAction">
          <div className="splitGrid">
            <label>Ajouter une bordure ? </label> 
            <input className='toggleInput' type="checkbox" checked={styleOptions.hasBorder} onChange={event => handleOptionChange('hasBorder', event.target.checked)}/>
          </div>
          {styleOptions.hasBorder && (
            <div className="hideGrid">
              <div className="width splitGrid">
                <label>Taille de la bordure : </label> 
                <input className='range' type="range" min="1" max="20" value={styleOptions.borderWidth} onChange={event => handleOptionChange('borderWidth', event.target.value)}/>
              </div>
              <div className="colorBorder splitGrid">
                <label>Couleur de la bordure : </label> 
                <input type="range" min={0} max={359} value={styleOptions.borderColor} onChange={event => handleOptionChange('borderColor', event.target.value)} className="range color"/>
              </div>
            </div>
          )}
          <div className="splitGrid">
            <label>Ajouter une ombre ? </label>
            <input type="checkbox" checked={styleOptions.hasBoxShadow} onChange={event => handleOptionChange('hasBoxShadow', event.target.checked)} className='toggleInput'/>
          </div>
          {styleOptions.hasBoxShadow && (
            <div className="hideGrid shadow">
              <div className="splitGrid">
                <label>Horizontal : </label>
                <input className='range' type="range" min="-30" max="30" value={styleOptions.shadowX} onChange={event => handleOptionChange('shadowX', event.target.value)}/>
              </div>
              <div className="splitGrid">
                <label>Vertical : </label>
                <input className='range' type="range" min="-30" max="30" value={styleOptions.shadowY} onChange={event => handleOptionChange('shadowY', event.target.value)}/>
              </div>
              <div className="splitGrid">
                <label>Flou : </label>
                <input className='range' type="range" min="0" max="30" value={styleOptions.shadowBlur} onChange={event => handleOptionChange('shadowBlur', event.target.value)}/>
              </div>
              <div className="splitGrid">
                <label>Couleur de l'ombre : </label>
                <input type="range" min={0} max={359} value={styleOptions.shadowColor} onChange={event => handleOptionChange('shadowColor', event.target.value)} className="range color"/>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="borderRadius splitGrid"> 
        <label>Angles des bordures : </label>
        <input className='range' type="range" min="0" max="50" value={styleOptions.borderRadius} onChange={event => handleOptionChange('borderRadius', event.target.value)}/>
      </div>
      <div className="cssCode">
        <button onClick={handleShowCode} className='buttonStyle showCodeButton'>Voir le code css ?</button>
        {showCode && !modalIsVisible && (
          <ShowCode props={styleOptions}/>
        )}
      </div>
    </div>
  );
};

export default StylingControls;
