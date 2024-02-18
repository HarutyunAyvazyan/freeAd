import { useState } from "react";
import ModalWindow from "../../modalWindow";
import "./style.css"


const AllCategoryButton = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div >
            <button onClick={toggleModal} className="allCategoruButton">bolor bajinner@</button>
            <ModalWindow isOpen={isOpen} toggleModal={toggleModal} />
        </div>
    );
}


export default AllCategoryButton