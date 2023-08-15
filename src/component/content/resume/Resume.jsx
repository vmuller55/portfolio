import './resume.css'

import { useSelector } from 'react-redux/es/hooks/useSelector';

const Resume = () => {
    const isDarkMode = useSelector(state => state.darkMode);
    const isMobile = useSelector(state => state.mobileMode)
    return(
        <div className={`resumeContent ${isDarkMode ? 'dark-mode' : ''} ${isMobile ? 'mobile' : ''}`}>
            <h2>Qui je suis?</h2>
            <p>Je me présente, je suis Muller Vincent. Je suis développeur Web spécialisé dans React ! </p>
            <p>Je suis à la recherche d'une première expérience de travail.</p>
            <p>Pour commencer, voici mon <a href='https://github.com/vmuller55?tab=repositories'>GitHub</a> avec mes projets en cours</p>
        </div>
    )
}

export default Resume