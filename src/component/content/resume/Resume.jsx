import './resume.css'

import { useSelector } from 'react-redux/es/hooks/useSelector';

const Resume = () => {
    const isDarkMode = useSelector(state => state.darkMode);
    const isMobile = useSelector(state => state.mobileMode)
    return(
        <div className={`resumeContent ${isDarkMode ? 'dark-mode' : ''} ${isMobile ? 'mobile' : ''}`}>
            <h2>Qui je suis?</h2>
            <p>Je me présente, je suis Muller Vincent. Je suis développeur Web spécialisé dans React ! </p>
            <p>Pour commencer, voici mon <a href='https://github.com/vmuller55?tab=repositories'><span className='coolLink'>GitHub</span></a> avec mes projets en cours</p>
            <p>Vous retrouvez ici quelques exemples interactifs possibles avec React, dont un mini jeu à la fin !</p>
            <p>Descendons un peu pour commencer.</p>
            <i className="fa-solid fa-arrow-down fa-bounce"></i>
        </div>
    )
}

export default Resume