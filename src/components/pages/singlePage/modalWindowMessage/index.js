import { useRef } from "react";

import { SlClose } from "react-icons/sl";

import { useDispatch } from "react-redux";
import { toggleModalMessageClose } from "../../../../store/featueres/modalCallUser";

import useClickOutside from "../../../../hooks/useClickOutside";

import "./style.css";


const ModalWindowMessage = ({ user, isOpenMessage }) => {
    const dispatch = useDispatch();
    const modalRef = useRef(null);

    const handleClose = () => dispatch(toggleModalMessageClose());
    useClickOutside(modalRef, () => handleClose());


    return isOpenMessage && (
        <div className="modalWindowMessage">
            <div ref={modalRef} className="modalWindowMessageContent">
                <h2>{user.firstName}</h2>
                <textarea className="modalWindowMessageInput" />
                <SlClose className="modalWindowMessageClose" onClick={handleClose} />
            </div>
        </div>
    )
};

export default ModalWindowMessage;