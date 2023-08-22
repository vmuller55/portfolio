import { useDispatch, useSelector } from 'react-redux';
import {toggleRestart} from '../../../redux/restartSlice'
import {Link} from "react-router-dom"

import './restart.css'

const Restart = () => {

    const isReset = useSelector(state => state.restart);
    const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleRestart());
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
    return(
        <div className="restartContainer">
            <div className="restartContent">
                <button className="restartButton" onClick={handleToggleClick}>
                    
                    {isReset ? 
                        ("On revient comme avant ? ")
                    :
                        ("Et si on recommencé d'une autre manière?")
                    }
                </button>
            </div>
        </div>
    )
}

export default Restart