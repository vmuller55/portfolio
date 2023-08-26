import { useState, useEffect } from 'react'
import './form.css'
import {ReactComponent as ThiefSvg} from '../../../../../assets/images/thief.svg'
import {ReactComponent as WarriorSvg} from '../../../../../assets/images/warrior.svg'
import {ReactComponent as WizardSvg} from '../../../../../assets/images/wizard.svg'

const Form = () => {

    const [formInfos, setFormInfos] = useState({
        firstName : '',
        lastName : '',
        classSelector : '',
        colorSelector : '',
    })
    
    const [pngContainerClass, setPngContainerClass] = useState('pngContainer');

    const handleChangeInfos = (option, value) => {
        setFormInfos((prevFormInfos) => ({
            ...prevFormInfos,
            [option]: value,
        }))   
    }

    useEffect(() => {
        if (formInfos.colorSelector.length > 0) {
          setPngContainerClass(`pngContainer ${formInfos.colorSelector}`);
          // Remove the added class after 1 second
          const timeoutId = setTimeout(() => {
            setPngContainerClass('pngContainer');
          }, 1000);
          return () => clearTimeout(timeoutId);
        }
      }, [formInfos.colorSelector])


    return(
        <div className="formContainer">
            <h2>Formulaire</h2>
            <h3>Créons un personage de jeu de rôle</h3>
            <div className="formContent">
                <input type="text" id='firstName' placeholder='Prénom *' onChange={event => handleChangeInfos('firstName', event.target.value)}/>
                <input type="text" id='lastName' placeholder='Nom *' onChange={event => handleChangeInfos('lastName', event.target.value)}/>
                <select name="classSelector" id="class" onChange={event => handleChangeInfos('classSelector', event.target.value)}>
                    <option value="" disabled selected>Ma classe de combat</option>
                    <option value="Guerrier">Guerrier</option>
                    <option value="Voleur">Voleur</option>
                    <option value="Magicien">Magicien</option>
                </select>
                {formInfos.classSelector && (
                    <div className="chooseColor">
                        <select name="colorSelector" id="color" onChange={event => handleChangeInfos('colorSelector', event.target.value)}>
                            <option value="" disabled selected>Mon élément</option>
                            <option value="feu">Feu</option>
                            <option value="eau">Eau</option>
                            <option value="nature">Nature</option>
                        </select>
                        <div className="selectedColor">
                            {formInfos.colorSelector}   
                        </div>
                    </div>
                )}
            </div>
            <div className={pngContainerClass}>
                {formInfos.classSelector === 'Guerrier' && (
                    <WarriorSvg/>
                )}
                {formInfos.classSelector === 'Magicien' && (
                    <WizardSvg/>
                )}
                {formInfos.classSelector === 'Voleur' && (
                    <ThiefSvg/>
                )}
            </div>
            
        </div>
    )
}

export default Form