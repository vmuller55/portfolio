import Header from "../../component/header/Header"
import Resume from "../../component/content/resume/Resume"
import AppearingComponent from "../../component/sideEffect/sideEffect"
import StylingControls from "../../component/stylingControl/StylingControl"
import TextAnimationControl from "../../component/animationContent/Animation"
import ImageSlider from "../../component/slideShow/Slideshow"
import Footer from "../../component/footer/Footer"
import { useSelector } from "react-redux"
import './home.css'

const Home = () => {
    const isMobile = useSelector(state => state.mobileMode)
    const isDarkMode = useSelector(state => state.darkMode);

    const images = [
        './images/html.webp',
        './images/css.webp',
        './images/js.webp',
        './images/node.webp',
        './images/react.webp'
    ]

    return(
        <div className={`homeContainer ${isDarkMode ? 'dark-mode' : ''} ${isMobile ? 'mobile-mode' : ''}`}>
            <Header/>
            {isMobile ? (
                <div className="scrollable-container">
                    <div className="scrollable-content">
                        <Resume/>
                        <StylingControls/>
                        <Resume/>
                        <Resume/>
                    </div>
            </div>
            )
        :
        (
            <>
                <Resume/>
                <AppearingComponent breakpoint={150} direction={'right'} content={<StylingControls/>}/>
                <AppearingComponent breakpoint={500} direction={'left'} content={<TextAnimationControl/>}/>
                <AppearingComponent breakpoint={800} direction={'right'} content={<ImageSlider images={images}/>}/>
            </>
        )}
        <Footer/>
        </div>
    )
}

export default Home