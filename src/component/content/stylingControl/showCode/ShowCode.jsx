import React from 'react'
import { useState, useRef } from 'react';
import './showCode.css'

const ShowCode = ({props}) => {

    const [copyMessageVisible, setCopyMessageVisible] = useState(false);

    const cssCodeRef = useRef(null);

    const handleCopyCode = () => {
        const codeText = cssCodeRef.current.textContent;
        const textArea = document.createElement('textarea');
        textArea.value = codeText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopyMessageVisible(true);
        setTimeout(() => {
        setCopyMessageVisible(false);
        }, 1500);
    };

  return (
    <>
        <div className="codeText" ref={cssCodeRef}>
            <p> background-color : hsl({props.backgroundColor}, 100%, 50%);</p>
            {props.hasBoxShadow ? 
                (<p>boxShadow: {props.shadowX}px {props.shadowY}px {props.shadowBlur}px hsl({props.shadowColor}, 100%, 50%);</p>)
            :
                ('')
            }
            <p>color: hsl({props.textColor}, 100%, 50%);</p>
            <p>border-radius: {props.borderRadius}px;</p>
            {props.hasBorder ?
                (<p>border : {props.borderWidth}px solid hsl({props.borderColor}, 100%, 50%);</p>)
            :
                ('')  
            }
            <p>font-size: {props.fontSize}px;</p>
        </div>
        <button className='copyButton' onClick={handleCopyCode}><i className="fa-solid fa-copy fa-flip"></i></button>
        {copyMessageVisible && <div className="messageFlotant">Copié</div>}
    </>
  )
}

export default ShowCode