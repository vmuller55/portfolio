import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './jsModule.css'
import FormModal from './formModal/FormModal';
import { toggleFormModal } from '../../../redux/formModalSlice';

export const JsModule = () => {

    const [currentSlide, setCurrentSlide] = useState(1);
    
    const formModal = useSelector(state => state.formModal)
    const dispatch = useDispatch()

    const handleFormModal = () => {
      dispatch(toggleFormModal())
    }

    const slides = [
        {
          title: 'Un formulaire',
          description: 'Créez des formulaires interactifs avec JavaScript.',
          exemple: <button onClick={handleFormModal} className='buttonStyle' style={{backgroundColor : 'var(--detail)', color : 'var(--main)'}}>Exemple</button>
        },
        {
          title: 'Dynamiser du contenu',
          description: 'Modifiez et mettez à jour le contenu de votre page avec JavaScript.',
          exemple: 'Comme on le fait depuis le début ici !'
        },
        {
          title: 'Connecter une API',
          description: 'Faites des appels à des APIs pour afficher des données en temps réel.',
          exemple: <button className='buttonStyle' style={{backgroundColor : 'var(--detail)', color : 'var(--main)'}}>Exemple</button>
        },
      ];
      const handleSlideCLick = (index) => {
        setCurrentSlide(index)
      }

  return (
    <div className="jsModuleContainer">
        <h3>Puis vient le tour de JavaScript ! </h3>
        <h4>On peut faire plusieurs choses avec JavaScript, à commencer par ça :</h4>
        <i className="fa-solid fa-arrow-down fa-bounce"></i>
        <div className="jsModuleContent">
            {slides.map((item, index) => (
              <div key={index} className={`jsModuleCard ${currentSlide === index ? 'active' : 'inactive'}`} onClick={() => handleSlideCLick(index)} >
                  <h3>{item.title}</h3>
                  <h4>{item.description}</h4>
                  <h5>{item.exemple}</h5>
              </div>
            ))}
        </div>
        {formModal && <FormModal button={<button onClick={handleFormModal} className='close buttonStyle' style={{zIndex : "999"}}>X</button>}/>}
    </div>
  )
}

export default JsModule