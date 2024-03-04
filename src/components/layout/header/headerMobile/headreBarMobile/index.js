import { BiHome } from "react-icons/bi";
import { RiMenuFill } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgMenuRound } from "react-icons/cg";
import { MdAnnouncement } from "react-icons/md";


// import ModalMenuSearchMobile from "../../modalMenuSearchMobile";
import "./style.css"
import HeaderSearchMobile from "../headerSaerchMobile";



const HeaderBarMobile = ({innerWidth}) => {
    return (
        <div >
            <div className="HeaderBarMobile">
                <div className="HeaderBarMobileItem">
                    <Link className="HeaderBarMobileItem">
                        <CgMenuRound style={{
                            fontSize: "30px",
                            color: "blue"
                        }} />
                    </Link>
                </div>

                <Link to="/">
                    <div className="HeaderBarMobileItem">
                        <BiHome style={{
                            fontSize: "18px",
                            color: "blue"
                        }} />
                        <span >Home</span>
                    </div>
                </Link>
                <Link to="about">
                    <div className="HeaderBarMobileItem">
                        <BsInfoCircleFill style={{
                            fontSize: "18px",
                            color: "blue"
                        }} />
                        <span>About us</span>
                    </div>
                </Link>

                <Link to="basket">
                    <div className="HeaderBarMobileItem">
                        <SlBasket 
                        style={{
                            fontSize: "18px",
                            color: "blue"
                        }} />
                        <span>Zmbyux</span>
                    </div>
                </Link>
                <Link to="announcement">
                    <div className="HeaderBarMobileItem">
                        <MdAnnouncement style={{
                            fontSize: "18px",
                            color: "green"
                        }} />
                        <span>Announcement</span>
                    </div>
                </Link>
                <Link to="signin">
                    <div className="HeaderBarMobileItem">
                        <FaUser style={{
                            fontSize: "18px",
                            color: "blue"
                        }} />
                        <span>User</span>
                    </div>
                </Link>
            </div>
            <HeaderSearchMobile innerWidth={innerWidth}/>
        </div>

    )
}

export default HeaderBarMobile