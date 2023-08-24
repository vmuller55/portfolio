import React from 'react'
import { useState } from 'react';
import './jsModule.css'

export const JsModule = () => {

    const [currentSlide, setCurrentSlide] = useState(1);

    const slides = [
        {
          title: 'Un formulaire',
          description: 'Créez des formulaires interactifs avec JavaScript.',
        },
        {
          title: 'Dynamiser du contenu',
          description: 'Modifiez et mettez à jour le contenu de votre page avec JavaScript.',
        },
        {
          title: 'Connecter une API',
          description: 'Faites des appels à des APIs pour afficher des données en temps réel.',
        },
      ];
    
      const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      };

      const handleSlideCLick = (index) => {
        setCurrentSlide(index)
      }

  return (
    <div className="jsModuleContainer">
        <h3>Puis vient le tour de JavaScript ! </h3>
        <h4>On peut faire plusieurs choses avec JavaScript, à commencer par ça :<br/><i className="fa-solid fa-arrow-down fa-bounce"></i></h4>
        <div className="jsModuleContent">
            {slides.map((item, index) => (
              <div index={index} className={`jsModuleCard ${currentSlide === index ? 'active' : 'inactive'}`} onClick={() => handleSlideCLick(index)} >
                  <h3>{item.title}</h3>
                  <h4>{item.description}</h4>
              </div>
            ))}
            <div className="jsModuleNavigation">
                <button onClick={prevSlide}>&lt;</button>
                <button onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    </div>
  )
}

export default JsModule