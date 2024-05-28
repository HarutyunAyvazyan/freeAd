import { useEffect, useRef, useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiMenu } from "react-icons/bi";
import { RiMenuFill } from "react-icons/ri";


import { CiMenuBurger } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";


import { ImSearch } from "react-icons/im";

import "./style.css"
import ModalWindow from "../modalWindow";
import useHandleClickOutside from "../../../../../../hooks/useHandleClickOutside";


const AllCategoryButton = () => {
    const [overflowBody, setOverflowBody] = useState("auto")
    const modalRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
        isOpen ? setOverflowBody("auto") : setOverflowBody("hidden")
    };

    useHandleClickOutside(modalRef, () => {
    setIsOpen(false);
    setOverflowBody("auto");
    })

    useEffect(() => {
        document.body.style.overflow = overflowBody;
    }, [isOpen]);

    return (
        <div className="categoryButtonDiv" ref={modalRef}>
            <button onClick={toggleModal} className="allCategoruButton">
                <div>
                    <RiMenuFill style={{
                        fontSize: "20px",
                        color: "white"
                    }} />
                    <LuSearch style={{
                        fontSize: "20px",
                        color: "white"
                    }} />
                </div>
                <p className="allCategoruButtonText">
                Bajinner
                </p>
               
            </button>
            <ModalWindow isOpen={isOpen} toggleModal={toggleModal} />
        </div>
    );
}


export default AllCategoryButton