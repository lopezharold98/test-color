import React from "react"
import { Modal, Row,Col } from 'react-bootstrap';
export const ModalInfo = (props) =>{
    const {show,nameColor, closeModal} = props
    return(
        
        <>
        <style>
            {`
                .modal-90w { max-width: 85% !important; }
            `}
        </style>
        <Modal 
            dialogClassName="modal-90w" show={show} onHide={closeModal}  centered>
            <Modal.Header closeButton>
                <Modal.Title >Selección de Color</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                    Señor usuario, el color de la pantalla
                    ha cambiado a {nameColor}
                                             
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    </>
    )
}

