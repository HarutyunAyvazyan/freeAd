
import { SlClose } from "react-icons/sl";

import "./style.css"
import { useState } from "react";

const ModalWindowCall = ({ user ,isOpenCall,handleToggleModalCall}) => {
    const [enter,setEnter] = useState(false)
    const handleMouseLeave = () => {
        setEnter(!enter)
        console.log(enter,"sss")
    }

    const handleMouseEnter =() => {
        setEnter(!enter)
        console.log(enter,"aaa")
    }
    return (
        <div className="modalWindowCall" style={isOpenCall ? {display:"flex"}:{display:"none"}} onClick={!enter?handleToggleModalCall:null }>
            <div className="modalWindowCallContent" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <h2>{user.firstName}</h2>
                <h4>{user.phone}</h4>
                <SlClose className="modalWindowCallClose" onClick={handleToggleModalCall}/>
            </div>
        </div>
    )
}

export default ModalWindowCall