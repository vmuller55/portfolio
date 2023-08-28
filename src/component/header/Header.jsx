import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import "./header.css"
import DarkModeSwitch from '../utils/darkMode/DarkModeSwitch';
import MobileSlider from '../utils/mobileSlider/mobileSlider';


const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const isDarkMode = useSelector(state => state.darkMode);
    const isMobile = useSelector(state => state.mobileMode)

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 100);
        setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header style={{ opacity: visible ? 1 : 0}} className={`header ${isDarkMode ? 'dark-mode' : ''} ${isMobile ? 'mobile-mode' : ''} ${visible ? 'activeHeader' : ''}`}>
            <MobileSlider/>
            <h1>Muller Vincent</h1>
            <DarkModeSwitch/>
        </header>
    );
};

export default Header