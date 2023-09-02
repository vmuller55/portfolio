import DarkModeSwitch from "../../utils/darkMode/DarkModeSwitch"
import './darkModeBox.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleBuyModal} from '../../../redux/buyModalSlice'
import ModalTemplate from "../../utils/modal/Modal"
import Buy from "../../buy/Buy"

const DarkModeBox = () => {

    const dispacth = useDispatch()

    const buyModal = useSelector(state => state.buyModal)
    const isDarkMode = useSelector(state => state.darkMode);

    const handleOpenBuy = () => {
        dispacth(toggleBuyModal())
    }

    return (
        <div className={`darkModeBoxContainer ${isDarkMode ? 'dark-mode' : ''}`}>
            <h4>Je me suis ensuite spécialisé dans React !</h4>
            <p>Une librairie qui permet d'utiliser Redux, un State manager.</p>
            <p>C'est grâce à lui qu'on peut éteindre la lumière par exemple !</p>
            <DarkModeSwitch/>
            <p>React permet de créer des single page application et de déstructurer notre code en composants.</p>
            <p>Ces composants peuvent ensuite se mettre à jour indépendamment du reste de la page !</p>
            <p>Cela me permet par exemple de créer juste ici une petite boutique : </p>
            <button onClick={handleOpenBuy} className="buttonStyle jsButton" style={{width : "fit-content", margin : 'auto', padding : '15px', fontSize : '24px'}}><i className="fa-solid fa-store"></i></button>
            {buyModal && <ModalTemplate headerContent={<button onClick={handleOpenBuy} className="close buttonStyle">X</button>} bodyContent={<Buy/>}/>}
        </div>
    )
}

export default DarkModeBox