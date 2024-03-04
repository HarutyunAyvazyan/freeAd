import { IoIosExit } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { BsEnvelope } from "react-icons/bs";
import { MdAnnouncement } from "react-icons/md";



import "./style.css"
import { Link } from "react-router-dom";


const UserMenuDropDown = ({ isOpen, toogleModal }) => {
    return (
        <div className="userMenuDropDown" style={isOpen ? { display: "flex" } : { display: "none" }}>
            <div className="userMenuDropDownDiv">
                <Link to={"announcementUserPage"}><button className="userMenuDropDownButton"><MdAnnouncement className="userMenuDropDownButtonIcon" /><span className="userMenuDropDownText">im Haytararutyunner@</span></button></Link>
                <button className="userMenuDropDownButton"><FaCircleUser className="userMenuDropDownButtonIcon" /><span className="userMenuDropDownText">im ej@</span></button>
                <button className="userMenuDropDownButton"><BsBell className="userMenuDropDownButtonIcon" /><span className="userMenuDropDownText">canucumner</span></button>
                <button className="userMenuDropDownButton"><BsEnvelope className="userMenuDropDownButtonIcon" /><span className="userMenuDropDownText">haxordagrutyunner</span></button>
                <Link to={"settingsUserPage"}><button className="userMenuDropDownButton"><FiSettings className="userMenuDropDownButtonIcon" /><span className="userMenuDropDownText">kargavorumner</span></button> </Link>
                <div className="exitButton">
                    <button className="userMenuDropDownButton"><IoIosExit className="userMenuDropDownButtonIcon" /><span className="userMenuDropDownText">elq</span></button>
                </div>
            </div>

        </div>
    )

}

export default UserMenuDropDown