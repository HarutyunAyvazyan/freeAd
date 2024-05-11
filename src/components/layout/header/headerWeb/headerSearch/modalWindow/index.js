
import React, { useEffect, useState } from 'react';
// import "../../../../globalCss/style.css"
import './style.css';
import ModalMenu from '../../menuWeb';
// import ModalMenuMobile from '../modalMenuMobile';

const ModalWindow = ({ isOpen, toggleModal }) => {
    // const screenWidth =`${window.innerWidth}`
    const [enter, setEnter] = useState(false)
    // const [leave,setLeave] = useState(false)

    const handleMouseEnterModal = () => {
        setEnter(!enter)
        console.log("true")
    }
    const handleMouseLeaveModal = () => {
        setEnter(!enter)
        console.log("false")

    }

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`} onClick={!enter ? toggleModal : null} >
            <div className="modal-content">
                <ModalMenu
                    toggleModal={toggleModal}
                    handleMouseEnterModal={handleMouseEnterModal}
                    handleMouseLeaveModal={handleMouseLeaveModal}
                    enter={enter}
                />
            </div>
        </div>

    );
};
export default ModalWindow