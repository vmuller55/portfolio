import React, { useState, useEffect } from 'react';
import ModalTemplate from '../../../utils/modal/Modal';
import './api.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleApiModal } from '../../../../redux/apiModal';

function ApiModal() {
    const [pokemonList, setPokemonList] = useState([]);
    const [digimonList, setDigimonList] = useState([]);
    const [randomDogo, setRandomDogo] = useState('')
    const [colonm, setColomn] = useState(5)
    const [fetchList, setFetchList] = useState('')
    const [buttonClicked, setButtonClicked] = useState(false);
    const [resolution, setResolution] = useState({ width: 0, height: 0 });
    
    const isDarkMode = useSelector(state => state.darkMode)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchKantoPokemon();
        fetchDigimon();
        fetchRandomDogImage();
        const updateResolution = () => {
            setResolution({ width: window.innerWidth, height: window.innerHeight });
          };
      
          // Mettre à jour la résolution lorsque la fenêtre est redimensionnée
          window.addEventListener('resize', updateResolution);
      
          // Appeler la fonction de mise à jour une fois au montage initial
          updateResolution();
          // Nettoyer l'écouteur d'événement lorsque le composant est démonté
          return () => {
            window.removeEventListener('resize', updateResolution);
          };
          
    }, []);

    const fetchKantoPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            const names = data.results.map(pokemon => pokemon.name);
            setPokemonList(names);
        })
        .catch(error => {
            console.error('Error fetching Pokemon:', error);
        });
    };

    const fetchDigimon = () => {
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            const names = data.map(digimon => digimon.name);
            setDigimonList(names);
        })
        .catch(error => {
            console.error('Error fetching Digimon:', error);
        });
    };

    const fetchRandomDogImage = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const url = data.message
            setRandomDogo(url);
        })
        .catch(error => {
            console.error('Error fetching Random dogo img:', error);
        });
    };

    const handleSetColomn = (value) => {
        setColomn(value)
    }  

    const handleChangeFetch = (value) => {
        setFetchList(value)
    }

    const handleApiModal = () => {
        dispatch(toggleApiModal())
    }

    const handleClick = () => {
        if (!buttonClicked) {
          fetchRandomDogImage()
          setButtonClicked(true);
          setTimeout(() => {
            setButtonClicked(false)
          }, 500);
        }
      };

    return (
        <div className={`apiContainer ${isDarkMode ? 'dark-mode' : ''}`}>
            <ModalTemplate headerContent={
                <>
                    <button onClick={handleApiModal} className='close buttonStyle' style={{zIndex : "999"}}>X</button>
                    <select name="fetchSelector" id="fetchSelector" onChange={event => handleChangeFetch(event.target.value)}>
                        <option disabled selected>Choisir quelle api connecter</option>
                        <option value="pokemon">Pokémon</option>
                        <option value="digimon">Digimon</option>
                        <option value="dogo">Image aléatoire de chien</option>
                    </select>
                </>
            } bodyContent={
                fetchList === 'pokemon' 
                ?
                    <>
                        <div className="inputPkmn">
                            <h4 className='titleApi'>Ici l'api nous fournit une liste de pokemon</h4>
                            <h4 className='offMobile'>On peut utiliser css grid pour changer l'affichage de notre liste</h4>
                            <label className='offMobile'>Changer le nombre de colonnes : </label>
                            <input type='number' value={colonm} onChange={event => handleSetColomn(event.target.value)} min={1} max={5} placeholder='Nombre de colonnes' className='offMobile' ></input>
                        </div>
                        {
                            resolution.width > 850 
                            ?
                                <ul className='fetchList pokemonList' style={{gridTemplateColumns : `repeat(${colonm}, 1fr)`}}>
                                    {pokemonList.map((pokemonName, index) => (
                                        <li key={index}>{pokemonName}</li>
                                    ))}
                                </ul>
                            :
                                <ul className='fetchList pokemonList' style={{gridTemplateColumns : `repeat(2, 1fr)`}}>
                                    {pokemonList.map((pokemonName, index) => (
                                        <li key={index}>{pokemonName}</li>
                                    ))}
                                </ul>       
                        }
                            
                        
                    </>
                :
                fetchList === 'digimon' ?
                    <>
                        <div className="inputPkmn">
                            <h4 className='titleApi'>Ici l'api nous fournit une liste de digimon</h4>
                            <h4 className='offMobile'>On peut utiliser css grid pour changer l'affichage de notre liste</h4>
                            <label className='offMobile'>Changer le nombre de colonnes : </label>
                            <input type='number' value={colonm > 3 ? setColomn(3) : colonm} onChange={event => handleSetColomn(event.target.value)} min={1} max={3} placeholder='Nombre de colonnes' className='offMobile'></input>
                        </div>
                        {
                            resolution.width > 850
                            ?
                                <ul className='fetchList digimonList' style={{gridTemplateColumns : `repeat(${colonm}, 1fr)`}}>
                                    {digimonList.map((pokemonName, index) => (
                                        <li key={index}>{pokemonName}</li>
                                    ))}
                                </ul>
                            :
                                <ul className='fetchList digimonList' style={{gridTemplateColumns : `repeat(2, 1fr)`}}>
                                    {digimonList.map((pokemonName, index) => (
                                        <li key={index}>{pokemonName}</li>
                                    ))}
                                </ul>
                       }
                        
                    </>
                :
                fetchList === 'dogo' ?
                    <>
                        <h4 className='titleApi'>Ici l'api nous fournit une image aléaoire de chiens</h4>
                        <div className="imgContainer">
                            <img src={randomDogo} alt='chien' className='imgContent'/>
                        </div>
                        
                        <button onClick={handleClick} disabled={buttonClicked} className='buttonStyle doggoButton'>Nouveau chien</button>
                    </>
                :
                    <div className='introText'>
                        <h4>Avec les api nous pouvons connecter notre application a des services externes et en récuperer les informations.</h4>
                        <h4>Voici plusieurs exemple d'utilisation d'api</h4>
                    </div>
            }
            />
        </div>
    );
}

export default ApiModal;
