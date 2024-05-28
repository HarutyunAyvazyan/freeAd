import { AiOutlineMenu } from "react-icons/ai";
import { BiLogoShopify } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

// import Logo from "../headerSearch/logo"
import Signin from "../../../../pages/signin";
import "./style.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalWindowMobile from "../modalWindowMobile";
import SearchInput from "../../headerWeb/headerSearch/searchInput";
// import ModalMenuMobile from "../modalMenuMobile";
// import ModalWindow from "../modalWindow";



const HeaderSearchMobile = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleModalMobile = () => {
    //     setIsOpen(!isOpen);
    //     console.log(isOpen,"is")
    // };


    return (
        <div className="headerSearchMobileContainer">
  <div className="headerSearchMobile">
            <Link to="/"> <BiLogoShopify className="logoImage" /> </Link>
            <SearchInput/>
            {/* <input placeholder="sayti anun"
                className="headerSearchMobileInput" /> */}
            <Link to={"menuMobile"} >
                <AiOutlineMenu
                    style={{
                        fontSize: "24px",
                        color: "white"
                    }}
                />
            </Link>
            <Link to="signin" >
                <FaUser style={{ color: "white" }} />
            </Link>
            {/* <button  className="headerSearchMobileButton">signin</button> */}
        </div>
      {/* <ModalWindowMobile isOpen={isOpen} toggleModal={toggleModalMobile} />  */}
        </div>
      

    )
}

export default HeaderSearchMobile