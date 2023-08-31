import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import "./header.css"
import DarkModeSwitch from '../utils/darkMode/DarkModeSwitch';



const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const isDarkMode = useSelector(state => state.darkMode);
    const character = useSelector(state => state.character)
    const [inventoryIsVisible, setInventoryIsVisibe] = useState(false)

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