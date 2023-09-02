import './ending.css'
import PdfDownloadButton from '../../utils/pdf/PdfDlButton'
import {useSelector} from 'react-redux'

const Ending = () => {

    const isDarkMode = useSelector(state => state.darkMode);

    return (
        <div className={`endingContainer ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="endingContent">
                <h2>Pour conclure</h2>
                <h3>Merci d'avoir pris le temps de me lire.</h3>
                <h3>Vous pouvez également trouver mon CV ici :<PdfDownloadButton/> </h3>
                <h3>Les technologies que j'utilise :</h3>
                <ul className="skillList">
                    <li className="skill"><i className="fa-brands fa-html5"></i>HTML 5</li>
                    <li className="skill"><i className="fa-brands fa-css3-alt"></i>CSS 3</li>
                    <li className="skill"><i className="fa-brands fa-square-js"></i>Java Script</li>
                    <li className="skill"><i className="fa-brands fa-react"></i>React</li>
                    <li className="skill"><i className="fa-brands fa-java"></i>Java</li>
                    <li className="skill"><i className="fa-brands fa-node-js"></i>Node-js</li>
                    <li className="skill"><i className="fa-brands fa-github"></i>Github</li>
                    <li className="skill"><i className="fa-brands fa-npm"></i>NPM</li>
                    <li className="skill"><i className="fa-brands fa-sass"></i>Sass</li>
                    <li className="skill"><i className="fa-brands fa-docker"></i>Docker</li>
                </ul>
                <div className="skillInfo">
                    <h3>Voici un <a href='https://vmuller55.github.io/sam-coiffure/'><span className='coolLink'>projet professionnel</span></a> que j'ai réalisé.</h3>
                    <h3>Sur mon <a href='https://github.com/vmuller55?tab=repositories'><span className='coolLink'>GitHub</span></a> vous retrouverez des projets s'articulant autour du SEO et de l'accessibilité également.</h3>
                </div>
            </div>
        </div>
    )
}

export default Ending