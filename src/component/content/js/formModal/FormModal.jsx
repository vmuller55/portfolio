import ModalTemplate from '../../../utils/modal/Modal'
import Form from './form/Form'

const FormModal = ({button}) => {
    return(
        <ModalTemplate headerContent={button} bodyContent={<Form/>}/>
    )
}

export default FormModal