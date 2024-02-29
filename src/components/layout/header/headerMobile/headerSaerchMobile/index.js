import { AiOutlineMenu } from "react-icons/ai";
import { BiLogoShopify } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

// import Logo from "../headerSearch/logo"
import Signin from "../../../../pages/signin";
import "./style.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalWindowMobile from "../modalWindowMobile";
// import ModalMenuMobile from "../modalMenuMobile";
// import ModalWindow from "../modalWindow";



const HeaderSearchMobile = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleModalMobile = () => {
    //     setIsOpen(!isOpen);
    //     console.log(isOpen,"is")
    // };


    return (
        <div>
  <div className="headerSearchMobile">
            <Link to="/"> <BiLogoShopify className="logoImage" /> </Link>
            <input placeholder="sayti anun"
                className="headerSearchMobileInput" />
            <Link to={"menuCategoriesMobile"} >
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