import './game.css'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import {ReactComponent as ThiefSvg} from '../../../assets/images/thief.svg'
import {ReactComponent as WarriorSvg} from '../../../assets/images/warrior.svg'
import {ReactComponent as WizardSvg} from '../../../assets/images/wizard.svg'
import {ReactComponent as SkeletonSvg} from '../../../assets/images/trueSkeleton.svg'
import {ReactComponent as ZombieSvg} from '../../../assets/images/zombie.svg'
import {ReactComponent as DragonSvg} from '../../../assets/images/dragon.svg'
import { useEffect } from 'react'


const Game = () => {

    const isDarkMode = useSelector(state => state.darkMode);

    const [gameIsOn, setGameIsOn] = useState(false)
    const [intro, setIntro] = useState(false)
    const [firstBattle, setFirstBattle] = useState(false)
    const [firstBattleIntro, setFirstBattleIntro] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [life, setLife] = useState(200)
    const [startAtFirstCombat, setStartAtFirstCombat] = useState(false)
    const [firstPause, setFirstPause] = useState(false)
    const [firstBattleEnd, setFirstBattleEnd] = useState(false)
    const [firstBattleEndMessage, setFirstBattleEndMessage] = useState('')
    const [localInventory, setLocalInventory] = useState([])
    const [secondBattleIntro, setSecondBattleIntro] = useState(false)
    const [haveBomb, setHaveBomb] = useState(false)
    const [haveMap, setHaveMap] = useState(false)
    const character = useSelector(state => state.character)
    const [secondTime, setSecondTime] = useState(false)
    const [thirdBattleIntro, setThirdBattleIntro] = useState(false)
    const [skeletonInCave, setSkeletonInCave] = useState(false)
    const [haveSword, setHaveSword] = useState(false)
    const [caveBackground, setCaveBackground] = useState(false)
    const [fourthBattle, setFourthBattle] = useState(false)
    const [castleBackground, setCastleBackground] = useState(false)
    const [journey, setJourney] = useState(false)
    const [fourthBattleEnd, setFourthBattleEnd] = useState(false)
    const [secondPause, setSecondPause] = useState(false)
    const [lastFight, setLastFight] = useState(false)
    const [lastFightEnd, setLastFightEnd] = useState(false)
    const [swordUsed, setSwordUsed] = useState(false)
    const [havePotion, setHavePotion] = useState(false)

    const updateInventory = () => {
        const updatedInventory = character.inventory.map(item => item)
        setLocalInventory(updatedInventory)
        
    }
    
    useEffect(() => {
        if(life <= 0) {
            setLife(0)
            setGameOver(true)
        }
        localInventory.map(item => (
            item.name === 'Bombe' ? setHaveBomb(true) : ''
        ))
        localInventory.map(item => (
            item.name === "Potion" ? setHavePotion(true) : ''
        ))
        localInventory.map(item => (
            item.name === 'Carte' ? setHaveMap(true) : ''
        ))
    }, [life, character.inventory, localInventory])

    const handleStartGame = () => {
        handleRetry()
        setGameIsOn(true)
        setIntro(true)
        setTimeout(() => {
            setIntro(false)
            setFirstBattleIntro(true)
        }, 14000) 
    }

    const handleRetry = () => {
        setGameIsOn(false)
        setGameOver(false)
        setFirstBattle(false)
        setFirstBattleIntro(false)
        setStartAtFirstCombat(true)
        setFirstBattleEnd(false)
        setFirstBattleEndMessage(false)
        setLife(200)
        setFirstPause(false)
        updateInventory()
        setSecondBattleIntro(false)
        setSecondTime(false)
        setCaveBackground(false)
        setThirdBattleIntro(false)
        setSkeletonInCave(false)
        setCastleBackground(false)
        setFourthBattle(false)
        setJourney(false)
        setSecondPause(false)
        setFourthBattleEnd(false)
        setLastFight(false)
        setSwordUsed(false)
        setLastFightEnd(false)
        setHaveBomb(false)
        setHavePotion(false)
        setHaveMap(false)
    }

    const handleGameOver = () => {
        setLife(0)
        setGameOver(true)
    }

    const handleFirstBattle = () => {
        setFirstBattleIntro(false)
        setFirstBattle(true)
    }

    const handleFirstBattleAttack = () => {
        setLife(life - 50)
        setFirstBattleEnd(true)
        setFirstBattleEndMessage("Le squelette vous blesse pendant votre combat ! ")
    }

    const handleStartChapterOne = () => {
        handleRetry()
        setGameIsOn(true)
        setFirstBattleIntro(true)
    }

    const handleChooseItem = () => {
        setFirstPause(true)
    }

    const handleUseItem = usedItem => {
        setLocalInventory(localInventory.filter(item => item.id !== usedItem.id))
        usedItem.name === "Potion" && setLife(life + 200)
    }

    const handleSecondeBattleIntro = () => {
        setSecondBattleIntro(true)
        setFirstPause(false)
        setFirstBattleEnd(true)
        setFirstBattleEndMessage(false)
        setSecondTime(false)
    }

    const handleFirstBattleSecondTime = () => {
        setFirstBattleEnd(false)
        setFirstBattleEndMessage(false)
        setFirstBattle(true)
        setSecondTime(true)
    }

    const handleThirdBattle = () => {
        setThirdBattleIntro(true)
    }

    const handleSkeletonInCave = () => {
        setSkeletonInCave(true)
        setFirstBattleEnd(false)
        setFirstBattleEndMessage(false)
        setFirstBattle(true)
        setSecondTime(true)
        setCaveBackground(true)
    }

    const handlefourthBattle = () => {  
        setCaveBackground(false)
        setThirdBattleIntro(false)
        setJourney(true)
        setCastleBackground(true)
    }

    const handlefourthBattleStart = () => {
        setFourthBattle(true)
    }

    const handleFourthBattleAttack = () => {
        setLife(life -100)
        setFourthBattleEnd(true)
        setSecondPause(true)
    }

    const handleLastFight = () => {
        setLastFight(true)
        setSecondPause(false)
    }

    const handleLastFightEnd = () => {
        setLastFightEnd(true)
        setLife(1)
    }

    const handleTeleportToDragon = () => {
        setCastleBackground(true)
        setJourney(true)
        setHaveMap(false)
        setSecondTime(true)
    }

    return (
        <div className={`gameContainer ${isDarkMode ? 'dark-mode' : ''}`}>
            <h2>Et si nous jouons ?</h2>
            <div className={`gameScreen ${gameOver ? 'gameOver' : caveBackground ? 'cave' : castleBackground ? 'castle' : ''}`}>
                <div className="startGame">
                    {character.created ? 
                        !gameIsOn ?
                            <>
                                <button className='gameButton' onClick={handleStartGame}><h3>Commencer le jeu !</h3></button>
                                {startAtFirstCombat ?
                                    <button className='gameButton chapterOne' onClick={handleStartChapterOne}><h3>Commencer au premier combat !</h3></button>
                                :
                                    ''
                                }
                            </>
                        :
                            <>
                                <button className='retry' onClick={handleRetry}>Restart</button>
                                <input type='range' value={life} min={0} max={200} className='lifeBar' style={{width : life}}></input>
                            </>
                    :
                       <h3>Il faut créer son personnage avant de pouvoir jouer.<br/>Vous pouvez le créer sur un formulaire juste au-dessus !</h3> 
                    }
                    {!gameOver ?
                        gameIsOn ?
                            intro ?
                                <div className="gameOn">
                                    <p>Vous êtes <span className='coolText'>{character.lastName} {character.firstName}</span> un {character.classSelected} de renom !</p>
                                    <p>Vous êtes en quête d'un artefact oublié, la <span className='coolText'>couronne des rois</span>.</p>
                                    <p>Votre enquête vous a amené tout droit dans un ancien cimetière</p>
                                    <p>C'est ici que commence votre aventure !</p>
                                </div>
                            :
                                firstBattleIntro ?
                                    <div className="firstBattleIntroText gameText">
                                        <p>Vous commencez à traverser le cimetière, mais vous vous faites attaquer par un squelette.<br/>Prenez garde !</p>
                                        <ul className='choices'>
                                            <li className="choice" onClick={handleFirstBattle}><button>Se battre</button></li>
                                            <li className="choice" onClick={handleGameOver}><button>Abandonner</button></li>
                                        </ul>
                                    </div>
                                :
                                    firstBattle ?
                                        <div className={`firstFightContainer`}>
                                            <div className={`mySide ${firstPause ? "off" : lastFightEnd ? 'off' : secondPause ? 'off' : ''}`}>
                                                {character.classSelected === 'Guerrier' && (
                                                    <WarriorSvg/>
                                                )}
                                                {character.classSelected === 'Magicien' && (
                                                    <WizardSvg/>
                                                )}
                                                {character.classSelected === 'Voleur' && (
                                                    <ThiefSvg/>
                                                )}
                                            </div>
                                            <div className="myAction">
                                                {firstBattleEnd ? 
                                                    <>
                                                        <button className={`continueButton ${firstPause ? "off" : secondBattleIntro ? "off" : ''}`} onClick={handleChooseItem}>Continuer</button>
                                                        {firstPause ? 
                                                            localInventory.length ?
                                                                <div className="itemSelection">
                                                                    {havePotion ?
                                                                        <>
                                                                            <h5 className={`flotingFightMessage gameText fadeIn`}>Vous pouvez utiliser une <span className='coolText'>Potion</span></h5>
                                                                            <ul className="itemListChoice">
                                                                                {localInventory.map(item => (
                                                                                    item.name === "Potion" ?
                                                                                        <li key={item.id} className="itemChoice"><button className='itemButton' onClick={() => {handleUseItem(item); handleSecondeBattleIntro()}}><i className={item.icon}></i></button></li>
                                                                                    :
                                                                                        ''
                                                                                ))}
                                                                            </ul>
                                                                        </>
                                                                    :
                                                                        <>
                                                                            <h3>Si vous aviez une <span className='coolText'>Potion</span>, vous pourriez l'utiliser maintenant.</h3>
                                                                            <button className='continueButton' onClick={handleSecondeBattleIntro}>Continuer</button>
                                                                        </>
                                                                    }
                                                                    
                                                                    <button className='continueButton' onClick={handleSecondeBattleIntro}>Continuer</button>
                                                                </div>
                                                            :
                                                                <>
                                                                    <h3>Si vous aviez une <span className='coolText'>Potion</span>, vous pourriez l'utiliser maintenant.</h3>
                                                                    <button className='continueButton' onClick={handleSecondeBattleIntro}>Continuer</button>
                                                                </>  
                                                        :
                                                            ''
                                                        }
                                                    </>
                                                :
                                                    <ul className="choices actions">
                                                        <li className="choice" onClick={handleFirstBattleAttack}><button>Attaquer</button></li>
                                                        <li className="choice"><button onClick={handleGameOver}>Fuir</button></li>
                                                    </ul>    
                                                }
                                                
                                            </div>
                                            <div className={`ennemiSide ${firstBattleEnd ? 'fadeOutEnnemies' : firstPause ? 'off' : secondPause ? 'off' : ''}`}>
                                                <SkeletonSvg/>
                                            </div>
                                            {firstBattleEnd ?
                                                !firstPause?
                                                    secondBattleIntro ?
                                                        haveMap?
                                                            <>
                                                                <h5 className={`flotingFightMessage gameText fadeIn ${journey ? 'off' : ''}`}>Le squelette est vaincu ! <br/> Vous utilisez votre <span className='coolText'>Carte</span> pour vous rendre plus vite au lieu de l'artefact.</h5>
                                                                <button className={`continueButton ${journey ? 'off' : ''}`} onClick={handleTeleportToDragon}>Voyager</button>
                                                                {localInventory.map(item => (
                                                                    item.name === "Carte" ? handleUseItem(item) : ''
                                                                ))}
                                                            </>
                                                        :
                                                            secondTime?
                                                                    <>
                                                                        <h5 className={`flotingFightMessage gameText fadeIn ${thirdBattleIntro ? 'off' : journey ? 'off' : ''}`}>Vous voilà débarrassé du deuxième squelette</h5>
                                                                        <button className={`continueButton ${thirdBattleIntro ? 'off' : journey ? 'off' : ''}`} onClick={handleThirdBattle}>Continuer</button>
                                                                        {thirdBattleIntro ?
                                                                            skeletonInCave?
                                                                                <>
                                                                                    <h5 className={`flotingFightMessage gameText fadeIn`}>Une fois le squelette vaincu, vous fouillez la grotte et trouvez une <span className='coolText'>épée</span> légendaire ! <br/> Vous la mettez dans votre inventaire et prenez la direction du château en ressortant.</h5>
                                                                                    <button className={`continueButton`} onClick={() => {setHaveSword(true); handlefourthBattle()}}>Continuer</button>
                                                                                </>
                                                                            :
                                                                                haveBomb ?
                                                                                    <>
                                                                                        <h5 className={`flotingFightMessage gameText fadeIn`}>Vous continuez votre chemin et vous vous arrêtez devant une l'entrée d'une grotte bloquée par un rocher.<br/>Vous utilisez habilement votre <span className='coolText'>Bombe</span> pour ouvrir le passage.<br/>Le bruit a attiré un squelette !</h5>
                                                                                        <button className={`continueButton`} onClick={handleSkeletonInCave}>Continuer</button>
                                                                                        {localInventory.map(item => (
                                                                                            item.name === "Bombe" ? handleUseItem(item) : ''
                                                                                        ))}
                                                                                    </>
                                                                                :
                                                                                    <>
                                                                                        <h5 className={`flotingFightMessage gameText fadeIn`}>Vous vous mettez en chemin et traversez le cimetière !<br/>Sur la route vous apercevez l'entrée d'une grotte bloquée par un rocher, avec une <span className='coolText'>Bombe</span> vous auriez pu fouiller l'intérieur !</h5>
                                                                                        <button className={`continueButton`} onClick={handlefourthBattle}>Voyager</button>
                                                                                    </>
                                                                        :
                                                                            journey?
                                                                                <>
                                                                                    <h5 className={`flotingFightMessage gameText fadeIn ${fourthBattle ? 'off' : '' }`}>Vous arrivez à l'entrée du château. Sans même avoir le temps de l'admirer, vous vous faites attaquer par un zombie !</h5>
                                                                                    <button className={`continueButton ${fourthBattle ? 'off' : '' }`} onClick={handlefourthBattleStart}>Affronter le zombie ! </button>
                                                                                    
                                                                                    {fourthBattle?
                                                                                        <>
                                                                                            <div className={`ennemiSide ${fourthBattleEnd ? 'fadeOutEnnemies' : firstPause ? 'off' : secondPause ? 'off' : ''}`}>
                                                                                                <ZombieSvg/>
                                                                                            </div>
                                                                                            <ul className={`choices actions ${secondPause ? 'off' : ''}`}>
                                                                                                <li className={`choice ${secondPause ? 'off' : lastFight ? 'off' : ''}`} onClick={handleFourthBattleAttack}><button>Attaquer</button></li>
                                                                                                <li className={`choice ${secondPause ? 'off' : lastFight ? 'off' : ''}`}><button onClick={handleGameOver}>Fuir</button></li>
                                                                                            </ul>
                                                                                            
                                                                                            {fourthBattleEnd?
                                                                                                secondPause ? 
                                                                                                    localInventory.length ?
                                                                                                        <div className="itemSelection">
                                                                                                            {havePotion ?
                                                                                                                <>
                                                                                                                    <h5 className={`flotingFightMessage gameText fadeIn`}>Vous pouvez utiliser une <span className='coolText'>Potion</span></h5>
                                                                                                                    <ul className="itemListChoice">
                                                                                                                        {localInventory.map(item => (
                                                                                                                            item.name === "Potion" ?
                                                                                                                                <li key={item.id} className="itemChoice"><button className='itemButton' onClick={() => {handleUseItem(item); handleLastFight()}}><i className={item.icon}></i></button></li>
                                                                                                                            :
                                                                                                                                ''
                                                                                                                        ))}
                                                                                                                    </ul>
                                                                                                                </>
                                                                                                            :
                                                                                                                <>
                                                                                                                    <h3>Si vous aviez une <span className='coolText'>Potion</span>, vous pourriez l'utiliser maintenant.</h3>
                                                                                                                    <button className='continueButton' onClick={handleLastFight}>Continuer</button>
                                                                                                                </>
                                                                                                            }
                                                                                                            
                                                                                                            <button className='continueButton' onClick={handleLastFight}>Continuer</button>
                                                                                                        </div>
                                                                                                    :
                                                                                                        <>
                                                                                                            <h3>Si vous aviez une <span className='coolText'>Potion</span>, vous pourriez l'utiliser maintenant.</h3>
                                                                                                            <button className='continueButton' onClick={handleLastFight}>Continuer</button>
                                                                                                        </>  
                                                                                                :
                                                                                                    lastFight ?
                                                                                                        <>
                                                                                                            <div className={`ennemiSide ${lastFightEnd ? 'fadeOutEnnemies' : ''}`}>
                                                                                                                <DragonSvg/>
                                                                                                            </div>
                                                                                                            
                                                                                                            {haveSword ? 
                                                                                                                <>
                                                                                                                    <h5 className={`flotingFightMessage gameText fadeIn ${swordUsed ? 'off' : ''}`}>Vous brandissez l'<span className='coolText'>épée</span> que vous avez trouvée et vous l'insufflez de votre pouvoir {character.colorSelected === "feu" ? "de feu" : character.colorSelected === "eau" ? "de l'eau" : "de la nature" } puis vous vous précipitez vers le dragon pour en finir avec lui !</h5>
                                                                                                                    <button className={`continueButton ${swordUsed ? 'off' : ''}`} onClick={() => {setSwordUsed(true); setHaveSword(false)}}>Continuer</button>
                                                                                                                </>
                                                                                                            :
                                                                                                                <ul className={`choices actions ${secondPause ? 'off' : ''}`}>
                                                                                                                    <li className={`choice ${lastFightEnd ? 'off' : ''}`} onClick={handleLastFightEnd}><button>Attaquer</button></li>
                                                                                                                    <li className={`choice ${lastFightEnd ? 'off' : ''}`}><button onClick={handleGameOver}>Fuir</button></li>
                                                                                                                </ul>
                                                                                                        
                                                                                                            }
                                                                                                            {lastFightEnd?
                                                                                                                <>
                                                                                                                    <div className="end">
                                                                                                                        <p>Le <span className='coolText'>DRAGON</span> défait, vous remarquez une montagne d'or derrière lui.</p>
                                                                                                                        <p>Vous y remarquez à son sommet, l'artefact tant convoité, la <span className='coolText'>couronne des rois</span> !</p>
                                                                                                                        <p>Félicitations <span className='coolText'>{character.firstName}</span> vous avez vaincu le jeu et vous avez fait fortune ! </p>
                                                                                                                    </div>
                                                                                                                    <div className="goldContainer"></div>
                                                                                                                </>
                                                                                                            :
                                                                                                                ''
                                                                                                            }
                                                                                                        </>
                                                                                                    :
                                                                                                        ''
                                                                                                
                                                                                            :
                                                                                                ''
                                                                                            }
                                                                                        </>
                                                                                    :
                                                                                        ''
                                                                                    }
                                                                                </>
                                                                            :
                                                                                ''
                                                                        }
                                                                    </>   
                                                                :
                                                                    <>
                                                                        <h5 className="flotingFightMessage gameText fadeIn">Le squelette est vaincu !<br/>Si vous aviez une <span className='coolText'>Carte</span>, vous ne seriez pas tombé à nouveau contre un squelette !</h5>
                                                                        <button className={`continueButton`} onClick={handleFirstBattleSecondTime}>Affronter encore un squelette</button>
                                                                    </>
                                                    :
                                                    <div className="flotingFightMessage gameText fadeIn">
                                                        <p>{firstBattleEndMessage}</p>
                                                    </div>

                                                :
                                                    ''
                                            :
                                                ''
                                            }
                                        </div>
                                    :
                                        ''
                        :
                            ''
                    :
                    ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Game

