
import React, { useState } from 'react';
// import "../../../../globalCss/style.css"
import './style.css';
import ModalMenu from '../../menuWeb';
// import ModalMenuMobile from '../modalMenuMobile';

const ModalWindow = ({ isOpen, toggleModal }) => {
    // const screenWidth =`${window.innerWidth}`
    return (
            <div className={`modal ${isOpen ? 'open' : ''}`}>
                <div className="modal-content">
                    <ModalMenu toggleModal={toggleModal}/>
                </div>
            </div>

    );
};
export default ModalWindow