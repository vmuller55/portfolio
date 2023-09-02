import './footer.css'
import {  useSelector } from 'react-redux'
const Footer = () => {

    const isDark = useSelector(state => state.darkMode)
    return(
        <footer>
            <div className={`footerBloc ${isDark ? 'dark-mode' : ''}`}></div>
        </footer>
    )
}

export default Footer