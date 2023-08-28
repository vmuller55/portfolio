import { useState, useEffect } from 'react'
import './form.css'
import { useDispatch, useSelector } from 'react-redux';
import {updateCharacter} from '../../../../../redux/characterSlice';
import {ReactComponent as ThiefSvg} from '../../../../../assets/images/thief.svg'
import {ReactComponent as WarriorSvg} from '../../../../../assets/images/warrior.svg'
import {ReactComponent as WizardSvg} from '../../../../../assets/images/wizard.svg'

const Form = () => {
    
    const [pngContainerClass, setPngContainerClass] = useState('pngContainer');
    const [formIsValid, setFormIsValid] = useState(false);
    const [firstNameIsValid, setFirstNameIsValid] = useState(false);
    const [lastNameIsValid, setLastNameIsValid] = useState(false);
    const [classIsValid, setClassIsValid] = useState(false);
    const [elementIsValid, setElementIsValid] = useState(false);


    const formInfos = useSelector(state => state.character)

    const dispatch = useDispatch()

    const handleChangeInfos = (option, value) => {
        dispatch(updateCharacter({option, value})) 
    }

    const handleSubmitButton = () => {
        handleChangeInfos('created', true)
    }

    const handleChangeCharacter = () => {
        handleChangeInfos('created', false)
    }

    useEffect(() => {
        if (formInfos.firstName.length > 1 ) {
            setFirstNameIsValid(true)
            if (formInfos.lastName.length > 1) {
                setLastNameIsValid(true)
                if (formInfos.classSelected) {
                    setClassIsValid(true)
                    if (formInfos.colorSelected) {
                        setElementIsValid(true)
                    }
                    else {
                        setElementIsValid(false)
                    }
                }
                else {
                    setClassIsValid(false)
                }
            }
            else {
                setLastNameIsValid(false)
            }
        }
        else {
            setFirstNameIsValid(false)
        }
        
        if (firstNameIsValid && lastNameIsValid && classIsValid && elementIsValid) {
            setFormIsValid(true)
        }

        else {
            setFormIsValid(false)
        }

        if (formInfos.colorSelected.length > 0) {
            setPngContainerClass(`pngContainer ${formInfos.colorSelected}`);
            // Remove the added class after 1 second
            const timeoutId = setTimeout(() => {
              setPngContainerClass('pngContainer');
            }, 1000);
            return () => clearTimeout(timeoutId);
          }
      }, [formInfos.colorSelected, formInfos.firstName, formInfos.lastName, formInfos.classSelected, firstNameIsValid, lastNameIsValid, classIsValid, elementIsValid])


    return(
        <>
            {formInfos.created ?
                (
                    <>
                        <h4 className='createdCharacter changeCharacter'>
                            Vous jouez {formInfos.lastName} {formInfos.firstName} un {formInfos.classSelected}. <br/>
                            Vous utilisez {formInfos.colorSelected === "feu" ? "le feu" : formInfos.colorSelected === "eau" ? "l'eau" : "la nature" } pour vous battre ! <br/>
                            On se retouvera un peu plus bas !
                        </h4>
                        <button className='buttonStyle formButton changeCharacter' style={{bottom : '100px'}} onClick={handleChangeCharacter}>Changer de personnage</button>
                        <div className={pngContainerClass}>
                            {formInfos.classSelected === 'Guerrier' && (
                                <WarriorSvg/>
                            )}
                            {formInfos.classSelected === 'Magicien' && (
                                <WizardSvg/>
                            )}
                            {formInfos.classSelected === 'Voleur' && (
                                <ThiefSvg/>
                            )}
                        </div>
                    </>
                )
            :
                (
                    <div className="formContainer">
                    <h2>Formulaire</h2>
                    <h3>Créons un personage de jeu de rôle</h3>
                    <div className="formContent">
                        <input type="text" id='firstName' placeholder='Prénom *' value={formInfos.firstName} maxLength={8} onChange={event => handleChangeInfos('firstName', event.target.value)}/>
                        <input type="text" id='lastName' placeholder='Nom *' value={formInfos.lastName} maxLength={8} onChange={event => handleChangeInfos('lastName', event.target.value)}/>
                        <select name="classSelector" id="class" value={formInfos.classSelected} onChange={event => handleChangeInfos('classSelected', event.target.value)}>
                            <option value="" disabled selected defaultValue={""}>Ma classe de combat</option>
                            <option value="Guerrier">Guerrier</option>
                            <option value="Voleur">Voleur</option>
                            <option value="Magicien">Magicien</option>
                        </select>
                        {formInfos.classSelected && (
                            <>
                                <select name="colorSelector" id="color" value={formInfos.colorSelected} onChange={event => handleChangeInfos('colorSelected', event.target.value)}>
                                    <option value="" disabled selected defaultValue={""}>Mon élément</option>
                                    <option value="feu">Feu</option>
                                    <option value="eau">Eau</option>
                                    <option value="nature">Nature</option>
                                </select>
                            </>
                        )}
                    </div>
                    <div className={pngContainerClass}>
                        {formInfos.classSelected === 'Guerrier' && (
                            <WarriorSvg/>
                        )}
                        {formInfos.classSelected === 'Magicien' && (
                            <WizardSvg/>
                        )}
                        {formInfos.classSelected === 'Voleur' && (
                            <ThiefSvg/>
                        )}
                    </div>
                    {formIsValid ?
                        <>
                            <h4>Vous voulez jouer {formInfos.lastName} {formInfos.firstName} un {formInfos.classSelected}. <br/> Vous utilisez {formInfos.colorSelected === "feu" ? "le feu" : formInfos.colorSelected === "eau" ? "l'eau" : "la nature" } pour vous battre ! </h4>
                            <button className='buttonStyle formButton' onClick={handleSubmitButton}>Créer mon personnage</button>
                        </>
                    :
                        <>
                            <h4>Il nous manques des informations : <br/> {!firstNameIsValid && "Le prénom"} <br/> {!lastNameIsValid && 'Le nom'} <br/> {!classIsValid && "La classe"} <br/> {!elementIsValid && "L'élément"}</h4>   
                        </>
                    }
                    
                </div>
                )
            }
            
        </>
    )
}

export default Form