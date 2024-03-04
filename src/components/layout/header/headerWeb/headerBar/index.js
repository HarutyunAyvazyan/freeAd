import { Link } from "react-router-dom"
import { FaUser } from "react-icons/fa";

import "./style.css"
import HeaderSearch from "../headerSearch"
import UserMenuDropDown from "../../../../pages/userPage/userMenuDropDown";
import { useState } from "react";



const HeaderBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
        console.log(isOpen,"enter")
    };
    const handleMouseEnter = () => {
        toggleModal();
        console.log(isOpen,"enter")

    }

    const handleMouseLeave = () => {
        toggleModal();
        console.log(isOpen,"leave")

    }
    return (
        <header className="layout">
            <div className="headerLinksDiv">
                <div className="container">
                    <div className="headerLinks">
                        <div className="navbarLinks">
                            <Link to="/" className="navbarLink">Home</Link>
                            <Link to="/about" className="navbarLink">About Us</Link>
                            <Link to="/top" className="navbarLink">Top</Link>
                            <Link to="/forBusiness" className="navbarLink">For Business</Link>

                            <Link to="/forYou" className="navbarLink">For You</Link>
                        </div>
                        <div className="registrationLinks">
                            <div className="registrationSigninSignup">
                                <Link to="/signin" className="navbarLink">Signin</Link>
                                <Link to="/signup" className="navbarLink">Signup</Link>
                                {/* <Link to="/userPage" className="navbarLink"> */}
                                <div className="user" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <FaUser className="userIcon" />

                                    <UserMenuDropDown isOpen={isOpen} toggleModal={toggleModal} />
                                </div>
                                {/* </Link> */}
                            </div>
                            <Link to="/announcement" className="navbarLink">Announcement</Link>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="headerSearchDiv"> */}
            <HeaderSearch />
            {/* </div> */}

        </header>
    )
}

export default HeaderBar