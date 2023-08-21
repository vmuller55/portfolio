import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import './slideShow.css'


const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [changeView, setChangeView] = useState(0)
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0)
  const imageSliderRef = useRef(null)
  const isDarkMode = useSelector(state => state.darkMode);
  const isMobile = useSelector(state => state.mobileMode);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchThreshold = 50; // Adjust this value to control the sensitivity of swipe

    if (touchEndX - touchStartX > touchThreshold) {
      handlePrev();
    } else if (touchStartX - touchEndX > touchThreshold) {
      handleNext();
    }
  };

  const handleChangeView = () => {
    changeView < 2 ? 
    setChangeView(changeView +1)
    :
    setChangeView(0)
    imageSliderRef.current.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      window.scrollBy(0, 1);
    }, 10);
    
  }

  return (
    <div
      ref={imageSliderRef}
      className={`image-slider ${isDarkMode? 'dark-mode' : ''} ${isMobile? 'mobile-mode' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
        <p>Rien de tout ça serait possible sans JavaScript bien entendu ! </p>
        {changeView === 0? 
          (
            
              <div className="imagesContainer">
                {images.map((image, index) =>  
                    <div className={`imagesView ${hoveredImageIndex === index ? 'active' : 'notActive'}`} key={index} style={{ textAlign : 'center' }}>
                        <img src={process.env.PUBLIC_URL + image} key={index} alt="Gallery Item" 
                          onMouseEnter={() => setHoveredImageIndex(index)} // Set hovered index on mouse enter
                          onMouseLeave={() => setHoveredImageIndex(index)} // Clear hovered index on mouse leave
                          style={{borderRadius : '25px'}}
                        />
                    </div>
                )}
              </div>
           
          )
        : changeView === 1 ?
          (
            <div className="slider-container">
              <img src={process.env.PUBLIC_URL + images[currentImage]} alt="Gallery Item" />
              <button className="slider-btn prev-btn" onClick={handlePrev}>
                  &#8249;
              </button>
              <button className="slider-btn next-btn" onClick={handleNext}>
                  &#8250;
              </button>
            </div>
          )
          :
          (
            <div className="imagesContainerVertical">
                {images.map((image, index) =>  
                    <div className={`imagesViewVertical`} key={index}>
                        <img
                          src={process.env.PUBLIC_URL + image} key={index} alt="Gallery Item"   
                        />
                    </div>
                )}
              </div>
          )
        }
        <button className='changeViewButton' onClick={handleChangeView}>Changer la vue</button>
    </div>
  );
};

export default ImageSlider;
