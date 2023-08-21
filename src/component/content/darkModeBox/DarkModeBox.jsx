import DarkModeSwitch from "../../darkMode/DarkModeSwitch"
import MobileSlider from "../../mobileSlider/mobileSlider"
import './darkModeBox.css'
import { useSelector } from "react-redux"


const DarkModeBox = () => {

    const isDarkMode = useSelector(state => state.darkMode);
    const isMobile = useSelector(state => state.mobileMode)

    return (
        <div className={`darkModeBoxContainer ${isDarkMode ? 'dark-mode' : ''} ${isMobile ? 'mobile-mode' : ''}`}>
            <p className="darkBoxText">Venons maintenant à redux toolkit un state manager, on peut faire ça avec ! </p>
            <DarkModeSwitch/>
            <MobileSlider/>
        </div>
    )
}

export default DarkModeBox