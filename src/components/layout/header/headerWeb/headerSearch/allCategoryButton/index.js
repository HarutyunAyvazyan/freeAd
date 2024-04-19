import { useEffect, useRef, useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiMenu } from "react-icons/bi";
import { RiMenuFill } from "react-icons/ri";


import { CiMenuBurger } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";


import { ImSearch } from "react-icons/im";

import "./style.css"
import ModalWindow from "../modalWindow";


const AllCategoryButton = () => {
    const [overflowBody, setOverflowBody] = useState("auto")
    const componentRef = useRef();

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
        isOpen ? setOverflowBody("auto") : setOverflowBody("hidden")
    };



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                setIsOpen(false);
                setOverflowBody("auto")
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);

        };
    }, []);




    useEffect(() => {
        document.body.style.overflow = overflowBody;
        // console.log(document.body.root)
    }, [isOpen]);

    return (
        <div className="categoryButtonDiv" ref={componentRef}>
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
                Bajinner

            </button>
            <ModalWindow isOpen={isOpen} toggleModal={toggleModal} />
        </div>
    );
}


export default AllCategoryButton