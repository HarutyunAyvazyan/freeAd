


import { SlClose } from "react-icons/sl";

import "./style.css"
import { useState } from "react";

const ModalWindowMessage = ({ dataUser ,isOpenMessage,toogleModalMessage}) => {
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
        <div className="modalWindowMessage" style={isOpenMessage ? {display:"flex"}:{display:"none"}} onClick={!enter?toogleModalMessage:null }>
            <div className="modalWindowMessageContent" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <h2>{dataUser.name}</h2>
                <textarea className="modalWindowMessageInput"/>
                <SlClose className="modalWindowMessageClose" onClick={toogleModalMessage}/>
            </div>
        </div>
    )
}

export default ModalWindowMessage