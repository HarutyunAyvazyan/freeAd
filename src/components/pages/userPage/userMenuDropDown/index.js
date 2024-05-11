import { IoIosExit } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { BsEnvelope } from "react-icons/bs";
import { MdAnnouncement } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { MdRateReview } from "react-icons/md";



import "./style.css"
import { Link, useNavigate } from "react-router-dom";
import pageName from "../../../../constants/pageName";
import { useEffect, useRef } from "react";


const UserMenuDropDown = ({ isOpen, toogleModal,setIsOpen }) => {
    const componentRef = useRef()
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("user")
        navigate("/")
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                setIsOpen(false);
                // setOverflowBody("auto")
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);

        };
    }, []);
    return (
        <div className="userMenuDropDown" style={isOpen ? { display: "flex" } : { display: "none" }} ref={componentRef}>
            <div className="userMenuDropDownDiv">
                <Link to={`${pageName.profile}/${pageName.profileWallet}`}>
                    <button className="userMenuDropDownButton">
                        <CiWallet className="userMenuDropDownButtonIcon" />
                        <span className="userMenuDropDownText">im Drapanak@@</span>
                    </button>
                </Link>
                <Link to={`${pageName.profile}/${pageName.profileAnnouncement}`}>
                    <button className="userMenuDropDownButton">
                        <MdAnnouncement className="userMenuDropDownButtonIcon" />
                        <span className="userMenuDropDownText">im Haytararutyunner@</span>
                    </button>
                </Link>
                <Link to={`${pageName.profile}/${pageName.profileNotifications}`}>
                    <button className="userMenuDropDownButton">
                        <BsBell className="userMenuDropDownButtonIcon" />
                        <span className="userMenuDropDownText">canucumner</span>
                    </button>
                </Link>
                <Link to={`${pageName.profile}/${pageName.profileMessage}`}>
                    <button className="userMenuDropDownButton">
                        <BsEnvelope className="userMenuDropDownButtonIcon" />
                        <span className="userMenuDropDownText">haxordagrutyunner</span>
                    </button>
                </Link>
                <Link to={`${pageName.profile}/${pageName.profileSettings}`}>
                    <button className="userMenuDropDownButton">
                        <FiSettings className="userMenuDropDownButtonIcon" />
                        <span className="userMenuDropDownText">kargavorumner</span>
                    </button>
                </Link>
                <Link to={`${pageName.profile}/${pageName.profileReviews}`}>
                    <button className="userMenuDropDownButton">
                        <MdRateReview className="userMenuDropDownButtonIcon" />
                        <span className="userMenuDropDownText">meknabanutyunner</span>
                    </button>
                </Link>
                <div className="exitButton">
                    <button className="userMenuDropDownButton" onClick={logout}>
                        <IoIosExit className="userMenuDropDownButtonIcon" />
                        <span className="userMenuDropDownText">elq</span>
                    </button>
                </div>
            </div>

        </div>
    )

}

export default UserMenuDropDown