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
    const isDarkMode = useSelector(state => state.darkMode);

   

    

    return(
        <div className={`homeContainer ${isDarkMode ? 'dark-mode' : ''}`}>
            <Header/>
            <Resume/>
            <AppearingComponent breakpoint={150} direction={'right'} content={<StylingControls/>}/>
            <AppearingComponent breakpoint={900} direction={'left'} content={<JsModule/>}/>
            <AppearingComponent breakpoint={1500} direction={'right'} content={<DarkModeBox/>}/>
            <AppearingComponent breakpoint={2000} direction={'left'} content={<Restart/>}/>
            <Footer/>
        </div>
    )
}

export default Home