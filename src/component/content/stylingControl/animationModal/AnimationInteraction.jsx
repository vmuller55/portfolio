import './animationInteraction.css'
import Wave from 'react-wavify'
import { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { toggleAnimationModal } from '../../../../redux/animationModalSlice';

const AnimationModal = ({divStyle, editableContent}) => {
    const [wavesIsVisible, setWavesIsVisible] = useState(false);
    const [animationStyle, setAnimationStyle] = useState('');
    const [closeAnimation, setCloseAnimation] = useState(false)

    const dispatch = useDispatch();

    

    const handleDisplayWaves = () => {
        setWavesIsVisible(!wavesIsVisible)
    }

    const handleAnimationClick = selectedAnimation => {
        setAnimationStyle(selectedAnimation);
        setTimeout(() => {
            setAnimationStyle(''); 
          }, 1000);
    };

    const handleCloseModal = () => {
      setCloseAnimation(!closeAnimation)
        setTimeout(() => {
            dispatch(toggleAnimationModal())
            setCloseAnimation(!closeAnimation)
          }, 300);
    }

    return(
        <div className={`coolEffect`} >
          <div className="content">
            <button className="buttonStyle close" onClick={handleCloseModal} >X</button>
            <h2>On peut faire ça par exemple : </h2>
            <div className={`styled-box ${closeAnimation ? ('fadeOutAndSlide') : ('fadeIn')}`} style={divStyle}>
              <p className={`editableContent ${animationStyle}`}>
                  {editableContent}
              </p>
            </div>
            <div className="effectTable">
              <button className='buttonStyle wavesButton' onClick={handleDisplayWaves}><i className="fa-solid fa-water fa-bounce"></i></button>
              <button className='buttonStyle' onClick={() => handleAnimationClick('fade-in')}>
                <i className="fa-solid fa-font fa-fade"></i>
              </button>
              <button className='buttonStyle' onClick={() => handleAnimationClick('slide-in-left')}>
                  <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className='buttonStyle' onClick={() => handleAnimationClick('slide-in-right')}>
                  <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className='buttonStyle' onClick={() => handleAnimationClick('bounce')}>
                  <i className="fa-solid fa-droplet fa-bounce"></i>
              </button>
              <button className='buttonStyle' onClick={() => handleAnimationClick('zoom-in')}>
                  <i className="fa-solid fa-magnifying-glass fa-beat"></i>
              </button>
              <button className='buttonStyle' onClick={() => handleAnimationClick('rotate')}>
                  <i className="fa-solid fa-arrows-rotate fa-spin"></i>
              </button>
              <button className='buttonStyle' onClick={() => handleAnimationClick('wiggle')}>
                  <i className="fa-solid fa-burst fa-shake"></i>
              </button>
              <button className='buttonStyle' onClick={() => handleAnimationClick('flip')}>
                  <i className="fa-solid fa-arrows-up-down fa-flip"></i>
              </button>
              </div>
            {wavesIsVisible && 
              (
                <div className="wavesContainer">
                  <Wave
                    fill='var(--main)'
                    paused={false}
                    options={{
                      height: 40,
                      amplitude: 40,
                      speed : 0.20,
                      points : 3
                    }}
                    className='wave1 animateWave'
                  />
                  <Wave
                    fill='var(--tertiary)'
                    paused={false}
                    options={{
                      height: 10,
                      amplitude: 30,
                      speed : 0.10,
                      points : 5,
                    }}
                    className='wave2'
                  />
                  <Wave
                    fill='var(--secondary)'
                    paused={false}
                    options={{
                      height: 30,
                      amplitude: 10,
                      speed : 0.30,
                      points : 2,
                    }}
                    className='wave3'
                  />
                  <Wave
                    fill='var(--detail)'
                    paused={false}
                    options={{
                      height: 5,
                      amplitude: 10,
                      speed : 0.3,
                      points : 4,
                    }}
                    className='wave4'
                  />
                </div>
              )
            }
            
          </div>   
      </div>
    )
}

export default AnimationModal