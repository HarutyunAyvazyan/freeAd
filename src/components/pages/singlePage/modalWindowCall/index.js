import { useRef } from "react";

import { SlClose } from "react-icons/sl";

import { useDispatch } from "react-redux";
import { toggleModalCallClose } from "../../../../store/featueres/modalCallUser";


import "./style.css";
import useHandleClickOutside from "../../../../hooks/useHandleClickOutside";


const ModalWindowCall = ({ user, isOpenCall }) => {
    const dispatch = useDispatch();
    const modalRef = useRef(null);

    const handleClose = () => dispatch(toggleModalCallClose());
    useHandleClickOutside(modalRef, () => handleClose());

    return isOpenCall && (
        <div className="modalWindowCall">
            <div ref={modalRef} className="modalWindowCallContent">
                <h2>{user.firstName}</h2>
                <h4>{user.phone}</h4>
                <SlClose className="modalWindowCallClose" onClick={handleClose} />
            </div>
        </div>
    );
};

export default ModalWindowCall;