import './carousel.css'
import React from "react";
import Slider from 'react-slick'

const Carousel = ({images, option}) => {
    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      };

      return (
        <div className="carouselContainer">
            <Slider {...settings}>
                {images.map((image, index) => 
                    <div className="carouselImage">
                        <img src={process.env.PUBLIC_URL + image} key={index} alt="Gallery Item"></img>
                    </div>
                )}
            </Slider>
        </div>
      )
}

export default Carousel