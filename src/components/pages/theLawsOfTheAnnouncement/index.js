import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom"
import pageName from "../../../constants/pageName";


const TheLawsOfTheAnnouncement = () => {
  
    
    return (
        <div className="container">
            <div style={{marginTop:"300px"}}>
            <Link to={pageName.home}>
            <button>chexarkel</button>
            </Link>
            <Link to={pageName.addAnnouncement}>
            <button>hamadzayn em</button>
            </Link>
            </div>
     
    
    </div>

    )
}

export default TheLawsOfTheAnnouncement