const ModalTemplate = ({headerContent, bodyContent, footerContent}) => {
    return(
        <div className="modalContainer">
            <div className="modalContent">
                <div className="modalHeader">
                    {headerContent}
                </div>
                <div className="modalBody">
                    {bodyContent}
                </div>
                <div className="modalFooter">
                    {footerContent}
                </div>
            </div>
        </div>
    )
}

export default ModalTemplate