import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import "./header.css"
import DarkModeSwitch from '../utils/darkMode/DarkModeSwitch';



const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [scrollCount, setScrollCount] = useState(0);
    const isDarkMode = useSelector(state => state.darkMode);
    const character = useSelector(state => state.character)
    const [inventoryIsVisible, setInventoryIsVisibe] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            // Check if scrolling up or if at the top of the page
            const scrollingUp = prevScrollPos > currentScrollPos;
            const atTop = currentScrollPos <= 50;

            // If scrolling up or at the top, increase scrollCount
            if (scrollingUp || atTop) {
                setScrollCount(prevCount => prevCount + 1);
            } else {
                // If scrolling down, reset scrollCount
                setScrollCount(0);
            }

            // Set visibility based on scroll count
            setVisible(scrollCount >= 50 || currentScrollPos <= 0);

            // Update prevScrollPos
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, scrollCount]);

    const handleShowInventory = () => {
        setInventoryIsVisibe(!inventoryIsVisible)
        console.log('ici')
      }

    return (
        <header style={{ opacity: visible ? 1 : 0}} className={`header ${isDarkMode ? 'dark-mode' : ''} ${visible ? 'activeHeader' : ''}`}>
            {character.inventory.length ? 
                <>
                    <button className='buttonStyle inventoryButton' onClick={handleShowInventory}><i class="fa-solid fa-toolbox"></i></button>
                    <ul>
                        {inventoryIsVisible?
                            <ul className='inventoryListHeader'>
                                {character.inventory.map(itemInInventory => (
                                <li key={itemInInventory.id}>
                                    <i className={itemInInventory.icon}> </i>
                                </li>
                                ))}
                            </ul> 
                        : 
                            ''
                        }
                    </ul>
                </>
            :
                ''
            }
            <h1>Muller Vincent</h1>
            <DarkModeSwitch/>
        </header>
    );
};

export default Header