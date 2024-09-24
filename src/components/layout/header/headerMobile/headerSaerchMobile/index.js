import { AiOutlineMenu } from "react-icons/ai";
import { BiLogoShopify } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

// import Logo from "../headerSearch/logo"
import Signin from "../../../../pages/signin";
import "./style.css"
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import ModalWindowMobile from "../modalWindowMobile";
import SearchInput from "../../headerWeb/headerSearch/searchInput";
import SearchBar from "../../headerWeb/headerSearch/searchInput/searchBar";
import SearchResults from "../../headerWeb/headerSearch/searchInput/searchResults";
import useHandleClickOutside from "../../../../../hooks/useHandleClickOutside";
// import ModalMenuMobile from "../modalMenuMobile";
// import ModalWindow from "../modalWindow";



const HeaderSearchMobile = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleModalMobile = () => {
    //     setIsOpen(!isOpen);
    //     console.log(isOpen,"is")
    // };

    const [openModal, setOpenModal] = useState(false)
    const componentRef = useRef();
    

    useHandleClickOutside(componentRef, () => {
        setOpenModal(false);
    });
    return (
        <div className="headerSearchMobileContainer">
            <div className={openModal ? "headerSearchMobileActive" : "headerSearchMobile"}>
                {!openModal && 
                 <Link to="/" className="Logo">
                 <BiLogoShopify className="logoImage" />
             </Link>}
               
                <SearchInput
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    componentRef={componentRef}
                />
                {
                    openModal &&
                     <div className="headerSearchCancell">
                       Отмена 
                    </div>
                }
                {/* <input placeholder="sayti anun"
                className="headerSearchMobileInput" /> */}
                {/* <Link to={"menuMobile"} >
                <AiOutlineMenu
                    style={{
                        fontSize: "24px",
                        color: "white"
                    }}
                />
            </Link> */}

                {/* <button  className="headerSearchMobileButton">signin</button> */}
            </div>
            {/* <ModalWindowMobile isOpen={isOpen} toggleModal={toggleModalMobile} />  */}
        </div>


    )
}

export default HeaderSearchMobile