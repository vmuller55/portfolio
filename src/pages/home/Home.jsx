import Header from "../../component/header/Header"
import Resume from "../../component/content/resume/Resume"
import AppearingComponent from "../../component/utils/sideEffect/sideEffect"
import StylingControls from "../../component/content/stylingControl/StylingControl"
import JsModule from "../../component/content/js/JsModule"
import DarkModeBox from "../../component/content/darkModeBox/DarkModeBox"
import Restart from '../../component/content/restart/Restart.jsx'
import Footer from "../../component/footer/Footer"

import { useSelector } from "react-redux"
import './home.css'

const Home = () => {
    const isMobile = useSelector(state => state.mobileMode)
    const isDarkMode = useSelector(state => state.darkMode);

    const rootElement = document.getElementById('root')

    isMobile ? rootElement.classList.add('mobile-mode') : rootElement.classList.remove('mobile-mode');

    return(
        <div className={`homeContainer ${isDarkMode ? 'dark-mode' : ''} ${isMobile ? 'mobile-mode' : ''}`}>
            <Header/>
            {isMobile ? (
                <div className="scrollable-container" id="scrollable-container">
                    <div className="scrollable-content">
                        <Resume/>
                        <StylingControls/>
                        <DarkModeBox/>
                        <Footer/>
                    </div>
            </div>
            )
        :
        (
            <>
                <Resume/>
                <AppearingComponent breakpoint={150} direction={'right'} content={<StylingControls/>}/>
                <JsModule/>
                <AppearingComponent breakpoint={1600} direction={'left'} content={<DarkModeBox/>}/>
                <AppearingComponent breakpoint={1600} direction={'right'} content={<Restart/>}/>
            </>
        )}
        <Footer/>
        </div>
    )
}

export default Home