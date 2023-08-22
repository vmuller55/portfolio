import Header from "../../component/header/Header"
import Resume from "../../component/content/resume/Resume"
import AppearingComponent from "../../component/sideEffect/sideEffect"
import StylingControls from "../../component/stylingControl/StylingControl"
import TextAnimationControl from "../../component/animationContent/Animation"
import ImageSlider from "../../component/slideShow/Slideshow"
import DarkModeBox from "../../component/content/darkModeBox/DarkModeBox"
import Restart from '../../component/content/restart/Restart.jsx'
import Footer from "../../component/footer/Footer"

import { useSelector } from "react-redux"

import './home.css'

const Home = () => {
    const isMobile = useSelector(state => state.mobileMode)
    const isDarkMode = useSelector(state => state.darkMode);
    const isReset = useSelector(state => state.restart)


    

    const rootElement = document.getElementById('root')

    isMobile ? rootElement.classList.add('mobile-mode') : rootElement.classList.remove('mobile-mode');

    const images = [
        '/images/html.webp',
        '/images/css.webp',
        '/images/js.webp',
        '/images/node.webp',
        '/images/react.webp'
    ]

    return(
        <div className={`homeContainer ${isDarkMode ? 'dark-mode' : ''} ${isMobile ? 'mobile-mode' : ''}`}>
            <Header/>
            {isReset ? 
                (<Restart/>)
            :
                (
                    isMobile ? (
                        <div className="scrollable-container" id="scrollable-container">
                            <div className="scrollable-content">
                                <Resume/>
                                <StylingControls/>
                                <TextAnimationControl/>
                                <ImageSlider images={images}/>
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
                        <AppearingComponent breakpoint={700} direction={'left'} content={<TextAnimationControl/>}/>
                        <AppearingComponent breakpoint={1200} direction={'right'} content={<ImageSlider images={images}/>}/>
                        <AppearingComponent breakpoint={1600} direction={'left'} content={<DarkModeBox/>}/>
                        <AppearingComponent breakpoint={1600} direction={'right'} content={<Restart/>}/>
                    </>
                )
                )
            }
            
        <Footer/>
        </div>
    )
}

export default Home