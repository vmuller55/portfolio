import ModalTemplate from '../../../utils/modal/Modal'
import Form from './form/Form'
import { useSelector } from 'react-redux'

const FormModal = ({button}) => {

    const formModal = useSelector(state => state.formModal)

    return(
        formModal && <ModalTemplate headerContent={button} bodyContent={<Form/>}/>
        
    )
}

export default FormModal