
import React, { useState } from 'react';
import "../../../../globalCss/style.css"
import './style.css';
import ModalMenu from '../modalMenu';

const ModalWindow = ({ isOpen, toggleModal }) => {
    return (
            <div className={`modal ${isOpen ? 'open' : ''}`}>
                <div className="modal-content">
                    {/* <span className="close" onClick={toggleModal}>&times;</span> */}
                    <ModalMenu toggleModal={toggleModal}/>
                </div>
            </div>

    );
};
export default ModalWindow